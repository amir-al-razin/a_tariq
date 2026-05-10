# Jules Workflow — Quick Start

## ⚡ Get Started in 5 Minutes

### 1. Set Up Your First Sprint (One-Time)

```bash
# Create integration branch and worktree structure
bash scripts/worktree-jules-setup.sh integration-sprint-1
```

### 2. Create Your First Plan

In your IDE (Cursor/Windsurf/etc.):

1. Run `.claude/commands/prime.md` to load project context
2. Run `.claude/commands/plan.md` and describe a simple task

Example task: "Add a new Arabic text component that displays text with proper RTL support"

This creates: `docs/plans/issue-1-plan.md`

### 3. Trigger Jules

```bash
bash scripts/trigger-jules.sh 1 integration-sprint-1
```

Monitor at: https://jules.google.com/

### 4. Review the PR

After Jules opens the PR (5-20 minutes):

```bash
# Fetch Jules's branch
git fetch --all

# Create worktree for review
git worktree add ../$(basename $PWD)-wt/feat-issue-1 feat/issue-1

# Open in your IDE
cd ../$(basename $PWD)-wt/feat-issue-1
code .

# Test it
pnpm install
pnpm --filter web dev
```

### 5. Merge When Green

```bash
# Check PR status
gh pr list --base integration-sprint-1

# Merge if CI is green
gh pr merge <PR-NUMBER> --squash --delete-branch
```

---

## 🎯 What You Just Did

1. ✅ Created an integration branch (where Jules PRs land)
2. ✅ Generated an implementation plan (Jules's instructions)
3. ✅ Triggered Jules to execute the plan
4. ✅ Reviewed Jules's work in a separate folder (no branch switching)
5. ✅ Merged the PR

---

## 📈 Scale to 15 Parallel Tasks

Once you're comfortable:

1. Create 15 plans (one per issue)
2. Trigger all 15 Jules tasks at once
3. Review PRs as they come in
4. Merge in batches of 5 with smoke tests

**Full workflow:** See `JULES-WORKFLOW-SETUP.md`

---

## 🔑 Key Files

- `AGENTS.md` - Rules Jules follows
- `docs/plans/issue-N-plan.md` - Implementation plans
- `scripts/trigger-jules.sh` - Trigger Jules API
- `JULES-WORKFLOW-SETUP.md` - Complete guide

---

## 🆘 Troubleshooting

**Jules task failed?**
- Check plan file exists: `ls docs/plans/issue-1-plan.md`
- Check integration branch exists: `git branch -r | grep integration-sprint-1`

**Can't find Jules branch?**
- Run `git fetch --all`
- Check Jules hasn't finished yet: https://jules.google.com/

**TypeScript errors in PR?**
- Send Jules a message to fix and re-run `npx tsc --noEmit`

---

**Ready for more?** Read `JULES-WORKFLOW-SETUP.md` for the complete daily workflow.
