# Design notes — C. ASHTON portfolio

Étape 0 — analyse de la maquette et des assets.
Maquette : https://xd.adobe.com/view/e0b71c77-573c-4aa0-a180-205a5d8b09b1-b5e4/ (31 écrans).

> **Statut : PARTIEL.** Les écrans de la maquette n'ont pas pu être affichés depuis
> l'environnement de travail (le lecteur XD ne charge pas ses données dans le navigateur
> headless, voir § 1). Les données *structurées* de la maquette (couleurs, polices, styles
> de texte, interactions) ont été récupérées ; la mise en page, les textes et l'attribution
> des médias par écran **restent à relever** (captures ou fichier `.xd`).

## 1. Accès à la maquette

| Source | Résultat |
|---|---|
| Lecteur XD dans Chromium (Playwright) | ❌ « Something went wrong » : la requête des données vers `cdn-sharing.adobecc.com` est bloquée par CORS dans le navigateur. |
| Manifeste de la maquette (`cdn-sharing.adobecc.com`, via curl) | ✅ couleurs, polices, styles de texte, symboles (47, avec états Hover), 111 interactions. |
| Artboards (mise en page, textes, images) | ❌ non disponibles dans le manifeste. |

Ce qui manque pour terminer l'étape 0 : une capture PNG par écran du périmètre (dans `/design`)
ou le fichier source `.xd`.

## 2. Design tokens (extraits de la maquette)

### 2.1 Couleurs

Classées par nombre d'écrans (artboards) qui les utilisent.

| Rôle probable | Hex | Écrans |
|---|---|---:|
| Texte / fond sombre | `#000000` | 29 |
| Fond clair principal | `#F7F7F7` | 25 |
| Blanc | `#FFFFFF` | 14 |
| Gris (texte secondaire, menu inactif ?) | `#B2B2B2` | 14 |
| Gris moyen (traits, bordures ?) | `#707070` | 6 |
| Doré (accent) | `#A77B14` (variantes `#A87B15`, `#A67B14`) | 8 |
| Gris clair | `#F0F0EF` | 3 |
| Crème (page police Ashton ?) | `#FDFCEF` (variantes `#FDFCEE`, `#FCFBEE`) | 4 |
| Olive très sombre | `#1C1C12` | 2 |
| Lilas (titre 200 px) | `#CFBAD1` / `#CEBAD1` | 2 |
| Bleu nuit | `#001733` | 2 |
| Gris foncés | `#6E6E6E`, `#6D6D6D`, `#6B6B6B`, `#6F6F6F`, `#454545`, `#303030` | 1–2 |
| Accents ponctuels (jeu RPS, page cachée, visuels) | `#EA001B`, `#F69D1B`, `#FE5F00`, `#FD6F00`, `#FF4545`, `#FF00FF`, `#FA43FF`, `#EEA9E2`, `#FFB5F2`, `#F7BFEC`, `#42033E`, `#3284C6`, `#019AE0`, `#002C8A`, `#3A8146`… | 1–2 |

À confirmer avec les écrans : quel fond est utilisé sur quelle page (`#F7F7F7` vs `#FFFFFF` vs `#000000`).

### 2.2 Polices

| Famille (nom réel) | Style | Tailles utilisées (px) | Fichier fourni |
|---|---|---|---|
| **CA Scholar V2** | Italic | 16, 17, 18, 19, 20, 23–28, 30–33, 35–37, 40, 50, 85, 93, 200 | ✅ `Font/CAScholarV2-Italic.otf` |
| CA Scholar V2 | **Medium** (20 px, 8 usages) | 20 | ❌ **manquant** |
| **Futura PT** | Medium, Book, Demi, Heavy | 16–45 | ❌ **manquant** |
| Futura | Medium | 28, 44 | ❌ manquant (probablement remplaçable par Futura PT Medium) |
| Big Moore | Regular, Italic | 30, 32, 38 | ❌ manquant |
| Helvetica Neue | Regular | 50 | ❌ (police système macOS) |

