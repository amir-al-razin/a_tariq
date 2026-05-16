# Issue #17: Migrate i18n from Mobile to Web

## Objective

Migrate the mobile app's i18n setup (react-i18next) to the web app's Paraglide system while maintaining complete key parity. The web app already has Paraglide configured, so we need to copy the translation keys from mobile and adapt the language switcher component for web.

This ensures consistent translations across mobile and web platforms. The mobile app uses react-i18next with JSON files, while the web uses Paraglide (a compile-time i18n solution). We need to maintain the same translation keys but adapt to Paraglide's structure.

## Requirements

### Translation Files
- Copy all keys from `apps/mobile/locales/en.json` to `apps/web/messages/en.json`
- Copy all keys from `apps/mobile/locales/bn.json` to `apps/web/messages/bn.json`
- Maintain exact key structure (nested objects)
- Preserve all translation strings exactly as they are in mobile

### Paraglide Configuration
- Update `apps/web/project.inlang/settings.json` if needed
- Ensure both `en` and `bn` locales are configured
- Default locale should be `en`

### Language Switcher Component
- Create web version of language switcher (mobile reference: `apps/mobile/components/LanguageSwitcher.tsx`)
- Toggle between English and Bangla
- Persist language preference in localStorage
- Use Paraglide's language switching API (not react-i18next)
- Match mobile design language

### RTL Support
- RTL should activate when Arabic content is displayed (not for Bangla/English)
- Modify `apps/web/src/routes/__root.tsx` to support dynamic `dir` attribute
- Arabic text should trigger `dir="rtl"`, English/Bangla should use `dir="ltr"`

### Font Support
- Add Noto Sans Bengali font for Bangla text
- Ensure proper font rendering for Bangla characters
- Configure in Tailwind (already has Lexend for English, Noto Sans Arabic for Arabic)

## Reference Implementation

**Mobile files to read:**
- `apps/mobile/i18n/index.ts` - i18n setup and language list
- `apps/mobile/locales/en.json` - English translations (complete key structure)
- `apps/mobile/locales/bn.json` - Bangla translations (complete key structure)
- `apps/mobile/components/LanguageSwitcher.tsx` - Language switcher UI (if exists)

**Key differences (Mobile vs Web):**
- Mobile: react-i18next → Web: Paraglide
- Mobile: `useTranslation()` hook → Web: Paraglide's `t()` function
- Mobile: `i18n.changeLanguage()` → Web: Paraglide's language switching

## Files to Create

- `apps/web/messages/en.json` - English translations (copy from mobile)
- `apps/web/messages/bn.json` - Bangla translations (copy from mobile)
- `apps/web/src/components/LanguageSwitcher.tsx` - Language switcher component
- `apps/web/src/hooks/useLanguage.ts` - Custom hook for language management

## Files to Modify

- `apps/web/project.inlang/settings.json` - Ensure en/bn locales configured
- `apps/web/src/routes/__root.tsx` - Add language provider and RTL support
- `apps/web/tailwind.config.js` - Add Noto Sans Bengali font (if not already present)

## Files NOT to Touch

- `apps/mobile/*` - Do not modify mobile app
- `apps/web/src/paraglide/*` - Auto-generated Paraglide files

## Validation Commands

```bash
# Type check
npx tsc --noEmit

# Dev server (manual test)
pnpm --filter web dev

# Test language switching in browser
# Test Bangla font rendering
# Test RTL with Arabic content
```

## Success Criteria

- ✅ All mobile i18n keys available in web messages
- ✅ Language switcher toggles EN ↔ BN
- ✅ Language preference persists in localStorage
- ✅ Bangla text renders with proper font
- ✅ RTL activates for Arabic content (not for EN/BN)
- ✅ No TypeScript errors
- ✅ Translation keys work in components

## Notes

- This is Phase 1 foundation work - screens will use these translations
- Paraglide is compile-time, so translations are type-safe
- Focus on key parity - exact same keys as mobile
- RTL is for Arabic content display, not for UI language
