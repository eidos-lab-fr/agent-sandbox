# Spec 001 — Bouton Réinitialiser

## Problème

Sur la page d'accueil, l'utilisateur peut incrémenter le compteur mais n'a aucun moyen de le remettre à zéro, sauf en rechargeant la page.

## Parcours utilisateur

**P1 — Remettre le compteur à zéro**

- Étant donné que le compteur affiche une valeur supérieure à 0, quand l'utilisateur clique sur « Réinitialiser », alors le compteur affiche `Compteur : 0`.
- Étant donné que le compteur affiche 0, alors le bouton « Réinitialiser » est désactivé.
- Étant donné que le compteur a été réinitialisé, quand l'utilisateur clique sur le bouton du compteur, alors le compteur affiche `Compteur : 1`.

## Cas limites

- Plusieurs clics sur le compteur puis un seul clic sur « Réinitialiser » ramènent bien à 0, pas à la valeur moins 1.
- Le bouton « Réinitialiser » est accessible au clavier et a pour nom accessible « Réinitialiser ».

## Hors périmètre

- Sauvegarde du compteur entre deux visites.
- Confirmation avant réinitialisation.
- Tout changement de style ou de mise en page au-delà de l'ajout du bouton.

## Questions ouvertes

Aucune.
