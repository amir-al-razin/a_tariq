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
      titleBn: 'পাঠের শব্দভান্ডার',
      payload: {
        words: [
          {
            id: 1,
            ar: 'أَلِيمٌ',
            romanized: 'alīm',
            en: 'Painful',
            bn: 'যন্ত্রণাদায়ক',
            emoji: '😣',
          },
          {
            id: 2,
            ar: 'فَنَاءٌ',
            romanized: 'fanā\'',
            en: 'Courtyard',
            bn: 'উঠোন',
            emoji: '🏠',
          },
          {
            id: 3,
            ar: 'خِيَاطَةٌ',
            romanized: 'khiyāṭah',
            en: 'Sewing',
            bn: 'সেলাই',
            emoji: '🧵',
          },
          {
            id: 4,
            ar: 'صَدَقَةٌ',
            romanized: 'ṣadaqah',
            en: 'Charity',
            bn: 'দান',
            emoji: '🤝',
          },
          {
            id: 5,
            ar: 'بُخْلٌ',
            romanized: 'bukhl',
            en: 'Miserliness',
            bn: 'কৃপণতা',
            emoji: '🚫',
          },
          {
            id: 6,
            ar: 'سَخَاءٌ',
            romanized: 'sakhā\'',
            en: 'Generosity',
            bn: 'উদারতা',
            emoji: '💝',
          },
        ],
      },
    },
    // Form II - Taf\'eel verbs (past)
    {
      id: '2',
      type: 'verb_table',
      titleEn: 'Form II (Taf\'eel) — Teaching & Purifying Verbs',
      titleAr: 'الباب الثاني (التفعيل)',
      titleBn: 'ফর্ম ২ (তাফইল)',
      payload: {
        verbTense: 'past',
        baabLabel: 'Form II - Taf\'eel (التفعيل)',
        verbTable: [
          {
            root: 'عَلَّمَ',
            meaning: 'to teach',
            meaningBn: 'শিক্ষা দেওয়া',
            he: 'عَلَّمَ',
            she: 'عَلَّمَتْ',
            youM: 'عَلَّمْتَ',
            youF: 'عَلَّمْتِ',
            i: 'عَلَّمْتُ',
          },
          {
            root: 'نَظَّفَ',
            meaning: 'to clean',
            meaningBn: 'পরিষ্কার করা',
            he: 'نَظَّفَ',
            she: 'نَظَّفَتْ',
            youM: 'نَظَّفْتَ',
            youF: 'نَظَّفْتِ',
            i: 'نَظَّفْتُ',
          },
          {
            root: 'زَيَّنَ',
            meaning: 'to adorn/decorate',
            meaningBn: 'সাজানো',
            he: 'زَيَّنَ',
            she: 'زَيَّنَتْ',
            youM: 'زَيَّنْتَ',
            youF: 'زَيَّنْتِ',
            i: 'زَيَّنْتُ',
          },
          {
            root: 'بَشَّرَ',
            meaning: 'to give glad tidings',
            meaningBn: 'শুভ সংবাদ দেওয়া',
            he: 'بَشَّرَ',
            she: 'بَشَّرَتْ',
            youM: 'بَشَّرْتَ',
            youF: 'بَشَّرْتِ',
            i: 'بَشَّرْتُ',
          },
          {
            root: 'طَهَّرَ',
            meaning: 'to purify',
            meaningBn: 'পরিশুদ্ধ করা',
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
      titleEn: 'Form IV (Ifaal) — Causative Verbs',
      titleAr: 'الباب الرابع (الإفعال)',
      titleBn: 'ফর্ম ৪ (ইফাআল)',
      payload: {
        verbTense: 'past',
        baabLabel: 'Form IV - Ifaal (الإفعال)',
        verbTable: [
          {
            root: 'أَخْرَجَ',
            meaning: 'to bring out',
            meaningBn: 'বের করা',
            he: 'أَخْرَجَ',
            she: 'أَخْرَجَتْ',
            youM: 'أَخْرَجْتَ',
            youF: 'أَخْرَجْتِ',
            i: 'أَخْرَجْتُ',
          },
          {
            root: 'أَطْعَمَ',
            meaning: 'to feed',
            meaningBn: 'খাওয়ানো',
            he: 'أَطْعَمَ',
            she: 'أَطْعَمَتْ',
            youM: 'أَطْعَمْتَ',
            youF: 'أَطْعَمْتِ',
            i: 'أَطْعَمْتُ',
          },
          {
            root: 'أَنْفَقَ',
            meaning: 'to spend (money)',
            meaningBn: 'খরচ করা',
            he: 'أَنْفَقَ',
            she: 'أَنْفَقَتْ',
            youM: 'أَنْفَقْتَ',
            youF: 'أَنْفَقْتِ',
            i: 'أَنْفَقْتُ',
          },
          {
            root: 'أَفْسَدَ',
            meaning: 'to corrupt',
            meaningBn: 'বিপর্যয় করা',
            he: 'أَفْسَدَ',
            she: 'أَفْسَدَتْ',
            youM: 'أَفْسَدْتَ',
            youF: 'أَفْسَدْتِ',
            i: 'أَفْسَدْتُ',
          },
          {
            root: 'أَصْلَحَ',
            meaning: 'to rectify/reform',
            meaningBn: 'মেরামত করা',
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
      titleEn: 'Form V (Tafa\'al) — Reflexive Learning Verbs',
      titleAr: 'الباب الخامس (التفعّل)',
      titleBn: 'ফর্ম ৫ (তাফাল)',
      payload: {
        verbTense: 'past',
        baabLabel: 'Form V - Tafa\'al (التفعّل)',
        verbTable: [
          {
            root: 'تَعَلَّمَ',
            meaning: 'to learn',
            meaningBn: 'শেখা',
            he: 'تَعَلَّمَ',
            she: 'تَعَلَّمَتْ',
            youM: 'تَعَلَّمْتَ',
            youF: 'تَعَلَّمْتِ',
            i: 'تَعَلَّمْتُ',
          },
          {
            root: 'تَكَلَّمَ',
            meaning: 'to speak',
            meaningBn: 'কথা বলা',
            he: 'تَكَلَّمَ',
            she: 'تَكَلَّمَتْ',
            youM: 'تَكَلَّمْتَ',
            youF: 'تَكَلَّمْتِ',
            i: 'تَكَلَّمْتُ',
          },
          {
            root: 'تَحَدَّثَ',
            meaning: 'to converse',
            meaningBn: 'কথোপকথন করা',
            he: 'تَحَدَّثَ',
            she: 'تَحَدَّثَتْ',
            youM: 'تَحَدَّثْتَ',
            youF: 'تَحَدَّثْتِ',
            i: 'تَحَدَّثْتُ',
          },
          {
            root: 'تَقَبَّلَ',
            meaning: 'to accept',
            meaningBn: 'গ্রহণ করা',
            he: 'تَقَبَّلَ',
            she: 'تَقَبَّلَتْ',
            youM: 'تَقَبَّلْتَ',
            youF: 'تَقَبَّلْتِ',
            i: 'تَقَبَّلْتُ',
          },
          {
            root: 'تَطَهَّرَ',
            meaning: 'to purify oneself',
            meaningBn: 'নিজেকে পরিশুদ্ধ করা',
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
      titleBn: 'উৎপন্ন ক্রিয়া ফর্ম স্বীকৃতি',
      payload: {
        rules: [
          {
            label: 'Form II (Taf\'eel)',
            labelBn: 'ফর্ম ২ (তাফইল)',
            arabic: 'يظهر في الفعل الثاني تضعيف العين (double the middle letter)',
            romanized: 'yaz\'hur fī al-fi\'l al-thānī taḍ\'īf al-\'ī\'n',
            meaning:
              'Form II is recognized by doubling the middle letter of the verb root. It typically means to cause, make, or intensify an action.',
            meaningBn:
              'ফর্ম ২ ক্রিয়া মূলের মধ্যম অক্ষর দ্বিগুণ করে চেনা যায়। এটি সাধারণত একটি অ্যাকশন সৃষ্টি, তৈরি বা তীব্র করার অর্থ।',
            examples: [
              {
                ar: 'عَلَّمَ (he taught)',
                en: 'عَلَّمَ - doubled the middle م to create causative meaning',
                bn: 'শিক্ষা দেওয়া - হ্যাঁ, ফর্ম ২ দ্বিগুণ করা',
              },
              {
                ar: 'نَظَّفَ (he cleaned)',
                en: 'نَظَّفَ - Form II showing intensive meaning',
                bn: 'পরিষ্কার করা - ফর্ম ২',
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
      titleBn: 'বহুবচন আদেশমূলক ফর্ম ব্যবহার করা',
      payload: {
        rules: [
          {
            label: 'Plural Imperative Forms (Jama\'))',
            labelBn: 'বহুবচন আদেশ ফর্ম',
            arabic: 'استخدم صيغة الأمر الجمع عندما تأمر جماعة من الناس',
            romanized:
              'istahdim ṣīghat al-amr al-jama\' \'indamā ta\'mur jamā\'ah min al-nās',
            meaning:
              'Use the plural imperative form when commanding a group of people (more than one). The pattern remains consistent across different verb forms.',
            meaningBn:
              'একাধিক মানুষের একটি গোষ্ঠীকে আদেশ করার সময় বহুবচন আদেশ ফর্ম ব্যবহার করুন। প্যাটার্ন বিভিন্ন ক্রিয়া ফর্ম জুড়ে সামঞ্জস্যপূর্ণ থাকে।',
            examples: [
              {
                ar: 'عَلِّمُوا (You sg: teach!)',
                en: 'Plural masculine imperative from Form II',
                bn: 'বহুবচন পুংলিঙ্গ আদেশ ফর্ম ২ থেকে',
              },
              {
                ar: 'اجْتَهِدُوا (You pl: strive!)',
                en: 'Plural masculine imperative from Form VIII',
                bn: 'বহুবচন পুংলিঙ্গ আদেশ ফর্ম ৮ থেকে',
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
      titleBn: 'আদেশ এবং উৎসাহমূলক অংশ',
      payload: {
        paragraphs: [
          {
            titleEn: 'The Scholar\'s Sermon',
            titleBn: 'আলেমের উপদেশ',
            lines: [
              'قَالَ الْعَالِمُ فِي وَعْظِهِ : أَيُّهَا الْأَغْنِيَاءُ ! أَنْفِقُوا أَمْوَالَكُمْ فِي سَبِيلِ اللَّهِ',
              'وَ لَا تَجْمَعُوهَا لِدُنْيَاكُمْ . فَإِنَّ أَمْوَالَكُمْ لَا تَنْفَعُكُمْ بَعْدَ مَوْتِكُمْ .',
              'إِنَّ الْمُسْلِمِينَ يُجَاهِدُونَ فِي سَبِيلِ اللَّهِ وَ يَنْصُرُونَ دِينَ اللَّهِ .',
              'أَمَّا الْمُشْرِكُونَ فَيُفْسِدُونَ فِي الْأَرْضِ وَ لَا يُصْلِحُونَ .',
              'وَ الْمُؤْمِنُونَ يُصْلِحُونَ فِي الْأَرْضِ وَ لَا يُفْسِدُونَ .',
            ],
            translationEn:
              'The scholar said in his sermon: "O wealthy people! Spend your wealth in the path of Allah and do not hoard it for your worldly life. For indeed your wealth will not benefit you after your death. Indeed, Muslims strive in the path of Allah and support the religion of Allah. As for the polytheists, they cause corruption on the earth and do not rectify. But believers rectify on the earth and do not cause corruption."',
            translationBn:
              'আলেম তার উপদেশে বলেছেন: "হে সম্পদশালীরা! আল্লাহর পথে আপনার সম্পদ ব্যয় করুন এবং আপনার দুনিয়ার জন্য জমা করবেন না। কারণ আপনার সম্পদ আপনার মৃত্যুর পরে আপনাকে উপকৃত করবে না। নিশ্চয়ই মুসলিমরা আল্লাহর পথে সংগ্রাম করে এবং আল্লাহর দীনকে সমর্থন করে। মুশরিকদের ব্যাপারে তারা পৃথিবীতে বিপর্যয় সৃষ্টি করে এবং সংশোধন করে না। কিন্তু বিশ্বাসীরা পৃথিবীতে সংশোধন করে এবং বিপর্যয় সৃষ্টি করে না।"',
          },
          {
            titleEn: 'Majid\'s Friends',
            titleBn: 'মাজিদের বন্ধুরা',
            lines: [
              'أَصْدِقَاءُ مَاجِدٍ طَيِّبُونَ . عِنْدَمَا يَخْرُجُونَ مِنْ بُيُوتِهِمْ يُسَلِّمُونَ عَلَى آبَائِهِمْ وَ أُمَّهَاتِهِمْ .',
              'وَ عِنْدَمَا يَدْخُلُونَ الْفَصْلَ يُسَلِّمُونَ عَلَى مُعَلِّمِهِمْ . هُمْ يَجْتَهِدُونَ فِي دِرَاسَتِهِمْ فَيَنْجَحُونَ فِي الِامْتِحَانِ .',
              'هُمْ يُفْهِمُونَ كَلَامَ اللَّهِ ، لِأَنَّهُمْ تَعَلَّمُوا اللُّغَةَ الْعَرَبِيَّةَ .',
              'هُمْ يَتَكَلَّمُونَ مَعَ أَصْدِقَائِهِمُ الطَّيِّبِينَ بِاللُّغَةِ الْعَرَبِيَّةِ .',
            ],
            translationEn:
              'Majid\'s friends are good. When they leave their homes, they greet their fathers and mothers. When they enter the classroom, they greet their teacher. They strive hard in their studies and succeed in the examination. They understand Allah\'s speech because they learned the Arabic language. They speak with their good friends in Arabic.',
            translationBn:
              'মাজিদের বন্ধুরা ভালো। যখন তারা তাদের বাড়ি থেকে বের হয়, তারা তাদের পিতা এবং মায়েদের সাথে সালাম করে। যখন তারা শ্রেণিকক্ষে প্রবেশ করে, তারা তাদের শিক্ষকের সাথে সালাম করে। তারা তাদের অধ্যয়নে কঠোর পরিশ্রম করে এবং পরীক্ষায় সফল হয়। তারা আল্লাহর কথা বোঝে কারণ তারা আরবি ভাষা শিখেছে। তারা তাদের ভালো বন্ধুদের সাথে আরবিতে কথা বলে।',
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
      titleBn: 'প্রাসঙ্গিক ক্রিয়া ফর্ম চিহ্নিতকরণ',
      payload: {
        instruction:
          'Identify the verb form (bāb) for each given verb and explain the meaning change from the root.',
        instructionBn:
          'প্রতিটি ক্রিয়ার জন্য ক্রিয়া ফর্ম (বাব) চিহ্নিত করুন এবং মূল থেকে অর্থ পরিবর্তন ব্যাখ্যা করুন।',
        text: `
Verb Form Recognition Exercise:

1. عَلَّمَ - Identify: Form II • Meaning: to teach (intensive/causative)
   Root فعل → Form II عَلَّم (doubled the letter ل)
   
2. تَعَلَّمَ - Identify: Form V • Meaning: to learn (passive/reflexive of teach)
   Root فعل → Form V تَعَلَّم (learning as reflexive action)
   
3. أَنْفَقَ - Identify: Form IV • Meaning: to spend money (causative)
   Root فقع → Form IV أَنْفَق (to cause to flow out)
   
Try identifying these:
- جَاهَدَ → Form III (mutual effort/struggle)
- نَوَّرَ → Form II → ؟
- اجْتَهَدَ → Form VIII → ؟
        `,
      },
    },
    // Assessment
    {
      id: '9',
      type: 'assessment',
      titleEn: 'Assessment Exercises',
      titleAr: 'تمارين التقييم',
      titleBn: 'মূল্যায়ন অনুশীলন',
      payload: {
        instruction:
          'Complete the assessment exercises to verify your understanding of verb forms and commands.',
        instructionBn:
          'ক্রিয়া ফর্ম এবং আদেশের আপনার বোঝাপড়া যাচাই করতে মূল্যায়ন অনুশীলন সম্পূর্ণ করুন।',
        items: [
          {
            emoji: '✍️',
            ar: 'أَكْمِلْ : عَلَّمَ (ماضي) → يُعَلِّمُ (مضارع) → ؟ (أمر)',
            en: 'Complete: taught (past) → teaches (present) → ? (imperative)',
            bn: 'সম্পূর্ণ করুন: শিক্ষা দিয়েছে (অতীত) → শিক্ষা দেয় (বর্তমান) → ? (আদেশ)',
          },
          {
            emoji: '🎯',
            ar: 'ترجم: نَوِّرُوا قُلُوبَكُمْ بِنُورِ الْعِلْمِ',
            en: 'Translate: Enlighten your hearts with the light of knowledge (plural command)',
            bn: 'অনুবাদ করুন: জ্ঞানের আলো দিয়ে আপনার হৃদয়কে আলোকিত করুন (বহুবচন আদেশ)',
          },
          {
            emoji: '💡',
            ar: 'أَيُّ بَاب : تَعَلَّمُوا؟ هل هو باب ثاني أو خامس؟ اشرح',
            en: 'Which form: تَعَلَّمُوا? Is it Form II or Form V? Explain.',
            bn: 'কোন ফর্ম: তা দীর্ঘ করুন? এটি ফর্ম ২ বা ফর্ম ৫? ব্যাখ্যা করুন।',
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
      titleBn: 'পাঠ বোঝার প্রশ্ন',
      payload: {
        instruction: 'Answer the following questions in Arabic based on the reading passages.',
        instructionBn: 'পাঠের অংশের উপর ভিত্তি করে নিম্নলিখিত প্রশ্নের উত্তর আরবিতে দিন।',
        questions: [
          {
            emoji: '👨‍🏫',
            question_ar: 'مَاذَا قَالَ الْعَالِمُ لِلْأَغْنِيَاءِ؟',
            question_en: 'What did the scholar say to the wealthy?',
            question_bn: 'আলেম সম্পদশালীদের কাছে কী বলেছিল?',
            correct_ar:
              'قَالَ لَهُمْ : أَنْفِقُوا أَمْوَالَكُمْ فِي سَبِيلِ اللَّهِ وَ لَا تَجْمَعُوهَا',
            correct_en: 'He said to them: Spend your wealth in the path of Allah and do not hoard it.',
            correct_bn: 'তিনি তাদের বলেছিলেন: আল্লাহর পথে আপনার সম্পদ ব্যয় করুন এবং তা জমা করবেন না।',
            options_ar: [
              'أَنْفِقُوا أَمْوَالَكُمْ',
              'لَا تُنْفِقُوا أَمْوَالَكُمْ',
              'اِحْفَظُوا أَمْوَالَكُمْ',
            ],
            questionType: 'general',
          },
          {
            emoji: '❌',
            question_ar: 'هَلْ يُنْفِقُ الْبُخَلَاءُ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ؟',
            question_en: 'Do the misers spend their wealth in the path of Allah?',
            question_bn: 'কৃপণরা কি আল্লাহর পথে তাদের সম্পদ ব্যয় করে?',
            correct_ar: 'لَا ، الْبُخَلَاءُ لَا يُنْفِقُونَ',
            correct_en: 'No, the misers do not spend.',
            correct_bn: 'না, কৃপণরা ব্যয় করে না।',
            options_ar: ['نَعَمْ', 'لَا', 'رُبَّما'],
            questionType: 'hal',
          },
          {
            emoji: '✨',
            question_ar: 'بِمَ تَعَلَّمَ أَصْدِقَاءُ مَاجِدٍ الْعَرَبِيَّةَ؟',
            question_en: 'How did Majid\'s friends learn Arabic?',
            question_bn: 'মাজিদের বন্ধুরা কিভাবে আরবি শিখেছে?',
            correct_ar: 'تَعَلَّمُوا اللُّغَةَ الْعَرَبِيَّةَ فِي الْفَصْلِ/',
            correct_en: 'They learned Arabic in the classroom.',
            correct_bn: 'তারা শ্রেণিকক্ষে আরবি শিখেছে।',
            options_ar: [
              'فِي الْبَيْتِ',
              'فِي الْفَصْلِ',
              'فِي الْمَسْجِدِ',
            ],
            questionType: 'general',
          },
          {
            emoji: '🌍',
            question_ar: 'مَا الْفَرْقُ بَيْنَ الْمُسْلِمِينَ وَ الْمُشْرِكِينَ فِي الآيَةِ؟',
            question_en:
              'What is the difference shown between Muslims and polytheists in the verse?',
            question_bn: 'আয়াতে মুসলিমদের এবং মুশরিকদের মধ্যে পার্থক্য কী দেখানো হয়েছে?',
            correct_ar:
              'الْمُسْلِمُونَ يُصْلِحُونَ وَ الْمُشْرِكُونَ يُفْسِدُونَ',
            correct_en: 'Muslims rectify while polytheists cause corruption.',
            correct_bn: 'মুসলিমরা সংশোধন করে যখন মুশরিকরা বিপর্যয় সৃষ্টি করে।',
            options_ar: [
              'الْمُسْلِمُونَ أَقْوِياءُ',
              'الْمُشْرِكُونَ عُلَمَاءُ',
              'الْمُسْلِمُونَ يُصْلِحُونَ',
            ],
            questionType: 'general',
          },
          {
            emoji: '⏰',
            question_ar: 'مَتَى يُسَلِّمُ الْأَوْلَادُ عَلَى آبَائِهِمْ؟',
            question_en: 'When do the boys greet their fathers?',
            question_bn: 'ছেলেরা কখন তাদের পিতার সাথে সালাম করে?',
            correct_ar: 'عِنْدَمَا يَخْرُجُونَ مِنْ بُيُوتِهِمْ',
            correct_en: 'When they leave their homes.',
            correct_bn: 'যখন তারা তাদের বাড়ি থেকে বেরিয়ে যায়।',
            options_ar: [
              'فِي الصَّبَاحِ',
              'عِنْدَمَا يَخْرُجُونَ',
              'فِي الْمَسَاءِ',
            ],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};
