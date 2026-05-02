# TypeScript Troubleshooting Rules

**1. The Problem:**
Expo (Metro) bundler often crashes with vague `SyntaxError` messages (like "Unexpected token") when there are syntax mistakes such as unescaped quotes or unterminated strings in data files.

**2. The Command:**
Always run the following command to detect project-wide errors without building:
`npx tsc --noEmit`

**3. The Technique:**
- **Run the command** in your terminal whenever you encounter a fatal bundler crash.
- **Look for Syntax Errors first**: Pay attention to errors starting with `TS100` (e.g., `TS1002: Unterminated string literal` or `TS1005: ',' expected`). These are the critical syntax issues that break the Expo bundler.
- **Fix Type Errors**: After fixing syntax errors, look at other TS errors to maintain type safety across your components and data definitions.
- **Verify**: Re-run the command until it completes with 0 errors before attempting to bundle or start the Expo server again.


# Never use fsWrite on a file that already exists and has working code in it.

fsWrite is for creating new files. strReplace is for editing existing files. That distinction is the entire answer.

When I use strReplace, I have to match the exact existing text — so if the file has been changed, the replacement fails visibly and loudly. Nothing is silently lost. When I use fsWrite, I overwrite everything with whatever I think the file should contain, and if I'm wrong, you lose work with no warning.

What you should do when you see me reach for fsWrite on an existing file

Stop me. Ask: "Why are you rewriting this file instead of editing it?" If I can't give a good answer — if the reason is "the strReplace kept failing" or "it was getting complicated" — that's the exact moment to slow down, read the current file state carefully, and do targeted edits instead.
