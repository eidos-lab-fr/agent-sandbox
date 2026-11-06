# agent-sandbox

Bac à sable pour tester l'écosystème de développement piloté par agents.

## Stack

React 19, TypeScript, Vite, Vitest + Testing Library (environnement jsdom), oxlint.

## Commandes

- Installer : `npm install`
- Lancer l'app : `npm run dev`
- Lint : `npm run lint`
- Tests : `npm test`
- Build : `npm run build`

Avant d'ouvrir une PR, lint, tests et build doivent passer.

## Organisation du code

- `src/` : code de l'app. Un composant par fichier.
- Les tests sont à côté du code testé : `Composant.test.tsx`.
- `specs/` : specs Spec Kit, une par fonctionnalité (`specs/NNN-nom/spec.md`, `plan.md`, `tasks.md`).
- `.github/agents/` : instructions des agents de dev et de review.

## Conventions

- Branches : `agent/<numéro du ticket>-<slug court>`.
- Commits : impératif, en français, une ligne courte (ex. « Ajoute le bouton de réinitialisation »).
- Chaque PR contient `Closes #<numéro>` et le chemin de la spec concernée.
- Chaque critère d'acceptation de la spec a au moins un test.

## Règles

- Si la spec est ambiguë ou contredit le code existant, arrête-toi : commente le ticket avec ta question et ajoute le label `needs-human`.
- Ne modifie pas `.github/` ni la config (`package.json`, `tsconfig*`, `vite.config.ts`) sans que le ticket le demande.
- N'ajoute pas de dépendance sans que le ticket le demande.
- Aucun secret dans le code.
