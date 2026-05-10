#!/usr/bin/env bash
# Git Worktree Setup for Jules PR Review Workflow
# Creates worktree folders for reviewing Jules PRs without branch switching
set -euo pipefail

# ─────────────────────────────────────────────────────────────────────────────
# CONFIGURATION
# ─────────────────────────────────────────────────────────────────────────────

REPO_ROOT="$(git rev-parse --show-toplevel)"
WT_BASE="${REPO_ROOT}/../$(basename "$REPO_ROOT")-wt"
INTEGRATION_BRANCH="${1:-integration-sprint-1}"  # Pass sprint number as arg

# ─────────────────────────────────────────────────────────────────────────────
# SETUP
# ─────────────────────────────────────────────────────────────────────────────

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🌳 Git Worktree Setup for Jules PR Review"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Repository:         $REPO_ROOT"
echo "Worktree base:      $WT_BASE"
echo "Integration branch: $INTEGRATION_BRANCH"
echo ""

# Create worktree base directory if it doesn't exist
if [ ! -d "$WT_BASE" ]; then
  echo "📁 Creating worktree base directory: $WT_BASE"
  mkdir -p "$WT_BASE"
fi

# ─────────────────────────────────────────────────────────────────────────────
# CREATE INTEGRATION BRANCH WORKTREE
# ─────────────────────────────────────────────────────────────────────────────

INTEGRATION_WT="$WT_BASE/$INTEGRATION_BRANCH"

if [ -d "$INTEGRATION_WT" ]; then
  echo "✓ Integration worktree already exists: $INTEGRATION_WT"
else
  echo "🔧 Creating integration branch worktree..."
  
  # Check if integration branch exists remotely
  if git ls-remote --heads origin "$INTEGRATION_BRANCH" | grep -q "$INTEGRATION_BRANCH"; then
    echo "  → Branch exists remotely, checking out..."
    git worktree add "$INTEGRATION_WT" "$INTEGRATION_BRANCH"
  else
    echo "  → Branch doesn't exist, creating from main..."
    git worktree add -b "$INTEGRATION_BRANCH" "$INTEGRATION_WT" main
    echo "  → Pushing to remote..."
    git -C "$INTEGRATION_WT" push -u origin "$INTEGRATION_BRANCH"
  fi
  
  echo "✓ Integration worktree created: $INTEGRATION_WT"
fi

# ─────────────────────────────────────────────────────────────────────────────
# SUMMARY
# ─────────────────────────────────────────────────────────────────────────────

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Worktree Setup Complete"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📂 Worktree Structure:"
echo "   Main repo:        $REPO_ROOT"
echo "   Integration:      $INTEGRATION_WT"
echo ""
echo "🔄 Next Steps:"
echo "   1. Trigger Jules agents to create PRs"
echo "   2. After Jules opens PRs, add worktrees for review:"
echo "      git fetch --all"
echo "      git worktree add $WT_BASE/feat-issue-07 feat/issue-07"
echo "   3. Review PRs in their own folders (no branch switching)"
echo "   4. Merge passing PRs to $INTEGRATION_BRANCH"
echo ""
echo "🧹 Cleanup after sprint:"
echo "   bash scripts/worktree-jules-teardown.sh"
echo ""
