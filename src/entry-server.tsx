import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

// Re-exported so the prerender script reads the route table through this same
// bundle, rather than needing a second SSR build or a duplicate list.
export { allRoutes, indexableRoutes } from "./routes";

/**
 * Server entry, used only by `scripts/prerender.mjs` at build time.
 *
 * There is no server at runtime — this renders each route to a string during
 * the build so Netlify can serve plain static HTML. Every hook in the app is
 * effect-based (scroll reveal, review fetching, head updates), so none of them
 * run here and the output is the full page content with no client-only state
 * baked in. That keeps the markup identical to React's first client render,
 * which is what hydration requires.
 */
export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
