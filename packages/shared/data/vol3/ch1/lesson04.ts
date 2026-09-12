import type { LessonData } from '../../curriculum';

export const lesson04: LessonData = {
  darsNumber: 4,
  chunks: [
    // Vocabulary
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Vocabulary from the Lesson',
      titleAr: 'مفردات الدرس',
      payload: {
        words: [
          {
            id: 1,
            ar: 'أَلِيمٌ',
            romanized: 'alīm',
            en: 'Painful',
            emoji: '😣',
          },
          {
            id: 2,
            ar: 'فَنَاءٌ',
            romanized: "fanā'",
            en: 'Courtyard',
            emoji: '🏠',
          },
          {
            id: 3,
            ar: 'خِيَاطَةٌ',
            romanized: 'khiyāṭah',
            en: 'Sewing',
            emoji: '🧵',
          },
          {
            id: 4,
            ar: 'صَدَقَةٌ',
            romanized: 'ṣadaqah',
            en: 'Charity',
            emoji: '🤝',
          },
          {
            id: 5,
            ar: 'بُخْلٌ',
            romanized: 'bukhl',
            en: 'Miserliness',
            emoji: '🚫',
          },
          {
            id: 6,
            ar: 'سَخَاءٌ',
            romanized: "sakhā'",
            en: 'Generosity',
            emoji: '💝',
          },
        ],
      },
    },
    // Form II - Taf\'eel verbs (past)
    {
      id: '2',
      type: 'verb_table',
      titleEn: "Form II (Taf'eel) - Teaching & Purifying Verbs",
      titleAr: 'الباب الثاني (التفعيل)',
      payload: {
        verbTense: 'past',
        baabLabel: "Form II - Taf'eel (التفعيل)",
        verbTable: [
          {
            root: 'عَلَّمَ',
            meaning: 'to teach',
            he: 'عَلَّمَ',
            she: 'عَلَّمَتْ',
            youM: 'عَلَّمْتَ',
            youF: 'عَلَّمْتِ',
            i: 'عَلَّمْتُ',
          },
          {
            root: 'نَظَّفَ',
            meaning: 'to clean',
            he: 'نَظَّفَ',
            she: 'نَظَّفَتْ',
            youM: 'نَظَّفْتَ',
            youF: 'نَظَّفْتِ',
            i: 'نَظَّفْتُ',
          },
          {
            root: 'زَيَّنَ',
            meaning: 'to adorn/decorate',
            he: 'زَيَّنَ',
            she: 'زَيَّنَتْ',
            youM: 'زَيَّنْتَ',
            youF: 'زَيَّنْتِ',
            i: 'زَيَّنْتُ',
          },
          {
            root: 'بَشَّرَ',
            meaning: 'to give glad tidings',
            he: 'بَشَّرَ',
            she: 'بَشَّرَتْ',
            youM: 'بَشَّرْتَ',
            youF: 'بَشَّرْتِ',
            i: 'بَشَّرْتُ',
          },
          {
            root: 'طَهَّرَ',
            meaning: 'to purify',
            he: 'طَهَّرَ',
            she: 'طَهَّرَتْ',
            youM: 'طَهَّرْتَ',
            youF: 'طَهَّرْتِ',
            i: 'طَهَّرْتُ',
          },
        ],
      },
    },
    // Form IV - Ifaal verbs
    {
      id: '3',
      type: 'verb_table',
      titleEn: 'Form IV (Ifaal) - Causative Verbs',
      titleAr: 'الباب الرابع (الإفعال)',
      payload: {
        verbTense: 'past',
        baabLabel: 'Form IV - Ifaal (الإفعال)',
        verbTable: [
          {
            root: 'أَخْرَجَ',
            meaning: 'to bring out',
            he: 'أَخْرَجَ',
            she: 'أَخْرَجَتْ',
            youM: 'أَخْرَجْتَ',
            youF: 'أَخْرَجْتِ',
            i: 'أَخْرَجْتُ',
          },
          {
            root: 'أَطْعَمَ',
            meaning: 'to feed',
            he: 'أَطْعَمَ',
            she: 'أَطْعَمَتْ',
            youM: 'أَطْعَمْتَ',
            youF: 'أَطْعَمْتِ',
            i: 'أَطْعَمْتُ',
          },
          {
            root: 'أَنْفَقَ',
            meaning: 'to spend (money)',
            he: 'أَنْفَقَ',
            she: 'أَنْفَقَتْ',
            youM: 'أَنْفَقْتَ',
            youF: 'أَنْفَقْتِ',
            i: 'أَنْفَقْتُ',
          },
          {
            root: 'أَفْسَدَ',
            meaning: 'to corrupt',
            he: 'أَفْسَدَ',
            she: 'أَفْسَدَتْ',
            youM: 'أَفْسَدْتَ',
            youF: 'أَفْسَدْتِ',
            i: 'أَفْسَدْتُ',
          },
          {
            root: 'أَصْلَحَ',
            meaning: 'to rectify/reform',
            he: 'أَصْلَحَ',
            she: 'أَصْلَحَتْ',
            youM: 'أَصْلَحْتَ',
            youF: 'أَصْلَحْتِ',
            i: 'أَصْلَحْتُ',
          },
        ],
      },
    },
    // Form V - Tafa\'al verbs
    {
      id: '4',
      type: 'verb_table',
      titleEn: "Form V (Tafa'al) - Reflexive Learning Verbs",
      titleAr: 'الباب الخامس (التفعّل)',
      payload: {
        verbTense: 'past',
        baabLabel: "Form V - Tafa'al (التفعّل)",
        verbTable: [
          {
            root: 'تَعَلَّمَ',
            meaning: 'to learn',
            he: 'تَعَلَّمَ',
            she: 'تَعَلَّمَتْ',
            youM: 'تَعَلَّمْتَ',
            youF: 'تَعَلَّمْتِ',
            i: 'تَعَلَّمْتُ',
          },
          {
            root: 'تَكَلَّمَ',
            meaning: 'to speak',
            he: 'تَكَلَّمَ',
            she: 'تَكَلَّمَتْ',
            youM: 'تَكَلَّمْتَ',
            youF: 'تَكَلَّمْتِ',
            i: 'تَكَلَّمْتُ',
          },
          {
            root: 'تَحَدَّثَ',
            meaning: 'to converse',
            he: 'تَحَدَّثَ',
            she: 'تَحَدَّثَتْ',
            youM: 'تَحَدَّثْتَ',
            youF: 'تَحَدَّثْتِ',
            i: 'تَحَدَّثْتُ',
          },
          {
            root: 'تَقَبَّلَ',
            meaning: 'to accept',
            he: 'تَقَبَّلَ',
            she: 'تَقَبَّلَتْ',
            youM: 'تَقَبَّلْتَ',
            youF: 'تَقَبَّلْتِ',
            i: 'تَقَبَّلْتُ',
          },
          {
            root: 'تَطَهَّرَ',
            meaning: 'to purify oneself',
            he: 'تَطَهَّرَ',
            she: 'تَطَهَّرَتْ',
            youM: 'تَطَهَّرْتَ',
            youF: 'تَطَهَّرْتِ',
            i: 'تَطَهَّرْتُ',
          },
        ],
      },
    },
    // Grammar rule 1
    {
      id: '5',
      type: 'grammar_rule',
      titleEn: 'Recognition of Derived Verb Forms (Abwaab)',
      titleAr: 'التعرف على الأبواب المشتقة',
      payload: {
        rules: [
          {
            label: "Form II (Taf'eel)",
            arabic: 'يظهر في الفعل الثاني تضعيف العين (double the middle letter)',
            romanized: "yaz'hur fī al-fi'l al-thānī taḍ'īf al-'ī'n",
            meaning:
              'Form II is recognized by doubling the middle letter of the verb root. It typically means to cause, make, or intensify an action.',
            examples: [
              {
                ar: 'عَلَّمَ (he taught)',
                en: 'عَلَّمَ - doubled the middle م to create causative meaning',
              },
              {
                ar: 'نَظَّفَ (he cleaned)',
                en: 'نَظَّفَ - Form II showing intensive meaning',
              },
            ],
          },
        ],
      },
    },
    // Grammar rule 2
    {
      id: '6',
      type: 'grammar_rule',
      titleEn: 'Using Plural Imperative Forms in Commands',
      titleAr: 'استخدام صيغة الأمر الجمع',
      payload: {
        rules: [
          {
            label: "Plural Imperative Forms (Jama'))",
            arabic: 'استخدم صيغة الأمر الجمع عندما تأمر جماعة من الناس',
            romanized: "istahdim ṣīghat al-amr al-jama' 'indamā ta'mur jamā'ah min al-nās",
            meaning:
              'Use the plural imperative form when commanding a group of people (more than one). The pattern remains consistent across different verb forms.',
            examples: [
              {
                ar: 'عَلِّمُوا (You sg: teach!)',
                en: 'Plural masculine imperative from Form II',
              },
              {
                ar: 'اجْتَهِدُوا (You pl: strive!)',
                en: 'Plural masculine imperative from Form VIII',
              },
            ],
          },
        ],
      },
    },
    // Paragraphs section
    {
      id: '7',
      type: 'paragraph',
      titleEn: 'Command and Exhortation Passages',
      titleAr: 'فقرات الأوامر والحث',
      payload: {
        paragraphs: [
          {
            titleEn: "The Scholar's Sermon",
            lines: [
              'قَالَ الْعَالِمُ فِي وَعْظِهِ : أَيُّهَا الْأَغْنِيَاءُ ! أَنْفِقُوا أَمْوَالَكُمْ فِي سَبِيلِ اللَّهِ',
              'وَ لَا تَجْمَعُوهَا لِدُنْيَاكُمْ . فَإِنَّ أَمْوَالَكُمْ لَا تَنْفَعُكُمْ بَعْدَ مَوْتِكُمْ .',
              'إِنَّ الْمُسْلِمِينَ يُجَاهِدُونَ فِي سَبِيلِ اللَّهِ وَ يَنْصُرُونَ دِينَ اللَّهِ .',
              'أَمَّا الْمُشْرِكُونَ فَيُفْسِدُونَ فِي الْأَرْضِ وَ لَا يُصْلِحُونَ .',
              'وَ الْمُؤْمِنُونَ يُصْلِحُونَ فِي الْأَرْضِ وَ لَا يُفْسِدُونَ .',
            ],
            translationEn:
              'The scholar said in his sermon: "O wealthy people! Spend your wealth in the path of Allah and do not hoard it for your worldly life. For indeed your wealth will not benefit you after your death. Indeed, Muslims strive in the path of Allah and support the religion of Allah. As for the polytheists, they cause corruption on the earth and do not rectify. But believers rectify on the earth and do not cause corruption."',
          },
          {
            titleEn: "Majid's Friends",
            lines: [
              'أَصْدِقَاءُ مَاجِدٍ طَيِّبُونَ . عِنْدَمَا يَخْرُجُونَ مِنْ بُيُوتِهِمْ يُسَلِّمُونَ عَلَى آبَائِهِمْ وَ أُمَّهَاتِهِمْ .',
              'وَ عِنْدَمَا يَدْخُلُونَ الْفَصْلَ يُسَلِّمُونَ عَلَى مُعَلِّمِهِمْ . هُمْ يَجْتَهِدُونَ فِي دِرَاسَتِهِمْ فَيَنْجَحُونَ فِي الِامْتِحَانِ .',
              'هُمْ يُفْهِمُونَ كَلَامَ اللَّهِ ، لِأَنَّهُمْ تَعَلَّمُوا اللُّغَةَ الْعَرَبِيَّةَ .',
              'هُمْ يَتَكَلَّمُونَ مَعَ أَصْدِقَائِهِمُ الطَّيِّبِينَ بِاللُّغَةِ الْعَرَبِيَّةِ .',
            ],
            translationEn:
              "Majid's friends are good. When they leave their homes, they greet their fathers and mothers. When they enter the classroom, they greet their teacher. They strive hard in their studies and succeed in the examination. They understand Allah's speech because they learned the Arabic language. They speak with their good friends in Arabic.",
          },
        ],
      },
    },
    // Application
    {
      id: '8',
      type: 'application',
      titleEn: 'Identifying Verb Forms in Context',
      titleAr: 'تحديد الأبواب في السياق',
      payload: {
        instruction:
          'Identify the verb form (bāb) for each given verb and explain the meaning change from the root.',
        items: [
          {
            emoji: '🔍',
            ar: 'عَلَّمَ - الباب الثاني (التفعيل)',
            en: 'Form II • Meaning: to teach (intensive/causative). Root: ع-ل-م',
          },
          {
            emoji: '🧠',
            ar: 'تَعَلَّمَ - الباب الخامس (التفعّل)',
            en: 'Form V • Meaning: to learn (reflexive of teach). Root: ع-ل-م',
          },
          {
            emoji: '💸',
            ar: 'أَنْفَقَ - الباب الرابع (الإفعال)',
            en: 'Form IV • Meaning: to spend money (causative). Root: ن-ف-ق',
          },
          {
            emoji: '⚔️',
            ar: 'جَاهَدَ - الباب الثالث (المفاعلة)',
            en: 'Form III • Meaning: mutual effort/struggle. Root: ج-ه-د',
          },
          {
            emoji: '💡',
            ar: 'نَوَّرَ - الباب الثاني (التفعيل)',
            en: 'Form II • Meaning: to illuminate (intensive/causative). Root: ن-و-ر',
          },
          {
            emoji: '🎯',
            ar: 'اجْتَهَدَ - الباب الثامن (الافتعال)',
            en: 'Form VIII • Meaning: to strive (reflexive). Root: ج-ه-د',
          },
        ],
      },
    },
    // Assessment
    {
      id: '9',
      type: 'assessment',
      titleEn: 'Assessment Exercises',
      titleAr: 'تمارين التقييم',
      payload: {
        instruction:
          'Complete the assessment exercises to verify your understanding of verb forms and commands.',
        questions: [
          {
            emoji: '✍️',
            question_ar: 'أَكْمِلْ : عَلَّمَ (مَاضِي) → يُعَلِّمُ (مُضَارِع) → ؟ (أَمْر)',
            question_en: 'Complete: taught (past) → teaches (present) → ? (imperative)',
            correct_ar: 'عَلِّمْ',
            correct_en: 'Teach!',
            options_ar: ['عَلِّمْ', 'تَعَلَّمْ', 'يُعَلِّمُ'],
            questionType: 'general',
          },
          {
            emoji: '🎯',
            question_ar:
              'أَيُّ جُمْلَةٍ تَعْنِي: Enlighten your hearts with the light of knowledge؟',
            question_en: 'Which sentence means: Enlighten your hearts with the light of knowledge?',
            correct_ar: 'نَوِّرُوا قُلُوبَكُمْ بِنُورِ الْعِلْمِ',
            correct_en: 'Enlighten your hearts with the light of knowledge',
            options_ar: [
              'نَوِّرُوا قُلُوبَكُمْ بِنُورِ الْعِلْمِ',
              'عَلِّمُوا قُلُوبَكُمْ بِنُورِ الْعِلْمِ',
              'نَظِّفُوا قُلُوبَكُمْ بِنُورِ الْعِلْمِ',
            ],
            questionType: 'general',
          },
          {
            emoji: '💡',
            question_ar: 'أَيُّ بَابٍ هُوَ الْفِعْلُ (تَعَلَّمُوا)؟',
            question_en: 'Which verb form (Baab) is the verb "تَعَلَّمُوا" (you all learn)?',
            correct_ar: 'بَابُ التَّفَعُّلِ (الخامس)',
            correct_en: "Form V (Tafa'al)",
            options_ar: [
              'بَابُ التَّفَعُّلِ (الخامس)',
              'بَابُ التَّفْعِيلِ (الثاني)',
              'بَابُ الْإِفْعَالِ (الرابع)',
            ],
            questionType: 'general',
          },
        ],
      },
    },
    // Q&A
    {
      id: '10',
      type: 'q_and_a',
      titleEn: 'Reading Comprehension Questions',
      titleAr: 'أسئلة فهم الدرس',
      payload: {
        instruction: 'Answer the following questions in Arabic based on the reading passages.',
        questions: [
          {
            emoji: '👨‍🏫',
            question_ar: 'مَاذَا قَالَ الْعَالِمُ لِلْأَغْنِيَاءِ؟',
            question_en: 'What did the scholar say to the wealthy?',
            correct_ar:
              'قَالَ لَهُمْ : أَنْفِقُوا أَمْوَالَكُمْ فِي سَبِيلِ اللَّهِ وَ لَا تَجْمَعُوهَا',
            correct_en:
              'He said to them: Spend your wealth in the path of Allah and do not hoard it.',
            options_ar: [
              'قَالَ لَهُمْ : أَنْفِقُوا أَمْوَالَكُمْ فِي سَبِيلِ اللَّهِ وَ لَا تَجْمَعُوهَا',
              'قَالَ لَهُمْ : لَا تُنْفِقُوا أَمْوَالَكُمْ',
              'قَالَ لَهُمْ : اِحْفَظُوا أَمْوَالَكُمْ لِدُنْيَاكُمْ',
            ],
            questionType: 'general',
          },
          {
            emoji: '❌',
            question_ar: 'هَلْ يُنْفِقُ الْبُخَلَاءُ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ؟',
            question_en: 'Do the misers spend their wealth in the path of Allah?',
            correct_ar: 'لَا ، الْبُخَلَاءُ لَا يُنْفِقُونَ',
            correct_en: 'No, the misers do not spend.',
            options_ar: [
              'لَا ، الْبُخَلَاءُ لَا يُنْفِقُونَ',
              'نَعَمْ ، الْبُخَلَاءُ يُنْفِقُونَ',
              'رُبَّما يُنْفِقُونَ',
            ],
            questionType: 'hal',
          },
          {
            emoji: '✨',
            question_ar: 'بِمَ تَعَلَّمَ أَصْدِقَاءُ مَاجِدٍ الْعَرَبِيَّةَ؟',
            question_en: "How did Majid's friends learn Arabic?",
            correct_ar: 'تَعَلَّمُوا اللُّغَةَ الْعَرَبِيَّةَ فِي الْفَصْلِ',
            correct_en: 'They learned Arabic in the classroom.',
            options_ar: [
              'تَعَلَّمُوا اللُّغَةَ الْعَرَبِيَّةَ فِي الْفَصْلِ',
              'تَعَلَّمُوا اللُّغَةَ الْعَرَبِيَّةَ فِي الْبَيْتِ',
              'تَعَلَّمُوا اللُّغَةَ الْعَرَبِيَّةَ فِي الْمَسْجِدِ',
            ],
            questionType: 'general',
          },
          {
            emoji: '🌍',
            question_ar: 'مَا الْفَرْقُ بَيْنَ الْمُسْلِمِينَ وَ الْمُشْرِكِينَ فِي الآيَةِ؟',
            question_en:
              'What is the difference shown between Muslims and polytheists in the verse?',
            correct_ar: 'الْمُسْلِمُونَ يُصْلِحُونَ وَ الْمُشْرِكُونَ يُفْسِدُونَ',
            correct_en: 'Muslims rectify while polytheists cause corruption.',
            options_ar: [
              'الْمُسْلِمُونَ يُصْلِحُونَ وَ الْمُشْرِكُونَ يُفْسِدُونَ',
              'الْمُسْلِمُونَ يُفْسِدُونَ وَ الْمُشْرِكُونَ يُصْلِحُونَ',
              'الْمُسْلِمُونَ أَقْوِياءُ وَ الْمُشْرِكُونَ ضُعَفَاءُ',
            ],
            questionType: 'general',
          },
          {
            emoji: '⏰',
            question_ar: 'مَتَى يُسَلِّمُ الْأَوْلَادُ عَلَى آبَائِهِمْ؟',
            question_en: 'When do the boys greet their fathers?',
            correct_ar: 'عِنْدَمَا يَخْرُجُونَ مِنْ بُيُوتِهِمْ',
            correct_en: 'When they leave their homes.',
            options_ar: [
              'عِنْدَمَا يَخْرُجُونَ مِنْ بُيُوتِهِمْ',
              'عِنْدَمَا يَدْخُلُونَ الْفَصْلَ',
              'فِي الْمَسَاءِ عِنْدَمَا يَلْعَبُونَ',
            ],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};
