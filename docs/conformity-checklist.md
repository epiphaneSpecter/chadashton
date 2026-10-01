# Checklist de conformité à la maquette

Comparaison de chaque écran de la maquette Adobe XD avec le site construit, à 1920 px (bureau) et 393 px
(mobile), plus des contrôles à 1440 et 390 px. Les écarts sont mesurés sur des captures Playwright (position
des éléments, en px de maquette). Détails et méthode : [`design-notes.md`](design-notes.md).

Légende : ✅ conforme · ⚠️ conforme avec écarts ou contenu provisoire · ⛔ hors périmètre V1.
« Placeholder » = image recadrée dans la maquette (fichier `*-from-mockup.*`, `placeholder: true`) en
attendant le fichier original.

## Écrans

| Écran (bureau / mobile)                                                          | Page                                          | État | Écarts mesurés                       | Restant / à fournir                                                                                                             |
| -------------------------------------------------------------------------------- | --------------------------------------------- | :--: | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `landing-page` / `landing`                                                       | `/`                                           |  ⚠️  | 0–1 px                               | **Animation d'accueil** absente de la maquette et des fichiers : emplacement prêt (`src/config/home.ts`), fichier à fournir.    |
| — / `hamburger`                                                                  | menu mobile                                   |  ✅  | ≤ 6 px                               | Lien Shop retiré (V1).                                                                                                          |
| `portfolio` / `portfolio`                                                        | `/portfolio`                                  |  ⚠️  | ≤ 6 px                               | Images au survol des catégories (états « Hover » du prototype) non fournies, non réalisées.                                     |
| `design` / `design`                                                              | `/portfolio/design`                           |  ⚠️  | ≤ 6 px                               | Placeholders : pochette « You Give Me », vignettes Miles Clayton, Matong'EAU, Yarha'.                                           |
| `illustration` / `illustration`                                                  | `/portfolio/illustration`                     |  ⚠️  | bureau ≤ 6 px, mobile ≈ 57 px en bas | Placeholder : chaussette Curly Sox. Décalage cumulé en bas de page mobile (images à 350 px contre 346–355 px dans la maquette). |
| `animation` / `animation`                                                        | `/portfolio/animation`                        |  ⚠️  | 0 px (cadres vidéo)                  | Vidéo d'ouverture supposée (`Dog_animation_footage.mp4`, à confirmer) ; « Look Good In Any Situation » : placeholder.           |
| `miles-clayton` / `miles-clayton`                                                | `/portfolio/design/miles-clayton`             |  ⚠️  | bureau 0–3 px, mobile ≤ 6 px         | Placeholders : photo hero, 5 pochettes, affiche. Intro / conclusion en serif droit de remplacement.                             |
| `davie` / `davie`                                                                | `/portfolio/design/davie`                     |  ✅  | bureau 0–3 px, mobile ≤ 6 px         | Vidéo YouTube chargée au clic.                                                                                                  |
| `miscellaneous-editorial` / `rossignol-magazine`                                 | `/portfolio/design/rossignol-magazine`        |  ⚠️  | bureau 0–3 px, mobile ≤ 6 px         | En-tête « Poster/panphlet for C2 conference » repris tel quel : erreur probable de la maquette, vrai texte à confirmer.         |
| `matongeau` / `matongeau`                                                        | `/portfolio/design/matongeau`                 |  ⚠️  | bureau 0–3 px, mobile ≤ 6 px         | Tous les visuels en placeholder. Slogan en Futura PT (police de remplacement).                                                  |
| `yarha` / `lerreur-inspire-2`                                                    | `/portfolio/design/yarha`                     |  ⚠️  | bureau 0–3 px, mobile ≤ 6 px         | Illustrations en placeholder ; 4 vidéos (hero, 2 logos, « Le tipi ») en aplats de couleur. Calèche : vraie vidéo.               |
| `lerreur-inspire` / `lerreur-inspire`                                            | `/portfolio/design/lerreur-inspire`           |  ✅  | bureau 0–3 px, mobile ≤ 6 px         | —                                                                                                                               |
| `rock-paper-scissors` / `lerreur-inspire-1`                                      | `/portfolio/design/mind-bogglers`             |  ⚠️  | bureau 0–3 px, mobile ≈ 30 px        | Page projet du dépliant (pas un jeu). Mobile décalé d'environ 30 px sous le carrousel (hauteur du carrousel).                   |
| `artboard-1` / `miscellaneous-print-works`                                       | `/portfolio/design/miscellaneous-print-works` |  ✅  | bureau 0–3 px, mobile ≤ 6 px         | Dépliant C2 rendu depuis le PDF fourni.                                                                                         |
| `curly-sox` / `curly-sox`                                                        | `/portfolio/illustration/curly-sox`           |  ⚠️  | bureau 0–3 px, mobile ≤ 6 px         | Photos de chaussettes en placeholder ; lien curlysox.com conservé.                                                              |
| `animation-1` / `surmesur`                                                       | `/portfolio/animation/wear-a-suit`            |  ⚠️  | bureau 0–3 px, mobile ≤ 6 px         | 3ᵉ vidéo « Look Good In Any Situation » : image fixe (placeholder).                                                             |
| `about` / `about`                                                                | `/about`                                      |  ⚠️  | ≤ 6 px                               | Portrait en placeholder (409 px). `HARMONIUM` affiché aussi sur mobile (absent de la liste mobile de la maquette).              |
| `contact` / `contact`                                                            | `/contact`                                    |  ⚠️  | ≤ 6 px                               | URL Instagram / LinkedIn / Behance non fournies (texte simple). E-mail bureau en Futura PT (remplacement).                      |
| `404`, `404-v2` / —                                                              | `/404.html`                                   |  ✅  | ≤ 6 px                               | Deux variantes tirées au hasard ; version mobile déduite (pas de maquette mobile).                                              |
| `hidden-page-song-generator` (bureau et mobile)                                  | `/song-generator`                             |  ⚠️  | bureau 0–4 px, mobile ≤ 4 px         | Accès secret à définir (page joignable par son adresse). RELOAD / BACK TO HOME en Futura PT (remplacement).                     |
| `ashton-font` (bureau et mobile)                                                 | `/ashton-font`, interrupteur OFF              |  ⚠️  | bureau ≤ 7 px, mobile ≤ 9 px         | « AVAILABLE SOON » retiré (pas de vente) ; EXIT remonté. Interrupteur en Futura PT (remplacement).                              |
| `ashton-font-technical-view` (bureau et mobile)                                  | `/ashton-font`, interrupteur ON               |  ⚠️  | bureau ≤ 7 px, mobile ≤ 9 px         | 5 schémas de construction en placeholder (à exporter en SVG depuis XD).                                                         |
| `moodboard`                                                                      | —                                             |  —   | —                                    | Planche de composants, pas une page.                                                                                            |
| Shop – Limited Edition Prints, Shop – Fonts, Shop – Art, Cart, Review, Thank you | —                                             |  ⛔  | —                                    | Hors périmètre V1 ; lien Shop et panier retirés de l'en-tête (réactivables, voir README).                                       |

