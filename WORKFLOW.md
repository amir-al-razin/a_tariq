# Complete Workflow — Idea to Production

**One file. Complete workflow. Any task. Any sprint.**

---

## 🎯 Overview

**You** → Idea → PRD → Plans → **Jules (parallel)** → PRs → **You (review)** → Integration → Tests → **Main**

**Key Principle**: Integration branch is testing ground. Main is sacred.

---

## 📋 Phase 1: Planning (You + Local IDE)

### Step 1: Discuss Your Idea

Talk with your AI assistant about what you want to build. Be specific about:
- What problem you're solving
- What features you need
- What already exists (mobile app, existing code)
- What's new

### Step 2: Create PRD

In your IDE, run:
```
.claude/commands/create-prd.md sprint-N-{name}.md
```

**Describe your sprint goal:**
- Sprint objective
- List of tasks (5-15 tasks)
- Reference implementations
- Tech stack
- Success criteria

**Output**: `.agents/PRDs/sprint-N-{name}.md`

### Step 3: Generate GitHub Issues

In your IDE, run:
```
.claude/commands/create-stories.md
```

Point to your PRD. This generates a shell script.

**Output**: `.agents/stories/create-sprint-N-issues.sh`

Execute it:
```bash
bash .agents/stories/create-sprint-N-issues.sh
```

**Verify**:
```bash
gh issue list --label sprint-N
```

### Step 4: Create Implementation Plans

For **each issue**, run in your IDE:
```
.claude/commands/plan.md
```

**Each plan must include:**
- Reference implementation (mobile app or existing code)
- Files to create
- Files to modify
- Files NOT to touch
- Validation commands (npx tsc --noEmit, pnpm run lint, etc.)
- Step-by-step implementation

**Output**: `docs/plans/issue-N-plan.md` (one per issue)

### Step 5: File Conflict Check

**CRITICAL**: Before triggering Jules, check for file conflicts:

```bash
grep -h "Files to modify" -A 10 docs/plans/issue-*.md | sort | uniq -d
```

**If duplicates found**: Serialize those tasks (run one after another, not parallel).

### Step 6: Set Up Sprint Infrastructure

```bash
# Create integration branch and worktree structure
bash scripts/worktree-jules-setup.sh integration-sprint-N
```

**Result**:
- `integration-sprint-N` branch created
- `../{repo-name}-wt/integration-sprint-N/` worktree created

---

## 🚀 Phase 2: Execution (Jules - Parallel VMs)

### Step 7: Trigger Jules Agents

For each issue with a plan:

```bash
bash scripts/trigger-jules.sh 1 integration-sprint-N
bash scripts/trigger-jules.sh 2 integration-sprint-N
bash scripts/trigger-jules.sh 3 integration-sprint-N
# ... up to 15 tasks
```

**What happens:**
1. Script reads `docs/plans/issue-N-plan.md`
2. Sends to Jules API
3. Jules creates branch `feat/issue-N` from `integration-sprint-N`
4. Jules implements the plan in isolated VM
5. Jules opens PR to `integration-sprint-N`

**Monitor**: https://jules.google.com/

**Time**: 5-20 minutes per task (parallel execution)

---

## 🔍 Phase 3: Review (You + Local IDE + Worktrees)

### Step 8: Fetch Jules Branches

After Jules opens PRs:

```bash
git fetch --all
```

### Step 9: Add Worktrees for Review

For each PR you want to review:

```bash
# Add worktree for issue #1
git worktree add ../$(basename $PWD)-wt/feat-issue-1 feat/issue-1

# Add worktree for issue #2
git worktree add ../$(basename $PWD)-wt/feat-issue-2 feat/issue-2

# ... for each PR
```

### Step 10: Review Each PR

```bash
# Open in your IDE
cd ../$(basename $PWD)-wt/feat-issue-1
code .  # or your IDE command

# Install and test
pnpm install
pnpm --filter web dev  # or mobile, or whatever app
```

**Review checklist:**
- ✅ Follows the plan exactly
- ✅ No TypeScript errors (`npx tsc --noEmit`)
- ✅ Arabic text renders correctly (RTL)
- ✅ Matches mobile design patterns
- ✅ No hardcoded strings (uses i18n)
- ✅ Imports from `@arabic-app/shared` correctly
- ✅ All validation commands pass

