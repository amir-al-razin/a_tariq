import type { LessonData } from '../../curriculum';

export const lesson05: LessonData = {
  darsNumber: 5,
  chunks: [
    {
      id: '1',
      type: 'grammar_rule',
      titleEn: 'Defective Verbs with أَنْ',
      titleAr: 'حَالَةُ النَّصْبِ فِي الأَفْعَالِ النَّاقِصَةِ مَعَ أَنْ',
      titleBn: 'নকিস ক্রিয়ার নসব অবস্থা أَنْ এর সাথে',
      payload: {
        rules: [
          {
            label: 'Masculine Plural',
            labelBn: 'পুংলিঙ্গ বহুবচন',
            arabic: 'أَرَادُوا أَن يَدْعُوا / أَرَدْتُمْ أَن تَدْعُوا',
            romanized: 'arādū an yadʿū / aradtum an tadʿū',
            meaning: 'The final Nun (ن) drops.',
            meaningBn: 'শেষের নুন (ن) বাদ যায়।',
            examples: [
              { ar: 'أَرَادُوا أَن يَدْعُوا', en: 'They [masculine] wanted to call', bn: 'তারা [পুরুষ] ডাকতে চেয়েছিল' },
              { ar: 'أَرَدْتُمْ أَن تَدْعُوا', en: 'You [masculine plural] wanted to call', bn: 'তোমরা [পুরুষ] ডাকতে চেয়েছিলে' },
            ],
          },
          {
            label: 'Feminine Plural',
            labelBn: 'স্ত্রীলিঙ্গ বহুবচন',
            arabic: 'أَرَدْنَ أَن يَدْعُونَ / أَرَدْتُنَّ أَن تَدْعُونَ',
            romanized: 'aradna an yadʿūna / aradtunna an tadʿūna',
            meaning: 'The final Nun (ن) remains unchanged.',
            meaningBn: 'শেষের নুন (ن) অপরিবর্তিত থাকে।',
            examples: [
              { ar: 'أَرَدْنَ أَن يَدْعُونَ', en: 'They [feminine] wanted to call', bn: 'তারা [মহিলা] ডাকতে চেয়েছিল' },
              { ar: 'أَرَدْتُنَّ أَن تَدْعُونَ', en: 'You [feminine plural] wanted to call', bn: 'তোমরা [মহিলা] ডাকতে চেয়েছিলে' },
            ],
          },
          {
            label: 'First Person Plural',
            labelBn: 'উত্তম পুরুষ বহুবচন',
            arabic: 'أَرَدْنَا أَن نَدْعُوَ',
            romanized: 'aradnā an nadʿuwa',
            meaning: 'The weak letter takes a fatḥah.',
            meaningBn: 'দুর্বল অক্ষরটি ফাতহা গ্রহণ করে।',
            examples: [{ ar: 'أَرَدْنَا أَن نَدْعُوَ', en: 'We wanted to call', bn: 'আমরা ডাকতে চেয়েছিলাম' }],
          },
        ],
      },
    },
    {
      id: '2',
      type: 'application',
      titleEn: 'Application: Plural Defective Verbs',
      titleAr: 'تَطْبِيقُ الأَفْعَالِ النَّاقِصَةِ',
      titleBn: 'প্রয়োগ: বহুবচন নকিস ক্রিয়া',
      payload: {
        instruction: 'Memorize the following verbs adapting to the pattern:',
        instructionBn: 'নিচের ক্রিয়াগুলো মুখস্থ করো:',
        items: [
          { ar: 'أَرَادُوا أَنْ يَتْلُوا', en: 'They wanted to recite', bn: 'তারা তিলাওয়াত করতে চেয়েছিল', emoji: '📖' },
          { ar: 'يُرِيدُونَ أَنْ يَمْحُوا', en: 'They want to erase', bn: 'তারা মুছতে চায়', emoji: '🧽' },
          { ar: 'لَنْ يَسْتَطِيعُوا أَنْ يَنْجُوا', en: 'They will never be able to escape', bn: 'তারা কখনো পালাতে পারবে না', emoji: '🏃' },
          { ar: 'مَا اسْتَطَاعُوا أَنْ يَرْمُوا', en: 'They were not able to throw', bn: 'তারা নিক্ষেপ করতে পারেনি', emoji: '⚾' },
          { ar: 'يُرِيدُونَ أَنْ يَبْنُوا', en: 'They want to build', bn: 'তারা বানাতে চায়', emoji: '🏗️' },
          { ar: 'يَسْتَطِيعُونَ أَنْ يَمْشُوا', en: 'They are able to walk', bn: 'তারা হাঁটতে সক্ষম', emoji: '🚶' },
          { ar: 'لَا يَسْتَطِيعُونَ أَنْ يَنْسَوْا', en: 'They are not able to forget', bn: 'তারা ভুলতে পারে না', emoji: '🧠' },
          { ar: 'أَرْجُو أَنْ تَخْشَوْا', en: 'I hope that you all fear', bn: 'আমি আশা করি তোমরা সবাই ভয় করবে', emoji: '😨' },
          { ar: 'أَمَرَهُمُ اللهُ أَنْ يَثْبُتُوا', en: 'Allah commanded them to be firm', bn: 'আল্লাহ তাদের দৃঢ় থাকার নির্দেশ দিয়েছেন', emoji: '🛡️' },
          { ar: 'يَجِبُ عَلَيْهِمْ أَنْ يُزَكُّوا أَنْفُسَهُمْ', en: 'It is obligatory upon them to purify themselves', bn: 'তাদের উপর নিজেদের পবিত্র করা আবশ্যক', emoji: '✨' },
          { ar: 'يَسْعَوْنَ أَنْ يَرْضَوْا', en: 'They strive to be pleased', bn: 'তারা সন্তুষ্ট হওয়ার জন্য চেষ্টা করে', emoji: '😊' },
          { ar: 'نَوَوْا أَنْ يُصَلُّوا', en: 'They intended to pray', bn: 'তারা সালাত পড়ার নিয়ত করেছিল', emoji: '🕌' },
          { ar: 'أَرَادُوا أَنْ يَشْتَرُوا', en: 'They wanted to buy', bn: 'তারা কিনতে চেয়েছিল', emoji: '🛒' },
          { ar: 'حَاوَلُوا أَنْ يَخْتَفُوا', en: 'They tried to disappear', bn: 'তারা অদৃশ্য হওয়ার চেষ্টা করেছিল', emoji: '👻' },
        ],
      },
    },
    {
      id: '3',
      type: 'vocabulary',
      titleEn: 'Vocabulary',
      titleAr: 'المُفْرَدَاتُ',
      titleBn: 'শব্দভান্ডার',
      payload: {
        words: [
          { id: 1, ar: 'جَمَاعَةٌ', romanized: 'jamāʿah', en: 'Congregation / Group', bn: 'জামাআত / দল', emoji: '👥' },
          { id: 2, ar: 'صَلَاحٌ', romanized: 'ṣalāḥ', en: 'Righteousness / Goodness', bn: 'নেক / সততা', emoji: '✅' },
          { id: 3, ar: 'رَبَّى', romanized: 'rabbā', en: 'To raise / to nurture', bn: 'পালন করা / বড় করা', emoji: '🌱' },
          { id: 4, ar: 'افْتَرَى', romanized: 'iftarā', en: 'To fabricate lies / to slander', bn: 'মিথ্যা অপবাদ দেওয়া', emoji: '🤥' },
          { id: 5, ar: 'وَاعِظٌ', romanized: 'wāʿiẓ', en: 'Preacher / Advisor', bn: 'উপদেশ দাতা', emoji: '🗣️' },
          { id: 6, ar: 'ارْتَوَى', romanized: 'irtawā', en: 'To quench thirst', bn: 'তৃষ্ণা মেটানো', emoji: '💧' },
          { id: 7, ar: 'ظَمَأٌ', romanized: 'ẓamaʾ', en: 'Thirst', bn: 'তৃষ্ণা', emoji: '🥵' },
          { id: 8, ar: 'شَجَرَةُ الْإِسْلَامِ', romanized: 'shajaratu al-islām', en: 'The tree of Islam', bn: 'ইসলামের গাছ', emoji: '🌳' },
        ],
      },
    },
    {
      id: '4',
      type: 'paragraph',
      titleEn: 'Reading: Advice and Striving',
      titleAr: 'القِرَاءَةُ: المَوْعِظَةُ وَالسَّعْيُ',
      titleBn: 'পাঠ: উপদেশ এবং চেষ্টা',
      payload: {
        paragraphs: [
          {
            titleEn: 'The Father\'s Advice',
            titleBn: 'বাবার উপদেশ',
            lines: [
              'قَالَ الْوَالِدُ : يَا أَبْنَائِي ! اخْرُجُوا مِنَ الْمَسْجِدِ بَعْدَ أَنْ تُصَلُّوا مَعَ الْجَمَاعَةِ وَ لَا تَخْرُجُوا قَبْلَ أَنْ تُصَلُّوا . خَرَجُوا بَعْدَ أَنْ صَلَّوْا .',
            ],
            translationEn: 'The father said: "O my sons! Exit the mosque after you pray with the congregation, and do not exit before you pray." They exited after they prayed.',
            translationBn: 'বাবা বললেন: "হে আমার ছেলেরা! জামাআতের সাথে সালাত পড়ার পর মসজিদ থেকে বের হও, এবং সালাত পড়ার আগে বের হয়ো না।" তারা সালাত পড়ার পর বের হলো।',
          },
          {
            titleEn: 'Mothers and Righteousness',
            titleBn: 'মায়েরা এবং ধার্মিকতা',
            lines: [
              'يَجِبُ عَلَى الْأُمَّهَاتِ أَنْ يُرَبِّينَ أَوْلَادَهُنَّ عَلَى الصَّلَاحِ . أَيُّهَا الصَّالِحُونَ ! ابْنُوا مَسْجِدًا عَلَى الْأَرْضِ الَّتِي اشْتَرَيْتُمُوهَا . الْمُسْلِمُونَ يَبْنُونَ بَيْتَ اللهِ قَبْلَ أَنْ يَبْنُوا بُيُوتَهُمْ .',
            ],
            translationEn: 'It is obligatory upon mothers to raise their children upon righteousness. O righteous ones! Build a mosque on the land which you bought. Muslims build the house of Allah before they build their own houses.',
            translationBn: 'মায়েদের উপর তাদের সন্তানদের নেক কাজের উপর বড় করা আবশ্যক। হে সৎকর্মশীলরা! যে জমিটি তোমরা কিনেছ তাতে একটি মসজিদ বানাও। মুসলিমরা নিজেদের ঘর বানানোর আগে আল্লাহর ঘর বানায়।',
          },
          {
            titleEn: 'The Preacher\'s Words',
            titleBn: 'উপদেশ দাতার কথা',
            lines: [
              'أَيُّهَا النَّاسُ ! أَ تُرِيدُونَ أَنْ تَفْتَرُوا عَلَى اللهِ ، فَمَنْ يَنْصُرُكُمْ مِنْ عَذَابِ اللهِ ؟ قَالَ الْوَاعِظُ لِلَّذِينِ حَضَرُوا فِي مَجْلِسِ وَعْظِهِ : يَا إِخْوَانِي ! أَرْجُو أَنْ تَسْعَوْا إِلَى الْخَيْرِ وَ لَا تَسْعَوْا إِلَى الشَّرِّ . أَرَادَ الْمُسَافِرُونَ أَنْ يَرْتَوُوا مِنْ ظَمَئِهِمْ ، فَشَرِبُوا مَاءً بَارِدًا .',
            ],
            translationEn: 'O people! Do you want to fabricate lies against Allah? Then who will help you against the punishment of Allah? The preacher said to those who attended his preaching gathering: "O my brothers! I hope that you strive towards good and do not strive towards evil." The travelers wanted to quench their thirst, so they drank cold water.',
            translationBn: 'হে মানুষ! তোমরা কি আল্লাহর উপর মিথ্যা অপবাদ দিতে চাও? তাহলে আল্লাহর আজাব থেকে তোমাদের কে সাহায্য করবে? উপদেশ দাতা তার উপদেশের মজলিসে উপস্থিতদের বললেন: "হে আমার ভাইয়েরা! আমি আশা করি তোমরা ভালোর দিকে চেষ্টা করবে এবং মন্দের দিকে চেষ্টা করবে না।" মুসাফিররা তাদের তৃষ্ণা মেটাতে চেয়েছিল, তাই তারা ঠাণ্ডা পানি পান করল।',
          },
        ],
      },
    },
    {
      id: '5',
      type: 'q_and_a',
      titleEn: 'Comprehension Questions',
      titleAr: 'أَسْئِلَةُ الْفَهْمِ',
      titleBn: 'বোধগম্য প্রশ্ন',
      payload: {
        instruction: 'Answer based on the reading passages.',
        instructionBn: 'পড়া অংশ থেকে উত্তর দাও।',
        questions: [
          {
            emoji: '🗣️',
            question_ar: 'مَاذَا قَالَ الْوَالِدُ لِأَبْنَائِه ؟',
            question_en: 'What did the father say to his sons?',
            question_bn: 'বাবা তার ছেলেদের কী বললেন?',
            correct_ar: 'اخْرُجُوا مِنَ الْمَسْجِدِ بَعْدَ أَنْ تُصَلُّوا',
            correct_en: 'Exit the mosque after you pray',
            correct_bn: 'সালাত পড়ার পর মসজিদ থেকে বের হও',
            options_ar: ['اخْرُجُوا مِنَ الْمَسْجِدِ بَعْدَ أَنْ تُصَلُّوا', 'ادْخُلُوا الْمَسْجِدَ', 'لَا تَخْرُجُوا'],
            questionType: 'hal',
          },
          {
            emoji: '👩‍👧‍👦',
            question_ar: 'مَاذَا يَجِبُ عَلَى الْأُمَّهَاتِ ؟',
            question_en: 'What is obligatory upon mothers?',
            question_bn: 'মায়েদের উপর কী আবশ্যক?',
            correct_ar: 'أَنْ يُرَبِّينَ أَوْلَادَهُنَّ عَلَى الصَّلَاحِ',
            correct_en: 'To raise their children upon righteousness',
            correct_bn: 'তাদের সন্তানদের নেক কাজের উপর বড় করা',
            options_ar: ['أَنْ يُرَبِّينَ أَوْلَادَهُنَّ عَلَى الصَّلَاحِ', 'أَنْ يَبْنُوا مَسْجِدًا', 'أَنْ يَشْرَبُوا مَاءً'],
            questionType: 'hal',
          },
          {
            emoji: '🕌',
            question_ar: 'مَاذَا يَبْنِي الْمُسْلِمُونَ قَبْلَ بُيُوتِهِمْ ؟',
            question_en: 'What do Muslims build before their houses?',
            question_bn: 'মুসলিমরা নিজেদের ঘর বানানোর আগে কী বানায়?',
            correct_ar: 'يَبْنُونَ بَيْتَ اللهِ',
            correct_en: 'They build the house of Allah',
            correct_bn: 'তারা আল্লাহর ঘর বানায়',
            options_ar: ['يَبْنُونَ بَيْتَ اللهِ', 'يَبْنُونَ سُوقًا', 'يَبْنُونَ مَدْرَسَةً'],
            questionType: 'hal',
          },
        ],
      },
    },
    {
      id: '6',
      type: 'assessment',
      titleEn: 'Assessment: Fill in the Blanks',
      titleAr: 'اِخْتِبَارٌ: اِمْلَأِ الْفَرَاغَ',
      titleBn: 'মূল্যায়ন: শূন্যস্থান পূরণ করো',
      payload: {
        exercises: {
          blanks: [
            {
              id: 'q1',
              question: 'الْمُجَاهِدُونَ _______ أَن _______ مِنَ اللهِ الْجَنَّةِ',
              options: ['يُرِيدُونَ / يَشْتَرُوا', 'يُرِيدُ / يَشْتَرِي', 'يُرِدْنَ / يَشْتَرِينَ'],
              correctAnswer: 'يُرِيدُونَ / يَشْتَرُوا',
            },
            {
              id: 'q2',
              question: 'يَجِبُ عَلَى الْأُمَّهَاتِ أَنْ _______ أَوْلَادَهُنَّ عَلَى الصَّلَاحِ',
              options: ['يُرَبِّينَ', 'يُرَبُّوا', 'يُرَبِّيَ'],
              correctAnswer: 'يُرَبِّينَ',
            },
            {
              id: 'q3',
              question: 'أَيُّهَا الْمُسْلِمُونَ ! _______ بَيْتَ اللهِ',
              options: ['ابْنُوا', 'ابْنِ', 'ابْنِينَ'],
              correctAnswer: 'ابْنُوا',
            },
          ],
        },
      },
    },
    {
      id: '7',
      type: 'tarkeeb',
      titleEn: 'Grammar Analysis: لَوْلَا / لَمَا',
      titleAr: 'التَّرْكِيبُ: لَوْلَا / لَمَا',
      titleBn: 'ব্যাকরণ বিশ্লেষণ: لَوْلَا / لَمَا',
      payload: {
        tarkeeb: [
          {
            sentence: 'لَوْلَا دِمَاءُ الشُّهَدَاءِ > لَمَا بَقِيَ الْإِسْلَامُ',
            sentenceEn: 'Were it not for the blood of the martyrs, Islam would not have remained',
            sentenceBn: 'যদি শহীদদের রক্ত না থাকত, তবে ইসলাম টিকে থাকত না',
            type: 'complete',
            tree: [
              { label: 'حَرْفُ شَرْطٍ', labelEn: 'Harf Sharṭ', text: 'لَوْلَا' },
              { label: 'مُبْتَدَأٌ', labelEn: 'Subject', text: 'دِمَاءُ' },
              { label: 'جَوَابُ الشَّرْطِ', labelEn: 'Jawab Ash-Sharṭ', text: 'لَمَا بَقِيَ' },
            ],
          },
        ],
      },
    },
  ],
};