**Nom réel du fichier fourni** (lu dans la table `name`) : famille `CA Scholar V2`, style `Italic`,
nom complet `CA Scholar V2 Italic`, PostScript `CAScholarV2Italic`. 245 glyphes, graisse 400,
`italicAngle` = 0 (l'inclinaison est dessinée), `fsType` = 0 (embarquement web autorisé),
pas de mention de licence dans le fichier. → `@font-face { font-family: "CA Scholar V2"; font-style: italic; }`.

⚠️ À signaler : la maquette utilise **Scholar Medium, Futura PT (4 graisses), Big Moore et
Helvetica Neue**, qui ne sont pas fournis. Pas de simulation (pas de faux gras) sans ton accord.

### 2.3 Styles de texte (taille / interligne, en px)

Les plus utilisés (tous sans espacement de lettres) :

| Police | Taille / interligne | Couleurs | Casse | Usages |
|---|---|---|---|---:|
| Scholar Italic | 36 / 39 | noir, blanc, crème, doré, lilas | — | 41 |
| Scholar Italic | 50 / 55 (aussi 72, 73, 94) | noir, crème, blanc, doré | — | 26 |
| Scholar Italic | 32 / 35 | noir, `#F7F7F7`, `#B2B2B2`, blanc, bleu | parfois MAJ | 24 |
| Scholar Italic | 30 / 43.2 et 30 / 33 | noir, blanc, doré | parfois MAJ | 23 |
| Scholar Italic | 20 / 22 | noir, blanc | — | 9 |
| Scholar Medium | 20 / 22 | noir, blanc | — | 8 |
| Scholar Italic | 23 / 43.2 | blanc, `#F7F7F7` | MAJ | 6 |
| Scholar Italic | 85 / 123, 93 / 102, 200 / 220 | crème, blanc, lilas | MAJ | 3 (titres d'accueil / police ?) |
| Futura PT Medium | 25 / 43.2 | noir, `#F0F0EF` | parfois MAJ | 14 |
| Futura PT Medium | 32 / 44 | noir | MAJ | 7 |
| Futura PT Book | 25 / 54 | doré, `#F7F7F7` | parfois MAJ | 7 |
| Futura PT Book/Medium | 16–20 / 18–27 | noir, bleu nuit, `#454545` | — | ~20 |

Les tailles (36–50 px pour le texte courant) laissent penser à des artboards larges
(probablement 1920 px ou plus) : les tailles seront converties en `clamp()` une fois la
largeur des artboards connue.

### 2.4 Interactions et transitions (111 au total)

| Type | Nombre | Détail |
|---|---:|---|
| Survol → changement d'état (auto-animate) | 37 | 0,3 s, ease-out ; 47 composants ont un état « Hover » (liens du menu, vignettes…) |
| Clic → autre écran | 53 | majoritairement sans transition ; 0,3 s ou 0,2 s ease-out |
| Clic → écran, glissement vers le haut (`slide-up`) | 4 | 0,2 s (×3) et 1 s (×1) |
| Clic → fondu (`dissolve`) | 3 | 0,3 s (dont 2 en auto-animate) |
| Clic → écran précédent | 3 | bouton retour / EXIT |
| Clic → changement d'état | 9 | bascules (Print mode / Blur ?, jeu ?) |
| Vidéo | 7 | 4 lectures automatiques au chargement, 3 lecture/pause au clic |
| Lien externe | 1 | `https://curlysox.com/en` (page projet CURLY SOX) |

## 3. Écrans du périmètre

**À compléter** dès réception des écrans. Liste attendue d'après le brief :

| Écran | Structure / textes / médias / interactions |
|---|---|
| Accueil | animation illustrée + titre + slogan « For beauty. At all costs. » — *à relever* |
| Portfolio | *à relever* |
| Design / Illustration / Animation | grande image mise en avant, légende, rangée de vignettes — *à relever* |
| Projets : Miles Clayton, Matong'eau, Miscellaneous Editorial, Davie, CURLY SOX, Yarha', L'erreur inspire | *à relever* |
| About | portrait N&B, textes — *à relever* |
| Contact | email, Instagram, LinkedIn, Behance — *à relever* |
| 404 | probablement `Illustration/404.png` ou `404_2.png` |
| Song Generator (cachée) | liste aléatoire + Reload — *à relever* |
| Rock Paper Scissors | *à relever* (visuels `Illustration/Final_RPS/`) |
| Police Ashton | bascules Print mode / Blur — visuels dans `Font/` |

Hors périmètre (ignorés) : Shop (Limited Edition Prints, Fonts, Art), Cart, Review, Thank you.

## 4. Inventaire des assets

Source : dossier Drive « Images_pour_site_web » copié dans `assets-source/`
(**369 fichiers, 2,2 Go**). Ce dossier est exclu de Git (`.gitignore`) : il est trop lourd et contient
des fichiers de travail. Seuls les fichiers utilisés seront copiés, optimisés, dans `src/assets/` ou `public/`.
Tableau complet fichier par fichier : [`assets-inventory.md`](./assets-inventory.md)
(régénérable avec `scripts/inventory-assets.py` puis `scripts/inventory-render.py`).

### 4.1 Vue d'ensemble

| Type | Nombre | Poids total |
|---|---:|---:|
| PNG | 250 | 1 058 Mo |
| MP4 | 22 | 560 Mo |
| PSD (sources Photoshop) | 6 | 217 Mo |
| GIF | 23 | 101 Mo |
| AI (sources Illustrator) | 3 | 99 Mo |
| JPG | 54 | 94 Mo |
| PDF | 9 | 27 Mo |
| HEIC | 1 | 2 Mo |
| OTF | 1 | 0,2 Mo |

### 4.2 Par dossier et usage prévu

| Dossier | Contenu | Usage prévu (à confirmer avec la maquette) |
|---|---|---|
| `Font/` | police, logo (14409×2576), favicon (16×16), visuels de la police (Ashton.png, Capitals/Lowercase/glyphs_display, 8 × `Artboard 60 copy N.png` 1081×1081), `Ashton_Font.gif` (10,6 Mo, 241 images, 10 s), une capture « Indoor Squash » | police du site, en-tête, favicon, page Ashton Font |
| `Ashton_Font_Thumbnail.png` | vignette « Ashton — A reminiscence of intellectual art » | vignette de la page police |
| `Design/davie_behance/` | branding Davie : logo, illustrations, brochure, site web, mockups | projet **Davie** |
| `Design/L'erreur_inspire/` | visuels FailCamp « L'erreur inspire » (JPG légers) | projet **L'erreur inspire** |
| `Design/Rossignol/`, `Design/Japon Mag/`, `Design/The_box*.png`, captures 2024/2025 | magazines Rossignol et Japon, « The box » | probablement **Miscellaneous Editorial** |
| `Design/Screenshot 2024-07-10 at 2.52.00 PM.png` | capture d'une page « MILES CLAYTON » | seule trace du projet **Miles Clayton** |
| `Design/1_Grenier_ch_Atelier_1_Palette_choco_Haut_gamme.jpg` | packaging « Coffee Crisp » | *à confirmer* |
| `Illustration/` (racine) | illustrations finales (Metro, Nick Drake, hotel, orchestra, window4…), 404.png / 404_2.png, affiches Dance Party | catégorie Illustration, page 404 |
| `Illustration/Final_RPS/` | 10 pages « Logical Philosophy About Rock Paper Scissors » | jeu **Rock Paper Scissors** |
| `Illustration/inktober/`, `Inktober_2023/`, `Wildlife/`, `Van_Gogh_Aznarez/`, `scarbourough/`, `Grandma's Appartment/`, `wedding_crasher/`, `Douglass_Adams_road_construction/` | séries d'illustrations + photos de référence et captures de travail | catégorie Illustration |
| `Animation/` | 22 MP4 (0,7 s à 87 s, avec piste audio), 23 GIF, `Surmesur_GIF/` (personnages sur fond noir), `Cyclist/` (images clés) | catégorie Animation, accueil animé ? |

### 4.3 Ce qui manque

- **Écrans de la maquette** : mise en page, textes et attribution des médias (voir § 1).
- **Polices** : CA Scholar V2 Medium, Futura PT (Book, Medium, Demi, Heavy), Big Moore
  (Regular, Italic). Helvetica Neue n'est pas libre pour le web. Licences web à vérifier.
- **Projets sans dossier** : **Matong'eau**, **CURLY SOX**, **Yarha'**, **Miles Clayton**
  (une seule capture). Miscellaneous Editorial n'est pas nommé : attribution à confirmer.
- **Portrait N&B** de la page About : aucune photo de Chad Ashton trouvée.
- **Textes** : biographie About, légendes des projets, email et URLs Instagram / LinkedIn / Behance,
  liste de chansons du Song Generator.
- **Favicon haute définition** : `favicon.png` fait 16×16 ; il faut au moins 180×180 (Apple) et 512×512,
  ou un SVG.
- **Animation d'accueil** : aucun fichier nommé comme tel (candidats : `_grenier_ch_introweb.mp4`,
  `Animation.mp4`…). À identifier sur la maquette.

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
