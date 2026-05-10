# Jules + Worktree Workflow — Complete Setup Guide

## ✅ What's Been Set Up

Your repository now has everything needed for the Jules + Worktree workflow:

### Files Created
- ✅ `AGENTS.md` - Universal rules file (Jules reads this automatically)
- ✅ `docs/plans/` - Directory for Jules plan files
- ✅ `scripts/worktree-jules-setup.sh` - Creates worktree folders for PR review
- ✅ `scripts/worktree-jules-teardown.sh` - Cleans up worktrees after sprint
- ✅ `scripts/trigger-jules.sh` - Triggers Jules API with plan file

### Existing Files (Already Working)
- ✅ `.claude/commands/` - All skill files (prime, create-prd, plan, etc.)
- ✅ `.agents/PRDs/` and `.agents/stories/` - Directories ready
- ✅ `rules.md` - Your existing rules (kept for reference)

---

## 🚀 One-Time Setup (Do This Once)

### Step 1: Make Scripts Executable

```bash
chmod +x scripts/worktree-jules-setup.sh
chmod +x scripts/worktree-jules-teardown.sh
chmod +x scripts/trigger-jules.sh
```

### Step 2: Set Up Your First Sprint

```bash
# Create integration branch and worktree structure
bash scripts/worktree-jules-setup.sh integration-sprint-1
```

This creates:
- `integration-sprint-1` branch (where Jules PRs will merge)
- `../{repo-name}-wt/integration-sprint-1/` worktree folder

### Step 3: Verify Setup

```bash
# Check worktrees
git worktree list

# Should show:
# /path/to/your-repo              <branch>  [main]
# /path/to/your-repo-wt/integration-sprint-1  <branch>  [integration-sprint-1]
```

---

## 📅 Daily Workflow (Repeat Per Sprint)

### Morning: Planning Phase

#### 1. Prime Your Local IDE

Open your IDE (Cursor/Windsurf/etc.) and run:
```
.claude/commands/prime.md
```

This loads project context into your IDE's memory.

#### 2. Create PRD

Run in your IDE:
```
.claude/commands/create-prd.md
```

Describe your sprint goal. Output lands in `.agents/PRDs/sprint-N.md`

#### 3. Generate GitHub Issues

Run in your IDE:
```
.claude/commands/create-stories.md
```

This reads the PRD and outputs a shell script: `.agents/stories/create-sprint-N-issues.sh`

Execute it:
```bash
bash .agents/stories/create-sprint-N-issues.sh
```

Verify issues created:
```bash
gh issue list --label sprint-1
```

#### 4. Create Plans for Each Issue

For each issue, run in your IDE:
```
.claude/commands/plan.md
```

Provide the issue number. Output lands in `docs/plans/issue-N-plan.md`

**CRITICAL:** Review each plan carefully. If the plan is wrong, fix the plan file — not the code later.

#### 5. File Conflict Check

Before triggering Jules, verify no two plans modify the same file:

```bash
grep -h "Files to modify" -A 10 docs/plans/issue-*.md | sort | uniq -d
```

If duplicates appear, serialize those tasks (run one after the other, not in parallel).

---

### Midday: Trigger Jules Agents

#### 6. Trigger All Jules Tasks

For each issue with a plan:

```bash
bash scripts/trigger-jules.sh 7 integration-sprint-1
bash scripts/trigger-jules.sh 8 integration-sprint-1
bash scripts/trigger-jules.sh 9 integration-sprint-1
# ... up to 15 tasks
```

Each command:
- Reads `docs/plans/issue-N-plan.md`
- Sends to Jules API
- Jules creates branch `feat/issue-N` from `integration-sprint-1`
- Jules implements the plan
- Jules opens PR to `integration-sprint-1`

**Monitor progress:** https://jules.google.com/

---

### Afternoon: Review PRs

#### 7. Fetch Jules Branches

After Jules opens PRs:

```bash
git fetch --all
```

#### 8. Add Worktrees for Review

For each PR you want to review locally:

```bash
# Add worktree for issue #7
git worktree add ../$(basename $PWD)-wt/feat-issue-7 feat/issue-7

# Add worktree for issue #8
git worktree add ../$(basename $PWD)-wt/feat-issue-8 feat/issue-8
```

#### 9. Review in Worktree Folder

```bash
# Open issue #7 in your IDE
cd ../$(basename $PWD)-wt/feat-issue-7
code .  # or your IDE command

# Run the app
pnpm install
pnpm --filter web dev

# Check:
# ✓ Arabic text renders correctly (RTL)
# ✓ TypeScript has no errors
# ✓ Component matches mobile design
# ✓ No hardcoded strings (all via t())
```

#### 10. Check PR Status on GitHub

```bash
gh pr list --base integration-sprint-1
```

Look for:
- ✅ Green CI (passing)
- ❌ Red CI (failing) → Send Jules the error
- ⚠️ Conflicts → Send Jules conflict resolution message

---

### Evening: Merge PRs

#### 11. Merge Passing PRs (Gated)

**NEVER merge all at once.** Merge in batches of 5:

```bash
# Merge first 5 passing PRs
gh pr merge 123 --squash --delete-branch
gh pr merge 124 --squash --delete-branch
gh pr merge 125 --squash --delete-branch
gh pr merge 126 --squash --delete-branch
gh pr merge 127 --squash --delete-branch
```

