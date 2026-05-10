#!/usr/bin/env bash
# Git Worktree Teardown for Jules PR Review Workflow
# Removes all worktree folders after sprint completion
set -euo pipefail

# ─────────────────────────────────────────────────────────────────────────────
# CONFIGURATION
# ─────────────────────────────────────────────────────────────────────────────

REPO_ROOT="$(git rev-parse --show-toplevel)"
WT_BASE="${REPO_ROOT}/../$(basename "$REPO_ROOT")-wt"

# ─────────────────────────────────────────────────────────────────────────────
# TEARDOWN
# ─────────────────────────────────────────────────────────────────────────────

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🧹 Git Worktree Teardown"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if [ ! -d "$WT_BASE" ]; then
  echo "✓ No worktree directory found at: $WT_BASE"
  echo "  Nothing to clean up."
  exit 0
fi

echo "📂 Worktree base: $WT_BASE"
echo ""
echo "🔍 Finding all worktrees..."

# List all worktrees (excluding main repo)
WORKTREES=$(git worktree list --porcelain | awk '/^worktree / {print $2}' | grep -v "^$REPO_ROOT$" || true)

if [ -z "$WORKTREES" ]; then
  echo "✓ No worktrees to remove"
else
  echo ""
  echo "📋 Worktrees to remove:"
  echo "$WORKTREES" | while read -r wt; do
    echo "   - $(basename "$wt")"
  done
  echo ""
  
  # Ask for confirmation
  read -p "⚠️  Remove all worktrees? [y/N] " -n 1 -r
  echo ""
  
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "🗑️  Removing worktrees..."
    echo "$WORKTREES" | while read -r wt; do
      echo "   Removing: $(basename "$wt")"
      git worktree remove "$wt" --force 2>/dev/null || true
    done
    
    # Remove the base directory if empty
    if [ -d "$WT_BASE" ] && [ -z "$(ls -A "$WT_BASE")" ]; then
      echo "   Removing empty directory: $WT_BASE"
      rmdir "$WT_BASE"
    fi
    
    echo ""
    echo "✅ Teardown complete"
  else
    echo ""
    echo "❌ Teardown cancelled"
    exit 1
  fi
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
