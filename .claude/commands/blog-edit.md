---
name: blog-edit
description: Edit and refine a blog draft for voice, clarity, and impact
---

# /blog-edit - Refine the Draft

Edit a draft for voice consistency, clarity, and punch.

## Usage

```
/blog-edit drafts/posts/my-post.md   # Edit specific draft
/blog-edit                            # Ask which draft to edit
```

## Process

### Step 1: Load and Read

Read the entire draft. Note:
- Overall flow
- Voice consistency
- Sections that feel weak
- Sections that shine

### Step 2: Voice Check

Scan for voice violations:

**Remove/rewrite:**
- "In this post, I will..." → Just say the thing
- "As we all know..." → Delete or be specific
- "It's worth noting that..." → Just note it
- "Basically" / "Actually" / "Really" (overused) → Delete most
- Passive voice where active is clearer
- Hedging: "might", "perhaps", "sort of", "kind of" → Take a stance or delete

**Strengthen:**
- Weak: "This is a good approach" → Strong: "This works"
- Weak: "I think this might help" → Strong: "This helps"
- Weak: "It seems like..." → Strong: "It's..."

### Step 3: Clarity Pass

For each paragraph:
1. What's the ONE point?
2. Is it clear in the first sentence?
3. Does the rest support it?
4. Can anything be cut?

**Cut ruthlessly:**
- Redundant sentences
- Throat-clearing ("Let me explain why...")
- Obvious statements
- Unnecessary qualifiers

### Step 4: Flow Check

Read transitions between sections:
- Does each section end leading to the next?
- Are there jarring jumps?
- Is there a rhythm (vary section lengths)?

### Step 5: Opening Polish

The first 2-3 sentences are crucial. Check:
- Does it hook immediately?
- Is the insight clear?
- Would YOU keep reading?

Rewrite if needed. This is worth 5 rewrites.

### Step 6: Closing Polish

The ending should:
- Reinforce the main point (without repeating it)
- Give reader something to do/think about
- Feel complete (not abrupt)

### Step 7: Technical Check

**Code blocks:**
- Are they syntax-highlighted correctly?
- Are they short enough?
- Do they actually work?

**Links:**
- Do they resolve?
- Are anchor texts descriptive?

**Formatting:**
- Headers hierarchy correct?
- Lists consistent?
- Emphasis used sparingly?

### Step 8: Read Aloud Test

Read the entire post out loud (or have it read to you). Note:
- Sentences that make you stumble
- Sections that feel too long
- Places where you'd naturally pause

Fix what doesn't flow.

### Step 9: The Kill Your Darlings Pass

Find your favorite sentence. Ask:
- Does it serve the reader or my ego?
- Would the post be worse without it?

If it's just showing off, cut it.

### Step 10: Save Edited Version

Update the draft file. Add edit notes:

```markdown
---
title: "<title>"
description: "<description>"
pubDate: "<date>"
tags: ["tag1", "tag2"]
draft: true
edited: <today's date>
---

[Edited content]

---

## Edit Notes
- Tightened opening
- Cut section X (redundant)
- Rewrote conclusion
- Ready for final review
```

### Step 11: Report

```
## Edit Complete ✓

**Changes Made:**
- <change 1>
- <change 2>
- <change 3>

**Word Count:** <before> → <after>
**Improvement:** <brief note on what's better>

**Next Step:** Run `/blog-publish drafts/posts/<slug>.md` when ready.
```

## Editing Checklist

```markdown
### Voice
- [ ] No corporate speak
- [ ] Active voice (mostly)
- [ ] Takes clear stances
- [ ] Sounds like a person

### Clarity  
- [ ] Every paragraph has one point
- [ ] No unnecessary jargon
- [ ] Examples are concrete
- [ ] Nothing redundant

### Structure
- [ ] Hook is strong
- [ ] Sections flow logically
- [ ] Transitions are smooth
- [ ] Ending is satisfying

### Technical
- [ ] Code examples work
- [ ] Links resolve
- [ ] Images have alt text
- [ ] Formatting is consistent

### Polish
- [ ] Read aloud test passed
- [ ] Killed the darlings
- [ ] Title works standalone
- [ ] Description is compelling
```
