# EzEdu website

The public marketing website for EzEdu, the school management app (internal name: SchoolWise). It's one page in
plain HTML, CSS, and JavaScript, in Bangla and English, published free on GitHub Pages.

Live address: `https://ezsolutionsbd.github.io/ezedu/`

## Files

| Path | Contents |
| --- | --- |
| `index.html` | The page. English text lives here; each translatable element has `data-i18n="key"`. |
| `assets/js/i18n.js` | Bangla strings and the language switch. |
| `assets/js/main.js` | Mobile menu and current-section highlight. |
| `assets/css/style.css` | Styles. Colors are tokens on `:root`, redefined for dark mode. |
| `assets/img/logo.svg`, `logo-mark.svg`, `favicon.svg` | Logo files. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |

## Run it locally

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Change the text

1. Edit the English text in `index.html`.
2. Edit the Bangla text for the same `data-i18n` key in `assets/js/i18n.js`.
3. To add new text, give the element a new `data-i18n` key and add that key to `i18n.js`.

Keep every path relative (no leading `/`), because the site lives under `/ezedu/`.

## Publish

Push to `main`. GitHub Pages (branch `main`, folder `/`) updates the site in a minute or two.
