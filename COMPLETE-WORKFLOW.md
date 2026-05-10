# Complete Jules Workflow — Mobile → Web Port

## 🎯 Overview

**Goal**: Port mobile app to web using 10-15 parallel Jules agents per sprint

**Key Principle**: Integration branch is the testing ground. Main is sacred.

```
You (Planning) → Jules (10-15 agents) → Integration Branch (Testing) → Main (Production)
```

---

## 📅 Daily Sprint Cycle (Repeat 6 Times)

### **Morning: Planning Phase (You + Local IDE) — 2-3 hours**

#### Step 1: Prime Local IDE

```
.claude/commands/prime.md
```

Loads entire project context into IDE memory.

---

#### Step 2: Create Sprint PRD

```
.claude/commands/create-prd.md sprint-N-{name}.md
```

**Example for Sprint 1**:
```
Sprint 1: Web Foundation

Goal: Set up infrastructure for web app

Tasks:
1. RTL + Arabic font global setup (CRITICAL FIRST)
2. i18n setup (copy from mobile locales/)
3. Design tokens → Tailwind config
4. Drizzle schema for user progress
5. React Router setup
6. Verify shared package imports

Reference: apps/mobile/ for all patterns
Tech: Vite + React + Tailwind + Drizzle + shadcn/ui
```

**Output**: `.agents/PRDs/sprint-1-foundation.md`

---

#### Step 3: Generate GitHub Issues

```
.claude/commands/create-stories.md
```

Point to PRD. Generates shell script.

**Output**: `.agents/stories/create-sprint-1-issues.sh`

Execute:
```bash
bash .agents/stories/create-sprint-1-issues.sh
```

**Result**: 10-15 GitHub issues created

---

#### Step 4: Create Plans (One Per Issue)

For **each issue**, run:
```
.claude/commands/plan.md
```

**Critical**: Always provide mobile reference:
```
Issue #1: RTL + Arabic font setup

Reference implementation:
- apps/mobile/App.tsx (RTL setup)
- apps/mobile/theme/fonts.ts
- apps/mobile/tailwind.config.js

Web equivalent:
- Set dir="rtl" on HTML root in apps/web/index.html
- Configure Tailwind RTL plugin in apps/web/tailwind.config.ts
- Add Arabic font (Amiri) via Google Fonts
- Create test component to verify RTL rendering

Files to create:
- apps/web/src/components/ArabicTextTest.tsx

Files to modify:
- apps/web/index.html
- apps/web/tailwind.config.ts
- apps/web/src/App.tsx

Files NOT to touch:
- apps/mobile/** (reference only)
- packages/shared/** (import only)

Validation commands:
- npx tsc --noEmit
- pnpm --filter web run build
- pnpm --filter web dev (manual check: Arabic text flows RTL)
```

**Output**: 
- `docs/plans/issue-1-plan.md`
- `docs/plans/issue-2-plan.md`
- ... (10-15 plans)

---

#### Step 5: File Conflict Check

**CRITICAL**: Verify no two plans modify the same file:

```bash
grep -h "Files to modify" -A 10 docs/plans/issue-*.md | sort | uniq -d
```

**If duplicates found**: Serialize those tasks (run one after the other).

---

#### Step 6: Set Up Sprint Infrastructure

```bash
# Create integration branch and worktree structure
bash scripts/worktree-jules-setup.sh integration-sprint-1
```

**Result**:
- `integration-sprint-1` branch created
- `../your-repo-wt/integration-sprint-1/` worktree created

---

### **Midday: Execution Phase (Jules - 10-15 Parallel Agents) — 30-60 min**

#### Step 7: Trigger All Jules Agents

