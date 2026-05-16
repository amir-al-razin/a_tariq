import { useEffect } from 'react'
import { getLocale, setLocale } from '#/paraglide/runtime'

type AvailableLanguageTag = 'en' | 'bn' | 'ar';

const LANGUAGE_KEY = 'app_language'

export function useLanguage() {
  const currentLocale = getLocale()

  // Initialize language from localStorage on mount
  useEffect(() => {
    try {
      const storedLang = window.localStorage.getItem(LANGUAGE_KEY) as AvailableLanguageTag | null
      if (storedLang && storedLang !== currentLocale) {
        setLocale(storedLang)
      }
    } catch (e) {
      console.warn('Failed to access localStorage for language preference', e)
    }
  }, [currentLocale])

  const changeLanguage = (lang: AvailableLanguageTag) => {
    try {
      window.localStorage.setItem(LANGUAGE_KEY, lang)
    } catch (e) {
      console.warn('Failed to save language preference to localStorage', e)
    }
    setLocale(lang)
  }

  return {
    language: currentLocale,
    changeLanguage,
  }
}
