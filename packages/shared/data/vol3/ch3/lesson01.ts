import type { LessonData } from '../../curriculum';

export const lesson01: LessonData = {
  darsNumber: 1,
  chunks: [
    {
      id: '1',
      type: 'paragraph',
      titleEn: 'Introduction to the Third Chapter',
      titleAr: 'مُقَدِّمَةُ الْبَابِ الثَّالِثِ',
      payload: {
        paragraphs: [
          {
            titleEn: 'Journey of Knowledge',
            lines: [
              'أَخِي الطَّالِبُ ! بَدَأَتْ رِحْلَتُكَ إِلَى لُغَةِ الْقُرْآنِ وَالسُّنَّةِ فِي بِدَايَةِ هَذِهِ السَّنَةِ، وَبِفَضْلِ اللَّهِ وَعَوْنِهِ وَصَلْتَ الْآنَ إِلَى هَذَا الْمَقَامِ وَأَسْأَلُ اللَّهَ أَنْ يَرْزُقَكَ حَلَاوَةَ الْقُرْآنِ وَلَذَّةَ الْإِيمَانِ .',
              'وَقَدْ عَلِمْتَ يَا أَخِي ! أَنَّ الْعِلْمَ نُورٌ وَنُورُ الْعِلْمِ لَا يَدْخُلُ قَلْبَ الْعَاصِي، إِنَّمَا يَدْخُلُ قَلْبَ الْمُطِيعِ الصَّالِحِ . وَلَا يَدْخُلُ قَلْبَ الْغَافِلِ، إِنَّمَا يَدْخُلُ قَلْبَ الْمُجْتَهِدِ الَّذِي يَنْسَى كُلَّ شَيْءٍ فِي طَلَبِ الْعِلْمِ .',
              'أَرْجُو أَنْ تَحْفَظَ هَذِهِ النَّصِيحَةَ الْغَالِيَةَ إِلَى آخِرِ الْحَيَاةِ . وَفَّقَنَا اللَّهُ جَمِيعًا .',
            ],
            translationEn:
              "O student brother! Your journey to the language of the Qur'an and Sunnah began at the beginning of this year, and by the grace and help of Allah, you have now reached this stage. I ask Allah to grant you the sweetness of the Qur'an and the delight of faith. And you have known, O my brother! That knowledge is light, and the light of knowledge does not enter the heart of a sinner; it only enters the heart of the obedient and righteous. And it does not enter the heart of the heedless; it only enters the heart of the diligent who forgets everything in the pursuit of knowledge. I hope you will memorize this precious advice until the end of life. May Allah grant us all success.",
          },
        ],
      },
    },
    {
      id: '2',
      type: 'vocabulary',
      titleEn: 'Vocabulary',
      titleAr: 'الْمُفْرَدَاتُ',
      payload: {
        words: [
          { id: 1, ar: 'بِدَايَةٌ', romanized: 'bidāyah', en: 'Beginning / Start', emoji: '🏁' },
          { id: 2, ar: 'مَقَامٌ', romanized: 'maqām', en: 'Stage / Position', emoji: '📍' },
          { id: 3, ar: 'عَوْنٌ', romanized: 'ʿawn', en: 'Help / Assistance', emoji: '🤝' },
          { id: 4, ar: 'فَضْلٌ', romanized: 'faḍl', en: 'Grace / Bounty', emoji: '✨' },
          { id: 5, ar: 'شَمْعَةٌ', romanized: 'shamʿah', en: 'Candle', emoji: '🕯️' },
          { id: 6, ar: 'تَذْكَرَةٌ', romanized: 'tadhkarah', en: 'Ticket', emoji: '🎫' },
          { id: 7, ar: 'اشْتَدَّ', romanized: 'ishtadda', en: 'Intensified', emoji: '📈' },
          { id: 8, ar: 'الْإِيذَاءُ', romanized: "al-īdhā'", en: 'Harming', emoji: '🤕' },
        ],
      },
    },
    {
      id: '3',
      type: 'grammar_rule',
      titleEn: 'Numbers: The Decades 20-90',
      titleAr: 'الْأَعْدَادُ: عُقُودٌ',
      payload: {
        rules: [
          {
            label: 'Form of decades',
            arabic: 'عِشْرُونَ تِلْمِيذًا / ثَلَاثُونَ بِنْتًا',
            romanized: 'ʿishrūna tilmīdhan / thalāthūna bintan',
            meaning:
              'The decades have the same form for masculine and feminine. The counted noun must be singular, indefinite, and Mansub.',
            examples: [
              { ar: 'عِشْرُونَ تِلْمِيذًا / تِلْمِيذَةً', en: '20 male/female students' },
              { ar: 'أَرْبَعُونَ مَسْجِدًا / مَدْرَسَةً', en: '40 mosques/schools' },
              { ar: 'خَمْسُونَ كِتَابًا / كُرَّاسَةً', en: '50 books/notebooks' },
            ],
          },
        ],
      },
    },
    {
      id: '4',
      type: 'application',
      titleEn: 'Application: Decades',
      titleAr: 'التَّطْبِيقُ',
      payload: {
        instruction: 'Read the sentences using decades.',
        items: [
          {
            emoji: '🏫',
            ar: '(أ) أَقَامَ **عِشْرُونَ** عَالِمًا **عِشْرِينَ** مَدْرَسَةً فِي **عِشْرِينَ** قَرْيَةً .',
            en: 'Twenty scholars established twenty schools in twenty villages.',
          },
          {
            emoji: '✍️',
            ar: '(ب) كَتَبَتْ **ثَلَاثُونَ** كَاتِبَةً **أَرْبَعِينَ** قِصَّةً فِي **خَمْسِينَ** يَوْمًا .',
            en: 'Thirty female writers wrote forty stories in fifty days.',
          },
          {
            emoji: '📏',
            ar: '(جـ) عِنْدَ رَاشِدٍ **عِشْرُونَ** قَلَمًا / **ثَلَاثُونَ** مِسْطَرَةً .',
            en: 'Rashid has twenty pens / thirty rulers.',
          },
        ],
      },
    },
    {
      id: '5',
      type: 'grammar_rule',
      titleEn: 'Compound Numbers 13-19',
      titleAr: 'الْأَعْدَادُ الْمُرَكَّبَةُ ١٣-١٩',
      payload: {
        rules: [
          {
            label: '13-19 Gender Agreement',
            arabic: 'ثَلَاثَةَ عَشَرَ رَجُلًا / ثَلَاثَ عَشْرَةَ امْرَأَةً',
            romanized: "thalāthata ʿashara rajulan / thalātha ʿashrata imra'atan",
            meaning:
              'The first part disagrees with the gender, the second part agrees. Both parts end in Fatha. The noun is singular and Mansub.',
            examples: [
              {
                ar: 'ثَلَاثَةَ عَشَرَ رَجُلًا / ثَلَاثَ عَشْرَةَ امْرَأَةً',
                en: '13 men / 13 women',
              },
              {
                ar: 'أَرْبَعَةَ عَشَرَ كِتَابًا / أَرْبَعَ عَشْرَةَ كُرَّاسَةً',
                en: '14 books / 14 notebooks',
              },
            ],
          },
        ],
      },
    },
    {
      id: '6',
      type: 'application',
      titleEn: 'Application: Compound Numbers',
      titleAr: 'التَّطْبِيقُ',
      payload: {
        instruction: 'Read the sentences using compound numbers.',
        items: [
          {
            emoji: '📚',
            ar: '(أ) قَرَأَ **ثَلَاثَةَ عَشَرَ** تِلْمِيذًا **ثَلَاثَ عَشْرَةَ** قِصَّةً فِي **ثَلَاثَةَ عَشَرَ** كِتَابًا .',
            en: 'Thirteen male students read thirteen stories in thirteen books.',
          },
          {
            emoji: '✉️',
            ar: '(ب) أَرْسَلَتْ **أَرْبَعَ عَشْرَةَ** بِنْتًا إِلَى **خَمْسَ عَشْرَةَ** صَدِيقَةً **تِسْعَ عَشْرَةَ** رِسَالَةً .',
            en: 'Fourteen girls sent nineteen messages to fifteen female friends.',
          },
        ],
      },
    },
    {
      id: '7',
      type: 'grammar_rule',
      titleEn: 'Conjoined Numbers 21-99',
      titleAr: 'الْأَعْدَادُ الْمَعْطُوفَةُ ٢١-٩٩',
      payload: {
        rules: [
          {
            label: 'Numbers 21-99 Agreement',
            arabic: 'ثَلَاثَةٌ وَعِشْرُونَ رَجُلًا / ثَلَاثٌ وَعِشْرُونَ امْرَأَةً',
            romanized: "thalāthatun wa-ʿishrūna rajulan / thalāthun wa-ʿishrūna imra'atan",
            meaning:
              "The unit part disagrees with the noun (except 1 & 2), and the tens part remains the same for both genders, joined by 'وَ'. Noun is singular Mansub.",
            examples: [
              {
                ar: 'ثَلَاثَةٌ وَعِشْرُونَ رَجُلًا / ثَلَاثٌ وَعِشْرُونَ امْرَأَةً',
                en: '23 men / 23 women',
              },
              {
                ar: 'سِتَّةٌ وَعِشْرُونَ مَسْجِدًا / سِتٌّ وَعِشْرُونَ مَدْرَسَةً',
                en: '26 mosques / 26 schools',
              },
            ],
          },
        ],
      },
    },
    {
      id: '8',
      type: 'grammar_rule',
      titleEn: 'Numbers 11 & 12',
      titleAr: 'الرَّقْمَانِ ١١ وَ ١٢',
      payload: {
        rules: [
          {
            label: '11 and 12 Agreement',
            arabic: 'أَحَدَ عَشَرَ رَجُلًا / اِثْنَا عَشَرَ مَسْجِدًا',
            romanized: 'aḥada ʿashara rajulan / ithnā ʿashara masjid',
            meaning:
              'For 11 and 12, both parts agree perfectly with the gender of the counted noun.',
            examples: [
              { ar: 'أَحَدَ عَشَرَ رَجُلًا / إِحْدَى عَشْرَةَ امْرَأَةً', en: '11 men / 11 women' },
              {
                ar: 'اِثْنَا عَشَرَ مَسْجِدًا / اِثْنَتَا عَشْرَةَ مَدْرَسَةً',
                en: '12 mosques (nom) / 12 schools (nom)',
              },
            ],
          },
        ],
      },
    },
    {
      id: '9',
      type: 'grammar_rule',
      titleEn: 'Hundreds and Thousands',
      titleAr: 'الْمِائَةُ وَالْأَلْفُ',
      payload: {
        rules: [
          {
            label: '100s and 1000s rule',
            arabic: 'مِائَةُ رَجُلٍ / أَلْفُ رَجُلٍ',
            romanized: "mi'atu rajulin / alfu rajulin",
            meaning:
              'After 100, 1000, and their multiples, the counted noun must be singular and Genitive (Majrur).',
            examples: [
              { ar: 'مِائَةُ رَجُلٍ / امْرَأَةٍ', en: '100 men / women' },
              { ar: 'ثَلَاثُمِائَةِ رَجُلٍ', en: '300 men' },
            ],
          },
        ],
      },
    },
    {
      id: '10',
      type: 'q_and_a',
      titleEn: 'Exercise 1: Questions and Answers',
      titleAr: 'التَّمْرِينُ الْأَوَّلُ',
      payload: {
        instruction: 'Read the questions and answers',
        questions: [
          {
            emoji: '🏫',
            question_ar: 'مَاذَا فَعَلَ الْعُلَمَاءُ ؟',
            question_en: 'What did the scholars do?',
            correct_ar: 'أَقَامُوا عِشْرِينَ مَدْرَسَةً',
            correct_en: 'They established 20 schools',
            options_ar: [
              'أَقَامُوا عِشْرِينَ مَدْرَسَةً',
              'كَتَبُوا قِصَّةً',
              'ذَهَبُوا إِلَى السُّوقِ',
            ],
            questionType: 'general',
          },
          {
            emoji: '📝',
            question_ar: 'كَمْ قِصَّةً كَتَبَتْهَا الْكَاتِبَاتُ وَفِي كَمْ يَوْمٍ ؟',
            question_en: 'How many stories did the female writers write and in how many days?',
            correct_ar: 'كَتَبْنَ أَرْبَعِينَ قِصَّةً فِي خَمْسِينَ يَوْمًا',
            correct_en: 'They wrote 40 stories in 50 days',
            options_ar: [
              'كَتَبْنَ أَرْبَعِينَ قِصَّةً فِي خَمْسِينَ يَوْمًا',
              'كَتَبْنَ عِشْرِينَ قِصَّةً',
              'كَتَبْنَ عَشْرَ قِصَصٍ',
            ],
            questionType: 'general',
          },
        ],
      },
    },
    {
      id: '11',
      type: 'paragraph',
      titleEn: 'Reading Passage',
      titleAr: 'قِطْعَةُ الْقِرَاءَةِ',
      payload: {
        paragraphs: [
          {
            titleEn: "The Prophet's Mission",
            lines: [
              'دَعَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَهْلَ مَكَّةَ ثَلَاثَ عَشْرَةَ سَنَةً - وَلَمَّا اشْتَدَّ إِيذَاءُ الْمُشْرِكِينَ لِرَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَتَعْذِيبُهُمْ لِلْمُسْلِمِينَ هَاجَرَ الرَّسُولُ وَالَّذِينَ آمَنُوا مَعَهُ إِلَى الْمَدِينَةِ الْمُنَوَّرَةِ، الَّتِي انْتَشَرَ مِنْهَا نُورُ الْإِسْلَامِ فِي الْعَالَمِ . وَقَضَى رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فِي الْمَدِينَةِ عَشْرَ سَنَوَاتٍ . وَقَبْلَ هِجْرَتِهِ كَانَ النَّاسُ يُسَمُّونَ الْمَدِينَةَ يَثْرِبَ .',
            ],
            translationEn:
              'The Messenger of Allah (peace be upon him) called the people of Makkah (to Islam) for thirteen years. And when the harm of the polytheists towards the Messenger of Allah (PBUH) intensified, along with their torturing of the Muslims, the Messenger and those who believed with him migrated to Al-Madinah Al-Munawwarah, from which the light of Islam spread into the world. The Messenger of Allah (PBUH) spent ten years in Madinah. And before his migration, the people used to call Madinah Yathrib.',
          },
          {
            titleEn: 'Prayers and Numbers',
            lines: [
              'صَلَاةُ الْفَجْرِ رَكْعَتَانِ وَصَلَاةُ الظُّهْرِ أَرْبَعُ رَكَعَاتٍ . يُصَلِّي الْمُسْلِمُونَ فِي الْيَوْمِ خَمْسَ صَلَوَاتٍ ، وَهَذِهِ الصَّلَوَاتُ الْخَمْسُ فِيهَا سَبْعَ عَشْرَةَ رَكْعَةً، وَأَمَّا صَلَاةُ الْوِتْرِ فَثَلَاثُ رَكَعَاتٍ .',
            ],
            translationEn:
              "The Fajr prayer is two Rak'ahs, and the Dhuhr prayer is four Rak'ahs. Muslims pray five prayers a day, and these five prayers contain seventeen Rak'ahs, as for the Witr prayer, it is three Rak'ahs.",
          },
        ],
      },
    },
    {
      id: '12',
      type: 'assessment',
      titleEn: 'Answer these questions in Arabic',
      titleAr: 'أَجِبْ عَنْ هَذِهِ الْأَسْئِلَةِ بِالْعَرَبِيَّةِ',
      payload: {
        instruction: 'Answer the questions correctly based on the passage.',
        questions: [
          {
            emoji: '1️⃣',
            question_ar:
              'كَمْ سَنَةً دَعَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَهْلَ مَكَّةَ ؟',
            question_en: 'How many years did the Messenger of Allah call the people of Makkah?',
            correct_ar: 'ثَلَاثَ عَشْرَةَ سَنَةً',
            correct_en: 'Thirteen years',
            options_ar: ['ثَلَاثَ عَشْرَةَ سَنَةً', 'عَشْرَ سَنَوَاتٍ', 'خَمْسَ سَنَوَاتٍ'],
            questionType: 'general',
          },
          {
            emoji: '2️⃣',
            question_ar:
              'مَتَى هَاجَرَ الرَّسُولُ وَالَّذِينَ آمَنُوا مَعَهُ إِلَى الْمَدِينَةِ الْمُنَوَّرَةِ ؟',
            question_en:
              'When did the Messenger and those who believed with him migrate to Al-Madinah?',
            correct_ar: 'لَمَّا اشْتَدَّ إِيذَاءُ الْمُشْرِكِينَ',
            correct_en: 'When the harm of the polytheists intensified',
            options_ar: [
              'لَمَّا اشْتَدَّ إِيذَاءُ الْمُشْرِكِينَ',
              'بَعْدَ شَهْرٍ',
              'فِي الصَّبَاحِ',
            ],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};
