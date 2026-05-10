#!/usr/bin/env bash
# Trigger Jules AI agent via API
# Usage: ./scripts/trigger-jules.sh <issue-number> <integration-branch>
set -euo pipefail

# ─────────────────────────────────────────────────────────────────────────────
# CONFIGURATION
# ─────────────────────────────────────────────────────────────────────────────

JULES_API_KEY="${JULES_API_KEY:-AQ.Ab8RN6JeOhOJ0iP_OSVm4Z_yMK5l7u8GenBeJdnOYSb1hCQPLAYeah}"
JULES_API_URL="https://jules.google.com/api/v1/tasks"

# Get repository info
REPO_ROOT="$(git rev-parse --show-toplevel)"
REPO_NAME="$(basename "$REPO_ROOT")"
GIT_REMOTE="$(git remote get-url origin)"

# Parse GitHub org/repo from remote URL
if [[ "$GIT_REMOTE" =~ github.com[:/]([^/]+)/([^/.]+) ]]; then
  GITHUB_ORG="${BASH_REMATCH[1]}"
  GITHUB_REPO="${BASH_REMATCH[2]}"
else
  echo "❌ Could not parse GitHub org/repo from remote: $GIT_REMOTE"
  exit 1
fi

# ─────────────────────────────────────────────────────────────────────────────
# ARGUMENTS
# ─────────────────────────────────────────────────────────────────────────────

if [ $# -lt 2 ]; then
  echo "Usage: $0 <issue-number> <integration-branch>"
  echo ""
  echo "Example:"
  echo "  $0 7 integration-sprint-1"
  echo ""
  echo "This will:"
  echo "  - Read plan from: docs/plans/issue-7-plan.md"
  echo "  - Create branch: feat/issue-7"
  echo "  - Base from: integration-sprint-1"
  echo "  - Open PR to: integration-sprint-1"
  exit 1
fi

ISSUE_NUMBER="$1"
INTEGRATION_BRANCH="$2"
PLAN_FILE="docs/plans/issue-${ISSUE_NUMBER}-plan.md"
FEATURE_BRANCH="feat/issue-${ISSUE_NUMBER}"

# ─────────────────────────────────────────────────────────────────────────────
# VALIDATION
# ─────────────────────────────────────────────────────────────────────────────

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🤖 Triggering Jules AI Agent"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Repository:         $GITHUB_ORG/$GITHUB_REPO"
echo "Issue:              #$ISSUE_NUMBER"
echo "Plan file:          $PLAN_FILE"
echo "Integration branch: $INTEGRATION_BRANCH"
echo "Feature branch:     $FEATURE_BRANCH"
echo ""

# Check if plan file exists
if [ ! -f "$PLAN_FILE" ]; then
  echo "❌ Plan file not found: $PLAN_FILE"
  echo ""
  echo "Create the plan first using:"
  echo "  .claude/commands/plan.md with issue #$ISSUE_NUMBER"
  exit 1
fi

echo "✓ Plan file exists"

# Check if integration branch exists
if ! git ls-remote --heads origin "$INTEGRATION_BRANCH" | grep -q "$INTEGRATION_BRANCH"; then
  echo "❌ Integration branch not found: $INTEGRATION_BRANCH"
  echo ""
  echo "Create it first using:"
  echo "  bash scripts/worktree-jules-setup.sh $INTEGRATION_BRANCH"
  exit 1
fi

echo "✓ Integration branch exists"
echo ""

# ─────────────────────────────────────────────────────────────────────────────
# BUILD JULES PROMPT
# ─────────────────────────────────────────────────────────────────────────────

JULES_PROMPT="Read $PLAN_FILE and implement it exactly.
Follow all rules in AGENTS.md.
Read docs/design-system.md before building any UI component.
Branch from $INTEGRATION_BRANCH, branch name $FEATURE_BRANCH.
Run all validation commands listed in the plan before opening PR.
If blocked, stop and leave a detailed comment in the PR.
Open PR to $INTEGRATION_BRANCH when complete."

# ─────────────────────────────────────────────────────────────────────────────
# TRIGGER JULES API
# ─────────────────────────────────────────────────────────────────────────────

echo "🚀 Sending request to Jules API..."
echo ""

RESPONSE=$(curl -s -X POST "$JULES_API_URL" \
  -H "Authorization: Bearer $JULES_API_KEY" \
  -H "Content-Type: application/json" \
  -d @- <<EOF
{
  "prompt": "$JULES_PROMPT",
  "githubRepoContext": {
    "repo": "$GITHUB_ORG/$GITHUB_REPO",
    "startingBranch": "$INTEGRATION_BRANCH",
    "targetBranch": "$FEATURE_BRANCH"
  },
  "automationMode": "AUTO_CREATE_PR"
}
EOF
)

# ─────────────────────────────────────────────────────────────────────────────
# PARSE RESPONSE
# ─────────────────────────────────────────────────────────────────────────────

# Check if response contains task ID (basic validation)
if echo "$RESPONSE" | grep -q '"taskId"'; then
  TASK_ID=$(echo "$RESPONSE" | grep -o '"taskId":"[^"]*"' | cut -d'"' -f4)
  
  echo "✅ Jules task created successfully"
  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "📋 Task Details"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
  echo "Task ID:     $TASK_ID"
  echo "Issue:       #$ISSUE_NUMBER"
  echo "Branch:      $FEATURE_BRANCH"
  echo "Target:      $INTEGRATION_BRANCH"
  echo ""
  echo "🔍 Monitor progress:"
  echo "   https://jules.google.com/tasks/$TASK_ID"
  echo ""
  echo "📨 After Jules opens PR:"
  echo "   git fetch --all"
  echo "   git worktree add ../$REPO_NAME-wt/feat-issue-$ISSUE_NUMBER feat/issue-$ISSUE_NUMBER"
  echo "   cd ../$REPO_NAME-wt/feat-issue-$ISSUE_NUMBER"
  echo ""
else
  echo "❌ Failed to create Jules task"
  echo ""
  echo "Response:"
  echo "$RESPONSE"
  exit 1
fi
