import type { LessonData } from '../../curriculum';

export const lesson01: LessonData = {
  darsNumber: 1,
  chunks: [
    {
      id: '1',
      type: 'paragraph',
      titleEn: 'Introduction to the Third Chapter',
      titleAr: 'مُقَدِّمَةُ الْبَابِ الثَّالِثِ',
      titleBn: 'তৃতীয় অধ্যায়ের ভূমিকা',
      payload: {
        paragraphs: [
          {
            titleEn: 'Journey of Knowledge',
            titleBn: 'জ্ঞানের পথচলা',
            lines: [
              'أَخِي الطَّالِبُ ! بَدَأَتْ رِحْلَتُكَ إِلَى لُغَةِ الْقُرْآنِ وَالسُّنَّةِ فِي بِدَايَةِ هَذِهِ السَّنَةِ، وَبِفَضْلِ اللَّهِ وَعَوْنِهِ وَصَلْتَ الْآنَ إِلَى هَذَا الْمَقَامِ وَأَسْأَلُ اللَّهَ أَنْ يَرْزُقَكَ حَلَاوَةَ الْقُرْآنِ وَلَذَّةَ الْإِيمَانِ .',
              'وَقَدْ عَلِمْتَ يَا أَخِي ! أَنَّ الْعِلْمَ نُورٌ وَنُورُ الْعِلْمِ لَا يَدْخُلُ قَلْبَ الْعَاصِي، إِنَّمَا يَدْخُلُ قَلْبَ الْمُطِيعِ الصَّالِحِ . وَلَا يَدْخُلُ قَلْبَ الْغَافِلِ، إِنَّمَا يَدْخُلُ قَلْبَ الْمُجْتَهِدِ الَّذِي يَنْسَى كُلَّ شَيْءٍ فِي طَلَبِ الْعِلْمِ .',
              'أَرْجُو أَنْ تَحْفَظَ هَذِهِ النَّصِيحَةَ الْغَالِيَةَ إِلَى آخِرِ الْحَيَاةِ . وَفَّقَنَا اللَّهُ جَمِيعًا .',
            ],
            translationEn:
              "O student brother! Your journey to the language of the Qur'an and Sunnah began at the beginning of this year, and by the grace and help of Allah, you have now reached this stage. I ask Allah to grant you the sweetness of the Qur'an and the delight of faith. And you have known, O my brother! That knowledge is light, and the light of knowledge does not enter the heart of a sinner; it only enters the heart of the obedient and righteous. And it does not enter the heart of the heedless; it only enters the heart of the diligent who forgets everything in the pursuit of knowledge. I hope you will memorize this precious advice until the end of life. May Allah grant us all success.",
            translationBn:
              'হে ছাত্র ভাই! কুরআন ও সুন্নাহর ভাষার দিকে তোমার যাত্রা এই বছরের শুরুতে শুরু হয়েছিল, এবং আল্লাহর অনুগ্রহ ও সাহায্যে তুমি এখন এই পর্যায়ে পৌঁছেছ। আমি আল্লাহর কাছে প্রার্থনা করি তিনি তোমাকে কুরআনের মাধুর্য এবং ঈমানের স্বাদ দান করুন। আর তুমি জেনেছ, হে আমার ভাই! জ্ঞান হলো আলো, আর জ্ঞানের আলো পাপীর অন্তরে প্রবেশ করে না; তা কেবল অনুগত ও নেককার ব্যক্তির অন্তরে প্রবেশ করে। আর তা গাফেলের অন্তরে প্রবেশ করে না; তা কেবল ঐ পরিশ্রমী ব্যক্তির অন্তরে প্রবেশ করে যে জ্ঞান অন্বেষণে সবকিছু ভুলে যায়। আমি আশা করি তুমি জীবনের শেষ পর্যন্ত এই অমূল্য উপদেশটি মনে রাখবে। আল্লাহ আমাদের সবাইকে সফল করুন।',
          },
        ],
      },
    },
    {
      id: '2',
      type: 'vocabulary',
      titleEn: 'Vocabulary',
      titleAr: 'الْمُفْرَدَاتُ',
      titleBn: 'শব্দভান্ডার',
      payload: {
        words: [
          {
            id: 1,
            ar: 'بِدَايَةٌ',
            romanized: 'bidāyah',
            en: 'Beginning / Start',
            bn: 'শুরু',
            emoji: '🏁',
          },
          {
            id: 2,
            ar: 'مَقَامٌ',
            romanized: 'maqām',
            en: 'Stage / Position',
            bn: 'পর্যায় / অবস্থান',
            emoji: '📍',
          },
          {
            id: 3,
            ar: 'عَوْنٌ',
            romanized: 'ʿawn',
            en: 'Help / Assistance',
            bn: 'সাহায্য',
            emoji: '🤝',
          },
          {
            id: 4,
            ar: 'فَضْلٌ',
            romanized: 'faḍl',
            en: 'Grace / Bounty',
            bn: 'অনুগ্রহ',
            emoji: '✨',
          },
          { id: 5, ar: 'شَمْعَةٌ', romanized: 'shamʿah', en: 'Candle', bn: 'মোমবাতি', emoji: '🕯️' },
          {
            id: 6,
            ar: 'تَذْكَرَةٌ',
            romanized: 'tadhkarah',
            en: 'Ticket',
            bn: 'টিকেট',
            emoji: '🎫',
          },
          {
            id: 7,
            ar: 'اشْتَدَّ',
            romanized: 'ishtadda',
            en: 'Intensified',
            bn: 'তীব্র হয়েছে',
            emoji: '📈',
          },
          {
            id: 8,
            ar: 'الْإِيذَاءُ',
            romanized: "al-īdhā'",
            en: 'Harming',
            bn: 'কষ্ট দেওয়া',
            emoji: '🤕',
          },
        ],
      },
    },
    {
      id: '3',
      type: 'grammar_rule',
      titleEn: 'Numbers: The Decades 20-90',
      titleAr: 'الْأَعْدَادُ: عُقُودٌ',
      titleBn: 'সংখ্যা: দশক ২০-৯০',
      payload: {
        rules: [
          {
            label: 'Form of decades',
            labelBn: 'দশকের রূপ',
            arabic: 'عِشْرُونَ تِلْمِيذًا / ثَلَاثُونَ بِنْتًا',
            romanized: 'ʿishrūna tilmīdhan / thalāthūna bintan',
            meaning:
              'The decades have the same form for masculine and feminine. The counted noun must be singular, indefinite, and Mansub.',
            meaningBn:
              'দশকগুলো পুংলিঙ্গ এবং স্ত্রীলিঙ্গ উভয়ের জন্য একই রূপের হয়। গণনা করা বিশেষ্যটি একবচন, অনির্দিষ্ট এবং মানসুব হতে হবে।',
            examples: [
              {
                ar: 'عِشْرُونَ تِلْمِيذًا / تِلْمِيذَةً',
                en: '20 male/female students',
                bn: '২০ জন ছাত্র/ছাত্রী',
              },
              {
                ar: 'أَرْبَعُونَ مَسْجِدًا / مَدْرَسَةً',
                en: '40 mosques/schools',
                bn: '৪০টি মসজিদ/মাদরাসা',
              },
              {
                ar: 'خَمْسُونَ كِتَابًا / كُرَّاسَةً',
                en: '50 books/notebooks',
                bn: '৫০টি বই/খাতা',
              },
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
      titleBn: 'প্রয়োগ: দশক',
      payload: {
        instruction: 'Read the sentences using decades.',
        text: '(أ) أَقَامَ عِشْرُونَ عَالِمًا عِشْرِينَ مَدْرَسَةً فِي عِشْرِينَ قَرْيَةً .\n(ب) كَتَبَتْ ثَلَاثُونَ كَاتِبَةً أَرْبَعِينَ قِصَّةً فِي خَمْسِينَ يَوْمًا .\n(جـ) عِنْدَ رَاشِدٍ ... قَلَمًا / مِسْطَرَةً .',
      },
    },
    {
      id: '5',
      type: 'grammar_rule',
      titleEn: 'Compound Numbers 13-19',
      titleAr: 'الْأَعْدَادُ الْمُرَكَّبَةُ ١٣-١٩',
      titleBn: 'যৌগিক সংখ্যা ১৩-১৯',
      payload: {
        rules: [
          {
            label: '13-19 Gender Agreement',
            labelBn: '১৩-১৯ লিঙ্গ সামঞ্জস্য',
            arabic: 'ثَلَاثَةَ عَشَرَ رَجُلًا / ثَلَاثَ عَشْرَةَ امْرَأَةً',
            romanized: "thalāthata ʿashara rajulan / thalātha ʿashrata imra'atan",
            meaning:
              'The first part disagrees with the gender, the second part agrees. Both parts end in Fatha. The noun is singular and Mansub.',
            meaningBn:
              'প্রথম অংশটি লিঙ্গের বিপরীত হয়, দ্বিতীয় অংশটি মিলে যায়। উভয় অংশের শেষে ফাতহা হয়। বিশেষ্যটি একবচন এবং মানসুব হয়।',
            examples: [
              {
                ar: 'ثَلَاثَةَ عَشَرَ رَجُلًا / ثَلَاثَ عَشْرَةَ امْرَأَةً',
                en: '13 men / 13 women',
                bn: '১৩ জন পুরুষ / ১৩ জন নারী',
              },
              {
                ar: 'أَرْبَعَةَ عَشَرَ كِتَابًا / أَرْبَعَ عَشْرَةَ كُرَّاسَةً',
                en: '14 books / 14 notebooks',
                bn: '১৪টি বই / ১৪টি খাতা',
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
      titleBn: 'প্রয়োগ: যৌগিক সংখ্যা',
      payload: {
        instruction: 'Read the sentences using compound numbers.',
        text: '(أ) قَرَأَ ثَلَاثَةَ عَشَرَ تِلْمِيذًا ثَلَاثَ عَشْرَةَ قِصَّةً فِي ثَلَاثَةَ عَشَرَ كِتَابًا .\n(ب) أَرْسَلَتْ أَرْبَعَ عَشْرَةَ بِنْتًا إِلَى خَمْسَ عَشْرَةَ صَدِيقَةً تِسْعَ عَشْرَةَ رِسَالَةً .',
      },
    },
    {
      id: '7',
      type: 'grammar_rule',
      titleEn: 'Conjoined Numbers 21-99',
      titleAr: 'الْأَعْدَادُ الْمَعْطُوفَةُ ٢١-٩٩',
      titleBn: 'সংযুক্ত সংখ্যা ২১-৯৯',
      payload: {
        rules: [
          {
            label: 'Numbers 21-99 Agreement',
            labelBn: '২১-৯৯ সামঞ্জস্য',
            arabic: 'ثَلَاثَةٌ وَعِشْرُونَ رَجُلًا / ثَلَاثٌ وَعِشْرُونَ امْرَأَةً',
            romanized: "thalāthatun wa-ʿishrūna rajulan / thalāthun wa-ʿishrūna imra'atan",
            meaning:
              "The unit part disagrees with the noun (except 1 & 2), and the tens part remains the same for both genders, joined by 'وَ'. Noun is singular Mansub.",
            meaningBn:
              "এককের অংশটি বিশেষ্যের বিপরীত হয় (১ ও ২ বাদে), এবং দশকের অংশ উভয় লিঙ্গের জন্য একই থাকে, 'وَ' দ্বারা যুক্ত হয়। বিশেষ্যটি একবচন মানসুব।",
            examples: [
              {
                ar: 'ثَلَاثَةٌ وَعِشْرُونَ رَجُلًا / ثَلَاثٌ وَعِشْرُونَ امْرَأَةً',
                en: '23 men / 23 women',
                bn: '২৩ জন পুরুষ / ২৩ জন নারী',
              },
              {
                ar: 'سِتَّةٌ وَعِشْرُونَ مَسْجِدًا / سِتٌّ وَعِشْرُونَ مَدْرَسَةً',
                en: '26 mosques / 26 schools',
                bn: '২৬টি মসজিদ / ২৬টি মাদরাসা',
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
      titleBn: 'সংখ্যা ১১ ও ১২',
      payload: {
        rules: [
          {
            label: '11 and 12 Agreement',
            labelBn: '১১ ও ১২ সামঞ্জস্য',
            arabic: 'أَحَدَ عَشَرَ رَجُلًا / اِثْنَا عَشَرَ مَسْجِدًا',
            romanized: 'aḥada ʿashara rajulan / ithnā ʿashara masjid',
            meaning:
              'For 11 and 12, both parts agree perfectly with the gender of the counted noun.',
            meaningBn:
              '১১ এবং ১২ এর ক্ষেত্রে, উভয় অংশ গণনা করা বিশেষ্যের লিঙ্গের সাথে পুরোপুরি মিলে যায়।',
            examples: [
              {
                ar: 'أَحَدَ عَشَرَ رَجُلًا / إِحْدَى عَشْرَةَ امْرَأَةً',
                en: '11 men / 11 women',
                bn: '১১ জন পুরুষ / ১১ জন নারী',
              },
              {
                ar: 'اِثْنَا عَشَرَ مَسْجِدًا / اِثْنَتَا عَشْرَةَ مَدْرَسَةً',
                en: '12 mosques (nom) / 12 schools (nom)',
                bn: '১২টি মসজিদ (nom) / ১২টি মাদরাসা (nom)',
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
      titleBn: 'শত ও হাজার',
      payload: {
        rules: [
          {
            label: '100s and 1000s rule',
            labelBn: 'শত ও হাজারের নিয়ম',
            arabic: 'مِائَةُ رَجُلٍ / أَلْفُ رَجُلٍ',
            romanized: "mi'atu rajulin / alfu rajulin",
            meaning:
              'After 100, 1000, and their multiples, the counted noun must be singular and Genitive (Majrur).',
            meaningBn:
              '১০০, ১০০০ এবং এদের গুণিতকের পর, গণনা করা বিশেষ্যটি একবচন এবং মাজরুর হতে হবে।',
            examples: [
              {
                ar: 'مِائَةُ رَجُلٍ / امْرَأَةٍ',
                en: '100 men / women',
                bn: '১০০ জন পুরুষ / নারী',
              },
              { ar: 'ثَلَاثُمِائَةِ رَجُلٍ', en: '300 men', bn: '৩০০ জন পুরুষ' },
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
      titleBn: 'অনুশীলনী ১: প্রশ্নোত্তর',
      payload: {
        instruction: 'Read the questions and answers',
        instructionBn: 'প্রশ্ন ও উত্তরগুলো পড়ুন',
        questions: [
          {
            emoji: '🏫',
            question_ar: 'مَاذَا فَعَلَ الْعُلَمَاءُ ؟',
            question_en: 'What did the scholars do?',
            question_bn: 'আলেমরা কী করলেন?',
            correct_ar: 'أَقَامُوا عِشْرِينَ مَدْرَسَةً',
            correct_en: 'They established 20 schools',
            correct_bn: 'তারা ২০টি মাদরাসা স্থাপন করেছেন',
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
            question_bn: 'লেখিকারা কতটি গল্প লিখেছেন এবং কত দিনে?',
            correct_ar: 'كَتَبْنَ أَرْبَعِينَ قِصَّةً فِي خَمْسِينَ يَوْمًا',
            correct_en: 'They wrote 40 stories in 50 days',
            correct_bn: 'তারা ৫০ দিনে ৪০টি গল্প লিখেছেন',
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
      titleBn: 'পঠন অংশ',
      payload: {
        paragraphs: [
          {
            titleEn: "The Prophet's Mission",
            titleBn: 'নবীর মিশন',
            lines: [
              'دَعَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَهْلَ مَكَّةَ ثَلَاثَ عَشْرَةَ سَنَةً - وَلَمَّا اشْتَدَّ إِيذَاءُ الْمُشْرِكِينَ لِرَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَتَعْذِيبُهُمْ لِلْمُسْلِمِينَ هَاجَرَ الرَّسُولُ وَالَّذِينَ آمَنُوا مَعَهُ إِلَى الْمَدِينَةِ الْمُنَوَّرَةِ، الَّتِي انْتَشَرَ مِنْهَا نُورُ الْإِسْلَامِ فِي الْعَالَمِ . وَقَضَى رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فِي الْمَدِينَةِ عَشْرَ سَنَوَاتٍ . وَقَبْلَ هِجْرَتِهِ كَانَ النَّاسُ يُسَمُّونَ الْمَدِينَةَ يَثْرِبَ .',
            ],
            translationEn:
              'The Messenger of Allah (peace be upon him) called the people of Makkah (to Islam) for thirteen years. And when the harm of the polytheists towards the Messenger of Allah (PBUH) intensified, along with their torturing of the Muslims, the Messenger and those who believed with him migrated to Al-Madinah Al-Munawwarah, from which the light of Islam spread into the world. The Messenger of Allah (PBUH) spent ten years in Madinah. And before his migration, the people used to call Madinah Yathrib.',
            translationBn:
              'রাসূলুল্লাহ (সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম) মক্কাবাসীকে তেরো বছর (ইসলামের দিকে) আহ্বান করেছিলেন। আর যখন রাসূলুল্লাহ (সা.) এর প্রতি মুশরিকদের কষ্ট দেওয়া এবং মুসলিমদের প্রতি তাদের নির্যাতন তীব্র আকার ধারণ করে, তখন রাসূল এবং তাঁর সাথে যারা ঈমান এনেছিল তারা মদীনা মুনাওয়ারায় হিজরত করেন, যেখান থেকে ইসলামের আলো বিশ্বে ছড়িয়ে পড়ে। রাসূলুল্লাহ (সা.) মদীনায় দশ বছর অতিবাহিত করেন। আর তাঁর হিজরতের আগে মানুষ মদীনাকে ইয়াসরিব বলত।',
          },
          {
            titleEn: 'Prayers and Numbers',
            titleBn: 'সালাত ও সংখ্যা',
            lines: [
              'صَلَاةُ الْفَجْرِ رَكْعَتَانِ وَصَلَاةُ الظُّهْرِ أَرْبَعُ رَكَعَاتٍ . يُصَلِّي الْمُسْلِمُونَ فِي الْيَوْمِ خَمْسَ صَلَوَاتٍ ، وَهَذِهِ الصَّلَوَاتُ الْخَمْسُ فِيهَا سَبْعَ عَشْرَةَ رَكْعَةً، وَأَمَّا صَلَاةُ الْوِتْرِ فَثَلَاثُ رَكَعَاتٍ .',
            ],
            translationEn:
              "The Fajr prayer is two Rak'ahs, and the Dhuhr prayer is four Rak'ahs. Muslims pray five prayers a day, and these five prayers contain seventeen Rak'ahs, as for the Witr prayer, it is three Rak'ahs.",
            translationBn:
              'ফজরের সালাত দুই রাকাত এবং জোহরের সালাত চার রাকাত। মুসলমানরা দিনে পাঁচ ওয়াক্ত সালাত আদায় করে, এবং এই পাঁচ ওয়াক্ত সালাতে সতেরো রাকাত রয়েছে, আর বিতরের সালাত তিন রাকাত।',
          },
        ],
      },
    },
    {
      id: '12',
      type: 'assessment',
      titleEn: 'Answer these questions in Arabic',
      titleAr: 'أَجِبْ عَنْ هَذِهِ الْأَسْئِلَةِ بِالْعَرَبِيَّةِ',
      titleBn: 'আরবিতে এই প্রশ্নগুলোর উত্তর দাও',
      payload: {
        instruction: 'Answer the questions correctly based on the passage.',
        instructionBn: 'প্যাসেজের উপর ভিত্তি করে প্রশ্নগুলোর সঠিক উত্তর দিন।',
        questions: [
          {
            emoji: '1️⃣',
            question_ar:
              'كَمْ سَنَةً دَعَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَهْلَ مَكَّةَ ؟',
            question_en: 'How many years did the Messenger of Allah call the people of Makkah?',
            question_bn: 'রাসূলুল্লাহ (সা.) কত বছর মক্কাবাসীকে আহ্বান করেছিলেন?',
            correct_ar: 'ثَلَاثَ عَشْرَةَ سَنَةً',
            correct_en: 'Thirteen years',
            correct_bn: 'তেরো বছর',
            options_ar: ['ثَلَاثَ عَشْرَةَ سَنَةً', 'عَشْرَ سَنَوَاتٍ', 'خَمْسَ سَنَوَاتٍ'],
            questionType: 'general',
          },
          {
            emoji: '2️⃣',
            question_ar:
              'مَتَى هَاجَرَ الرَّسُولُ وَالَّذِينَ آمَنُوا مَعَهُ إِلَى الْمَدِينَةِ الْمُنَوَّرَةِ ؟',
            question_en:
              'When did the Messenger and those who believed with him migrate to Al-Madinah?',
            question_bn:
              'রাসূল এবং তাঁর সাথে যারা ঈমান এনেছিল তারা কখন মদীনা মুনাওয়ারায় হিজরত করেন?',
            correct_ar: 'لَمَّا اشْتَدَّ إِيذَاءُ الْمُشْرِكِينَ',
            correct_en: 'When the harm of the polytheists intensified',
            correct_bn: 'যখন মুশরিকদের নির্যাতন তীব্র আকার ধারণ করে',
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
