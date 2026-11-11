# Uataa - Yoga & Arts du Soin

Site vitrine des cours de Kundalini Yoga d'Aurélie, au centre AMA à Papeete.

## Où modifier quoi

| Pour changer… | Fichier |
| --- | --- |
| L'horaire, les tarifs, l'adresse, les liens WhatsApp et Facebook | `src/data/site.ts` |
| Les textes de l'accueil | `src/pages/index.astro` |
| La page Kundalini Yoga | `src/pages/kundalini-yoga.astro` |
| La page Planning et tarifs | `src/pages/planning-tarifs.astro` |
| La page Blog | `src/pages/blog.astro` |
| La page Contact | `src/pages/contact.astro` |
| Les mentions légales | `src/pages/mentions-legales.astro` |
| Les couleurs et la mise en forme | `src/styles/global.css` |
| Les photos | `src/assets/` |

## Travailler sur le site

```
npm install
npm run dev      # aperçu local
npm run build    # construit le site dans dist/
```

## Publication

Chaque modification de la branche `main` republie le site via GitHub Pages
(`.github/workflows/deploy.yml`).

Le site reste caché des moteurs de recherche tant que la variable
`PUBLIC_INDEXABLE` ne vaut pas `true` au moment de la construction. À activer
quand le nom de domaine définitif est en place.

## À venir

- Réservation en ligne (Cal.com) à la place du message WhatsApp
- Nom de domaine définitif
- Soin Taurumi
- Espace élèves (kriyas de la semaine, visibles 7 jours)
