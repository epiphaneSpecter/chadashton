# E — Maquettes MOBILE (393 px) — C. ASHTON

Source : `design/original/mobile/*.png` (artboards XD 393 px de large, hauteur variable). Toutes les mesures ci-dessous sont en px **dans l'artboard 393 px** (1 px maquette = 1 px CSS sur un iPhone 14/15 : viewport 393 × 852). Mesures faites par détection automatique de boîtes englobantes (PIL) : les hauteurs de texte données sont des **hauteurs de glyphes mesurées** (hauteur de capitale ou capitale + jambage) ; la taille de police CSS estimée est indiquée à côté (≈ cap-height / 0,7).

Polices : **CA Scholar V2 Italic** (`assets-source/Font/CAScholarV2-Italic.otf`) partout sauf mention contraire. Certaines légendes/libellés en capitales ressemblent à du Futura PT (oblique) — indiqué au cas par cas. La page Miles Clayton utilise une serif de type Bodoni/Didot (romaine + italique) — voir la section.

Hors périmètre V1 : lien **Shop** et icône **panier** (présents dans le menu mobile) → **retiré en V1**. Écrans Shop/Cart ignorés. Ashton Font / Song Generator mobiles : couverts par un autre agent.

Constantes réutilisées (définies une fois ici, référencées ensuite) :