```bash
# Trigger 10-15 agents in parallel
bash scripts/trigger-jules.sh 1 integration-sprint-1
bash scripts/trigger-jules.sh 2 integration-sprint-1
bash scripts/trigger-jules.sh 3 integration-sprint-1
bash scripts/trigger-jules.sh 4 integration-sprint-1
bash scripts/trigger-jules.sh 5 integration-sprint-1
bash scripts/trigger-jules.sh 6 integration-sprint-1
bash scripts/trigger-jules.sh 7 integration-sprint-1
bash scripts/trigger-jules.sh 8 integration-sprint-1
bash scripts/trigger-jules.sh 9 integration-sprint-1
bash scripts/trigger-jules.sh 10 integration-sprint-1
# ... up to 15
```

**Monitor**: https://jules.google.com/

**What Jules Does (Per Agent)**:
1. Clones your repo to isolated VM
2. Reads `docs/plans/issue-N-plan.md`
3. Creates branch `feat/issue-N` from `integration-sprint-1`
4. Implements exactly what's in the plan
5. Runs validation commands
6. Opens PR to `integration-sprint-1`

**Time**: 5-20 minutes per agent (parallel execution)

---

### **Afternoon: Review Phase (You + Local IDE + Worktrees) — 2-3 hours**

#### Step 8: Fetch Jules Branches

```bash
git fetch --all
```

---

#### Step 9: Add Worktrees for Review

```bash
# Add worktree for each PR
git worktree add ../$(basename $PWD)-wt/feat-issue-1 feat/issue-1
git worktree add ../$(basename $PWD)-wt/feat-issue-2 feat/issue-2
git worktree add ../$(basename $PWD)-wt/feat-issue-3 feat/issue-3
# ... for all PRs
```

**Result**: Each PR has its own folder for review.

---

#### Step 10: Review Each PR in Worktree

For each PR:

```bash
cd ../$(basename $PWD)-wt/feat-issue-1
code .  # Open in IDE

# Install and test
pnpm install
pnpm --filter web dev
```

**Review Checklist**:
- ✅ Follows the plan exactly
- ✅ No TypeScript errors (`npx tsc --noEmit`)
- ✅ Arabic text renders correctly (RTL)
- ✅ Matches mobile design patterns
- ✅ No hardcoded strings (uses i18n)
- ✅ Imports from `@arabic-app/shared` correctly
- ✅ All validation commands pass

**In your local IDE**, run:
```
.claude/commands/review.md
```

Point to the worktree folder. IDE will:
- Compare PR against plan
- Check for deviations
- Validate code quality
- Report issues

---

#### Step 11: Check PR Status on GitHub

```bash
gh pr list --base integration-sprint-1
```

**Look for**:
- ✅ Green CI (passing)
- ❌ Red CI (failing) → Send Jules the error
- ⚠️ Conflicts → Send Jules conflict resolution message

---

### **Evening: Integration Phase (Merge to Integration Branch) — 1-2 hours**

#### Step 12: Merge PRs in Dependency Order

**CRITICAL**: Merge foundation first, then features.

```bash
# Merge in order (NOT creation order)
gh pr merge <PR-1> --squash --delete-branch  # Foundation (e.g., RTL)
gh pr merge <PR-2> --squash --delete-branch  # i18n
gh pr merge <PR-3> --squash --delete-branch  # Design tokens
# ... continue in dependency order
```

**After every 5 merges**, run smoke test:

```bash
cd ../$(basename $PWD)-wt/integration-sprint-1
git pull origin integration-sprint-1
pnpm install
pnpm --filter web run build  # MUST succeed
```

**If build fails**: STOP. Fix before continuing.

---

#### Step 13: Handle Failing PRs

**If CI fails**:
Send Jules a message via Jules UI:
```
The CI failed on feat/issue-7. 

Error: [paste GitHub Actions output]

Fix the issue, re-run all validation commands, push the fix.
```

**If merge conflict**:
Send Jules a message:
```
Pull latest integration-sprint-1, resolve conflicts in [file], 
re-run validation commands, push the update.
```

**Alternative**: Resolve locally in worktree and push.

---

#### Step 14: Dynamic Testing with Agent Browser MCP

After all PRs merged to integration branch:

```bash
cd ../$(basename $PWD)-wt/integration-sprint-1
pnpm --filter web dev  # Start dev server on localhost:5173
```

