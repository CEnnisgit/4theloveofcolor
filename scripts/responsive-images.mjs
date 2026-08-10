/**
 * Generate smaller width variants of each project photo for `srcset`.
 *
 * The photos are 1600px wide and get displayed at around 577px in the gallery,
 * so every visitor downloads roughly three times the pixels they can see. The
 * projects page alone was shipping 2.4MB of images. Core Web Vitals is a
 * ranking signal and this is the single heaviest thing on the site.
 *
 * Deliberately additive: this only writes new `-<width>.webp` files and never
 * touches the existing .jpg or .webp. `optimize-images.mjs` already re-encodes
 * the base images, and re-running that over files it has already compressed
 * would stack lossy passes on top of each other. Downscaling from the existing
 * 1600px copy is safe — shrinking hides compression artefacts rather than
 * compounding them.
 *
 * Safe to re-run: existing variants are skipped unless --force is passed.
 *
 * Usage:  npm run responsive-images [-- --force]
 */

import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const IMG_DIR = path.resolve("public/images");

/**
 * Widths to emit. The 1600px original stays as the top of the srcset, so it is
 * not regenerated here. 480 covers phones, 768 covers the single-column
 * breakpoint, 1200 covers the two-column desktop gallery on a retina screen.
 */
const WIDTHS = [480, 768, 1200];
const WEBP_QUALITY = 78;
const force = process.argv.includes("--force");

async function run() {
  const files = (await readdir(IMG_DIR)).filter(
    (f) => /\.(jpe?g|png)$/i.test(f) && !/logo/i.test(f),
  );

  if (files.length === 0) {
    console.log("No source images found in public/images.");
    return;
  }

  let written = 0;
  let skipped = 0;
  let bytesAdded = 0;

  for (const file of files) {
    const src = path.join(IMG_DIR, file);
    const base = file.replace(/\.(jpe?g|png)$/i, "");
    const meta = await sharp(src).metadata();
    const srcWidth = meta.width ?? 0;
    const parts = [];

    for (const width of WIDTHS) {
      // Never upscale — a variant wider than the source is pure waste.
      if (width >= srcWidth) continue;

      const outPath = path.join(IMG_DIR, `${base}-${width}.webp`);
      if (existsSync(outPath) && !force) {
        skipped += 1;
        parts.push(`${width}=skip`);
        continue;
      }

      const buf = await sharp(src)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toBuffer();

      await sharp(buf).toFile(outPath);
      written += 1;
      bytesAdded += buf.length;
      parts.push(`${width}=${Math.round(buf.length / 1024)}kb`);
    }

    const originalKb = Math.round((await stat(src)).size / 1024);
    console.log(`${file.padEnd(34)} ${String(srcWidth).padStart(4)}px ${String(originalKb).padStart(4)}kb  ->  ${parts.join("  ")}`);
  }

  console.log(
    `\n${written} variant(s) written, ${skipped} already present. ` +
      `${Math.round(bytesAdded / 1024)}kb added to the repo, and far more than that ` +
      `saved on every page view.`,
  );
  if (skipped && !force) console.log("Pass --force to regenerate existing variants.");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
