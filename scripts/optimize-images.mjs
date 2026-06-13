import sharp from "sharp";
import { readdir, mkdir, copyFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const IMG_DIR = path.resolve("public/images");
const ORIG_DIR = path.join(IMG_DIR, "original");
const MAX_WIDTH = 1600;
const JPEG_QUALITY = 80;

async function run() {
  if (!existsSync(ORIG_DIR)) await mkdir(ORIG_DIR, { recursive: true });

  const files = (await readdir(IMG_DIR)).filter((f) =>
    /\.(jpe?g|png)$/i.test(f)
  );

  for (const file of files) {
    const src = path.join(IMG_DIR, file);
    const backup = path.join(ORIG_DIR, file);

    // Back up original once, then always optimize from the backup (idempotent).
    if (!existsSync(backup)) await copyFile(src, backup);

    const before = (await stat(backup)).size;
    const isLogo = /logo/i.test(file);
    const img = sharp(backup).rotate();
    const meta = await img.metadata();
    const targetW = Math.min(meta.width ?? MAX_WIDTH, isLogo ? 600 : MAX_WIDTH);

    let pipeline = img.resize({ width: targetW, withoutEnlargement: true });
    if (/\.png$/i.test(file)) {
      pipeline = pipeline.png({ quality: 82, compressionLevel: 9, palette: true });
    } else {
      pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
    }

    const buf = await pipeline.toBuffer();
    await sharp(buf).toFile(src);
    const after = buf.length;

    // Emit a modern WebP variant next to the original for <picture> sources.
    const webpPath = src.replace(/\.(jpe?g|png)$/i, ".webp");
    const webpBuf = await sharp(backup)
      .rotate()
      .resize({ width: targetW, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toBuffer();
    await sharp(webpBuf).toFile(webpPath);

    console.log(
      `${file.padEnd(28)} ${(before / 1e6).toFixed(2)}MB -> ${(after / 1e6).toFixed(2)}MB jpg / ${(webpBuf.length / 1e6).toFixed(2)}MB webp  (${Math.round((1 - after / before) * 100)}% smaller)`
    );
  }
  console.log("\nDone. Originals preserved in public/images/original/");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
