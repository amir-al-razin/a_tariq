# Workflow - Idea to Production

**Philosophy**: Automate everything. You only review the final integration branch.

---

## Overview

```
You: Create PRD
AI: Generate issues + plans
AI: Analyze conflicts
AI: Execute via Jules API (serial/parallel)
AI: Auto-merge PRs to integration branch
AI: Resolve conflicts automatically
You: Review integration branch once
You: Test app manually
You: Merge integration → main
```

---

## Phase 1: Planning (You + Local AI)

### Step 0: Define Sprint Goal
```
AI: "What do you want to build in this sprint?"
You: Describe the feature/goal (e.g., "Migrate mobile app to web")
AI: Determines sprint number automatically (checks existing sprints)
AI: Creates sprint context
```

### Step 1: Create PRD
```
AI: Runs .claude/commands/create-prd.md with your goal
Output: .agents/PRDs/sprint-N-[name].md
```

### Step 2: Generate GitHub Issues
```
AI: Runs .claude/commands/create-stories.md
AI: Executes bash .agents/stories/create-sprint-N-issues.sh
Output: 15 GitHub issues created with labels
```

### Step 3: Create Integration Branch
```
AI: git checkout -b integration-sprint-N
AI: git push origin integration-sprint-N
```

### Step 4: Create Implementation Plans
```
AI: For each issue, runs .claude/commands/plan.md
Output: docs/plans/issue-N-plan.md (80-150 lines each)
Requirements:
  - Detailed objective (3-5 paragraphs)
  - Comprehensive requirements (10-20 bullets)
  - Mobile reference files
  - NO code implementations
```

### Step 5: Analyze Conflicts
```
AI: Reads all plan files
AI: Extracts "Files to create" and "Files to modify"
AI: Detects conflicts (same file in multiple issues)
AI: Determines execution strategy:
  - Serial: Issues that create files others modify
  - Parallel: Issues that modify different files/sections
Output: Execution plan (serial groups + parallel groups)
```

---

## Phase 2: Execution (Fully Automated by AI)

### Step 6: Execute Issues via Jules API
```
AI: For each serial group:
  - Triggers issue via scripts/trigger-jules.sh
  - Waits for your notification (Jules done)
  - Proceeds to next issue

AI: For each parallel group:
  - Triggers all issues simultaneously
  - Waits for your notification (all done)
  - Proceeds to next group
```

**Example Execution Plan**:
```
Serial Group 1: #16 → #17 → #18 (foundation)
Parallel Group 2: #19, #20, #22 (screens)
Serial: #21 (depends on #20)
Parallel Group 3: #23, #24, #25 (pedagogy)
Parallel Group 4: #26, #27, #28 (features)
Serial: #29 (polish)
Serial: #30 (validation)
```

### Step 7: Monitor and Merge PRs
```
When Jules opens PR:
  - Jules notifies you
  - You tell AI: "PR #X is ready"
  
AI: Checks for conflicts
  - If no conflicts: Merges PR to integration-sprint-N
  - If conflicts: Resolves using code analysis, commits fix, merges
  
AI: Continues to next issue/group
```

### Step 8: Handle Errors
```
If Jules fails:
  - Jules notifies you
  - You manually fix in Jules dashboard OR
  - You tell AI: "Resolve Jules error for issue #X"
  - AI fetches session logs, analyzes, suggests fix
```

---

## Phase 3: Review (You, Once)

### Step 9: Final Integration Review
```
AI: "All 15 PRs merged to integration-sprint-N"
AI: Creates PR: integration-sprint-N → main
AI: Runs validation:
  - npx tsc --noEmit
  - pnpm run lint
  - pnpm run build
  - pnpm test

You: Review PR on GitHub
You: Checkout integration branch locally
You: Test app manually (user perspective)
You: Verify all features work
```

### Step 10: Merge to Main
```
If tests pass:
  You: Approve PR
  You: Merge integration-sprint-N → main
  
If tests fail:
  You: Identify issues
  You: Tell AI to fix OR fix manually
  You: Re-test
```

---

## Phase 4: System Evolution (Learn & Improve)

### Step 11: Capture Lessons Learned
```
AI: "Sprint complete. Any issues encountered?"
You: Describe what went wrong (if anything)
AI: Documents in docs/sprint-N-retrospective.md:
  - What worked well
  - What went wrong
  - Root causes
  - System improvements needed
```

### Step 12: Update System Files
```
AI: Analyzes retrospective
AI: Proposes updates to:
  - WORKFLOW-V2.md (if process issue)
  - AGENTS.md (if Jules made mistakes)
  - .claude/commands/plan.md (if plan quality issue)
  
You: Review and approve changes
AI: Commits system improvements
```

### Step 13: Archive Sprint
```
AI: Moves sprint files to archive:
  - .agents/PRDs/sprint-N-*.md → .agents/archive/
  - docs/sprint-N-retrospective.md → .agents/archive/
  
AI: Updates sprint counter for next sprint
```

**Key Principle**: Every sprint makes the system smarter. Never repeat the same mistake twice.

---

## File Structure

```
WORKFLOW-V2.md           # This file (100 lines)
AGENTS.md                # Rules for Jules
docs/plans/
  issue-16-plan.md       # 80-150 lines each
  issue-17-plan.md
  ...
.agents/PRDs/
  sprint-N-[name].md
.agents/stories/
  create-sprint-N-issues.sh
.claude/commands/
  create-prd.md
  create-stories.md
  plan.md
scripts/
  trigger-jules.sh       # Simple API trigger
```

---

## Key Principles

1. **Automate Everything**: AI handles execution, merging, conflict resolution
2. **Review Once**: You only review final integration branch
3. **Test Manually**: AI runs automated tests, you test as user
4. **Trust Jules**: Jules notifies when done, no polling needed
5. **Handle Errors Manually**: Jules notifies on failure, you decide next step

---

## Commands for AI

### Start New Sprint
```
You: "Start new sprint"
AI: "What do you want to build?"
You: [Describe goal]
AI: Follows Phase 1 (Steps 0-5)
```

### Execute Sprint
```
You: "Execute sprint N"
AI: Follows Phase 2 (Steps 6-8)
```

### Check Status
```
You: "Sprint status"
AI: Reports:
  - Issues completed
  - PRs merged
  - Current issue executing
  - Conflicts resolved
```

### Handle Error
```
You: "Resolve Jules error for issue #X"
AI: Fetches session logs, analyzes, suggests fix
```

### Final Review
```
You: "Create integration PR"
AI: Creates PR: integration-sprint-N → main
AI: Runs validation
AI: Reports results
```

### Complete Sprint
```
You: "Complete sprint N"
AI: Captures lessons learned
AI: Proposes system improvements
AI: Archives sprint files
```

---

## Success Criteria

Sprint is successful when:
- ✅ All 15 issues completed
- ✅ All PRs merged to integration branch
- ✅ No merge conflicts (or resolved automatically)
- ✅ All validation passes
- ✅ You test app manually - everything works
- ✅ Integration branch merged to main

---

## Estimated Timeline

- **Planning**: 30 minutes (you + AI)
- **Execution**: 60-90 minutes (AI autonomous)
- **Review**: 30 minutes (you test manually)
- **Total**: ~2-3 hours (mostly hands-off)

