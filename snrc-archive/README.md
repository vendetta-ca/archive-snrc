# SNRC Archive

Sub Nautical Research Coalition — ARG website.

## File structure

```
snrc-archive/
├── index.html                  ← Homepage / portal
├── css/
│   └── snrc.css                ← Shared stylesheet (edit this to change site-wide look)
├── files/
│   ├── entities/
│   │   ├── index.html          ← Entity catalogue index
│   │   ├── snrc-0091.html      ← Example entity file
│   │   └── snrc-XXXX.html      ← Add new entities here
│   ├── journals/
│   │   ├── index.html          ← Journal index
│   │   ├── j-halvorsen-04.html ← Example journal entry
│   │   └── j-XXXX-XX.html      ← Add new journal entries here
│   └── divisions/
│       ├── index.html          ← Divisions index
│       └── [division].html     ← Add individual division pages here
```

## Adding a new entity file
1. Copy `files/entities/snrc-0091.html`
2. Rename it `snrc-XXXX.html` (use the next number)
3. Edit the content inside
4. Add a row for it in `files/entities/index.html`
5. Add a row for it in `index.html` (the homepage filing table)

## Adding a new journal entry
1. Copy `files/journals/j-halvorsen-04.html`
2. Rename it (e.g. `j-santos-01.html`)
3. Edit the content
4. Add a row in `files/journals/index.html`

## Publishing (GitHub Pages)
Push changes to the `main` branch. The site updates automatically within ~60 seconds at:
`https://[your-username].github.io/snrc-archive/`
