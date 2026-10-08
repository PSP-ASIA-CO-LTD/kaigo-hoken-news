# Kaigo Hoken News

A research publication about Japan's long-term care insurance system (介護保険 / kaigo hoken) for [PSP Asia Co., Ltd.](https://pspasia.com), a Thai company that builds caregiving management software and is studying the Japanese market.

**Live site:** https://psp-asia-co-ltd.github.io/kaigo-hoken-news/

## Design

The site uses a **newspaper/editorial style** with:
- Masthead with serif typography (Playfair Display for headlines, Noto Sans/Serif JP for body)
- Lead story featured prominently, secondary stories in columns on desktop
- Clean date lines and topic navigation
- Responsive: single-column on mobile, multi-column grid on larger screens
- Dark/light mode with warm, newsprint-inspired colors
- Optimized for Japanese text (Noto fonts, proper line height)

## Adding a New Post

1. Create a new Markdown file in `content/posts/` with the filename pattern `your-post-slug.md`
2. Add front matter at the top of the file:

```yaml
---
title: "Your Post Title"
date: 2026-10-15
tags: ["japan", "long-term-care", "your-topic"]
summary: "A short description that appears in post listings and RSS."
---
```

3. Write your content in Markdown below the front matter
4. Commit and push to `main` — the site rebuilds automatically via GitHub Actions

### Example Post

```markdown
---
title: "New LIFE data requirements for fiscal 2027"
date: 2026-10-15
tags: ["japan", "long-term-care", "LIFE", "policy"]
summary: "MHLW announces simplified LIFE submission requirements ahead of the fiscal 2027 fee revision."
---

Your post content goes here. Markdown formatting, tables, and links all work as expected.

Japanese text (日本語) renders correctly.
```

### Front Matter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title (shows in listings and as page heading) |
| `date` | Yes | Publication date in `YYYY-MM-DD` format |
| `tags` | No | List of tags for categorization |
| `summary` | No | Short description for listings and RSS |
| `draft` | No | Set to `true` to hide from production builds |
| `weight` | No | Lower numbers sort first (used to pin the executive summary) |
| `series` | No | Name of the series this post belongs to (e.g. `"Japan LTC Basics"`) |
| `series_order` | No | Position in the series (1, 2, 3, …). Posts display "Part N of M" and prev/next links |
| `categories` | No | List of categories (shown in main menu: Basics, Providers, Technology, Budget & Policy, News) |

### Analysis / Opinion Callout

Use the `analysis` shortcode to insert a clearly-labeled opinion or analysis section, distinct from cited facts:

```markdown
{{< analysis >}}
Your analysis in **Markdown**. Footnotes[^1] work inside.

[^1]: So do inline references.
{{< /analysis >}}
```

Override the default title:

```markdown
{{< analysis title="My custom title" >}}
Content here...
{{< /analysis >}}
```

Default title: *Tako-San's take: what this means for PSP Asia*

The callout displays a monochrome Tako-San avatar, a small-caps "ANALYSIS / OPINION" label, and renders the inner content as Markdown.

## Japanese Terms Shortcode

This site uses a custom shortcode `{{< ja >}}` to render Japanese terms with romaji pronunciation, a read-aloud button, and tooltips. Terms link to the glossary.

### Usage by Glossary Key (Preferred)

```hugo
{{< ja key="kaigo-hoken" >}}
```

**Output:** 介護保険 (kaigo hoken, long-term care insurance) 🔊 — with tooltip and link to `/glossary/#kaigo-hoken`

The key looks up the term in `data/glossary.yaml` and auto-fills:
- Japanese text (`ja`)
- Romaji pronunciation (`romaji`)
- English meaning (`en`)
- Definition (`def`) — shown in tooltip on hover/focus

### Override Parameters

```hugo
{{< ja key="kaigo-hoken" en="LTC insurance" >}}
```

The `en` parameter overrides the glossary's English meaning.

### Explicit Values (Backwards Compatible)

```hugo
{{< ja "介護保険" "kaigo hoken" >}}
{{< ja "介護保険" "kaigo hoken" "long-term care insurance" >}}
{{< ja term="介護保険" romaji="kaigo hoken" en="long-term care insurance" >}}
```

### Features

- **Glossary lookup** — `key="..."` pulls data from `data/glossary.yaml`
- **Kanji display** with serif Japanese font (Noto Serif JP)
- **Romaji pronunciation** in italics for non-Japanese readers
- **Tooltip** on hover/focus/tap with English meaning and definition (WCAG 1.4.13 compliant — Escape to dismiss, hover-persistent)
- **Speaker button (🔊)** reads term aloud via Web Speech API (`ja-JP`, rate 0.85)
- **Glossary link** — terms link to their entry on `/glossary/`
- **Dotted underline** indicates interactive tooltip
- **Accessible** — keyboard navigation, screen reader support

### Romanization

Use Hepburn romanization with macrons for long vowels:
- ō (long o) — e.g., 厚生労働省 → kōsei rōdō shō
- ū (long u) — e.g., 要支援 → yō-shien

For consistency, use lowercase romaji except for proper nouns.

## Glossary

The glossary (`/glossary/`) lists all Japanese terms alphabetically by romaji. Each entry shows:
- Japanese text with read-aloud button
- Romaji pronunciation
- English meaning
- Short definition
- Link to search posts for that term

### Adding a Glossary Entry

Edit `data/glossary.yaml`:

```yaml
kaigo-hoken:
  ja: 介護保険
  romaji: kaigo hoken
  en: long-term care insurance
  def: "Japan's social insurance system for elderly care, started April 2000."
```

**Key format:** lowercase, hyphens for spaces, no special characters (e.g., `kaigo-hoken`, `yō-shien`).

**Fields:**
| Field | Required | Description |
|-------|----------|-------------|
| `ja` | Yes | Japanese text (kanji/kana) |
| `romaji` | Yes | Hepburn romanization with macrons |
| `en` | Yes | Short English translation |
| `def` | Yes | One-line definition (quote if it contains colons) |

## Local Development

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (v0.140.0 or later)

### Running Locally

```bash
# Clone with submodules (for the theme)
git clone --recurse-submodules https://github.com/psp-asia-co-ltd/kaigo-hoken-news.git
cd kaigo-hoken-news

# Start the development server
hugo server -D

# Build the site (output in ./public)
hugo --minify
```

The development server runs at http://localhost:1313/kaigo-hoken-news/ by default.

## Project Structure

```
.
├── .github/workflows/      # GitHub Actions deployment workflow
├── assets/css/extended/    # Custom newspaper-style CSS
├── content/
│   ├── about.md            # About page
│   ├── archive.md          # Archive page
│   └── posts/              # Blog posts (add new posts here)
├── themes/PaperMod/        # Hugo theme (git submodule)
├── hugo.toml               # Site configuration
└── README.md
```

## Deployment

The site is automatically built and deployed to GitHub Pages when changes are pushed to `main`.

**Initial setup required:** Go to repository Settings → Pages → Source and select "GitHub Actions".

## License

Content © PSP Asia Co., Ltd. Theme: [PaperMod](https://github.com/adityatelange/hugo-PaperMod) (MIT).
