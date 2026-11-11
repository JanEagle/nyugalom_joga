/* ==========================================================================
   Testtérkép adatai
   Itt szerkesztheted a szövegeket. Az alakzatok koordinátái a 300 × 640-es
   SVG-vászonra vonatkoznak.
     c = kör (x, y, r)      e = ellipszis (x, y, rx, ry)
   yoga: [név, szanszkrit név, rövid leírás]
   breath / therapy: [név, rövid leírás]
   ========================================================================== */

window.BODY_REGIONS = [
  /* -------------------------------- ELÖL -------------------------------- */
  {
    id: 'fej',
    name: 'Fej és stressz',
    shapes: { front: [{ t: 'e', x: 150, y: 50, rx: 31, ry: 36 }] },
    intro: 'A tartós stressz, a kevés alvás és a képernyő előtt töltött órák gyakran a fejben és az arcban csapódnak le. Itt az a cél, hogy az idegrendszered megnyugodjon, és a gondolatok lelassuljanak.',
    issues: ['Tenziós fejfájás', 'Alvászavar', 'Szorongás', 'Szemfáradtság', 'Állkapocsfeszülés'],
    yoga: [
      ['Gyermekpóz', 'Balászana', 'A homlokod a talajon pihen, ami lassítja a gondolatokat és oldja a fej feszülését.'],
      ['Lábak a falon', 'Viparita Karani', 'Nyugtató, fordított póz: segít lecsendesedni, és javíthatja az elalvást.'],
      ['Fekvő kötött szög', 'Szupta Baddha Konászana', 'Párnákkal alátámasztva, hosszan tartva mélyen lazít.']
    ],
    breath: [
      ['Váltott orrlyukú légzés', 'Nádi Sódhana: kiegyensúlyozza az idegrendszert.'],
      ['Méhzümmögő légzés', 'Bhrámari: a zümmögés rezgése csillapítja a belső zajt.'],
      ['Jóga nidra', 'Vezetett mély relaxáció, fekve.']
    ],
    therapy: [
      ['Indiai fejmasszázs', 'Fejbőr, arc és tarkó lazítása.'],
      ['Relaxációs masszázs', 'Az egész test átmozgatása, nyugtató érintéssel.']
    ],
    warn: 'Hirtelen jelentkező, szokatlanul erős vagy ismétlődő fejfájás esetén először keress fel orvost.'
  },
  {
    id: 'nyak',
    name: 'Nyak és tarkó',
    shapes: {
      front: [{ t: 'e', x: 150, y: 93, rx: 18, ry: 14 }],
      back: [{ t: 'e', x: 150, y: 93, rx: 18, ry: 14 }]
    },
    intro: 'Ha a fejed előre hajlik a képernyő fölé, a nyaki szakasz terhelése sokszorosára nő. A nyak kíméletes mozgatása és a váll-nyak terület lazítása gyorsan enyhülést hozhat.',
    issues: ['Merev nyak', 'Tarkófeszülés', 'Képernyő-nyak', 'Fejfájás a tarkótól', 'Nyakfájás ébredéskor'],
    yoga: [
      ['Macska-tehén', 'Marjariászana–Bitilászana', 'Hullámzó gerincmozgás négykézláb, amely a nyakat is finoman mobilizálja.'],
      ['Szfinx', 'Szalamba Bhudzsangászana', 'Kíméletes mellkasnyitás, a nyak természetes ívének erősítése.'],
      ['Ülő nyaknyújtás', '', 'Fej oldalra döntve, a másik kéz lassan lefelé nyúl. Tarts 5 légzést, soha ne erőltesd.']
    ],
    breath: [
      ['Hosszú kilégzés', 'Négyig számolva be, hatig ki: leengedi a vállakat.'],
      ['Testpásztázás', 'Fekvő relaxáció, a nyak és az állkapocs tudatos elengedésével.']
    ],
    therapy: [
      ['Nyak-váll masszázs', 'A tarkó- és trapézizmok oldása.'],
      ['Triggerpont-kezelés', 'A makacs, kemény csomók célzott oldása.'],
      ['Meleg borogatás', 'Gyakorlás előtt vagy után, a nyak megnyugtatására.']
    ],
    warn: 'A nyakat soha ne forgasd hátra erőből. Karba sugárzó fájdalom, zsibbadás vagy gyengeség esetén fordulj orvoshoz.'
  },
  {
    id: 'vall',
    name: 'Váll',
    shapes: {
      front: [{ t: 'c', x: 97, y: 126, r: 18 }, { t: 'c', x: 203, y: 126, r: 18 }],
      back: [{ t: 'c', x: 97, y: 126, r: 18 }, { t: 'c', x: 203, y: 126, r: 18 }]
    },
    intro: 'A vállak a stressz első számú „tárolói”. Az ülőmunka, a görnyedt tartás és a hordozott terhek miatt befelé fordulnak, felkúsznak a fülünkhöz, és megmerevednek.',
    issues: ['Vállfeszülés', 'Befelé forduló váll', 'Vállízületi merevség', 'Lapockák közti fájdalom'],
    yoga: [
      ['Tehénarc kar', 'Gomukhászana', 'A karok hátul összekapcsolva nyitják a vállat és a mellkast.'],
      ['Sas kar', 'Garudászana', 'A lapockák közötti terület átnyújtása.'],
      ['Kiskutya nyújtás', 'Uttana Sisószana', 'Térdelve előrenyúlva a váll és a hát hosszan nyúlik.']
    ],
    breath: [
      ['Teljes jógalégzés', 'Dírga pránájáma: has, bordák, mellkas egymás után telik meg.'],
      ['Vállkörzés légzéssel', 'Belégzésre fel, kilégzésre hátra és le.']
    ],
    therapy: [
      ['Váll- és lapockamasszázs', 'A felső hát és a váll izmainak oldása.'],
      ['Mélyszöveti masszázs', 'Makacs, régi feszülések kezelésére.']
    ],
    warn: 'A hirtelen kialakult vagy éjszaka is jelentkező vállfájdalmat orvosnak kell megvizsgálnia.'
  },
  {
    id: 'mellkas',
    name: 'Mellkas és légzés',
    shapes: { front: [{ t: 'e', x: 150, y: 162, rx: 38, ry: 30 }] },
    intro: 'A görnyedt tartás és a stressz összenyomja a mellkast, ezért felületesebben lélegzünk. A mellkas megnyitása több teret ad a légzésnek, és az egész szervezet megnyugszik.',
    issues: ['Sekély légzés', 'Szorító érzés stressz miatt', 'Görnyedt tartás', 'Szorongás'],
    yoga: [
      ['Kobra', 'Bhudzsangászana', 'Finom hátrahajlás, amely megnyitja a mellkast és erősíti a hátat.'],
      ['Híd', 'Setu Bandhászana', 'Fekve, a mellkas emelkedik, a váll és a hát lazul.'],
      ['Teve', 'Usztrászana', 'Haladóknak. Kezdőként a kezeid támaszkodhatnak a keresztcsontodon.']
    ],
    breath: [
      ['Teljes jógalégzés', 'Dírga pránájáma: tágítja a mellkast, nyugtatja az elmét.'],
      ['Óceánlégzés', 'Ujjájí: lassú, hangos légzés a torokban.']
    ],
    therapy: [
      ['Mellkasnyitó masszázs', 'A mellizmok és a bordák közötti izmok oldása.'],
      ['Légzésterápia', 'A rekeszizom-légzés megtanulása.']
    ],
    warn: 'Mellkasi fájdalom, szapora szívverés vagy légszomj esetén ne gyakorolj, hanem azonnal kérj orvosi segítséget.'
  },
  {
    id: 'has',
    name: 'Has és emésztés',
    shapes: { front: [{ t: 'e', x: 150, y: 256, rx: 33, ry: 38 }] },
    intro: 'Az emésztés és az idegrendszer szoros kapcsolatban áll: stresszes időszakban a has „összeszorul”. A lassú légzés, a kíméletes csavarások és a melegség segíthetnek.',
    issues: ['Puffadás', 'Lassú emésztés', 'Menstruációs görcsök', 'Stressz okozta hasfájás'],
    yoga: [
      ['Szélfelszabadító póz', 'Pavanamuktászana', 'Térdek a mellkashoz: gyengéd hasi masszázs és puffadás-enyhítés.'],
      ['Ülő csavar', 'Ardha Matszjendrászana', 'Kíméletes csavarás, amely átmozgatja a hasi szerveket.'],
      ['Gyermekpóz', 'Balászana', 'Előrehajolva nyugtat, és enyhe nyomást ad a hasnak.']
    ],
    breath: [
      ['Hasi légzés', 'Fekve, kezek a hason: a has belégzésre emelkedik, kilégzésre süllyed.'],
      ['Jóga nidra', 'Mély relaxáció, ami az emésztést is segíti.']
    ],
    therapy: [
      ['Gyengéd hasi masszázs', 'Óramutató járásával megegyező irányban.'],
      ['Melegítő borogatás', 'Görcsök, feszülés enyhítésére.']
    ],
    warn: 'Terhesség, friss hasi műtét vagy ismeretlen eredetű hasi fájdalom esetén a csavarásokat kerüld, és egyeztess az orvosoddal.'
  },
  {
    id: 'kar',
    name: 'Kar és könyök',
    shapes: { front: [{ t: 'c', x: 74, y: 214, r: 16 }, { t: 'c', x: 226, y: 214, r: 16 }] },
    intro: 'Az egyoldalú, ismétlődő mozdulatok (egér, telefon, sport, ház körüli munka) az alkar és a könyök izmait túlterhelik. A rendszeres nyújtás és a terhelés kiegyensúlyozása sokat segít.',
    issues: ['Teniszkönyök, golfkönyök', 'Alkarfeszülés', 'Egérkar', 'Karfáradtság'],
    yoga: [
      ['Alkarnyújtás négykézláb', '', 'Tenyerek a talajon, ujjak hátrafelé, lassan hátradőlve nyújtod az alkarokat.'],
      ['Lefelé néző kutya', 'Adho Mukha Svanászana', 'Hajlított térddel. Erősíti a karokat, és lazítja a vállat.'],
      ['Ízületmozgató sorozat', 'Pavanamuktászana sorozat', 'Csukló-, könyök- és vállkörzések lassan, légzéssel.']
    ],
    breath: [
      ['Kilégzésre elengedés', 'Nyújtásnál a kilégzésnél engedd el a karok izmait.']
    ],
    therapy: [
      ['Alkar- és könyökmasszázs', 'Az alkarizmok oldása a feszülés okánál.'],
      ['Hideg-meleg borogatás', 'Gyulladásos jellegű panaszoknál előzetes egyeztetéssel.']
    ],
    warn: 'Tartós zsibbadás, erőtlenség vagy ismétlődő éjszakai fájdalom esetén kérj orvosi vizsgálatot.'
  },
  {
    id: 'kez',
    name: 'Csukló és kéz',
    shapes: { front: [{ t: 'c', x: 54, y: 306, r: 20 }, { t: 'c', x: 246, y: 306, r: 20 }] },
    intro: 'Gépelés, okostelefon és kézimunka közben a csukló és az ujjak folyamatosan dolgoznak. Néhány perc célzott mozgatás és nyújtás napközben is jelentősen enyhítheti a terhelést.',
    issues: ['Csuklófájdalom', 'Ujjmerevség', 'Gépelés okozta fáradás', 'Kéztőalagút-jellegű panaszok'],
    yoga: [
      ['Csuklókörzés és kéznyújtás', '', 'Ülve, 10–10 kör mindkét irányba, majd az ujjak lassú kinyújtása.'],
      ['Imádkozó kéz', 'Anjali mudra', 'Tenyér tenyérnek nyomva, enyhe nyújtás a csuklón.'],
      ['Kézjegyek', 'Mudrák', 'Ujjgyakorlatok légzéssel és figyelemmel, a kéz finom mozgatására.']
    ],
    breath: [
      ['Mudrával kísért légzés', 'Gyin mudra ülve, a kéz és a légzés összehangolásával.']
    ],
    therapy: [
      ['Kéz- és ujjmasszázs', 'A tenyér és az ujjak lazítása.'],
      ['Kéztő-mobilizálás', 'Kíméletes mozgástartomány-növelés.']
    ],
    warn: 'Éjszakai zsibbadás vagy az ujjak erőtlensége esetén kéztőalagút-szindróma is lehet, ilyenkor orvosi vizsgálat szükséges. Fájó csuklóra ne támaszkodj: használj ökölfogást vagy alkartámaszt.'
  },
  {
    id: 'csipo',
    name: 'Csípő és ülőizmok',
    shapes: { front: [{ t: 'c', x: 114, y: 330, r: 22 }, { t: 'c', x: 186, y: 330, r: 22 }] },
    intro: 'A sok ülés miatt a csípőhajlító izmok megrövidülnek, a farizom pedig „elalszik”. A csípő mobilizálása a derékpanaszokon is segíthet.',
    issues: ['Merev csípő', 'Ülőmunka okozta feszülés', 'Csípőízületi fájdalom', 'Ágyéki feszesség'],
    yoga: [
      ['Galamb póz', 'Egapáda Radzsakapotászana', 'Mély csípőnyitás. Kezdőként alátámasztással, fekvő változatban.'],
      ['Kötött szög', 'Baddha Konászana', 'Talpak összeérnek, térdek lazán oldalra, a belső comb nyúlik.'],
      ['Alacsony kitörés', 'Anjaneyászana', 'A csípőhajlítókat nyújtja, ami ülőmunkánál különösen hiányzik.']
    ],
    breath: [
      ['Lassú, mély légzés', 'Nyújtásban 5–8 légzésig tartva engedi a mély izmokat.']
    ],
    therapy: [
      ['Csípő- és farizommasszázs', 'A mély csípőizmok oldása.'],
      ['Fasciális mobilizáció', 'Kötőszövet-oldó technikák.']
    ],
    warn: 'Csípőprotézis vagy csípőműtét után a mély csípőnyitók előtt egyeztess az orvosoddal.'
  },
  {
    id: 'terd',
    name: 'Térd',
    shapes: { front: [{ t: 'c', x: 122, y: 450, r: 21 }, { t: 'c', x: 178, y: 450, r: 21 }] },
    intro: 'A térd a körülötte lévő izmoktól kap védelmet. Az erős, rugalmas comb- és csípőizmok sok térdpanaszt megelőzhetnek vagy enyhíthetnek, ha a gyakorlatokat pontosan végezzük.',
    issues: ['Térdfájdalom', 'Instabilitás érzése', 'Reggeli merevség', 'Terheléses fájdalom'],
    yoga: [
      ['Fa póz', 'Vrikszászana', 'Egyensúly és combizom-erősítés. A talp lehet a boka vagy a vádli mellett, a térden soha.'],
      ['Fekvő nagylábujj-fogás szíjjal', 'Szupta Pádángusthászana', 'A comb hátulját és a térd körüli izmokat nyújtja, terhelés nélkül.'],
      ['Támasztott székpóz', 'Utkatászana', 'Falnál, kis mélységben. Erősíti a combot a térd védelmére.']
    ],
    breath: [
      ['Nyugodt hasi légzés', 'Fekve, a térd alatt párnával.']
    ],
    therapy: [
      ['Combizom-masszázs', 'A térd körüli izmok egyensúlyba hozása.'],
      ['Meleg borogatás', 'Merevség esetén, mozgás előtt.']
    ],
    warn: 'Fájó térdet ne csavarj, és ne terhelj mélyen behajlítva. Duzzadt, meleg térdnél orvosi vizsgálat szükséges. Kerüld a Padmászanát és a Virászanát.'
  },
  {
    id: 'lab',
    name: 'Boka és láb',
    shapes: { front: [{ t: 'e', x: 122, y: 586, rx: 23, ry: 30 }, { t: 'e', x: 178, y: 586, rx: 23, ry: 30 }] },
    intro: 'A lábfej a test alapja: a talp boltozata és a boka stabilitása az egész tartásunkra kihat. A tudatos talpterhelés és a talpmasszázs gyorsan felfrissít.',
    issues: ['Lúdtalp', 'Talpfájdalom', 'Nehéz, duzzadt láb', 'Bokainstabilitás'],
    yoga: [
      ['Hegy póz', 'Tádászana', 'Tudatos talpterhelés, a lábboltozat erősítése.'],
      ['Lábak a falon', 'Viparita Karani', 'Felfrissíti a fáradt, nehéz lábakat.'],
      ['Talpgörgetés labdával', '', 'Kis labdával a talp teljes felületén, ülve vagy állva.']
    ],
    breath: [
      ['Lábra figyelő relaxáció', 'Jóga nidra a lábtól a fejig haladva.']
    ],
    therapy: [
      ['Talpmasszázs', 'A talp és a lábboltozat lazítása.'],
      ['Reflexológia', 'A talp reflexpontjainak kezelése.'],
      ['Váltott hőmérsékletű lábfürdő', 'Keringésserkentő hatású.']
    ],
    warn: 'Tartós duzzanat, színváltozás vagy erős fájdalom esetén orvosi vizsgálat szükséges (különösen cukorbetegségnél).'
  },

  /* -------------------------------- HÁTUL ------------------------------- */
  {
    id: 'felsohat',
    name: 'Felső hát és lapocka',
    shapes: { back: [{ t: 'e', x: 150, y: 158, rx: 36, ry: 34 }] },
    intro: 'A görnyedt, előreforduló tartás miatt a lapockák között folyamatos húzódás alakul ki, a mellkas pedig összezár. A hát tágítása és a mellkas megnyitása egyszerre enyhít.',
    issues: ['Görnyedt tartás', 'Lapockák közti fájdalom', 'Kerek hát', 'Mellkasi merevség'],
    yoga: [
      ['Tű befűzése', 'Parsva Balászana', 'Az egyik kar áthalad a másik alatt, finom csavarással nyújtja a lapockák közét.'],
      ['Macska-tehén', 'Marjariászana–Bitilászana', 'A gerinc teljes hosszát átmozgatja.'],
      ['Gyermekpóz kitárt karokkal', 'Utthita Balászana', 'Hosszan nyújtja a hátat és a vállakat.']
    ],
    breath: [
      ['Hátra irányuló légzés', 'Gyermekpózban a belégzést a hát felé küldve.']
    ],
    therapy: [
      ['Háti masszázs', 'A gerinc melletti izmok oldása.'],
      ['Triggerpont-kezelés', 'A lapockák közti csomók célzott oldása.']
    ],
    warn: 'Mellkasra vagy bordákra sugárzó éles fájdalom, légzésnél erősödő fájdalom esetén kérj orvosi segítséget.'
  },
  {
    id: 'derek',
    name: 'Derék és ágyék',
    shapes: { back: [{ t: 'e', x: 150, y: 246, rx: 33, ry: 32 }] },
    intro: 'A derékfájás az egyik leggyakoribb panasz: ülőmunka, emelés, stressz vagy gyenge törzsizmok állhatnak mögötte. A kíméletes mozgatás és a törzs erősítése hosszú távon a legjobb megoldás.',
    issues: ['Derékfájás', 'Reggeli merevség', 'Ülőmunka okozta fájdalom', 'Ágyéki feszülés'],
    yoga: [
      ['Térdek a mellkashoz', 'Apanászana', 'Hátfekvésben, finoman átmasszírozza a derekat.'],
      ['Fekvő csavar', 'Szupta Matszjendrászana', 'Kíméletes gerinccsavarás, párnával alátámasztva.'],
      ['Macska-tehén', 'Marjariászana–Bitilászana', 'Kis mozdulatokkal, fájdalom nélkül mobilizál.'],
      ['Gyermekpóz', 'Balászana', 'Hosszan nyújtja az ágyéki szakaszt.']
    ],
    breath: [
      ['Hasi légzés fekve', 'Térdek hajlítva, a derék a talajon pihen.'],
      ['Progresszív izomrelaxáció', 'A test izmainak sorra elengedése.']
    ],
    therapy: [
      ['Derék- és ágyékmasszázs', 'A gerinc melletti izmok és a keresztcsont kezelése.'],
      ['Hőkezelés', 'Meleg borogatás, ami lazítja a görcsös izmokat.']
    ],
    warn: 'Lábba sugárzó fájdalom, zsibbadás, lábgyengeség, vizelési vagy székelési zavar esetén azonnal fordulj orvoshoz.'
  },
  {
    id: 'farizom',
    name: 'Keresztcsont és farizom',
    shapes: { back: [{ t: 'e', x: 150, y: 308, rx: 46, ry: 28 }] },
    intro: 'A mély farizmok (köztük a piriformis) összehúzódva irritálhatják az ülőideget, a keresztcsonti tájék pedig a hosszú ülés miatt fáj. A csípő és a farizom nyújtása gyakran gyorsan enyhít.',
    issues: ['Ülőideg-panasz', 'Piriformis-szindróma', 'Keresztcsonti fájdalom', 'Ülés közbeni fájdalom'],
    yoga: [
      ['Fekvő négyes', 'Szucsirandhrászana', 'A farizmot nyújtja, hátfekvésben, biztonságosan.'],
      ['Galamb póz', 'Egapáda Radzsakapotászana', 'Mély nyújtás, szükség esetén párnával alátámasztva.'],
      ['Híd', 'Setu Bandhászana', 'Erősíti a farizmot, és tehermentesíti a derekat.']
    ],
    breath: [
      ['Lassú kilégzés a nyújtásban', 'A kilégzéssel engedd el a farizom feszülését.']
    ],
    therapy: [
      ['Farizom- és piriformismasszázs', 'A mély izmok oldása.'],
      ['Triggerpont-terápia', 'Az ülőideget nyomó feszülések kezelése.']
    ],
    warn: 'Erősödő, a lábba lehúzódó fájdalom vagy zsibbadás esetén orvosi kivizsgálás szükséges.'
  },
  {
    id: 'combvadli',
    name: 'Hátsó comb és vádli',
    shapes: {
      back: [
        { t: 'e', x: 124, y: 396, rx: 22, ry: 52 }, { t: 'e', x: 176, y: 396, rx: 22, ry: 52 },
        { t: 'e', x: 123, y: 520, rx: 16, ry: 44 }, { t: 'e', x: 177, y: 520, rx: 16, ry: 44 }
      ]
    },
    intro: 'A hátsó combizom és a vádli ülőmunka és sport után is hajlamos a rövidülésre. A rugalmas hátsó láncnak a derékpanaszok megelőzésében is fontos szerepe van.',
    issues: ['Rövid combhajlító', 'Vádligörcs', 'Merev hátsó comb', 'Nehéz láb'],
    yoga: [
      ['Szíjas combnyújtás', 'Szupta Pádángusthászana', 'Hátfekvésben szíjjal, biztonságosan és kényelmesen nyújt.'],
      ['Lefelé néző kutya', 'Adho Mukha Svanászana', 'Hajlított térddel: a vádli és a combhajlító is nyúlik.'],
      ['Előrehajlás hajlított térddel', 'Uttanászana', 'Lazán lógó fejjel, a térd enyhén hajlítva.']
    ],
    breath: [
      ['Hosszú kilégzés', 'A nyújtásokban a kilégzés oldja az izmok védekezését.']
    ],
    therapy: [
      ['Sportmasszázs', 'A comb és a vádli átdolgozása.'],
      ['Önmasszázs habhengerrel', 'Lassan, fájdalomküszöb alatt.']
    ],
    warn: 'Egyoldali duzzanat, melegség és fájdalom a vádliban (trombózis gyanúja) esetén azonnal orvoshoz kell fordulni.'
  }
];

/* Melyik testrész melyik listában (chipek) jelenjen meg */
window.BODY_CHIPS = {
  front: ['fej', 'nyak', 'vall', 'mellkas', 'has', 'kar', 'kez', 'csipo', 'terd', 'lab'],
  back: ['nyak', 'vall', 'felsohat', 'derek', 'farizom', 'combvadli']
};
