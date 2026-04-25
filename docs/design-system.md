# Quranic Arabic App Design System (v1)

## Purpose
A modern, minimal, shadowless UI for focused Quranic Arabic learning.

## Non-Negotiable Visual Rules
- No shadows anywhere (`shadow-*` classes are disallowed).
- No extreme saturation; calm, readable contrast only.
- Two-color foundation only:
  - **Primary**: calm emerald-teal scale (`primary-50` to `primary-900`)
  - **Neutral**: warm manuscript-style gray scale (`neutral-50` to `neutral-900`)
- No extra decorative colors.
- Exceptions: status-only colors (`status.success`, `status.warning`, `status.danger`, `status.info`).

## Theme System
- Supports both **Light** and **Dark** themes.
- **Default theme is Light** on app start.
- User can switch theme via UI toggle.
- Use `dark:` variants for all components to guarantee parity.

## Layout + Styling Principles
- Minimal spacing rhythm, clean typography, clear hierarchy.
- Rounded corners are allowed; shadows and glow effects are not.
- Prefer borders and tonal contrast over depth effects.
- Keep interfaces quiet and distraction-free for study flow.

## Implementation Notes
- Tokens are defined in `tailwind.config.js` under `colors.primary`, `colors.neutral`, and `colors.status`.
- Use NativeWind utility classes with these tokens.
- Default app scaffold already applies this system in `App.tsx` and `components/ScreenContent.tsx`.