**In your IDE**, optionally run:
```
.claude/commands/review.md
```

Point to the worktree folder for automated review.

### Step 11: Check PR Status

```bash
gh pr list --base integration-sprint-N
```

**Look for:**
- ✅ Green CI (passing)
- ❌ Red CI (failing) → Send Jules the error
- ⚠️ Conflicts → Send Jules conflict resolution message

---

## 🔀 Phase 4: Integration (Merge to Integration Branch)

### Step 12: Merge PRs in Batches

**CRITICAL**: Merge in batches of 5, not all at once.

```bash
# Merge first 5 passing PRs
gh pr merge <PR-1> --squash --delete-branch
gh pr merge <PR-2> --squash --delete-branch
gh pr merge <PR-3> --squash --delete-branch
gh pr merge <PR-4> --squash --delete-branch
gh pr merge <PR-5> --squash --delete-branch
```

### Step 13: Smoke Test After Each Batch

```bash
cd ../$(basename $PWD)-wt/integration-sprint-N
git pull origin integration-sprint-N
pnpm install
pnpm --filter web run build  # MUST succeed
```

**If build fails**: STOP. Fix before continuing.

### Step 14: Handle Failing PRs

**If CI fails:**
Send Jules a message via Jules UI:
```
The CI failed on feat/issue-7. 

Error: [paste GitHub Actions output]

Fix the issue, re-run all validation commands, push the fix.
```

**If merge conflict:**
Send Jules a message:
```
Pull latest integration-sprint-N, resolve conflicts in [file], 
re-run validation commands, push the update.
```

**Alternative**: Resolve locally in worktree and push.

---

## ✅ Phase 5: Validation (Dynamic Testing)

### Step 15: Run All Tests

After all PRs merged to integration branch:

```bash
cd ../$(basename $PWD)-wt/integration-sprint-N
pnpm install
pnpm --filter web run build
pnpm --filter web dev  # Start dev server
```

**Run validation:**
```bash
# Type check
npx tsc --noEmit

# Lint
pnpm run lint

# Tests
pnpm test
```

### Step 16: Dynamic Testing with Agent Browser

In your IDE:
```
Use Agent Browser to test the app at http://localhost:5173

Test scenarios:
1. Navigate to all new pages
2. Verify Arabic text displays RTL
3. Switch languages (AR → EN → BN)
4. Test all new features
5. Check console for errors
6. Take screenshots of any issues

Compare with mobile app behavior.

Report:
- ✅ What works correctly
- ❌ What's broken
- 📸 Screenshots of visual issues
- 🐛 Console errors
```

### Step 17: Validate Against PRD

In your IDE, run:
```
.claude/commands/validate.md
```

Point to:
- Integration branch worktree
- Original PRD file

**Checks:**
- ✅ All PRD requirements implemented
- ✅ All acceptance criteria met
- ✅ No regressions
- ✅ Performance acceptable

### Step 18: Manual User Testing

**You test it yourself** (Alhamdulillah!)
- Use the app as a real user
- Test all new features
- Verify everything works
- Check edge cases

---

## 🎓 Phase 6: System Evolution (Learn & Improve)

### Step 19: Capture Systemic Mistakes

**Question**: What did Jules do wrong repeatedly?

Examples:
- Used wrong import paths
- Forgot RTL utilities
- Hardcoded strings instead of i18n
- Wrong component patterns
- Skipped validation commands

### Step 20: Update AGENTS.md

```bash
nano AGENTS.md
```

Add new rules based on mistakes:

```markdown
### 11. [New Rule Based on Mistakes]
- ALWAYS [correct behavior]
- NEVER [wrong behavior]
- Example: [code example]
```

### Step 21: Commit System Improvements

```bash
git add AGENTS.md
git commit -m "chore: update rules based on sprint N learnings"
git push
```

---

## 🎉 Phase 7: Production (Merge to Main)

### Step 22: Final Validation

```bash
cd ../$(basename $PWD)-wt/integration-sprint-N
pnpm install
pnpm run build  # All apps
pnpm test       # All tests
```

**Everything must pass.**

### Step 23: Merge to Main

```bash
# Create PR from integration to main
gh pr create \
  --base main \
  --head integration-sprint-N \
  --title "feat: [sprint description]" \
  --body "$(cat .agents/PRDs/sprint-N-*.md)"

# Review and merge
gh pr merge <PR-NUMBER> --squash
```

