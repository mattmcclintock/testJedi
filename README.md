# Tiny JS App

A super small JavaScript app to help you generate GitHub repo activity (commits, PRs, CI runs).

## What it is
- Vanilla JS + Vite dev server
- One tiny feature: a counter with a couple of helper utilities
- Unit tests via Vitest
- GitHub Actions CI that runs lint + test on every push/PR

## Quick start
```bash
npm install
npm run dev
# open the URL printed by Vite (typically http://localhost:5173)
```

## Useful scripts
```bash
npm run test         # run unit tests
npm run coverage     # run tests with coverage
npm run lint         # eslint
npm run format       # prettier
npm run build        # production build
```

## Make easy commits
Try small changes like:
- Edit copy in `index.html`
- Tweak styles in `src/styles.css`
- Modify logic in `src/counter.js` or `src/utils.js`
- Add a new test in `tests/`

Then open a PR to see CI run and generate more GitHub data.