In your **local IDE**, run:

```
Use Agent Browser MCP to test the web app at http://localhost:5173

Test scenarios:
1. Navigate to home page
2. Verify Arabic text displays RTL
3. Switch language (AR → EN → BN)
4. Navigate to lesson page
5. Load lesson from shared package
6. Test vocabulary page
7. Test exercise interactions
8. Check console for errors
9. Take screenshots of any issues

Compare with mobile app behavior (apps/mobile/).

Report:
- ✅ What works correctly
- ❌ What's broken
- 📸 Screenshots of visual issues
- 🐛 Console errors
```

**Agent Browser MCP will**:
- Launch real browser
- Navigate and interact
- Take screenshots
- Report errors
- Validate behavior

---

#### Step 15: Validate Against PRD

In your **local IDE**, run:
```
.claude/commands/validate.md
```

Point to:
- Integration branch worktree
- Original PRD file

**IDE will check**:
- ✅ All PRD requirements implemented
- ✅ All acceptance criteria met
- ✅ No regressions
- ✅ Performance acceptable

---

### **End of Day: System Evolution Phase — 30 min**

#### Step 16: Capture Systemic Mistakes

**Question**: What did Jules do wrong repeatedly?

Examples:
- Used wrong import paths
- Forgot RTL utilities
- Hardcoded strings instead of i18n
- Wrong component patterns
- Skipped validation commands

---

#### Step 17: Update the System

**Update `AGENTS.md`**:
```bash
# Add new rules based on mistakes
nano AGENTS.md
```

Example additions:
```markdown
### 11. Import Paths
- ALWAYS use `@arabic-app/shared` for curriculum data
- NEVER use relative paths like `../../../packages/shared`

### 12. RTL Utilities
- Use `ms-4` not `ml-4` (margin-start, not margin-left)
- Use `pe-4` not `pr-4` (padding-end, not padding-right)
- Test all components with Arabic text
```

**Update `.claude/commands/plan.md`**:
Add checklist for common mistakes:
```markdown
## Plan Checklist
- [ ] Mobile reference paths provided
- [ ] RTL requirements specified
- [ ] i18n keys listed
- [ ] Validation commands complete
- [ ] File conflict check done
```

**Update project context**:
```
.claude/commands/prime.md
```

Add lessons learned section.

---

#### Step 18: Commit System Improvements

```bash
git add AGENTS.md .claude/commands/
git commit -m "chore: update rules based on sprint 1 learnings"
git push
```

---

### **Next Morning: Repeat for Sprint 2**

Start over at Step 1 with new sprint goal.

**System is now smarter** → Fewer mistakes in Sprint 2.

---

## 🚀 After All Sprints Complete (Day 7)

### **Final Validation Phase**

#### Step 19: Full Integration Test

```bash
cd ../$(basename $PWD)-wt/integration-sprint-6
pnpm install
pnpm --filter web run build
pnpm --filter web dev
```

**Run comprehensive Agent Browser MCP test**:
```
Complete end-to-end test of web app:

1. User registration/login flow
2. Complete a full lesson (all chunks)
3. Test vocabulary review
4. Test exercises (all types)
5. Test progress tracking
6. Test bookmarks
7. Test search functionality
8. Test all navigation paths
9. Test language switching throughout
10. Test dark mode (if implemented)
11. Test responsive layouts (mobile/tablet/desktop)
12. Test offline functionality (PWA)

Compare with mobile app for feature parity.

Generate test report with:
- ✅ Passing features
- ❌ Failing features
- 📸 Screenshots
- 🐛 Bug list
```

---

#### Step 20: Security Review

In your **local IDE**, run:
```
.claude/commands/security-review.md
```

Checks:
- Authentication/authorization
- Input validation
- SQL injection prevention
- XSS prevention
- CSRF protection
- API security

---

#### Step 21: Performance Audit

```bash
pnpm --filter web run build
pnpm --filter web preview

# Check bundle size
ls -lh apps/web/dist/assets/
```

