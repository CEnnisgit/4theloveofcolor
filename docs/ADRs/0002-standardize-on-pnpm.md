# 0002. Standardize on pnpm

## Status
Accepted (2026-08-11)

## Context and Problem Statement
The legacy website utilized `npm` as its package manager. Recently, `npm` has been the target of an extreme amount of security threats and supply-chain attacks. Coupled with the migration to a monorepo structure (with a Next.js `apps/website`), we needed to choose a package manager capable of elegantly handling a monorepo workspace environment, ensuring fast installations, mitigating the risk of phantom dependencies, and providing a stronger security posture.

## Considered Options
*   **npm:** The default, but plagued by recent security threats and lacks robust, fast workspace hoisting out of the box compared to modern alternatives.
*   **yarn:** Good workspace support, but v1 is legacy and modern yarn (Berry) introduces steep learning curves with Plug'n'Play (PnP).
*   **pnpm:** Strict dependency isolation (no phantom dependencies), incredibly fast via hard links, and excellent built-in workspace support.

## Decision Outcome
Chosen option: **pnpm**. 
We standardized strictly on `pnpm` across the entire repository to mitigate the security risks associated with `npm` and to gain the speed and strict isolation benefits required for a clean monorepo. The legacy `npm` sandbox (`apps/old-website`) was explicitly isolated and added to `.gitignore` to prevent any conflation.

## Consequences
*   **Good, because** it drastically reduces our exposure to typical `npm` supply-chain vulnerabilities via strict node_modules architecture.
*   **Good, because** install times are significantly faster and disk space is saved via hard-linking.
*   **Good, because** monorepo workspace management is handled natively via `pnpm-workspace.yaml`.
*   **Bad, because** it introduces a slight learning curve for developers whose muscle memory is tied to `npm install`.
