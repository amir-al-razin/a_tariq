import { useLanguage } from './useLanguage'

export function useLanguageContent() {
  const { language } = useLanguage()

  const t_content = (enContent: string, bnContent?: string) => {
    if (language === 'bn' && bnContent) {
      return bnContent
    }
    return enContent
  }

  return { t_content }
}
