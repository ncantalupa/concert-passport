# Repository Guidelines

## Project Structure & Module Organization

Concert Passport is a dependency-free static site served directly from the repository root.

- `index.html` contains page metadata and loads the site assets.
- `app.js` owns the artist and attendance data, filtering state, rendering, and event handlers.
- `styles.css` defines the visual system, responsive layouts, and component states.
- `og.png` is the social-sharing preview image referenced by `index.html`.
- `README.md` documents GitHub Pages deployment.

Keep paths relative so the site continues to work from GitHub Pages. If the project grows, group new static images under `assets/` and update references accordingly.

## Build, Test, and Development Commands

There is no package manager, compilation step, or dependency installation. Open `index.html` directly for a quick check, or run a local HTTP server for behavior closer to production:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. Use `git diff --check` before committing to catch whitespace errors. Publishing occurs automatically through GitHub Pages after changes reach the configured branch.

## Coding Style & Naming Conventions

Use two-space indentation in HTML and JavaScript. Follow the existing JavaScript style: `const` by default, `let` only for mutable UI state, camelCase identifiers, double-quoted strings, semicolons, and small focused functions. Use kebab-case for CSS classes and custom properties (for example, `.artist-card` and `--accent`). Preserve the compact CSS convention unless reformatting the whole stylesheet in a dedicated change. No formatter or linter is currently configured.

Keep artist records aligned across `artists` and `attendance`; every artist name must match exactly in both collections.

## Testing Guidelines

Automated tests and coverage thresholds are not configured. Manually verify search, genre filters, attendee cards, empty results, and smooth scrolling. Check responsive layouts near the existing 980 px, 720 px, and 460 px breakpoints. Confirm the browser console remains free of errors.

## Commit & Pull Request Guidelines

History uses short, imperative summaries such as `Add original files`. Keep commits focused and write subjects in that style. Pull requests should explain the user-visible change, list manual checks performed, and include screenshots for layout or styling updates. Link relevant issues when available and call out changes to artist or attendance data explicitly.