**In IDE**:
```
Analyze web app performance:

1. Bundle size analysis
2. Lighthouse audit
3. Core Web Vitals
4. Load time analysis
5. Runtime performance
6. Memory usage

Compare with mobile app metrics.
Suggest optimizations.
```

---

#### Step 22: Final PRD Validation

```
.claude/commands/validate.md
```

**Final checklist**:
- ✅ All PRD features implemented
- ✅ Feature parity with mobile
- ✅ All tests passing
- ✅ Security review passed
- ✅ Performance acceptable
- ✅ No critical bugs
- ✅ Documentation complete

---

### **Production Merge Phase**

#### Step 23: Merge Integration → Main

```bash
# Create PR from integration to main
gh pr create \
  --base main \
  --head integration-sprint-6 \
  --title "feat: complete web app port (sprints 1-6)" \
  --body "$(cat .agents/PRDs/sprint-*.md)"

# Review and merge
gh pr merge <PR-NUMBER> --squash
```

---

#### Step 24: Deploy to Production

```bash
# Tag release
git tag -a v1.0.0 -m "Web app v1.0.0 - Feature parity with mobile"
git push origin v1.0.0

# Deploy (your CI/CD pipeline)
# e.g., Vercel, Netlify, or custom deployment
```

---

#### Step 25: Cleanup

```bash
# Remove all worktrees
bash scripts/worktree-jules-teardown.sh

# Archive sprint branches (optional)
git branch -d integration-sprint-1
git branch -d integration-sprint-2
# ... etc
```

---

## 📊 Complete Timeline

| Day | Sprint | Focus | Jules Tasks | Output |
|-----|--------|-------|-------------|--------|
| 1 | Sprint 1 | Foundation | 6 tasks | RTL, i18n, tokens, schema, router |
| 2 | Sprint 2 | UI Components | 7 tasks | ArabicText, Cards, Buttons, Modals |
| 3 | Sprint 3 | Core Screens | 6 tasks | Home, Lessons, Vocab, Exercises |
| 4 | Sprint 4 | Pedagogical Engine | 7 tasks | State, logic, search, bookmarks |
| 5 | Sprint 5 | Polish + Web Features | 6 tasks | Shortcuts, PWA, responsive |
| 6 | Sprint 6 | QA + Launch | 5 tasks | Tests, security, performance |
| 7 | Final | Integration → Main | - | Deploy to production |

**Total**: 37 Jules tasks across 6 sprints

---

## 🎯 Success Metrics

After 7 days:
- ✅ Web app with full mobile feature parity
- ✅ 37 features implemented by Jules
- ✅ Zero manual code writing
- ✅ All tests passing
- ✅ Production-ready
- ✅ System evolved (AGENTS.md improved)

---

## 🔑 Key Principles

1. **Integration branch is testing ground** → Main is sacred
2. **Plan quality determines Jules quality** → Garbage in, garbage out
3. **Always reference mobile implementation** → Don't reinvent
4. **File conflict check before triggering** → Prevent merge hell
5. **Merge in dependency order** → Foundation first
6. **Smoke test every 5 merges** → Catch cascading failures early
7. **Evolve the system after each sprint** → Get smarter over time
8. **Agent Browser MCP for dynamic testing** → Catch visual bugs
9. **Validate against PRD continuously** → Stay on track
10. **Main merge only after full validation** → Production quality

---

## 🆘 Troubleshooting

### Jules Task Failed
- Check plan file quality
- Verify mobile reference paths are correct
- Check validation commands are runnable

### Merge Conflicts
- Send Jules conflict resolution message
- Or resolve locally in worktree

### CI Failing
- Send Jules the error output
- Or fix locally and push

### Agent Browser MCP Issues
- Ensure dev server is running
- Check localhost port (default: 5173)
- Verify Agent Browser MCP is installed

### Integration Branch Broken
- Revert last merge
- Fix issue
- Re-merge

---

**You're ready to port the entire mobile app to web in 7 days!**
