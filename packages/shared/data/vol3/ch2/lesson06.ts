import type { LessonData } from '../../curriculum';

export const lesson06: LessonData = {
  darsNumber: 6,
  chunks: [
    {
      id: '1',
      type: 'verb_table',
      titleEn: "Muda'af Verbs - Form IV (To Love)",
      titleAr: 'الْفِعْلُ الْمُضَاعَفُ - بَابُ الْإِفْعَالِ (اَلْإِحْبَابُ)',
      payload: {
        verbTense: 'past',
        verbTable: [
          {
            root: 'ح-ب-ب',
            meaning: 'To love',
            he: 'أَحَبَّ',
            she: 'أَحَبَّتْ',
            youM: 'أَحْبَبْتَ',
            youF: 'أَحْبَبْتِ',
            i: 'أَحْبَبْتُ',
          },
        ],
      },
    },
    {
      id: '2',
      type: 'verb_table',
      titleEn: 'Present/Future & Imperative',
      titleAr: 'الْمُضَارِعُ وَالْأَمْرُ',
      payload: {
        verbTense: 'present',
        verbTable: [
          {
            root: 'ح-ب-ب',
            meaning: 'To love',
            he: 'يُحِبُّ',
            she: 'تُحِبُّ',
            youM: 'تُحِبُّ',
            youF: 'تُحِبِّيْنَ',
            i: 'أُحِبُّ',
          },
        ],
      },
    },
    {
      id: '3',
      type: 'masdar_factory',
      titleEn: "Masdar Factory: Form IV Muda'af",
      titleAr: 'مَصْنَع المَصْدَر: بَابُ الْإِفْعَالِ الْمُضَاعَفُ',
      payload: {
        masdarRows: [
          {
            masdar: 'اَلْإِعْدَادُ',
            masdarEn: 'To prepare',
            past: 'أَعَدَّ',
            present: 'يُعِدُّ',
            imperative: 'أَعِدَّ',
            prohibitive: 'لَا تُعِدَّ',
          },
          {
            masdar: 'اَلْإِذْلَالُ',
            masdarEn: 'To humiliate',
            past: 'أَذَلَّ',
            present: 'يُذِلُّ',
            imperative: 'أَذِلَّ',
            prohibitive: 'لَا تُذِلَّ',
          },
          {
            masdar: 'اَلْإِعْزَازُ',
            masdarEn: 'To honor',
            past: 'أَعَزَّ',
            present: 'يُعِزُّ',
            imperative: 'أَعِزَّ',
            prohibitive: 'لَا تُعِزَّ',
          },
          {
            masdar: 'اَلْإِتْمَامُ',
            masdarEn: 'To complete',
            past: 'أَتَمَّ',
            present: 'يُتِمُّ',
            imperative: 'أَتِمَّ',
            prohibitive: 'لَا تُتِمَّ',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'vocabulary',
      titleEn: 'Vocabulary',
      titleAr: 'المُفْرَدَاتُ',
      payload: {
        words: [
          { id: 1, ar: 'اَلْإِنْذَارُ', romanized: 'al-indhār', en: 'To warn', emoji: '⚠️' },
          {
            id: 2,
            ar: 'اَلتَّبْشِيْرُ',
            romanized: 'at-tabshīr',
            en: 'To give glad tidings',
            emoji: '🎉',
          },
          { id: 3, ar: 'قَوْمٌ', romanized: 'qawm', en: 'Nation / People', emoji: '🌍' },
          { id: 4, ar: 'فَطُوْرٌ', romanized: 'faṭūr', en: 'Breakfast / Iftar', emoji: '🥞' },
          { id: 5, ar: 'ظَنَّ', romanized: 'ẓanna', en: 'To think / assume', emoji: '🤔' },
        ],
      },
    },
    {
      id: '5',
      type: 'paragraph',
      titleEn: 'Reading Practices',
      titleAr: 'القِرَاءَةُ',
      payload: {
        paragraphs: [
          {
            titleEn: 'Perfecting the Religion',
            lines: [
              'قَالَ اللّٰهُ تَعَالَى: اَلْيَوْمَ أَكْمَلْتُ لَكُمْ دِيْنَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي.',
              'اَللّٰهُمَّ أَتْمِمْ عَلَيْنَا نِعْمَتَكَ - إِنِّي أُحِبُّ اللّٰهَ وَرَسُوْلَهُ، وَأُحِبُّ اللّٰهَ وَرَسُوْلَهُ فَوْقَ كُلِّ حُبٍّ - أُحِبُّ أَنْ أُجَاهِدَ فِي سَبِيْلِ اللّٰهِ.',
            ],
            translationEn:
              'Allah the Exalted said: "This day I have perfected for you your religion and completed upon you My favor." O Allah, complete Your favor upon us - Indeed, I love Allah and His Messenger, and I love Allah and His Messenger above every love - I love to strive in the path of Allah.',
          },
          {
            titleEn: 'Honor and Warning',
            lines: [
              'أَعَزَّنَا اللّٰهُ بِالْإِسْلَامِ - أَمَرَ اللّٰهُ رَسُوْلَهُ أَنْ يَدْعُوَ النَّاسَ إِلَى اللّٰهِ، فَخَرَجَ رَسُوْلُ اللّٰهِ لِيَدْعُوَ أَهْلَ مَكَّةَ إِلَى اللّٰهِ، قَامَ رَسُوْلُ اللّٰهِ عَلَى الصَّفَا وَأَنْذَرَهُمْ وَبَشَّرَهُمْ.',
              'أَرْسَلَ اللّٰهُ إِلَى كُلِّ قَوْمٍ رَسُوْلًا لِيُنْذِرَهُمْ مِنْ عَذَابِ اللّٰهِ. كَانَ فِي كُلِّ قَوْمٍ رَسُوْلٌ أَنْذَرَهُمْ.',
            ],
            translationEn:
              'Allah has honored us with Islam - Allah commanded His Messenger to call the people to Allah, so the Messenger of Allah went out to call the people of Makkah to Allah, the Messenger of Allah stood upon As-Safa and warned them and gave them glad tidings. Allah sent a messenger to every nation to warn them of the punishment of Allah. In every nation there was a messenger who warned them.',
          },
          {
            titleEn: 'Preparation and Love',
            lines: [
              'قَالَتِ الْأُمُّ لِأَوْلَادِهَا: أَدْخُلُ الْآنَ الْمَطْبَخَ لِأُعِدَّ لَكُمْ طَعَامَ الْغَدَا - أُمُّنَا تُعِدُّ لَنَا الْفَطُوْرَ كُلَّ صَبَاحٍ.',
              'أَحْبَبْتُكَ أَيُّهَا الرَّجُلُ الصَّالِحُ! لِوَجْهِ اللّٰهِ - أُحِبُّ أَنْ أُجَاهِدَ فِي سَبِيْلِ اللّٰهِ.',
            ],
            translationEn:
              'The mother said to her children: I am entering the kitchen now to prepare lunch for you - Our mother prepares breakfast for us every morning. I loved you, O righteous man! For the sake of Allah - I love to strive in the path of Allah.',
          },
        ],
      },
    },
    {
      id: '6',
      type: 'tarkeeb',
      titleEn: 'Grammar Rule: Effect of ظَنَّ (To think)',
      titleAr: 'قَاعِدَةٌ: تَأْثِيْرُ (ظَنَّ)',
      payload: {
        tarkeeb: [
          {
            sentence: 'ظَنَنْتُ رَاشِدًا صَادِقًا',
            sentenceEn: 'I thought Rashid was truthful',
            type: 'complete',
            tree: [
              {
                label: 'فِعْلٌ + فَاعِلٌ',
                labelEn: 'Verb + Subject (I thought)',
                text: 'ظَنَنْتُ',
              },
              {
                label: 'مَفْعُولٌ بِهِ أَوَّلٌ',
                labelEn: 'First Object (Rashid)',
                text: 'رَاشِدًا',
              },
              {
                label: 'مَفْعُولٌ بِهِ ثَانٍ',
                labelEn: 'Second Object (truthful)',
                text: 'صَادِقًا',
              },
            ],
          },
        ],
      },
    },
  ],
};
