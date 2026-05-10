# Jules + Worktree Workflow Setup — Summary

## 📋 What Was Created

### 1. Core Configuration Files

#### `AGENTS.md` (Repo Root)
- Universal rules file that Jules reads automatically
- Contains all execution rules, code style, and project conventions
- Includes Arabic RTL requirements, lesson structure rules, and validation workflows
- **Location**: Root of repository

#### `docs/plans/README.md`
- Directory for Jules implementation plan files
- Plans follow format: `issue-N-plan.md`
- **Location**: `docs/plans/`

---

### 2. Workflow Scripts

#### `scripts/worktree-jules-setup.sh`
**Purpose**: Creates worktree structure for reviewing Jules PRs

**What it does**:
- Creates `../{repo-name}-wt/` directory (sibling to your repo)
- Creates integration branch worktree for PR merges
- Sets up folder structure for parallel PR review

**Usage**:
```bash
bash scripts/worktree-jules-setup.sh integration-sprint-1
```

**Output**:
```
../your-repo-wt/
└── integration-sprint-1/  ← Review merged PRs here
```

---

#### `scripts/worktree-jules-teardown.sh`
**Purpose**: Cleans up worktrees after sprint completion

**What it does**:
- Lists all worktrees
- Asks for confirmation
- Removes all worktree folders
- Frees disk space

**Usage**:
```bash
bash scripts/worktree-jules-teardown.sh
```

---

#### `scripts/trigger-jules.sh`
**Purpose**: Triggers Jules AI via API to execute a plan

**What it does**:
- Reads plan file from `docs/plans/issue-N-plan.md`
- Validates plan exists and integration branch exists
- Sends request to Jules API with your API key
- Returns task ID for monitoring

**Usage**:
```bash
bash scripts/trigger-jules.sh 7 integration-sprint-1
```

**Parameters**:
- `7` = Issue number
- `integration-sprint-1` = Base branch for Jules to branch from

**What Jules does**:
1. Clones your repo
2. Reads `docs/plans/issue-7-plan.md`
3. Creates branch `feat/issue-7` from `integration-sprint-1`
4. Implements the plan
5. Runs validation commands
6. Opens PR to `integration-sprint-1`

---

### 3. Documentation

#### `JULES-WORKFLOW-SETUP.md`
- Complete daily workflow guide
- Step-by-step instructions for each phase
- Troubleshooting section
- Command reference

#### `QUICKSTART.md`
- 5-minute quick start guide
- Single task walkthrough
- Key commands only

---

## 🧪 How to Test the Setup

### Test 1: Verify Scripts Are Executable

```bash
ls -la scripts/worktree-jules-setup.sh
ls -la scripts/worktree-jules-teardown.sh
ls -la scripts/trigger-jules.sh
```

**Expected**: All should show `-rwxr-xr-x` (executable)

If not:
```bash
chmod +x scripts/worktree-jules-setup.sh
chmod +x scripts/worktree-jules-teardown.sh
chmod +x scripts/trigger-jules.sh
```

---

### Test 2: Set Up First Sprint

```bash
bash scripts/worktree-jules-setup.sh integration-sprint-1
```

**Expected output**:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌳 Git Worktree Setup for Jules PR Review
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Repository:         /path/to/your-repo
Worktree base:      /path/to/your-repo-wt
Integration branch: integration-sprint-1

📁 Creating worktree base directory: /path/to/your-repo-wt
🔧 Creating integration branch worktree...
  → Branch doesn't exist, creating from main...
  → Pushing to remote...
✓ Integration worktree created: /path/to/your-repo-wt/integration-sprint-1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Worktree Setup Complete
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Verify**:
```bash
git worktree list
```

Should show:
```
/path/to/your-repo              <branch>  [main]
/path/to/your-repo-wt/integration-sprint-1  <branch>  [integration-sprint-1]
```

**Check remote**:
```bash
git branch -r | grep integration-sprint-1
```

Should show: `origin/integration-sprint-1`

---

### Test 3: Create a Test Plan

In your IDE (Cursor/Windsurf/etc.):

1. Run `.claude/commands/prime.md` to load context
2. Run `.claude/commands/plan.md` with this test task:

```
Create a simple utility function that formats Arabic text for display.
File: apps/web/src/lib/format-arabic.ts
Function: formatArabicText(text: string): string
Should trim whitespace and ensure proper Unicode normalization.
```

**Expected**: Creates `docs/plans/issue-1-plan.md`

