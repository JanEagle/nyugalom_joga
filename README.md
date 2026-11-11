# Nyugalom Jóga – weboldal

Statikus, magyar nyelvű weboldal jógaoktatónak (HTML + CSS + JS, nincs build lépés, nincs külső függőség).

## Fájlok

| Fájl | Mire való |
| --- | --- |
| `index.html` | Főoldal (hero, rólam, szolgáltatások, testtérkép, árak, órarend, GYIK, kapcsolat) |
| `adatvedelem.html` | Adatvédelmi tájékoztató és impresszum (sablon, ki kell tölteni) |
| `js/regions.js` | **A testtérkép tartalma**: testrészek, panaszok, jógagyakorlatok, masszázs, figyelmeztetés |
| `js/main.js` | Menü, animációk, testtérkép működése |
| `css/style.css` | Színek (`:root` változók), elrendezés |
| `assets/img/` | Webre optimalizált képek (az eredeti PNG-k az `img/` mappában vannak) |
| `vercel.json` | Vercel beállítások (tiszta URL-ek, biztonsági fejlécek, gyorsítótár) |

## Mit kell átírni élesítés előtt?

A kitalált minta-adatokat érdemes lecserélni. Keresd a `TODO` megjegyzéseket, illetve ezeket:

- név / márkanév: `Nyugalom Jóga` (index.html, adatvedelem.html)
- telefon: `+36 30 000 0000`, `tel:+36300000000`, `wa.me/36300000000`
- e-mail: `info@example.com`
- cím: `1111 Budapest, Minta utca 1.`
- bemutatkozás, végzettségek, árak, órarend, GYIK
- `adatvedelem.html`: a sárgával jelölt mezők

## Helyi előnézet

```bash
python -m http.server 5500
```

Majd: http://localhost:5500

## Vercelre telepítés (GitHubon keresztül)

1. Tedd fel a mappát egy GitHub repóba.
2. Vercel → **Add New → Project** → válaszd ki a repót.
3. Framework Preset: **Other**, Build Command és Output Directory üresen hagyható → **Deploy**.

Minden későbbi `git push` automatikusan frissíti az oldalt.

## Adatvédelem

Az oldal nem használ sütiket, analitikát, külső betűtípusokat vagy beágyazott térképet, ezért sütibanner nem szükséges. Ha ezek közül bármelyiket később hozzáadod, frissítsd az `adatvedelem.html` oldalt is.
