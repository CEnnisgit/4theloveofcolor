import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

const container = document.getElementById("root")!;

const tree = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Production builds are prerendered, so the container already holds this
// route's markup and we attach to it instead of throwing it away and
// repainting. `vite dev` serves the bare shell, hence the fallback. The flag
// is stamped by scripts/prerender.mjs — testing for child nodes instead would
// misfire on any placeholder markup left inside the container.
if (container.dataset.prerendered === "true") {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
