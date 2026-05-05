import type { LessonData } from '../../curriculum';

export const lesson06: LessonData = {
  darsNumber: 6,
  chunks: [
    {
      id: '1',
      type: 'verb_table',
      titleEn: "Muda'af Verbs - Form IV (To Love)",
      titleAr: 'الْفِعْلُ الْمُضَاعَفُ - بَابُ الْإِفْعَالِ (اَلْإِحْبَابُ)',
      titleBn: 'মুদাআফ ক্রিয়া - রূপ IV (ভালোবাসা)',
      payload: {
        verbTense: 'past',
        verbTable: [
          {
            root: 'ح-ب-ب',
            meaning: 'To love',
            meaningBn: 'ভালোবাসা',
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
      titleBn: 'বর্তমান/ভবিষ্যত এবং আদেশ',
      payload: {
        verbTense: 'present',
        verbTable: [
          {
            root: 'ح-ب-ب',
            meaning: 'To love',
            meaningBn: 'ভালোবাসা',
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
      titleBn: 'মাসদার ফ্যাক্টরি: রূপ IV মুদাআফ',
      payload: {
        masdarRows: [
          {
            masdar: 'اَلْإِعْدَادُ',
            masdarEn: 'To prepare',
            masdarBn: 'প্রস্তুত করা',
            past: 'أَعَدَّ',
            present: 'يُعِدُّ',
            imperative: 'أَعِدَّ',
            prohibitive: 'لَا تُعِدَّ',
          },
          {
            masdar: 'اَلْإِذْلَالُ',
            masdarEn: 'To humiliate',
            masdarBn: 'অপমান করা',
            past: 'أَذَلَّ',
            present: 'يُذِلُّ',
            imperative: 'أَذِلَّ',
            prohibitive: 'لَا تُذِلَّ',
          },
          {
            masdar: 'اَلْإِعْزَازُ',
            masdarEn: 'To honor',
            masdarBn: 'সম্মান করা',
            past: 'أَعَزَّ',
            present: 'يُعِزُّ',
            imperative: 'أَعِزَّ',
            prohibitive: 'لَا تُعِزَّ',
          },
          {
            masdar: 'اَلْإِتْمَامُ',
            masdarEn: 'To complete',
            masdarBn: 'সম্পূর্ণ করা',
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
      titleBn: 'শব্দভান্ডার',
      payload: {
        words: [
          {
            id: 1,
            ar: 'اَلْإِنْذَارُ',
            romanized: 'al-indhār',
            en: 'To warn',
            bn: 'সতর্ক করা',
            emoji: '⚠️',
          },
          {
            id: 2,
            ar: 'اَلتَّبْشِيْرُ',
            romanized: 'at-tabshīr',
            en: 'To give glad tidings',
            bn: 'সুসংবাদ দেওয়া',
            emoji: '🎉',
          },
          {
            id: 3,
            ar: 'قَوْمٌ',
            romanized: 'qawm',
            en: 'Nation / People',
            bn: 'জাতি / মানুষ',
            emoji: '🌍',
          },
          {
            id: 4,
            ar: 'فَطُوْرٌ',
            romanized: 'faṭūr',
            en: 'Breakfast / Iftar',
            bn: 'সকালের নাস্তা / ইফতার',
            emoji: '🥞',
          },
          {
            id: 5,
            ar: 'ظَنَّ',
            romanized: 'ẓanna',
            en: 'To think / assume',
            bn: 'ধারণা করা',
            emoji: '🤔',
          },
        ],
      },
    },
    {
      id: '5',
      type: 'paragraph',
      titleEn: 'Reading Practices',
      titleAr: 'القِرَاءَةُ',
      titleBn: 'পড়ার অনুশীলন',
      payload: {
        paragraphs: [
          {
            titleEn: 'Perfecting the Religion',
            titleBn: 'দ্বীন সম্পূর্ণ করা',
            lines: [
              'قَالَ اللّٰهُ تَعَالَى: اَلْيَوْمَ أَكْمَلْتُ لَكُمْ دِيْنَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي.',
              'اَللّٰهُمَّ أَتْمِمْ عَلَيْنَا نِعْمَتَكَ - إِنِّي أُحِبُّ اللّٰهَ وَرَسُوْلَهُ، وَأُحِبُّ اللّٰهَ وَرَسُوْلَهُ فَوْقَ كُلِّ حُبٍّ - أُحِبُّ أَنْ أُجَاهِدَ فِي سَبِيْلِ اللّٰهِ.',
            ],
            translationEn:
              'Allah the Exalted said: "This day I have perfected for you your religion and completed upon you My favor." O Allah, complete Your favor upon us - Indeed, I love Allah and His Messenger, and I love Allah and His Messenger above every love - I love to strive in the path of Allah.',
            translationBn:
              'আল্লাহ তাআলা বলেছেন: "আজ আমি তোমাদের জন্য তোমাদের দ্বীনকে পূর্ণ করলাম এবং তোমাদের ওপর আমার নেয়ামত সম্পূর্ণ করলাম।" হে আল্লাহ, আমাদের উপর আপনার নেয়ামত সম্পূর্ণ করুন - আমি আল্লাহ ও তাঁর রাসূলকে ভালোবাসি, এবং আমি আল্লাহ ও তাঁর রাসূলকে সবকিছুর চেয়ে বেশি ভালোবাসি - আমি আল্লাহর পথে সংগ্রাম করতে ভালোবাসি।',
          },
          {
            titleEn: 'Honor and Warning',
            titleBn: 'সম্মান এবং সতর্কতা',
            lines: [
              'أَعَزَّنَا اللّٰهُ بِالْإِسْلَامِ - أَمَرَ اللّٰهُ رَسُوْلَهُ أَنْ يَدْعُوَ النَّاسَ إِلَى اللّٰهِ، فَخَرَجَ رَسُوْلُ اللّٰهِ لِيَدْعُوَ أَهْلَ مَكَّةَ إِلَى اللّٰهِ، قَامَ رَسُوْلُ اللّٰهِ عَلَى الصَّفَا وَأَنْذَرَهُمْ وَبَشَّرَهُمْ.',
              'أَرْسَلَ اللّٰهُ إِلَى كُلِّ قَوْمٍ رَسُوْلًا لِيُنْذِرَهُمْ مِنْ عَذَابِ اللّٰهِ. كَانَ فِي كُلِّ قَوْمٍ رَسُوْلٌ أَنْذَرَهُمْ.',
            ],
            translationEn:
              'Allah has honored us with Islam - Allah commanded His Messenger to call the people to Allah, so the Messenger of Allah went out to call the people of Makkah to Allah, the Messenger of Allah stood upon As-Safa and warned them and gave them glad tidings. Allah sent a messenger to every nation to warn them of the punishment of Allah. In every nation there was a messenger who warned them.',
            translationBn:
              'আল্লাহ ইসলাম দিয়ে আমাদের সম্মানিত করেছেন - আল্লাহ তাঁর রাসূলকে মানুষকে আল্লাহর দিকে ডাকার নির্দেশ দিয়েছেন, তাই আল্লাহর রাসূল মক্কার লোকদের আল্লাহর দিকে ডাকতে বের হলেন, আল্লাহর রাসূল সাফা পাহাড়ে দাঁড়ালেন এবং তাদের সতর্ক করলেন ও সুসংবাদ দিলেন। আল্লাহ প্রত্যেক জাতির কাছে একজন রাসূল পাঠিয়েছেন যেন তিনি তাদের আল্লাহর আজাব থেকে সতর্ক করেন। প্রত্যেক জাতিতে একজন রাসূল ছিলেন যিনি তাদের সতর্ক করেছিলেন।',
          },
          {
            titleEn: 'Preparation and Love',
            titleBn: 'প্রস্তুতি এবং ভালোবাসা',
            lines: [
              'قَالَتِ الْأُمُّ لِأَوْلَادِهَا: أَدْخُلُ الْآنَ الْمَطْبَخَ لِأُعِدَّ لَكُمْ طَعَامَ الْغَدَا - أُمُّنَا تُعِدُّ لَنَا الْفَطُوْرَ كُلَّ صَبَاحٍ.',
              'أَحْبَبْتُكَ أَيُّهَا الرَّجُلُ الصَّالِحُ! لِوَجْهِ اللّٰهِ - أُحِبُّ أَنْ أُجَاهِدَ فِي سَبِيْلِ اللّٰهِ.',
            ],
            translationEn:
              'The mother said to her children: I am entering the kitchen now to prepare lunch for you - Our mother prepares breakfast for us every morning. I loved you, O righteous man! For the sake of Allah - I love to strive in the path of Allah.',
            translationBn:
              'মা তার সন্তানদের বললেন: আমি এখন তোমাদের দুপুরের খাবার প্রস্তুত করার জন্য রান্নাঘরে ঢুকছি - আমাদের মা প্রতিদিন সকালে আমাদের জন্য নাস্তা প্রস্তুত করেন। হে নেককার ব্যক্তি, আমি আপনাকে আল্লাহর সন্তুষ্টির জন্য ভালোবাসি! - আমি আল্লাহর পথে সংগ্রাম করতে ভালোবাসি।',
          },
        ],
      },
    },
    {
      id: '6',
      type: 'tarkeeb',
      titleEn: 'Grammar Rule: Effect of ظَنَّ (To think)',
      titleAr: 'قَاعِدَةٌ: تَأْثِيْرُ (ظَنَّ)',
      titleBn: 'ব্যাকরণ নিয়ম: ظَنَّ (ধারণা করা) এর প্রভাব',
      payload: {
        tarkeeb: [
          {
            sentence: 'ظَنَنْتُ رَاشِدًا صَادِقًا',
            sentenceEn: 'I thought Rashid was truthful',
            sentenceBn: 'আমি ভেবেছিলাম রাশেদ সত্যবাদী',
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
