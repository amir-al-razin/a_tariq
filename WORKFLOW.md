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

**CRITICAL: Plans are DIRECTIVES, not implementations**

Jules (Gemini 3.1 Pro Thinking) is a frontier model that generates code. Plans should tell Jules WHAT to build and WHERE to look, not HOW to build it.

**Each plan must include (30-120 lines):**
- **Objective**: 1-2 sentences describing what to build
- **Reference Implementation**: Mobile file paths with line numbers (e.g., `apps/mobile/screens/HomeScreen.tsx:1-150`)
- **Files to create**: List with purpose
- **Files to modify**: List with changes
- **Critical Requirements**: Key constraints (5-10 bullet points)
- **Validation commands**: `npx tsc --noEmit`, `pnpm run lint`, etc.
- **Dependencies**: What blocks/is blocked by this issue

**What NOT to include:**
- ❌ Complete code implementations
- ❌ Step-by-step code snippets
- ❌ Copy-paste solutions
- ❌ Verbose explanations

**Why**: Jules reads mobile reference files and generates web implementations. Providing complete code wastes local IDE credits and defeats the purpose of using a frontier model.

**Output**: `docs/plans/issue-N-plan.md` (one per issue, 30-120 lines each)

### Step 4.5: Validate Plans

Before triggering Jules, validate all plans:

```bash
bash scripts/validate-plans.sh
```

**Checks:**
- ✅ All plans exist (issue-16 through issue-30)
- ✅ Minimum 80 lines per plan (ensures sufficient detail)
- ✅ Maximum 200 lines per plan (prevents code bloat)

**If validation fails**: Fix plans before continuing.

### Step 5: File Conflict Check

**CRITICAL**: Before triggering Jules, check for file conflicts:

```bash
grep -h "Files to modify" -A 10 docs/plans/issue-*.md | sort | uniq -d
```

**Understanding Conflicts:**

**Real Conflicts (Must be Serial):**
1. File created in Task A, modified in Task B
2. Same file, same section/lines modified
3. Task B depends on Task A's output

**False Conflicts (Can be Parallel):**
1. Same file, different sections (Jules uses `strReplace` with specific old_str/new_str)
2. Different files entirely
3. Independent features

**If duplicates found**: Analyze if they're real conflicts. Only serialize if truly conflicting.

### Step 6: Set Up Sprint Infrastructure

```bash
# Create integration branch and worktree structure
bash scripts/worktree-jules-setup.sh integration-sprint-N

# Initialize lessons-learned document
cp .agents/templates/lessons-learned.md docs/sprint-N-lessons-learned.md
```

**Result**:
- `integration-sprint-N` branch created
- `../{repo-name}-wt/integration-sprint-N/` worktree created
- `docs/sprint-N-lessons-learned.md` ready for tracking issues/decisions

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

### Step 19: Review Lessons Learned

Open `docs/sprint-N-lessons-learned.md` and review:
- **Issues Encountered**: What went wrong?
- **Decisions Made**: What choices were made and why?
- **Improvements Needed**: What should change?

### Step 20: Update System Files

Based on lessons learned, update:

**AGENTS.md** - Add new rules for Jules:
```markdown
### 11. [New Rule Based on Mistakes]
- ALWAYS [correct behavior]
- NEVER [wrong behavior]
```

**WORKFLOW.md** - Improve process:
- Add new steps
- Clarify existing steps
- Remove obsolete steps

**.claude/commands/plan.md** - Improve plan template:
- Update required sections
- Add new validation checks
- Clarify directive vs implementation

**.claude/commands/create-stories.md** - Improve issue generation:
- Add label pre-creation
- Improve issue templates

### Step 21: Commit System Improvements

```bash
git add AGENTS.md WORKFLOW.md .claude/commands/*.md
git commit -m "chore: evolve system based on sprint N learnings"
git push
```

**Key Principle**: The system gets smarter with each sprint. Never repeat the same mistake twice.

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
2. **Plans are directives, not implementations** → Let Jules generate code
3. **Trust the frontier model** → Jules (Gemini 2.0 Flash Thinking) is capable
4. **Always reference existing code** → Don't reinvent
5. **File conflict check before triggering** → Prevent merge hell
6. **Merge in batches of 5** → Catch cascading failures early
7. **Smoke test after each batch** → Validate continuously
8. **Track issues and decisions** → Update lessons-learned throughout sprint
9. **Evolve system after each sprint** → Get smarter over time
10. **Dynamic testing with Agent Browser** → Catch visual bugs
11. **User validates before main merge** → Production quality
12. **Learn from mistakes** → Never repeat the same issue twice

---

**You're ready! Start with Phase 1 and work through each phase sequentially.**
