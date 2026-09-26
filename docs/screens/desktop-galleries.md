# A — Galeries Illustration / Animation, page projet « Wear a Suit », page « Artboard 1 » (desktop)

Mesures faites avec PIL sur les PNG originaux (`design/original/desktop/*.png`), artboards de 1920 px de large.
Positions notées (x, y, largeur, hauteur) en px d'artboard. Tailles de police estimées d'après la hauteur des capitales
(hauteur des capitales ≈ 0,7 × la taille), donc à ±2 px près.
Correspondance des médias : comparaison automatique (vignettes 24×24, distance RVB) avec toutes les images de `assets-source/`,
les 3 images de chaque GIF et une image toutes les 0,5 s de chaque MP4 de `Animation/`. Une distance inférieure à 5 = identique ;
de 10 à 30 = même image recadrée ou autre image de la même vidéo (« probable »).

## Éléments communs (en-tête et pied de page des galeries)

**En-tête** (identique sur Illustration et Animation, fond transparent posé sur la page ou sur la vidéo) :

- Logo `C. ASHTON` : Scholar Italic, capitales, noir, ≈ 44 px (capitales de 31 px), en (144, 53, 240, 31).
- Menu : Scholar Italic ≈ 34 px, noir, première lettre en capitale. `Portfolio` en x 830 (w 134), `Shop` en x 1098 (**retiré en V1**), `About` en x 1309, `Contact` en x 1520, ligne de base vers y 84.
  L'élément actif `Portfolio` est **souligné** (trait de 2 px en y 88).
- Icône panier en (1725, 59, 45, 31), noire (**retirée en V1**).
- Marges latérales du contenu : environ 137–140 px à gauche et 1780–1783 px à droite, donc une zone utile d'environ 1643 px.

**Pied de page** (donné pour Illustration, mêmes cotes relatives sur Animation) :

- Liens vers les autres catégories, centrés vers x 960 : Scholar Italic, CAPITALES, ≈ 27 px (capitales de 19 px), noir, **sans soulignement**. Espacement d'environ 190 px entre les deux mots.
  - Page Illustration : `DESIGN` (x 747) et `ANIMATION` (x 1041), en y 9957.
  - Page Animation : `DESIGN` (x 747) et `ILLUSTRATION` (x 1029), en y 9130.
- Environ 250 px plus bas, sur une même ligne (ligne de base environ 20 px au-dessus du trait) :
  - à gauche, `chadgrenier42@gmail.com` en x 154 ;
  - à droite, `Instagram` (x 1381), `LinkedIn` (x 1551) et `Behance` (x 1703), qui se termine en x 1778.
  - Scholar Italic ≈ 20 px, noir, minuscules, légèrement espacé.
- Trait horizontal noir `#000000` de **3 px**, sur toute la largeur (x 0–1920), 7 px sous ces liens.
- Slogan `For Beauty. At All Costs.` : Scholar Italic ≈ 28 px, noir, centré, 20 px sous le trait.
  Remarque : la maquette l'écrit **avec des majuscules à chaque mot** (le brief indique « For beauty. At all costs. »).
- Il n'y a pas de bouton astérisque sur ces pages.

---

### Illustration (`design/desktop/illustration.webp`)

