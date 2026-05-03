import type { LessonData } from '../../curriculum';

export const lesson01: LessonData = {
  darsNumber: 1,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Vocabulary: From the Shades of the Noble Quran',
      titleAr: 'المفردات: مِنْ ظِلَالِ الْقُرْآنِ الْكَرِيمِ',
      titleBn: 'শব্দভাণ্ডার: নোবেল কোরআনের ছায়া থেকে',
      payload: {
        words: [
          { id: 1, ar: 'مَنْهَل ج مَنَاهِل', romanized: 'manhal pl. manāhil', en: 'Water spring / Source', bn: 'জলের ঝর্ণা / উৎস', emoji: '⛲' },
          { id: 2, ar: 'مَشْكُور', romanized: 'mashkūr', en: 'Appreciated / Rewardable', bn: 'প্রশংসিত / পুরস্কারযোগ্য', emoji: '🌟' },
          { id: 3, ar: 'رِحَاب', romanized: 'riḥāb', en: 'Courtyards / Vast expanses', bn: 'আঙিনা / বিশাল প্রান্তর', emoji: '🕌' },
          { id: 4, ar: 'تَهُونُ دُونَهَا', romanized: 'tahūnu dūnahā', en: 'Pales in comparison / Becomes insignificant before it', bn: 'এর তুলনায় ফ্যাকাশে হয়ে যায় / এর আগে তুচ্ছ হয়ে যায়', emoji: '⬇️' },
          { id: 5, ar: 'دَوَام', romanized: 'dawām', en: 'Permanence / Continuation', bn: 'স্থায়িত্ব / ধারাবাহিকতা', emoji: '⏳' },
          { id: 6, ar: 'سُلْطَان', romanized: 'sulṭān', en: 'Power / Authority', bn: 'ক্ষমতা / কর্তৃত্ব', emoji: '👑' },
          { id: 7, ar: 'بَاطِل', romanized: 'bāṭil', en: 'Falsehood / False deities', bn: 'মিথ্যা / মিথ্যা দেবতা', emoji: '❌' },
          { id: 8, ar: 'طَاغُوت', romanized: 'ṭāghūt', en: 'False deity / Tyrant / Rebel against God', bn: 'মিথ্যা দেবতা / স্বৈরাচারী / ঈশ্বরের বিরুদ্ধে বিদ্রোহী', emoji: '👿' },
          { id: 9, ar: 'اِحْذَرُوهُ (الحذر، س)', romanized: 'iḥdharūhu (al-ḥadhar, s)', en: 'Beware of Him / Fear Him', bn: 'তাঁর থেকে সাবধান থাকুন / তাঁকে ভয় করুন', emoji: '⚠️' },
          { id: 10, ar: 'وَلِيّ ج أَوْلِيَاء', romanized: 'walīy pl. awliyāʾ', en: 'Guardian / Helper / Friend', bn: 'অভিভাবক / সাহায্যকারী / বন্ধু', emoji: '🤝' },
          { id: 11, ar: 'مَوْلَى', romanized: 'mawlā', en: 'Guardian / Helper / Master', bn: 'অভিভাবক / সাহায্যকারী / প্রভু', emoji: '🛡️' },
          { id: 12, ar: 'أَذِلَّة ج ذَلِيل', romanized: 'adhillah pl. dhalīl', en: 'Weak / Humiliated / Abased', bn: 'দুর্বল / অপমানিত / অবমানিত', emoji: '😔' },
          { id: 13, ar: 'بُرْهَان ج بَرَاهِين', romanized: 'burhān pl. barāhīn', en: 'Proof / Evidence', bn: 'প্রমাণ', emoji: '📜' },
          { id: 14, ar: 'مُبِين', romanized: 'mubīn', en: 'Clear / Manifest', bn: 'স্পষ্ট / প্রকাশ্য', emoji: '👁️' },
          { id: 15, ar: 'عَزِيز', romanized: 'ʿazīz', en: 'Almighty / Mighty', bn: 'সর্বশক্তিমান / পরাক্রমশালী', emoji: '💪' },
          { id: 16, ar: 'حَكِيم', romanized: 'ḥakīm', en: 'All-Wise / Wise', bn: 'সর্বজ্ঞ / জ্ঞানী', emoji: '🧠' },
          { id: 17, ar: 'جَعَلَ (ف)', romanized: 'jaʿala (f)', en: 'Created / Made', bn: 'তৈরি করেছেন / বানিয়েছেন', emoji: '🛠️' },
          { id: 18, ar: 'أَعْمَى', romanized: 'aʿmā', en: 'Blind', bn: 'অন্ধ', emoji: '🦯' },
          { id: 19, ar: 'بَصِير', romanized: 'baṣīr', en: 'All-Seeing / Seeing / Endowed with sight', bn: 'সর্বদর্শী / দৃষ্টিসম্পন্ন', emoji: '👀' },
          { id: 20, ar: 'أَشَقّ', romanized: 'ashaqq', en: 'More difficult / Harder', bn: 'আরও কঠিন', emoji: '🧗' },
          { id: 21, ar: 'أَفْضَل', romanized: 'afḍal', en: 'Best / Superior', bn: 'সেরা / উচ্চতর', emoji: '🥇' },
          { id: 22, ar: 'السَّمِيع', romanized: 'as-samīʿ', en: 'The All-Hearing', bn: 'সর্বশ্রোতা', emoji: '👂' },
          { id: 23, ar: 'أَبْصَار ج بَصَر', romanized: 'abṣār pl. baṣar', en: 'Eyes / Sight', bn: 'চোখ / দৃষ্টি', emoji: '👁️' },
          { id: 24, ar: 'عِوَج', romanized: 'ʿiwaj', en: 'Crookedness / Deviation', bn: 'বক্রতা / বিচ্যুতি', emoji: '〰️' },
          { id: 25, ar: 'فُؤَاد ج أَفْئِدَة', romanized: 'fuʾād pl. afʾidah', en: 'Heart', bn: 'হৃদয়', emoji: '❤️' },
          { id: 26, ar: 'النَّفَاد (س)', romanized: 'an-nafād (s)', en: 'Depletion / Exhaustion', bn: 'ক্ষয় / ক্লান্তি', emoji: '📉' },
          { id: 27, ar: 'وَكِيل', romanized: 'wakīl', en: 'Guardian / Trustee / Disposer of affairs', bn: 'অভিভাবক / ট্রাস্টি / কর্ম নির্বাহক', emoji: '⚖️' },
          { id: 28, ar: 'فَلَك ج أَفْلَاك', romanized: 'falak pl. aflāk', en: 'Orbit', bn: 'কক্ষপথ', emoji: '🪐' },
          { id: 29, ar: 'كَرْب', romanized: 'karb', en: 'Distress / Anguish / Disaster', bn: 'কষ্ট / যন্ত্রণা / বিপর্যয়', emoji: '😢' },
          { id: 30, ar: 'سُبْحَانَكَ', romanized: 'subḥānaka', en: 'Glory be to You / I declare Your absolute purity', bn: 'আপনার মহিমা / আমি আপনার পরম পবিত্রতা ঘোষণা করি', emoji: '✨' },
          { id: 31, ar: 'تَجْرِي (الجريان، ض)', romanized: 'tajrī (al-jarayān, ḍ)', en: 'Flows / Runs', bn: 'প্রবাহিত হয় / ছুটে চলে', emoji: '🌊' },
          { id: 32, ar: 'الْفَاحِشَة', romanized: 'al-fāḥishah', en: 'Immorality / Obscenity / Obscene deeds', bn: 'অনৈতিকতা / অশ্লীলতা', emoji: '🚫' },
          { id: 33, ar: 'حَرِّقُوهُ', romanized: 'ḥarriqūhu', en: 'Burn him', bn: 'তাকে পুড়িয়ে দাও', emoji: '🔥' },
          { id: 34, ar: 'نَادَى', romanized: 'nādā', en: 'Called out', bn: 'ডেকেছিল', emoji: '🗣️' },
          { id: 35, ar: 'غَمّ', romanized: 'ghamm', en: 'Grief / Sorrow', bn: 'দুঃখ / কষ্ট', emoji: '😞' },
          { id: 36, ar: 'شُيُوع (ض)', romanized: 'shuyūʿ (ḍ)', en: 'Spreading / Becoming public', bn: 'ছড়িয়ে পড়া / প্রকাশ্যে আসা', emoji: '📢' },
          { id: 37, ar: 'بَايَعَ', romanized: 'bāyaʿa', en: 'Pledged allegiance', bn: 'আনুগত্যের শপথ নিয়েছিল', emoji: '🤝' },
          { id: 38, ar: 'ذَكَّرَ', romanized: 'dhakkara', en: 'Reminded / Advised', bn: 'স্মরণ করিয়ে দিয়েছিল / পরামর্শ দিয়েছিল', emoji: '💡' },
          { id: 39, ar: 'مِيثَاق', romanized: 'mīthāq', en: 'Covenant / Promise', bn: 'চুক্তি / প্রতিশ্রুতি', emoji: '📜' },
          { id: 40, ar: 'عَيْن', romanized: 'ʿayn', en: 'Eye', bn: 'চোখ', emoji: '👁️' },
          { id: 41, ar: 'دَافِع', romanized: 'dāfiʿ', en: 'Preventer / Defender', bn: 'প্রতিরোধকারী / রক্ষক', emoji: '🛡️' },
          { id: 42, ar: 'حِزْب ج أَحْزَاب', romanized: 'ḥizb pl. aḥzāb', en: 'Party / Group / Faction', bn: 'দল / গোষ্ঠী / শাখা', emoji: '👥' },
          { id: 43, ar: 'لَوَاقِع', romanized: 'lawāqiʿ', en: 'Bound to happen / Inevitable', bn: 'অবশ্যম্ভাবী', emoji: '⏳' },
        ],
      },
    },
    {
      id: '2',
      type: 'paragraph',
      titleEn: 'Reading: Introduction to Chapter 4',
      titleAr: 'القراءة: مقدمة الباب الرابع',
      titleBn: 'পাঠ: অধ্যায় ৪ এর ভূমিকা',
      payload: {
        paragraphs: [
          {
            titleEn: 'The Value of Arabic',
            titleBn: 'আরবির মূল্য',
            lines: [
              'أَخِي الطَّالِب !',
              'قَدْ عَرَفْتَ أَنَّ اللُّغَةَ الْعَرَبِيَّةَ هِيَ لُغَةُ الْقُرْآنِ وَ السُّنَّةِ، وَمِفْتَاحُ كُنُوزِهِمَا، وَ لِذَلِكَ فَقَدْ أَحْبَبْتَهَا حُبًّا عَظِيمًا وَ سَعَيْتَ لَهَا سَعْيًا كَثِيرًا . وَ مَنْ أَرَادَ اللُّغَةَ الْعَرَبِيَّةَ وَ سَعَى لَهَا سَعْيَهَا كَانَ سَعْيُهُ عِنْدَ اللَّهِ مَشْكُورًا .',
            ],
            translationEn:
              'My brother student! You have known that the Arabic language is the language of the Quran and the Sunnah, and the key to their treasures, and therefore you have loved it with a great love and strived for it with much striving. And whoever wants the Arabic language and strives for it its striving, his striving will be appreciated with Allah.',
            translationBn:
              'আমার ভাই ছাত্র! আপনি জেনেছেন যে আরবি ভাষা কুরআন ও সুন্নাহর ভাষা, এবং তাদের ধনের চাবিকাঠি, এবং তাই আপনি একে প্রচণ্ড ভালোবেসেছেন এবং এর জন্য অনেক চেষ্টা করেছেন। আর যে আরবি ভাষা চায় এবং তার জন্য চেষ্টা করে, তার চেষ্টা আল্লাহর কাছে প্রশংসিত হবে।',
          },
          {
            titleEn: 'Entering the Shades of Quran & Sunnah',
            titleBn: 'কুরআন ও সুন্নাহর ছায়ায় প্রবেশ',
            lines: [
              'أَخِي الطَّالِب !',
              'بِفَضْلِ اللَّهِ وَ عَوْنِهِ أَنْتَ تَبْدَأُ الْآنَ الْبَابَ الرَّابِعَ مِنْ هَذَا الْجُزْءِ، الَّذِي سَيَأْخُذُكَ إِلَى رِحَابِ الْقُرْآنِ وَ السُّنَّةِ لِتَرْتَوِيَ مِنْ مَنَاهِلِهِمَا وَ تَسْتَرِيحَ فِي ظِلَالِهِمَا . وَ هَذِهِ وَ اللَّهِ سَعَادَةٌ تَهْوُنُ دُونَهَا سَعَادَةُ الْمَالِ وَ الْجَمَالِ وَ سَعَادَةُ الْمُلْكِ وَ السُّلْطَانِ، فَالْحَمْدُ لِلَّهِ أَوَّلًا وَ آخِرًا .',
            ],
            translationEn:
              'My brother student! By the grace and help of Allah, you are now beginning the fourth chapter of this part, which will take you to the expanses of the Quran and the Sunnah so that you may quench your thirst from their springs and rest in their shades. And this, by Allah, is a happiness before which the happiness of wealth and beauty and the happiness of kingdom and power pales in comparison, so all praise is to Allah, first and last.',
            translationBn:
              'আমার ভাই ছাত্র! আল্লাহর রহমত ও সাহায্যে, আপনি এখন এই অংশের চতুর্থ অধ্যায় শুরু করছেন, যা আপনাকে কুরআন ও সুন্নাহর বিস্তৃতিতে নিয়ে যাবে যাতে আপনি তাদের ঝর্ণা থেকে তৃষ্ণা মেটাতে পারেন এবং তাদের ছায়ায় বিশ্রাম নিতে পারেন। এবং এটি, আল্লাহর শপথ, এমন এক সুখ যার সামনে ধন ও সৌন্দর্যের সুখ এবং রাজ্য ও ক্ষমতার সুখ ফ্যাকাশে হয়ে যায়, তাই সমস্ত প্রশংসা প্রথম থেকে শেষ পর্যন্ত আল্লাহর জন্য।',
          },
          {
            titleEn: 'A Prayer for the Student',
            titleBn: 'ছাত্রের জন্য একটি প্রার্থনা',
            lines: [
              'أَخِي الطَّالِب !',
              'أَسْأَلُ اللَّهَ لَكَ دَوَامَ السَّعَادَةِ بِالْقُرْآنِ وَ السُّنَّةِ وَ أَنْ يَتَنَوَّرَ قَلْبُكَ بِأَنْوَارِهِمَا . وَ أَرْجُو أَنْ لَا تَنْسَانِي فِي دُعَائِكَ إِذَا وَفَّقَكَ اللَّهُ لِلدُّعَاءِ، فَقَدْ كُنْتُ مَعَكَ فِي رِحْلَتِكَ إِلَى لُغَةِ الْقُرْآنِ وَ السُّنَّةِ .',
            ],
            translationEn:
              'My brother student! I ask Allah for your continuous happiness with the Quran and the Sunnah and that your heart be illuminated with their lights. And I hope that you will not forget me in your supplication if Allah grants you the ability to supplicate, for I was with you in your journey to the language of the Quran and the Sunnah.',
            translationBn:
              'আমার ভাই ছাত্র! আমি আল্লাহর কাছে কুরআন ও সুন্নাহর মাধ্যমে আপনার অব্যাহত সুখ এবং তাদের আলোতে আপনার হৃদয় আলোকিত হওয়ার প্রার্থনা করি। আর আমি আশা করি যে আল্লাহ আপনাকে দোয়া করার সামর্থ্য দিলে আপনি আমাকে দোয়ায় ভুলবেন না, কারণ আমি কুরআন ও সুন্নাহর ভাষায় আপনার যাত্রায় আপনার সাথে ছিলাম।',
          },
        ],
      },
    },
    {
      id: '3',
      type: 'paragraph',
      titleEn: 'Reading: Excerpts from the Noble Quran (Part 1)',
      titleAr: 'القراءة: مِنْ ظِلَالِ الْقُرْآنِ الْكَرِيمِ (١)',
      titleBn: 'পাঠ: নোবেল কোরআনের ছায়া থেকে (১)',
      payload: {
        paragraphs: [
          {
            titleEn: 'Seeking Guidance',
            titleBn: 'পথনির্দেশ খোঁজা',
            lines: [
              '(١) بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ . اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
            ],
            translationEn:
              '(1) In the name of Allah, the Most Gracious, the Most Merciful. Guide us to the straight path.',
            translationBn:
              '(১) পরম করুণাময়, অসীম দয়ালু আল্লাহর নামে। আমাদের সরল পথ দেখান।',
          },
          {
            titleEn: 'Worshipping the Creator',
            titleBn: 'স্রষ্টার উপাসনা',
            lines: [
              '(٢) يَأَيُّهَا النَّاسُ اعْبُدُواْ رَبَّكُمُ الَّذِي خَلَقَكُمْ',
            ],
            translationEn:
              '(2) O mankind, worship your Lord, who created you.',
            translationBn:
              '(২) হে মানবজাতি, তোমাদের রবের ইবাদত কর, যিনি তোমাদের সৃষ্টি করেছেন।',
          },
          {
            titleEn: 'Dwelling in Paradise',
            titleBn: 'জান্নাতে বসবাস',
            lines: [
              '(٣) وَ قُلْنَا يَا آدَمُ اسْكُنْ أَنْتَ وَ زَوْجُكَ الْجَنَّةَ',
            ],
            translationEn:
              '(3) And We said, "O Adam, dwell, you and your wife, in Paradise."',
            translationBn:
              '(৩) আর আমরা বললাম, "হে আদম, তুমি এবং তোমার স্ত্রী জান্নাতে বসবাস কর।"',
          },
          {
            titleEn: 'Consuming Provision',
            titleBn: 'রিজিক গ্রহণ',
            lines: [
              '(٤) كُلُواْ وَ اشْرَبُواْ مِنْ رِزْقِ اللَّهِ',
            ],
            translationEn:
              '(4) Eat and drink from the provision of Allah.',
            translationBn:
              '(৪) আল্লাহর দেওয়া রিজিক থেকে খাও ও পান কর।',
          },
          {
            titleEn: 'The Companions of Paradise',
            titleBn: 'জান্নাতের সঙ্গীরা',
            lines: [
              '(٥) وَ الَّذِينَ آمَنُواْ وَ عَمِلُواْ الصَّالِحَاتِ أُولَئِكَ أَصْحَابُ الْجَنَّةِ',
            ],
            translationEn:
              '(5) And those who believe and do righteous deeds - those are the companions of Paradise.',
            translationBn:
              '(৫) আর যারা ঈমান আনে এবং সৎ কাজ করে - তারাই জান্নাতের অধিবাসী।',
          },
          {
            titleEn: 'Sending a Messenger',
            titleBn: 'রাসূল পাঠানো',
            lines: [
              '(٦) رَبَّنَا وَ ابْعَثْ فِيهِمْ رَسُولًا مِنْهُمْ يَتْلُو عَلَيْهِمْ آيَاتِكَ وَ يُعَلِّمُهُمُ الْكِتَابَ وَ الْحِكْمَةَ وَ يُزَكِّيهِمْ .',
            ],
            translationEn:
              '(6) Our Lord, and send among them a messenger from themselves who will recite to them Your verses and teach them the Book and wisdom and purify them.',
            translationBn:
              '(৬) আমাদের রব, এবং তাদের মধ্যে তাদের থেকে একজন রাসূল পাঠান যিনি তাদের কাছে আপনার আয়াত পাঠ করবেন এবং তাদের কিতাব ও প্রজ্ঞা শিক্ষা দেবেন এবং তাদের পরিশুদ্ধ করবেন।',
          },
        ],
      },
    },
    {
      id: '4',
      type: 'paragraph',
      titleEn: 'Reading: Excerpts from the Noble Quran (Part 2)',
      titleAr: 'القراءة: مِنْ ظِلَالِ الْقُرْآنِ الْكَرِيمِ (٢)',
      titleBn: 'পাঠ: নোবেল কোরআনের ছায়া থেকে (২)',
      payload: {
        paragraphs: [
          {
            titleEn: 'Seeking Help with Patience and Prayer',
            titleBn: 'ধৈর্য ও প্রার্থনার মাধ্যমে সাহায্য চাওয়া',
            lines: [
              '(٧) يَأَيُّهَا الَّذِينَ آمَنُواْ اسْتَعِينُواْ بِالصَّبْرِ وَ الصَّلَاةِ، إِنَّ اللَّهَ مَعَ الصَّابِرِينَ',
            ],
            translationEn:
              '(7) O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.',
            translationBn:
              '(৭) হে ঈমানদারগণ, ধৈর্য ও সালাতের মাধ্যমে সাহায্য চাও। নিশ্চয়ই আল্লাহ ধৈর্যশীলদের সাথে আছেন।',
          },
          {
            titleEn: 'Allah is Near',
            titleBn: 'আল্লাহ নিকটবর্তী',
            lines: [
              '(٨) وَ إِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ، أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ',
            ],
            translationEn:
              '(8) And when My servants ask you concerning Me, then indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.',
            translationBn:
              '(৮) আর যখন আমার বান্দারা আপনাকে আমার সম্পর্কে জিজ্ঞাসা করে, তখন আমি তো কাছেই। যখন কোন প্রার্থনাকারী আমাকে ডাকে, আমি তার ডাকে সাড়া দিই।',
          },
          {
            titleEn: 'Fighting for Allah without Transgression',
            titleBn: 'সীমালঙ্ঘন ছাড়াই আল্লাহর জন্য লড়াই করা',
            lines: [
              '(٩) وَ قَاتِلُواْ فِي سَبِيلِ اللَّهِ الَّذِينَ يُقَاتِلُونَكُمْ، وَ لَا تَعْتَدُواْ، إِنَّ اللَّهَ لَا يُحِبُّ الْمُعْتَدِينَ',
            ],
            translationEn:
              '(9) Fight in the way of Allah those who fight you but do not transgress. Indeed. Allah does not like transgressors.',
            translationBn:
              '(৯) আর আল্লাহর পথে তাদের বিরুদ্ধে লড়াই কর যারা তোমাদের বিরুদ্ধে লড়াই করে, কিন্তু সীমালঙ্ঘন করো না। নিশ্চয়ই আল্লাহ সীমালঙ্ঘনকারীদের পছন্দ করেন না।',
          },
          {
            titleEn: 'Hoping for Allah\'s Mercy',
            titleBn: 'আল্লাহর রহমতের আশা করা',
            lines: [
              '(١٠) إِنَّ الَّذِينَ آمَنُواْ وَ الَّذِينَ هَاجَرُواْ وَ جَاهَدُواْ فِي سَبِيلِ اللَّهِ، أُولَئِكَ يَرْجُونَ رَحْمَةَ اللَّهِ، وَ اللَّهُ غَفُورٌ رَحِيمٌ',
            ],
            translationEn:
              '(10) Indeed, those who have believed and those who have emigrated and fought in the cause of Allah - those expect the mercy of Allah. And Allah is Forgiving and Merciful.',
            translationBn:
              '(১০) নিশ্চয়ই যারা ঈমান এনেছে এবং যারা হিজরত করেছে এবং আল্লাহর পথে জিহাদ করেছে - তারাই আল্লাহর রহমতের আশা করে। আর আল্লাহ ক্ষমাশীল ও দয়ালু।',
          },
          {
            titleEn: 'The Ultimate Choice',
            titleBn: 'চূড়ান্ত পছন্দ',
            lines: [
              '(١١) أُولَئِكَ يَدْعُونَ إِلَى النَّارِ وَ اللَّهُ يَدْعُو إِلَى الْجَنَّةِ وَ الْمَغْفِرَةِ',
              '(١٢) وَ اللَّهُ يَعْلَمُ وَ أَنْتُمْ لَا تَعْلَمُونَ',
            ],
            translationEn:
              '(11) Those invite to the Fire, but Allah invites to Paradise and to forgiveness. (12) And Allah knows, while you know not.',
            translationBn:
              '(১১) তারা জাহান্নামের দিকে ডাকে, আর আল্লাহ জান্নাত ও ক্ষমার দিকে ডাকেন। (১২) আর আল্লাহ জানেন, আর তোমরা জান না।',
          },
        ],
      },
    },
  ],
};
