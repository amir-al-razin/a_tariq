import type { LessonData } from '../../curriculum';

export const lesson01: LessonData = {
  darsNumber: 1,
  chunks: [
    {
      id: '2-2-1-1',
      type: 'masdar_factory',
      titleEn: 'Masdar Factory — Core Verbs',
      titleAr: 'الْمَصَادِرُ وَالأَفْعَالُ',
      payload: {
        baabLabel: 'أَبْوَابٌ مُخْتَلِفَة',
        instruction:
          'Each masdar is listed with its verb chapter (ف = فَتَحَ, ن = نَصَرَ, ض = ضَرَبَ)',
        masdarRows: [
          {
            masdar: 'الْمَلْأُ',
            masdarEn: 'to fill',
            baab: 'ف',
            past: 'مَلَأَ',
            present: 'يَمْلَأُ',
            imperative: 'اِمْلَأْ',
            prohibitive: 'لَا تَمْلَأْ',
          },
          {
            masdar: 'الذِّكْرُ',
            masdarEn: 'to remember / mention',
            baab: 'ن',
            past: 'ذَكَرَ',
            present: 'يَذْكُرُ',
            imperative: 'اُذْكُرْ',
            prohibitive: 'لَا تَذْكُرْ',
          },
          {
            masdar: 'الْحَمْلُ',
            masdarEn: 'to carry',
            baab: 'ض',
            past: 'حَمَلَ',
            present: 'يَحْمِلُ',
            imperative: 'اِحْمِلْ',
            prohibitive: 'لَا تَحْمِلْ',
          },
          {
            masdar: 'الْإِذْنُ',
            masdarEn: 'to permit / give permission',
            baab: 'س',
            past: 'أَذِنَ',
            present: 'يَأْذَنُ',
            imperative: 'اِئْذَنْ',
            prohibitive: 'لَا تَأْذَنْ',
          },
          {
            masdar: 'الطَّرْدُ',
            masdarEn: 'to drive away / expel',
            baab: 'ن',
            past: 'طَرَدَ',
            present: 'يَطْرُدُ',
            imperative: 'اُطْرُدْ',
            prohibitive: 'لَا تَطْرُدْ',
          },
          {
            masdar: 'الْكَنْسُ',
            masdarEn: 'to sweep',
            baab: 'ن',
            past: 'كَنَسَ',
            present: 'يَكْنُسُ',
            imperative: 'اُكْنُسْ',
            prohibitive: 'لَا تَكْنُسْ',
          },
          {
            masdar: 'الصُّنْعُ',
            masdarEn: 'to make / manufacture',
            baab: 'ف',
            past: 'صَنَعَ',
            present: 'يَصْنَعُ',
            imperative: 'اِصْنَعْ',
            prohibitive: 'لَا تَصْنَعْ',
          },
          {
            masdar: 'الْكَسْرُ',
            masdarEn: 'to break',
            baab: 'ض',
            past: 'كَسَرَ',
            present: 'يَكْسِرُ',
            imperative: 'اِكْسِرْ',
            prohibitive: 'لَا تَكْسِرْ',
          },
          {
            masdar: 'الْكَسْبُ',
            masdarEn: 'to earn',
            baab: 'ض',
            past: 'كَسَبَ',
            present: 'يَكْسِبُ',
            imperative: 'اِكْسِبْ',
            prohibitive: 'لَا تَكْسِبْ',
          },
          {
            masdar: 'الْعَوْذُ',
            masdarEn: 'to seek refuge',
            baab: 'ن',
            past: 'عَاذَ',
            present: 'يَعُوذُ',
            imperative: 'عُذْ',
            prohibitive: 'لَا تَعُذْ',
          },
        ],
      },
    },
    {
      id: '2-2-1-2',
      type: 'vocabulary',
      titleEn: 'Vocabulary',
      titleAr: 'الْمُفْرَدَاتُ',
      payload: {
        words: [
          { id: 1, ar: 'أَهْلٌ', romanized: 'ahlun', en: 'Family / People', emoji: '👨‍👩‍👧' },
          { id: 2, ar: 'تُرَابٌ', romanized: 'turābun', en: 'Dust / Soil', emoji: '🌱' },
          { id: 3, ar: 'عَامِلٌ', romanized: "'āmilun", en: 'Worker', emoji: '👷' },
          { id: 4, ar: 'كِيسٌ', romanized: 'kīsun', en: 'Sack / Bag', emoji: '🛍️' },
          {
            id: 5,
            ar: 'مَائِدَةُ الطَّعَامِ',
            romanized: "māʾidatu ṭ-ṭa'ām",
            en: 'Dining table',
            emoji: '🍽️',
          },
          {
            id: 6,
            ar: 'الِامْتِحَانُ',
            romanized: 'al-imtiḥān',
            en: 'Examination / Test',
            emoji: '📝',
          },
          { id: 7, ar: 'لَحْظَةٌ', romanized: 'laḥẓatun', en: 'A moment', emoji: '⏱️' },
          {
            id: 8,
            ar: 'ذَاكِرٌ',
            romanized: 'dhākirun',
            en: 'One who remembers (Allah)',
            emoji: '🤲',
          },
          { id: 9, ar: 'سِكِّينٌ', romanized: 'sikkīnun', en: 'Knife', emoji: '🔪' },
          { id: 10, ar: 'مَيِّتٌ', romanized: 'mayyitun', en: 'Dead', emoji: '💀' },
          { id: 11, ar: 'حَيٌّ', romanized: 'ḥayyun', en: 'Alive', emoji: '💚' },
          { id: 12, ar: 'صَنَمٌ', romanized: 'ṣanamun', en: 'Idol', emoji: '🗿' },
          { id: 13, ar: 'طُوفَانٌ', romanized: 'ṭūfānun', en: 'Flood', emoji: '🌊' },
          { id: 14, ar: 'تَائِبٌ', romanized: "tā'ibun", en: 'Repentant', emoji: '🤲' },
          { id: 15, ar: 'زُجَاجٌ', romanized: 'zujājun', en: 'Glass', emoji: '🪟' },
          { id: 16, ar: 'ثَقِيلٌ', romanized: 'thaqīlun', en: 'Heavy', emoji: '⚖️' },
          { id: 17, ar: 'خَفِيفٌ', romanized: 'khafīfun', en: 'Light (weight)', emoji: '🪶' },
          { id: 18, ar: 'قِشْرٌ', romanized: 'qishrun', en: 'Peel / Shell', emoji: '🥜' },
          { id: 19, ar: 'لَوْزٌ', romanized: 'lawzun', en: 'Almond', emoji: '🌰' },
          { id: 20, ar: 'حَجَرٌ', romanized: 'ḥajarun', en: 'Stone', emoji: '🪨' },
          {
            id: 21,
            ar: 'مُخٌّ / لُبٌّ',
            romanized: 'mukhkh / lubb',
            en: 'Brain / Core',
            emoji: '🧠',
          },
        ],
      },
    },
    {
      id: '2-2-1-3',
      type: 'grammar_rule',
      titleEn: 'Grammar — Correct Use of غَفَرَ and أَذِنَ with لَـ',
      titleAr: 'قَاعِدَة — اِسْتِخْدَام غَفَرَ وَأَذِنَ مَعَ لَـ',
      payload: {
        rules: [
          {
            label: 'غَفَرَ + لَـ + ضَمِير',
            arabic: 'غَفَرَ اللهُ لَكَ / غَفَرَ اللهُ لَكَ ذَنْبَكَ',
            romanized: 'ghafara llāhu laka / ghafara llāhu laka dhanbaka',
            meaning:
              'The verb غَفَرَ (to forgive) requires لَـ before the pronoun, not a direct object.',
            examples: [
              { ar: 'غَفَرَ اللهُ لَكَ', en: 'Allah forgave you.' },
              { ar: 'غَفَرَ اللهُ لَكَ ذَنْبَكَ', en: 'Allah forgave your sin.' },
              { ar: 'أَذِنْتُ لَكَ', en: 'I permitted you.' },
              { ar: 'أَذِنَ اللهُ لِرَسُولِهِ', en: 'Allah permitted His messenger.' },
            ],
          },
        ],
      },
    },
    {
      id: '2-2-1-4',
      type: 'paragraph',
      titleEn: 'Reading Passages',
      titleAr: 'قِرَاءَة',
      payload: {
        paragraphs: [
          {
            title: 'الْعَالِمُ وَالْعَامِلُ',
            titleEn: 'The Scholar and the Worker',
            lines: [
              'قَالَ الْعَالِمُ فِي وَعْظِهِ : أَيُّهَا الْعَامِلُ، اِعْمَلْ لِآخِرَتِكَ وَلَا تَعْمَلْ لِدُنْيَاكَ - اُعْبُدْ رَبَّكَ وَاشْكُرْهُ، فَإِنَّهُ خَلَقَكَ وَهُوَ يَرْزُقُكَ.',
            ],
            translationEn:
              'The scholar said in his sermon: "O worker, work for your Hereafter and do not work for your worldly life — worship your Lord and thank Him, for indeed He created you and He provides for you."',
          },
          {
            title: 'أُمُّ فَاطِمَةَ',
            titleEn: "Fatima's Mother",
            lines: [
              'أَطْعَمَتْ أُمُّ فَاطِمَةَ الطَّيِّبَةُ فَقِيرَةً جَائِعَةً وَقَالَتْ : عَمِلْتُ هَذَا الْعَمَلَ لِوَجْهِ اللهِ.',
              'يَخْرُجُ عَمُّ مَاجِدٍ التَّاجِرُ إِلَى سُوقِ الْقَرْيَةِ صَبَاحًا وَيَرْجِعُ إِلَى أَهْلِهِ مَسَاءً.',
              'قَتَلَ هَذَا الْمُجَاهِدُ عَدُوَّ اللهِ بِسَيْفِهِ وَأَخَذَ فَرَسَهُ وَسِلَاحَهُ.',
            ],
            translationEn:
              "Fatima's good mother fed a hungry poor woman and said: \'I did this deed for the sake of Allah.\' Majid's uncle, the merchant, goes out to the village market in the morning and returns to his family in the evening. This Mujahid killed the enemy of Allah with his sword and took his horse and weapon.",
          },
          {
            title: 'دُعَاءُ الْعَبْدِ الصَّالِح',
            titleEn: 'The Supplication of the Righteous Servant',
            lines: [
              'قَالَ الْعَبْدُ الصَّالِحُ : اللَّهُمَّ إِنِّي أَسْأَلُكَ حَاجَتِي وَلَا أَسْأَلُ غَيْرَكَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ.',
            ],
            translationEn:
              'The righteous servant said: "O Allah, indeed I ask You for my need and I do not ask anyone other than You. O Allah, indeed I ask You for Paradise and I seek refuge in You from the Fire."',
          },
          {
            title: 'طَالِبُ الْعِلْم',
            titleEn: 'The Seeker of Knowledge',
            lines: [
              'يَا طَالِبَ الْعِلْمِ ! امْلَأْ قَلْبَكَ بِنُورِ الْعِلْمِ.',
              'مَلَأْتُ الْقَلَمَ بِالْحِبْرِ وَكَتَبْتُ عَلَى الْوَرَقَةِ جُمْلَةً.',
              'يَمْلَأُ بَطْنَ الْإِنْسَانِ تُرَابُ الْقَبْرِ، وَلَا يَمْلَؤُهُ شَيْءٌ.',
              'اللَّهُمَّ امْلَأْ قَلْبِي بِنُورِ الْإِيمَانِ.',
            ],
            translationEn:
              'O seeker of knowledge! Fill your heart with the light of knowledge. I filled the pen with ink and wrote a sentence on the paper. The dust of the grave fills the belly of man, and nothing else fills it. O Allah, fill my heart with the light of faith.',
          },
          {
            title: 'إِبْرَاهِيمُ وَإِسْمَاعِيلُ',
            titleEn: 'Ibrahim and Ismail',
            lines: [
              'أَمَرَ اللهُ خَلِيلَهُ إِبْرَاهِيمَ أَنْ يَذْبَحَ وَلَدَهُ إِسْمَاعِيلَ.',
              'مَا أَرَادَ اللهُ أَنْ يَذْبَحَ إِبْرَاهِيمُ وَلَدَهُ، بَلْ أَرَادَ أَنْ يَمْتَحِنَهُ، وَنَجَحَ إِبْرَاهِيمُ فِي هَذَا الِامْتِحَانِ.',
              'فَأَرْسَلَ اللهُ كَبْشًا مِنَ الْجَنَّةِ وَقَالَ لِإِبْرَاهِيمَ : اِذْبَحْ هَذَا وَلَا تَذْبَحْ إِسْمَاعِيلَ.',
            ],
            translationEn:
              'Allah commanded His intimate friend Ibrahim to slaughter his son Ismail. Allah did not want Ibrahim to slaughter his son, but He wanted to test him, and Ibrahim succeeded in this test. So Allah sent a ram from Paradise and said to Ibrahim: "Slaughter this and do not slaughter Ismail."',
          },
          {
            title: 'الذِّكْرُ وَالْغَفْلَة',
            titleEn: 'Remembrance and Heedlessness',
            lines: [
              'أَيُّهَا الْمُسْلِمُ ! اُذْكُرِ اللهَ دَائِمًا وَلَا تَتْرُكْ ذِكْرَ اللهِ لَحْظَةً، فَإِنَّ قَلْبَ الْغَافِلِ مَيِّتٌ وَإِنَّ قَلْبَ الذَّاكِرِ حَيٌّ.',
            ],
            translationEn:
              'O Muslim! Remember Allah always and do not leave the remembrance of Allah for a moment, for indeed the heart of the heedless is dead, and indeed the heart of the rememberer is alive.',
          },
        ],
      },
    },
    {
      id: '2-2-1-5',
      type: 'q_and_a',
      titleEn: 'Comprehension Q&A',
      titleAr: 'أَسْئِلَةُ الْفَهْم',
      payload: {
        instruction: 'Read each question and choose the correct answer.',
        questions: [
          {
            emoji: '🤲',
            question_ar: 'مَاذَا أَمَرَ الْعَالِمُ الْعَامِلَ أَنْ يَفْعَلَ ؟',
            question_en: 'What did the scholar command the worker to do?',
            correct_ar: 'أَمَرَهُ أَنْ يَعْمَلَ لِآخِرَتِهِ وَيَعْبُدَ رَبَّهُ',
            correct_en: 'He commanded him to work for his Hereafter and worship his Lord.',
            options_ar: [
              'أَمَرَهُ أَنْ يَعْمَلَ لِآخِرَتِهِ وَيَعْبُدَ رَبَّهُ',
              'أَمَرَهُ أَنْ يَجْمَعَ الْمَالَ',
              'أَمَرَهُ أَنْ يَذْهَبَ إِلَى السُّوقِ',
            ],
            questionType: 'general',
          },
          {
            emoji: '🌊',
            question_ar: 'لِمَاذَا أَمَرَ اللهُ نُوحًا أَنْ يَصْنَعَ سَفِينَةً ؟',
            question_en: 'Why did Allah command Nuh to make a ship?',
            correct_ar: 'لِيَرْكَبَهَا عِنْدَ الطُّوفَانِ',
            correct_en: 'To ride it during the flood.',
            options_ar: [
              'لِيَرْكَبَهَا عِنْدَ الطُّوفَانِ',
              'لِيَبِيعَهَا فِي السُّوقِ',
              'لِيُسَافِرَ إِلَى بَلَدٍ بَعِيدٍ',
            ],
            questionType: 'general',
          },
          {
            emoji: '🔪',
            question_ar: 'هَلْ أَرَادَ اللهُ أَنْ يَذْبَحَ إِبْرَاهِيمُ وَلَدَهُ ؟',
            question_en: 'Did Allah want Ibrahim to slaughter his son?',
            correct_ar: 'لَا، أَرَادَ أَنْ يَمْتَحِنَهُ فَقَطْ',
            correct_en: 'No, He only wanted to test him.',
            options_ar: [
              'لَا، أَرَادَ أَنْ يَمْتَحِنَهُ فَقَطْ',
              'نَعَمْ، أَرَادَ ذَلِكَ',
              'لَا، أَرَادَ أَنْ يُرْسِلَ مَلَكًا',
            ],
            questionType: 'hal',
          },
          {
            emoji: '💚',
            question_ar: 'مَا حَالُ قَلْبِ الذَّاكِرِ ؟',
            question_en: 'What is the state of the heart of the one who remembers Allah?',
            correct_ar: 'قَلْبُ الذَّاكِرِ حَيٌّ',
            correct_en: 'The heart of the rememberer is alive.',
            options_ar: [
              'قَلْبُ الذَّاكِرِ حَيٌّ',
              'قَلْبُ الذَّاكِرِ مَيِّتٌ',
              'قَلْبُ الذَّاكِرِ ثَقِيلٌ',
            ],
            questionType: 'general',
          },
        ],
      },
    },
    {
      id: '2-2-1-6',
      type: 'assessment',
      titleEn: 'Exercise — Sentence Variations',
      titleAr: 'تَمْرِين — قِرَاءَةُ الْجُمَل',
      payload: {
        instruction: 'Choose the correct meaning for each Arabic sentence.',
        questions: [
          {
            emoji: '👤',
            question_ar: 'خَالِدٌ صَدِيقِي - عَادَ صَدِيقِي خَالِدٌ مِنْ سَفَرِهِ',
            question_en: 'What does the second sentence mean?',
            correct_ar: 'My friend Khalid returned from his journey.',
            correct_en: 'My friend Khalid returned from his journey.',
            options_ar: [
              'My friend Khalid returned from his journey.',
              'My friend Khalid went on a journey.',
              'My friend Khalid is traveling now.',
            ],
          },
          {
            emoji: '👥',
            question_ar: 'مَاجِدٌ أَخُوكَ - أَعْرِفُ أَخَاكَ مَاجِدًا',
            question_en: 'What does the second sentence mean?',
            correct_ar: 'I know your brother Majid.',
            correct_en: 'I know your brother Majid.',
            options_ar: [
              'I know your brother Majid.',
              'I met your brother Majid.',
              'Your brother Majid knows me.',
            ],
          },
        ],
      },
    },
  ],
};
