# Design notes — C. ASHTON portfolio

Étape 0 — analyse de la maquette et des assets.
Maquette : https://xd.adobe.com/view/e0b71c77-573c-4aa0-a180-205a5d8b09b1-b5e4/ (31 écrans).

Sources : manifeste de la maquette XD (couleurs, polices, styles, interactions) + exports PNG de
chaque écran fournis par le client (dossier Drive « SHARE_EPIPHANE »), rangés dans `design/`.

## 1. Écrans de référence

- `design/desktop/*.webp` : 23 écrans bureau (artboards **1920 px** de large).
- `design/mobile/*.webp` : 21 écrans mobile (artboards **393 px**, hauteur de viewport 852 px).
- Originaux PNG pleine résolution : `design/original/` (local, hors Git, 125 Mo).
- Écrans Shop, Cart, Review et Thank you : exclus (hors périmètre V1).
- Notes détaillées écran par écran (structure, textes exacts, positions, médias ↔ fichiers source) :
  - [`screens/desktop-galleries.md`](./screens/desktop-galleries.md) : Illustration, Animation, Wear a Suit, Artboard 1 (Miscellaneous Print Works) ;
  - [`screens/desktop-projects-1.md`](./screens/desktop-projects-1.md) : Miles Clayton, Matong'eau, Davie, Yarha' ;
  - [`screens/desktop-projects-2.md`](./screens/desktop-projects-2.md) : Rossignol (fichier `miscellaneous-editorial`), L'erreur inspire, Rock Paper Scissors, Curly Sox, planche de composants (`moodboard`) ;
  - [`screens/ashton-font-and-song-generator.md`](./screens/ashton-font-and-song-generator.md) : page police Ashton (2 états), Song Generator ;
  - [`screens/mobile.md`](./screens/mobile.md) : tous les écrans mobile, menu burger, règles responsive.
- Les pages simples (Landing, Portfolio, Contact, 404, About, Design) sont décrites au § 3 ci-dessous.

### 1.1 Correspondance des artboards (noms trompeurs dans la maquette)

| Page du site                                   | Bureau                                      | Mobile                      |
| ---------------------------------------------- | ------------------------------------------- | --------------------------- |
| Accueil                                        | `landing-page`                              | `landing`                   |
| Menu mobile ouvert                             | —                                           | `hamburger`                 |
| Portfolio                                      | `portfolio`                                 | `portfolio`                 |
| Catégorie Design                               | `design`                                    | `design`                    |
| Catégorie Illustration                         | `illustration`                              | `illustration`              |
| Catégorie Animation                            | `animation`                                 | `animation`                 |
| Projet Miles Clayton                           | `miles-clayton`                             | `miles-clayton`             |
| Projet Davie                                   | `davie`                                     | `davie`                     |
| Projet **Rossignol Magazine**                  | `miscellaneous-editorial` ⚠️                | `rossignol-magazine`        |
| Projet Matong'EAU                              | `matongeau`                                 | `matongeau`                 |
| Projet Yarha'                                  | `yarha`                                     | `lerreur-inspire-2` ⚠️      |
| Projet L'erreur Inspire                        | `lerreur-inspire`                           | `lerreur-inspire`           |
| Projet **Mind-bogglers** (Rock Paper Scissors) | `rock-paper-scissors`                       | `lerreur-inspire-1` ⚠️      |
| Projet **Miscellaneous Print Works**           | `artboard-1` ⚠️                             | `miscellaneous-print-works` |
| Projet Curly Sox                               | `curly-sox`                                 | `curly-sox`                 |
| Projet **Wear a Suit** (Surmesur, animation)   | `animation-1` ⚠️                            | `surmesur`                  |
| About                                          | `about`                                     | `about`                     |
| Contact                                        | `contact`                                   | `contact`                   |
| 404                                            | `404`, `404-v2` (2 variantes)               | —                           |
| Page cachée Song Generator                     | `hidden-page-song-generator`                | idem                        |
| Police Ashton (2 états)                        | `ashton-font`, `ashton-font-technical-view` | idem                        |
| Planche de composants (non publiée)            | `moodboard`                                 | —                           |

⚠️ **Écart avec le brief** : le brief cite « Miscellaneous Editorial » ; la maquette a deux projets distincts,
**Rossignol Magazine** et **Miscellaneous Print Works** (Jeff Koons, livret Japon, dépliant C2, Coffee Crisp),
plus **Mind-bogglers** (Rock Paper Scissors, qui est donc une page projet de pamphlet, pas un jeu) et **Wear a Suit**.

## 2. Design tokens (extraits de la maquette)

### 2.1 Couleurs

Classées par nombre d'écrans (artboards) qui les utilisent.