- **Fond / couleurs** : fond de page `#F7F7F7` (mesuré). Textes `#000000` (le soulignement du menu mesure `#080808`, par anticrénelage). Pas d'autre couleur d'interface.
- **Structure** (artboard de 1920 × 10315) : galerie « en mosaïque » sans légende, rangées de largeurs et proportions variées. Espacement vertical entre rangées d'environ 70–220 px, gouttière horizontale d'environ 50–110 px.
  1. En-tête, de y 53 à y 91.
  2. Rangée 1 (y 232) : image A (140, 232, 1077, 745) et image B (1267, 232, 515, 747). Gouttière de 50 px.
  3. Rangée 2 (y 1197) :
     - colonne gauche : chaussette CURLY SOX détourée sur le fond (≈ 320, 1246, 353, 533), avec le lien `View CURLY SOX project` en dessous (320, 1886, 353, 27) ;
     - à droite, image (960, 1197, 822, 720).
  4. Rangée 3 (y 2112) : grande image verticale (140, 2112, 735, 1159) ; à droite, deux images empilées (927, 2112, 859, 535) et (927, 2707, 859, 564), avec 60 px d'écart.
  5. Rangée 4 : image pleine largeur de contenu (134, 3330, 1651, 1065).
  6. Rangée 5 (y 4524), triptyque centré sur 1401 px (x 260 à 1661), hauteur commune de 616 px : (260, 408), (686, 463) et (1168, 493). Gouttière d'environ 19 px.
  7. Rangée 6 : (137, 5269, 470, 725) et (715, 5277, 1068, 712).
  8. Rangée 7 : (137, 6118, 739, 587) et (925, 6123, 855, 582).
  9. Rangée 8 : (138, 6774, 967, 703) ; image carrée décalée vers le bas en (1267, 6854, 515, 515).
  10. Rangée 9 : (138, 7553, 506, 828) et (712, 7553, 1072, 828).
  11. Rangée 10 : image pleine largeur de contenu (137, 8463, 1646, 1187).
  12. Pied de page : liens `DESIGN` / `ANIMATION` en y 9957 ; e-mail et réseaux en y 10225 ; trait en y 10249 ; slogan en y 10272. Fin de page en y 10315.
- **Textes** :
  - en-tête et pied de page : voir la section commune ;
  - `View CURLY SOX project` : Scholar Italic ≈ 30 px, noir, **souligné**, centré sous la chaussette. « CURLY SOX » est en capitales.
