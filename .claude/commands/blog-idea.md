---
name: blog-idea
description: Capture a rough blog idea and expand it into a structured outline
---

# /blog-idea - From Rough Idea to Outline

Turn a vague idea into a structured blog post outline.

## Usage

```
/blog-idea                           # Start fresh, ask what's on your mind
/blog-idea "AI coding agents are..."  # Start with a seed
/blog-idea notes/rough-thoughts.md   # Start from existing notes
```

## Process

### Step 1: Capture the Idea

If no argument provided:
```
ask_followup_question: "What's on your mind? Give me the rough idea - doesn't have to be polished."
```

If argument is a file, read it first.

### Step 2: Interview for Depth

Ask ONE question at a time using `ask_followup_question`:

```
ask_followup_question: "What's the ONE thing you want readers to walk away with?"
[wait]

ask_followup_question: "Who's this for? (developers, founders, general tech audience, etc.)"
[wait]

ask_followup_question: "Do you have a personal angle? Something you experienced, built, or got wrong?"
[wait]

ask_followup_question: "Any specific examples, tools, or data points you want to include?"
[wait]

ask_followup_question: "What's the contrarian or surprising take here? (If any)"
[wait]
```

### Step 3: Research (if needed)

If the topic needs current info:
- Search for recent articles, discussions
- Find supporting data/examples
- Identify what others have said (to build on or counter)

### Step 4: Generate Outline

Create a structured outline:

```markdown
# [Working Title]

## Hook
[One paragraph - why should anyone care? What's the insight?]

## The Setup
- Context: [what's the situation]
- Problem: [what's broken/missing/misunderstood]
- My angle: [why I'm qualified to talk about this]

## Main Sections

### Section 1: [Title]
- Key point
- Supporting example/evidence
- Transition to next

### Section 2: [Title]
- Key point
- Supporting example/evidence
- Transition to next

### Section 3: [Title]
- Key point
- Supporting example/evidence

## The Payoff
- Main takeaway
- What to do with this info
- Optional: call to action or question

## Notes
- Potential images/screenshots needed
- Links to include
- Things to research more
```

### Step 5: Save and Confirm

Save to `drafts/ideas/<slug>.md`:

```markdown
---
idea: true
created: <date>
target_audience: <audience>
key_insight: <one line>
---

# [Title]

[Outline content]
```

Report:
```
## Outline Created ✓

**File:** drafts/ideas/<slug>.md
**Working Title:** <title>
**Target Audience:** <audience>
**Key Insight:** <one line>

**Next Step:** Run `/blog-draft drafts/ideas/<slug>.md` to write the full post.
```

## Key Principles

1. **Capture the core insight first** - everything else supports this
2. **Personal angle matters** - what makes YOU the one to write this?
3. **Don't overthink structure** - outline is just scaffolding
4. **Note what's missing** - research gaps, examples needed
