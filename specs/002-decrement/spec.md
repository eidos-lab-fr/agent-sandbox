# Spec 002 — Bouton Décrémenter

## Problème

L'utilisateur peut augmenter le compteur et le remettre à zéro, mais pas le diminuer d'une unité.

## Parcours utilisateur

**P1 — Diminuer le compteur**

- Étant donné que le compteur affiche une valeur supérieure à 0, quand l'utilisateur clique sur « Décrémenter », alors le compteur diminue de 1.
- Étant donné que le compteur affiche 0, alors le bouton « Décrémenter » est désactivé.

## Cas limites

- Le compteur ne devient jamais négatif.
- Le bouton a pour nom accessible « Décrémenter » et se place entre le bouton du compteur et « Réinitialiser ».

## Hors périmètre

- Raccourcis clavier, changements de style.

## Questions ouvertes

Aucune.