- **HEADER-A (pages « site »)** : logo texte `C. ASHTON` à gauche, x = 30, glyphes y = 58–76 (cap-height 19 px → police ≈ 26–27 px), largeur 144 px (x 30–173), letter-spacing large (~0,08 em). Icône burger à droite : astérisque à **8 branches égales**, 32 × 32 px, x 339–370, y 49–81 (trait ≈ 2,5 px). Zone header ≈ 0–110 px, pas de fond propre (transparent sur la couleur de page), **pas de ligne de séparation**. Couleur logo + icône = couleur de texte de la page.
- **HEADER-B (pages « projet »)** : pas de logo ni de burger. Texte descriptif du projet en haut à gauche (x = 20, première ligne y ≈ 55, 1 à 3 lignes, cap ≈ 10–11 px → police ≈ 15 px, interligne ≈ 17–18 px, letter-spacing ~0,08 em, CA Scholar italique) et lien **`EXIT`** en haut à droite (x 331–371, y 55–67, cap 13 px → ≈ 18 px, capitales, letter-spacing large). Le texte descriptif est limité à ≈ 250–290 px de large pour ne pas passer sous `EXIT`.
- **FOOTER-A** (pages « site » claires) : centré. Email `chadgrenier42@gmail.com` souligné (≈ 15 px, x 102–299) ; 34 px plus bas la ligne `Instagram` / `LinkedIn` / `Behance` soulignés (≈ 15 px) positionnés à x 52–126 / 172–231 / 278–339 (≈ space-around) ; 34 px plus bas un **filet pleine largeur** (2 px, #3e3e3e sur fond clair / blanc sur fond foncé) ; 13 px dessous la signature `For beauty. At all costs.` centrée (x 89–299, glyphes 18 px → police ≈ 20 px) ; ≈ 12–15 px de marge basse. Hauteur totale du footer ≈ 115 px (du haut de l'email au bas de l'artboard).
- **SUBNAV-BAS** (pages catégorie Design / Illustration / Animation) : barre de 56 px (y 796–852 de l'artboard = **bas du premier viewport 852 px**) → c'est une barre **fixe collée en bas de l'écran** (position: fixed; bottom: 0) qui masque le contenu sous elle dans la maquette. Fond = couleur de la page. Trois libellés en capitales ≈ 15 px (cap 11 px), letter-spacing ~0,1 em, sur une ligne (y 811–822) : catégorie courante en **gras/droit** (probablement Futura PT Bold Oblique), les deux autres en CA Scholar italique avec une flèche `←` (catégorie à gauche dans l'ordre Design → Illustration → Animation) ou `→` (à droite).
- **CROSS-NAV** (bas des pages catégorie) : les deux autres catégories répétées en gros libellés centrés (capitales ≈ 20 px, cap 14 px) espacés de 158 px, entre le contenu et le footer.

---

### Landing (`design/mobile/landing.webp`)

- **Fond / couleurs** : #fff9f8 (blanc rosé) uni ; texte #000000.
- **Structure** (artboard 393 × 852, un seul écran, pas de scroll) :
  1. Aucun header, aucun burger.
  2. `Chad ASHTON` centré horizontalement (x 89–308, w 220), glyphes y 389–412 → centre vertical ≈ 400 (= ~47 % de la hauteur, donc visuellement centré).
  3. `For beauty. At all costs.` centré, y 714–732 (≈ 120 px du bas).
- **Textes** :
  - `Chad ASHTON` — CA Scholar V2 Italic, cap 23 px → ≈ 32 px, casse mixte (« Chad » bas-de-casse, « ASHTON » capitales), letter-spacing large (~0,12 em), #000.
  - `For beauty. At all costs.` — CA Scholar italique ≈ 20 px, #000, centré, letter-spacing ~0,06 em.
- **Médias** : aucun.
- **Différences avec le bureau** : même composition (nom au centre, signature en bas), le nom passe de ≈ 62 px de cap-height (≈ 88 px) sur desktop à 23 px (≈ 32 px) sur mobile, soit ≈ 0,37×. Signature : 27 → 18 px (≈ 0,67×).
- **Remarques** : écran « splash » ; probablement cliquable → Portfolio (à confirmer). Utiliser `min-h-[100svh]` + flex colonne, nom centré, signature en `mt-auto` avec ~120 px de marge basse.

---

### Menu mobile ouvert (`design/mobile/hamburger.webp`)

- **Fond / couleurs** : overlay plein écran **#a87b15** (ocre/moutarde, même couleur que la page About). Tous les textes et icônes en **#f7f7f7** (blanc cassé). Filet du footer blanc (1–2 px).
- **Structure** (393 × 843 ≈ 1 viewport, overlay qui couvre tout l'écran, pas de scroll) :
  1. **Header** identique à HEADER-A mais en blanc : `C. ASHTON` x 30, y 58–76. À droite, **bouton de fermeture** à la même place que le burger (x 337–370, y 48–81, 34 × 34 px) : c'est une **étoile/scintillement** blanche — branches verticale et horizontale longues (34 px), diagonales courtes (~16 px), petit disque central — donc l'astérisque du burger « se transforme » en étincelle (animation de rotation/échelle possible). Pas de croix « X ».
  2. **Liste de navigation** centrée horizontalement (axe x ≈ 196), 5 entrées empilées avec un pas vertical ≈ 97 px :
     - `Portfolio` — glyphes y 190–205 (centre ≈ 198), x 153–237
     - `Shop` — y 287–307 (centre ≈ 297), x 171–219 → **retiré en V1**
     - `About` — y 382–397 (centre ≈ 390), x 165–227
     - `Contact` — y 484–499 (centre ≈ 492), x 158–236
     - icône **panier** (38 × 27 px, pleine, blanche) — y 579–606, x 177–214 → **retiré en V1**
  3. **Pied du menu** (footer compact, collé en bas) :
     - `chadgrenier42@gmail.com` souligné, centré, y 733–748 (≈ 15 px)
     - `Instagram` · `LinkedIn` · `Behance` soulignés, y 767–782, x 52–126 / 172–231 / 278–339
     - filet horizontal pleine largeur blanc, y ≈ 801–803
     - `For beauty. At all costs.` centré, y 816–834 (≈ 20 px)
- **Textes** : entrées de menu en CA Scholar V2 Italic, casse « Titre » (`Portfolio`, `About`, `Contact`), cap ≈ 15 px → **≈ 22 px**, letter-spacing ~0,1 em, #f7f7f7, centrées. Liens du pied ≈ 15 px soulignés. Signature ≈ 20 px.
- **Médias** : icônes (burger fermé → étincelle, panier) à faire en SVG inline. Pas d'image.
- **Différences avec le bureau** : sur desktop la nav est horizontale dans le header (`Portfolio  Shop  About  Contact  [panier]`, alignée à droite, ≈ 30 px de cap, lien actif souligné) ; aucun overlay. Sur mobile la nav est cachée derrière le burger et s'ouvre en overlay plein écran ocre. Le lien actif n'est pas marqué dans la maquette du menu.
- **Remarques / implémentation** :
  - Sans Shop ni panier (V1), il reste 3 entrées : conserver le pas ≈ 97 px et recentrer le bloc verticalement (ou garder le début à y ≈ 198).
  - Overlay `fixed inset-0 z-50 bg-[#a87b15] text-[#f7f7f7]`, `flex flex-col`, liste en `flex-1 flex flex-col items-center justify-center gap-[~75px]`, pied en bas. Bloquer le scroll du body quand ouvert ; fermer sur Échap et sur clic d'un lien ; `aria-expanded`/`aria-controls` sur le bouton ; focus piégé.
  - Le header du menu doit se superposer exactement au header de la page (même position du logo et du bouton) pour que l'icône semble simplement changer.

---

### Portfolio (`design/mobile/portfolio.webp`)

- **Fond / couleurs** : #f7f7f7 ; texte #000 ; filet #3e3e3e.
- **Structure** (393 × 1200) :
  1. HEADER-A (noir).
  2. `DESIGN` centré, glyphes y 208–222.
  3. `ILLUSTRATION` centré, y 366–380.
  4. `ANIMATION` centré, y 524–538. (pas de 158 px entre les trois)
  5. Ligne « découvrir la police » y 712–755 : `discover` (petit, x 58) + `The Ashton Font` (x 125–268) + pastille ronde à droite (cercle 43 px de diamètre, trait 1 px, avec astérisque 8 branches au centre ; x 294–336) — le tout centré, alignés sur la ligne de base.
  6. Email y 915–930, réseaux y 1016–1031 (écart plus grand que FOOTER-A standard : ~86 px, dû à la hauteur fixe de l'artboard).
  7. Filet y 1152–1154, signature y 1167–1185.
- **Textes** :
  - Catégories `DESIGN`, `ILLUSTRATION`, `ANIMATION` : capitales, cap 14 px → ≈ 20 px, italique, letter-spacing ~0,12 em, centrées. Liens vers les pages catégorie.
  - `discover` ≈ 13 px bas-de-casse ; `The Ashton Font` ≈ 18 px. Lien vers la page Ashton Font.
  - Footer : voir FOOTER-A.
- **Médias** : aucun (pastille = SVG).
- **Différences avec le bureau** : desktop = les trois catégories **sur une ligne** (≈ 447–1456 px) au milieu de l'écran et seule la pastille ronde (55 px) en bas à droite, sans texte « discover The Ashton Font » ; footer desktop sur **une ligne** (email à gauche, réseaux à droite) au-dessus du filet. Mobile : catégories **empilées verticalement**, texte « discover The Ashton Font » ajouté à côté de la pastille, footer empilé et centré.
- **Remarques** : page quasi typographique ; garder de grands espacements verticaux (≈ 158 px) mais les rendre fluides (`gap-[clamp(...)]`).

---

### Design (`design/mobile/design.webp`)

- **Fond / couleurs** : deux sections — **noire #000000** (y 0–1224) puis **verte #3a8146** (y 1224–2240). Textes blancs #f7f7f7 / #fff ; légendes de cartes grises claires ; filet du footer blanc cassé.
- **Structure** (393 × 2240) :
  1. HEADER-A en blanc sur noir.
  2. **Projet mis en avant** : image carrée 337 × 335 à x 28, y 127 (« YOU GIVE ME », pochette Miles Clayton). Légende en dessous, alignée à gauche x 28, 3 lignes minuscules (y 473–499) : `You Give Me` / `Single artwork for Miles Clayton` / `(Latest project)` — ≈ 9–10 px, la 3ᵉ plus petite (≈ 7 px) ; gris clair #989898 environ.
  3. **Grille de projets 2 colonnes** : cartes 170 × 126 px, colonnes x 20 et x 200 (gouttière 10 px, marges 20 / 23 px), rangées à y 545, 708, 871, 1046 (pas ≈ 163–175 px). Légende centrée sous chaque carte (8 px dessous, ≈ 11 px, italique, blanc/gris clair). Ordre :
     - `Miles Clayton` | `Davie`
     - `Rossignol Magazine` | `Matong'EAU` (légendes masquées par la barre fixe dans la maquette)
     - `Miscelaneous Print Works` | `L'erreur Inspire`
     - `Mind-bogglers` | `Yarha'`
  4. **SUBNAV-BAS** fond noir : `DESIGN` (actif, gras, x 35–90) · `ILLUSTRATION→` (x 135–245) · `ANIMATION→` (x 272–371).
  5. **Section verte** : affiche « Indoor Squash » 288 × 285 à x 53, y 1273 (blanc au trait sur vert, pas de cadre).
  6. `discover The Ashton Font` + pastille (même composant que Portfolio, en blanc), y 1636–1679.
  7. CROSS-NAV : `ILLUSTRATION` (y 1828) et `ANIMATION` (y 1986), blancs.
  8. FOOTER-A en blanc (email y 2125, réseaux y 2159, filet y 2193, signature y 2208).
- **Textes** : cf. ci-dessus ; `Miscelaneous` est écrit ainsi (faute d'orthographe dans la maquette ; desktop idem → suggérer « Miscellaneous »).
- **Médias** :
  - You Give Me : **introuvable** dans assets-source.
  - Vignettes : Miles Clayton (photo duo) **introuvable** ; Davie → `assets-source/Design/davie_behance/Artboard 1 copy 3.png` (logo + bateaux) ou `Davie_Logo.png` ; Rossignol → `assets-source/Design/Rossignol/Rossignol_mag/Front.png` ; Matong'EAU (logo blanc sur bleu #3384c6) **introuvable** ; Misc Print Works → `assets-source/Design/Screenshot 2025-01-21 at 4.09.59 PM.png` (article Jeff Koons) ; L'erreur Inspire → `assets-source/Design/L'erreur_inspire/Artboard 1 copy 4-100.jpg` ; Mind-bogglers → `assets-source/Illustration/Final_RPS/Rock_Paper_Scissors_Philosophy.jpg` ; Yarha' (logo) **introuvable**.
  - Affiche Indoor Squash → `assets-source/Font/Screen Shot 2022-08-31 at 5.25.40 PM.png`.
- **Différences avec le bureau** : desktop = hero centré 430 px avec légende **à droite** de l'image ; grille **4 colonnes** (2 rangées) ; section verte avec légende `Ashton font display catalogue` à gauche et pastille à droite ; cross-nav `ILLUSTRATION  ANIMATION` sur une ligne ; footer en ligne. Mobile : hero pleine largeur (marges 28 px) avec légende **dessous**, grille **2 colonnes**, ordre différent (desktop : Miles Clayton, Davie, Rossignol, Matong'EAU / Yarha', L'erreur Inspire, Mind-bogglers, Misc Print Works), « Ashton font display catalogue » remplacé par « discover The Ashton Font », ajout de la barre SUBNAV-BAS fixe, cross-nav empilée.
- **Remarques** : ordre des cartes mobile ≠ desktop — choisir un ordre unique (recommandé : ordre mobile, ou garder l'ordre desktop et laisser la grille se replier ; à valider). Vignettes en `aspect-[170/126] object-cover`.

---

### Illustration (`design/mobile/illustration.webp`)

- **Fond / couleurs** : #f7f7f7 ; textes #000.
- **Structure** (393 × 7197) — **une seule colonne**, images pleine largeur 350 px (x 20–370), espacement vertical ≈ 24–30 px entre images :
  1. HEADER-A.
  2. Violoniste (N&B) 350 × 242, y 111.
  3. Allée d'arbres (bordeaux) ≈ 346 × 427, y 368 (x 24).
  4. SUBNAV-BAS fond #f7f7f7 : `←DESIGN` (x 23) · `ILLUSTRATION` (actif, gras, centré) · `ANIMATION→` (droite, x ≈ 367 max).
  5. Chaussette Curly Sox (détourée, 81 × 241, centrée, y 925) + lien souligné `View CURLY SOX project` centré (y 1208–1219, ≈ 14 px).
  6. Escalier/personnage orange 350 × 306 (y 1264).
  7. Cuisine 350 × 552 (y 1599).
  8. Escalier Scarborough 349 × 218 (y 2180).
  9. Salle à manger 351 × 232 (y 2426).
  10. Salon 347 × 224 (y 2686).
  11. **Triptyque sur une ligne** (y 2938, h 155) : 3 images côte à côte x 20–122 (103 px), 126–242 (117 px), 247–371 (125 px), gouttière ≈ 4 px (arbre bleu / télescope / forêt enneigée).
  12. Wedding crasher 350 × 542 (y 3122).
  13. Nick Drake 350 × 235 (y 3692).
  14. Fenêtre / montagne 350 × 279 (y 3955).
  15. Couple salon jaune 350 × 227 (y 4258).
  16. Homme + chien devant maison en pierre 351 × 256 (y 4509).
  17. Femme sur canapé rose 347 × 347 (y 4792).
  18. Immeuble en feu 351 × 575 (y 5166).
  19. Pilotes / chiens 351 × 271 (y 5768).
  20. Montagne rose / maison 355 × 543 (y 6066).
  21. CROSS-NAV : `DESIGN` (y 6788), `ANIMATION` (y 6946).
  22. FOOTER-A (email y 7085 … signature y 7168).
- **Textes** : uniquement le lien `View CURLY SOX project` (souligné, ≈ 14 px, italique, bas-de-casse sauf « CURLY SOX ») + navigation.
- **Médias** (assets-source) :
  2 `Illustration/violinist_in_appartment_greyscale.png` · 3 `Illustration/Wildlife/Wildlife.png` (recadrée) · 5 chaussette **introuvable** (photos Curly Sox absentes) · 6 `Illustration/Inktober_2023/rush.png` · 7 `Illustration/scarbourough/The_Kitchen_F.png` · 8 `Illustration/scarbourough/Scarborough_stairs.png` · 9 `Illustration/scarbourough/Dinning_room_1.png` · 10 `Illustration/scarbourough/_Scarborough_Living_room.png` · 11 `Illustration/tree2.png`, `Illustration/lunette_spaciale.png`, `Illustration/Wildlife/winter_forest.jpg` · 12 `Illustration/wedding_crasher/wedding_crasher.png` · 13 `Illustration/Nick_Drake.png` · 14 `Illustration/window4.png` · 15 `Illustration/living_room.png` · 16 `Illustration/man_street_dog.png` · 17 `Illustration/Van_Gogh_Aznarez/girl_on_couch.png` · 18 `Illustration/fire.png` (ou `Inktober_2023/Fire_building.png`, identique) · 19 `Illustration/Pilot_dogs.jpg` · 20 montagne portrait **introuvable** (proche de `Illustration/mountain_scene.jpg` mais format paysage — probablement un recadrage vertical ; à confirmer).
- **Différences avec le bureau** : desktop = mise en page type « masonry » 2 colonnes asymétriques (ex. violoniste + arbres côte à côte, chaussette + escalier côte à côte, cuisine à gauche et escalier/salle à manger empilés à droite, etc.). Mobile = tout en **1 colonne pleine largeur**, dans le **même ordre**, sauf le **triptyque qui reste en 3 colonnes**. Barre SUBNAV-BAS ajoutée. Cross-nav empilée.
- **Remarques** : utiliser les ratios natifs des images (pas de recadrage) sauf items 3 et 20. `loading="lazy"` indispensable (page très longue).

---

### Animation (`design/mobile/animation.webp`)

- **Fond / couleurs** : zone hero **#fff9f8** (y 0–852, = 1 viewport), puis **#f7f7f7** ; textes #000 ; légendes #000.
- **Structure** (393 × 4553) :
  1. HEADER-A sur le hero.
  2. **Hero vidéo plein écran** (393 × 852) : la maquette est vide (fond #fff9f8, seulement un léger grain) → c'est l'emplacement d'une vidéo dont la première image est quasi blanche (voir Médias). En bas du hero, lien souligné centré `View SURMESUR project` (x 111–282, y ≈ 745–760, ≈ 15 px).
  3. SUBNAV-BAS fond #fff9f8 : `←DESIGN` · `←ILLUSTRATION` · `ANIMATION` (actif, gras, à droite).
  4. Section #f7f7f7, contenus centrés, légendes en capitales ≈ 12 px (cap 8–10 px), letter-spacing ~0,12 em, ≈ 22 px sous chaque média, ≈ 65–110 px d'espace entre blocs :
     - Portfolio evening : 347 × 197 (x 23, y 876) — légende `PORTFOLIO EVENING` (y 1097).
     - Deux carrés 156 × 156 côte à côte (x 24 et x 206, y 1171) — `CYCLIST` | `GEOMETRICAL ANIMATION` (y 1339).
     - Record player : 241 × 183 centré (x 76, y 1399) — `RECORD PLAYER CINEMAGRAPH` (y 1613).
     - Vanderberg : 345 × 446 (y 1733) — `VANDERBERG MAGAZINE COVER` (y 2201).
     - La rue : 349 × 196 (y 2322) — `" LA RUE S'ANIME "` (y 2540).
     - Ball and box : 346 × 195 (y 2662) — `BALL AND BOX` (y 2879).
     - Dîner : 332 × 248 (x 31, y 2999) — `A CLASSIC EUROPEAN DINNER` (y 3269).
     - Trois vidéos Surmesur empilées, 233 × 130 centrées (x 80), à y ≈ 3390, 3559, 3727 ; légendes en casse titre ≈ 12 px : `Reflect Your Ambitions`, `Embrace Every Momment` (sic), `Look Good In Any Situation`.
     - Lien souligné `View SURMESUR project` plus grand (≈ 20 px, y 3933–3951), centré.
  5. CROSS-NAV : `DESIGN` (y 4140), `ILLUSTRATION` (y 4298).
  6. FOOTER-A (email y 4437 … signature y 4520).
- **Textes** : voir ci-dessus (verbatim, y compris `Momment` et les guillemets `" LA RUE S'ANIME "`).
- **Médias** (vidéos/GIF, `assets-source/Animation/`) :
  - Hero : vidéo Surmesur — très probablement `1_Reflect_your_ambitions.mp4` (1920×1080, 1ʳᵉ image quasi blanche, cohérent avec le lien « View SURMESUR project » juste dessous). À confirmer.
  - Portfolio evening → `Animation.mp4` (avion jaune).
  - Cyclist → `cyclist_GIF_B&W.gif` (ou `Cyclist/cyclist_GIF.gif`).
  - Geometrical animation → `gif.gif` (version turquoise/noir ; `01_grenier_ch_AT1.mp4` = variante violette).
  - Record player cinemagraph → `Cinemagraph_IG.mp4` / `02_grenier_ch_AT3_A.gif`.
  - Vanderberg → `Vanderburg_mag_cover.mp4` / `.gif`.
  - La rue s'anime → `_grenier_ch_introweb.mp4` / `road.gif`.
  - Ball and box → `1st_animation_ig.mp4` / `ball.gif`.
  - A classic European dinner → `classic_european dinner.mp4` / `1st.gif`.
  - Reflect Your Ambitions → `1_Reflect_your_ambitions.mp4` ; Embrace Every Moment → `2_Embrace_every_moment.mp4` ; Look Good In Any Situation → **non identifié** (candidats : `Comp 2.mp4`, `soup.mp4` — à vérifier).
- **Différences avec le bureau** :
  - Desktop : lien du hero `View 'WEAR A SUIT' project` (au lieu de `View SURMESUR project`) placé en bas à droite du hero ; mobile : centré.
  - Desktop : Portfolio evening en **pleine largeur bord à bord** ; mobile : marges 23 px.
  - Desktop : Cyclist et Geometrical empilés à gauche, Vanderberg à droite ; mobile : Cyclist | Geometrical côte à côte puis Record player, puis Vanderberg (ordre changé : desktop = Cyclist/Geometrical/Vanderberg puis Record player).
  - Desktop : La rue s'anime et Ball and box pleine largeur bord à bord ; mobile : marges ~22 px.
  - Desktop : `THE BALL AND BOX` ; mobile : `BALL AND BOX`.
  - Desktop : les 3 vidéos Surmesur **sur une ligne** avec le lien au-dessus ; mobile : **empilées**, lien en dessous.
- **Remarques** : « Surmesur » et « Wear a suit » désignent le même projet (voir écran Surmesur). Vidéos : `autoplay muted loop playsinline`, poster obligatoire (surtout pour le hero dont la 1ʳᵉ image est blanche).

---

### About (`design/mobile/about.webp`)

- **Fond / couleurs** : **#a87b15** (ocre) ; textes #000 ; la ligne « from Cégep de Sainte-Foy » est plus claire (brun ≈ #987010 — en fait noir fin anti-aliasé, traiter en noir) ; filet footer noir.
- **Structure** (393 × 2125) :
  1. HEADER-A en noir.
  2. Intro centrée 2 lignes (y 170–205) : `Chad Ashton Grenier works` / `and lives in Quebec City.` ≈ 16 px.
  3. Photo portrait N&B carrée **174 × 174**, alignée **à droite** (x 197–370), y 277.
  4. Paragraphe bio justifié à gauche, x 20–365, 11 lignes, glyphes 15 px, **interligne 28 px**, ≈ 16 px, letter-spacing ~0,06 em (y 489–784).
  5. Titre `LIST OF RELEVANT THINGS I HAVE` (x 20, y 860, capitales ≈ 18 px).
  6. Liste à tirets (≈ 16 px, pas ≈ 37–50 px) :
     - `- DEC in graphic design` + sous-ligne petite (≈ 9 px) `from Cégep de Sainte-Foy` (indentée x 31)
     - `- Artistic Ability Awards in High School` / `(Secondairy 1 and 2)` (2ᵉ ligne indentée x 32)
     - `- 20+ Years Experience in Thinking About Art`
     - `- Passion for my Trade`
     - `- Sense of humor`
  7. **Deux colonnes** (x 20 et x 200) : titres sur 2 lignes `VISUAL` / `ARTISTS I LIKE` et `MUSIC` / `ARTISTS I LIKE` (capitales ≈ 18 px, y 1139–1175). Puis listes en capitales ≈ 12 px (cap 8–9 px), pas vertical ≈ 32,5 px (y 1199 → 1948) :
     - Visual : WES ANDERSON, CHARLES M. SHULZ, VAN GOGH, EDWARD GOREY, JAVI AZNAREZ, EGON SHEILE, KARLOTTA FREIER, LEONARDO DA VINCI, EDVARD MUNCH, CLAUDE MONET, SEMPÉ, SALVADOR DALI, JIM HENSON, TIM BURTON, REMBRANDT, ANNIE LEIBOVITZ, PAUL RENNER, MARK ROTHKO, J.R.R. TOLKIEN, MICHAEL TREVITHICK, GARTH WILLIAMS, ERIC CHASE ANDERSON, HERGÉ, JEAN-PAUL RIOPELLE
     - Music : THE BEATLES, THE VELVET UNDERGROUND, JOHN MAYER, FOUR TOPS, FEIST, LED ZEPPELIN, THE BEACH BOYS, DAVID BOWIE, VAN MORISSON, LANA DEL REY, THE ROLLING STONES, NICK DRAKE, JEFF BUCKLEY, ELLIOT SMITH, BOB DYLAN, BAP KENNEDY, PATRICK WATSON, THE KINKS, THE SMITHS, TAYLOR SWIFT, FRANÇOISE HARDY, SIMON & GARFUNKEL, NEIL YOUNG, LEONARD COHEN
  8. ≈ 120 px d'espace, puis filet noir pleine largeur (y 2079) et signature (y 2094). **Pas** d'email / réseaux dans le footer de cette page.
- **Textes (paragraphe, verbatim)** : `From a very young age, I was very interested in art. I wanted to create amazing things for a living. I'll admit, I dabbled around in various areas along the way. After high school, I decided to study graphic design. While design deviates slightly from my initial passion, it has allowed me to explore many fascinating aspects of creativity. Today, I am dedicated to continue honing my craft as an artist and designer, combining everything I've learned to create amazing things.`
- **Médias** : portrait N&B (pull jacquard) — **introuvable** dans assets-source.
- **Différences avec le bureau** :
  - Desktop : intro sur une ligne à gauche, photo à droite (≈ 410 px) avec le paragraphe **sous la photo en colonne étroite à droite** ; « List of relevant things », « Visual artists » et « Music artists » en **3 colonnes** côte à côte. Mobile : tout empilé, photo à droite en 174 px, bio pleine largeur, puis la liste, puis **2 colonnes** Visual | Music.
  - Desktop a en plus un paragraphe final centré « Please note that I did not include the full list of all my favorite things… Contact me if you find one. Thanks. » et un lien `Back to home` → **absents sur mobile**.
  - Desktop : footer standard (email/réseaux) ; mobile : seulement filet + signature.
  - Petites différences de contenu : desktop `- 20+ years experience in thinking about art`, `- Passion for my trade`, `(Secondairy 1 and 2)` ; la liste Music desktop contient aussi `HARMONIUM` (absent sur mobile) et un ordre légèrement différent (Taylor Swift plus haut).
- **Remarques** : fautes d'orthographe présentes dans la maquette (`Secondairy`, `SHULZ`, `SHEILE`, `MORISSON`, `ELLIOT SMITH`) — à signaler au client, ne pas corriger sans validation. Recommandé : une seule source de contenu (collection/JSON) pour desktop et mobile.

---

### Contact (`design/mobile/contact.webp`)

- **Fond / couleurs** : #f7f7f7 ; **tout le contenu en lilas #cfbad1**, y compris le logo `C. ASHTON` et l'icône burger.
- **Structure** (393 × 850, un écran) :
  1. HEADER-A en lilas.
  2. `WRITE TO ME` centré, y 232–262 (cap 30 px → ≈ 42 px), x 51–346.
  3. `chadgrenier42@gmail.com` centré, y 359–381 (≈ 22 px), x 44–348, letter-spacing large (~0,1 em), **non souligné**.
  4. Grand vide.
  5. `Instagram` · `LinkedIn` · `Behance` (y 765–781, x 36–113 / 171–232 / 291–353), ≈ 15 px, **non soulignés**.
  6. **Pas** de filet ni de signature.
- **Textes** : CA Scholar V2 Italic pour tout (capitales pour le titre).
- **Médias** : aucun.
- **Différences avec le bureau** : desktop = `WRITE TO ME` géant (cap ≈ 150 px) lilas, email **en noir, police sans-serif droite (Futura PT)** ≈ 36 px, réseaux en noir sur une ligne ; nav desktop noire avec `Contact` souligné. Mobile : email et réseaux en **lilas et CA Scholar italique**, email plus petit ; header lilas.
- **Remarques** : email en `mailto:`. Couleur lilas #cfbad1 sur #f7f7f7 = contraste très faible (≈ 1,6:1) — signaler (accessibilité).

---

### Curly Sox (`design/mobile/curly-sox.webp`)

- **Fond / couleurs** : **#ffffff** ; textes #000.
- **Structure** (393 × 846) :
  1. HEADER-B variante : `SOCK ILLUSTRATION CONTRACT` (capitales ≈ 13 px, x 20–247, y 56–65) + `EXIT` à droite.
  2. 5 chaussettes détourées (PNG transparent, ≈ 70–74 × 200–217 px) en **2 colonnes décalées** : colonne gauche centrée sur x ≈ 114, colonne droite centrée sur x ≈ 278 ; rangées y 98, 347, 595 (pas ≈ 248 px). Ordre : verte (G) | jaune/crème (D) ; crème-turquoise (G) | crème-turquoise cheval (D) ; grise (G).
  3. Lien souligné `Visit CURLYSOX.COM` en bas à droite (x 180–346, y 803–816, ≈ 16 px).
- **Médias** : 5 photos de chaussettes — **introuvables** dans assets-source.
- **Différences avec le bureau** : desktop = 5 chaussettes **sur une ligne**, grandes, lien en bas à droite. Mobile = grille 2 colonnes (3 rangées, la dernière incomplète), chaussettes réduites (~0,4×). Ordre différent (desktop : verte, crème-turquoise, grise, crème cheval, jaune).
- **Remarques** : pas de header site ni de footer (page « projet » plein écran avec EXIT). `EXIT` → retour (history.back ou page Illustration).

---

### Davie (`design/mobile/davie.webp`)

- **Fond / couleurs** : #ffffff ; textes #000.
- **Structure** (393 × 4007) — 1 colonne, visuels centrés :
  1. HEADER-B : `Rebranding, website, magazine,` / `illustrations, and animation` / `academic project` (3 lignes, x 20–249, y 55–104) + `EXIT`.
  2. Logo DAVIE Chantier Maritime 248 px de large (x 74–321, y 188–227) + rangée de 3 bateaux (y 253–285).
  3. Mockup laptop 271 × 171 (x 61, y 364).
  4. Mockup téléphone (avec ombre douce) ≈ 255 × 393 (y 625).
  5. Planche « ILLUSTRATIONS » (titre serif capitales à gauche x 26, y 1079 + 19 pictos en 4 rangées : 5, 6, 7, 1), largeur ≈ 342 px (y 1079–1380).
  6. Couverture magazine 189 × 258 (y 1460).
  7. Spreads magazine empilés, ≈ 320–357 px de large, ≈ 60 px d'écart : y 1767, 2104, 2458, 2765, 3120.
  8. Vidéo 350 × 197 (16:9, y 3496) — horizon noir + bateau rouge.
  9. Logo final DAVIE (142 × 59, centré, y 3835).
  10. Pas de footer.
- **Textes** : description (HEADER-B) ; tout le reste est dans les images.
- **Médias** (`assets-source/Design/davie_behance/`) : logo+bateaux `Davie_Logo.png` (ou `Artboard 1 copy 3.png`) ; laptop `Artboard 10.png` ; téléphone `Artboard 11.png` ; illustrations `Artboard 15 copy.png` ; couverture `jpg/Front.png` (ou `Artboard 1.png`) ; spreads `Artboard 5.png`, `Artboard 6.png`, `Artboard 7.png`, `Artboard 8.png`, `Artboard 7_1.png` (ou versions `jpg/2-3.png`, `4-5`, `6-7`, `8-9`) ; logo final `Davie_Logo_1.png` ; vidéo → `assets-source/Animation/2_grenier_ch_p2.mp4` (même image : horizon + bateau rouge ; desktop = embed YouTube `https://youtu.be/cA5gXrh74H0`).
- **Différences avec le bureau** : desktop : description sur une ligne `Rebranding, website, magazine, illustrations, and animation (an academic project)` ; téléphone et planche Illustrations **côte à côte** ; spreads en **grille 2 colonnes** (3 rangées) ; vidéo en pleine largeur (la maquette desktop montre le code iframe YouTube brut). Mobile : tout en **1 colonne**, « (an academic project) » devient une ligne `academic project`.
- **Remarques** : fond blanc pur (pas #f7f7f7) sur les pages projet.

---

### L'erreur Inspire (`design/mobile/lerreur-inspire.webp`)

- **Fond / couleurs** : #ffffff ; bandeau noir #000 ; roses de l'illustration.
- **Structure** (393 × 1308) :
  1. HEADER-B : `Advertising campaign for an event` / `by Fail Camp` / `academic project` (x 19–?, y 55–104) + `EXIT`.
  2. **Carrousel horizontal** (y ≈ 190–468) : 1ʳᵉ affiche (tour de Pise « L'ERREUR INSPIRE / L'ORIGINALITÉ… ») ≈ 310 px de large alignée à gauche (bord gauche à 0), la **suivante dépasse à droite** (avion rose visible à x ≈ 320–393) → indique un scroll horizontal (scroll-snap).
  3. Fiche événement (image, 336 px de large, x 40–375, y 569–776) : texte FailCamp, `29 JANVIER 2021`, `Le District`, programme des conférenciers, citation.
  4. Bandeau **pleine largeur** noir 393 × 221 (y 833) : logo FAIL camp QC + `L'ERREUR INSPIRE`.
  5. Visuel final « L'ERREUR INSPIRE » + tour de Pise (296 × 160, y 1105).
  6. Pas de footer.
- **Textes** : description (HEADER-B). Les autres textes sont dans les images.
- **Médias** (`assets-source/Design/L'erreur_inspire/`) : carrousel = `Artboard 1 copy 5-100.jpg` (L'originalité), `Artboard 1 copy 2-100.jpg` (L'innovation), `Artboard 1-100.jpg` (La découverte) ; fiche = `Artboard 17-100.jpg` ; bandeau Fail Camp = `Artboard 1 copy 3-100.jpg` (ou `.png`) ; visuel final = `Artboard 1 copy 4-100.jpg`.
- **Différences avec le bureau** : desktop : les **3 affiches côte à côte** sur une ligne pleine largeur ; description sur une ligne `Advertising campaign for an event by Fail Camp, an academic project` ; visuel « L'ERREUR INSPIRE » **avant** le bandeau noir Fail Camp (qui termine la page). Mobile : affiches en **carrousel horizontal** ; ordre final inversé (bandeau noir **puis** visuel L'erreur Inspire).
- **Remarques** : c'est bien l'équivalent mobile de la page desktop `lerreur-inspire`.

---

### « L'erreur Inspire 1 » = Mind-bogglers (`design/mobile/lerreur-inspire-1.webp`)

- **Ce que c'est** : malgré son nom d'artboard XD (copie mal renommée), cet écran est la **page projet « Mind-bogglers »** (carte `Mind-bogglers` de la page Design) = équivalent mobile de l'artboard desktop **`rock-paper-scissors`** (Rock Paper Scissors + Think inside the box). → Route suggérée : `/design/mind-bogglers`.
- **Fond / couleurs** : **#000000** ; textes blancs #f0f0f0 ; filet séparateur gris #b8b8b8.
- **Structure** (393 × 1175) :
  1. HEADER-B en blanc : `Digital pamphlet design,` / `vector illustrations and text composition` / `personal project` (y 55–104) + `EXIT`.
  2. **Pamphlet RPS en scroll horizontal** : 1ʳᵉ page pleine largeur (393 × 478, y 144–622, fond #f4f3f1) ; le bord de la page suivante apparaît à droite (x ≈ 383) ; sous la bande, `SCROLL→` aligné à droite (x 302–367, y 638–648, ≈ 13 px capitales).
  3. Filet horizontal pleine largeur 2 px #b8b8b8 (y 668).
  4. Sous-titre `Think inside the box design` / `personal project` (x 19, y 686–718, ≈ 15 px).
  5. Image « Think inside the box » 350 × 351 (x 20, y 748).
- **Médias** : pamphlet → `assets-source/Illustration/Final_RPS/Rock_Paper_Scissors_Philosophy.jpg` puis `…Philosophy2.jpg` … `…Philosophy10.jpg` (10 pages, 2250 × 2813) ; box → `assets-source/Design/The_box_1.png` (version verte ; `The_box.png` = version rose).
- **Différences avec le bureau** : desktop : description sur une ligne `Digital pamphlet design, vector illustrations and text composition, personal project`, pamphlet affiché en **bande horizontale de pages côte à côte** (3 visibles) ; pas de `SCROLL→` ni de filet ; `Think inside the box design` sans « personal project ». Mobile : 1 page visible + indicateur `SCROLL→`.
- **Remarques** : carrousel = `overflow-x-auto snap-x snap-mandatory`, pages `w-full shrink-0 snap-start` (avec éventuellement `w-[97%]` pour laisser voir la page suivante comme dans la maquette).

---

### « L'erreur Inspire 2 » = Yarha' (`design/mobile/lerreur-inspire-2.webp`)

- **Ce que c'est** : autre artboard mal nommé ; c'est la **page projet « Yarha' »** (carte `Yarha'` de la page Design) = équivalent mobile de l'artboard desktop **`yarha`**. → Route suggérée : `/design/yarha`.
- **Fond / couleurs** : #f7f7f7 ; texte #000 ; bandeau bleu ardoise **#3c5a74** (≈ #385870) ; bande « tipi » parchemin (#f0e8d8).
- **Structure** (393 × 5287) :
  1. Header B : `Yarha'` / `Premier emploi` (x 20, y 55–87) + `EXIT`.
  2. Titre centré `ANIMATIONS DE LOGO` (capitales ≈ 14 px, y 131–141).
  3. Bandeau vidéo **pleine largeur** 393 × 221 bleu ardoise (y 161) — vidéo/animation de logo (placeholder uni dans la maquette).
  4. Deux vidéos 170 × 96 côte à côte (x 20 et x 200, y 401) : noire | bleue #4169d6 (placeholders d'animations de logo).
  5. Calèche (illustration animée détourée, 295 × 120, y 600).
  6. Titre `Formations sur la gestion d'une classe` (≈ 16 px, x 43, y 871).
  7. Grille 2 × 2 d'images 168 × 95 (x 20 et x 203 ; y 910 et 1018).
  8. Titre centré `Animation: Le tipi` (y 1197).
  9. Bande vidéo pleine largeur 393 × 221 (parchemin, y 1226).
  10. Titre `Formations sur la gestion de projet` (x 56, y 1533).
  11. 4 images empilées 350 × 197 (y 1561, 1782, 2002, 2223).
  12. Personnage qui court (détouré, 58 × 129, x 23, y 2483) puis planche d'objets de bureau 350 × 197 (y 2661).
  13. Scène de bureau + 3 vues de Montréal empilées, 350 × ~191 (y 2874, 3077, 3279, 3483).
  14. 3 polaroïds côte à côte (≈ 100 × 110, y 3731).
  15. 4 illustrations « chat » empilées 350 × 196 (y 3875, 4083, 4291, 4499).
  16. Bande de 3 vidéos **pleine largeur** bord à bord (393 × 99, 3 × 131 px, y 4761).
  17. Grande illustration finale (chef d'orchestre + fusée + confettis/mégaphones) ≈ 391 × 362 (y 4925 jusqu'au bas).
  18. Pas de footer.
- **Médias** : calèche → `assets-source/Animation/Caleche_1.gif` / `caleche.mp4` ; tout le reste (logo Yarha', vidéos de logo, formations, tipi, Montréal, chats, chef d'orchestre) → **introuvable** dans assets-source.
- **Différences avec le bureau** : desktop : titre `Yarha' – First employment`, bandeau bleu = **hero plein écran en haut** (le header est posé dessus), `LOGO ANIMATIONS` (anglais), tipi placé **avant** la grille « classe », calèche **après** ; une **bande de storyboards N&B** pleine largeur (absente sur mobile) ; « gestion de projet » en grille 2 × 2 (mobile : 1 colonne) ; Montréal en 2 × 2 (mobile : 1 colonne) ; chats sur une ligne de 3 (mobile : empilés) ; la page desktop se termine par l'illustration chef d'orchestre **plus une grande illustration de ferme** (absente sur mobile). Mobile : libellés en **français** (`Premier emploi`, `ANIMATIONS DE LOGO`).
- **Remarques** : choisir une langue unique pour les libellés (FR mobile vs EN desktop) — à valider. Grilles desktop 2 × 2 → 1 colonne mobile, sauf « classe » (reste 2 × 2) et polaroïds (restent 3 en ligne).

---

### Matong'EAU (`design/mobile/matongeau.webp`)

- **Fond / couleurs** : #ffffff ; bleu marque **#3384c6** (description + logo) ; `EXIT` noir.
- **Structure** (393 × 1830) :
  1. HEADER-B en **bleu #3384c6** : `Logo and brand design according` / `to client's specific needs and demands.` (x 20–302, y 55–86) + `EXIT` noir.
  2. Logo Matong'EAU bleu (pictogramme 151 × 256, x 121, y 206) + mot-symbole `MATONG'EAU` (219 px, y 479–503).
  3. Photo cartes de visite **pleine largeur** 393 × 263 (y 601).
  4. Grille 2 colonnes 170 × 176 (x 21 / 201) sur 3 rangées (y 914, 1114, 1280) : [logo blanc sur bleu | t-shirt blanc sur noir] ; [logo bleu sur blanc | t-shirt bleu sur blanc] ; [logo bleu sur noir | t-shirt noir sur bleu].
  5. Logo noir (86 × 147, y 1533) + `MATONG'EAU` (y 1689).
  6. `Choisissez MATONG'EAU` / `pour un travail de pro !` centré, 2 lignes (y 1732–1772), **sans-serif droite (Futura PT)** ≈ 17 px, noir.
  7. Pas de footer.
- **Médias** : toutes les images Matong'EAU **introuvables** dans assets-source.
- **Différences avec le bureau** : desktop : description sur une ligne ; cartes de visite **dans les marges** (≈ 1640 px) au lieu de bord à bord ; déclinaisons en grille **3 colonnes** (rangée logos puis rangée t-shirts) ; slogan sur une ligne. Mobile : cartes pleine largeur, grille **2 colonnes** avec logos à gauche / t-shirts à droite (ordre réorganisé).
- **Remarques** : carte « Matong'EAU » dans la page Design (bleu #3384c6 avec logo blanc).

---

### Miles Clayton (`design/mobile/miles-clayton.webp`)

- **Fond / couleurs** : hero sombre (≈ #000a04 / rouge profond), page **#ffffff** ; texte #000 ; description/EXIT du header en **blanc** sur le hero.
- **Structure** (393 × 2534) :
  1. **Hero carré pleine largeur** 393 × 393 (y 0) : photo du duo sur fond rouge avec « MILES CLAYTON » ; HEADER-B **superposé en blanc** : `Art direction and multimedia design` (x 20, y ≈ 55) + `EXIT`.
  2. Texte centré 3 lignes (y 435–486, ≈ 17 px) : `I have had the privilege to work` / `with MILES CLAYTON as designer` / `and art director for all their visual necssities.` (sic).
  3. `Visit MILESCLAYTON.COM to learn more.` centré (y 527–544, ≈ 20 px, italique, « MILESCLAYTON.COM » souligné = lien).
  4. Press-kit (image) 339 × 527 (x 27, y 587).
  5. Grille singles **2 colonnes**, vignettes 170 × 170 (x 20 et x ≈ 200) + légende italique ≈ 9 px alignée à gauche : `DREAM OUT LOUD - Single` | `TO BELIEVE - Single` (y 1184) ; `FAR TO GO - Single` | `MOONLIGHT - Single` (y 1402) ; `HEAVY AIR - Single` (y 1630, seule à gauche).
  6. Affiche **pleine largeur** « TO BELIEVE / AVAILABLE APRIL 7TH » 393 × 589 (y 1854).
  7. `Stay tuned for MILES CLAYTON 's next release.` centré (y 2486–2503, ≈ 17 px).
  8. Pas de footer.
- **Textes** : **police serif type Bodoni/Didot** (romaine pour le corps, italique pour « Visit … » et les légendes) — pas CA Scholar ; « MILES CLAYTON » en petites capitales/capitales. Seuls la description du header et `EXIT` sont en CA Scholar italique.
- **Médias** : press-kit → `assets-source/Design/Screenshot 2024-07-10 at 2.52.00 PM.png` ; hero, pochettes des singles, affiche To Believe → **introuvables**.
- **Différences avec le bureau** : desktop : hero pleine largeur paysage ; phrase d'intro sur **une ligne** ; singles en grille **3 colonnes** (Dream Out Loud, Moonlight, To Believe / Far To Go, Heavy Air) ; mobile : hero **carré**, intro sur 3 lignes, grille **2 colonnes** avec ordre différent (Dream Out Loud, To Believe, Far To Go, Moonlight, Heavy Air). Même fin (affiche To Believe pleine largeur + « Stay tuned »).
- **Remarques** : fautes « necssities » et « CLAYTON 's » dans la maquette — à valider. Charger une webfont serif (ex. « Bodoni Moda » ou « Libre Bodoni ») si la police exacte n'est pas fournie.

---

### Miscellaneous Print Works (`design/mobile/miscellaneous-print-works.webp`)

- **Ce que c'est** : page projet de la carte `Miscelaneous Print Works`. Son équivalent desktop est l'artboard nommé **`artboard-1`** (et non `miscellaneous-editorial`, qui contient en fait Rossignol — voir plus bas).
- **Fond / couleurs** : 1ʳᵉ section **noire #000** (y 0–400) ; puis **#ffffff** ; filets séparateurs #404040.
- **Structure** (393 × 4560) — 4 sous-projets séparés par des filets 2 px pleine largeur :
  1. **Jeff Koons** (bande noire 393 × 400) : header `Jeff Koons article` / `academic projectac` (sic, blanc, x 20, y 55–87) + `EXIT` blanc ; image de l'article (spread) ≈ 370 × 228, **collée au bord gauche** (x 0–369, y 123).
  2. `Musée de la Civilisation booklet` / `academic project` (x 20, y 432–464, noir ≈ 15 px) ; couverture JAPON 210 × 294 (centrée, y 510) ; 5 mockups de spreads ≈ 297 × 247 (x ≈ 48, y 894, 1201, 1508, 1815, 2120).
  3. Filet (y 2440). `Poster/panphlet for C2 conference` / `academic project` (sic, y 2461–2493) ; affiche programme 350 × 463 (y 2540) ; 4 spreads 350 × 264 (y 3048, 3326, 3604, 3882).
  4. Filet (y 4198). `Cofee Crisp Rebrand` / `academic project` (sic, y 4219–4251) ; image packaging 350 × 223 (x 22, y 4276).
  5. Pas de footer.
- **Médias** : Jeff Koons → `assets-source/Design/Screenshot 2025-01-21 at 4.09.59 PM.png` ; Japon → `assets-source/Design/Japon Mag/Front_cover.png`, `2-3.png`, `4-5.png`, `6-7.png`, `8-9.png`, `Front_and_Back_cover.png` ; C2 → pas de PNG : PDF `assets-source/Design/imposition.pdf` (titre interne « 2_Grenier_Ch_C2_depliant ») et/ou `02_grenier_c_brochure_sans.pdf` (7 p.) à rasteriser ; `assets-source/Design/Screenshot 2024-07-10 at 2.50.23 PM.png` = page « Résilience » ; Coffee Crisp → `assets-source/Design/1_Grenier_ch_Atelier_1_Palette_choco_Haut_gamme.jpg` (recadrée en 350 × 223).
- **Différences avec le bureau** : desktop (`artboard-1`) : mêmes 4 sous-projets dans le même ordre, mais spreads Japon en **grille 2 colonnes** (couverture puis 2 × 2 puis dos centré) et C2 en **grille 2 colonnes** ; en-têtes sur une ligne (`Jeff Koons article, academic project`, etc.) ; l'image Coffee Crisp est en pleine largeur. Mobile : tout en **1 colonne**.
- **Remarques** : fautes « projectac », « panphlet », « Cofee » dans la maquette.

---

### Rossignol Magazine (`design/mobile/rossignol-magazine.webp`)

- **Ce que c'est** : page projet de la carte `Rossignol Magazine`. **Pas d'artboard desktop portant ce nom** : le contenu correspond à l'artboard desktop **`miscellaneous-editorial`** (qui, malgré son nom, présente le catalogue Rossignol « Collection Alpine 2020-2021 »). Il faut donc créer une route `/design/rossignol-magazine` dont la version desktop = `miscellaneous-editorial`.
- **Fond / couleurs** : #ffffff ; texte #000.
- **Structure** (393 × 4007) :
  1. HEADER-B : `Poster/panphlet for C2 conference,` / `academic project` + `EXIT` — **texte erroné copié du projet C2** (même erreur sur desktop). Texte correct à demander (ex. « Ski catalogue design for Rossignol, academic project »).
  2. Couverture (mockup, objet 169 × 238, y 151).
  3. 12 mockups de spreads, objet ≈ 311 × 260 (x 41–351), pas vertical ≈ 297 px (y 441 → 3407), puis dos + couverture (y 3702).
  4. Pas de footer.
- **Médias** (`assets-source/Design/Rossignol/Rossignol_mag/`) : `Front.png` (couverture seule), `2-3.png`, `4-5.png`, `6-7.png`, `8-9.png`, `10_11.png`, `12-13.png`, `14-15.png`, `16-17.png`, `18-19.png`, `20-21.png`, `22-23.png`, `Cover.png` (dos+face). Images 4200 × 3150 sur fond blanc → à afficher en **pleine largeur 350 px** (le mockup n'occupe qu'une partie de l'image, d'où les 311 px mesurés). Pages brutes aussi dispo : `Design/Rossignol/Screenshot 2025-01-21 at 4.2x.xx PM.png`.
- **Différences avec le bureau** : desktop (`miscellaneous-editorial`) : même ordre, mockups en **1 colonne** mais très grands (~1000 px) sur fond #f7f7f7 ; mobile : 1 colonne 350 px sur blanc.
- **Remarques** : aucune.

---

### Surmesur (`design/mobile/surmesur.webp`)

- **Ce que c'est** : page projet ouverte par le lien `View SURMESUR project` de la page Animation. **Équivalent desktop = artboard `animation-1`**, intitulé `WEAR A SUIT – personal animated advertisement project` et ouvert par `View 'WEAR A SUIT' project` (« Surmesur » = nom du client/marque, « Wear a suit » = nom de la campagne). Route suggérée : `/animation/surmesur`.
- **Fond / couleurs** : #ffffff ; texte #000.
- **Structure** (393 × 892) :
  1. HEADER-B : `Personal project for SURMESUR` (1 ligne, x 20, y 55–70) + `EXIT`.
  2. 3 vidéos empilées 350 × ≈ 195 (x 20 ; y 118, 356, 591 ; écart ≈ 42 px) : la 1ʳᵉ apparaît vide (#fff9f8, 1ʳᵉ image blanche), puis couple au restaurant, puis immeubles/train.
  3. Légende à gauche 2 lignes (x 20, y 827–859, ≈ 15 px) : `Vectors designed in Adobe Illustrator,` / `put togheter After Effects.` (sic).
  4. Pas de footer.
- **Médias** : `assets-source/Animation/1_Reflect_your_ambitions.mp4`, `2_Embrace_every_moment.mp4`, 3ᵉ (« Look Good In Any Situation ») non identifiée (candidats `Comp 2.mp4` / `soup.mp4`). Personnages GIF liés au projet : `assets-source/Animation/Surmesur_GIF/*.gif` (non utilisés dans la maquette mobile).
- **Différences avec le bureau** : desktop (`animation-1`) : titre `WEAR A SUIT – personal animated advertisement project`, vidéos ≈ 1030 px centrées sur fond #f7f7f7, légende centrée `Vector animations designed in Adobe Illustrator, put togheter After Effects.` Mobile : titre différent (`Personal project for SURMESUR`), légende alignée à gauche et formulée `Vectors designed…`.
- **Remarques** : harmoniser le nom du projet (Surmesur vs Wear a suit) avec le client.

---

## Correspondance des artboards mobile ↔ desktop (récapitulatif)

| Mobile                                                                                                          | Desktop                           | Remarque                                              |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------- | ----------------------------------------------------- |
| landing                                                                                                         | landing-page                      |                                                       |
| hamburger                                                                                                       | — (nav inline dans le header)     | overlay mobile uniquement                             |
| portfolio / design / illustration / animation / about / contact / curly-sox / davie / matongeau / miles-clayton | idem                              |                                                       |
| lerreur-inspire                                                                                                 | lerreur-inspire                   |                                                       |
| **lerreur-inspire-1**                                                                                           | **rock-paper-scissors**           | = page « Mind-bogglers » (artboard mal nommé)         |
| **lerreur-inspire-2**                                                                                           | **yarha**                         | = page « Yarha' » (artboard mal nommé)                |
| **miscellaneous-print-works**                                                                                   | **artboard-1**                    |                                                       |
| **rossignol-magazine**                                                                                          | **miscellaneous-editorial**       | contenu Rossignol ; header erroné « C2 » sur les deux |
| **surmesur**                                                                                                    | **animation-1** (« WEAR A SUIT ») |                                                       |

---

## Règles responsive déduites

1. **Artboard de référence** : 393 × 852 (iPhone 14/15). Les éléments « fixes » (SUBNAV-BAS, hero animation, landing, menu) sont calés sur 852 px → utiliser `100svh`/`100dvh`.
2. **Marges latérales** : **20 px** standard (contenus pleine largeur = 350–353 px, `px-5`), header site à **30 px** (logo x 30, burger se termine à 23 px du bord droit), EXIT se termine à 22 px du bord. Certains visuels passent **bord à bord** (0 px) : cartes de visite Matong'EAU, bandeaux vidéo Yarha', hero Miles Clayton, affiche To Believe, bandeau Fail Camp, pamphlet RPS, image Jeff Koons (bord gauche). Desktop : marges ≈ 150 px (logo x 149).
3. **Deux types de header** :
   - Pages « site » (Portfolio, Design, Illustration, Animation, About, Contact) : `C. ASHTON` + burger astérisque (32 px), couleur = couleur de texte de la page (noir, blanc sur noir/vert, lilas sur Contact). La nav desktop (`Portfolio / Shop / About / Contact / panier`) disparaît au profit du burger → menu overlay ocre #a87b15. Shop + panier **retirés en V1**.
   - Pages « projet » : pas de logo ni burger, description du projet (≈ 15 px, 1–3 lignes, largeur max ≈ 280 px) + `EXIT` à droite (≈ 18 px). Sur desktop la description tient sur une ligne ; sur mobile elle est coupée en lignes courtes (souvent « …, academic project » passe à la ligne sans virgule ni parenthèses).
4. **Tailles de police mobile vs desktop** (cap-heights mesurés) : logo 31 → 19 px (≈ ×0,6 → ~42 px → ~26 px) ; nom de la landing ×0,37 (≈ 88 → 32 px) ; signature footer 27 → 18 (≈ 28 → 20 px) ; libellés catégories 19 → 14 (≈ 27 → 20 px) ; email/réseaux du footer quasi inchangés (≈ 15–16 px) ; titres de page (WRITE TO ME) ×0,2 (≈ 210 → 42 px). Conseil : `clamp()` pour logo, titres et signature ; texte courant ≈ 15–16 px avec letter-spacing ~0,06–0,1 em (CA Scholar est étroite et très inclinée). Interligne du texte long (About) : 28 px pour ≈ 16 px (1,75).
5. **Footer** : desktop = email à gauche + réseaux à droite sur une ligne, filet, signature centrée. Mobile = **tout centré et empilé** : email, puis réseaux (3 liens répartis), filet pleine largeur, signature. Sur About : seulement filet + signature. Contact : pas de footer (les réseaux font partie du contenu). Pages projet : **aucun footer**.
6. **Grilles → colonnes** :
   - Design (cartes projets) : 4 colonnes → **2 colonnes** (cartes 170 × 126, gouttière 10 px).
   - Illustration : masonry 2 colonnes → **1 colonne** (le triptyque reste en 3 colonnes).
   - Animation : mélange → 1 colonne, sauf Cyclist | Geometrical en **2 colonnes** ; les 3 vidéos Surmesur en ligne → empilées.
   - Davie, Misc Print Works (Japon, C2) : 2 colonnes → **1 colonne**.
   - Matong'EAU : 3 colonnes → **2 colonnes** (réordonnées logos/t-shirts).
   - Miles Clayton singles : 3 colonnes → **2 colonnes**.
   - Curly Sox : 5 en ligne → **2 colonnes décalées**.
   - About : 3 colonnes (liste / visual / music) → liste pleine largeur puis **2 colonnes** Visual | Music.
   - Portfolio : 3 catégories en ligne → **empilées**.
   - Rangées de visuels destinées au défilement (affiches L'erreur Inspire, pages RPS) : ligne desktop → **carrousel horizontal** (scroll-snap) avec la vignette suivante qui dépasse et un indicateur `SCROLL→`.
7. **Navigation catégorie** : sur mobile, barre **fixe en bas** (56 px, fond = fond de page) `←DESIGN · ILLUSTRATION · ANIMATION→` avec la catégorie active en gras ; + cross-nav des deux autres catégories en bas de page (desktop : cross-nav en ligne uniquement, pas de barre fixe).
8. **Couleurs de page** (identiques desktop/mobile) : landing #fff9f8 ; portfolio/illustration/contact #f7f7f7 ; design #000 puis #3a8146 ; animation hero #fff9f8 puis #f7f7f7 ; about + menu mobile #a87b15 ; pages projet #ffffff (Mind-bogglers #000, Misc Print Works commence en #000) ; lilas contact #cfbad1 ; bleu Matong'EAU #3384c6.
9. **Images** : sur mobile, toujours en pleine largeur de contenu (350 px) avec ratio natif ; les mockups sur fond blanc (Rossignol, Japon, Davie) sont affichés tels quels (le blanc de l'image fait marge). Prévoir `srcset` (350/700/1050 w pour mobile). Vidéos `autoplay muted loop playsinline` + `poster`.
10. **Ordre du contenu** : l'ordre mobile diffère parfois du desktop (cartes Design, Animation, Matong'EAU, Miles Clayton, Curly Sox, L'erreur Inspire fin de page, Yarha') et certains contenus desktop sont **absents** sur mobile (About : note finale + `Back to home` + HARMONIUM ; Yarha' : storyboards + illustration ferme). Recommandation : une seule source de contenu, ordre DOM = ordre mobile, réorganisation desktop via CSS grid si nécessaire ; faire valider les contenus absents.
