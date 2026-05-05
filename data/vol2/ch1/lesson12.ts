import type { LessonData } from '../../curriculum';

export const lesson12: LessonData = {
  darsNumber: 12,
  chunks: [
    {
      id: '2-12-1',
      type: 'vocabulary',
      titleEn: 'Vocabulary — Adjectives & Nouns',
      titleAr: 'الْمُفْرَدَات — صِفَات وَأَسْمَاء',
      payload: {
        words: [
          {
            id: 1,
            ar: 'تِلْمِيذٌ / تِلْمِيذَةٌ',
            romanized: 'tilmīdh / tilmīdhah',
            en: 'Student (m/f)',
            emoji: '🎒',
          },
          {
            id: 2,
            ar: 'مُعَلِّمٌ / مُعَلِّمَةٌ',
            romanized: "mu'allim / mu'allimah",
            en: 'Teacher (m/f)',
            emoji: '👨‍🏫',
          },
          { id: 3, ar: 'فَقِيرٌ', romanized: 'faqīr', en: 'Poor', emoji: '😔' },
          { id: 4, ar: 'غَنِيٌّ', romanized: 'ghanī', en: 'Rich', emoji: '💰' },
          { id: 5, ar: 'فَلَّاحٌ', romanized: 'fallāḥ', en: 'Farmer', emoji: '🌾' },
          { id: 6, ar: 'تَاجِرٌ', romanized: 'tājir', en: 'Merchant', emoji: '🏪' },
          { id: 7, ar: 'مَفْتُوحٌ', romanized: 'maftūḥ', en: 'Open', emoji: '🔓' },
          { id: 8, ar: 'مُغْلَقٌ', romanized: 'mughlaq', en: 'Closed', emoji: '🔒' },
          { id: 9, ar: 'فَاسِقٌ', romanized: 'fāsiq', en: 'Sinner / Wicked', emoji: '⚠️' },
          { id: 10, ar: 'صَالِحٌ', romanized: 'ṣāliḥ', en: 'Pious / Righteous', emoji: '✅' },
          {
            id: 11,
            ar: 'كَسْلَانٌ / كَسْلَانَةٌ',
            romanized: 'kaslān / kaslānah',
            en: 'Lazy (m/f)',
            emoji: '😴',
          },
          {
            id: 12,
            ar: 'نَشِيطٌ / نَشِيطَةٌ',
            romanized: 'nashīṭ / nashīṭah',
            en: 'Active / Energetic (m/f)',
            emoji: '⚡',
          },
          { id: 13, ar: 'غَبِيٌّ', romanized: 'ghabī', en: 'Foolish / Stupid', emoji: '😶' },
          { id: 14, ar: 'ذَكِيٌّ', romanized: 'dhakī', en: 'Smart / Intelligent', emoji: '🧠' },
          { id: 15, ar: 'كَاذِبٌ', romanized: 'kādhib', en: 'Liar', emoji: '🤥' },
          { id: 16, ar: 'صَادِقٌ', romanized: 'ṣādiq', en: 'Truthful', emoji: '💯' },
          { id: 17, ar: 'مُنَافِقٌ', romanized: 'munāfiq', en: 'Hypocrite', emoji: '🎭' },
          { id: 18, ar: 'حُجْرَةٌ', romanized: 'ḥujrah', en: 'Room', emoji: '🚪' },
          {
            id: 19,
            ar: 'وَاسِعٌ / وَاسِعَةٌ',
            romanized: "wāsi\' / wāsi\'ah",
            en: 'Spacious / Wide (m/f)',
            emoji: '🏟️',
          },
        ],
      },
    },
    {
      id: '2-12-2',
      type: 'verb_table',
      titleEn: 'كَانَ / صَارَ / لَيْسَ — Conjugation',
      titleAr: 'كَانَ وَصَارَ وَلَيْسَ',
      payload: {
        verbTense: 'past',
        instruction:
          'These three verbs put their predicate (خبر) into the accusative (fathatayn). لَيْسَ is present-meaning despite past form.',
        verbTable: [
          {
            root: 'كَانَ',
            meaning: 'was',
            he: 'كَانَ',
            she: 'كَانَتْ',
            youM: 'كُنْتَ',
            youF: 'كُنْتِ',
            i: 'كُنْتُ',
          },
          {
            root: 'صَارَ',
            meaning: 'became',
            he: 'صَارَ',
            she: 'صَارَتْ',
            youM: 'صِرْتَ',
            youF: 'صِرْتِ',
            i: 'صِرْتُ',
          },
          {
            root: 'لَيْسَ',
            meaning: 'is not',
            he: 'لَيْسَ',
            she: 'لَيْسَتْ',
            youM: 'لَسْتَ',
            youF: 'لَسْتِ',
            i: 'لَسْتُ',
          },
        ],
      },
    },
    {
      id: '2-12-3',
      type: 'paragraph',
      titleEn: 'Reading — Transformation Sentences',
      titleAr: 'قِرَاءَة — جُمَل التَّحْوِيل',
      payload: {
        paragraphs: [
          {
            lines: [
              'رَاشِدٌ تِلْمِيذٌ.',
              'كَانَ رَاشِدٌ تِلْمِيذًا.',
              'صَارَ رَاشِدٌ مُعَلِّمًا.',
              'لَيْسَ رَاشِدٌ تِلْمِيذًا.',
              'فَاطِمَةُ صَغِيرَةٌ.',
              'كَانَتْ فَاطِمَةُ صَغِيرَةً.',
              'صَارَتْ فَاطِمَةُ كَبِيرَةً.',
              'لَيْسَتْ فَاطِمَةُ صَغِيرَةً.',
            ],
            translationEn:
              'Rashid is a student. / Rashid was a student. / Rashid became a teacher. / Rashid is not a student. Fatima is young. / Fatima was young. / Fatima became old. / Fatima is not young.',
          },
          {
            lines: [
              'أَنْتَ رَجُلٌ فَقِيرٌ.',
              'كُنْتَ رَجُلًا فَقِيرًا.',
              'صِرْتَ رَجُلًا غَنِيًّا.',
              'لَسْتَ رَجُلًا فَقِيرًا.',
              'أَنَا فَلَّاحٌ.',
              'كُنْتُ فَلَّاحًا.',
              'صِرْتُ تَاجِرًا.',
              'لَسْتُ فَلَّاحًا.',
            ],
            translationEn:
              'You are a poor man. / You were a poor man. / You became a rich man. / You are not a poor man. I am a farmer. / I was a farmer. / I became a merchant. / I am not a farmer.',
          },
          {
            lines: [
              'كَانَ الْبَابُ مَفْتُوحًا.',
              'صَارَ الْبَابُ مُغْلَقًا.',
              'لَيْسَ الْبَابُ مَفْتُوحًا.',
              'كَانَتِ الْمَدْرَسَةُ صَغِيرَةً.',
              'صَارَتِ الْمَدْرَسَةُ كَبِيرَةً.',
              'لَيْسَتِ الْمَدْرَسَةُ صَغِيرَةً.',
              'كُنْتَ فَاسِقًا.',
              'صِرْتَ صَالِحًا.',
              'لَسْتَ فَاسِقًا.',
            ],
            translationEn:
              'The door was open. / The door became closed. / The door is not open. The madrasa was small. / The madrasa became big. / The madrasa is not small. You were a sinner. / You became righteous. / You are not a sinner.',
          },
        ],
      },
    },
    {
      id: '2-12-4',
      type: 'grammar_rule',
      titleEn: 'لَيْسَ + بِـ — Emphatic Negation',
      titleAr: 'لَيْسَ + بِـ — النَّفْيُ الْمُؤَكَّد',
      payload: {
        rules: [
          {
            label: 'لَيْسَ + بِـ + خَبَر مَجْرُور',
            arabic: 'لَيْسَ رَاشِدٌ بِكَاذِبٍ',
            romanized: 'laysa Rāshidun bi-kādhibin',
            meaning:
              'Adding بِـ to the predicate of لَيْسَ creates emphatic negation. The predicate takes kasratayn instead of fathatayn.',
            examples: [
              {
                ar: 'لَيْسَ رَاشِدٌ كَاذِبًا ← لَيْسَ رَاشِدٌ بِكَاذِبٍ',
                en: 'Rashid is not a liar (emphatic)',
              },
              { ar: 'لَسْتَ صَادِقًا ← لَسْتَ بِصَادِقٍ', en: 'You are not truthful (emphatic)' },
              {
                ar: 'لَسْتُ مُنَافِقًا ← لَسْتُ بِمُنَافِقٍ',
                en: 'I am not a hypocrite (emphatic)',
              },
              { ar: 'لَيْسَتِ الْحُجْرَةُ بِوَاسِعَةٍ', en: 'The room is not spacious (emphatic)' },
            ],
          },
        ],
      },
    },
  ],
};
