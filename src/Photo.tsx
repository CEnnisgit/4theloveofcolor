type PhotoProps = {
  /** Path to the JPEG/PNG, e.g. "/images/proj-exterior-modern.jpg" */
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  /** true = eager + high priority (for the hero/LCP image) */
  priority?: boolean;
};

/**
 * Renders a <picture> with a WebP source and the original as fallback.
 * The matching .webp file is produced by scripts/optimize-images.mjs.
 * `picture { display: contents }` (in styles.css) keeps existing img CSS intact.
 */
export function Photo({ src, alt, className, width, height, priority }: PhotoProps) {
  const webp = src.replace(/\.(jpe?g|png)$/i, ".webp");
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        // Lowercase on purpose. React 18's server renderer does not recognise
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
