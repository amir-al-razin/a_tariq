#!/usr/bin/env bash
# Trigger Jules AI agent via API
# Usage: ./scripts/trigger-jules.sh <issue-number> <integration-branch>
set -euo pipefail

# ─────────────────────────────────────────────────────────────────────────────
# CONFIGURATION
# ─────────────────────────────────────────────────────────────────────────────

JULES_API_KEY="${JULES_API_KEY:-AQ.Ab8RN6JeOhOJ0iP_OSVm4Z_yMK5l7u8GenBeJdnOYSb1hCQPLA}"
JULES_API_URL="https://jules.googleapis.com/v1alpha/sessions"

# Get repository info
REPO_ROOT="$(git rev-parse --show-toplevel)"
REPO_NAME="$(basename "$REPO_ROOT")"
GIT_REMOTE="$(git remote get-url origin)"

# Parse GitHub org/repo from remote URL
if [[ "$GIT_REMOTE" =~ github.com[:/]([^/]+)/([^/.]+) ]]; then
  GITHUB_ORG="${BASH_REMATCH[1]}"
  GITHUB_REPO="${BASH_REMATCH[2]}"
  
  # Handle repo name mismatch (local: tariq, Jules: a_tariq)
  if [ "$GITHUB_REPO" = "tariq" ]; then
    GITHUB_REPO="a_tariq"
  fi
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

# Read the plan file content
PLAN_CONTENT=$(cat "$PLAN_FILE")

# Build prompt with embedded plan content
JULES_PROMPT="# Implementation Plan for Issue #$ISSUE_NUMBER

$PLAN_CONTENT

---

# Execution Instructions

Follow all rules in AGENTS.md.
Read docs/design-system.md before building any UI component (if applicable).
Branch from $INTEGRATION_BRANCH, branch name $FEATURE_BRANCH.
Run all validation commands listed in the plan before opening PR.
If blocked, stop and leave a detailed comment in the PR.
Open PR to $INTEGRATION_BRANCH when complete."

# Get source name (format: sources/github/owner/repo)
SOURCE_NAME="sources/github/$GITHUB_ORG/$GITHUB_REPO"

# ─────────────────────────────────────────────────────────────────────────────
# TRIGGER JULES API
# ─────────────────────────────────────────────────────────────────────────────

echo "🚀 Sending request to Jules API..."
echo ""

# Create JSON payload with proper escaping using jq
JSON_PAYLOAD=$(jq -n \
  --arg prompt "$JULES_PROMPT" \
  --arg source "$SOURCE_NAME" \
  --arg branch "$INTEGRATION_BRANCH" \
  --arg title "Issue #$ISSUE_NUMBER: $FEATURE_BRANCH" \
  '{
    prompt: $prompt,
    sourceContext: {
      source: $source,
      githubRepoContext: {
        startingBranch: $branch
      }
    },
    automationMode: "AUTO_CREATE_PR",
    title: $title
  }')

RESPONSE=$(curl -s -X POST "$JULES_API_URL" \
  -H "X-Goog-Api-Key: $JULES_API_KEY" \
  -H "Content-Type: application/json" \
  -d "$JSON_PAYLOAD")

# ─────────────────────────────────────────────────────────────────────────────
# PARSE RESPONSE
# ─────────────────────────────────────────────────────────────────────────────

# Check if response contains session ID (basic validation)
if echo "$RESPONSE" | grep -q '"id"'; then
  SESSION_ID=$(echo "$RESPONSE" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
  
  echo "✅ Jules session created successfully"
  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "📋 Session Details"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
  echo "Session ID:  $SESSION_ID"
  echo "Issue:       #$ISSUE_NUMBER"
  echo "Branch:      $FEATURE_BRANCH"
  echo "Target:      $INTEGRATION_BRANCH"
  echo ""
  echo "🔍 Monitor progress:"
  echo "   https://jules.google.com/sessions/$SESSION_ID"
  echo ""
  echo "📨 After Jules opens PR:"
  echo "   git fetch --all"
  echo "   git worktree add ../$REPO_NAME-wt/feat-issue-$ISSUE_NUMBER feat/issue-$ISSUE_NUMBER"
  echo "   cd ../$REPO_NAME-wt/feat-issue-$ISSUE_NUMBER"
  echo ""
else
  echo "❌ Failed to create Jules session"
  echo ""
  echo "Response:"
  echo "$RESPONSE"
  exit 1
fi
