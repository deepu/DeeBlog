---
name: blog-publish
description: Final polish, create the blog file in the right location, prepare for deploy
---

# /blog-publish - Publish the Post

Final polish and move to the blog content directory.

## Usage

```
/blog-publish drafts/posts/my-post.md   # Publish specific draft
/blog-publish                            # Ask which draft to publish
```

## Process

### Step 1: Load and Final Review

Read the draft. Quick checks:
- [ ] Title is final
- [ ] Description is compelling
- [ ] Tags are appropriate
- [ ] Content is complete
- [ ] No TODOs or placeholders left

### Step 2: Final Polish

**Quick fixes:**
- Fix any typos
- Ensure consistent formatting
- Check first/last sentences one more time

**Frontmatter finalization:**

```yaml
---
title: "<Final Title>"
description: "<Compelling one-liner>"
pubDate: "<YYYY-MM-DD>"
updatedDate: # Only if updating existing post
heroImage: "/assets/img/<year>/<slug>/hero.jpg"  # If using hero image
tags: ["tag1", "tag2", "tag3"]
draft: false
---
```

### Step 3: Handle Images

If post references images:

1. Check if images exist in public folder:
   ```
   public/assets/img/<year>/<slug>/
   ```

2. If not, create the directory:
   ```bash
   mkdir -p public/assets/img/<year>/<slug>
   ```

3. Note which images still need to be added:
   ```
   ask_followup_question: "These images are referenced but missing:
   - /assets/img/2025/my-post/screenshot1.png
   - /assets/img/2025/my-post/diagram.jpg
   
   Add them later, or should I remove the references?"
   ```

### Step 4: Determine File Location

**For Astro blogs (steipete style):**
```
src/content/blog/<year>/<slug>.md
```

Example:
```
src/content/blog/2025/shipping-at-inference-speed.md
```

### Step 5: Create the Post File

```bash
# Create year directory if needed
mkdir -p src/content/blog/<year>

# Write the file
# (Use proper file creation)
```

The final file should be clean - no draft notes, no TODOs:

```markdown
---
title: "<title>"
description: "<description>"
pubDate: "<date>"
tags: ["tag1", "tag2"]
---

[Clean post content]
```

### Step 6: Remove Draft Flag

Change `draft: true` to `draft: false` (or remove it).

### Step 7: Git Operations

```bash
# Stage the new post
git add src/content/blog/<year>/<slug>.md

# Stage any images
git add public/assets/img/<year>/<slug>/ 2>/dev/null || true

# Commit
git commit -m "post: <title>"
```

### Step 8: Optional - Preview Locally

```bash
npm run dev
# or
pnpm dev
```

Provide the local URL:
```
Preview at: http://localhost:4321/posts/<year>/<slug>
```

### Step 9: Push to Deploy

If user confirms:
```bash
git push origin main
```

For Vercel: Deployment happens automatically on push.

### Step 10: Report

```markdown
## Published ✓

**Post:** <title>
**File:** src/content/blog/<year>/<slug>.md
**URL:** https://<domain>/posts/<year>/<slug>

**Git:**
- Committed: `post: <title>`
- Pushed: Yes/No

**Next Steps:**
- [ ] Verify deployment at <url>
- [ ] Share on social
- [ ] Add any missing images

**Share Links:**
- Twitter: [Share](https://x.com/intent/post?url=<encoded-url>)
- LinkedIn: [Share](https://linkedin.com/sharing/share-offsite/?url=<encoded-url>)
```

### Step 11: Clean Up

Move the draft to archive:
```bash
mkdir -p drafts/archive
mv drafts/posts/<slug>.md drafts/archive/
mv drafts/ideas/<slug>.md drafts/archive/ 2>/dev/null || true
```

## Post-Publish Checklist

```markdown
### Before Pushing
- [ ] `draft: false` in frontmatter
- [ ] Date is correct
- [ ] No placeholder content
- [ ] All images present
- [ ] Links work

### After Pushing
- [ ] Site builds successfully
- [ ] Post appears on blog index
- [ ] Images load correctly
- [ ] Social preview looks good (check with card validator)
- [ ] Share on social

### Later
- [ ] Monitor for feedback
- [ ] Fix any issues readers find
- [ ] Add `updatedDate` if making changes
```

## Social Preview Check

Test how the post will look when shared:

- **Twitter:** https://cards-dev.twitter.com/validator
- **LinkedIn:** https://www.linkedin.com/post-inspector/
- **Facebook:** https://developers.facebook.com/tools/debug/

Make sure:
- Title shows correctly
- Description is compelling
- Image looks good (if using)
