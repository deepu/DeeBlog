---
name: blog-workflow
description: Blogging workflow from ideas to published posts. Captures a direct, no-bs, conversational tone with technical depth. For Astro/Tailwind blogs.
---

# Blog Workflow

A workflow for turning ideas into published blog posts with a consistent voice and style.

## Writing Style Guide

This captures the tone and ethos of a technical blog that's **personal, direct, and no-bullshit**.

### Voice & Tone

**BE:**
- Direct and conversational - write like you're talking to a smart friend
- Opinionated - take a stance, don't hedge everything
- Self-deprecating when appropriate - "I got this wrong", "I was ridiculed"
- Honest about limitations - "this isn't perfect", "I'm still figuring this out"
- Enthusiastic without being salesy - genuine excitement, not hype

**AVOID:**
- Corporate speak - no "leverage", "synergize", "unlock potential"
- Hedging everything - "it might be possible that perhaps..."
- Clickbait - let the content speak for itself
- Over-explaining - trust the reader's intelligence
- Fake enthusiasm - "AMAZING!!! INCREDIBLE!!!"

### Formatting Principles

**Structure:**
- Lead with the hook - what's the insight? Why should I care?
- Use headers liberally - people scan
- Short paragraphs - 2-4 sentences max
- Code examples when relevant - show, don't just tell
- Links to sources - give credit, let readers go deeper

**Markdown style:**
- Use `backticks` for code, commands, file names
- Bold for **emphasis** on key points
- Italics for *nuance* or slight emphasis
- Em dashes for asides—like this one
- Keep bullet lists short (3-7 items)

### Content Principles

1. **Personal experience first** - "I tried X", "Here's what I learned"
2. **Concrete over abstract** - specific tools, real numbers, actual examples
3. **Acknowledge trade-offs** - nothing is perfect
4. **Update when wrong** - add corrections, don't delete mistakes
5. **Credit others** - link to inspirations, give shoutouts

### Example Phrases

**Good:**
- "I've been using X for three months. Here's the verdict."
- "This is probably controversial, but..."
- "Let's talk about what actually works."
- "I was wrong about this."
- "The boring truth is..."

**Bad:**
- "In this blog post, I will discuss..."
- "As we all know..."
- "The revolutionary new paradigm..."
- "Experts agree that..."
- "Without further ado..."

### Post Frontmatter Template

```yaml
---
title: "<title>"
description: "<one-line hook - make it compelling>"
pubDate: "<YYYY-MM-DD>"
tags: ["tag1", "tag2"]
draft: false
---
```

### Directory Structure (Astro)

```
src/content/blog/
├── 2025/
│   ├── my-post-slug.md
│   └── another-post.md
└── 2024/
    └── older-post.md

public/assets/img/
└── 2025/
    └── my-post-slug/
        └── header.jpg
```

---

## Commands Overview

| Command | Purpose |
|---------|---------|
| `/blog-idea` | Capture a rough idea, expand it into an outline |
| `/blog-draft` | Turn an outline into a full draft |
| `/blog-edit` | Edit and refine a draft |
| `/blog-publish` | Final polish, create file, prepare for deploy |

---

## Workflow

```
Idea → /blog-idea → Outline
                      ↓
              /blog-draft → Draft
                              ↓
                      /blog-edit → Refined Draft
                                      ↓
                              /blog-publish → Published Post
```

Each step builds on the previous. You can skip steps if you already have content at that stage.
