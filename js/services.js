/* ==========================================================================
   Kezelések tartalma (a felugró ablakok és a kártyák innen töltődnek)
   blocks: { title, kind: 'check' | 'tags' | 'list', items: [szöveg | [félkövér, folytatás]] }
   avoid:  amikor a kezelés nem javasolt
   ========================================================================== */

window.SERVICES = [
  {
    id: 'vagus',
    name: 'Vagus masszázs',
    tagline: 'Idegrendszert nyugtató, gyengéd kezelés',
    summary: 'Gyengéd kezelés, amely segít a stressz csökkentésében, az emésztés és az alvás támogatásában.',
    meta: 'Nyugtat · Stresszoldás',
    intro: [
      'A vagus masszázs gyengéd, idegrendszert nyugtató kezelés, amely segíthet csökkenteni a stresszt, támogatja az emésztést, és hozzájárul a szervezet természetes egyensúlyának visszaállításához.',
      'A vagus ideg – más néven bolygóideg – összeköti a központi idegrendszert a belső szervekkel és a kötőszöveti hálózatokkal (fascia). A kezelés során az idegrendszer átkapcsol a relaxált, paraszimpatikus működésre, és jelzi a testnek, hogy biztonságban van, pihenhet.',
      'Ez a jelzés csökkentheti a stresszhormonok szintjét, lassíthatja a pulzust, és támogatja a szervezet öngyógyító folyamatait. Mozgásszervi panaszoknál is hasznos, mert a megnyugodott test könnyebben fogadja a további kezeléseket.'
    ],
    blocks: [
      {
        title: 'Milyen esetekben ajánlott?',
        kind: 'check',
        items: [
          'Szorongás és stressz csökkentésére',
          'A koncentráció javítására',
          'A szívritmus és a vérnyomás szabályozásának támogatására',
          'Az emésztés támogatására',
          'Az alvásminőség javítására',
          'Gyakori fejfájás és migrén esetén a feszültség oldására',
          'A váll, az állkapocs és a nyak–állkapocs területén jelentkező feszültség oldására'
        ]
      }
    ],
    avoid: [
      'Beültetett szívritmus-szabályozó (pacemaker vagy ICD) esetén',
      'Akut epekő esetén',
      'Súlyos keringési probléma vagy súlyos szívritmuszavar esetén',
      'A fej, a nyak vagy a mellkas területét érintő daganatos betegség esetén',
      'Akut gyulladásos, lázas, fertőző állapotban',
      'Friss nyaki műtétek vagy sérülések esetén, a szöveti stabilitás kialakulása előtt',
      'Várandósság alatt'
    ]
  },

  {
    id: 'has',
    name: 'Hasmasszázs – viscerális mobilizáció',
    tagline: 'A has finom, fájdalommentes kezelése',
    summary: 'Gyengéd manuális technika a belső szervek és kötőszövetek feszültségeinek oldására.',
    meta: 'Emésztés · Kismedence',
    intro: [
      'A viscerális mobilizáció a has speciális, finom masszírozása. Gyengéd, fájdalommentes manuális technika, amely a belső szervek és a rögzítő kötőszövetek feszültségeinek oldásával támogatja a szervek megfelelő működését.'
    ],
    blocks: [
      {
        title: 'A viscerális masszázs hatásai',
        kind: 'check',
        items: [
          ['Javítja az emésztőrendszer működését: ', 'segíthet puffadás, székrekedés, hasmenés, reflux és IBS-tünetek esetén.'],
          ['Segíti a belső szervek mikrokeringését, ', 'ami támogatja a szervezet természetes kiürülési folyamatait.'],
          ['Támogatja a kismedencei szervek egészségét: ', 'jótékony hatású lehet nőgyógyászati és urológiai panaszok esetén.'],
          ['Hasi műtétek utáni rehabilitáció ', 'támogatása.'],
          ['Csökkenti a stresszt: ', 'a hasi terület rengeteg idegvégződést tartalmaz, a finom technika nyugtatja a vegetatív idegrendszert.']
        ]
      }
    ],
    avoid: [
      'Akut hasi és kismedencei gyulladás, fertőzés esetén',
      'Daganatos megbetegedés esetén',
      'Friss hasi és kismedencei műtétek, sérülések esetén',
      'Vérzékenység, belső vérzés vagy trombózis esetén',
      'Várandósság idején',
      'Lázas állapotban',
      'Akut hasi fájdalom esetén',
      'Hasi sérv esetén'
    ]
  },

  {
    id: 'melyszoveti',
    name: 'Mélyszöveti masszázs',
    tagline: 'Nem a fájdalomról szól, hanem az ellazulásról',
    summary: 'Lassú, célzott technika a krónikus feszültségek és a mélyen rögzült izomblokkok oldására.',
    meta: 'Hát · Nyak · Váll · Derék',
    intro: [
      'A mélyszöveti masszázs a bőr alatti kötőszöveti rétegekbe, a fasciába és a mélyebb izomrétegekbe hatoló, lassú, manuális technika, amely a krónikus feszültségek és a mélyen rögzült mozgásszervi blokkok feloldására fókuszál.',
      'Ha valaki eddig úgy gondolta, hogy a hatásos masszázs szükségszerűen fájdalmas, ez az élmény átírhatja ezt az elképzelést. A kezelés nem a fájdalom elviseléséről szól, hanem a test és az idegrendszer megnyugvásáról, az ellazulásról és a valódi feltöltődésről.',
      'Egy egyszerű lazító masszázs enyhítheti a fájdalmat és egyéb tüneteket, a mélyszöveti masszázs viszont célzott technikákkal az okokkal is dolgozik.'
    ],
    blocks: [
      {
        title: 'Két formában érhető el',
        kind: 'list',
        items: [
          'Külön masszázsként, kötőszöveti mobilizációként.',
          'Mozgásszervi panaszok esetén lokálisan, az adott terület mélyszöveti kezeléseként.'
        ]
      },
      {
        title: 'Miben segít?',
        kind: 'check',
        items: [
          'Segít a krónikus hát-, nyak-, váll- és derékfájdalom enyhítésében',
          ['Feloldja a fájdalmas izomcsomókat: ', 'kezeli a triggerpontokat és a szöveti letapadásokat.'],
          ['Helyreállítja a mozgásszabadságot: ', 'nyújtja és rugalmassá teszi a kötőszövetet (fasciát).'],
          ['Javítja a testtartást: ', 'felszabadítja a megrövidült izmokat.'],
          ['Gyorsítja a sportolás utáni regenerációt: ', 'serkenti a vér- és nyirokkeringést a mélyebb szövetekben is.'],
          'Csökkenti a stressz fizikai tüneteit'
        ]
      }
    ],
    avoid: [
      'Lázas, fertőző, akut gyulladásos állapotban',
      'Mélyvénás trombózis esetén',
      'Daganatos megbetegedés esetén',
      'Súlyos szív- és érrendszeri betegségek esetén',
      'Sérült bőrfelszín esetén',
      'Közvetlenül műtét után',
      'Közvetlenül tetoválás után',
      'Csontritkulás előrehaladott fázisában',
      'Vérzékenység vagy véralvadásgátlók szedése esetén'
    ]
  },

  {
    id: 'nyirok',
    name: 'Nyirokmasszázs',
    tagline: 'Lassú, ritmikus, kitisztító kezelés',
    summary: 'Kíméletes mozdulatokkal támogatja a felgyülemlett folyadék és a salakanyagok elszállítását.',
    meta: 'Duzzanat · Nehéz láb · Fáradtság',
    intro: [
      'A nyirokmasszázs kíméletes, lassú, ritmikus mozdulatokkal támogatja a szervezetet a szövetek között pangó folyadék és a felhalmozódott anyagcseretermékek elszállításában.',
      'Ezáltal a szervezet kitisztulhat, a gyulladásos folyamatok csillapodhatnak, vagy a már meglévők hamarabb lezajlanak.'
    ],
    note: 'A masszázs előtti napokban, de legalább a masszázs napján fogyassz a szokásosnál sokkal több vizet, hogy a szervezet könnyebben ki tudja választani a felhalmozódott anyagokat.',
    blocks: [
      {
        title: 'Miben segít?',
        kind: 'check',
        items: [
          'Ödémák, duzzanatok csökkentésében',
          'Visszatérő fertőzésekre való hajlam esetén',
          'Krónikus fáradtságérzet esetén',
          'Vizesedésre való hajlam esetén',
          'Nehéz láb- és kézérzet esetén',
          'Mozgásszegény, ülő életmód okozta pangás esetén',
          'Az elengedés nehézségeinél, elfojtott érzelmek, megrekedtség érzete esetén: sokan érzelmi szinten is felszabadítónak élik meg'
        ]
      }
    ],
    avoid: [
      'Lázas, gyulladásos, fertőző betegség esetén',
      'Mélyvénás trombózis vagy vérrög esetén',
      'Súlyos szív- és keringési betegségek esetén',
      'Súlyos veseelégtelenség esetén',
      'Daganatos megbetegedés esetén',
      'Várandósság idején'
    ],
    avoidNote: 'Újonnan kialakult, egyoldali vagy fájdalmas duzzanat esetén előbb orvosnak kell megvizsgálnia az érintett személyt.'
  },

  {
    id: 'arc',
    name: 'Fasciális arckezelés',
    tagline: 'Természetes lifting a mély kötőszövetekre hatva',
    summary: 'Az arc, az állkapocs, a nyak és a dekoltázs kötőszöveti kezelése: feszesít, frissít, oldja a feszültséget.',
    meta: '3–4 hetente ajánlott',
    intro: [
      'A fasciális arckezelés különleges terápia, amely a mély kötőszövetekre hatva természetes módon feszesíti, liftingeli az arc, az állkapocs, a nyak és a dekoltázs bőrét, serkenti a kollagéntermelést, csökkenti a puffadást, és támogatja a szövetek kitisztulását.',
      'A kezelés során az arc, az állkapocs, a nyak és a mellkas területén is dolgozunk. A tartós hatás érdekében három-négy hetente érdemes megismételni.'
    ],
    blocks: [
      {
        title: 'A fasciális arckezelés hatásai',
        kind: 'check',
        items: [
          'Fokozza a vér- és nyirokkeringést',
          'Csökkenti a duzzanatokat, a szemkörnyéki duzzanatot is',
          ['Feszesít és fiatalít: ', 'serkenti a kollagén- és elasztintermelődést, simítja a ráncokat.'],
          'Formásabb izomtónust, feszesebb, megemelt arckontúrt, határozottabb állvonalat eredményez',
          'Oldja az állkapocs területén felgyülemlett feszültséget',
          'Harmonizálja a vegetatív idegrendszert, erősíti a mélynyugalmi (paraszimpatikus) működést',
          ['Fájdalomcsillapító hatású is lehet: ', 'a testünk egyetlen összefüggő fasciális (kötőszöveti) háló, ahol minden mindennel összefügg, ezért az arckezelés az egész testre kihat.']
        ]
      }
    ],
    avoid: [
      'Lázas, fertőző betegség esetén',
      'Arcot érintő bőrproblémák esetén (aktív herpesz, gyulladt akné, nyílt seb, napégés, friss tetoválás)',
      'Friss plasztikai műtét vagy esztétikai beavatkozás után',
      'Fogászati gyulladások, tályogok esetén'
    ],
    avoidNote: 'Pajzsmirigy-túlműködés esetén a nyak elülső részének masszírozása kimarad.'
  },

  {
    id: 'heg',
    name: 'Funkcionális hegintegráció',
    tagline: 'Fájdalommentes, gyengéd és hatékony hegkezelés',
    summary: 'Műtéti és más hegek kezelése: oldja a letapadásokat, javítja a mozgást és a szövetek rugalmasságát.',
    meta: '3–6 kezelés · 3–4 hetente',
    intro: [
      'A műtéti és más hegek, égési sérülések hatással lehetnek a mozgásra, a belső szervek működésére, az ízületek és szövetek mobilitására, valamint az idegrendszerre és a mentális állapotra is. Okozhatnak fájdalmat, mozgáskorlátozottságot, túlérzékenységet vagy érzékkiesést, viszketést, és befolyásolhatják a sportteljesítményt, sőt az énképet és az önbizalmat is.',
      'A hegekkel – legyenek bármilyen régiek és bármilyen mértékűek – lehet, sőt érdemes foglalkozni. A hegintegráció célja, hogy a „gubancos”, fájdalmas vagy esztétikailag zavaró, összetapadt textúra felszabaduljon.',
      'Az eszközös és manuális hegkezelés mellett meghatározó a megfelelően felépített mozgásprogram, legyen szó friss, érett vagy régi hegről.'
    ],
    blocks: [
      {
        title: 'A hegkezelésről',
        kind: 'check',
        items: [
          'Teljesen fájdalommentes',
          'Már az első kezelés után érezhető lehet a változás',
          'A heg textúrája egyre finomodik, színe halványul',
          'Elég három-négy hetente jönni kezelésre',
          'A heg állapotától és az igényeidtől függően 3–6 kezelés ajánlott',
          'Később évente egy emlékeztető, állapotfenntartó kezelés javasolt'
        ]
      },
      {
        title: 'A mozgás hatásai',
        kind: 'list',
        items: [
          'Javítja a szöveti mobilitást és a rugalmasságot',
          'Csökkenti a letapadások kialakulását',
          'Segíti a kollagén rendeződését',
          'Javítja a funkciót',
          'Javítja a keringést a környező szövetekben, ami támogatja a regenerációt'
        ]
      },
      {
        title: 'Milyen hegekkel dolgozunk?',
        kind: 'tags',
        items: [
          'Műtéti metszés', 'Laparoszkópos műtét', 'Hasi műtét', 'Császármetszés', 'Mellkasi műtét',
          'Ortopédiai műtét', 'Gerincműtét', 'Plasztikai műtét', 'Bőrelváltozás, anyajegy eltávolítása',
          'Oltás utáni heg', 'Égés, forrázás', 'Vágás, szúrás', 'Mélyebb zúzódásos sérülés', 'Üvegsérülés',
          'Sportbaleset, esés', 'Kutya- vagy macskaharapás', 'Szájsebészeti műtét, foghúzás',
          'Implantáció, ínyműtét'
        ]
      }
    ],
    note: 'A mozgásnak fokozatosnak és a seb aktuális állapotához igazítottnak kell lennie.',
    avoid: [
      'Fertőzés esetén, vagy ha a heg területe gyulladt',
      'Daganatos megbetegedés vagy trombózis esetén az érintett területen',
      'Sérült bőrfelszín vagy bőrbetegségek esetén',
      'Várandósság alatt a hasi hegkezelés nem végezhető',
      'Vérhígító szedése esetén (a nagyobb nyomás nagyobb véraláfutást okozhat)',
      'Akut csonttörés esetén az érintett területen',
      'Beépített háló esetén'
    ]
  },

  {
    id: 'gerinctorna',
    name: 'Gerinctorna',
    tagline: 'Kíméletes, egyénre szabható mozgásprogram',
    summary: 'Célzott megelőző és rehabilitációs mozgás a gerinc egészségéért, a helyes testtartásért.',
    meta: 'Megelőzés · Rehabilitáció',
    intro: [
      'A gerinctorna célzott, preventív és rehabilitációs mozgásforma, amely a gerinc egészségének megőrzését, a gerinc körüli izmok erősítését, nyújtását és mobilizálását szolgálja.',
      'A gyakorlatok célja a gerinc természetes mozgékonyságának fenntartása, a helyes testtartás kialakítása, az izomegyensúly helyreállítása és a mozgásszervi panaszok enyhítése. Kíméletes, egyénre szabható program, amely rendszeres gyakorlással hozzájárulhat a gerinc stabilitásához és a mindennapi mozgás szabadságához.'
    ],
    note: 'A gyakorlatokat mindig az egyéni állapothoz, terhelhetőséghez és mozgásszervi problémákhoz igazítjuk.',
    blocks: [
      {
        title: 'Kinek ajánljuk?',
        kind: 'check',
        items: [
          'Ülőmunkát végzőknek, mozgásszegény életmódot folytatóknak',
          'Hát-, nyak- és derékfájdalommal küzdőknek',
          'Tartáshibával, helytelen testtartással élőknek',
          'Gerincmerevség, beszűkült mozgástartomány esetén',
          'Gerinc körüli izomgyengeség esetén',
          'Csontritkulás esetén, megfelelően összeállított gyakorlatsorral',
          'A mozgékonyság és az izomerő megőrzésére',
          'Megelőzés céljából mindazoknak, akik hosszú távon megőriznék gerincük egészségét'
        ]
      },
      {
        title: 'Az előnyei',
        kind: 'check',
        items: [
          ['Erősíti a gerincet stabilizáló izmokat, ', 'támogatja a megfelelő tartást.'],
          ['Javítja a testtartást: ', 'segít az izomegyensúly helyreállításában.'],
          ['Csökkenti a fájdalmat: ', 'enyhítheti a hát-, nyak- és deréktáji panaszokat.'],
          ['Növeli a mozgástartományt, ', 'javítja a gerinc és az ízületek mobilitását.'],
          ['Nyújtja a megrövidült izmokat, ', 'oldja a feszültséget és a merevséget.'],
          'Javítja a koordinációt és az egyensúlyt',
          ['Növeli a testtudatot: ', 'segít felismerni és korrigálni a helytelen mozgásmintákat.'],
          'Segít megelőzni a mozgásszervi panaszok kialakulását, javítja az általános közérzetet'
        ]
      }
    ],
    avoid: [
      'Akut, erős, tisztázatlan eredetű gerincfájdalom esetén',
      'Friss gerincsérülés vagy csigolyatörés esetén',
      'Akut porckorongsérv vagy ideggyöki nyomás súlyosbodó tünetei esetén',
      'Friss gerincműtét után, orvosi engedély nélkül',
      'Lázas, fertőző, gyulladásos állapotban',
      'Súlyos csontritkulásnál bizonyos mozgásformák és terhelések kerülendők',
      'Erős kisugárzó fájdalom, izomgyengeség vagy érzéskiesés esetén, kivizsgálás előtt',
      'Daganatos gerincérintettség esetén, szakember által meghatározott mozgásprogram nélkül'
    ]
  }
];
