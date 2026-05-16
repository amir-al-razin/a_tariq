# Sprint {N} Retrospective

**Sprint Goal**: {What we tried to build}
**Date**: {Date}
**Status**: {Success/Partial/Failed}

---

## What Worked Well ✅

{List things that went smoothly}

Example:
- Conflict analysis correctly identified serial vs parallel issues
- Jules completed 12/15 issues without errors
- Auto-merge worked for parallel PRs

---

## What Went Wrong ❌

{List problems encountered}

Example:
- Issue #17 failed because plan was missing dependency information
- Merge conflict in issue #20 - AI couldn't auto-resolve
- Jules hallucinated on issue #25 - didn't follow plan

---

## Root Causes 🔍

{For each problem, identify WHY it happened}

Example:
- **Issue #17 failure**: Plan template doesn't enforce dependency documentation
- **Merge conflict #20**: Conflict analysis didn't detect overlapping sections
- **Jules hallucination #25**: Plan was too vague, lacked detailed requirements

---

## System Improvements Needed 🔧

{Specific changes to prevent these issues in future sprints}

### WORKFLOW-V2.md Updates
- [ ] Add dependency validation step in planning phase
- [ ] Add conflict analysis validation before execution

### AGENTS.md Updates
- [ ] Add rule: "If plan lacks detail, STOP and request clarification"
- [ ] Add rule: "Always verify dependencies exist before starting"

### .claude/commands/plan.md Updates
- [ ] Enforce "Dependencies" section (required, not optional)
- [ ] Add validation: Check if dependent issues exist
- [ ] Increase minimum plan length to 100 lines

### New Tools/Scripts Needed
- [ ] Create `scripts/validate-dependencies.sh` to check issue dependencies
- [ ] Create `scripts/analyze-conflicts-deep.sh` for line-level conflict detection

---

## Metrics 📊

- **Issues Completed**: {X}/15
- **Issues Failed**: {Y}/15
- **PRs Auto-Merged**: {Z}/15
- **Conflicts Resolved Manually**: {N}
- **Total Time**: {Hours}
- **Planning Time**: {Minutes}
- **Execution Time**: {Minutes}
- **Review Time**: {Minutes}

---

## Action Items for Next Sprint

1. [ ] Update WORKFLOW-V2.md with improvements
2. [ ] Update AGENTS.md with new rules
3. [ ] Update plan.md template
4. [ ] Create new validation scripts
5. [ ] Test improvements on small feature first

---

## Notes

{Any additional observations or context}

