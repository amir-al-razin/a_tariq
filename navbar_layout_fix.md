# Navbar Global Layout Fix Report

## Overview
The application's global layout regarding the navigation header has been updated as requested:
1. **Fixed Header**: In `Header.tsx`, the `<header>` element CSS classes were updated from `sticky top-0` to `fixed top-0 left-0 right-0 z-50`. This ensures the navbar remains fixed on top of the viewport at all times.
2. **Page Content Padding**: In `__root.tsx`, the top-level `<main>` element was updated with `pt-16` (`min-h-screen pt-16`), matching the navbar height (`h-16` / 64px). This ensures page content renders starting directly below the fixed header without overlap.

## Modified Files
- `apps/web/src/components/Header.tsx`
- `apps/web/src/routes/__root.tsx`