- **Médias** (dans l'ordre de la page) :

  | #   | Position             | Fichier `assets-source/`                                                                               |
  | --- | -------------------- | ------------------------------------------------------------------------------------------------------ |
  | A   | 140, 232, 1077×745   | `Illustration/violinist_in_appartment_greyscale.png` (identique)                                       |
  | B   | 1267, 232, 515×747   | `Illustration/Wildlife/Wildlife.png` (identique)                                                       |
  | C   | ≈320, 1246, 353×533  | Chaussette « SHOW JUMPING » détourée : **introuvable dans assets-source**                              |
  | D   | 960, 1197, 822×720   | `Illustration/Inktober_2023/rush.png` (identique)                                                      |
  | E   | 140, 2112, 735×1159  | `Illustration/scarbourough/The_Kitchen_F.png` (identique)                                              |
  | F   | 927, 2112, 859×535   | `Illustration/scarbourough/Scarborough_stairs.png` (identique, légèrement recadré : 1,61 contre 1,55)  |
  | G   | 927, 2707, 859×564   | `Illustration/scarbourough/Dinning_room.png` (identique)                                               |
  | H   | 134, 3330, 1651×1065 | `Illustration/scarbourough/_Scarborough_Living_room.png` (identique)                                   |
  | I   | 260, 4524, 408×616   | `Illustration/tree2.png` (identique)                                                                   |
  | J   | 686, 4524, 463×616   | `Illustration/lunette_spaciale.png` (**probable** : même proportion 0,75, couleurs un peu différentes) |
  | K   | 1168, 4524, 493×616  | `Illustration/Wildlife/winter_forest.jpg` (identique)                                                  |
  | L   | 137, 5269, 470×725   | `Illustration/wedding_crasher/wedding_crasher.png` (identique)                                         |
  | M   | 715, 5277, 1068×712  | `Illustration/Nick_Drake.png` (identique)                                                              |
  | N   | 137, 6118, 739×587   | `Illustration/window4.png` (identique)                                                                 |
  | O   | 925, 6123, 855×582   | `Illustration/living_room.png` (**probable**, recadré : 1,47 contre 1,37)                              |
  | P   | 138, 6774, 967×703   | `Illustration/man_street_dog.png` (identique)                                                          |
  | Q   | 1267, 6854, 515×515  | `Illustration/Van_Gogh_Aznarez/girl_on_couch.png` (identique)                                          |
  | R   | 138, 7553, 506×828   | `Illustration/fire.png` (= `Inktober_2023/Fire_building.png`, doublon)                                 |
  | S   | 712, 7553, 1072×828  | `Illustration/Pilot_dogs.jpg` (identique)                                                              |
  | T   | 137, 8463, 1646×1187 | `Illustration/mountain_scene.jpg` (identique)                                                          |

- **Interactions supposées** :
  - `View CURLY SOX project` : lien externe vers `https://curlysox.com/en` (la seule URL externe du manifeste XD), à ouvrir dans un nouvel onglet. La chaussette est probablement cliquable elle aussi.
  - Pied de page : `DESIGN` renvoie à la galerie Design, `ANIMATION` à la galerie Animation.
  - E-mail en `mailto:` ; Instagram, LinkedIn et Behance en liens externes (URL non fournies).
  - Menu : `Portfolio` actif.
  - Les images ne semblent pas cliquables (ni légende ni lien) ; une lightbox est facultative, à confirmer.
  - Un état de survol est possible (37 survols dans le manifeste), mais aucun n'est visible sur cet écran.
- **Remarques** :
  - La page ne comporte **ni titre ni légende** : la galerie commence directement sous l'en-tête.
  - La mosaïque est irrégulière (bords droits à 1782–1786 px, rangée 5 plus étroite) : à reproduire avec des rangées flex ou grid définies une à une, pas avec une grille automatique.
  - Le visuel CURLY SOX est absent du dossier (projet déjà connu comme « sans dossier »).

---

### Animation (`design/desktop/animation.webp`)

- **Fond / couleurs** : fond de page `#F7F7F7`. La première section est une vidéo plein écran dont l'image visible est crème `#FFFAEE`. Textes `#000000` (le lien de la vidéo d'ouverture mesure `#00020E`).
- **Structure** (artboard de 1920 × 9487) : succession de médias animés, chacun suivi d'une légende centrée.
  1. **Vidéo d'ouverture plein écran** (0, 0, 1920, 1080). L'en-tête est posé **par-dessus**, sur fond transparent. En bas à droite de la vidéo, le lien `View 'WEAR A SUIT' project` en (≈1422, 1005, 396, 30), aligné à droite vers x 1818.
  2. Espace de 8 px `#F7F7F7`, puis vidéo pleine largeur (0, 1088, 1915, 1083), légende `PORTFOLIO EVENING` centrée en y 2207.
  3. Deux colonnes, à partir de y 2460 :
     - colonne gauche centrée vers x 512 : GIF `CYCLIST` (318, 2460, 388, 363), légende en y 2864 ; plus bas, `GEOMETRICAL ANIMATION` (318, 3073, 388, 363), légende en y 3478 ;
     - colonne droite : `VANDERBERG MAGAZINE COVER` (960, 2460, 812, 1051), légende centrée sur la colonne vers x 1367, en y 3543.
  4. `RECORD PLAYER CINEMAGRAPH` (623, 3852, 674, 512), centré ; légende en y 4425.
  5. Média pleine largeur (0, 4636, 1920, 1080) ; légende `" LA RUE S'ANIME "` en y 5768.
  6. Média pleine largeur (0, 5937, 1920, 1079) ; légende `THE BALL AND BOX` en y 7068.
  7. `A CLASSIC EUROPEAN DINNER` (571, 7254, 779, 585), centré ; légende en y 7872.
  8. Bloc « Wear a Suit » :
     - titre-lien `View WEAR A SUIT project` centré en y 8227 ;
     - 3 vignettes vidéo 16:9 de ≈ 530 × 297, en x 133, 690 et 1247 (y ≈ 8280), gouttière d'environ 27 px ;
     - légendes centrées sous chaque vignette, en y 8611.
  9. Pied de page : liens `DESIGN` / `ILLUSTRATION` en y 9130 ; e-mail et réseaux en y 9398 ; trait de 3 px en y 9422 ; slogan en y 9445.
