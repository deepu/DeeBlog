# DeeBlog

My personal blog at [deepu.blog](https://deepu.blog).

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), deployed on [Vercel](https://vercel.com).

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Writing Posts

Posts live in `src/content/blog/<year>/<slug>.md`:

```markdown
---
title: "My Post Title"
description: "A compelling one-liner"
pubDate: 2025-01-09
tags: ["topic1", "topic2"]
---

# Content here

Write in markdown. Keep it direct.
```

## Blog Workflow Commands

This repo includes Claude Code commands for writing:

```bash
/blog-idea      # Capture idea → Create outline
/blog-draft     # Outline → Full draft  
/blog-edit      # Refine draft
/blog-publish   # Publish to site
```

## Structure

```
src/
├── content/blog/     # Blog posts (Markdown)
├── layouts/          # Page layouts
├── pages/            # Routes
└── styles/           # CSS

public/
└── assets/img/       # Post images

drafts/
├── ideas/            # Outlines
├── posts/            # Drafts
└── archive/          # Published
```

## Deployment

Push to `main` → Vercel auto-deploys.

## License

- **Content:** CC BY 4.0
- **Code:** MIT

---

Design inspired by [steipete.me](https://steipete.me).
