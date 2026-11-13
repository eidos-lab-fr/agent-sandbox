# agent-sandbox

A sandbox repository used to test [agent-platform](https://github.com/eidos-lab-fr/agent-platform), the agent-driven development setup of Eidos Lab, before a change reaches real projects.

The app itself is deliberately tiny (a React counter). What matters here is the workflow around it:

1. A feature is specified in `specs/NNN-name/`.
2. An issue labelled `ready-for-dev` starts a dev agent, which writes tests and code and opens a pull request.
3. Three review agents check the pull request: spec, security, tests.
4. A human merges.

Only allow-listed maintainers can trigger an agent. Issues, comments and pull requests from other accounts never start one.

## Stack

React 19 · TypeScript · Vite · Vitest + Testing Library · oxlint

## Commands

```bash
npm install
npm run dev
npm run lint
npm test
npm run build
```

## License

[MIT](LICENSE) © 2026 Eidos Lab
