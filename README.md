# SNRC Archive

**Sub Nautical Research Coalition** — ARG website.

## File structure

```
snrc-archive/
├── index.html                        ← Homepage / portal
├── css/
│   └── snrc.css                      ← Shared stylesheet
├── js/
│   └── snrc-nav.js                   ← Shared nav (auto-injects header + footer)
├── files/
│   ├── framework/
│   │   └── index.html                ← Classification framework lore document
│   ├── entities/
│   │   ├── index.html                ← Entity catalogue index
│   │   ├── snrc-v-0091.html          ← Stratum V acoustic phenomenon (example)
│   │   ├── snrc-iv-0074.html         ← Stratum IV structural/wreck (example)
│   │   └── snrc-[stratum]-XXXX.html  ← Add new entities here
│   ├── journals/
│   │   ├── index.html                ← Journal index
│   │   ├── j-halvorsen-04.html       ← Dr. Halvorsen entry 4 (example)
│   │   └── j-[surname]-[##].html     ← Add new journals here
│   └── divisions/
│       ├── index.html                ← Divisions index
│       └── [division].html           ← Add division pages here
```

## Naming conventions

### Phenomenon IDs: `SNRC-[stratum]-[four digit number]`
| Stratum | Name | Depth |
|---------|------|-------|
| I | The Littoral | ~0–200m |
| II | The Mesopelagic | ~200–1,000m |
| III | The Bathypelagic | ~1,000–4,000m |
| IV | The Abyssopelagic | ~4,000–6,000m |
| V | The Hadal | ~6,000–11,000m |
| VI | The Uncharted | Unknown/impossible depth |

### Journal IDs: `j-[surname]-[two digit number]`
Examples: `j-halvorsen-04`, `j-santos-01`

### Grades
1 Documented · 2 Modelled · 3 Contested · 4 Resistant · 5 Incoherent · 6 Unresolvable

### Types
Biological · Structural · Acoustic · Spatial · Untyped

## Adding a new entity file
1. Copy `files/entities/snrc-v-0091.html` as template
2. Rename with correct ID
3. Edit ID, stratum, grade, type, and body content
4. Add a row in `files/entities/index.html`
5. Add a row in the homepage `index.html` recent filings table

## Adding a new journal entry
1. Copy `files/journals/j-halvorsen-04.html`
2. Rename with correct ID
3. Edit author, date, related phenomenon, and journal body
4. Add a row in `files/journals/index.html`

## Nav script
Each page sets before loading `snrc-nav.js`:
- `window.SNRC_ROOT` — path to root (`''` at root, `'../../'` for files/ subdirectories)
- `window.SNRC_ACTIVE` — active nav key: `portal` · `entities` · `journals` · `divisions` · `framework`

## Publishing
Push to `main` branch → live at `https://[username].github.io/snrc-archive/` within ~60s.
