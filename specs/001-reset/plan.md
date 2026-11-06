# Plan 001 — Bouton Réinitialiser

- Fichier concerné : `src/App.tsx`. Aucun nouveau composant.
- Ajouter un second `<button type="button">` libellé « Réinitialiser », placé après le bouton du compteur.
- Au clic : `setCount(0)`.
- Attribut `disabled` quand `count === 0`.
- Tests dans `src/App.test.tsx`, avec Testing Library : sélectionner les boutons par leur nom accessible (`getByRole('button', { name: ... })`), car il y aura désormais deux boutons.
- Le test existant doit être adapté pour cibler le bouton du compteur par son nom, sans changer ce qu'il vérifie.