## Comportements du prototype

| Élément                                                 | État | Remarque                                                                                                |
| ------------------------------------------------------- | :--: | ------------------------------------------------------------------------------------------------------- |
| Transitions (logo → accueil, Portfolio, Contact, About) |  ✅  | Fondu 0,3 s ; glissements 0,2 s et 1 s ; le reste instantané, comme le prototype.                       |
| Menu mobile                                             |  ✅  | Clavier (Échap, focus gardé dans le menu), fermeture au passage en bureau.                              |
| Vidéos en boucle / au clic                              |  ✅  | Boucles muettes à l'écran ; vidéos Wear a Suit avec son au clic ; aucune animation si mouvement réduit. |
| Interrupteur BLUPRINT MODE                              |  ✅  | Bascule police / Technical View sur la même page.                                                       |
| RELOAD (Song Generator)                                 |  ✅  | Nouvel ordre aléatoire des 9 chansons de la maquette.                                                   |
| États au survol (37 dans le prototype)                  |  ⚠️  | Liens soulignés au survol ; les images de survol du Portfolio ne sont pas fournies.                     |

## Éléments transverses à fournir ou à valider

- **Polices** : Futura PT, CA Scholar V2 Medium, Big Moore (et licences web) — des polices de remplacement sont
  utilisées en attendant.
- **Textes** gardés tels quels avec les fautes de la maquette (« necssities », « panphlet », « togheter »,
  « reminicsence », « BLUPRINT », « reccomendations », « Momment »…) : à corriger ou confirmer.
- **Adresse du site** (`SITE_URL`) et domaine.
- **Contrastes** de la maquette sous le seuil WCAG (lilas sur gris clair 1,7:1, en-tête noir sur l'image de
  Yarha' 2,9:1, bleu de Matong'EAU 4,0:1) : conservés, renforcés seulement en mode « contraste élevé ».
- **Sous-titres** des vidéos avec son : aucun fichier fourni.
- **Navigateurs** : tests automatiques sur Chromium uniquement ; à vérifier sur Safari et Firefox
  (glyphes alternatifs de la police, vidéos, transitions).