- **Textes** (tous en Scholar Italic, noir, centrés sauf mention) :
  - `View 'WEAR A SUIT' project` : ≈ 30 px, aligné à droite, non souligné, posé sur la vidéo d'ouverture.
  - Légendes en CAPITALES, ≈ 28 px (capitales de 20 px), espacement des lettres un peu large :
    - `PORTFOLIO EVENING`
    - `CYCLIST`
    - `GEOMETRICAL ANIMATION`
    - `VANDERBERG MAGAZINE COVER`
    - `RECORD PLAYER CINEMAGRAPH`
    - `" LA RUE S'ANIME "` (guillemets droits, avec des espaces)
    - `THE BALL AND BOX`
    - `A CLASSIC EUROPEAN DINNER`
  - `View WEAR A SUIT project` : ≈ 30 px, casse mixte (« WEAR A SUIT » en capitales), non souligné sur la maquette.
  - Légendes des vignettes, casse titre, ≈ 24 px : `Reflect Your Ambitions`, `Embrace Every Momment` (sic), `Look Good In Any Situation`.
- **Médias** :

  | Bloc                       | Position            | Fichier `assets-source/Animation/`                                                                                                                                                                                                                                                                                         |
  | -------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Vidéo d'ouverture          | 0, 0, 1920×1080     | Image quasi vide couleur crème. **Probable** : `Dog_animation_footage.mp4` (1920×1080, 25,6 s ; sa 1re image est du même crème `#FDF9ED`–`#FFFBEF`). Autre candidat : `1_Reflect_your_ambitions.mp4`, dont la 1re image est `#FEF7F6` (plus rosée), cohérent avec le lien « WEAR A SUIT ». **À confirmer avec le client.** |
  | PORTFOLIO EVENING          | 0, 1088, 1915×1083  | `Animation.mp4` (« Soirée Portfolio », 60 s, 73 Mo) : vidéo retrouvée avec certitude (image vers 11 s)                                                                                                                                                                                                                     |
  | CYCLIST                    | 318, 2460, 388×363  | `cyclist_GIF_B&W.gif` (800×800). Variantes : `Cyclist/cyclist_GIF.gif` (800×764), `_final_animation_2.mp4` (800×764, 0,9 s)                                                                                                                                                                                                |
  | GEOMETRICAL ANIMATION      | 318, 3073, 388×363  | **Probable** : `gif.gif` (1500×1500) ou `01_grenier_ch_AT1.mp4` (1500×1500, 2 s), même animation                                                                                                                                                                                                                           |
  | VANDERBERG MAGAZINE COVER  | 960, 2460, 812×1051 | `Vanderburg_mag_cover.gif` (834×1080, identique) ; version MP4 : `Vanderburg_mag_cover.mp4` (1274×1650, 57 s, 71 Mo)                                                                                                                                                                                                       |
  | RECORD PLAYER CINEMAGRAPH  | 623, 3852, 674×512  | `02_grenier_ch_AT3_A.gif` (1000×760, identique) ; version MP4 : `Cinemagraph_IG.mp4` (1366×1038)                                                                                                                                                                                                                           |
  | " LA RUE S'ANIME "         | 0, 4636, 1920×1080  | `road.gif` (820×461, identique, 346 images) ; version HD : `_grenier_ch_introweb.mp4` (1920×1080, 15 s)                                                                                                                                                                                                                    |
  | THE BALL AND BOX           | 0, 5937, 1920×1079  | `ball.gif` (1000×562, identique) ; version HD : `1st_animation_ig.mp4` (1920×1080, 6,9 s)                                                                                                                                                                                                                                  |
  | A CLASSIC EUROPEAN DINNER  | 571, 7254, 779×585  | `1st.gif` (640×480, identique) ; version MP4 : `classic_european dinner.mp4` (1464×1080, 7 s)                                                                                                                                                                                                                              |
  | Reflect Your Ambitions     | 133, 8281, 530×297  | `1_Reflect_your_ambitions.mp4` (**probable** : même scène du tailleur et du miroir, image non exacte)                                                                                                                                                                                                                      |
  | Embrace Every Momment      | 690, 8281, 530×298  | `2_Embrace_every_moment.mp4` (image vers 13,5 s, correspondance quasi exacte)                                                                                                                                                                                                                                              |
  | Look Good In Any Situation | 1247, 8279, 533×297 | **Introuvable dans assets-source** (décor gris : immeubles, train, soleil ; pas de 3ᵉ vidéo « Wear a Suit »)                                                                                                                                                                                                               |

