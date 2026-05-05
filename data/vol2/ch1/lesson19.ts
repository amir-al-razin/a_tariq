import type { LessonData } from '../../curriculum';

export const lesson19: LessonData = {
  darsNumber: 19,
  chunks: [
    {
      id: '2-19-1',
      type: 'vocabulary',
      titleEn: 'Form III Masdars (بَابُ الْمُفَاعَلَة)',
      titleAr: 'مَصَادِر بَابِ الْمُفَاعَلَة',
      payload: {
        words: [
          { id: 1, ar: 'الْمُسَاعَدَةُ', romanized: "al-musā\'adah", en: 'Helping', emoji: '🤝' },
          { id: 2, ar: 'الْمُهَاجَرَةُ', romanized: 'al-muhājarah', en: 'Migrating', emoji: '✈️' },
          {
            id: 3,
            ar: 'الْمُقَاتَلَةُ / الْقِتَالُ',
            romanized: 'al-muqātalah / al-qitāl',
            en: 'Fighting / battling',
            emoji: '⚔️',
          },
          {
            id: 4,
            ar: 'الْمُشَاوَرَةُ',
            romanized: 'al-mushāwarah',
            en: 'Consulting',
            emoji: '💬',
          },
          { id: 5, ar: 'الْمُسَافَرَةُ', romanized: 'al-musāfarah', en: 'Traveling', emoji: '🧳' },
          {
            id: 6,
            ar: 'الْمُجَاهَدَةُ / الْجِهَادُ',
            romanized: 'al-mujāhadah / al-jihād',
            en: 'Striving / Jihad',
            emoji: '🌟',
          },
          {
            id: 7,
            ar: 'الْمُجَادَلَةُ / الْجِدَالُ',
            romanized: 'al-mujādalah / al-jidāl',
            en: 'Arguing',
            emoji: '🗣️',
          },
          { id: 8, ar: 'الْعَوْدُ', romanized: "al-\'awd", en: 'Returning', emoji: '↩️' },
          { id: 9, ar: 'شَابٌّ', romanized: 'shābb', en: 'Young man', emoji: '👦' },
          { id: 10, ar: 'أَمْرٌ', romanized: 'amr', en: 'Matter / affair', emoji: '📋' },
          { id: 11, ar: 'عِزٌّ', romanized: "'izz", en: 'Honor / glory', emoji: '🏆' },
          { id: 12, ar: 'كَرَامَةٌ', romanized: 'karāmah', en: 'Dignity', emoji: '👑' },
          {
            id: 13,
            ar: 'بِإِذْنِ اللهِ',
            romanized: 'bi-idhni llāh',
            en: 'By the will of Allah',
            emoji: '🕌',
          },
          {
            id: 14,
            ar: 'بِالنَّفْسِ وَالْمَالِ',
            romanized: 'bi-n-nafsi wa-l-māl',
            en: 'With life and wealth',
            emoji: '💪',
          },
        ],
      },
    },
    {
      id: '2-19-2',
      type: 'masdar_factory',
      titleEn: 'Form III Verb: سَاعَدَ (to help)',
      titleAr: 'بَابُ الْمُفَاعَلَة — سَاعَدَ يُسَاعِدُ',
      payload: {
        baabLabel: 'بَابُ الْمُفَاعَلَةِ (Form III)',
        instruction:
          'Form III adds a long vowel after the first root letter. Present tense uses يُفَاعِلُ pattern.',
        masdarRows: [
          {
            masdar: 'الْمُسَاعَدَةُ',
            masdarEn: 'to help',
            past: 'سَاعَدَ',
            present: 'يُسَاعِدُ',
            imperative: 'سَاعِدْ',
            prohibitive: 'لَا تُسَاعِدْ',
          },
          {
            masdar: 'الْمُهَاجَرَةُ',
            masdarEn: 'to migrate',
            past: 'هَاجَرَ',
            present: 'يُهَاجِرُ',
            imperative: 'هَاجِرْ',
            prohibitive: 'لَا تُهَاجِرْ',
          },
          {
            masdar: 'الْمُقَاتَلَةُ',
            masdarEn: 'to fight',
            past: 'قَاتَلَ',
            present: 'يُقَاتِلُ',
            imperative: 'قَاتِلْ',
            prohibitive: 'لَا تُقَاتِلْ',
          },
          {
            masdar: 'الْمُسَافَرَةُ',
            masdarEn: 'to travel',
            past: 'سَافَرَ',
            present: 'يُسَافِرُ',
            imperative: 'سَافِرْ',
            prohibitive: 'لَا تُسَافِرْ',
          },
          {
            masdar: 'الْمُجَاهَدَةُ',
            masdarEn: 'to strive',
            past: 'جَاهَدَ',
            present: 'يُجَاهِدُ',
            imperative: 'جَاهِدْ',
            prohibitive: 'لَا تُجَاهِدْ',
          },
          {
            masdar: 'الْمُجَادَلَةُ',
            masdarEn: 'to argue',
            past: 'جَادَلَ',
            present: 'يُجَادِلُ',
            imperative: 'جَادِلْ',
            prohibitive: 'لَا تُجَادِلْ',
          },
        ],
      },
    },
    {
      id: '2-19-3',
      type: 'paragraph',
      titleEn: 'Reading — Form III Verbs in Context',
      titleAr: 'قِرَاءَة — بَابُ الْمُفَاعَلَة فِي الْجُمَل',
      payload: {
        paragraphs: [
          {
            lines: [
              'هَاجَرَ رَسُولُ اللهِ ﷺ مِنْ مَكَّةَ إِلَى الْمَدِينَةِ الْمُنَوَّرَةِ.',
              'هَاجَرَ مَعَهُ أَبُو بَكْرٍ رَضِيَ اللهُ عَنْهُ.',
              'أَيُّهَا الْمُسْلِمُ! هَاجِرْ مِنْ أَرْضِ الْكُفْرِ إِلَى أَرْضِ الْإِيمَانِ.',
            ],
            translationEn:
              'The Messenger of Allah ﷺ migrated from Mecca to Al-Madinah Al-Munawwarah. Abu Bakr (RA) migrated with him. O Muslim! Migrate from the land of disbelief to the land of faith.',
          },
          {
            lines: [
              'أَيُّهَا الشَّابُّ الْمُسْلِمُ! لِمَ لَا تُقَاتِلُ فِي سَبِيلِ اللهِ؟',
              'قَاتِلْ فِي سَبِيلِ اللهِ لِتَدْخُلَ الْجَنَّةَ.',
              'جَاهِدْ فِي سَبِيلِ اللهِ بِنَفْسِكَ وَمَالِكَ.',
              'فَإِنَّ الْجِهَادَ طَرِيقُ الْجَنَّةِ.',
            ],
            translationEn:
              'O young Muslim man! Why do you not fight in the path of Allah? Fight in the path of Allah so that you may enter Paradise. Strive in the path of Allah with your life and your wealth. For indeed, Jihad is the path to Paradise.',
          },
          {
            lines: [
              'سَافَرَ أَبُو مَاجِدٍ إِلَى الْعَاصِمَةِ، هُوَ يُرِيدُ أَنْ يَعُودَ بَعْدَ أُسْبُوعٍ.',
              'عَادَ الْمُسَافِرُ إِلَى وَطَنِهِ بَعْدَ سَنَةٍ.',
              'بِإِذْنِ اللهِ سَيَعُودُ إِلَى الْأُمَّةِ الْإِسْلَامِيَّةِ عِزُّهَا وَكَرَامَتُهَا.',
              'أَيُّهَا الْوَلَدُ! لَا تَعُدْ إِلَى هَذَا الْأَمْرِ أَبَدًا.',
            ],
            translationEn:
              'Abu Majid traveled to the capital; he wants to return after a week. The traveler returned to his homeland after a year. By the will of Allah, its honor and dignity will return to the Islamic Ummah. O boy! Never return to this matter ever again.',
          },
          {
            lines: [
              'يَا رَاشِدُ! أُرِيدُ أَنْ أُسَاعِدَكَ فِي هَذَا الْأَمْرِ.',
              'لَا تُسَافِرْ يَوْمَ الْجُمُعَةِ أَبَدًا بِلَا رَفِيقٍ.',
              'تَعِبَ الْفَلَّاحُ مِنَ الْعَمَلِ، فَاسْتَرَاحَ قَلِيلًا، ثُمَّ عَادَ إِلَى عَمَلِهِ مِنْ جَدِيدٍ.',
              'دَخَلَتْ بِنْتُ فَاطِمَةَ الْمَطْبَخَ لِتُسَاعِدَ أُمَّهَا فِي عَمَلِ الْمَطْبَخِ.',
              'هِيَ تُسَاعِدُ أُمَّهَا فِي عَمَلِ الْمَطْبَخِ كُلَّ يَوْمٍ.',
            ],
            translationEn:
              "O Rashid! I want to help you in this matter. Do not travel on Friday ever without a companion. The farmer got tired from work, so he rested a little, then returned to his work anew. Fatima's daughter entered the kitchen to help her mother with the kitchen work. She helps her mother in the kitchen work every day.",
          },
          {
            lines: [
              'أَيُّهَا الْوَلَدُ الطَّيِّبُ! لَا تُجَادِلْ أَحَدًا أَبَدًا.',
              'الرَّجُلُ الصَّالِحُ يُطِيعُ الْعَالِمَ وَيُسَاعِدُ الْمُحْتَاجَ وَلَا يُرِيدُ مِنْ أَحَدٍ جَزَاءً وَلَا شُكُورًا.',
              'إِنِّي أُرِيدُ أَنْ أُهَاجِرَ إِلَى اللهِ وَرَسُولِهِ.',
            ],
            translationEn:
              'O good boy! Do not argue with anyone ever. The righteous man obeys the scholar and helps the needy, and does not want reward or thanks from anyone. Indeed, I want to migrate to Allah and His Messenger.',
          },
        ],
      },
    },
  ],
};
