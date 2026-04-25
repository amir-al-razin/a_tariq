# Commit Convention (LLM-Friendly)

Use small, scoped commits in this order:

1. `chore:` dependencies / tooling / config compatibility
2. `feat(ui):` design tokens, typography, visual system, docs
3. `feat(app):` navigation, screen flow, state logic
4. `fix:` bug-only patch (no unrelated refactors)

## Message format
- `<type>(optional-scope): short imperative summary`
- Keep summary under ~72 chars.

## Examples
- `chore: align Expo-compatible package versions`
- `feat(ui): establish typography and color tokens`
- `feat(app): add bottom tabs and home stack flow`
- `fix(theme): persist dark mode across app restarts`

## Rules
- One feature area per commit.
- Include related lockfile changes with dependency commits.
- Run lint before committing when code changed.
