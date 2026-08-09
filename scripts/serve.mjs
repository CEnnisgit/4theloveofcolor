/**
 * Serve the prerendered build the way Netlify will.
 *
 * `npm run dev` serves the app as a live SPA and never touches the prerendered
 * files, so it cannot show you what Google is actually served. This does:
 * static files first, directory index.html for clean URLs, `_redirects`
 * honoured, and a real 404 status for anything unmatched.
 *
 * Usage:  npm run build && npm run serve     (then open http://localhost:4173)
 *
 * Zero dependencies on purpose — nothing to install, and nothing that can drift
 * out of date.
 */

import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const port = Number(process.env.PORT) || 4173;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

/** Parse public/_redirects into [{from, to, status}], ignoring comments. */
async function loadRedirects() {
  try {
    const raw = await readFile(join(dist, "_redirects"), "utf8");
    return raw
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .map((line) => {
        const [from, to, code = "301"] = line.split(/\s+/);
        return { from, to, status: Number(code.replace("!", "")) || 301 };
      })
      .filter((r) => r.from && r.to);
  } catch {
    return [];
  }
}

const redirects = await loadRedirects();

async function resolveFile(pathname) {
  // Block traversal above dist.
  const safe = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const target = join(dist, safe);
  if (!target.startsWith(dist)) return null;

  try {
    const info = await stat(target);
    if (info.isFile()) return target;
    if (info.isDirectory()) {
      const index = join(target, "index.html");
      const indexInfo = await stat(index);
      if (indexInfo.isFile()) return index;
    }
  } catch {
    /* fall through */
  }
  return null;
}

const server = createServer(async (req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);

  const redirect = redirects.find((r) => r.from === pathname);
  if (redirect) {
    res.writeHead(redirect.status, { Location: redirect.to });
    res.end();
    console.log(`${redirect.status} ${pathname} -> ${redirect.to}`);
    return;
  }

  const file = await resolveFile(pathname);
  if (file) {
    res.writeHead(200, {
      "Content-Type": TYPES[extname(file).toLowerCase()] ?? "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    createReadStream(file).pipe(res);
    return;
  }

  // Netlify serves 404.html with a real 404 for anything unmatched. So do we —
  // returning 200 here would hide exactly the soft-404 problem this build is
  // set up to avoid.
  try {
    const body = await readFile(join(dist, "404.html"));
    res.writeHead(404, { "Content-Type": TYPES[".html"] });
    res.end(body);
  } catch {
    res.writeHead(404, { "Content-Type": TYPES[".txt"] });
    res.end("404 — and no 404.html in dist. Run `npm run build` first.");
  }
  console.log(`404 ${pathname}`);
});

server.listen(port, () => {
  console.log(`\n  Serving dist/ exactly as Netlify would.`);
  console.log(`  http://localhost:${port}\n`);
  console.log(`  ${redirects.length} redirect rule(s) loaded from _redirects.`);
  console.log(`  Unmatched URLs return a real 404. Ctrl+C to stop.\n`);
});
