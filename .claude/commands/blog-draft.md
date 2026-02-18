---
name: blog-draft
description: Turn an outline into a full blog post draft with the right voice and tone
---

# /blog-draft - Write the Full Draft

Turn an outline into a complete first draft with the right voice.

## Usage

```
/blog-draft drafts/ideas/my-post.md  # From outline
/blog-draft                           # Ask which outline to use
```

## Process

### Step 1: Load the Outline

Read the outline file. Extract:
- Key insight
- Target audience
- Main sections
- Notes/research needs

### Step 2: Research Gaps (if any)

If outline has research notes:
- Search for current info
- Find specific examples
- Get accurate quotes/stats

### Step 3: Set the Voice

Before writing, recall the voice:

**This blog is:**
- Direct and conversational
- Opinionated but honest
- Personal - uses "I" freely
- Technical but accessible
- No corporate speak, no hedging

**Sentence rhythm:**
- Mix short and long
- Start some sentences with "And" or "But"
- Use em dashes—like this—for asides
- Rhetorical questions work

### Step 4: Write Section by Section

For each section:

1. **Write the hook** (first paragraph)
   - Lead with insight or tension
   - Make reader want to continue
   - NO "In this post, I will..."

2. **Write each main section**
   - Start with the point, then support it
   - Use concrete examples
   - Include code snippets where relevant
   - Link to sources

3. **Write transitions**
   - Keep them short
   - Can be just a sentence

4. **Write the conclusion**
   - Restate the key insight (differently)
   - What should reader do now?
   - Can end with a question or provocation

### Step 5: Add Supporting Elements

**Code blocks:**
```typescript
// Keep examples short and focused
const example = "like this";
```

**Images:** Note where screenshots/images would help:
```
[IMAGE: Screenshot of X showing Y]
```

**Links:** Add inline links to sources, tools, related posts.

**Callouts:** For important asides:
```
> **Note:** Important thing to remember.
```

### Step 6: Write the Meta

**Title:** 
- Clear > clever
- Should work without context
- 5-10 words ideal

**Description:**
- One compelling sentence
- The hook, condensed
- Shows up in social previews

### Step 7: Save Draft

Save to `drafts/posts/<slug>.md`:

```markdown
---
title: "<title>"
description: "<description>"
pubDate: "<today's date>"
tags: ["tag1", "tag2"]
draft: true
---

# <Title>

[Full post content]

---

## Draft Notes
- [ ] Review for voice consistency
- [ ] Add images
- [ ] Check all links work
- [ ] Final proofread
```

### Step 8: Report

```
## Draft Complete ✓

**File:** drafts/posts/<slug>.md
**Title:** <title>
**Word Count:** ~<count>
**Reading Time:** ~<X> min

**Missing:**
- [ ] <any missing elements>

**Next Step:** Run `/blog-edit drafts/posts/<slug>.md` to refine.
```

## Writing Tips

### Opening Lines That Work

✓ "I've been wrong about [X] for years."
✓ "Let's talk about what actually works."
✓ "Here's what nobody tells you about [X]."
✓ "I shipped [X] last week. Here's what I learned."
✓ "[Provocative statement]. Let me explain."

### Opening Lines to Avoid

✗ "In this blog post, I will discuss..."
✗ "Have you ever wondered about...?"
✗ "As we all know..."
✗ "Without further ado..."
✗ "[Dictionary definition of common word]"

### Paragraph Structure

- First sentence: The point
- Middle: Support/example
- Last sentence: Transition or emphasis

Keep paragraphs SHORT. 2-4 sentences max.

### When Stuck

- Write the section you're most excited about first
- Use placeholder [TODO: expand this] and move on
- Talk through it out loud (voice note → transcribe)
- Write "The point of this section is..." then delete that phrase
