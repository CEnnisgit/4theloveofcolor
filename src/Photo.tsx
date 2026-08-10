/** Widths emitted by scripts/responsive-images.mjs, plus the 1600px original. */
const VARIANT_WIDTHS = [480, 768, 1200];
const ORIGINAL_WIDTH = 1600;

type PhotoProps = {
  /** Path to the JPEG/PNG, e.g. "/images/proj-exterior-modern.jpg" */
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  /** true = eager + high priority (for the hero/LCP image) */
  priority?: boolean;
  /**
   * How wide this image renders, so the browser can pick the smallest file
   * that will do. Get this roughly right and it saves hundreds of kilobytes;
   * get it wrong and the browser over-downloads exactly as it did before.
   * The default suits a card in a two-column grid.
   */
  sizes?: string;
};

/**
 * Renders a <picture> with a responsive WebP srcset and the JPEG as fallback.
 *
 * The variants come from scripts/responsive-images.mjs. Before it existed every
 * visitor got the 1600px file no matter how small it was displayed — the
 * projects page shipped 2.4MB of images to fill slots under 600px wide.
 *
 * Logos are skipped: the script does not generate variants for them, so
 * pointing a srcset at files that don't exist would 404.
 */
export function Photo({
  src,
  alt,
  className,
  width,
  height,
  priority,
  sizes = "(max-width: 860px) 100vw, 590px",
}: PhotoProps) {
  const base = src.replace(/\.(jpe?g|png)$/i, "");
  const webp = `${base}.webp`;
  const hasVariants = !/logo/i.test(src);

  const srcSet = hasVariants
    ? [
        ...VARIANT_WIDTHS.map((w) => `${base}-${w}.webp ${w}w`),
        `${webp} ${ORIGINAL_WIDTH}w`,
      ].join(", ")
    : webp;

  return (
    <picture>
      <source
        srcSet={srcSet}
        type="image/webp"
        {...(hasVariants ? { sizes } : {})}
      />
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        // Lowercase on purpose. React 18's server renderer does not recognize
        // the camelCase `fetchPriority` prop and drops it, which would strip
        // the LCP hint from the prerendered HTML — exactly the markup that
        // needs it — and then mismatch on hydration. The lowercase form is
        // passed through verbatim by both renderers.
        {...(priority ? { fetchpriority: "high" } : {})}
        decoding={priority ? "sync" : "async"}
      />
    </picture>
  );
}
