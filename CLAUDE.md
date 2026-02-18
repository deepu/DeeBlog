# DeeBlog - CLAUDE.md

This is the instruction file for AI agents working on this blog.

## Project Overview

- **Site:** https://deepu.blog
- **Framework:** Astro 5.x
- **Styling:** Tailwind CSS 4.x
- **Deployment:** Vercel (auto-deploy on push to main)

## Directory Structure

```
src/
├── content/blog/      # Blog posts (Markdown/MDX)
│   └── 2025/          # Organized by year
├── layouts/           # Page layouts
├── pages/             # Routes
├── styles/            # Global CSS
└── utils/             # Helper functions

public/
├── assets/img/        # Blog post images
└── fonts/             # Web fonts

drafts/
├── ideas/             # Post outlines
├── posts/             # Full drafts
└── archive/           # Published drafts
```

## Blog Post Format

Posts go in `src/content/blog/<year>/<slug>.md`:

```yaml
---
title: "Post Title"
description: "One-line description for SEO and previews"
pubDate: 2025-01-09
tags: ["tag1", "tag2"]
heroImage: "/assets/img/2025/slug/hero.jpg"  # Optional
draft: false  # Set true to hide from production
---

# Content here
```

## Writing Style

- **Direct and conversational** - Write like talking to a smart friend
- **Personal** - Use "I", share experiences
- **Opinionated** - Take stances, don't hedge everything
- **Concrete** - Real examples, actual tools, specific numbers

**Avoid:**
- Corporate speak ("leverage", "synergize")
- Throat-clearing ("In this post, I will discuss...")
- Fake enthusiasm ("AMAZING!!!")
- Over-hedging ("might perhaps possibly")

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production
npm run preview  # Preview production build
```

## Workflows

Use the blog workflow commands:
- `/blog-idea` - Capture idea → Create outline
- `/blog-draft` - Outline → Full draft
- `/blog-edit` - Refine draft
- `/blog-publish` - Publish to site

## Images

Store post images in:
```
public/assets/img/<year>/<post-slug>/
```

Reference in posts as:
```markdown
![Alt text](/assets/img/2025/my-post/image.png)
```

## Deployment

Push to `main` branch → Vercel auto-deploys.

Preview deployments: Push to any other branch.
