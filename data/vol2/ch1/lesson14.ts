import type { LessonData } from '../../curriculum';

export const lesson14: LessonData = {
  darsNumber: 14,
  chunks: [
    {
      id: '2-14-1',
      type: 'vocabulary',
      titleEn: 'Form II Masdars (بَابُ التَّفْعِيل)',
      titleAr: 'مَصَادِر بَابِ التَّفْعِيل',
      payload: {
        words: [
          { id: 1, ar: 'التَّعْلِيمُ', romanized: "at-ta\'līm", en: 'Teaching', emoji: '📚' },
          { id: 2, ar: 'التَّنْظِيفُ', romanized: 'at-tanẓīf', en: 'Cleaning', emoji: '🧹' },
          {
            id: 3,
            ar: 'التَّنْوِيرُ',
            romanized: 'at-tanwīr',
            en: 'Illuminating / Enlightening',
            emoji: '💡',
          },
          {
            id: 4,
            ar: 'السَّلَامُ',
            romanized: 'as-salām',
            en: 'Greeting / Saying Salam',
            emoji: '🤝',
          },
          { id: 5, ar: 'الْكَلَامُ', romanized: 'al-kalām', en: 'Speaking', emoji: '🗣️' },
          {
            id: 6,
            ar: 'التَّصْدِيقُ',
            romanized: 'at-taṣdīq',
            en: 'Believing / Affirming',
            emoji: '✅',
          },
          {
            id: 7,
            ar: 'التَّكْذِيبُ',
            romanized: 'at-takdhīb',
            en: 'Denying / Considering false',
            emoji: '❌',
          },
          { id: 8, ar: 'شَيْءٌ', romanized: "shay'", en: 'Thing', emoji: '📦' },
        ],
      },
    },
    {
      id: '2-14-2',
      type: 'vocabulary',
      titleEn: 'Additional Vocabulary',
      titleAr: 'مُفْرَدَات إِضَافِيَّة',
      payload: {
        words: [
          { id: 1, ar: 'الطَّيْرُ', romanized: 'aṭ-ṭayr', en: 'Birds (collective)', emoji: '🐦' },
          { id: 2, ar: 'طَائِرٌ', romanized: "ṭā\'ir", en: 'A bird', emoji: '🦅' },
          { id: 3, ar: 'النَّحْلُ', romanized: 'an-naḥl', en: 'Bees', emoji: '🐝' },
          { id: 4, ar: 'أَصْحَابٌ', romanized: 'aṣḥāb', en: 'Companions', emoji: '👥' },
          {
            id: 5,
            ar: 'لِهِدَايَةِ الْعَالَمِ',
            romanized: "li-hidāyati l-\'ālam",
            en: 'For the guidance of the world',
            emoji: '🌍',
          },
        ],
      },
    },
    {
      id: '2-14-3',
      type: 'masdar_factory',
      titleEn: 'Form II Verb: عَلَّمَ (to teach)',
      titleAr: 'بَابُ التَّفْعِيل — عَلَّمَ يُعَلِّمُ',
      payload: {
        baabLabel: 'بَابُ التَّفْعِيلِ (Form II)',
        instruction:
          'Form II doubles the middle root letter. Present tense uses يُفَعِّلُ pattern.',
        masdarRows: [
          {
            masdar: 'التَّعْلِيمُ',
            masdarEn: 'to teach',
            past: 'عَلَّمَ',
            present: 'يُعَلِّمُ',
            imperative: 'عَلِّمْ',
            prohibitive: 'لَا تُعَلِّمْ',
          },
          {
            masdar: 'التَّنْظِيفُ',
            masdarEn: 'to clean',
            past: 'نَظَّفَ',
            present: 'يُنَظِّفُ',
            imperative: 'نَظِّفْ',
            prohibitive: 'لَا تُنَظِّفْ',
          },
          {
            masdar: 'التَّنْوِيرُ',
            masdarEn: 'to illuminate',
            past: 'نَوَّرَ',
            present: 'يُنَوِّرُ',
            imperative: 'نَوِّرْ',
            prohibitive: 'لَا تُنَوِّرْ',
          },
          {
            masdar: 'التَّصْدِيقُ',
            masdarEn: 'to affirm / believe',
            past: 'صَدَّقَ',
            present: 'يُصَدِّقُ',
            imperative: 'صَدِّقْ',
            prohibitive: 'لَا تُصَدِّقْ',
          },
          {
            masdar: 'التَّكْذِيبُ',
            masdarEn: 'to deny / consider false',
            past: 'كَذَّبَ',
            present: 'يُكَذِّبُ',
            imperative: 'كَذِّبْ',
            prohibitive: 'لَا تُكَذِّبْ',
          },
          {
            masdar: 'السَّلَامُ',
            masdarEn: 'to greet / say salam',
            past: 'سَلَّمَ',
            present: 'يُسَلِّمُ',
            imperative: 'سَلِّمْ',
            prohibitive: 'لَا تُسَلِّمْ',
          },
        ],
      },
    },
    {
      id: '2-14-4',
      type: 'paragraph',
      titleEn: 'Reading — Form II Verbs in Context',
      titleAr: 'قِرَاءَة — بَابُ التَّفْعِيل فِي الْجُمَل',
      payload: {
        paragraphs: [
          {
            lines: [
              'أَرْسَلَ اللهُ مُحَمَّدًا ﷺ إِلَى النَّاسِ، وَأَنْزَلَ عَلَيْهِ الْكِتَابَ لِهِدَايَةِ الْعَالَمِ.',
              'فَكَذَّبَهُ النَّاسُ وَصَدَّقَهُ أَبُو بَكْرٍ رَضِيَ اللهُ عَنْهُ.',
            ],
            translationEn:
              'Allah sent Muhammad ﷺ to mankind, and sent down to him the Book for the guidance of the world. The people denied him, but Abu Bakr (RA) believed him.',
          },
          {
            lines: [
              'عَلَّمَنَا رَسُولُ اللهِ ﷺ كُلَّ شَيْءٍ.',
              'الرَّحْمَنُ عَلَّمَ الْقُرْآنَ. خَلَقَ الْإِنْسَانَ، عَلَّمَهُ الْبَيَانَ.',
            ],
            translationEn:
              'The Messenger of Allah ﷺ taught us everything. The Most Merciful taught the Quran. He created man, He taught him eloquence.',
          },
          {
            lines: [
              'يَا أَخَا مَاجِدٍ! أُرِيدُ أَنْ أُعَلِّمَكَ اللُّغَةَ الْعَرَبِيَّةَ.',
              'يَا أُمَّ فَاطِمَةَ! هَلْ تُرِيدِينَ أَنْ تُعَلِّمِي بِنْتَكِ الْخِيَاطَةَ؟',
              'نَعَمْ .. أُرِيدُ أَنْ أُعَلِّمَهَا.',
            ],
            translationEn:
              'O brother of Majid! I want to teach you the Arabic language. O mother of Fatima! Do you want to teach your daughter sewing? Yes, I want to teach her.',
          },
          {
            lines: [
              'قَالَتْ أُمُّ فَاطِمَةَ لِبِنْتِهَا: يَا فَاطِمَةُ! لِمَاذَا لَا تُنَظِّفِينَ غُرْفَتَكِ؟',
              'أَدْخِلِي الْغُرْفَةَ لِتُنَظِّفِيهَا.',
              'دَخَلَتْ فَاطِمَةُ الْغُرْفَةَ لِتُنَظِّفَهَا.',
            ],
            translationEn:
              "Fatima's mother said to her daughter: O Fatima! Why don't you clean your room? Enter the room to clean it. Fatima entered the room to clean it.",
          },
          {
            lines: [
              'اللَّهُمَّ نَوِّرْ قَلْبِي بِنُورِ الْإِيمَانِ.',
              'الشَّمْسُ تُنَوِّرُ الْأَرْضَ بِنُورِهَا وَالْقَمَرُ يَأْخُذُ النُّورَ مِنَ الشَّمْسِ.',
              'الْعِلْمُ نُورٌ. يُنَوِّرُ الْعِلْمُ قَلْبَ الْعَالِمِ.',
            ],
            translationEn:
              'O Allah! Illuminate my heart with the light of faith. The sun illuminates the earth with its light, and the moon takes light from the sun. Knowledge is light. Knowledge illuminates the heart of the scholar.',
          },
          {
            lines: [
              'أَيُّهَا الْوَلَدُ! سَلِّمْ عَلَى الْمُعَلِّمِ.',
              'هَذَا الْوَلَدُ الْمُؤَدَّبُ يُسَلِّمُ عَلَى أَبِيهِ وَأُمِّهِ فِي الْبَيْتِ وَيُسَلِّمُ عَلَى مُعَلِّمِهِ فِي الْمَدْرَسَةِ.',
            ],
            translationEn:
              'O boy! Greet the teacher. This polite boy greets his father and mother in the house, and greets his teacher in the madrasa.',
          },
          {
            lines: [
              'مَنْ عَلَّمَ الطَّيْرَ أَنْ يَطِيرَ؟ اللهُ عَلَّمَهُ.',
              'مَنْ عَلَّمَ النَّحْلَ أَنْ تَجْمَعَ الْعَسَلَ؟ اللهُ عَلَّمَهَا.',
            ],
            translationEn:
              'Who taught the bird to fly? Allah taught it. Who taught the bee to gather honey? Allah taught it.',
          },
          {
            lines: [
              'يَا أُمَّ مَاجِدٍ! عَلِّمِي وَلَدَكِ الصَّغِيرَ الْقُرْآنَ، وَعَلِّمِيهِ الْوُضُوءَ وَالصَّلَاةَ.',
            ],
            translationEn:
              'O mother of Majid! Teach your small boy the Quran, and teach him ablution and prayer.',
          },
        ],
      },
    },
  ],
};