#### 12. Smoke Test After Each Batch

```bash
cd ../$(basename $PWD)-wt/integration-sprint-1
git pull origin integration-sprint-1
pnpm install
pnpm --filter web run build  # Must succeed
pnpm run scripts/smoke.ts     # Your smoke test
```

If smoke test fails, STOP merging. Fix the issue before continuing.

#### 13. Handle Failing PRs

**CI Failing:**
Send Jules a message via Jules UI:
```
The CI failed on feat/issue-7. Error: [paste GitHub Actions output].
Fix the issue, re-run all validation commands, push the fix.
```

**Merge Conflict:**
Send Jules a message:
```
Pull latest integration-sprint-1, resolve all conflicts in [file],
re-run validation commands, push the update.
```

---

### End of Sprint: Cleanup

#### 14. Sprint Audit

Run in your IDE:
```
.claude/commands/validate.md
.claude/commands/review.md
```

Check:
- All features from PRD implemented?
- Any systemic Jules mistakes?
- Update `AGENTS.md` with new rules to prevent future mistakes

#### 15. Teardown Worktrees

```bash
bash scripts/worktree-jules-teardown.sh
```

This removes all worktree folders and frees disk space.

#### 16. Prep Next Sprint

```bash
# Create next sprint's integration branch
git checkout integration-sprint-1
git checkout -b integration-sprint-2
git push -u origin integration-sprint-2

# Set up worktrees for next sprint
bash scripts/worktree-jules-setup.sh integration-sprint-2
```

---

## 🔧 Troubleshooting

### Jules Task Failed to Create

**Symptom:** `trigger-jules.sh` returns error

**Fix:**
1. Check plan file exists: `ls docs/plans/issue-N-plan.md`
2. Check integration branch exists: `git branch -r | grep integration-sprint-1`
3. Verify Jules API key is correct (in `scripts/trigger-jules.sh`)

### Worktree Already Exists

**Symptom:** `fatal: 'path' already exists`

**Fix:**
```bash
# Remove existing worktree
git worktree remove ../repo-wt/feat-issue-7 --force

# Re-add
git worktree add ../repo-wt/feat-issue-7 feat/issue-7
```

### Can't Find Jules Branch

**Symptom:** `fatal: invalid reference: feat/issue-7`

**Fix:**
```bash
# Fetch all remote branches
git fetch --all

# Verify branch exists
git branch -r | grep feat/issue-7

# If it doesn't exist, Jules hasn't opened the PR yet
```

### TypeScript Errors in Jules PR

**Symptom:** PR has TypeScript errors

**Fix:**
1. Check if plan specified `npx tsc --noEmit` in validation commands
2. If not, add it to future plans
3. Send Jules message to fix and re-run validation

---

## 📊 Quick Reference

### File Locations

| File | Purpose |
|------|---------|
| `AGENTS.md` | Rules Jules follows |
| `docs/plans/issue-N-plan.md` | Implementation plans |
| `.agents/PRDs/` | Product requirements |
| `.agents/stories/` | GitHub issue scripts |
| `.claude/commands/` | IDE skill files |
| `scripts/trigger-jules.sh` | Jules API trigger |
| `scripts/worktree-jules-setup.sh` | Worktree setup |
| `scripts/worktree-jules-teardown.sh` | Worktree cleanup |

### Commands Cheat Sheet

```bash
# Setup (once per sprint)
bash scripts/worktree-jules-setup.sh integration-sprint-1

# Trigger Jules (per issue)
bash scripts/trigger-jules.sh 7 integration-sprint-1

# Review PR (per issue)
git fetch --all
git worktree add ../repo-wt/feat-issue-7 feat/issue-7
cd ../repo-wt/feat-issue-7

# Merge PR
gh pr merge 123 --squash --delete-branch

# Cleanup (end of sprint)
bash scripts/worktree-jules-teardown.sh
```

### Jules API Limits

- **100 tasks per day**
- Each task = 1 issue implementation
- Average execution time: 5-20 minutes per task
- You can run 15 tasks in parallel

---

## 🎯 Success Metrics

A successful sprint:
- ✅ 10-15 issues completed in 1 day
- ✅ All PRs pass CI before merge
- ✅ No merge conflicts (due to file partitioning)
- ✅ Smoke test passes after each merge batch
- ✅ Zero manual code writing (Jules does it all)
- ✅ AGENTS.md evolves with new rules

---

## 📚 Next Steps

1. **Read the guides** (if you haven't):
   - `playbook-v2.html` - Overall workflow philosophy
   - `implementation-guide.html` - Mobile → Web specific guide
   - `worktree-jules-guide.html` - Worktree deep dive

2. **Run your first sprint**:
   - Start small: 3-5 issues for first sprint
   - Verify workflow works end-to-end
   - Scale to 10-15 issues in sprint 2

3. **Evolve AGENTS.md**:
   - After each sprint, capture systemic mistakes
   - Add rules to prevent future errors
   - Jules gets smarter with each sprint

---

## 🆘 Need Help?

- **Jules API Issues**: Check https://jules.google.com/docs
- **Git Worktree Issues**: Run `git worktree list` to debug
- **Plan File Issues**: Review `.claude/commands/plan.md` template
- **TypeScript Errors**: Run `npx tsc --noEmit` to see all errors

---

**You're ready to go! Start with Step 1 of the Daily Workflow above.**
