import type { LessonData } from '../../curriculum';

export const lesson01: LessonData = {
  darsNumber: 1,
  chunks: [
    {
      id: '2-3-1-1',
      type: 'vocabulary',
      titleEn: 'Vocabulary — Numbers & Counted Nouns',
      titleAr: 'الْمُفْرَدَاتُ — الْأَعْدَادُ وَالْمَعْدُودَات',
      payload: {
        words: [
          { id: 1, ar: 'تَذْكِرَةٌ', romanized: 'tadhkiratun', en: 'Ticket', emoji: '🎫' },
          { id: 2, ar: 'تَذَاكِرُ', romanized: 'tadhākiru', en: 'Tickets (plural)', emoji: '🎫' },
          { id: 3, ar: 'شَمْعَةٌ', romanized: "sham'atun", en: 'Candle', emoji: '🕯️' },
          {
            id: 4,
            ar: 'عِشْرُونَ تِلْمِيذًا',
            romanized: "'ishrūna tilmīdhan",
            en: 'Twenty male students',
            emoji: '🔢',
          },
          {
            id: 5,
            ar: 'ثَلَاثُونَ وَلَدًا',
            romanized: 'thalāthūna waladan',
            en: 'Thirty boys',
            emoji: '🔢',
          },
          {
            id: 6,
            ar: 'أَرْبَعُونَ مَسْجِدًا',
            romanized: "arba'ūna masjidan",
            en: 'Forty mosques',
            emoji: '🔢',
          },
          {
            id: 7,
            ar: 'خَمْسُونَ كِتَابًا',
            romanized: 'khamsūna kitāban',
            en: 'Fifty books',
            emoji: '🔢',
          },
          {
            id: 8,
            ar: 'سِتُّونَ يَوْمًا',
            romanized: 'sittūna yawman',
            en: 'Sixty days',
            emoji: '🔢',
          },
          {
            id: 9,
            ar: 'سَبْعُونَ قَلَمًا',
            romanized: "sab'ūna qalaman",
            en: 'Seventy pens',
            emoji: '🔢',
          },
          {
            id: 10,
            ar: 'ثَمَانُونَ رَجُلًا',
            romanized: 'thamānūna rajulan',
            en: 'Eighty men',
            emoji: '🔢',
          },
          {
            id: 11,
            ar: 'تِسْعُونَ طِفْلًا',
            romanized: "tis'ūna ṭiflan",
            en: 'Ninety children',
            emoji: '🔢',
          },
        ],
      },
    },
    {
      id: '2-3-1-2',
      type: 'grammar_rule',
      titleEn: 'Grammar — Arabic Numbers and Counted Nouns (التَّمْيِيز)',
      titleAr: 'قَاعِدَة — الْعَدَدُ وَالْمَعْدُود',
      payload: {
        rules: [
          {
            label: 'الْعُقُود (20, 30 ... 90) — Decades',
            arabic: 'عِشْرُونَ رَجُلًا / عِشْرُونَ امْرَأَةً',
            romanized: "'ishrūna rajulan / 'ishrūna mra'atan",
            meaning:
              'For decades (20, 30, ... 90), the counted noun is always singular accusative (مُفْرَد مَنْصُوب). The number form does not change based on gender.',
            examples: [
              { ar: 'عِشْرُونَ رَجُلًا', en: 'Twenty men' },
              { ar: 'عِشْرُونَ امْرَأَةً', en: 'Twenty women' },
              { ar: 'ثَلَاثُونَ كِتَابًا', en: 'Thirty books' },
            ],
          },
          {
            label: 'الْأَعْدَادُ 13-19 — Numbers 13 to 19',
            arabic: 'ثَلَاثَةَ عَشَرَ رَجُلًا / ثَلَاثَ عَشْرَةَ امْرَأَةً',
            romanized: "thalāthata 'ashara rajulan / thalātha 'ashrata mra'atan",
            meaning:
              'For 13-19, the first part opposes the gender of the counted noun, while the second part (عَشَرَ/عَشْرَةَ) matches it. The noun is singular accusative.',
            examples: [
              { ar: 'ثَلَاثَةَ عَشَرَ رَجُلًا', en: '13 men' },
              { ar: 'ثَلَاثَ عَشْرَةَ امْرَأَةً', en: '13 women' },
              { ar: 'خَمْسَةَ عَشَرَ مَسْجِدًا', en: '15 mosques' },
              { ar: 'خَمْسَ عَشْرَةَ مَدْرَسَةً', en: '15 schools' },
            ],
          },
          {
            label: 'الْأَعْدَادُ الْمُرَكَّبَة (21-29) — Mixed Numbers',
            arabic: 'أَحَدٌ وَعِشْرُونَ كِتَابًا / إِحْدَى وَعِشْرُونَ كُرَّاسَةً',
            romanized: "aḥadun wa'ishrūna kitāban / iḥdā wa'ishrūna kurrāsatan",
            meaning:
              'For mixed numbers (21-29, etc.): numbers ending in 1 and 2 match the gender; numbers ending in 3-9 oppose the gender. The noun is singular accusative.',
            examples: [
              { ar: 'أَحَدٌ وَعِشْرُونَ كِتَابًا', en: '21 books' },
              { ar: 'إِحْدَى وَعِشْرُونَ كُرَّاسَةً', en: '21 notebooks' },
              { ar: 'ثَلَاثَةٌ وَعِشْرُونَ رَجُلًا', en: '23 men' },
              { ar: 'ثَلَاثٌ وَعِشْرُونَ امْرَأَةً', en: '23 women' },
            ],
          },
          {
            label: 'الْأَعْدَادُ 3-10 — Numbers 3 to 10',
            arabic: 'ثَلَاثَةُ رِجَالٍ / ثَلَاثُ نِسْوَةٍ',
            romanized: 'thalāthatu rijālin / thalāthu niswatin',
            meaning:
              'For 3-10, the counted noun is plural genitive (جَمْع مَجْرُور). The number always opposes the gender of the singular form of the noun.',
            examples: [
              { ar: 'ثَلَاثَةُ رِجَالٍ', en: '3 men' },
              { ar: 'ثَلَاثُ نِسْوَةٍ', en: '3 women' },
              { ar: 'خَمْسَةُ أَقْلَامٍ', en: '5 pens' },
              { ar: 'خَمْسُ سَاعَاتٍ', en: '5 hours' },
              { ar: 'عَشَرَةُ مَصَابِيحَ', en: '10 lamps' },
              { ar: 'عَشْرُ حَدَائِقَ', en: '10 gardens' },
            ],
          },
        ],
      },
    },
    {
      id: '2-3-1-3',
      type: 'paragraph',
      titleEn: 'Reading — Numbers in Context',
      titleAr: 'قِرَاءَة — الْأَعْدَادُ فِي السِّيَاق',
      payload: {
        paragraphs: [
          {
            title: 'الْعُقُود',
            titleEn: 'Decades',
            lines: [
              'أَقَامَ عِشْرُونَ عَالِمًا عِشْرِينَ مَدْرَسَةً فِي عِشْرِينَ قَرْيَةً.',
              'كَتَبَتْ ثَلَاثُونَ كَاتِبَةً أَرْبَعِينَ قِصَّةً فِي خَمْسِينَ يَوْمًا.',
            ],
            translationEn:
              'Twenty scholars established twenty schools in twenty villages. Thirty female writers wrote forty stories in fifty days.',
          },
          {
            title: 'الْأَعْدَادُ 13-19',
            titleEn: 'Numbers 13-19',
            lines: [
              'قَرَأَ ثَلَاثَةَ عَشَرَ تِلْمِيذًا ثَلَاثَ عَشْرَةَ قِصَّةً فِي ثَلَاثَةَ عَشَرَ كِتَابًا.',
              'أَرْسَلَتْ أَرْبَعُ عَشْرَةَ بِنْتًا إِلَى خَمْسَ عَشْرَةَ صَدِيقَةً تِسْعَ عَشْرَةَ رِسَالَةً.',
            ],
            translationEn:
              'Thirteen male students read thirteen stories in thirteen books. Fourteen girls sent nineteen letters to fifteen female friends.',
          },
          {
            title: 'الْأَعْدَادُ 11-12',
            titleEn: 'Numbers 11-12',
            lines: [
              'اشْتَرَى أَحَدَ عَشَرَ صَدِيقًا أَحَدَ عَشَرَ قَلَمًا مِنْ أَحَدَ عَشَرَ دُكَّانًا.',
              'قَرَأَتْ إِحْدَى عَشْرَةَ تِلْمِيذَةً إِحْدَى عَشْرَةَ قِصَّةً فِي إِحْدَى عَشْرَةَ مَجَلَّةً.',
              'كَتَبَ اثْنَا عَشَرَ شَاعِرًا اثْنَيْ عَشَرَ شِعْرًا فِي اثْنَيْ عَشَرَ يَوْمًا.',
              'أَشْعَلَتِ اثْنَتَا عَشْرَةَ امْرَأَةً اثْنَتَيْ عَشْرَةَ شَمْعَةً فِي اثْنَتَيْ عَشْرَةَ غُرْفَةً.',
            ],
            translationEn:
              'Eleven friends bought eleven pens from eleven shops. Eleven female students read eleven stories in eleven magazines. Twelve poets wrote twelve poems in twelve days. Twelve women lit twelve candles in twelve rooms.',
          },
          {
            title: 'الْأَعْدَادُ الْمُرَكَّبَة 21-29',
            titleEn: 'Mixed Numbers 21-29',
            lines: [
              'عِنْدَ رَاشِدٍ أَحَدٌ وَعِشْرُونَ كِتَابًا وَإِحْدَى وَعِشْرُونَ كُرَّاسَةً.',
              'اشْتَرَيْتُ أَحَدًا وَعِشْرِينَ قَلَمًا وَإِحْدَى وَعِشْرِينَ مِسْطَرَةً.',
              'اشْتَرَى اثْنَانِ وَعِشْرُونَ فَلَّاحًا اثْنَيْنِ وَعِشْرِينَ مِحْرَاثًا بِاثْنَيْنِ وَعِشْرِينَ دِرْهَمًا.',
            ],
            translationEn:
              'Rashid has twenty-one books and twenty-one notebooks. I bought twenty-one pens and twenty-one rulers. Twenty-two farmers bought twenty-two plows for twenty-two dirhams.',
          },
          {
            title: 'الْأَعْدَادُ 3-10',
            titleEn: 'Numbers 3-10',
            lines: [
              'حَفِظَ ثَلَاثَةُ أَوْلَادٍ ثَلَاثَةَ أَجْزَاءٍ مِنَ الْقُرْآنِ فِي ثَلَاثَةِ أَشْهُرٍ.',
              'قَرَأَتْ ثَمَانِي بَنَاتٍ ثَمَانِيَ قِصَصٍ فِي ثَمَانِي سَاعَاتٍ.',
            ],
            translationEn:
              'Three boys memorized three parts of the Quran in three months. Eight girls read eight stories in eight hours.',
          },
        ],
      },
    },
    {
      id: '2-3-1-4',
      type: 'q_and_a',
      titleEn: 'Comprehension Q&A',
      titleAr: 'أَسْئِلَةُ الْفَهْم',
      payload: {
        instruction: 'Read each question and choose the correct answer.',
        questions: [
          {
            emoji: '🏫',
            question_ar: 'كَمْ مَدْرَسَةً أَقَامَ الْعُلَمَاءُ ؟',
            question_en: 'How many schools did the scholars establish?',
            correct_ar: 'أَقَامُوا عِشْرِينَ مَدْرَسَةً',
            correct_en: 'They established twenty schools.',
            options_ar: [
              'أَقَامُوا عِشْرِينَ مَدْرَسَةً',
              'أَقَامُوا ثَلَاثِينَ مَدْرَسَةً',
              'أَقَامُوا عَشْرَ مَدَارِسَ',
            ],
            questionType: 'general',
          },
          {
            emoji: '📚',
            question_ar: 'مَاذَا عِنْدَ رَاشِدٍ ؟',
            question_en: 'What does Rashid have?',
            correct_ar: 'عِنْدَهُ أَحَدٌ وَعِشْرُونَ كِتَابًا وَإِحْدَى وَعِشْرُونَ كُرَّاسَةً',
            correct_en: 'He has twenty-one books and twenty-one notebooks.',
            options_ar: [
              'عِنْدَهُ أَحَدٌ وَعِشْرُونَ كِتَابًا وَإِحْدَى وَعِشْرُونَ كُرَّاسَةً',
              'عِنْدَهُ عَشَرَةُ كُتُبٍ',
              'عِنْدَهُ ثَلَاثُونَ كِتَابًا',
            ],
            questionType: 'general',
          },
          {
            emoji: '📖',
            question_ar: 'فِي كَمْ يَوْمٍ كَتَبَ الشُّعَرَاءُ أَشْعَارَهُمْ ؟',
            question_en: 'In how many days did the poets write their poems?',
            correct_ar: 'كَتَبُوهَا فِي اثْنَيْ عَشَرَ يَوْمًا',
            correct_en: 'They wrote them in twelve days.',
            options_ar: [
              'كَتَبُوهَا فِي اثْنَيْ عَشَرَ يَوْمًا',
              'كَتَبُوهَا فِي عَشَرَةِ أَيَّامٍ',
              'كَتَبُوهَا فِي ثَلَاثَةِ أَيَّامٍ',
            ],
            questionType: 'general',
          },
        ],
      },
    },
    {
      id: '2-3-1-5',
      type: 'assessment',
      titleEn: 'Exercise — Fill in the Number',
      titleAr: 'تَمْرِين — أَمْلَأِ الْفَرَاغَ بِالْعَدَدِ الْمُنَاسِب',
      payload: {
        instruction: 'Choose the correct number form to complete each sentence.',
        questions: [
          {
            emoji: '🔢',
            question_ar: 'نَجَحَ فِي الِامْتِحَانِ ___ تِلْمِيذًا وَ___ تِلْمِيذَةً',
            question_en: '19 male students and 15 female students passed the exam.',
            correct_ar: 'تِسْعَةَ عَشَرَ / خَمْسَ عَشْرَةَ',
            correct_en: 'nineteen / fifteen',
            options_ar: [
              'تِسْعَةَ عَشَرَ / خَمْسَ عَشْرَةَ',
              'تِسْعَ عَشْرَةَ / خَمْسَةَ عَشَرَ',
              'تِسْعَةَ عَشَرَ / خَمْسَةَ عَشَرَ',
            ],
          },
          {
            emoji: '📝',
            question_ar: 'كَتَبَ هَذَا الْكَاتِبُ الشَّهِيرُ ___ قِصَّةً',
            question_en: 'This famous writer wrote 14 stories.',
            correct_ar: 'أَرْبَعَ عَشْرَةَ',
            correct_en: 'fourteen',
            options_ar: ['أَرْبَعَ عَشْرَةَ', 'أَرْبَعَةَ عَشَرَ', 'أَرْبَعِينَ'],
          },
          {
            emoji: '⌚',
            question_ar: 'إِنَّ عِنْدِي ___ سَاعَاتٍ',
            question_en: 'Indeed, I have 8 watches/hours.',
            correct_ar: 'ثَمَانِيَ',
            correct_en: 'eight (feminine plural genitive)',
            options_ar: ['ثَمَانِيَ', 'ثَمَانِيَةَ', 'ثَمَانُونَ'],
          },
        ],
      },
    },
  ],
};
