# mariociampini.eu: personal academic website

A static website built with [Jekyll](https://jekyllrb.com/) and hosted for free on **GitHub Pages**.
Every time you save a change on GitHub, the site rebuilds itself in about a minute.

## How to edit (no software needed)

1. Open the repository on github.com.
2. Click the file you want to change, then the ✏️ pencil icon ("Edit this file").
3. Make the change and click **Commit changes**. The live site updates within 1–2 minutes.

| What you want to change | File |
|---|---|
| Bio on the home page | `index.md` |
| Hero sentence and buttons | `_layouts/home.html` |
| Research themes (long text) | `research.md` |
| Research cards on home page | `_data/research.yml` |
| **Publications** (add a paper) | `_data/publications.yml` |
| CV | `cv.md` |
| Teaching + teaching resources | `teaching.md` (upload files to `assets/teaching/`) |
| Code & projects | `_data/projects.yml` |
| Name, email, ORCID, GitHub, menu | `_config.yml` |
| Photo | replace `assets/img/profile.jpg` (square-ish, ≥ 600 px) |
| Colours & fonts | `assets/css/style.css` (top of file: `--laser` is the accent colour) |

### Add a publication
Open `_data/publications.yml`, copy an existing entry, paste it and edit the fields.
Set `topic:` to one of `levitated`, `thermo`, `photonic`, `metrology`.
Add `selected: true` to show it on the home page too.

### Add a teaching resource
Upload the PDF to `assets/teaching/` (**Add file → Upload files**), then link it in `teaching.md`:

```markdown
- [Lecture 1 slides (PDF)](/assets/teaching/lecture1.pdf)
```

### Add a downloadable CV
Upload your CV as `assets/cv.pdf`, then remove the `<!--` and `-->` around the download line at the top of `cv.md`.

## Preview locally (optional)

```bash
gem install jekyll -v '~> 3.10' kramdown-parser-gfm jekyll-seo-tag jekyll-sitemap webrick
jekyll serve
```
Then open http://localhost:4000.

## Custom domain
See [DOMAIN_SETUP.md](DOMAIN_SETUP.md).
