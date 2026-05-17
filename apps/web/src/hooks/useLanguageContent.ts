import { useLanguage } from './useLanguage';

interface ContentProps {
  english: string;
  bangla?: string;
}

export function useLanguageContent() {
  const { language } = useLanguage();

  const getContent = ({ english, bangla }: ContentProps) => {
    if (language === 'bn' && bangla) {
      return bangla;
    }
    return english;
  };

  const t_content = (enContent: string, bnContent?: string) => {
    if (language === 'bn' && bnContent) {
      return bnContent;
    }
    return enContent;
  };

  return { getContent, t_content };
}
