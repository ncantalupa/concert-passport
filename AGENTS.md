# Repository Guidelines

## Project Structure & Module Organization

Concert Passport is a dependency-free static site served directly from the repository root.

- `index.html` contains page metadata, the `#app` mount point, and loads the site assets.
- `app.js` owns the artist and concert data, derived event data, filtering state, rendering, tab behavior, and event handlers. It renders the page into `#app`; the page body is intentionally otherwise minimal.
- `styles.css` defines the visual system, component states, and responsive layouts.
- `og.png` and `favicon.svg` are the social-sharing and favicon assets referenced by `index.html`.
- `README.md` documents GitHub Pages deployment.

Keep paths relative so the site continues to work from GitHub Pages. If the project grows, group new static images under `assets/` and update references accordingly.

## Concert Data

`app.js` has two parallel source collections:

- `artists` supplies each artist's display name, broad genre, tags, and initials.
- `concerts` supplies the matching artist's attendee code (`N`, `L`, or `B`), remembered details, confirmed date/location details, and optional research metadata.

Every artist must have one or more matching concert records, with the artist name matching exactly. Keep `artists` alphabetical; each additional appearance belongs in `concerts` and does not need a duplicate artist entry. The app derives grouped `concertsByArtist` and per-artist attendance facts from `concerts`, so do not add a separate attendance collection.

Concert-night cards and the timeline group artist appearances when their date, venue, city, and state/country match. Add all artists from the same bill with the same confirmed location fields; use `remembered` as a fallback when an exact date or confirmed detail is unavailable. Dates use `YYYY-MM-DD` so chronological sorting remains reliable.

The rendered markup is assembled with template strings and `innerHTML`. Treat the curated local data as trusted; escape or safely render any future user-provided or remote text before inserting it into the DOM.

## Build, Test, and Development Commands

There is no package manager, compilation step, or dependency installation. Open `index.html` directly for a quick check, or run a local HTTP server for behavior closer to production:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. Use `git diff --check` before committing to catch whitespace errors. Publishing occurs automatically through GitHub Pages after changes reach the configured branch.

## Coding Style & Naming Conventions

Use two-space indentation in HTML and JavaScript. Follow the existing JavaScript style: `const` by default, `let` only for mutable UI state, camelCase identifiers, double-quoted strings, semicolons, and small focused functions. Use kebab-case for CSS classes and custom properties (for example, `.artist-card` and `--accent`). Preserve the compact CSS convention unless reformatting the whole stylesheet in a dedicated change. No formatter or linter is currently configured.

Keep artist records aligned across `artists` and `concerts`; every artist name must have at least one exact match in `concerts`, while an artist may have multiple concert records.

## Testing Guidelines

Automated tests and coverage thresholds are not configured. Run `node --check app.js`, then manually verify the tab keyboard controls, artist search, genre and attendee filters, attendee-card navigation, repeated-artist counts and latest-concert details, concert year/location/venue/sort filters, clear-filters state, empty results, and timeline updates. Check responsive layouts near the existing 980 px, 720 px, and 460 px breakpoints. Confirm the browser console remains free of errors.

## Commit & Pull Request Guidelines

History uses short, imperative summaries such as `Add original files`. Keep commits focused and write subjects in that style. Pull requests should explain the user-visible change, list manual checks performed, and include screenshots for layout or styling updates. Link relevant issues when available and call out changes to artist or concert data explicitly.
