# D — Pages « Ashton Font » (normal + Technical View) et « Hidden page – Song generator »

Conventions : positions en px d'artboard (x0, y0 → x1, y1), mesurées au PIL sur `design/original/<device>/<file>.png`.
Tailles de police estimées depuis la hauteur de capitale (ratio ≈ 0,7 em pour CA Scholar / Futura) → ±10 %.
« Police site » = **CA Scholar V2 Italic** (`assets-source/Font/CAScholarV2-Italic.otf`, = police « Ashton » présentée). Tous les textes de ces pages sont dans cette police sauf mention contraire.

## Constat global Ashton Font / Technical View (diff PIL)

Le diff pixel brut couvre 100 % de l'artboard (desktop 1920×4426, mobile 393×2346, tailles identiques) car **les fonds des sections sont inversés** : ce n'est pas un simple overlay. Bandes de fond mesurées sur le bord droit (desktop) :

| Bande (y) | Ashton Font | Technical View |
|---|---|---|
| 0 → 1092 (hero) | #000000 | #FDFCEF |
| 1092 → 2274 (section 2) | #FDFCEF (alphabet) | #000000 (schémas de construction) |
| 2274 → 4426 (section 3 + footer) | #000000 | #FDFCEF |

Filets de 1–2 px #707070 aux jonctions y=1091/2274 (bords du rectangle de section XD, x 0→368 et 1552→1920 — artefact de maquette, à ignorer).

L'interrupteur s'appelle **« BLUPRINT MODE »** (sic, faute de « Blueprint ») — il n'y a PAS de libellés « Print mode » ni « Blur » dans ces maquettes. OFF = « Ashton Font », ON = « Technical View ». Conclusion : ON remplace **tout le contenu sous le hero** (sections 2 et 3 entièrement différentes, seuls le texte « AVAILABLE SOON » et « EXIT » subsistent) et transforme le hero en version « fil de fer ». Détail des différences dans la section Technical View ci-dessous.

---

### Ashton Font — desktop (`design/desktop/ashton-font.webp`)

- **Fond / couleurs**
  - Hero 0→1092 : #000000 ; section alphabet 1092→2274 : #FDFCEF ; reste 2274→4426 : #000000.
  - Texte clair : #FDFCEF (logo, nav, textes) ; titre hero rose **#FFB5F2** (nouvelle couleur, non listée) ; texte de l'alphabet #1C1C13 (≈ #1C1C12).
  - Tuiles Aa/Nn/Zz : olive #51430A, crème #FDFCEE sur cadre #1C1C12, prune #42033E ; lettres #F2EAF4 / #1C1C12 / #F9EAF8 avec filets #F7BFEC.
  - Cartes : violet #B762E4, olive très foncé #1C1C12, vert #3A8146.
