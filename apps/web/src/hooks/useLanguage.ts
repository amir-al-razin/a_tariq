import { useEffect, useState, useCallback } from 'react'
import { getLocale, setLocale } from '#/paraglide/runtime'

export type AvailableLanguageTag = 'en' | 'bn' | 'ar'

const LANGUAGE_KEY = 'app_language'
const LANGUAGE_EVENT = 'tariq_language_change'

function getInitialLanguage(): AvailableLanguageTag {
  if (typeof window !== 'undefined') {
    try {
      const stored = window.localStorage.getItem(LANGUAGE_KEY) as AvailableLanguageTag | null
      if (stored === 'en' || stored === 'bn' || stored === 'ar') {
        return stored
      }
    } catch {
      // ignore
    }
  }
  try {
    const locale = getLocale() as AvailableLanguageTag
    if (locale === 'en' || locale === 'bn' || locale === 'ar') {
      return locale
    }
  } catch {
    // ignore
  }
  return 'en'
}

export function useLanguage() {
  const [language, setLanguage] = useState<AvailableLanguageTag>(getInitialLanguage)

  useEffect(() => {
    const handleSync = (e: Event) => {
      const customEvent = e as CustomEvent<AvailableLanguageTag>
      if (customEvent.detail && (customEvent.detail === 'en' || customEvent.detail === 'bn' || customEvent.detail === 'ar')) {
        setLanguage(customEvent.detail)
      }
    }

    window.addEventListener(LANGUAGE_EVENT, handleSync)
    return () => {
      window.removeEventListener(LANGUAGE_EVENT, handleSync)
    }
  }, [])

  const changeLanguage = useCallback((lang: AvailableLanguageTag) => {
    try {
      window.localStorage.setItem(LANGUAGE_KEY, lang)
      window.localStorage.setItem('PARAGLIDE_LOCALE', lang)
    } catch (e) {
      console.warn('Failed to save language preference to localStorage', e)
    }

    try {
      setLocale(lang, { reload: false })
    } catch {
      // ignore
    }

    setLanguage(lang)
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(LANGUAGE_EVENT, { detail: lang }))
    }
  }, [])

  return {
    language,
    changeLanguage,
  }
}

