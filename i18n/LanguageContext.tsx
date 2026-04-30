import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n, { type AppLanguage } from './index';

const LANGUAGE_KEY = 'app.language.preference';

interface LanguageContextValue {
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => Promise<void>;
  /**
   * Pick the right content field based on active language.
   *
   * Usage:
   *   t_content(word.en, word.bn)         → shows bn when Bangla active
   *   t_content(item.en, item.bn)         → same pattern for any content field
   *   t_content(sentence.sentenceEn, sentence.sentenceBn)
   *
   * Always falls back to `en` if the localized string is missing.
   */
  t_content: (en: string, localized?: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'en',
  setLanguage: async () => {},
  t_content: (en) => en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<AppLanguage>('en');

  useEffect(() => {
    AsyncStorage.getItem(LANGUAGE_KEY).then((saved) => {
      if (saved === 'en' || saved === 'bn') {
        setLanguageState(saved);
        i18n.changeLanguage(saved);
      }
    });
  }, []);

  const setLanguage = async (lang: AppLanguage) => {
    setLanguageState(lang);
    await i18n.changeLanguage(lang);
    await AsyncStorage.setItem(LANGUAGE_KEY, lang);
  };

  const t_content = (en: string, localized?: string): string => {
    if (language !== 'en' && localized) return localized;
    return en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t_content }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