**Verify**:
```bash
ls -la docs/plans/issue-1-plan.md
cat docs/plans/issue-1-plan.md
```

Should contain:
- Issue metadata
- Files to create: `apps/web/src/lib/format-arabic.ts`
- Step-by-step implementation
- Validation commands

---

### Test 4: Trigger Jules (DRY RUN - Check Script Only)

**First, let's just verify the script works without actually calling Jules API:**

```bash
# This will validate inputs but won't send to API yet
bash scripts/trigger-jules.sh 1 integration-sprint-1
```

**Expected output**:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 Triggering Jules AI Agent
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Repository:         your-org/your-repo
Issue:              #1
Plan file:          docs/plans/issue-1-plan.md
Integration branch: integration-sprint-1
Feature branch:     feat/issue-1

✓ Plan file exists
✓ Integration branch exists

🚀 Sending request to Jules API...
```

**If you see errors**:
- "Plan file not found" → Create the plan first (Test 3)
- "Integration branch not found" → Run Test 2 again

---

### Test 5: Verify AGENTS.md

```bash
cat AGENTS.md | head -20
```

Should show:
```
# AI Agent Rules — Universal (Jules + Local IDE)

## Project Context

**Repository**: Arabic Pedagogical Engine (Mobile + Web Monorepo)
**Tech Stack**: 
- Mobile: React Native + Expo + NativeWind + Zustand
- Web: Vite + React + Tailwind + Drizzle ORM + shadcn/ui
...
```

---

## ✅ Checklist Before Committing

- [ ] All scripts are executable (`chmod +x` if needed)
- [ ] `bash scripts/worktree-jules-setup.sh integration-sprint-1` runs successfully
- [ ] `git worktree list` shows integration branch worktree
- [ ] `git branch -r` shows `origin/integration-sprint-1`
- [ ] `docs/plans/` directory exists
- [ ] `AGENTS.md` exists at repo root
- [ ] Test plan can be created via `.claude/commands/plan.md`
- [ ] `trigger-jules.sh` validates inputs correctly

---

## � Next Steps After Testing

### If Everything Works:

1. **Commit the setup**:
```bash
git add AGENTS.md docs/plans/ scripts/worktree-jules-setup.sh scripts/worktree-jules-teardown.sh scripts/trigger-jules.sh JULES-WORKFLOW-SETUP.md QUICKSTART.md
git commit -m "feat: set up Jules + Worktree workflow infrastructure"
git push
```

2. **Create your first real plan**:
   - Use `.claude/commands/create-prd.md` for a sprint goal
   - Use `.claude/commands/create-stories.md` to generate issues
   - Use `.claude/commands/plan.md` for each issue

3. **Trigger Jules for real**:
```bash
bash scripts/trigger-jules.sh 1 integration-sprint-1
```

4. **Monitor at**: https://jules.google.com/

---

## 🔧 If Something Doesn't Work

### Script Permission Issues
```bash
chmod +x scripts/*.sh
```

### Integration Branch Already Exists
```bash
# Delete and recreate
git branch -D integration-sprint-1
git push origin --delete integration-sprint-1
bash scripts/worktree-jules-setup.sh integration-sprint-1
```

### Worktree Directory Conflicts
```bash
# Remove existing worktrees
bash scripts/worktree-jules-teardown.sh
# Start fresh
bash scripts/worktree-jules-setup.sh integration-sprint-1
```

### Jules API Key Issues
Edit `scripts/trigger-jules.sh` and verify:
```bash
JULES_API_KEY="${JULES_API_KEY:-AQ.Ab8RN6JeOhOJ0iP_OSVm4Z_yMK5l7u8GenBeJdnOYSb1hCQPLAYeah}"
```

---

## 📚 Documentation Files

- `AGENTS.md` - Rules for Jules and local IDE
- `JULES-WORKFLOW-SETUP.md` - Complete daily workflow guide
- `QUICKSTART.md` - 5-minute quick start
- `docs/plans/README.md` - Plan file format guide
- `SETUP-COMPLETE.md` - This file (testing guide)

---

## 🎯 What This Setup Enables

1. **100 Jules tasks per day** - Parallel execution in Google's cloud
2. **Zero branch switching** - Review PRs in separate folders
3. **Plan-driven execution** - Jules follows explicit instructions
4. **Conflict prevention** - File-level task partitioning
5. **Automated validation** - TypeScript, lint, tests before PR
6. **Evolving rules** - AGENTS.md improves with each sprint

---

**Test everything above, then commit when ready!**