- **Interactions supposées** :
  - Le manifeste compte 7 vidéos (4 en lecture automatique au chargement, 3 en lecture/pause au clic). La vidéo d'ouverture et les GIF se lisent probablement en boucle, en automatique et sans son.
  - Les 3 vignettes « Wear a Suit » correspondent vraisemblablement aux 3 vidéos en lecture/pause au clic, ou renvoient vers la page projet.
  - `View 'WEAR A SUIT' project` et `View WEAR A SUIT project` ouvrent la page **Wear a Suit** (écran `animation-1`).
  - Pied de page : `DESIGN` renvoie à la galerie Design, `ILLUSTRATION` à la galerie Illustration.
- **Remarques** :
  - Faute de frappe dans la maquette : « Momment » (pour « Moment »).
  - Le lien est écrit de deux façons : avec les apostrophes `'WEAR A SUIT'` en haut, sans en bas.
  - Rendu en V1 : utiliser les MP4/WebM compressés (sans son) plutôt que les GIF lourds (1st.gif 17 Mo, ball.gif, road.gif…), avec une image d'affiche (poster).
  - `Animation.mp4` (60 s), avec son et texte en français (« Soirée Portfolio »), est à diffuser en intégration (embed) ou avec les contrôles du lecteur.
  - La vidéo pleine largeur du bloc 2 mesure 1915 px de large sur la maquette (défaut de maquette) : la mettre à 100 % de la largeur.

---

### Wear a Suit, page projet (`design/desktop/animation-1.webp`)