### Step 24: Tag Release (Optional)

```bash
git tag -a v1.0.0 -m "Sprint N: [description]"
git push origin v1.0.0
```

### Step 25: Cleanup

```bash
# Remove all worktrees
bash scripts/worktree-jules-teardown.sh

# Archive sprint branch (optional)
git branch -d integration-sprint-N
```

---

## 🔄 Next Sprint

Start over at Phase 1 with a new sprint goal.

**System is now smarter** → Fewer mistakes in next sprint.

---

## 📊 Quick Reference

### Commands Cheat Sheet

```bash
# Setup (once per sprint)
bash scripts/worktree-jules-setup.sh integration-sprint-N

# Trigger Jules (per issue)
bash scripts/trigger-jules.sh N integration-sprint-N

# Review PR (per issue)
git fetch --all
git worktree add ../repo-wt/feat-issue-N feat/issue-N
cd ../repo-wt/feat-issue-N

# Merge PR
gh pr merge <PR-NUMBER> --squash --delete-branch

# Cleanup (end of sprint)
bash scripts/worktree-jules-teardown.sh
```

### File Locations

| File | Purpose |
|------|---------|
| `AGENTS.md` | Rules Jules follows |
| `docs/plans/issue-N-plan.md` | Implementation plans |
| `.agents/PRDs/` | Product requirements |
| `.agents/stories/` | GitHub issue scripts |
| `.claude/commands/` | IDE workflow commands |
| `scripts/trigger-jules.sh` | Jules API trigger |
| `scripts/worktree-jules-setup.sh` | Worktree setup |
| `scripts/worktree-jules-teardown.sh` | Worktree cleanup |

### IDE Commands

**For Kiro users**: See `.kiro/COMMANDS.md` for natural language equivalents.

**For Claude-based IDEs** (Cursor, Windsurf, Cline):

| Command | Purpose |
|---------|---------|
| `.claude/commands/prime.md` | Load project context |
| `.claude/commands/create-prd.md` | Generate PRD |
| `.claude/commands/create-stories.md` | Generate issues |
| `.claude/commands/plan.md` | Create implementation plan |
| `.claude/commands/review.md` | Review PR |
| `.claude/commands/validate.md` | Validate against PRD |

**Kiro Equivalent**: Just talk naturally (e.g., "Create plan for issue #1")

---

## 🆘 Troubleshooting

### Jules Task Failed
- Check plan file exists: `ls docs/plans/issue-N-plan.md`
- Verify integration branch exists: `git branch -r | grep integration-sprint-N`
- Check Jules API key in `scripts/trigger-jules.sh`

### Worktree Already Exists
```bash
git worktree remove ../repo-wt/feat-issue-N --force
git worktree add ../repo-wt/feat-issue-N feat/issue-N
```

### Can't Find Jules Branch
```bash
git fetch --all
git branch -r | grep feat/issue-N
```

### TypeScript Errors in PR
- Check plan specified `npx tsc --noEmit` in validation
- Send Jules message to fix and re-run validation

### Build Fails After Merge
- Revert last merge: `git revert HEAD`
- Fix issue locally or send to Jules
- Re-merge when fixed

---

## 🎯 Success Metrics

A successful sprint:
- ✅ 5-15 issues completed
- ✅ All PRs pass CI before merge
- ✅ No merge conflicts (due to file partitioning)
- ✅ Smoke test passes after each merge batch
- ✅ All tests pass in integration branch
- ✅ User validates successfully
- ✅ AGENTS.md evolves with new rules
- ✅ Clean merge to main

---

## 🔑 Key Principles

1. **Integration branch is testing ground** → Main is sacred
2. **Plan quality determines Jules quality** → Garbage in, garbage out
3. **Always reference existing code** → Don't reinvent
4. **File conflict check before triggering** → Prevent merge hell
5. **Merge in batches of 5** → Catch cascading failures early
6. **Smoke test after each batch** → Validate continuously
7. **Evolve AGENTS.md after each sprint** → Get smarter over time
8. **Dynamic testing with Agent Browser** → Catch visual bugs
9. **User validates before main merge** → Production quality
10. **Learn from mistakes** → System improves with each sprint

---

**You're ready! Start with Phase 1 and work through each phase sequentially.**