- **Structure** (haut → bas)
  1. Header (y 53→92) : logo à gauche x=144, nav à droite (Portfolio x=830, Shop x=1098, About x=1309, Contact x=1520), icône panier x 1725→1770, y 59→90.
  2. Titre hero « Ashton » centré : x 486→1435, y 235→445.
  3. Filet horizontal crème 3 px : x 440→1480, y 542→545.
  4. Bloc 3 colonnes sous le filet (y 591→979) : 2 filets verticaux crème 3–4 px à x=648–652 et x=1268–1271.
     - Colonne gauche (x 495→562, y 610→848) : « IN PROGRESS » en lettres empilées verticalement sur 2 colonnes (I/N puis P-R-O-G-R-E-S-S), pas ≈ 31 px.
     - Colonne centrale : « Sleek And Slanted » (y 628→702), « a reminicsence of intellectual art » (y 770→791), « THROUGH TYPOGRAPHY » (y 821→841), pavé « Designed by C. Ashton » (rectangle crème x 781→1138, y 928→968).
     - Colonne droite (x 1348→1416, y 610→879) : « AVAILABLE SOON » empilé (A-V-A-I-L-A-B-L-E / S-O-O-N).
  5. Toggle bas-droite : label « BLUPRINT MODE » x 1733→1872, y 992→1006 ; pilule x 1762→1848, y 1023→1051 (≈ 86×28, rayon plein).
  6. Section alphabet (y 1092→2274, fond #FDFCEF pleine largeur) : image carrée ≈ 1184×1182 centrée (x 368→1552) : grille 5×5 A–Z (x 624→1297, y 1340→1975) + légende « uppercase alphabet display » entre deux filets (x 463→1457, y ≈ 2192).
  7. Rangée de 3 cartes carrées 433×433 (y 2400→2833) : x 252→685, 743→1177, 1235→1668 (gouttière ≈ 58 px).
  8. Bloc « FONT PROPERTIES » : titre sur 2 lignes aligné à droite (FONT x 775→979 y 2976→3028 ; PROPERTIES x 527→972 y 3099→3151) ; liste 1 à droite x=1168 (y 2968→3150) ; astérisque x 1164→1212, y 3245→3293 ; liste 2 x=1164, y 3385→3598 ; tuiles Aa/Nn/Zz x 267→1005, y 3248→3491 (3 carrés ≈ 243 px accolés).
  9. Paragraphe centré 2 lignes (y 3865→3937, x 475→1400).
  10. « The ASHTON font will be AVAILABLE SOON! » centré (x 450→1428, y 4059→4091).
  11. « EXIT » centré (x 890→991, y 4260→4291). Fin d'artboard 4426.
- **Textes**
  | Texte (verbatim) | Police | Taille ≈ | Casse | Couleur | Align. |
  |---|---|---|---|---|---|
  | `C. ASHTON` | police site | 44 px | capitales | #FDFCEF | gauche |
  | `Portfolio` · `Shop` · `About` · `Contact` | police site, tracking large (~0,1 em) | 32 px | mixte | #FDFCEF | ligne à droite |
  | `Ashton` | police site | ≈ 290 px, tracking ≈ 0,05 em | mixte | #FFB5F2 | centré |
  | `IN PROGRESS` (lettres empilées) | police site | 22 px | capitales | #FDFCEF | colonne |
  | `Sleek And Slanted` | police site, petites capitales (S ≈ 70 px, autres ≈ 44 px) ; « AND » en escalier A / N / D décalés verticalement | 44–70 px | small-caps | #FDFCEF | centré |
  | `a reminicsence of intellectual art` (sic) | police site, tracking large | 28 px | minuscules | #FDFCEF | centré |
  | `THROUGH TYPOGRAPHY` | police site | 28 px | capitales | #FDFCEF | centré |
  | `Designed by C. Ashton` | police site | 32 px | mixte | #000000 sur pavé #FDFCEF | centré |
  | `AVAILABLE SOON` (lettres empilées) | police site | 22 px | capitales | #FDFCEF | colonne |
  | `BLUPRINT MODE` (sic) | **Futura PT** (droit, medium) | 20 px | capitales | #FDFCEF | centré sur toggle |
  | `OFF` (dans le toggle) | Futura PT | 22 px | capitales | #000000 sur pilule #FDFCEF, bouton rond noir à gauche | — |
  | `uppercase alphabet display` | police site (dans l'image) | 28 px | minuscules | #1C1C12 | centré entre filets |
  | `FONT` / `PROPERTIES` | police site, tracking large | 74 px | capitales | #FDFCEF | droite |
  | `Geometric` / `Sans-serif` / `Intensely italic` | police site | 40 px, interligne 77 px | mixte | #FDFCEF | gauche |
  | `Bauhaus-inspired` / `Based on handwriting` / `Wes Anderson-esque` / `British humor influences` | police site | 40 px, interligne 61 px | mixte | #FDFCEF | gauche |
  | `The original idea was to make a font that conveys the sarcastic` / `and unconventional tone my personality can have.` | police site, tracking large | 28 px | minuscules | #FDFCEF | centré |
  | `The ASHTON font will be AVAILABLE SOON!` | police site | 44 px | mixte | #FDFCEF | centré |
  | `EXIT` | police site | 44 px | capitales | #FDFCEF | centré |
- **Médias**
  - Titre « Ashton » + bloc 3 colonnes : à coder en texte live (police site). Composition dérivée de `assets-source/Font/Ashton.png` / `assets-source/Font/Ashton_Font.gif` (probable — même mise en page « Sleek and Slanted / Designed by C. Ashton », mais en maquette c'est du texte vectoriel).
  - Alphabet majuscules (x 368→1552, y 1092→2274) : `assets-source/Font/Capitals_Display.png` (écart moyen 1,4/255 — certain ; `Artboard 60 copy 3.png` est un quasi-doublon).
  - Carte 1 « Trouser Society Unicycle » : `assets-source/Font/Artboard 60 copy 7.png` (certain).
  - Carte 2 « OFFICIAL Post Office EST. 1967 » : `assets-source/Font/Artboard 60 copy 2.png` (certain).
  - Carte 3 « Indoor Squash » : `assets-source/Font/Screen Shot 2022-08-31 at 5.25.40 PM.png` (certain).
  - Tuiles « Aa / Nn / Zz » : introuvable dans assets-source (à recréer en HTML/CSS : 3 carrés, texte police site, cadres filets fins).
  - Astérisque (✳ 6 branches, 48 px) : pictogramme vectoriel, introuvable (le même motif figure dans `Ashton_Font_Thumbnail.png`) → SVG inline.
  - Icône panier : introuvable (icône générique).
- **Interactions supposées**
  - Nav : liens Portfolio / Shop / About / Contact ; logo → accueil.
  - Toggle « BLUPRINT MODE » OFF/ON → bascule vers l'état « Technical View » (même URL, état client ; transition probable).
  - « EXIT » → retour (accueil ou Portfolio).
  - Cartes : probablement statiques (pas d'indice de lien).
- **Remarques**
  - **À retirer (vente)** : icône panier du header ; lien nav « Shop » (à confirmer avec la nav globale du site) ; colonne verticale « AVAILABLE SOON » ; phrase « The ASHTON font will be AVAILABLE SOON! ». « IN PROGRESS » peut rester (non commercial) mais perd son pendant symétrique → suggestion : garder « IN PROGRESS » seul ou remplacer la colonne droite par un autre mot vertical.
  - Coquilles de la maquette à signaler au client : « reminicsence », « BLUPRINT ».
  - Fichier `Artboard 60 copy 9.png` (« ASHTON will be available soon! ») et `Ashton_Font_Thumbnail.png` non utilisés dans cette page (et à ne pas utiliser : mention de disponibilité).

### Ashton Font — Technical View — desktop (`design/desktop/ashton-font-technical-view.webp`)

- **Fond / couleurs** : hero 0→1092 #FDFCEF ; section 1092→2274 #000000 ; 2274→4426 #FDFCEF. Traits de construction magenta **#FF00FF** (1–3 px), secteur d'angle #FA43FF, « H » gris #B2B2B2, remplissage H schéma #5B5B5B, texte clair #FDFCEF, texte foncé #000000 / #1C1C12 (phrase AVAILABLE SOON), filets gris #888886 / #7E7E77.
- **Diff avec l'état normal**
  1. **Header** : identique en position ; logo, nav et panier passent en #000000 sur crème.
  2. **Hero** (mêmes positions au px près) : fond crème ; « Ashton » et tous les textes du bloc 3 colonnes deviennent **en contour seul** (trait 1 px #000000, remplissage transparent/crème) — effet `-webkit-text-stroke: 1px #000; color: transparent`. Le filet horizontal 3 px et les 2 filets verticaux deviennent des rectangles en contour (double trait fin). Le pavé « Designed by C. Ashton » devient un cadre en contour 1 px avec texte en contour.
  3. **Toggle** : pilule noire, texte « ON » crème à gauche, bouton rond crème à droite ; label « BLUPRINT MODE » en noir.
  4. **Section 2 (y 1092→2274)** : l'alphabet + les 3 cartes (en partie) sont remplacés par un bloc noir « construction » :
     - filet 1 px crème x 243→1658, y 1165 ;
     - texte gauche x 240→700, y 1329→1489 ; figure « π + O » centrale x 765→1163, y 1293→1551 (π plein crème + contours magenta, ellipse en contour magenta, diagonale) ; texte droit x 1224→1653, y 1351→1459 ;
     - double filet y 1677 (gris #7E7E77) et y 1734 (crème) ;
     - « For instance: » x 1345→1528, y 1808→1828 ;
     - texte gauche x 240→643, y 1897→2013 ; deux formes magenta en contour (parallélogramme double + ellipse double) x 735→1167, y 1876→2082 ; figure « H » x 1280→1565, y 1915→2103 (gabarit magenta, remplissage gris #5B5B5B, H plein crème à droite) ;
     - filet crème y 2219.
  5. **Section 3 (y 2274→4426, fond crème)** : remplace cartes + FONT PROPERTIES + tuiles :
     - texte centré 2 lignes y 2576→2648 ;
     - 3 colonnes séparées par filets gris 1 px (x 486, y 2726→3197 ; x 1414, y 2737→3186) :
       - gauche : glyphes « π → r » x 246→409, y 2831→2879 (≈ 60 px, noir) + texte x 244→443, y 2913→3092 ;
       - centre : grand « H » gris #B2B2B2 incliné x 780→1145, y 2726→3010, avec ligne de base noire 3 px et trait d'inclinaison noir ; en dessous, schéma d'angle (équerre noire + secteur magenta, x 744→840, y 3061→3174) et « 21.907° ≈ 22° » x 876→1167, y 3108→3137 ;
       - droite : glyphes « [s manuscrit] → S » x 1444→1604, y 2831→2878 + texte x 1444→1627, y 2914→3121 ;
     - texte centré 2 lignes « Ashton is intesely… » y 3264→3329 ; note source y 3401→3414 ;
     - paragraphe « I was curious… » y 3865→3937 (remplace « The original idea… ») ;
     - « The ASHTON font will be AVAILABLE SOON! » (x 469→1447, décalé +18 px vs normal) et « EXIT » (x 908→1009, +18 px) en #1C1C12 / #000000.
- **Structure** : voir diff ci-dessus (header → hero contour → bloc noir construction → bloc crème italique/angle/glyphes alternatifs → « I was curious » → AVAILABLE SOON → EXIT).
- **Textes** (police site sauf mention ; tailles ≈)
  | Texte (verbatim) | Taille | Couleur | Align. |
  |---|---|---|---|
  | Header / hero : mêmes textes que l'état normal | idem | contour #000 | idem |
  | `ON` (toggle) — Futura PT | 22 px | #FDFCEF sur pilule noire | — |
  | `Ashton is a geometric` / `sans-serif font, yet it is inspired` / `by organic & expressive` / `shapes from my handwriting.` | 30 px, interligne 44 px | #FDFCEF | gauche |
  | `The shape of my “π”` / `defined the grid system` / `throughout the entire project.` (π = glyphe alterné du « r » de la police) | 30 px, interligne 40 px | #FDFCEF | gauche |
  | `For instance:` | 28 px | #FDFCEF | gauche |
  | `Every glyph contains traces` / `of these 2 shapes derrived` (sic) / `from my first letter (π):` | 30 px, interligne 44 px | #FDFCEF | gauche |
  | `Italics started in Italy in the 1500s, and were` / `used as a default text to replicate handwriting.*` | 30 px | #000000 | centré |
  | `π → r` (glyphes) | ≈ 70 px | #000000 | gauche |
  | `In the end,` / `my first letter` / `“π” became an` / `alternate version` / `to my standard` / `lowercase “r”.` | 24 px, interligne 33 px | #000000 | gauche |
  | `21.907° ≈ 22°` | 40 px | #000000 | gauche |
  | `[s manuscrit] → S` (glyphe alterné ressemblant à un triangle arrondi « ᐃ » avec empattement, puis « S ») | ≈ 70 px | #000000 | gauche |
  | `There is also the` / `handwriten “[s manuscrit]”` (sic) / `included as a` / `variant to the` / `regular “s”,` / `hinting at my` / `intial inspiration.` (sic) | 24 px, interligne 31 px | #000000 | gauche |
  | `Ashton is intesely italicised,` (sic) / `like a modernised version of the 1500s italics!` | 30 px | #000000 | centré |
  | `*https://en.wikipedia.org/wiki/Italic_type` | 14 px | #000000 | centré |
  | `I was curious to see what would hapen if I made something structured` (sic) / `by starting off from something that is very messy.` | 30 px | #000000 | centré |
  | `The ASHTON font will be AVAILABLE SOON!` | 44 px | #1C1C12 | centré |
  | `EXIT` | 44 px | #000000 | centré |
- **Médias** : aucun bitmap ; tous les schémas (π+O, parallélogrammes/ellipses magenta, H gabarit, grand H gris, équerre + secteur) sont vectoriels → **introuvables dans assets-source**, à redessiner en SVG inline. Les glyphes π (r alterné) et « s manuscrit » doivent exister dans `CAScholarV2-Italic.otf` (à vérifier : codepoints / features `salt`/`ss01`) — sinon SVG.
- **Interactions supposées** : toggle ON → retour à l'état normal ; lien Wikipédia cliquable (target _blank) ; EXIT.
- **Remarques**
  - **À retirer (vente)** : panier, « Shop » (cf. nav globale), colonne « AVAILABLE SOON », phrase « The ASHTON font will be AVAILABLE SOON! ».
  - Coquilles maquette : « derrived », « intesely », « handwriten », « intial », « hapen ». Mobile écrit « derived » correctement.
  - Le décalage +18 px de la phrase finale/EXIT entre les deux états est probablement involontaire → garder centré.
  - La figure π+O coupe la frontière de slice (y ≈ 1293→1551) : voir crop `zoom-D-tech-sec2top.png`.

### Ashton Font — mobile (`design/mobile/ashton-font.webp`)

- **Fond / couleurs** : #000000 sur toute la hauteur (393×2346). Logo #F7F7F7, textes #FDFCEF, titre #FFB5F2, filets hero 1 px gris (≈ #98978F anti-aliasé, soit crème à ~55 %).
- **Structure**
  1. Header y 49→80 : logo « C. ASHTON » x=29 ; icône menu astérisque ✳ à droite (x ≈ 338→370, 32 px) = ouverture menu hamburger.
  2. « Ashton » centré x 50→344, y 173→238.
  3. Filet 1 px x 35→358, y 268.
  4. « Sleek And Slanted » y 299→337 ; « a reminicsence of intellectual art » y 372→383 ; « THROUGH TYPOGRAPHY » y 397→408 (tous centrés). **Pas** de colonnes verticales IN PROGRESS / AVAILABLE SOON, **pas** de pavé « Designed by C. Ashton ».
  5. Filet 1 px x 34→357, y 446.
  6. Image alphabet carrée x 14→357, y 496→839 (343×343).
  7. Carte « Trouser Society Unicycle » x 14→357, y 853→1196 (343×343). Les cartes Post Office et Indoor Squash sont **absentes** en mobile.
  8. Toggle vertical fixé à droite : x 366→384, y 646→802 (label « BLUPRINT MODE » pivoté −90°, pilule OFF verticale au-dessus).
  9. Propriétés : liste 1 x=61 (y 1235→1340 : Geometric / Sans-serif / Intensely italic, interligne ≈ 44 px) ; titre « FONT PROPERTIES » pivoté −90° le long du bord gauche (x ≈ 20, y ≈ 1290→1500) ; astérisque x ≈ 61, y ≈ 1395 ; liste 2 x=61, y 1470→1595 (interligne ≈ 35 px).
  10. Tuiles Aa/Nn/Zz x 32→357, y 1680→1788 (3 × ≈ 108 px).
  11. Paragraphe centré 4 lignes y 1908→1988.
  12. « The Ashton Font will be / AVAILABLE SOON. » 2 lignes centrées y 2076→2131.
  13. « EXIT » souligné centré x 147→237, y 2241→2270.
- **Textes**
  | Texte (verbatim) | Taille ≈ | Casse | Couleur | Align. |
  |---|---|---|---|---|
  | `C. ASHTON` | 26 px | capitales | #F7F7F7 | gauche |
  | `Ashton` | 90 px | mixte | #FFB5F2 | centré |
  | `Sleek And Slanted` (small-caps, AND en escalier) | 36 px (S) / 22 px | small-caps | #FDFCEF | centré |
  | `a reminicsence of intellectual art` | 14 px | minuscules | #FDFCEF | centré |
  | `THROUGH TYPOGRAPHY` | 14 px | capitales | #FDFCEF | centré |
  | `BLUPRINT MODE` (vertical) — Futura PT | 12 px | capitales | #FDFCEF | — |
  | `OFF` — Futura PT | 13 px | capitales | #000 sur pilule crème | — |
  | `FONT PROPERTIES` (vertical, −90°) | 24 px | capitales | #FDFCEF | — |
  | `Geometric` / `Sans-serif` / `Intensely italic` | 24 px | mixte | #FDFCEF | gauche |
  | `Bauhaus-inspired` / `Based on handwriting` / `Wes Anderson-esque` / `British humor influences` | 22 px | mixte | #FDFCEF | gauche |
  | `The original idea was` / `to make a font that conveys` / `the sarcastic and unconventional tone` / `my personality can have.` | 14 px, interligne 22 px | minuscules | #FDFCEF | centré |
  | `The Ashton Font will be` / `AVAILABLE SOON.` (≠ desktop « ASHTON font … SOON! ») | 24 px | mixte | #FDFCEF | centré |
  | `EXIT` (souligné) | 32 px | capitales | #FDFCEF | centré |
- **Médias** : alphabet = `assets-source/Font/Capitals_Display.png` (écart 3,0 ; `Artboard 60 copy 3.png` quasi identique 4,3) ; carte = `assets-source/Font/Artboard 60 copy 7.png` (certain) ; tuiles Aa/Nn/Zz, astérisques : introuvables (CSS/SVG).
- **Interactions supposées** : astérisque header → menu mobile (cf. maquette `mobile/hamburger`) ; toggle vertical fixe → état Technical View ; EXIT → retour.
- **Remarques** : **à retirer (vente)** : « The Ashton Font will be AVAILABLE SOON. ». Pas de panier en mobile. Le toggle vertical semble `position: fixed` sur le bord droit (chevauche la marge 357→393).

### Ashton Font — Technical View — mobile (`design/mobile/ashton-font-technical-view.webp`)

- **Fond / couleurs** : #FDFCEF sur toute la hauteur ; cartes noires #000000 ; logo #060508 (≈ noir) ; textes #000000 / #1C1C12 ; magenta #FF00FF ; H gris #B2B2B2.
- **Diff avec l'état normal (mobile)**
  - Fond noir → crème ; logo et icône menu en noir.
  - Hero (mêmes positions ±1 px) : « Ashton », « Sleek And Slanted », sous-titres passent **en contour** (trait gris foncé ≈ #656560, remplissage crème) ; filets en gris.
  - Toggle ON (pilule noire, texte « ON » crème).
  - Image alphabet (y 496→839) remplacée par carte noire 343×343 « construction π+O » ; carte Trouser (y 853→1196) remplacée par carte noire « 2 shapes / For instance H ».
  - Tout le bloc « FONT PROPERTIES » + tuiles + « The original idea » remplacé par : texte Italics (y 1225→1272), grand H gris (y 1316→1447), schéma d'angle + « 21.907° ≈ 22° » (y 1471→1524), phrase « Ashton is intesely italicised… » (y 1566→1593), 2 colonnes glyphes alternatifs (y 1660→1835 ; gauche x 47, droite x ≈ 242), paragraphe « I was curious… » (y 1907→1988).
  - « AVAILABLE SOON » (y 2076→2131) et EXIT (y 2241→2270, +5 px en x) conservés, en noir.
- **Structure**
  1. Header (idem, noir).
  2. Hero contour (y 171→447).
  3. Carte noire 1 (x 14→357, y 496→839) : texte haut (x 35, y ≈ 522→570), figure π+O centrée (≈ x 95→277, y 605→723), texte bas (y ≈ 762→808).
  4. Carte noire 2 (x 14→357, y 853→1196) : texte haut (y ≈ 872→903), parallélogramme + ellipse magenta (≈ x 68→298, y 938→1047), « For instance: » x 35 y ≈ 1100 + figure H (≈ x 148→272, y 1082→1165).
  5. Texte Italics centré y 1225→1272.
  6. Grand H gris incliné + ligne de base (x 107→275, y 1316→1447).
  7. Équerre + secteur magenta (x ≈ 89→134) et « 21.907° ≈ 22° » (y 1471→1524).
  8. Phrase centrée 2 lignes y 1566→1593.
  9. Deux colonnes : « π → r » + texte (x 47→170, y 1660→1835) ; « [s manuscrit] → S » + texte (x 242→352).
  10. Paragraphe « I was curious… » 4 lignes centrées y 1907→1988.
  11. « The Ashton Font will be / AVAILABLE SOON. » y 2076→2131.
  12. « EXIT » souligné y 2241→2270.
- **Textes** (police site)
  | Texte (verbatim) | Taille ≈ | Couleur | Align. |
  |---|---|---|---|
  | Hero : identiques au mobile normal | idem | contour | centré |
  | `ON` — Futura PT | 13 px | crème sur noir | — |
  | `Ashton is a geometric sans-serif font,` / `yet it is inspired by organic & expressive` / `shapes from my handwriting.` | 14 px, interligne 16 px | #FDFCEF | gauche |
  | `The shape of my first r` / `defined the grid system` / `throughout the entire project.` (ici « r » latin, pas π) | 14 px | #FDFCEF | gauche |
  | `Every glyph contains traces of these` / `2 shapes derived from my first letter (r):` | 14 px | #FDFCEF | gauche |
  | `For instance:` | 14 px | #FDFCEF | gauche |
  | `Italics started in Italy in the 1500s,` / `and were used as a default text` / `to replicate handwriting.` (pas d'astérisque ni de lien Wikipédia en mobile) | 14 px | #000000 | centré |
  | `21.907° ≈ 22°` | 20 px | #000000 | gauche |
  | `Ashton is intesely italicised,` / `like a modernised version of the 1500s italics !` | 14 px | #000000 | centré |
  | `π → r` / `[s manuscrit] → S` | ≈ 45 px | #000000 | gauche |
  | `In the end,` / `my first letter` / `“π” became an` / `alternate version` / `to my standard` / `lowercase “r”.` | 13 px, interligne 19,5 px | #000000 | gauche |
  | `There is also the` / `handwriten “[s manuscrit]”` / `included as a` / `variant to the` / `regular “s”,` / `hinting at my` / `intial inspiration.` | 13 px | #000000 | gauche |
  | `I was curious to see what would` / `happen if I made something structured` / `starting from something` / `that is very messy.` | 14 px, interligne 22 px | #000000 | centré |
  | `The Ashton Font will be` / `AVAILABLE SOON.` | 24 px | #1C1C12 | centré |
  | `EXIT` (souligné) | 32 px | #000000 | centré |
- **Médias** : aucun bitmap ; schémas vectoriels → introuvables, SVG inline (réutiliser les mêmes SVG que desktop, recadrés).
- **Interactions supposées** : toggle ON → état normal ; menu ✳ ; EXIT.
- **Remarques** : **à retirer (vente)** : « The Ashton Font will be AVAILABLE SOON. ». Textes mobile légèrement différents du desktop (« first r » vs « “π” », « derived » vs « derrived », « happen » vs « hapen », ponctuation « italics ! ») → choisir une version unique (préférer les orthographes correctes).

---

### Hidden page — Song generator — desktop (`design/desktop/hidden-page-song-generator.webp`)

- **Fond / couleurs** : fond plein lilas **#CFBAD1** (1920×1080, une seule bande) ; textes #F7F7F7 ; bouton RELOAD fond #F7F7F7, texte lilas #CFBAD1.
- **Structure**
  1. Titre en haut à gauche : x 135→1499, y 53→96.
  2. Liste de 9 chansons centrées (axe x ≈ 938), lignes à y ≈ 230, 297, 363, 430, 497, 563, 631, 696, 763 (pas ≈ 66,6 px), hauteur de texte ≈ 33 px.
  3. Barre basse (y ≈ 942→998) : bouton « RELOAD » x 140→320, y 942→997 (180×55, rayon ≈ 8 px) à gauche ; « BACK TO HOME » souligné centré x 875→1045, y 961→981 ; « You discovered a hidden page » à droite x 1360→1777, y 972→998.
- **Textes**
  | Texte (verbatim) | Police | Taille ≈ | Casse | Couleur | Align. |
  |---|---|---|---|---|---|
  | `C. ASHTON's random song reccomendations generator page` (sic) | police site, tracking large (~0,08 em) | 46 px | mixte | #F7F7F7 | gauche |
  | `Northern Sky - Nick DRAKE` | police site, tracking ≈ 0,08 em | 36 px | mixte (nom de famille en capitales) | #F7F7F7 | centré |
  | `Angeles - Elliot SMITH` | idem | 36 px | | #F7F7F7 | centré |
  | `Good As Gold - Bap KENNEDY` | idem | | | | |
  | `Second Hand News - FLEETWOOD MAC` | idem | | | | |
  | `Everybody Here Wants You - Jeff BUCKLEY` | idem | | | | |
  | `Calm Down - Jack JOHNSON` | idem | | | | |
  | `One Evening - Feist` | idem | | | | |
  | `I Don't Trust Myself (With Loving You) - John MAYER` | idem | | | | |
  | `Getting Better - The BEATLES` | idem | | | | |
  | `RELOAD` | **Futura PT** oblique (Book Oblique probable) | 32 px, tracking ≈ 0,1 em | capitales | #CFBAD1 sur #F7F7F7 | centré dans bouton |
  | `BACK TO HOME` | **Futura PT** Book (droit) | 26 px | capitales, souligné | #F7F7F7 | centré |
  | `You discovered a hidden page` | police site | 30 px | mixte | #F7F7F7 | droite |
- **Médias** : aucun.
- **Interactions supposées** : RELOAD → tire aléatoirement une nouvelle liste (probablement 9 titres) depuis une liste plus longue (JS côté client) ; BACK TO HOME → `/` ; page non liée dans la nav (accès via easter egg — déclencheur non visible dans ces maquettes, voir autres écrans / 404).
- **Remarques** : coquille « reccomendations » (desktop) vs « recomendations » (mobile) → corriger en « recommendations » (à valider). Lilas #CFBAD1 = couleur connue. Le pool complet de chansons n'est pas dans la maquette : seules ces 9 sont connues.

### Hidden page — Song generator — mobile (`design/mobile/hidden-page-song-generator.webp`)

- **Fond / couleurs** : #CFBAD1 plein (393×850) ; textes #F7F7F7 ; bouton #F7F7F7 / texte #CFBAD1.
- **Structure**
  1. Titre 2 lignes, gauche : « C. ASHTON's » x 30→194, y 59→77 ; sous-titre x 28→358, y 91→106.
  2. Liste de 9 chansons **alignée à gauche** x ≈ 19, début y 154 ; pas ≈ 46 px entre entrées ; les titres longs passent sur 2 lignes (interligne ≈ 21 px) avec « - Artiste » en ligne 2 (Second Hand News, Everybody Here Wants You, I Don't Trust Myself…). Dernière ligne y 584→601.
  3. Bouton « RELOAD » centré x 147→247, y 654→685 (100×31, rayon ≈ 5 px).
  4. « BACK TO HOME » centré x 130→263, y 756→769 (non souligné en mobile).
  5. Pas de « You discovered a hidden page » en mobile.
- **Textes**
  | Texte (verbatim) | Police | Taille ≈ | Couleur | Align. |
  |---|---|---|---|---|
  | `C. ASHTON's` | police site | 24 px | #F7F7F7 | gauche |
  | `random song recomendations generator` (sic) | police site | 16 px | #F7F7F7 | gauche |
  | `Northern Sky - Nick DRAKE` | police site | 17 px | #F7F7F7 | gauche |
  | `Angeles - Elliot SMITH` | | | | |
  | `Good As Gold - Bap KENNEDY` | | | | |
  | `Second Hand News` / `- FLEETWOOD MAC` | | | | |
  | `Everybody Here Wants You` / `- Jeff BUCKLEY` | | | | |
  | `Calm Down - Jack JOHNSON` | | | | |
  | `One Evening - Feist` | | | | |
  | `I Don't Trust Myself (With Loving You)` / `- John MAYER` | | | | |
  | `Getting Better - The BEATLES` | | | | |
  | `RELOAD` | Futura PT oblique (probable) | 17 px | #CFBAD1 sur #F7F7F7 | centré |
  | `BACK TO HOME` | Futura PT Book | 18 px | #F7F7F7 | centré |
- **Médias** : aucun.
- **Interactions supposées** : identiques au desktop (RELOAD aléatoire, BACK TO HOME → `/`).
- **Remarques** : pas de header ni de menu sur cette page (desktop comme mobile). Le retour à la ligne avant « - Artiste » est explicite en maquette → en CSS, soit `<br>` conditionnel, soit laisser le wrapping naturel.

---