- **Fond / couleurs** : fond `#F7F7F7`. Titre en `#000000` ; `EXIT` en gris `#454545` (plus sombre des pixels du mot ; c'est une couleur du jeu de couleurs XD). Première vidéo : image blanc rosé `#FFF9F8`. Troisième vidéo : fond `#ECE4DF`.
- **Structure** (artboard de 1920 × 3781) : **pas d'en-tête de site** ; une barre titre + `EXIT` le remplace.
  1. Barre haute : titre en (142, 62, 823, 28), aligné à gauche ; `EXIT` en (1717, 63, 66, 20), aligné à droite vers x 1783.
  2. Vidéo 1 (143, 158, 1633, 918) ≈ 16:9.
  3. Vidéo 2 (140, 1189, 1640, 921), encadrée d'un filet fin gris.
  4. Vidéo 3 (133, 2224, 1647, 1116).
  5. Texte descriptif centré en y 3604 (x 424 à 1497). Bas de page vide jusqu'à y 3781 : ni pied de page ni slogan.
  6. Espacement vertical d'environ 110 px entre les vidéos, marges latérales d'environ 140 px.
- **Textes** (Scholar Italic) :
  - `WEAR A SUIT - personal animated advertisement project` : ≈ 30 px, noir, aligné à gauche. « WEAR A SUIT » en capitales, le reste en minuscules, tiret simple entouré d'espaces.
  - `EXIT` : ≈ 28 px, capitales, `#454545`, aligné à droite.
  - `Vector animations designed in Adobe Illustrator, put togheter After Effects.` : ≈ 30 px, noir, centré.
- **Médias** :
  - Vidéo 1 : `Animation/1_Reflect_your_ambitions.mp4` (1920×1080, 15 s ; 1re image identique, blanc rosé).
  - Vidéo 2 : `Animation/2_Embrace_every_moment.mp4` (1920×1080, 40 s ; image vers 13,5 s identique : scène du restaurant).
  - Vidéo 3 : « Look Good In Any Situation » (immeubles gris, train, soleil) : **introuvable dans assets-source**.
- **Interactions supposées** :
  - `EXIT` ramène à l'écran précédent (le manifeste contient 3 actions « écran précédent ») ; par défaut, vers la galerie Animation.
  - Vidéos en lecture/pause au clic, avec son (ce sont des publicités) ; pas de lecture automatique avec son.
- **Remarques** :
  - Fautes dans la maquette : « togheter » (pour « together ») et il manque « in » (« put together **in** After Effects »). À faire valider par le client avant de corriger.
  - La 3ᵉ vidéo est à demander au client.
  - Les vidéos pèsent 14 et 40 Mo : à ré-encoder ou à passer en intégration.

---

### Artboard 1 : projets éditoriaux académiques (`design/desktop/artboard-1.webp`)

Cet écran est probablement une 2ᵉ page ou variante de **Miscellaneous Editorial** : même barre titre + `EXIT`, même style que `miscellaneous-editorial.png`, qui présente, lui, le magazine Rossignol.

- **Fond / couleurs** :
  - bande supérieure **noire** `#000000` de y 0 à y 1369 ;
  - reste de la page **blanc** `#FFFFFF` (et non `#F7F7F7`) ;
  - séparateurs noirs `#000000` pleine largeur (2 px en y 4278, 3 px en y 7266) ;
  - titre sur fond noir en `#F7F7F7`, `EXIT` en `#B2B2B2`, titres de section en noir.
- **Structure** (artboard de 1920 × 8378) :
  1. **Section Jeff Koons**, sur fond noir :
     - titre `Jeff Koons article, academic project` en (137, 56, 524, 28) ;
     - `EXIT` en (1717, 63, 66, 20) ;
     - image de la double page de l'article (137, 142, 1643, 1071).
  2. **Section Japon**, sur fond blanc :
     - titre `Musée de la Civilisation booklet, academic project` en (137, 1472, 731, 28) ;
     - couverture centrée (759, 1610, 417, 583) ;
     - grille 2 × 2 de maquettes de doubles pages : (255, 2334, 588, 489), (1077, 2332, 590, 491), (256, 2992, 587, 488), (1076, 2990, 589, 490). Colonnes centrées sur x ≈ 549 et x ≈ 1371 ;
     - couverture ouverte (1ʳᵉ + 4ᵉ) centrée (668, 3645, 591, 502).
  3. Trait noir de 2 px en y 4278 (x 0–1920).
  4. **Section C2** :
     - titre `Poster/panphlet for C2 conference, academic project` en (137, 4345, 780, 28) ;
     - affiche centrée (478, 4483, 966, 1279) ;
     - grille 2 × 2 de panneaux du dépliant, 741 × 561 chacun, en x 138 et x 1042, y 5979 et y 6623. Gouttière de 163 px, 83 px entre les rangées.
  5. Trait noir de 3 px en y 7266.
  6. **Section Coffee Crisp** :
     - titre `Cofee Crisp Rebrand` en (141, 7333, 296, 28) ;
     - image centrée (416, 7473, 1088, 692) ;
     - blanc jusqu'en y 8378 : ni pied de page ni slogan.
- **Textes** :
  - Titres de section : Scholar Italic ≈ 30 px, aligné à gauche en x 137, casse phrase. Couleur `#F7F7F7` sur le noir, noire sur le blanc.
    Textes exacts : `Jeff Koons article, academic project` · `Musée de la Civilisation booklet, academic project` · `Poster/panphlet for C2 conference, academic project` · `Cofee Crisp Rebrand`.
  - `EXIT` : Scholar Italic ≈ 28 px, capitales, `#B2B2B2`.
  - Tous les autres textes (article, livret, affiche) font partie des images : ce ne sont pas des textes HTML.
- **Médias** :

  | Bloc                                                                                   | Fichier `assets-source/`                                                                                                                                            |
  | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Article Jeff Koons                                                                     | `Design/Screenshot 2025-01-21 at 4.09.59 PM.png` (2528×1646, identique)                                                                                             |
  | Couverture Japon                                                                       | `Design/Japon Mag/Front_cover.png` (4200×3150, maquette 3D sur fond blanc : correspondance visuelle, à recadrer)                                                    |
  | Double page « L'art de vivre japonais / Origami »                                      | `Design/Japon Mag/2-3.png` (visuel)                                                                                                                                 |
  | Double page « Shodô »                                                                  | `Design/Japon Mag/4-5.png` (visuel)                                                                                                                                 |
  | Double page « Quatre valeurs spirituelles de l'art du thé »                            | `Design/Japon Mag/6-7.png` (visuel)                                                                                                                                 |
  | Double page « L'esthétique japonaise en quatre concepts »                              | `Design/Japon Mag/8-9.png` (visuel)                                                                                                                                 |
  | Couverture ouverte (1ʳᵉ + 4ᵉ)                                                          | `Design/Japon Mag/Front_and_Back_cover.png` (visuel)                                                                                                                |
  | Affiche C2 « Conférences »                                                             | **introuvable dans assets-source**                                                                                                                                  |
  | 4 panneaux du dépliant C2 (« Résilience », « Conférenciers » ×2, texte « Résilience ») | **introuvables dans assets-source**                                                                                                                                 |
  | Coffee Crisp (boîtes rouges et or)                                                     | `Design/1_Grenier_ch_Atelier_1_Palette_choco_Haut_gamme.jpg` (1000×750 : **probable**, recadré en 1,57:1 sur la maquette ; résolution faible pour 1088 px de large) |

  Les visuels Japon sont des maquettes 3D sur fond blanc et semblent recadrés au plus près dans la maquette : prévoir `object-fit: contain` et un fond blanc.

- **Interactions supposées** :
  - `EXIT` : écran précédent ou galerie Design.
  - Aucun autre lien ; une lightbox ou un zoom serait utile pour lire l'article et l'affiche, à proposer.
- **Remarques** :
  - Fautes dans la maquette : « panphlet » (pour « pamphlet »), « Cofee » (pour « Coffee »). À faire valider par le client.
  - Le nom d'écran « Artboard 1 » n'est pas explicite ; la page à laquelle il se rattache (Design / Miscellaneous Editorial) est **à confirmer**.
  - Dans `miscellaneous-editorial.png`, le titre en haut semble aussi être « Poster/panphlet for C2 conference… » alors que le contenu est Rossignol : probable copier-coller, à vérifier par la personne qui documente cet écran.
  - Le fond blanc `#FFFFFF` diffère du `#F7F7F7` des autres pages.
  - Les fichiers PDF sources (`Design/Japon Mag/2_Grenier_Ch_PS_presentation.pdf`) pourraient contenir le C2 : à vérifier.

---

## Assets introuvables (récapitulatif)

- Chaussette CURLY SOX « Show Jumping » détourée (page Illustration).
- Vidéo « Look Good In Any Situation » (vignette de la page Animation et 3ᵉ vidéo de la page Wear a Suit).
- Affiche et 4 panneaux du dépliant C2 (Artboard 1).
- Vidéo d'ouverture de la page Animation : fichier non identifié avec certitude (`Dog_animation_footage.mp4` ou `1_Reflect_your_ambitions.mp4`).