| Rôle probable                                     | Hex                                                                                                                                                                  | Écrans |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----: |
| Texte / fond sombre                               | `#000000`                                                                                                                                                            |     29 |
| Fond clair principal                              | `#F7F7F7`                                                                                                                                                            |     25 |
| Blanc                                             | `#FFFFFF`                                                                                                                                                            |     14 |
| Gris (texte secondaire, menu inactif ?)           | `#B2B2B2`                                                                                                                                                            |     14 |
| Gris moyen (traits, bordures ?)                   | `#707070`                                                                                                                                                            |      6 |
| Doré (accent)                                     | `#A77B14` (variantes `#A87B15`, `#A67B14`)                                                                                                                           |      8 |
| Gris clair                                        | `#F0F0EF`                                                                                                                                                            |      3 |
| Crème (page police Ashton ?)                      | `#FDFCEF` (variantes `#FDFCEE`, `#FCFBEE`)                                                                                                                           |      4 |
| Olive très sombre                                 | `#1C1C12`                                                                                                                                                            |      2 |
| Lilas (titre 200 px)                              | `#CFBAD1` / `#CEBAD1`                                                                                                                                                |      2 |
| Bleu nuit                                         | `#001733`                                                                                                                                                            |      2 |
| Gris foncés                                       | `#6E6E6E`, `#6D6D6D`, `#6B6B6B`, `#6F6F6F`, `#454545`, `#303030`                                                                                                     |    1–2 |
| Accents ponctuels (jeu RPS, page cachée, visuels) | `#EA001B`, `#F69D1B`, `#FE5F00`, `#FD6F00`, `#FF4545`, `#FF00FF`, `#FA43FF`, `#EEA9E2`, `#FFB5F2`, `#F7BFEC`, `#42033E`, `#3284C6`, `#019AE0`, `#002C8A`, `#3A8146`… |    1–2 |

À confirmer avec les écrans : quel fond est utilisé sur quelle page (`#F7F7F7` vs `#FFFFFF` vs `#000000`).

### 2.2 Polices

| Famille (nom réel) | Style                        | Tailles utilisées (px)                                       | Fichier fourni                                              |
| ------------------ | ---------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------- |
| **CA Scholar V2**  | Italic                       | 16, 17, 18, 19, 20, 23–28, 30–33, 35–37, 40, 50, 85, 93, 200 | ✅ `Font/CAScholarV2-Italic.otf`                            |
| CA Scholar V2      | **Medium** (20 px, 8 usages) | 20                                                           | ❌ **manquant**                                             |
| **Futura PT**      | Medium, Book, Demi, Heavy    | 16–45                                                        | ❌ **manquant**                                             |
| Futura             | Medium                       | 28, 44                                                       | ❌ manquant (probablement remplaçable par Futura PT Medium) |
| Big Moore          | Regular, Italic              | 30, 32, 38                                                   | ❌ manquant                                                 |
| Helvetica Neue     | Regular                      | 50                                                           | ❌ (police système macOS)                                   |

