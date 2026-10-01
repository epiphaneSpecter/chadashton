# C. ASHTON — Portfolio

Site portfolio de Chad Ashton (marque C. ASHTON) : design, illustration, animation, page de la police Ashton
et une page cachée. Site **100 % statique** construit avec [Astro](https://astro.build), Tailwind CSS et
TypeScript, d'après la maquette Adobe XD. La boutique (Shop, panier) est hors périmètre de cette V1.

- Notes de conception (maquette, mesures, choix techniques, étape par étape) : [`docs/design-notes.md`](docs/design-notes.md)
- Conformité écran par écran et écarts restants : [`docs/conformity-checklist.md`](docs/conformity-checklist.md)
- Inventaire des fichiers fournis : [`docs/assets-inventory.md`](docs/assets-inventory.md)

## Démarrer

Prérequis : **Node.js 22.12 ou plus** (voir `.node-version`) et npm.

```sh
npm install
npm run dev        # site de développement sur http://localhost:4321
```

| Commande          | Rôle                                                                  |
| ----------------- | --------------------------------------------------------------------- |
| `npm run dev`     | serveur de développement avec rechargement automatique                |
| `npm run build`   | site final dans `dist/` (pages HTML, images optimisées, plan du site) |
| `npm run preview` | sert le contenu de `dist/` pour le vérifier avant mise en ligne       |
| `npm run verify`  | contrôle complet : formatage, lint, types (`astro check`) puis build  |
| `npm run format`  | remet en forme le code (Prettier)                                     |

`npm run verify` doit passer sans erreur ni avertissement avant chaque mise en ligne.

> Si des classes Tailwind semblent manquer en développement après l'ajout d'un nouveau fichier `.astro`,
> relancer `npm run dev`.

## Organisation

```
src/
  pages/                 une page = un fichier (routes du site)
    portfolio/[category]/[id].astro   gabarit unique des pages projet
  content/projects/      un fichier Markdown par projet (contenu des pages projet)
  content.config.ts      schéma des projets (champs autorisés, documentés)
  components/            en-tête, menu mobile, pied de page, vidéo, blocs de projet…
  config/                réglages : site, navigation, catégories, accueil, transitions
  data/                  textes de pages (About, police Ashton, chansons de la page cachée)
  assets/                images (optimisées au build en WebP/AVIF)
  styles/global.css      police, couleurs et tailles (design tokens), transitions
public/                  fichiers servis tels quels : police, vidéos, icônes, _headers
scripts/                 outils : conversion des vidéos, icônes, recadrages d'après la maquette
design/                  captures de la maquette (référence visuelle)
docs/                    notes de conception et checklist de conformité
```

Le dossier `assets-source/` (fichiers d'origine du client, 2,2 Go) n'est **pas** dans le dépôt : il sert
seulement à préparer les images et les vidéos. On ne le modifie jamais ; les fichiers utilisés sont copiés
dans `src/assets/` (images) ou `public/` (vidéos, police).

## Ajouter un projet

Ajouter un projet = **ajouter un fichier** dans `src/content/projects/`. Sa page est créée automatiquement à
l'adresse `/portfolio/<catégorie>/<nom-du-fichier>` et le projet apparaît dans sa catégorie :

- **Design** : dans la grille, à la place donnée par `order` ;
- **Illustration**, **Animation** : ces galeries sont composées à la main d'après la maquette ; un nouveau projet
  s'affiche automatiquement en vignette sous la galerie (composant `MoreProjects`). Pour l'intégrer dans la
  composition elle-même, modifier `src/pages/portfolio/illustration.astro` ou `animation.astro`.

1. Mettre les images dans `src/assets/projects/<projet>/` (noms en minuscules, avec des tirets, sans espaces ;
   JPEG pour les photos, PNG si transparence ; pas besoin de les réduire au-delà de 2× leur taille d'affichage).
2. Créer `src/content/projects/<projet>.md`, par exemple :

   ```md
   ---
   title: Nom du projet
   category: design # design | illustration | animation
   cardLabel: NOM DU PROJET # texte sous la vignette (facultatif)
   order: 9 # position dans la catégorie
   thumbnail: ../../assets/projects/mon-projet/vignette.jpg
   thumbnailAlt: Description de la vignette
   header:
     text: Description courte affichée en haut de la page
   background: '#ffffff'
   blocks:
     - kind: image
       src: ../../assets/projects/mon-projet/visuel-1.jpg
       alt: Description de l'image (lue par les lecteurs d'écran)
     - kind: text
       text: Un paragraphe, avec un [lien](https://exemple.com) si besoin.
       size: [32, 16] # taille bureau, taille mobile (px)
   ---
   ```

   Sans coordonnées, les blocs s'empilent simplement, sur bureau comme sur mobile. Pour placer les blocs au
   pixel près comme dans une maquette (champs `height`, `box`, `m`, groupes `row` / `grid` / `carousel`,
   vidéos, aplats), voir les commentaires de `src/content.config.ts` et les projets existants.

3. `npm run dev` pour vérifier, puis `npm run verify`.

### Vidéos

Les vidéos sont converties depuis `assets-source/Animation/` par `scripts/encode-videos.sh`
(nécessite [ffmpeg](https://ffmpeg.org)) en WebM + MP4 dans `public/videos/`, avec une version 960 px pour
mobile quand la vidéo est affichée en pleine largeur. Pour en ajouter une : ajouter une ligne au tableau du
script, lancer `scripts/encode-videos.sh <nom>`, puis utiliser `kind: video`, `video: <nom>` dans un projet
(ou le composant `Video` dans une page). Une vidéo publiée sur YouTube : `youtube: <identifiant>`.

## Contenus et réglages courants

| Pour modifier…                                     | Fichier                                           |
| -------------------------------------------------- | ------------------------------------------------- |
| nom, slogan, description du site                   | `src/config/site.ts`                              |
| menu, e-mail, liens Instagram / LinkedIn / Behance | `src/config/navigation.ts`                        |
| animation de l'accueil (quand elle sera fournie)   | `src/config/home.ts`                              |
| transitions entre pages                            | `src/config/transitions.ts`                       |
| textes About / police Ashton / chansons            | `src/data/about.ts`, `ashton-font.ts`, `songs.ts` |
| couleurs, tailles de texte                         | `src/styles/global.css`                           |

Les liens vers les réseaux sociaux s'affichent en texte simple tant que leur adresse (`href`) n'est pas
renseignée dans `src/config/navigation.ts`.

**Remettre la boutique plus tard** : la navigation vient d'une liste (`mainNav`) ; ajouter l'entrée Shop et
passer `features.shop` à `true` dans `src/config/navigation.ts`, puis créer les pages.

## Mise en ligne

Le site est un dossier statique (`dist/`) : n'importe quel hébergeur statique convient. Deux configurations
sont prêtes ; les en-têtes HTTP (cache, sécurité) sont dans `public/_headers`, lu par les deux.

Dans tous les cas, définir la variable d'environnement **`SITE_URL`** avec l'adresse définitive du site
(par exemple `https://www.chadashton.com`) : elle sert aux adresses canoniques, au plan du site
(`/sitemap-index.xml`) et aux aperçus sur les réseaux sociaux. Sans elle, l'adresse provisoire
`https://chadashton.pages.dev` est utilisée.

### Cloudflare Pages (recommandé)

1. Cloudflare → Workers & Pages → Create → Pages → connecter le dépôt GitHub.
2. Préréglage **Astro** : commande de build `npm run build`, dossier de sortie `dist`.
3. Variables d'environnement : `SITE_URL` (et `NODE_VERSION` = `22` si besoin ; `.node-version` est lu).
4. Chaque push sur la branche principale met le site à jour ; chaque branche ou PR a son aperçu.

Sans Git : `npm run build && npx wrangler pages deploy` (réglages dans `wrangler.toml`).

### Netlify (alternative)

Importer le dépôt : `netlify.toml` fournit la commande (`npm run build`) et le dossier (`dist`) ; ajouter
`SITE_URL` dans les variables d'environnement.

### Domaine

Ajouter le domaine dans l'hébergeur (Custom domains), mettre `SITE_URL` à jour, relancer un déploiement.
La page `404.html` est servie automatiquement pour les adresses inconnues.

## Qualité

- Accessibilité : contrôlée avec axe-core (WCAG 2.1 AA). Les couleurs de la maquette dont le contraste est
  insuffisant (lilas sur gris clair notamment) sont conservées ; elles sont renforcées pour les visiteurs qui
  demandent plus de contraste à leur système.
- Lighthouse (mobile et bureau) : 92 à 100 en performance, 95 à 100 en accessibilité, 100 en bonnes pratiques
  et en référencement (sauf la page cachée, exclue des moteurs).
- Animations et vidéos : désactivées si le visiteur a demandé à réduire les animations.

Le détail des écarts avec la maquette et des éléments à fournir est dans
[`docs/conformity-checklist.md`](docs/conformity-checklist.md).
