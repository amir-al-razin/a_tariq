#!/usr/bin/env bash
# Sprint Orchestration Script
# Used by local AI to execute sprint with conflict analysis and hybrid execution

set -euo pipefail

SPRINT_NUM="${1:-1}"
INTEGRATION_BRANCH="integration-sprint-${SPRINT_NUM}"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() { echo -e "${BLUE}[$(date +'%H:%M:%S')]${NC} $1"; }
success() { echo -e "${GREEN}✅${NC} $1"; }
warn() { echo -e "${YELLOW}⚠️${NC} $1"; }

# ─────────────────────────────────────────────────────────────────────────────
# STEP 1: Analyze Conflicts
# ─────────────────────────────────────────────────────────────────────────────

analyze_conflicts() {
  log "Analyzing file conflicts across all plans..."
  
  declare -A file_issues
  
  for plan in docs/plans/issue-*.md; do
    [ -f "$plan" ] || continue
    issue=$(basename "$plan" | grep -o '[0-9]*')
    
    # Extract files from plan
    files=$(sed -n '/^## Files to Create/,/^## Files to Modify/p; /^## Files to Modify/,/^## /p' "$plan" | \
            grep '^- `' | sed 's/^- `//;s/`.*$//' | grep -v '^$')
    
    while IFS= read -r file; do
      [ -z "$file" ] && continue
      if [ -n "${file_issues[$file]}" ]; then
        file_issues[$file]="${file_issues[$file]},#$issue"
      else
        file_issues[$file]="#$issue"
      fi
    done <<< "$files"
  done
  
  # Determine execution strategy
  echo ""
  log "Conflict Analysis Results:"
  echo ""
  
  for file in "${!file_issues[@]}"; do
    issues="${file_issues[$file]}"
    count=$(echo "$issues" | tr ',' '\n' | wc -l)
    if [ $count -gt 1 ]; then
      warn "Conflict: $file → $issues"
    fi
  done
  
  echo ""
  log "Execution Strategy:"
  echo ""
  echo "Serial Group 1: #16 → #17 → #18 (foundation)"
  echo "Parallel Group 2: #19, #20, #22 (screens)"
  echo "Serial: #21 (depends on #20)"
  echo "Parallel Group 3: #23, #24, #25 (pedagogy)"
  echo "Parallel Group 4: #26, #27, #28 (features)"
  echo "Serial: #29 (polish)"
  echo "Serial: #30 (validation)"
  echo ""
}

# ─────────────────────────────────────────────────────────────────────────────
# STEP 2: Execute Issues
# ─────────────────────────────────────────────────────────────────────────────

trigger_issue() {
  local issue=$1
  log "Triggering issue #$issue via Jules API..."
  bash scripts/trigger-jules.sh "$issue" "$INTEGRATION_BRANCH"
  success "Issue #$issue triggered"
}

execute_serial() {
  local issues=("$@")
  for issue in "${issues[@]}"; do
    trigger_issue "$issue"
    warn "Waiting for user notification (Jules done with #$issue)"
    read -p "Press Enter when Jules completes issue #$issue..."
  done
}

execute_parallel() {
  local issues=("$@")
  for issue in "${issues[@]}"; do
    trigger_issue "$issue"
  done
  warn "Waiting for user notification (All parallel issues done)"
  read -p "Press Enter when all parallel issues complete..."
}

# ─────────────────────────────────────────────────────────────────────────────
# MAIN EXECUTION
# ─────────────────────────────────────────────────────────────────────────────

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 Sprint $SPRINT_NUM Orchestration"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Analyze conflicts
analyze_conflicts

read -p "Proceed with execution? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  log "Execution cancelled"
  exit 0
fi

echo ""
log "Starting execution..."
echo ""

# Serial Group 1: Foundation
log "Phase 1: Foundation (Serial)"
execute_serial 16 17 18

# Parallel Group 2: Screens
log "Phase 2: Screens (Parallel)"
execute_parallel 19 20 22

# Serial: Volume 1 & 2
log "Phase 2b: Volume 1 & 2 (Serial)"
execute_serial 21

# Parallel Group 3: Pedagogy
log "Phase 3: Pedagogy Views (Parallel)"
execute_parallel 23 24 25

# Parallel Group 4: Features
log "Phase 4: Features (Parallel)"
execute_parallel 26 27 28

# Serial: Polish
log "Phase 5: Polish (Serial)"
execute_serial 29

# Serial: Validation
log "Phase 6: Validation (Serial)"
execute_serial 30

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
success "All issues triggered!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
log "Next steps:"
log "  1. Monitor Jules dashboard: https://jules.google.com/"
log "  2. Merge PRs as they complete"
log "  3. AI will auto-resolve conflicts"
log "  4. Review final integration branch"
echo ""
