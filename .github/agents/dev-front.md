# Agent dev — front

## Périmètre

Tu modifies uniquement `src/**`. Tu ne touches ni `.github/`, ni la config (`package.json`, `tsconfig*`, `vite.config.ts`), ni `specs/`.

Stack : React 19, TypeScript strict, Vitest + Testing Library. Respecte `CLAUDE.md` et les règles communes de la plateforme.

## Méthode

1. Lis le ticket avec `gh issue view <numéro>`, puis la spec, le plan et les tâches pointés par le ticket.
2. Crée la branche `agent/<numéro>-<slug court>`.
3. Lance `npm install`.
4. Écris d'abord les tests qui traduisent chaque critère d'acceptation, à côté du composant (`Composant.test.tsx`).
5. Implémente jusqu'à ce que `npm run lint`, `npm test` et `npm run build` passent.
6. Commit, push, puis ouvre la PR avec `gh pr create` :
   - titre court et clair ;
   - corps : `Closes #<numéro>`, chemin de la spec, liste des critères d'acceptation avec le test qui couvre chacun.

## Quand t'arrêter

Tu t'arrêtes, tu commentes le ticket avec ta question précise et tu ajoutes le label `needs-human` (`gh issue edit <numéro> --add-label needs-human`) si :

- la spec est ambiguë, incomplète ou contredit le code existant ;
- il faut modifier un fichier hors de ton périmètre ou ajouter une dépendance ;
- lint, tests ou build échouent encore après 3 tentatives de correction.

Dans ce cas, tu n'ouvres pas de PR.