**Nom réel du fichier fourni** (lu dans la table `name`) : famille `CA Scholar V2`, style `Italic`,
nom complet `CA Scholar V2 Italic`, PostScript `CAScholarV2Italic`. 245 glyphes, graisse 400,
`italicAngle` = 0 (l'inclinaison est dessinée), `fsType` = 0 (embarquement web autorisé),
pas de mention de licence dans le fichier. → `@font-face { font-family: "CA Scholar V2"; font-style: italic; }`.

⚠️ À signaler : la maquette utilise **Scholar Medium, Futura PT (4 graisses), Big Moore et
Helvetica Neue**, qui ne sont pas fournis. Pas de simulation (pas de faux gras) sans ton accord.

### 2.3 Styles de texte (taille / interligne, en px)

Les plus utilisés (tous sans espacement de lettres) :

| Police                | Taille / interligne           | Couleurs                                | Casse       |                          Usages |
| --------------------- | ----------------------------- | --------------------------------------- | ----------- | ------------------------------: |
| Scholar Italic        | 36 / 39                       | noir, blanc, crème, doré, lilas         | —           |                              41 |
| Scholar Italic        | 50 / 55 (aussi 72, 73, 94)    | noir, crème, blanc, doré                | —           |                              26 |
| Scholar Italic        | 32 / 35                       | noir, `#F7F7F7`, `#B2B2B2`, blanc, bleu | parfois MAJ |                              24 |
| Scholar Italic        | 30 / 43.2 et 30 / 33          | noir, blanc, doré                       | parfois MAJ |                              23 |
| Scholar Italic        | 20 / 22                       | noir, blanc                             | —           |                               9 |
| Scholar Medium        | 20 / 22                       | noir, blanc                             | —           |                               8 |
| Scholar Italic        | 23 / 43.2                     | blanc, `#F7F7F7`                        | MAJ         |                               6 |
| Scholar Italic        | 85 / 123, 93 / 102, 200 / 220 | crème, blanc, lilas                     | MAJ         | 3 (titres d'accueil / police ?) |
| Futura PT Medium      | 25 / 43.2                     | noir, `#F0F0EF`                         | parfois MAJ |                              14 |
| Futura PT Medium      | 32 / 44                       | noir                                    | MAJ         |                               7 |
| Futura PT Book        | 25 / 54                       | doré, `#F7F7F7`                         | parfois MAJ |                               7 |
| Futura PT Book/Medium | 16–20 / 18–27                 | noir, bleu nuit, `#454545`              | —           |                             ~20 |

Les tailles (36–50 px pour le texte courant) laissent penser à des artboards larges
(probablement 1920 px ou plus) : les tailles seront converties en `clamp()` une fois la
largeur des artboards connue.

### 2.4 Interactions et transitions (111 au total)

| Type                                               | Nombre | Détail                                                                            |
| -------------------------------------------------- | -----: | --------------------------------------------------------------------------------- |
| Survol → changement d'état (auto-animate)          |     37 | 0,3 s, ease-out ; 47 composants ont un état « Hover » (liens du menu, vignettes…) |
| Clic → autre écran                                 |     53 | majoritairement sans transition ; 0,3 s ou 0,2 s ease-out                         |
| Clic → écran, glissement vers le haut (`slide-up`) |      4 | 0,2 s (×3) et 1 s (×1)                                                            |
| Clic → fondu (`dissolve`)                          |      3 | 0,3 s (dont 2 en auto-animate)                                                    |
| Clic → écran précédent                             |      3 | bouton retour / EXIT                                                              |
| Clic → changement d'état                           |      9 | bascules (Print mode / Blur ?, jeu ?)                                             |
| Vidéo                                              |      7 | 4 lectures automatiques au chargement, 3 lecture/pause au clic                    |
| Lien externe                                       |      1 | `https://curlysox.com/en` (page projet CURLY SOX)                                 |

## 3. Écrans du périmètre : éléments communs et pages simples

Mesures sur les originaux 1920 px (x, y en px d'artboard).

### 3.1 En-tête du site (Portfolio, catégories, About, Contact)

- Logo `C. ASHTON` : Scholar Italic ≈ 44 px, x 144–149, capitales y 53–83. Lien vers l'accueil (supposé).
- Menu à droite, Scholar Italic ≈ 34 px : `Portfolio` (x 835), ~~`Shop` (x 1104)~~, `About` (x 1315), `Contact` (x 1525), ~~panier (x 1730–1774)~~.
  **V1 : Shop et panier retirés**, les 3 liens restants seront redistribués en gardant la même taille, le même interlettrage et le bord droit à x ≈ 1780.
- Lien actif **souligné** (trait 2 px). Couleur = couleur du texte de la page (noir, blanc sur fond noir/vert).
- Marges latérales : **≈ 140 px** (zone utile ≈ 140–1780 px).
- Mobile : `C. ASHTON` + bouton astérisque (burger) → menu plein écran ocre `#A87B15` (voir `screens/mobile.md`).

### 3.2 Pied de page (Portfolio, catégories)

- Ligne : `chadgrenier42@gmail.com` à gauche (x 154) ; `Instagram`, `LinkedIn`, `Behance` à droite (se termine à x 1778). Scholar Italic ≈ 20 px.
- Filet noir pleine largeur (2–3 px), puis slogan centré Scholar Italic ≈ 28 px.
- ⚠️ Slogan écrit « For beauty. At all costs. » (accueil, Portfolio) **et** « For Beauty. At All Costs. » (catégories) : à unifier.
- Pages projet : **pas** d'en-tête de site ni de pied de page (titre du projet à gauche + `EXIT` à droite).

### 3.3 Accueil (`landing-page`) — fond `#FFF9F8`

- `Chad ASHTON` centré, Scholar Italic ≈ 85 px (x 673–1254, y 494–553).
- `For beauty. At all costs.` centré en bas (y 957–981), ≈ 32 px.
- Un trait fin apparaît dans le coin bas-droit : début de l'animation illustrée (séquence auto-animate du prototype, à détailler à l'étape 7).
- Pas d'en-tête ni de menu. Clic / délai → Portfolio (supposé).

### 3.4 Portfolio (`portfolio`) — fond `#F7F7F7`, 1920×1239

- En-tête (Portfolio actif).
- Trois libellés centrés sur une ligne à y ≈ 563 : `DESIGN` (x 448), `ILLUSTRATION` (x 863), `ANIMATION` (x 1296) ; Scholar Italic capitales ≈ 25 px.
  Les zones vides autour suggèrent une image qui apparaît au survol (37 états Hover dans le prototype) : **à confirmer**.
- Bouton astérisque cerclé (x 1725–1779, y 926–980) : lien vers la **page cachée Song Generator** (supposé).
- Pied de page (§ 3.2).

### 3.5 Catégorie Design (`design`) — fond `#000000` puis `#3A8146`

- En-tête en blanc. Projet mis en avant : pochette « You Give Me » (691×691 px, centrée, y 176) + légende à droite
  `You Give Me` / `Single artwork for Miles Clayton` / `(Latest project)`.
- Grille 4 colonnes (≈ 400 px, gouttière ≈ 15 px) de 8 vignettes + légendes centrées :
  Miles Clayton, Davie, Rossignol Magazine, Matong'EAU / Yarha', L'erreur Inspire, Mind-bogglers, Miscelaneous Print Works.
- Section verte `#3A8146` : visuel « Indoor Squash » + lien **`Ashton font display catalogue`** (→ page police Ashton) +
  bouton astérisque, puis liens `ILLUSTRATION` / `ANIMATION`, puis pied de page en blanc.
- ✅ **La page police Ashton garde donc un point d'entrée** (depuis Design), en plus de la boutique.

### 3.6 About (`about`) — fond `#A67B14` (doré), 1920×3002

- En-tête (About souligné ; Contact aussi souligné dans l'export, sans doute un état de survol).
- `Chad Ashton Grenier works and lives in Quebec City.` (x 140, y 318), Scholar Italic ≈ 30 px.
- Portrait N&B 409×409 px (x 1288, y 300) — **absent des assets** (seule source : l'export de maquette, basse résolution).
- Paragraphe biographique (x 1255, largeur ≈ 520 px, ≈ 26 px, interligne 28) : « From a very young age, I was very interested in art. … to create amazing things. »
- 3 colonnes (titres ≈ 36 px capitales, y 1200) :
  - `LIST OF RELEVANT THINGS I HAVE` : DEC in graphic design (from Cégep de Sainte-Foy) ; Artistic ability awards in High School (Secondairy 1 and 2) ; 20+ years experience in thinking about art ; Passion for my trade ; Sense of humor.
  - `VISUAL ARTISTS I LIKE` : 24 noms (Wes Anderson … Jean-Paul Riopelle).
  - `MUSIC ARTISTS I LIKE` : 25 noms (The Beatles … Harmonium).
- Note finale centrée (3 lignes) + lien souligné `Back to home`.
- Textes complets : lire l'écran `design/desktop/about.webp` (repris tels quels à l'étape 3).

### 3.7 Contact (`contact`) — fond `#F7F7F7`

- En-tête (Contact souligné).
- `WRITE TO ME` : Scholar Italic capitales ≈ 200 px, lilas `#CFBAD1`, centré (x 366–1572, y 309–430).
- `chadgrenier42@gmail.com` : **Futura PT** Medium ≈ 44 px, noir, centré (y 608–654).
- `Instagram` / `LinkedIn` / `Behance` : Scholar Italic ≈ 36 px, 3 colonnes centrées (y ≈ 960).
- Pas de formulaire, pas de pied de page. ⚠️ Contraste lilas/fond ≈ 1,6:1 (titre décoratif, à signaler).

### 3.8 404 (`404` et `404-v2`) — fond `#F7F7F7`

- `PAGE #404` en haut à gauche (x 140, y 72) ; illustration centrée avec bulle `Error !`
  (v1 : homme à table = `Illustration/404.png` ; v2 : guitariste = `Illustration/404_2.png`).
- `THE 404 PAGE HAS BEEN FOUND.` (≈ 30 px, capitales) ; `The page you were looking for has not.` ; lien `BACK TO HOME` (y 925).
- Deux variantes → proposition : en tirer une au hasard à chaque chargement, ou choisir `404` (à valider).

### 3.9 Song Generator (page cachée), police Ashton, projets, galeries, mobile

Voir les fichiers de `docs/screens/`.
Points clés : Song Generator = fond `#CFBAD1`, 9 chansons, bouton `RELOAD`, `BACK TO HOME`, `You discovered a hidden page`.
Page police : un seul interrupteur **« BLUPRINT MODE » OFF/ON** (et non « Print mode / Blur » comme dans le brief) qui bascule
entre `ashton-font` et `ashton-font-technical-view`. Éléments de vente à retirer : `AVAILABLE SOON`, « The ASHTON font will be AVAILABLE SOON! », panier.

### 3.10 Coquilles relevées dans la maquette (à valider avant correction)

« reccomendations », « necssities », « MILES CLAYTON 's », « Secondairy », « Momment », « togheter », « panphlet »,
« Cofee Crisp », « BLUPRINT », « reminicsence », « derrived », « intesely », « hapen », « Miscelaneous », « VAN MORISSON », « EGON SHEILE ».
Titre de la page Rossignol erroné : « Poster/panphlet for C2 conference » (copié de Miscellaneous Print Works).

## 4. Inventaire des assets

Source : dossier Drive « Images_pour_site_web » copié dans `assets-source/`
(**369 fichiers, 2,2 Go**). Ce dossier est exclu de Git (`.gitignore`) : il est trop lourd et contient
des fichiers de travail. Seuls les fichiers utilisés seront copiés, optimisés, dans `src/assets/` ou `public/`.
Tableau complet fichier par fichier : [`assets-inventory.md`](./assets-inventory.md)
(régénérable avec `scripts/inventory-assets.py` puis `scripts/inventory-render.py`).

### 4.1 Vue d'ensemble

| Type                     | Nombre | Poids total |
| ------------------------ | -----: | ----------: |
| PNG                      |    250 |    1 058 Mo |
| MP4                      |     22 |      560 Mo |
| PSD (sources Photoshop)  |      6 |      217 Mo |
| GIF                      |     23 |      101 Mo |
| AI (sources Illustrator) |      3 |       99 Mo |
| JPG                      |     54 |       94 Mo |
| PDF                      |      9 |       27 Mo |
| HEIC                     |      1 |        2 Mo |
| OTF                      |      1 |      0,2 Mo |

### 4.2 Par dossier et usage prévu

| Dossier                                                                                                                                                                         | Contenu                                                                                                                                                                                                                                | Usage (d'après les écrans)                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `Font/`                                                                                                                                                                         | police, logo (14409×2576), favicon (16×16), visuels de la police (Ashton.png, Capitals/Lowercase/glyphs_display, 8 × `Artboard 60 copy N.png` 1081×1081), `Ashton_Font.gif` (10,6 Mo, 241 images, 10 s), une capture « Indoor Squash » | police du site, en-tête, favicon, page Ashton Font                                                                                |
| `Ashton_Font_Thumbnail.png`                                                                                                                                                     | vignette « Ashton — A reminiscence of intellectual art »                                                                                                                                                                               | vignette de la page police                                                                                                        |
| `Design/davie_behance/`                                                                                                                                                         | branding Davie : logo, illustrations, brochure, site web, mockups                                                                                                                                                                      | projet **Davie**                                                                                                                  |
| `Design/L'erreur_inspire/`                                                                                                                                                      | visuels FailCamp « L'erreur inspire » (JPG légers)                                                                                                                                                                                     | projet **L'erreur inspire**                                                                                                       |
| `Design/Rossignol/`, `Design/Japon Mag/`, `Design/The_box*.png`, captures 2024/2025                                                                                             | magazines Rossignol et Japon, « The box », article Jeff Koons                                                                                                                                                                          | **Rossignol Magazine** (`Rossignol_mag/`), **Miscellaneous Print Works** (Japon, Jeff Koons), **Mind-bogglers** (`The_box_1.png`) |
| `Design/Screenshot 2024-07-10 at 2.52.00 PM.png`                                                                                                                                | capture d'une page « MILES CLAYTON » (EPK)                                                                                                                                                                                             | projet **Miles Clayton** (seul visuel fourni)                                                                                     |
| `Design/1_Grenier_ch_Atelier_1_Palette_choco_Haut_gamme.jpg`                                                                                                                    | packaging « Coffee Crisp »                                                                                                                                                                                                             | **Miscellaneous Print Works** (basse résolution)                                                                                  |
| `Illustration/` (racine)                                                                                                                                                        | illustrations finales (Metro, Nick Drake, hotel, orchestra, window4…), 404.png / 404_2.png, affiches Dance Party                                                                                                                       | catégorie Illustration, page 404                                                                                                  |
| `Illustration/Final_RPS/`                                                                                                                                                       | 10 pages « Logical Philosophy About Rock Paper Scissors »                                                                                                                                                                              | projet **Mind-bogglers** (pamphlet, carrousel de pages)                                                                           |
| `Illustration/inktober/`, `Inktober_2023/`, `Wildlife/`, `Van_Gogh_Aznarez/`, `scarbourough/`, `Grandma's Appartment/`, `wedding_crasher/`, `Douglass_Adams_road_construction/` | séries d'illustrations + photos de référence et captures de travail                                                                                                                                                                    | catégorie Illustration                                                                                                            |
| `Animation/`                                                                                                                                                                    | 22 MP4 (0,7 s à 87 s, avec piste audio), 23 GIF, `Surmesur_GIF/` (personnages sur fond noir), `Cyclist/` (images clés)                                                                                                                 | catégorie Animation, projets **Wear a Suit** (Surmesur), Davie (vidéo), Yarha' (calèche)                                          |

### 4.3 Ce qui manque

Détail par écran dans `docs/screens/*.md`. Récapitulatif :

- **Polices** : CA Scholar V2 **Medium** ; **Futura PT** (Book, Medium, Demi, Heavy — utilisée pour l'email de Contact,
  les boutons RELOAD / BACK TO HOME, l'interrupteur BLUPRINT MODE, les titres des pages projet) ; Big Moore ; Helvetica Neue.
  Licences web à vérifier.
- **About** : le **portrait N&B** (seule source : l'export de maquette, 409 px).
- **Design** : la pochette **« You Give Me »** (projet mis en avant) et les vignettes de la grille Design
  (Miles Clayton, Matong'EAU, Yarha') — à recadrer depuis les visuels projet quand ils existent.
- **Miles Clayton** : photo hero, 5 pochettes de singles, affiche « To Believe ».
- **Matong'EAU** : tout (logo, cartes de visite, déclinaisons du logo, 3 t-shirts).
- **Yarha'** : 4 vidéos (hero, 2 animations de logo, « Le tipi ») et toutes les illustrations sauf la calèche.
- **Curly Sox** : les 5 photos de chaussettes détourées (aussi utilisées sur la page Illustration).
- **Miscellaneous Print Works** : l'affiche et les 4 panneaux du dépliant C2 (existent seulement en PDF :
  `Design/*Grenier_C_affiche-brochure*.pdf`, `02_grenier_c_brochure_sans.pdf` → à exporter en images).
- **Animation / Wear a Suit** : la vidéo « Look Good In Any Situation » ; vidéo d'ouverture de la page Animation
  à confirmer (`Dog_animation_footage.mp4` ou `1_Reflect_your_ambitions.mp4`).
- **Page police Ashton** : tuiles Aa/Nn/Zz, astérisques, schémas techniques → à refaire en SVG/HTML.
- **Icônes** (panier hors V1, ×, chevron, astérisque cerclé, burger astérisque) → à dessiner en SVG.
- **URLs** Instagram, LinkedIn, Behance (seuls les libellés figurent sur la maquette).
- **Favicon haute définition** : `favicon.png` fait 16×16 ; il faut au moins 180×180 et 512×512, ou un SVG.
- **Animation d'accueil** : la séquence du prototype (auto-animate) n'est pas exportée ; seul l'état initial
  (`landing-page`) est visible. À préciser à l'étape 7 (vidéo de référence ou description).

### 4.4 Ce qui est en trop (ne sera pas publié)

- Fichiers sources : 6 PSD (217 Mo), 3 AI (99 Mo), 9 PDF, 1 HEIC.
- Photos de référence et captures de travail (`scarbourough/IMG_*.jpg`, `Photo.jpg`, `Wildlife/*photo*`,
  `Douglass_Adams…/Screen Shot…` croquis, `chain_animation/IMG_79xx.JPG`).
- Doublons : `Chain_animation.gif/.mp4` (dans `Animation/` et `Inktober_2023/`), `fire.png` = `Inktober_2023/Fire_building.png`
  (même poids), plusieurs versions d'une même image (`_1`, `_2`, `copy`, `F`).
- Images clés du cycliste (`Animation/Cyclist/line00xx.png`) si le GIF suffit.
- Le choix final dépendra des écrans de la maquette.

### 4.5 Ce qui est trop lourd

- **152 images de plus de 2 Mo**, jusqu'à 19,8 Mo (`Inktober_2023/2023_Spiders.png`) ; le logo fait
  14409×2576 px. → `<Image>` d'Astro (AVIF/WebP, largeurs responsives).
- **MP4** : jusqu'à 107 Mo (`soup.mp4`, 87 s), 73 Mo (`Animation.mp4`, `Vanderburg_mag_cover.mp4`).
  → ré-encodage H.264/WebM compressé, sans piste audio pour les boucles ; les vidéos longues
  via embed (Vimeo/YouTube) comme demandé à l'étape 6.
- **GIF** : jusqu'à 16,7 Mo (`1st.gif`, `ball.gif`, `road.gif`, `gif.gif`, `Vanderburg_mag_cover.gif`,
  `Ashton_Font.gif`) → WebM + MP4 + poster.
- **Noms à renommer** en kebab-case : fichiers avec espaces, apostrophes ou `&`
  (`Artboard 60 copy 2.png`, `Grandma's Appartment/`, `L'erreur_inspire/`, `cyclist_GIF_B&W.gif`,
  `punch .gif`…).

## 5. Choix techniques (étape 1)

- **Projet** : fichiers du modèle officiel `examples/minimal` d'Astro 7 (ce que copie `npm create astro@latest`,
  dont le téléchargement est bloqué dans l'environnement cloud), TypeScript `astro/tsconfigs/strict`,
  Tailwind CSS 4 via `npx astro add tailwind`.
- **Qualité** : `npm run verify` = Prettier (`format:check`) + ESLint (TypeScript strict, Astro, accessibilité)
  - `astro check` + `astro build`.
- **Police** : `CAScholarV2-Italic.otf` → `public/fonts/ca-scholar-v2-italic.woff2` (fontTools, 188 → 74 Ko,
  245 glyphes). Famille déclarée sous son vrai nom `CA Scholar V2`, `font-style: italic`, `font-display: swap`,
  préchargée. Tout le texte est en italique (seule face fournie) et `font-synthesis: none` empêche tout faux gras.
  Hauteur de capitale = 0,607 em : taille CSS = hauteur de capitale mesurée ÷ 0,607.
- **Futura PT** : non fournie. Token `font-futura` prévu avec des polices de repli (placeholder), non chargée.
- **Tokens** (Tailwind 4, bloc `@theme` de `src/styles/global.css`, qui remplace `tailwind.config.js` en v4) :
  couleurs, polices, échelle typographique, marge de page, point de rupture `desktop` (1024 px).
- **Tailles fluides** : `clamp(valeur mobile, valeur bureau × 100vw / 1920, valeur bureau)`. À 1920 px le site
  reproduit la maquette au pixel ; à 1440 px il la reproduit à l'échelle 0,75 ; sous 1024 px les valeurs mobiles
  (artboards 393 px) s'appliquent.

| Token          | Bureau (1920) | Mobile (393) | Usage                      |
| -------------- | ------------: | -----------: | -------------------------- |
| `text-display` |        200 px |        42 px | WRITE TO ME                |
| `text-hero`    |         93 px |        35 px | nom sur l'accueil          |
| `text-logo`    |         50 px |        30 px | logo C. ASHTON             |
| `text-nav`     |         36 px |        25 px | menu                       |
| `text-title`   |         30 px |        20 px | slogan, catégories, titres |
| `text-body`    |         26 px |        16 px | paragraphes                |
| `text-small`   |         20 px |        15 px | pied de page               |
| `spacing-page` |        140 px |        20 px | marges latérales           |

- **Arborescence** : `src/pages` (routes), `src/layouts` (`BaseLayout.astro`), `src/components`, `src/config`
  (`site.ts`, puis la navigation à l'étape 2), `src/styles`, `src/assets` (images optimisées),
  `public/` (police, favicon, vidéos). Content collections (`src/content`) ajoutées à l'étape 5.

## 6. Composants communs (étape 2)

- `src/config/navigation.ts` : liste des liens du menu (`mainNav`), drapeau `features.shop` (désactivé),
  email et réseaux. **Ajouter la boutique plus tard** = ajouter `{ label: 'Shop', href: '/shop' }`
  et activer `features.shop`, sans toucher aux composants.
- `Header.astro` : logo `C. ASHTON` (lien vers l'accueil) + menu. Bureau : 3 liens alignés à droite,
  bord droit à x 1776 (comme le panier retiré), 136 px entre les mots comme dans la maquette,
  lien actif souligné (`underline-active`, 2 px sous un mot de 36 px) avec `aria-current="page"`.
  Mobile (< 1024 px) : bouton astérisque.
- `MobileMenu.astro` : menu plein écran ocre, bouton de fermeture « étincelle », 3 liens centrés
  (pas de 97 px comme dans la maquette), pied de page. Script sans framework : `aria-expanded`,
  focus piégé, fermeture par Échap, retour du focus sur le bouton, défilement bloqué.
- `Footer.astro` : email + réseaux, filet, slogan. Option `spacious` pour le rythme plus aéré
  de la page Portfolio.
- `SocialLinks.astro` : **placeholder** tant que les URL ne sont pas fournies (texte non cliquable,
  `data-placeholder="social-url"`).
- `icons/AsteriskIcon.astro` : astérisque du menu, étincelle de fermeture, astérisque cerclé
  (lien vers la page de la police, voir `design/mobile/portfolio.webp` : « discover The Ashton Font »).
- Les boutons propres à une page (`EXIT`, `BACK TO HOME`, `RELOAD`, interrupteur `BLUPRINT MODE`)
  sont réalisés avec leur page, car leur style diffère d'un écran à l'autre.
- Unité bureau `--u` (1 px de maquette à 1920 px, réduit avec la fenêtre) : les positions bureau
  s'écrivent `calc(N * var(--u))`.

## 7. Pages simples (étape 3)

- **About** : textes de la maquette bureau (fautes comprises) dans `src/data/about.ts`.
  Le portrait est un **placeholder** : recadrage 409 px de l'export de maquette
  (`src/assets/about/portrait-from-mockup.png`), à remplacer par la photo originale.
  Suivi de la maquette : note finale et « Back to home » affichés sur bureau seulement,
  pied de page réduit (filet + slogan) sur mobile seulement, sous-ligne « (Secondairy 1 and 2) »
  en taille normale sur mobile. Écart assumé : `HARMONIUM` (absent de la liste mobile de la maquette)
  est affiché partout ; ordre de la liste Music = bureau.
- **Contact** : titre lilas, email `mailto:`, réseaux (placeholders). Sur mobile, tout est en lilas,
  en-tête compris. L'email bureau utilise Futura PT (**placeholder** : polices de repli).
- **404** (`src/pages/404.astro`, publiée en `404.html`) : les deux versions de la maquette,
  tirées au hasard à chaque visite (version 1 sans JavaScript). Pas de maquette mobile :
  contenu centré, mêmes textes.
- **Tailles mesurées** (bureau / mobile) : intro About 26 / 16 px, bio 24 / 16 px (interligne 28),
  titres de colonnes 35 / 20 px, liste 25 / 16 px, noms d'artistes 25 / 13 px, email Contact
  44 (Futura PT) / 25 px, réseaux Contact 40 / 17 px, textes 404 : 33, 28, 25 et 37 px.
- **À revoir à l'étape 10** : entre 1024 et 1280 px, la mise à l'échelle bureau fait descendre
  les plus petits textes vers 10 px ; prévoir un plancher de lisibilité.

## 8. Portfolio et catégories (étape 4)

- **Routes** : `/portfolio`, `/portfolio/design`, `/portfolio/illustration`, `/portfolio/animation`,
  pages projet `/portfolio/<catégorie>/<projet>` (placeholders jusqu'à l'étape 5), page police
  `/ashton-font` (placeholder jusqu'à l'étape 9).
- **Content collection** `projects` (`src/content.config.ts`, fichiers `src/content/projects/*.md`) :
  titre, catégorie, libellé de la carte (orthographe de la maquette), ordre bureau et ordre mobile
  (la maquette mobile range les cartes Design autrement), vignette, lien externe.
- **Vignettes** : recadrées automatiquement depuis les fichiers source pour reproduire le cadrage
  de la maquette (`scripts/match-crop.py`, corrélation d'image). **Placeholders** (recadrages de la
  maquette) : vignettes Miles Clayton, Matong'EAU, Yarha', pochette « You Give Me », chaussette Curly Sox.
- **Animation** : images fixes tirées des vidéos/GIF source, choisies pour correspondre à la maquette
  (`scripts/match-frame.py`) ; les vidéos arrivent à l'étape 6. « Look Good In Any Situation » :
  placeholder (vidéo introuvable). La vidéo d'ouverture reste un fond crème, comme dans la maquette.
- **Découvertes** : l'astérisque cerclé (Portfolio, Design) mène à la page de la police
  (« discover The Ashton Font » sur mobile, « Ashton font display catalogue » sur Design).
  Les liens de catégories en bas de page sont centrés sur x 797 et x 1121 (maquette 1920).
- **Couleurs** : les captures macOS (profil « Display ») sont copiées sans profil ICC, sinon le navigateur
  sature leurs couleurs (le vert de l'affiche Indoor Squash ne correspondait plus au fond de page).
- **Écarts restants** : bas de la page Illustration mobile décalé d'environ 57 px (images de 350 px
  de large contre 346–355 px dans la maquette) ; libellé de catégorie actif (barre mobile) en gras
  de remplacement, faute de Futura PT.
- **Note dev** : après l'ajout d'un nouveau fichier `.astro`, relancer `npm run dev` si des classes
  Tailwind semblent absentes (le serveur ne rescanne pas toujours les nouveaux fichiers).

## 9. Pages projet (étape 5)

- **Gabarit unique** : `src/pages/portfolio/[category]/[id].astro` + `src/components/project/Block.astro`.
  Chaque fichier `src/content/projects/<id>.md` décrit l'en-tête (description, EXIT, couleurs) et une liste
  de **blocs** (`image`, `text`, `video`, `swatch` = aplat de couleur, `group` = rangée / grille / carrousel mobile) :
  - `box: [x, y, largeur, hauteur]` = position dans la maquette bureau (px à 1920) ; sans `box`, les blocs
    s'empilent simplement (cas d'un futur projet sans maquette) ;
  - `m: { w, h, gap, align }` = placement mobile (empilé, dans l'ordre de la maquette mobile) ;
  - `desktopHidden` / `m.hidden` = contenu propre au mobile / au bureau ; `position` = cadrage ; `border` = liseré.
- **Pages** : Miles Clayton, Davie, Rossignol Magazine, Matong'eau, Yarha', L'erreur inspire, Mind-bogglers,
  Miscellaneous Print Works, Curly Sox, Wear a Suit. Écarts mesurés : bureau 0–3 px (en-têtes compris),
  mobile 0–6 px sauf cas signalés (Mind-bogglers mobile décalé d'environ 30 px par la hauteur du carrousel).
- **Sources** : images recadrées sur la maquette par corrélation (`scripts/match-crop.py`), images fixes des vidéos
  (`scripts/match-frame.py`), dépliant C2 rendu depuis le PDF (PyMuPDF). Captures macOS sans profil « Display ».
- **Placeholders** (recadrages de la maquette, `placeholder: true` / fichiers `*-from-mockup.*`) :
  Miles Clayton (hero, 5 pochettes, affiche), tout Matong'eau, Yarha' (illustrations, storyboards, ferme, polaroïds…),
  chaussettes Curly Sox, vidéo « Look Good In Any Situation ». Aplats (vidéos manquantes) : hero et animations de logo de Yarha'.
- **Vidéos** : pour l'instant image fixe ; `source` (fichier d'origine) et `youtube` (Davie : `cA5gXrh74H0`) servent à l'étape 6.
  La calèche de Yarha' est recadrée dans le GIF : appliquer le même recadrage à la vidéo.
- **Textes gardés tels quels** (maquette) : « necssities », « MILES CLAYTON 's », « panphlet », « togheter »,
  « Cofee Crisp », « academic projectac » ; en-tête Rossignol « Poster/panphlet for C2 conference » (erreur de la maquette,
  vrai titre à demander).
- **Polices** : intro/conclusion Miles Clayton en serif droit de remplacement ; légendes et « Visit » en italique de type
  Bodoni dans la maquette, rendues en CA Scholar ; slogan Matong'eau en Futura PT (remplacement).
- **Poids** : les images d'illustration de l'étape 4 ont été réduites (200 Mo → 18 Mo) au double de leur taille d'affichage.

## 10. Médias (étape 6)

- **Conversion** : `scripts/encode-videos.sh` (ffmpeg, relançable) lit `assets-source/Animation/` sans le modifier et écrit
  `public/videos/<nom>.webm` (VP9) + `<nom>.mp4` (H.264, `faststart`), plus `<nom>-m.*` (960 px) pour les écrans < 1024 px
  quand la vidéo est affichée pleine largeur. Boucles sans piste son ; vidéos à son (lues à la demande) : AAC 128k / Opus 96k.
  Le WebM est gardé partout : certains navigateurs (Chromium sans codecs propriétaires, dont celui des tests) ne lisent
  pas le H.264. Débit plafonné à « largeur » kbit/s (1920 px ≈ 1,9 Mbit/s).
- **Composant** `src/components/media/Video.astro`, trois modes :
  - `loop` (équivalent GIF) : `muted loop playsinline` + poster ; lecture seulement quand la vidéo est à l'écran
    (IntersectionObserver), aucune lecture si `prefers-reduced-motion` ; clic / Entrée / Espace = pause / lecture
    (WCAG 2.2.2). La vidéo d'ouverture (au-dessus de la ligne de flottaison) a l'attribut `autoplay` ; les autres
    sont en `preload="none"` et démarrent à l'approche de l'écran, pour ne pas charger toute la page d'un coup.
  - `toggle` (« tap » play/pause du prototype XD) : vidéos avec son de Wear a Suit, une seule joue à la fois.
  - `controls` : lecteur natif pour la vidéo longue avec son « Portfolio evening » (60 s).
- **YouTube** : `src/components/media/YouTubeEmbed.astro` (Davie) : lien vers YouTube avec le poster (fonctionne sans JS),
  remplacé au clic par le lecteur `youtube-nocookie` ; rien n'est chargé depuis YouTube avant le clic.
- **Blocs projet** : `kind: video` + `video: <nom>` (+ `mode`) ; `youtube` prioritaire ; sans `video` ni `youtube`,
  l'image fixe reste affichée (placeholder « Look Good In Any Situation », aplats de Yarha').
- **Vidéo d'ouverture de la page Animation** : `Dog_animation_footage.mp4` (sa 1re image est le crème `#FFFAEE` de la
  maquette bureau, sans son) — **à confirmer avec le client** (autre candidat : `1_Reflect_your_ambitions.mp4`, dont la
  1re image a le rose de la maquette mobile). Sur mobile, la vidéo 16:9 est affichée en entier (contain) au milieu de la
  section de 852 px.
- **Sous-titres** : aucune piste de sous-titres fournie pour les vidéos avec son (à demander).
