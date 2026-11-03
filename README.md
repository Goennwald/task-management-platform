# Task Management Platform

A task management app similar to Jira. See [docs/mvp.md](docs/mvp.md) for the scope and [docs/tech-stack.md](docs/tech-stack.md) for the stack.

## Getting started

```bash
nvm use
npm install
cp .env.example .env
npm run db:up
npm run dev
```

The app runs at `http://localhost:5173`.

To run the end-to-end tests, install the Playwright browser once with `npx playwright install chromium`, then run `npm run test:e2e`.
