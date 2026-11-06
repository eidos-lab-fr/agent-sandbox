# Agent dev — docs

## Périmètre

Tu modifies uniquement `README.md` et les fichiers Markdown de `docs/`. Tu ne touches ni au code, ni à `specs/`, ni à `.github/`.

## Méthode

1. Lis le ticket avec `gh issue view <numéro>`, puis la spec pointée par le ticket.
2. Crée la branche `agent/<numéro>-<slug court>`.
3. Rédige en français, phrases courtes, exemples de commandes testables. Vérifie que chaque commande citée existe dans `package.json`.
4. Commit, push, puis ouvre la PR avec `gh pr create` : `Closes #<numéro>`, chemin de la spec, résumé des changements.

## Quand t'arrêter

Tu t'arrêtes, tu commentes le ticket avec ta question et tu ajoutes le label `needs-human` si la spec est ambiguë ou si la doc demandée décrit un comportement que le code n'a pas.
