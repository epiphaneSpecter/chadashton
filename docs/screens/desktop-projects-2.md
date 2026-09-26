# Pages projets (lot C-2) — desktop

Conventions communes observées sur les pages projet desktop (artboard 1920 px) :
- **Titre du projet** en haut à gauche : CA Scholar V2 Italic, ≈ 28 px (hauteur des capitales ≈ 20 px), approche large (≈ +0.1 em), casse phrase (sauf Curly Sox en capitales), x ≈ 137–140, ligne de base ≈ y 88 (bbox y 62–93).
- **EXIT** en haut à droite : même police, ≈ 28 px, capitales, bbox y 63–82. La position varie selon les maquettes : bord droit à x ≈ 1784 (Misc. Editorial, Curly Sox) ou x ≈ 1822 (L'erreur Inspire, RPS). Recommandation : aligner sur une seule marge droite (≈ 136 px, symétrique du titre).
- Couleur de l'EXIT : gris foncé ≈ #454545 sur fond clair (trait fin antialiasé : peut aussi être #000 ; à confirmer), **#000 souligné** sur L'erreur Inspire (probablement l'état hover/actif), **#B2B2B2** sur fond noir (RPS).
- Tous les contenus sous l'en-tête sont des **images aplaties** (mockups, pages scannées) : le seul texte « live » est l'en-tête (titre + EXIT) et, sur Curly Sox, le lien « Visit CURLYSOX.COM ».

---

### Miscellaneous Editorial (`design/desktop/miscellaneous-editorial.webp`)
(Correspond à l'entrée « Miscelaneous Print Works » de la page Design.)

- **Fond / couleurs** : fond #F7F7F7 uniforme ; texte titre #000000 ; EXIT ≈ #454545 (non souligné). Ligne noire de 1 px à y = 0 (artefact d'export de l'artboard, à ignorer).
- **Structure** (artboard 1920 × 17396) :
  1. En-tête : titre x 137–916, y 66–93 ; EXIT x 1719–1784, y 63–82.
  2. Une pile verticale de **13 images mockup PNG transparentes**, chacune affichée en **pleine largeur 1920 × 1440** (source 4200 × 3150, ratio 4:3), sans marge, centrées ; elles se **chevauchent** (pas vertical ≈ 1315 px < 1440 px) car leur fond est transparent — le contenu visible (le magazine) occupe environ x 278–1645 et ≈ 1137 px de haut, avec ~180 px de vide entre deux mockups et une ombre portée douce sous chaque magazine.
     Positions (haut de l'image dans l'artboard, approx.) :
     | # | y top | contenu visible (y) | fichier |
     |---|---|---|---|
     | 1 | 0 | 218–1262 (couverture seule, x 597–1350) | `Front.png` |
     | 2 | 1294 | 1504–2641 | `2-3.png` |
     | 3 | 2609 | 2819–3955 | `4-5.png` |
     | 4 | 3924 | 4134–5270 | `6-7.png` |
     | 5 | 5238 | 5448–6584 | `8-9.png` |
     | 6 | 6552 | 6762–7899 | `10_11.png` |
     | 7 | 7867 | 8077–9214 | `12-13.png` |
     | 8 | 9182 | 9392–10528 | `14-15.png` |
     | 9 | 10497 | 10707–11843 | `16-17.png` |
     | 10 | 11811 | 12021–13157 | `18-19.png` |
     | 11 | 13126 | 13336–14472 | `20-21.png` |
     | 12 | 14441 | 14651–15787 | `22-23.png` |
     | 13 | 15755 | 15961–17128 (4e de couv + couverture) | `Cover.png` |
     Bas de page : ~270 px de vide après la dernière ombre. Pas de footer dessiné.
  → Rebuild conseillé : `<img>` pleine largeur (`w-full`), `-mt-[125px]`/chevauchement ou simplement recadrer les PNG sur leur bbox et empiler avec `gap` ≈ 180 px.
- **Textes** :
  - « Poster/panphlet for C2 conference, academic project » — CA Scholar V2 Italic ≈ 28 px, casse phrase, #000, aligné à gauche, non souligné, letter-spacing large.
  - « EXIT » — CA Scholar V2 Italic ≈ 28 px, capitales, ≈ #454545, non souligné.
  - Tous les textes du magazine (ROSSIGNOL, « COLLECTION ALPINE 2020-2021 », « ANOTHER BEST DAY », « TABLE DES MATIÈRES », « SOUS UN JOUR DE RÊVE », « SKI ALPIN », « TROUVE TA VOIX », « LES DISCIPLINES DE SKI ALPIN », « DESCENTE », « SLALOM GÉANT », « SUPER-G », « SKI «FREESTYLE» », « FREERIDE 7-SERIES / SKI ALPIN 2019-2020 », « PUISSANCE INTUITIVE », fiches SEEK 7 TOUR / SKY 7 HD / SOUL 7 HD / SUPER 7 HD, « TECHNOLOGIES », « 4. AMORTISSEUR DE SPATULE », « 5. SPATULE 2.0 », « 6. CONTRÔLE DYNAMIQUE »…) sont **dans les images**, pas à recoder.
- **Médias** : les 13 fichiers de `assets-source/Design/Rossignol/Rossignol_mag/` (tous 4200 × 3150 RGBA, fond transparent) dans l'ordre ci-dessus — correspondance certaine (bbox alpha vérifiée : Front → x 597–1350 / y 219–1261 à l'échelle 1920). Poids élevé : à convertir en WebP/AVIF redimensionné (1920 et 960 px), en conservant l'alpha.
- **Interactions supposées** : EXIT → retour à la page Design (`/design`). Aucun lien sur les images (éventuellement lightbox, non indiqué). Défilement vertical simple.
- **Remarques** :
  - Faute de frappe « panphlet » (→ « pamphlet ») à conserver ou corriger avec le client.
  - **Incohérence de contenu** : le titre parle d'un « Poster/pamphlet for C2 conference » mais la page ne montre que le catalogue **Rossignol « Collection Alpine 2020-2021 »** — qui a déjà son propre projet « Rossignol Magazine ». Soit le titre est un reste d'un autre projet, soit le contenu devait être autre (candidats non utilisés dans `assets-source/Design/` : `1937793_Grenier_C_affiche-brochure_V2.pdf`, `02_grenier_c_brochure_sans.pdf`, `2_grenier_c_de1_p2_zine_lecture.pdf`, `Screenshot 2024-07-10 at 2.50.23 PM.png` « RÉSILIENCE », `Screenshot 2025-01-21 at 4.09.59 PM.png` « Jeff Koons », `1_Grenier_ch_Atelier_1_Palette_choco_Haut_gamme.jpg` Coffee Crisp). À clarifier avec le client.
  - Nom de la page : « Miscellaneous Editorial » (fichier) vs « Miscelaneous Print Works » (liste Design, avec faute) vs « Miscellaneous Print Works » (mobile).

---

### L'erreur Inspire (`design/desktop/lerreur-inspire.webp`)

- **Fond / couleurs** : fond **#FFFFFF** (blanc pur, et non #F7F7F7) ; bandeau final **#000000** ; textes d'en-tête #000 ; illustrations roses (≈ #FE7E90 / #F7A6B0, dans les images).
- **Structure** (artboard 1920 × 3214) :
  1. En-tête : titre x 135–1166, y 62–89 ; EXIT x 1758–1823, y 63–87 (souligné, trait ≈ 2 px sous la ligne de base).
  2. **Rangée de 3 images carrées bord à bord**, y 251–885 (≈ 634 × 634 chacune, sans gouttière) : x 0–633 (tour de Pise + « L'ERREUR INSPIRE / L'ORIGINALITÉ… »), x ≈ 612–1245 (avion + « L'INNOVATION… »), x 1284–1920 (caravelle + « LA DÉCOUVERTE. »). Les images ont un fond quasi blanc (#FDFDFE) légèrement visible.
  3. ~40 px de blanc.
  4. **Fiche programme** pleine largeur : image 1920 × 1373, y 922–2295. Contenu en 3 colonnes (dans l'image) : colonne gauche x 196–540 (texte de présentation), colonne centrale centrée sur x 960 (date / lieu / avion), colonne droite x 1398–1730 (conférenciers) ; en dessous une citation italique x 196–1335 et les contacts x 1404–1706 avec icônes Facebook / YouTube ; crédit vertical « Design par Chad A. Grenier » à x ≈ 1815.
  5. **Visuel « L'ERREUR INSPIRE » + tour de Pise**, ≈ 732 × 560, x ≈ 604, y ≈ 2068–2628 (centré, légèrement chevauchant le bas de la fiche).
  6. **Bandeau noir pleine largeur** y 2628 → fin (3214), contenant le logo FailCamp : image 1048 × 585 centrée (x 436–1484, y 2630–3215).
- **Textes** :
  - « Advertising campaign for an event by Fail Camp, an academic project » — CA Scholar V2 Italic ≈ 28 px, casse phrase, #000, gauche.
  - « EXIT » — CA Scholar V2 Italic ≈ 28 px, capitales, #000, **souligné**.
  - Dans les images (Futura PT, à ne pas recoder sauf choix d'accessibilité) : « L'ERREUR INSPIRE L'ORIGINALITÉ… », « L'INNOVATION… », « LA DÉCOUVERTE. » ; « FailCamp est un évènement visant à promouvoir la prise de risques et l'entrepreneuriat par la célébration de l'échec; car comme le savent tous les innovateurs, c'est quand les choses fonctionnent le moins que nous apprenons le plus. » / « La mission de FailCamp est de légitimer l'échec dans le discours public afin d'encourager la prise de risques : entrepreneuriat, politique, sport, design, des univers qui n'existent que parce que nombreux sont ceux qui, en fait, n'y réussissent pas. » ; « 29 JANVIER 2021 » / « Le District » / « Resto-bar, salle de spectacle » / « 240, rue Saint-Joseph Est » ; « Les conférenciers » : « 13h45 : Accueil », « 14h30 : Steeve Godbout », « 15h : Catherine Dorion », « 16h30 : Anne Marcotte », « 17h : Dominic Gagnon », « 17h45 : Jeff Lee », « 18h15 : Ody Giroux », « 19h : Cocktail et réseautage » ; « «Les fois dans ma vie où j'ai senti que j'avais échoué, c'était plus souvent du à mon incapacité d'agir et de mettre mes pions en place pour peut-être vivre une potentielle réussite. Je ne perdais rien, mais je ne me débrouillais pas pour gagner non plus». » / « — Lysandre Nadeau, Youtuber » ; « lea@fg8.ca », « facebook.com/ FailCamp » ; « Design par Chad A. Grenier » ; « L'ERREUR INSPIRE » ; logo « FAIL camp QC » + « L'ERREUR INSPIRE ».
- **Médias** (`assets-source/Design/L'erreur_inspire/`) :
  - Tour « originalité » (carré) → `Artboard 1 copy 5-100.jpg` (661×661) — certain.
  - Avion « innovation » (carré) → `Artboard 1 copy 2-100.jpg` (660×661) — certain.
  - Caravelle « découverte » (carré) → `Artboard 1-100.jpg` (661×661) — certain.
  - Fiche programme → `Artboard 17-100.jpg` (1400×1001) — certain (upscalé à 1920 : prévoir un export plus grand depuis `behance_soiree_portfolio.ai` ou le PDF `1_Grenier_Ch_DPI_carton_projet_II_A21.pdf` pour la netteté).
  - « L'ERREUR INSPIRE » + tour → `Artboard 1 copy 4-100.jpg` (1022×782) — probable (recadrage légèrement différent).
  - Logo FailCamp sur noir → `Artboard 1 copy 3.png` (ou doublon `Artboard 1 copy 3-100.jpg`, 1400×782) — certain.
  - Non utilisés : `Artboard 1 copy 6/7/8-100.jpg` (versions 16:9 des 3 visuels).
- **Interactions supposées** : EXIT → page Design. Dans l'image, e-mail / facebook / icônes sociales ne sont pas cliquables (pur visuel de l'affiche). Pas de vidéo.
- **Remarques** :
  - Fond blanc #FFF différent du #F7F7F7 des autres pages : probablement voulu pour se fondre avec le fond blanc des JPG. Garder #FFF sur cette page (ou détourer les images).
  - Artboard coupé : le bandeau noir se termine au bas de l'artboard (pas de marge basse) → page qui finit sur le bandeau noir.
  - « du à mon incapacité » (→ « dû ») : faute dans l'image source.
  - EXIT souligné ici seulement → à traiter comme état hover.

---

### Rock Paper Scissors (`design/desktop/rock-paper-scissors.webp`)
(Correspond à l'entrée « Mind-bogglers » de la page Design ; la page regroupe 2 projets : le pamphlet RPS et « Think inside the box ».)

- **Fond / couleurs** : fond de page **#000000** ; titre et sous-titre #F7F7F7 ; EXIT #B2B2B2 ; pages du pamphlet (image) fond #F4F3F1 ; carré « box » vert sarcelle ≈ #005F53 avec texte pêche (dans l'image).
- **Structure** (artboard 1920 × 2386) :
  1. Bande d'en-tête noire y 0–140 : titre x 137–1335, y 62–89 ; EXIT x 1759–1822, y 63–82.
  2. **Bande de pages du pamphlet**, y 140–1070 (hauteur 930), pages 743 × 929 posées côte à côte : page 1 (couverture) x 0–743, filet noir de 2 px, page 2 x 745–1488, page 3 x 1488–2232 **coupée par le bord droit** (déborde de l'écran) → suggère un carrousel / défilement horizontal des 10 pages.
  3. Espace noir ~85 px, puis sous-titre « Think inside the box design » x 140–527, y 1155–1182.
  4. Image carrée « box » centrée : x 481–1440, y 1272–2234 (≈ 959 × 962).
  5. Marge basse noire ≈ 150 px.
- **Textes** :
  - « Digital pamphlet design, vector illustrations and text composition, personal project » — CA Scholar V2 Italic ≈ 28 px, casse phrase, #F7F7F7, gauche.
  - « EXIT » — CA Scholar V2 Italic ≈ 28 px, capitales, #B2B2B2, non souligné.
  - « Think inside the box design » — CA Scholar V2 Italic ≈ 28 px, casse phrase, #F7F7F7, gauche (x 140) — même style que le titre, sert de titre de 2e section.
  - Dans les images : « Logical Philosophy About / ROCK PAPER SCISSORS », « Designed and developed by CHAD ASHTON », « 1 ROCK PAPER SCISSORS IS MORE STRATEGIC THAN CHESS. » + paragraphes (Futura PT) ; « For decades, we have been told to “think outside the box”… …to the extent that we've actually forgotten that great possibilities still lie INSIDE THE BOX. » (serif).
- **Médias** :
  - Page 1 → `assets-source/Illustration/Final_RPS/Rock_Paper_Scissors_Philosophy.jpg` (2250×2813) — certain.
  - Page 2 → `…/Final_RPS/Rock_Paper_Scissors_Philosophy2.jpg` — certain.
  - Page 3 → `…/Final_RPS/Rock_Paper_Scissors_Philosophy3.jpg` — certain.
  - Pages 4 à 10 (`Philosophy4.jpg` … `Philosophy10.jpg`) existent dans les sources et formeraient la suite du carrousel (non visibles sur la maquette).
  - Box → `assets-source/Design/The_box_1.png` (1788×1792, version verte) — certain. Variante rose `The_box.png` non utilisée (éventuel hover/alternance).
- **Interactions supposées** : EXIT → page Design. Bande de pages : scroll horizontal (overflow-x, scroll-snap) ou carrousel avec flèches, 10 pages. Pas de vidéo.
- **Remarques** :
  - Seule page projet sur fond noir : vérifier que l'en-tête (logo/nav globale éventuelle) passe en clair.
  - L'ordre « page 2 | page 3 » forme une double page (la pièce d'échecs roi est coupée entre les deux) : garder les pages 2-3 accolées sans filet, contrairement au filet de 2 px entre page 1 et 2.
  - Nom « Mind-bogglers » (liste Design) vs « Rock Paper Scissors » (fichier).

---

### Curly Sox (`design/desktop/curly-sox.webp`)

- **Fond / couleurs** : fond #F7F7F7 ; titre et lien #000000 ; EXIT ≈ #454545.
- **Structure** (artboard 1920 × 1052, tient dans un écran) :
  1. En-tête : titre x 140–594, y 63–82 ; EXIT x 1718–1781, y 63–82.
  2. **Rangée de 5 paires de chaussettes détourées** (PNG transparents, pas de cadre), alignées en bas approximativement, y ≈ 200–890 ; espacement irrégulier :
     - 1 « SHOW JUMPING » (vert) : x 154–365, y 236–867
     - 2 escalade (crème/turquoise) : x 492–703, y 231–874
     - 3 camion de glaces / chien (gris) : x 770–992, y 213–873
     - 4 « EVENTING » dressage (blanc/menthe) : x 1140–1375, y 207–880
     - 5 chutes de cheval (crème/jaune) : x 1494–1743, y 201–891
     Largeur de chaque visuel ≈ 210–250 px, gouttières ≈ 70–150 px (les paires 2 et 3 sont rapprochées, ≈ 67 px). En Tailwind : grille de 5 colonnes égales `justify-items-center` suffit.
  3. Lien « Visit CURLYSOX.COM » aligné à droite : x 1457–1706, y 980–1000.
- **Textes** :
  - « SOCK ILLUSTRATION CONTRACT » — CA Scholar V2 Italic ≈ 28 px, **capitales**, #000, gauche, letter-spacing large.
  - « EXIT » — CA Scholar V2 Italic ≈ 28 px, capitales, ≈ #454545.
  - « Visit CURLYSOX.COM » — CA Scholar V2 Italic ≈ 28 px, « Visit » en casse normale + « CURLYSOX.COM » en capitales, #000, **souligné** sur toute la longueur, aligné à droite (bord droit x ≈ 1706).
- **Médias** : 5 photos de chaussettes détourées — **introuvables dans assets-source** (aucun fichier « sock / sox / curly » ; `docs/assets-inventory.md` n'en mentionne aucun). À demander au client (idéalement PNG/WebP à fond transparent).
- **Interactions supposées** : EXIT → page Design (ou page Illustration : le projet est une commande d'illustration, catégorie à confirmer). « Visit CURLYSOX.COM » → lien externe `https://curlysox.com` (nouvel onglet).
- **Remarques** : l'entrée Curly Sox n'apparaît pas dans la liste de la page Design fournie → probablement listée sous Illustration ; adapter la cible de l'EXIT.

---

### Moodboard (`design/desktop/moodboard.webp`)

- **Nature** : **ce n'est ni une page du site ni un moodboard d'inspiration**, mais une **planche de composants / états d'interface** (UI kit) de 4436 × 3528 sur fond #FFFFFF, montrant à taille réelle (échelle 1:1 desktop) les éléments réutilisables et leurs variantes. À utiliser comme référence de styles, pas à reproduire comme route.
- **Fond / couleurs** : #FFFFFF ; éléments #000000 ; cadre gris clair ≈ #B2B2B2 (1 px) ; bulle « copy » **#CEBAD1** (≈ lilas #CFBAD1) avec texte blanc.
- **Structure / contenu** (coordonnées dans la planche 4436 px) :
  1. Icône panier seule, x 4119–4163, y 548–579 (≈ 44 × 31 px).
  2. **États du sous-menu Portfolio**, x ≈ 512–960, y ≈ 932–1075 : trois lignes « DESIGN   ILLUSTRATION   ANIMATION », chacune avec un item actif en **gras** (ligne 1 DESIGN, ligne 2 ILLUSTRATION, ligne 3 ANIMATION) ; CA Scholar V2 Italic, capitales, ≈ 18–20 px, #000, items espacés d'≈ 130 px.
  3. **États du panier**, x 2306–2379, y 932–1216 : panier vide, puis panier + « 1 », « 2 », « 3 » (compteur en CA Scholar Italic à droite de l'icône) — lié au Shop (ignorer pour le rebuild si Shop hors périmètre, mais l'icône panier reste dans la nav).
  4. Libellé « Portfolio » (x 3225–3356, y 1375–1398), au-dessus d'un **cadre 1920 × 1077** (x 2306–4225, y 1460–2536, contour gris 1 px) = gabarit d'écran desktop contenant :
     - Header : « C. ASHTON » (logo texte, CA Scholar V2 Italic ≈ 44 px, capitales, x ≈ 2460) ; nav « Portfolio   Shop   About   Contact » (CA Scholar V2 Italic ≈ 30 px, casse phrase ; « Contact » **souligné** = état actif/hover) + icône panier à droite (x ≈ 4045).
     - « < BACK » (x ≈ 2740–2845, y ≈ 2336) — **Futura PT** droit, capitales, ≈ 26 px, chevron fin à gauche : bouton retour (variante de l'EXIT, sans doute pour mobile/lightbox).
     - Croix de fermeture « × » fine (x ≈ 4130, y ≈ 2166) : bouton close de lightbox/menu.
  5. Rangée d'états isolés, y ≈ 2625–2700 : « EXIT » souligné (CA Scholar V2 Italic ≈ 34 px, x ≈ 2977–3075) et bulle d'infobulle « copy » (x ≈ 3420–3530, pastille arrondie lilas avec pointe vers le haut, texte blanc italique ≈ 22 px) → feedback « copié » (probablement au clic sur l'adresse e-mail de la page Contact).
  6. Icône **astérisque dans un cercle** (x 2700–2882, y 2892–3074, Ø ≈ 182 px, contour noir 3 px, étoile à 8 branches) — probable bouton/curseur décoratif (ex. lien vers la page cachée « song generator » ou bouton « scroll to top ») ; usage non précisé.
- **Médias** : aucun (icônes vectorielles : panier, ×, chevron, astérisque — à redessiner en SVG ; introuvables dans assets-source).
- **Interactions supposées** : active/hover = soulignement (nav, EXIT) ; catégorie courante = gras dans le sous-menu Portfolio ; bulle « copy » au clic de copie ; compteur panier.
- **Remarques** : l'essentiel de la planche est vide (grand espace blanc à gauche et en haut) ; certaines positions sont approximatives. Les états « gras » du sous-menu confirment l'usage d'une graisse Bold Italic de CA Scholar V2 (ou synthétique) — vérifier la disponibilité de la graisse.

---

## Assets introuvables dans assets-source
- Curly Sox : les 5 photos de chaussettes détourées.
- Moodboard : icônes panier, ×, chevron « < », astérisque cerclé (à refaire en SVG).
- (Misc. Editorial : tous les visuels trouvés, mais le contenu ne correspond pas au titre « C2 conference ».)
