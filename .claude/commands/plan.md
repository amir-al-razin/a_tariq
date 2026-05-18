---
description: Create implementation plan with codebase analysis
argument-hint: <feature description | path/to/prd.md>
---

# Implementation Plan Generator

**Input**: $ARGUMENTS

## Objective

Create a detailed directive plan that tells Jules WHAT to build (with comprehensive explanation) and WHERE to look, but NOT complete code implementations.

**Core Principle**: DETAILED DIRECTIVES - comprehensive explanations prevent hallucination, but no code implementations. Jules (Gemini 2.0 Flash Thinking) generates code from detailed requirements and patterns.

**Philosophy**: 
- ✅ MORE detail about WHAT = better AI output
- ✅ Comprehensive requirements = less hallucination
- ❌ Complete code = wasted credits, Jules becomes copy-paste agent

**Target Length**: 80-150 lines (detailed explanations, no code blocks)

---

## Phase 1: PARSE

### Determine Input Type

| Input | Action |
|-------|--------|
| `.prd.md` file | Read PRD, extract next pending phase |
| Other `.md` file | Read and extract feature description |
| Free-form text | Use directly as feature input |
| Blank | Use conversation context |

### Extract Feature Understanding

- **Problem**: What are we solving?
- **User Story**: As a [user], I want to [action], so that [benefit]
- **Type**: NEW_CAPABILITY / ENHANCEMENT / REFACTOR / BUG_FIX
- **Complexity**: LOW / MEDIUM / HIGH
- **Jira Issue**: If a Jira issue key (e.g., `RH-5`) is available in the conversation context — from a prior `/prime` command, user mention, or PRD — capture it. This is optional but should be included in the plan metadata when available so that `/implement` can update the issue after completion.

---

## Phase 2: EXPLORE

### Find Reference Implementations

Use search tools to find:

1. **Similar mobile implementations** - analogous features with file:line references
2. **Key patterns** - how similar features are structured
3. **Data sources** - where data comes from (e.g., `@tariq/shared`)

### Document References (NOT code)

| Category | File:Lines | Pattern Description |
|----------|------------|---------------------|
| MAIN REFERENCE | `path/to/file.tsx:10-150` | Primary implementation to mirror |
| DATA SOURCE | `@tariq/shared` | Import curriculum data from here |
| PATTERN | `path/to/file.tsx:20-30` | Key pattern (e.g., "circular layout with dynamic radius") |

---

## Phase 3: DESIGN

### Map the Changes

- What files need to be created?
- What files need to be modified?
- What's the dependency order?

### Identify Risks

| Risk | Mitigation |
|------|------------|
| {potential issue} | {how to handle} |

---

## Phase 4: GENERATE

### Create Detailed Directive Plan File

**Output path**: `docs/plans/issue-{N}-plan.md`

**Target**: 80-150 lines (detailed explanations, no code implementations)

```markdown
# Plan: {Feature Name} (Issue #{N})

## Objective

{3-5 paragraphs explaining:
- What we're building
- Why we're building it
- How it fits into the app
- Key user flows
- Important behaviors
- Edge cases to consider}

## Reference Implementation

- Mobile: `path/to/file.tsx:line-range`
- Pattern: {detailed description of key patterns to follow}
- Data: `@tariq/shared` (import curriculum data from here)
- Similar features: `path/to/similar.tsx` (for reference)

## Files to Create

- `path/to/file.tsx` - {Detailed purpose: what this file does, what it contains, how it's used}
- `path/to/other.tsx` - {Detailed purpose}

## Files to Modify

- `path/to/file.tsx` - {Detailed explanation of what changes and why}
- `path/to/other.tsx` - {Detailed explanation}

## Critical Requirements

1. {Detailed requirement with explanation}
2. {Detailed requirement with explanation}
3. {Detailed requirement with explanation}
4. {Detailed requirement with explanation}
5. {Detailed requirement with explanation}
... (10-20 comprehensive requirements)

## Validation

```bash
npx tsc --noEmit
pnpm --filter web dev
# Test: {detailed test scenarios}
# Verify: {what to verify}
# Check: {what to check}
```

## Dependencies

**Blocks**: #{X}
**Blocked By**: #{Y}

## Notes

{Any additional context, gotchas, or important considerations}
```

**What to include:**
- ✅ Detailed objective (3-5 paragraphs)
- ✅ Comprehensive requirements (10-20 bullet points)
- ✅ Detailed file purposes
- ✅ Detailed change explanations
- ✅ Reference file paths

**What NOT to include:**
- ❌ Complete code implementations
- ❌ Step-by-step code snippets  
- ❌ Copy-paste solutions
- ❌ Code blocks with full component code

**Why**: Detailed explanations prevent hallucination. Complete code wastes credits.

---

## Phase 5: OUTPUT

```markdown
## Detailed Directive Plan Created

**File**: `docs/plans/issue-{N}-plan.md`
**Length**: {X} lines (target: 80-150)

**Summary**: {2-3 sentence overview}

**Scope**:
- {N} files to CREATE
- {M} files to UPDATE

**Key References**:
- Mobile: `{file:lines}`
- Pattern: {detailed description}

**Requirements**: {X} comprehensive requirements listed

**Next Step**: Validate plan with `bash scripts/validate-plans.sh`, then trigger Jules.
```
