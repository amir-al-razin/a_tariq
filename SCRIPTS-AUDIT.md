# Scripts Audit — What to Keep vs Remove

## ✅ KEEP - Essential for Jules Workflow

### Jules Workflow Scripts (NEW)
- `scripts/trigger-jules.sh` ✅ **KEEP** - Triggers Jules API
- `scripts/worktree-jules-setup.sh` ✅ **KEEP** - Creates worktrees for Jules PR review
- `scripts/worktree-jules-teardown.sh` ✅ **KEEP** - Cleans up Jules worktrees

### Database & Migration Scripts
- `scripts/migrate.ts` ✅ **KEEP** - Runs SQL migrations (Jules needs this)
- `scripts/seed.ts` ✅ **KEEP** - Seeds database with GitHub issues
- `scripts/sync-issues.ts` ✅ **KEEP** - Syncs GitHub issues to database

### Testing & Validation Scripts
- `scripts/smoke.ts` ✅ **KEEP** - Smoke tests (mentioned in AGENTS.md)
- `scripts/dev.ts` ✅ **KEEP** - Development server script

### Utility Scripts
- `scripts/assign-port.ts` ✅ **KEEP** - Port assignment utility (used by smoke.ts)

---

## ⚠️ KEEP - Neon DB Worktree Scripts (Different Purpose)

These are for **Neon database branching** (different from Jules worktrees):

- `scripts/worktree-setup.sh` ✅ **KEEP** - Creates Neon DB branch per worktree
- `scripts/worktree-teardown.sh` ✅ **KEEP** - Deletes Neon DB branch

**Why keep both?**
- `worktree-jules-*.sh` = For reviewing Jules PRs (no DB branching)
- `worktree-*.sh` = For Neon DB branching (creates isolated DB per worktree)

You might use both together:
1. `worktree-jules-setup.sh` creates worktree folder
2. `worktree-setup.sh` creates Neon DB branch for that worktree

---

## 🤔 REVIEW - Test/Debug Scripts (Probably Keep)

These look like test/debug utilities for your database:

- `scripts/db-check.ts` - Database health check
- `scripts/schema-audit.ts` - Schema validation
- `scripts/verify-seed.ts` - Verify seed data
- `scripts/verify-after-sync.ts` - Verify sync worked
- `scripts/verify-upsert.ts` - Verify upsert operations
- `scripts/cleanup-test.ts` - Test cleanup
- `scripts/unique-test.ts` - Test unique constraints
- `scripts/fk-cascade-test.ts` - Test foreign key cascades
- `scripts/edge-null-body.ts` - Test edge case: null body
- `scripts/edge-unicode.ts` - Test edge case: unicode
- `scripts/vector-audit.ts` - Audit vector embeddings
- `scripts/count-classifications.ts` - Count classifications
- `scripts/stats-ground-truth.ts` - Stats validation
- `scripts/runs-count.ts` - Count runs

**Recommendation**: ✅ **KEEP ALL** - These are useful for debugging and validation

---

## 🤔 REVIEW - Utility Scripts

- `scripts/get-ids.ts` - Get IDs from database
- `scripts/issue-numbers.ts` - Get issue numbers
- `scripts/plans-map.ts` - Map plans (might be useful for Jules workflow)
- `scripts/key-check.ts` - Check API keys
- `scripts/ab-click.js` - Agent Browser click test?

**Recommendation**: ✅ **KEEP ALL** - Utilities are always useful

---

## 🤔 REVIEW - Platform-Specific Scripts

- `scripts/w.sh` - Wrapper script (Linux/Mac)
- `scripts/w.ps1` - Wrapper script (Windows PowerShell)

**Recommendation**: ✅ **KEEP** - Cross-platform support

---

## ❌ REMOVE - None!

All scripts appear useful. No scripts to remove.

---

## 📁 MUST ADD - Essential Directories

- `.agents/` ✅ **ADD** - PRDs and stories
- `.claude/` ✅ **ADD** - Command skills (prime, plan, create-prd, etc.)

---

## 📄 MUST ADD - Documentation

- `COMPLETE-WORKFLOW.md` ✅ **ADD** - Complete workflow guide
- `SETUP-COMPLETE.md` ✅ **ADD** - Setup testing guide
- `implementation-guide.html` ⚠️ **OPTIONAL** - Reference guide (large file)
- `playbook-v2.html` ⚠️ **OPTIONAL** - Reference guide (large file)
- `worktree-jules-guide.html` ⚠️ **OPTIONAL** - Reference guide (large file)

**Recommendation for HTML files**: 
- Option 1: Add to git (Jules can reference them)
- Option 2: Add to `.gitignore` (keep local only)

**I recommend**: ✅ **ADD ALL** - Jules benefits from having reference docs

---

## 📋 Final Commit Plan

### Files to Add (Staged)
```
AGENTS.md
JULES-WORKFLOW-SETUP.md
QUICKSTART.md
docs/plans/README.md
scripts/trigger-jules.sh
scripts/worktree-jules-setup.sh
scripts/worktree-jules-teardown.sh
```

### Files to Add (Unstaged - Need to Add)
```
.agents/
.claude/
COMPLETE-WORKFLOW.md
SETUP-COMPLETE.md
implementation-guide.html
playbook-v2.html
worktree-jules-guide.html
scripts/*.ts
scripts/*.js
scripts/*.sh
scripts/*.ps1
```

### Files Already Tracked (No Action)
```
All existing files in repo
```

---

## 🎯 Recommendation

**KEEP EVERYTHING. ADD EVERYTHING.**

All scripts are useful:
- Jules workflow scripts ✅
- Database scripts ✅
- Test scripts ✅
- Utility scripts ✅
- Platform scripts ✅

All directories are essential:
- `.agents/` for PRDs and stories ✅
- `.claude/` for command skills ✅

All docs are valuable:
- Workflow guides ✅
- Reference HTML files ✅

---

## ✅ Ready to Commit

Run these commands:

```bash
# Add all new files
git add .agents/
git add .claude/
git add COMPLETE-WORKFLOW.md
git add SETUP-COMPLETE.md
git add implementation-guide.html
git add playbook-v2.html
git add worktree-jules-guide.html
git add scripts/

# Commit everything
git commit -m "feat: complete Jules workflow setup with all utilities

- Add AGENTS.md with universal rules for Jules and local IDE
- Add Jules workflow scripts (trigger, worktree setup/teardown)
- Add complete workflow documentation
- Add .agents/ directory for PRDs and stories
- Add .claude/ directory for command skills
- Add all utility scripts (db, test, validation)
- Add reference guides (HTML)
- Keep Neon DB worktree scripts (different purpose)

Jules now has access to:
- Complete project context
- All utility scripts
- Database migration tools
- Testing infrastructure
- Reference documentation"

# Push to remote
git push
```

**Result**: Jules will have access to the latest, most complete version of your codebase.
