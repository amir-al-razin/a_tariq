import type { LessonData } from '../../curriculum';

export const lesson02: LessonData = {
  darsNumber: 2,
  chunks: [
    {
      id: '1',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Part 1',
      titleAr: 'المفردات: القسم الأول',
      titleBn: 'শব্দভাণ্ডার: পর্ব ১',
      payload: {
        words: [
          { id: 1, ar: 'مِشْكَاة', romanized: 'mishkāh', en: 'Lantern / Niche', bn: 'দীপাধার', emoji: '🪔' },
          { id: 2, ar: 'حُجَّةٌ', romanized: 'ḥujjah', en: 'Proof', bn: 'প্রমাণ', emoji: '📜' },
          { id: 3, ar: 'الرِّوَايَة (ض)', romanized: 'ar-riwāyah', en: 'To narrate', bn: 'বর্ণনা করা', emoji: '📖' },
          { id: 4, ar: 'الميزان', romanized: 'al-mīzān', en: 'Scale', bn: 'দাঁড়িপাল্লা', emoji: '⚖️' },
          { id: 5, ar: 'شَطْرٌ', romanized: 'shaṭr', en: 'Half', bn: 'অর্ধেক', emoji: '🌗' },
          { id: 6, ar: 'ضياء', romanized: 'ḍiyāʾ', en: 'Light', bn: 'আলো', emoji: '💡' },
          { id: 7, ar: 'الحكاية (ض)', romanized: 'al-ḥikāyah', en: 'To narrate / Tell', bn: 'বর্ণনা করা', emoji: '🗣️' },
          { id: 8, ar: 'الإستعمال', romanized: 'al-istiʿmāl', en: 'To appoint someone to an official position', bn: 'কাউকে সরকারী কাজে নিযুক্ত করা', emoji: '📝' },
          { id: 9, ar: 'لا تتمنوا', romanized: 'lā tatamannaw', en: 'Do not desire / Wish', bn: 'তোমরা আকাঙ্ক্ষা করো না', emoji: '❌' },
          { id: 10, ar: 'العافية', romanized: 'al-ʿāfiyah', en: 'Safety / Well-being', bn: 'নিরাপদ', emoji: '🛡️' },
          { id: 11, ar: 'أدموه', romanized: 'admauhu', en: 'They made him bleed', bn: 'তাকে রক্তাক্ত করল', emoji: '🩸' },
          { id: 12, ar: 'الابتلاء', romanized: 'al-ibtilāʾ', en: 'To test', bn: 'পরীক্ষা করা', emoji: '📝' },
          { id: 13, ar: 'أثرة', romanized: 'atharah', en: 'Favoritism / Selfishness', bn: 'পক্ষপাতিত্ব', emoji: '😠' },
          { id: 14, ar: 'البِرُّ', romanized: 'al-birr', en: 'Righteousness / Obedience to Allah', bn: 'পুণ্য, আল্লাহর আনুগত্য', emoji: '✅' },
          { id: 15, ar: 'الفجور', romanized: 'al-fujūr', en: 'Wickedness / Sin', bn: 'পাপাচার', emoji: '👿' },
          { id: 16, ar: 'الغنى', romanized: 'al-ghinā', en: 'Wealth / Independence from others', bn: 'সচ্ছলতা, কারো মুখাপেক্ষী না হওয়া', emoji: '💰' },
          { id: 17, ar: 'قَدَّرَ', romanized: 'qaddara', en: 'Decreed / Destined', bn: 'ফায়সালা করেছেন, তাকদীরে রেখেছেন', emoji: '✍️' },
          { id: 18, ar: 'بَلَّغَهُ', romanized: 'ballaghahu', en: 'He will cause him to reach', bn: 'তাকে পৌঁছাবেন', emoji: '🚀' },
          { id: 19, ar: 'الهدى', romanized: 'al-hudā', en: 'Guidance', bn: 'হেদায়াত', emoji: '🧭' },
          { id: 20, ar: 'مَنَازِل (م) مَنْزِلَةٌ', romanized: 'manāzil / manzilah', en: 'Status / Rank', bn: 'মর্যাদা', emoji: '⭐' },
          { id: 21, ar: 'التَّبَعُ (س)', romanized: 'at-tabaʿ', en: 'To follow', bn: 'অনুসরণ করা', emoji: '👣' },
          { id: 22, ar: 'وإن', romanized: 'wa in', en: 'Even if', bn: 'যদিও', emoji: '➖' },
          { id: 23, ar: 'التقى', romanized: 'at-tuqā', en: 'Piety / God-consciousness', bn: 'তাকওয়া, ধর্মানিষ্ঠা', emoji: '🤲' },
          { id: 24, ar: 'العفاف', romanized: 'al-ʿafāf', en: 'Chastity / Purity of character', bn: 'চরিত্রের পবিত্রতা', emoji: '✨' },
          { id: 25, ar: 'العجز (ض)', romanized: 'al-ʿajz', en: 'To be incapable / Helpless', bn: 'অক্ষম হওয়া', emoji: '♿' },
          { id: 26, ar: 'البَيْتُوتَة (ض)', romanized: 'al-baytūtah', en: 'To spend the night', bn: 'রাত্র যাপন করা', emoji: '🌙' },
          { id: 27, ar: 'وَضُوء', romanized: 'waḍūʾ', en: 'Ablution water', bn: 'ওযুর পানি', emoji: '💧' }
        ]
      }
    },
    {
      id: '2',
      type: 'paragraph',
      titleEn: 'Reading: Excerpts from the Prophetic Hadith (Part 1)',
      titleAr: 'القراءة: مِنْ مِشْكَاةِ النُّبُوَّةِ (١)',
      titleBn: 'পাঠ: নবুওয়তের কুলুঙ্গি থেকে (১)',
      payload: {
        paragraphs: [
          {
            titleEn: 'Hadiths 1 to 22',
            titleBn: 'হাদিস ১ থেকে ২২',
            lines: [
              '(١) قال سيدنا عُمَرُ بنُ الخطاب رضي الله عنه : سمعت رسول الله صلى الله عليه وسلم يقول : إنما الأعمال بالنيات . (رواه البخاري ومسلم)',
              '(٢) قال أبو هريرة رضي الله عنه : قال رسول الله صلى الله عليه وسلم : إن الله لا ينظر إلى أجسامكم ولا إلى صوركم ولكن ينظر إلى قلوبكم وأعمالكم . (رواه مسلم)',
              '(٣) قال أبو هريرة رضي الله عنه : سمعت رسول الله صلى الله عليه وسلم يقول : والله إني لأستغفر الله وأتوب إليه في اليوم أكثر من سبعين مرة . (رواه البخاري)',
              '(٤) قال رسول الله صلى الله عليه وسلم : يا أيها الناس ! توبوا إلى الله واستغفروه، فإني أتوب في اليوم مائة مرة . (رواه مسلم عن الأغر بن يسار)',
              '(٥) قال رسول الله صلى الله عليه وسلم : الطُّهُور شَطْرُ الإيمان والحمد لله تَمْلأُ الميزان وسبحان الله والحمد لله تملآن ما بين السموات والأرض، والصلاة نور والصدقة برهان والصبر ضياء والقرآن حجة لك أو عليك . (رواه مسلم عن أبي مالك رضي الله عنه)',
              '(٦) قال عبد الله بن مسعود رضي الله عنه : كَأَنِّي أنظر إلى رسول الله صلى الله عليه وسلم يحكي نبيا من الأنبياء - صلوات الله وسلامه عليهم - ضربه قوم فَأَدْمَوْه وهو يمسح الدم عن وجهه، يقول : اللهم اغفر لقومي فإنهم لا يعلمون . (رواه الإمام البخاري والإمام مسلم)',
              '(٧) قال النبي صلى الله عليه وسلم : إن الله تعالى إذا أحب قوما ابتلاهم، فمن رضي فله الرضى ومن سخط فله السُّخْطُ . (رواه الترمذي عن أنس رضي الله عنه)',
              '(٨) عن أبي هريرة رضي الله عنه أن رجلا قال للنبي صلى الله عليه وسلم : أَوْصِنِي، قال : لا تَغْضَبْ . (رواه البخاري)',
              '(٩) عن أبي يحيى رضي الله عنه أن رجلا من الأنصار قال : يا رسول الله ! ألا تستعملني كما استعملت فلانا، فقال : إنكم سَتَلْقَوْنَ بعدي أَثَرَةً فاصبروا حتى تلقوني على الحوض . (رواه البخاري ومسلم)',
              '(١٠) قال رسول الله صلى الله عليه وسلم : يا أيها الناس ! لا تَتَمَنَّوا لقاء العدو، واسألوا الله العافِيَةَ، فإذا لقيتُموهم فاصبروا، واعلموا أن الجنة تحت ظلال السيوف . (رواه الإمام البخاري والإمام مسلم عن عبد الله بن أبي أوفى رضي الله عنهما)',
              '(١١) قال النبي صلى الله عليه وسلم : إن الصدق يهدي إلى البر وإن البر يهدي إلى الجنة .... وإن الكذب يهدي إلى الفجور، وإن الفجور يهدي إلى النار ....',
              '(١٢) عن سهل بن حُنَيْف - وهو بدري - رضي الله عنه أن النبي صلى الله عليه وسلم قال : من سأل الله تعالى الشهادة بِصِدْقٍ بَلَّغَهُ الله منازل الشهداء وإن مات على فراشه . (رواه مسلم)',
              '(١٣) عن ابن مسعود رضي الله عنه أن النبي صلى الله عليه وسلم كان يقول : اللهم إني أسألك الهُدَى والتُّقَى والعَفَافَ والغِنَى . (رواه مسلم)',
              '(١٤) عن سفيان بن عبد الله رضي الله عنه قال : قلت يا رسول الله ! قل لي في الإسلام قولا لا أسأل عنه أحدا غَيْرَكَ . قال : قل آمنت بالله ثم استَقِمْ . (رواه مسلم)',
              '(١٥) عن أبي هريرة رضي الله عنه قال : قال رسول الله صلى الله عليه وسلم : المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف . وفي كُلٍّ خَيْرٌ . احرص على ما ينفعك، واستعن بالله ولا تَعْجِزْ، وإن أصابك شيء فلا تقل : لو أني فعلتُ لكان كذا وكذا، ولكنْ قل : قَدَّرَ اللهُ، فَإِنَّ لَوْ تفتَحُ عَمَلَ الشيطان . (رواه مسلم)',
              '(١٦) قال رسول الله صلى الله عليه وسلم : يَتْبَعُ الميتَ ثلاثة : أهله و ماله وعمله؛ فيرجع اثنان ويبقى واحد : يرجع أهلُه ومالُه ويبقى عملُه . (رواه البخاري ومسلم)',
              '(١٧) عَنْ رَبِيعَةَ بْنِ كَعْبٍ خَادِمِ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ : كُنْتُ أَبِيتُ مَعَ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَآتِيهِ بِوَضُوئِهِ وَحَاجَتِهِ فَقَالَ : سَلْنِي، فَقُلْتُ : أَسْأَلُكَ مُرَافَقَتَكَ فِي الْجَنَّةِ، فَقَالَ : أَوَ غَيْرَ ذَلِكَ ؟ قُلْتُ هُوَ ذَاكَ، قَالَ : فَأَعِنِّي عَلَى نَفْسِكَ بِكَثْرَةِ السُّجُودِ . (رواه مسلم)',
              '(١٨) عَنْ أَبِي مُوسَى الْأَشْعَرِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ : قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : مَنْ صَلَّى الْبَرْدَيْنِ دَخَلَ الْجَنَّةَ . (البردان : الصبح و العصر)',
              '(١٩) عَنْ عَبْدِ اللَّهِ بْنِ عَمْرِو بْنِ الْعَاصِ رَضِيَ اللَّهُ عَنْهُمَا قَالَ : قَالَ لِي رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : يَا عَبْدَ اللَّهِ ! لَا تَكُنْ مِثْلَ فُلَانٍ، كَانَ يَقُومُ اللَّيْلَ فَتَرَكَ قِيَامَ اللَّيْلِ',
              '(٢٠) عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ : كُلُّ أُمَّتِي يَدْخُلُونَ الْجَنَّةَ إِلَّا مَنْ أَبَى . قَالُوا : وَمَنْ يَأْبَى يَا رَسُولَ اللَّهِ ! قَالَ : مَنْ أَطَاعَنِي دَخَلَ الْجَنَّةَ وَمَنْ عَصَانِي فَقَدْ أَبَى . (رواه البخاري)',
              '(٢١) عَنْ أَنَسٍ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ : لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ .',
              '(٢٢) عَنْ أَبِي عَبْدِ اللَّهِ طَارِقِ بْنِ شِهَابٍ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَجُلًا سَأَلَ النبي صلى الله عليه وسلم : أَيُّ الْجِهَادِ أَفْضَلُ ؟ قَالَ : كَلِمَةُ حَقٍّ عِنْدَ سُلْطَانٍ جَائِرٍ (ظالم) . (رواه النسائي)'
            ],
            translationEn: '(1) Actions are but by intentions. (2) Allah does not look at your bodies or your forms, but He looks at your hearts and deeds. (3) By Allah, I seek forgiveness from Allah and repent to Him more than seventy times a day. (4) O people, repent to Allah and seek His forgiveness, for I repent a hundred times a day. (5) Purity is half of faith, "Alhamdulillah" fills the scale, and "Subhanallah" and "Alhamdulillah" fill what is between heaven and earth. Prayer is light, charity is proof, patience is illumination, and the Quran is an argument for or against you. (6) It is as if I am looking at the Prophet narrating about a prophet whose people beat him and made him bleed; while wiping the blood from his face, he said, "O Allah, forgive my people, for they do not know." (7) If Allah loves a people, He tests them; whoever is pleased will have pleasure, and whoever is displeased will have displeasure. (8) A man said to the Prophet, "Advise me." He said, "Do not get angry." (9) You will see selfishness after me, so be patient until you meet me at the Fountain. (10) Do not wish to meet the enemy, ask Allah for safety; but if you meet them, be patient and know that Paradise is under the shades of swords. (11) Truthfulness leads to righteousness, and righteousness leads to Paradise. Lying leads to wickedness, and wickedness leads to the Fire. (12) Whoever asks Allah for martyrdom sincerely, Allah will make him reach the ranks of the martyrs, even if he dies on his bed. (13) O Allah, I ask You for guidance, piety, chastity, and independence. (14) Say, "I believe in Allah," then be steadfast. (15) The strong believer is better and more beloved to Allah than the weak believer, but there is good in both. Strive for what benefits you, seek Allah\'s help, and do not be helpless. If anything befalls you, do not say "If only...", but say "Allah decreed", for "If" opens the door to Satan. (16) Three follow the dead: his family, his wealth, and his deeds. Two return, and one remains: his deeds remain. (17) Rabia bin Kab said: I used to stay overnight with the Messenger of Allah. I brought him his ablution water. He said, "Ask me." I said, "I ask for your companionship in Paradise." He said, "Anything else?" I said, "That is all." He said, "Then help me against yourself with many prostrations." (18) Whoever prays the two cool prayers (Fajr and Asr) will enter Paradise. (19) O Abdullah, do not be like so-and-so; he used to pray at night and then abandoned it. (20) All my nation will enter Paradise except those who refuse. They asked, "Who refuses?" He said, "Whoever obeys me enters Paradise, and whoever disobeys me has refused." (21) None of you believes until he loves for his brother what he loves for himself. (22) The best Jihad is a word of truth before an unjust ruler.',
            translationBn: '(১) কাজ উদ্দেশ্যের ওপর নির্ভরশীল। (২) আল্লাহ তোমাদের শরীর বা চেহারার দিকে তাকান না, বরং তোমাদের হৃদয় ও আমলের দিকে তাকান। (৩) আল্লাহর কসম, আমি দিনে সত্তর বারের বেশি আল্লাহর কাছে ক্ষমা চাই এবং তওবা করি। (৪) হে মানুষ, আল্লাহর কাছে তওবা কর, কেননা আমি দিনে একশ বার তওবা করি। (৫) পবিত্রতা ঈমানের অর্ধেক। "আলহামদুলিল্লাহ" পাল্লা পূর্ণ করে, আর "সুবহানাল্লাহ" ও "আলহামদুলিল্লাহ" আসমান ও জমিনের মধ্যবর্তী স্থান পূর্ণ করে। সালাত হলো আলো, দান হলো প্রমাণ, ধৈর্য হলো জ্যোতি এবং কোরআন তোমার পক্ষে বা বিপক্ষে যুক্তি। (৬) আমি যেন নবীকে দেখতে পাচ্ছি, তিনি এমন একজন নবীর কথা বর্ণনা করছেন যাঁকে তাঁর কওম প্রহার করে রক্তাক্ত করেছিল; তিনি মুখ থেকে রক্ত মুছতে মুছতে বলছিলেন, "হে আল্লাহ, আমার কওমকে ক্ষমা করুন, কারণ তারা জানে না।" (৭) আল্লাহ যখন কোনো সম্প্রদায়কে ভালোবাসেন, তখন তাদের পরীক্ষা করেন; যে সন্তুষ্ট থাকে তার জন্য সন্তুষ্টি, আর যে অসন্তুষ্ট হয় তার জন্য অসন্তুষ্টি। (৮) এক ব্যক্তি নবীকে বলল, "আমাকে উপদেশ দিন।" তিনি বললেন, "রাগ কোরো না।" (৯) আমার পর তোমরা স্বার্থপরতা দেখতে পাবে, তাই ধৈর্য ধারণ করো যতক্ষণ না তোমরা হাউজে আমার সাথে মিলিত হও। (১০) শত্রুর মুখোমুখি হওয়ার আকাঙ্ক্ষা কোরো না, আল্লাহর কাছে নিরাপত্তা চাও; কিন্তু যদি তাদের মুখোমুখি হও, তবে ধৈর্য ধরো এবং জেনে রাখো যে তরবারির ছায়াতলে জান্নাত রয়েছে। (১১) সত্যবাদিতা পুণ্যের দিকে নিয়ে যায়, আর পুণ্য জান্নাতের দিকে নিয়ে যায়। মিথ্যাবাদিতা পাপাচারের দিকে নিয়ে যায়, আর পাপাচার জাহান্নামের দিকে নিয়ে যায়। (১২) যে ব্যক্তি আন্তরিকভাবে আল্লাহর কাছে শাহাদাত কামনা করে, আল্লাহ তাকে শহীদদের মর্যাদায় পৌঁছাবেন, যদিও সে তার বিছানায় মারা যায়। (১৩) হে আল্লাহ, আমি আপনার কাছে হেদায়েত, তাকওয়া, পবিত্রতা এবং অমুখাপেক্ষিতা চাই। (১৪) বলুন, "আমি আল্লাহর প্রতি ঈমান এনেছি," তারপর অটল থাকুন। (১৫) শক্তিশালী মুমিন দুর্বল মুমিনের চেয়ে আল্লাহর কাছে উত্তম ও অধিক প্রিয়, তবে উভয়ের মধ্যেই কল্যাণ রয়েছে। যা তোমার উপকারে আসবে তার জন্য চেষ্টা করো, আল্লাহর কাছে সাহায্য চাও এবং অক্ষম হয়ো না। যদি কোনো বিপদ আসে, তবে বোলো না "যদি আমি এমন করতাম...", বরং বলো "আল্লাহ তাকদিরে রেখেছেন", কেননা "যদি" শব্দটি শয়তানের দরজা খুলে দেয়। (১৬) মৃত ব্যক্তির সাথে তিনটি জিনিস যায়: তার পরিবার, তার সম্পদ এবং তার আমল। দুটি ফিরে আসে, আর একটি থেকে যায়: তার আমল থেকে যায়। (১৭) রাবিয়া বিন কাব বলেন: আমি রাসূলের সাথে রাত কাটাতাম। আমি তাঁর ওযুর পানি আনতাম। তিনি বললেন, "আমার কাছে কিছু চাও।" আমি বললাম, "আমি জান্নাতে আপনার সাহচর্য চাই।" তিনি বললেন, "আর কিছু?" আমি বললাম, "এটাই।" তিনি বললেন, "তাহলে বেশি বেশি সিজদার মাধ্যমে তোমার নিজের বিরুদ্ধে আমাকে সাহায্য করো।" (১৮) যে ব্যক্তি দুই শীতল সালাত (ফজর ও আসর) আদায় করবে সে জান্নাতে প্রবেশ করবে। (১৯) হে আব্দুল্লাহ, অমুকের মতো হয়ো না; সে রাতে সালাত আদায় করত তারপর তা ছেড়ে দিয়েছে। (২০) আমার উম্মতের সবাই জান্নাতে প্রবেশ করবে, কেবল সে ব্যতীত যে অস্বীকার করে। তারা জিজ্ঞেস করল, "কে অস্বীকার করে?" তিনি বললেন, "যে আমার আনুগত্য করে সে জান্নাতে প্রবেশ করে, আর যে আমার অবাধ্য হয় সে অস্বীকার করে।" (২১) তোমাদের কেউ ততক্ষণ মুমিন হতে পারবে না যতক্ষণ না সে তার ভাইয়ের জন্য তা পছন্দ করে যা সে নিজের জন্য পছন্দ করে। (২২) জালিম শাসকের সামনে সত্য কথা বলাই হলো সর্বোত্তম জিহাদ।'
          }
        ]
      }
    },
    {
      id: '3',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Part 2',
      titleAr: 'المفردات: القسم الثاني',
      titleBn: 'শব্দভাণ্ডার: পর্ব ২',
      payload: {
        words: [
          { id: 28, ar: 'أَرَأَيْتَ !', romanized: 'a-raʾayta', en: 'Tell me!', bn: '(এর ভাব অর্থ) আচ্ছা, বলুন তো !', emoji: '🗣️' },
          { id: 29, ar: 'بِرُّ الْوَالِدَيْنِ', romanized: 'birr al-wālidayn', en: 'Dutifulness to parents', bn: 'মা-বাবার প্রতি সদাচার', emoji: '👨‍👩‍👧' },
          { id: 30, ar: 'السَّتْرُ (ن)', romanized: 'as-satr', en: 'To cover / Conceal', bn: 'ঢাকা, আবৃত করা', emoji: '🙈' },
          { id: 31, ar: 'شَرَفٌ', romanized: 'sharaf', en: 'Honor / Dignity', bn: 'ভদ্রতা, মর্যাদা', emoji: '🎖️' },
          { id: 32, ar: 'سِلْعَةٌ ج سِلَعٌ', romanized: 'silʿah pl. silaʿ', en: 'Commodity / Merchandise', bn: 'পণ্য', emoji: '📦' },
          { id: 33, ar: 'الْخَلْقُ', romanized: 'al-khalq', en: 'Creation / Creatures', bn: 'মাখলুক, সৃষ্টিজীব', emoji: '🌍' },
          { id: 34, ar: 'التَّرَاحُمُ', romanized: 'at-tarāḥum', en: 'To show mercy to one another', bn: 'পরস্পর দয়া করা', emoji: '🤝' },
          { id: 35, ar: 'الْبَذَاذَةُ', romanized: 'al-badhādhah', en: 'Simplicity in living', bn: 'সহজ সরল জীবনযাপন', emoji: '🛖' },
          { id: 36, ar: 'النُّقْصَانُ (ن)', romanized: 'an-nuqṣān', en: 'To decrease / Diminution', bn: 'হ্রাস পাওয়া, কম করা', emoji: '📉' },
          { id: 37, ar: 'مِثْقَالُ ذَرَّةٍ', romanized: 'mithqāl dharrah', en: "Atom's weight", bn: 'কণা পরিমাণ', emoji: '⚛️' },
          { id: 38, ar: 'كِبْرٌ', romanized: 'kibr', en: 'Arrogance / Pride', bn: 'অহংকার', emoji: '😤' },
          { id: 39, ar: 'رِفْقٌ', romanized: 'rifq', en: 'Gentleness', bn: 'কোমলতা', emoji: '🌸' },
          { id: 40, ar: 'مَسْئُولٌ', romanized: 'masʾūl', en: 'Responsible / Accountable', bn: 'দায়িত্ববান', emoji: '📋' },
          { id: 41, ar: 'رَاعٍ', romanized: 'rāʿin', en: 'Shepherd / Guardian', bn: 'চালক, শাসক, রাখাল', emoji: '🐑' },
          { id: 42, ar: 'رَعِيَّةٌ', romanized: 'raʿiyyah', en: 'Subjects / Flock', bn: 'শাসিত, প্রজা', emoji: '👥' },
          { id: 43, ar: 'نَعْلٌ ج نِعَالٌ', romanized: 'naʿl pl. niʿāl', en: 'Sandal / Shoe', bn: 'জুতা', emoji: '👡' },
          { id: 44, ar: 'حُسْنُ الْخُلُقِ', romanized: 'ḥusn al-khuluq', en: 'Good character', bn: 'চরিত্রের উত্তমতা', emoji: '😇' }
        ]
      }
    },
    {
      id: '4',
      type: 'paragraph',
      titleEn: 'Reading: Excerpts from the Prophetic Hadith (Part 2)',
      titleAr: 'القراءة: مِنْ مِشْكَاةِ النُّبُوَّةِ (٢)',
      titleBn: 'পাঠ: নবুওয়তের কুলুঙ্গি থেকে (২)',
      payload: {
        paragraphs: [
          {
            titleEn: 'Hadiths 23 to 46',
            titleBn: 'হাদিস ২৩ থেকে ৪৬',
            lines: [
              '(٢٣) عن جرير بن عبد الله رضي الله عنه قال : قال رسول الله صلى الله عليه وسلم : مَنْ لَا يَرْحَمِ النَّاسَ لَا يَرْحَمْهُ اللَّهُ .',
              '(٢٤) عن أنس رضي الله عنه قال : قال رسول الله صلى الله عليه وسلم : انْصُرْ أَخَاكَ ظَالِمًا أَوْ مَظْلُومًا، فَقَالَ رَجُلٌ : يَا رَسُولَ اللَّهِ : أَنْصُرُهُ إِذَا كَانَ مَظْلُومًا، أَ رَأَيْتَ إِنْ كَانَ ظَالِمًا، كَيْفَ أَنْصُرُهُ ؟ قَالَ : تَمْنَعُهُ مِنَ الظُّلْمِ، فَإِنَّ ذَلِكَ نَصْرُهُ .',
              '(٢٥) عن أبي هريرة رضي الله عنه أن النبي صلى الله عليه وسلم قال : لَا يَسْتُرُ عَبْدٌ عَبْدًا فِي الدُّنْيَا إِلَّا سَتَرَهُ اللَّهُ يَوْمَ الْقِيَامَةِ . (رواه مسلم)',
              '(٢٦) عن عبد الله بن مسعود رضي الله عنه قال : سألت النبي صلى الله عليه وسلم : أَيُّ الْعَمَلِ أَحَبُّ إِلَى اللَّهِ تَعَالَى ؟ قَالَ : الصَّلَاةُ عَلَى وَقْتِهَا، قُلْتُ : ثُمَّ أَيٌّ ؟ قَالَ : بِرُّ الْوَالِدَيْنِ . قُلْتُ : ثُمَّ أَيٌّ ؟ قَالَ : الْجِهَادُ فِي سَبِيلِ اللَّهِ .',
              '(٢٧) قال رسول الله صلى الله عليه وسلم : لَيْسَ مِنَّا مَنْ لَمْ يَرْحَمْ صَغِيرَنَا وَ(لَمْ) يَعْرِفْ شَرَفَ كَبِيرِنَا . (رواه أبو داود و الترمذي عن عمرو بن شعيب)',
              '(٢٨) عن أنس رضي الله عنه أن أعرابيا قال لرسول الله صلى الله عليه وسلم : مَتَى السَّاعَةُ ؟ قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : مَا أَعْدَدْتَ لَهَا ؟ قَالَ حُبَّ اللَّهِ وَرَسُولِهِ، قَالَ أَنْتَ مَعَ مَنْ أَحْبَبْتَ .',
              '(٢٩) عن أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال : .. أَلَا إِنَّ سِلْعَةَ اللَّهِ غَالِيَةٌ، أَلَا إِنَّ سِلْعَةَ اللَّهِ الْجَنَّةُ . (رواه الترمذي)',
              '(٣٠) عن سلمان الفارسي رضي الله عنه قال : قال رسول الله صلى الله عليه وسلم : إِنَّ لِلَّهِ تَعَالَى مِائَةَ رَحْمَةٍ، فَمِنْهَا رَحْمَةٌ يَتَرَاحَمُ بِهَا الْخَلْقُ بَيْنَهُمْ، وَتِسْعٌ وَتِسْعُونَ لِيَوْمِ الْقِيَامَةِ .',
              '(٣١) عن أبي هريرة رضي الله عنه قال : قال رسول الله صلى الله عليه وسلم : وَالَّذِي نَفْسِي بِيَدِهِ لَوْ لَمْ تُذْنِبُوا لَذَهَبَ اللَّهُ بِكُمْ وَلَجَاءَ بِقَوْمٍ يُذْنِبُونَ فَيَسْتَغْفِرُونَ اللَّهَ تَعَالَى فَيَغْفِرُ لَهُمْ .',
              '(٣٢) عن أبي أيوب خالد بن زيد رضي الله عنه قال : سمعت رسول الله صلى الله عليه وسلم يقول : لَوْ لَا أَنَّكُمْ تُذْنِبُونَ، لَخَلَقَ اللَّهُ خَلْقًا يُذْنِبُونَ فَيَسْتَغْفِرُونَ فَيَغْفِرُ لَهُمْ .',
              '(٣٣) عن أنس رضي الله عنه قال : قال رسول الله صلى الله عليه وسلم لِأُبَيِّ بْنِ كَعْبٍ رضي الله عنه : إِنَّ اللَّهَ عَزَّ وَجَلَّ أَمَرَنِي أَنْ أَقْرَأَ عَلَيْكَ لَمْ يَكُنِ الَّذِينَ كَفَرُوا . قَالَ : وَسَمَّانِي (ربي) ؟ قَالَ : نَعَمْ . فَبَكَى أُبَيٌّ .',
              '(٣٤) عن أبي هريرة رضي الله عنه قال : قال رسول الله صلى الله عليه وسلم : يقول : الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ .',
              '(٣٥) عن أبي هريرة رضي الله عنه قال : سمعت رسول الله صلى الله عليه وسلم يقول : الدُّنْيَا مَلْعُونَةٌ، مَلْعُونٌ مَا فِيهَا إِلَّا ذِكْرُ اللَّهِ ... وَعَالِمًا وَمُتَعَلِّمًا . (رواه الترمذي)',
              '(٣٦) عن كعب بن عياض رضي الله عنه قال : سمعت رسول الله صلى الله عليه وسلم يقول : إِنَّ لِكُلِّ أُمَّةٍ فِتْنَةً وَفِتْنَةُ أُمَّتِي الْمَالُ . (رواه الترمذي)',
              '(٣٧) عن أبي هريرة رضي الله عنه : قال رسول الله صلى الله عليه وسلم : يَدْخُلُ الْفُقَرَاءُ الْجَنَّةَ قَبْلَ الْأَغْنِيَاءِ بِخَمْسِمِائَةِ عَامٍ . (رواه الترمذي)',
              '(٣٨) عن أبي أمامة رضي الله عنه قال : ذكر أصحاب رسول الله صلى الله عليه وسلم يوما عنده الدنيا، فقال رسول الله صلى الله عليه وسلم : أَلَا تَسْمَعُونَ ؟ أَلَا تَسْمَعُونَ ؟ إِنَّ الْبَذَاذَةَ مِنَ الْإِيمَانِ، إِنَّ الْبَذَاذَةَ مِنَ الْإِيمَانِ . (رواه أبو داود)',
              '(٣٩) عن عبد الله بن عمرو بن العاص رضي الله عنهما أن رجلا سأل رسول الله صلى الله عليه وسلم : أَيُّ الْإِسْلَامِ خَيْرٌ ؟ قَالَ : تُطْعِمُ الطَّعَامَ وَتَقْرَأُ السَّلَامَ عَلَى مَنْ عَرَفْتَ وَمَنْ لَمْ تَعْرِفْ .',
              '(٤٠) عن أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال : مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ، وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلَّا عِزًّا، وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلَّا رَفَعَهُ اللَّهُ عَزَّ وَجَلَّ .',
              '(٤١) عن أنس رضي الله عنه أن النبي صلى الله عليه وسلم وجد تمرة في الطريق، فقال : لَوْلَا أَنِّي أَخَافُ أَنْ تَكُونَ مِنَ الصَّدَقَةِ لَأَكَلْتُهَا .',
              '(٤٢) عن عبد الله بن مسعود رضي الله عنه عن النبي صلى الله عليه وسلم قال : لَا يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ، فَقَالَ رَجُلٌ : إِنَّ الرَّجُلَ يُحِبُّ أَنْ يَكُونَ ثَوْبُهُ حَسَنًا وَنَعْلُهُ حَسَنَةً ؟ قَالَ : إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ .',
              '(٤٣) عن عائشة رضي الله عنها قالت : سمعت رسول الله صلى الله عليه وسلم يقول : إِنَّ الْمُؤْمِنَ لَيُدْرِكُ بِحُسْنِ خُلُقِهِ دَرَجَةَ الصَّائِمِ الْقَائِمِ . (رواه أبو داود)',
              '(٤٤) عن عائشة رضي الله عنها قالت : قال رسول الله صلى الله عليه وسلم : إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ فِي الْأَمْرِ كُلِّهِ .',
              '(٤٥) عن ابن عمر رضي الله عنهما قال : سمعت رسول الله صلى الله عليه وسلم يقول : كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ، الْإِمَامُ رَاعٍ وَمَسْئُولٌ عَنْ رَعِيَّتِهِ، وَالرَّجُلُ رَاعٍ فِي أَهْلِهِ وَمَسْئُولٌ عَنْ رَعِيَّتِهِ، وَالْمَرْأَةُ رَاعِيَةٌ فِي بَيْتِ زَوْجِهَا وَمَسْئُولَةٌ عَنْ رَعِيَّتِهَا، وَالْخَادِمُ رَاعٍ فِي مَالِ سَيِّدِهِ وَمَسْئُولٌ عَنْ رَعِيَّتِهِ، وَكُلُّكُمْ رَاعٍ وَمَسْئُولٌ عَنْ رَعِيَّتِهِ .',
              '(٤٦) عن أبي هريرة رضي الله عنه قال : قال رسول الله صلى الله عليه وسلم : مَنْ أَطَاعَنِي فَقَدْ أَطَاعَ اللَّهَ، وَمَنْ عَصَانِي فَقَدْ عَصَى اللَّهَ وَمَنْ يُطِعِ الْأَمِيرَ فَقَدْ أَطَاعَنِي وَمَنْ يَعْصِ الْأَمِيرَ فَقَدْ عَصَانِي .'
            ],
            translationEn: '(23) Whoever does not show mercy to people, Allah will not show mercy to him. (24) "Help your brother whether he is an oppressor or oppressed." A man said, "I help him if he is oppressed, but how do I help him if he is an oppressor?" He said, "By preventing him from oppressing; that is your help to him." (25) No servant conceals the faults of another servant in this world except that Allah will conceal his faults on the Day of Resurrection. (26) I asked the Prophet: "Which deed is most beloved to Allah?" He said, "Prayer at its proper time." I said, "Then what?" He said, "Dutifulness to parents." I said, "Then what?" He said, "Jihad in the cause of Allah." (27) He is not one of us who does not show mercy to our young and does not recognize the honor of our elders. (28) A Bedouin asked the Prophet, "When is the Hour?" He replied, "What have you prepared for it?" He said, "The love of Allah and His Messenger." He said, "You will be with those whom you love." (29) Beware, the commodity of Allah is expensive; beware, the commodity of Allah is Paradise. (30) Allah has one hundred mercies; He sent down one mercy among His creation by which they show mercy to one another, and kept ninety-nine for the Day of Resurrection. (31) By Him in whose hand is my soul, if you did not commit sins, Allah would replace you with a people who commit sins, ask Allah for forgiveness, and He would forgive them. (32) If you did not commit sins, Allah would create a creation that commits sins and asks for forgiveness, so He would forgive them. (33) Allah commanded me to recite to you "Lam yakunil-ladhina kafaru". Ubayy asked, "Did He mention my name?" The Prophet said, "Yes." Ubayy wept. (34) The world is a prison for the believer and Paradise for the disbeliever. (35) The world is cursed, and everything in it is cursed, except the remembrance of Allah, a scholar, and a learner. (36) Every nation has a trial, and the trial of my nation is wealth. (37) The poor will enter Paradise five hundred years before the rich. (38) Are you not listening? Simplicity in living is part of faith. (39) A man asked the Prophet, "Which act in Islam is the best?" He said, "To feed people and to greet those you know and those you do not know." (40) Charity does not decrease wealth; Allah only increases a servant in honor when he pardons; and no one humbles himself for Allah except that Allah raises him. (41) The Prophet found a date on the road and said, "If I did not fear that it was from charity, I would have eaten it." (42) Whoever has an atom\'s weight of arrogance in his heart will not enter Paradise. A man said, "A man likes his clothes and shoes to look good." He said, "Allah is beautiful and loves beauty." (43) A believer reaches by his good character the rank of one who fasts and prays at night. (44) Allah is gentle and loves gentleness in all matters. (45) All of you are shepherds and each of you is responsible for his flock. The leader is a shepherd... the man over his family... the woman over her husband\'s house... the servant over his master\'s wealth... (46) Whoever obeys me obeys Allah, and whoever disobeys me disobeys Allah. Whoever obeys the commander obeys me, and whoever disobeys the commander disobeys me.',
            translationBn: '(২৩) যে মানুষের প্রতি দয়া করে না, আল্লাহ তার প্রতি দয়া করবেন না। (২৪) "তোমার ভাইকে সাহায্য করো, সে জালিম হোক বা মজলুম।" এক ব্যক্তি বলল, "সে মজলুম হলে সাহায্য করব, কিন্তু জালিম হলে কীভাবে সাহায্য করব?" তিনি বললেন, "তাকে জুলুম করা থেকে বিরত রাখবে; এটাই তাকে সাহায্য করা।" (২৫) কোনো বান্দা দুনিয়াতে অন্যের দোষ গোপন করলে আল্লাহ কেয়ামতের দিন তার দোষ গোপন রাখবেন। (২৬) আমি নবীকে জিজ্ঞেস করলাম: "আল্লাহর কাছে সবচেয়ে প্রিয় আমল কোনটি?" তিনি বললেন, "সময়মতো সালাত আদায় করা।" আমি বললাম, "তারপর কোনটি?" তিনি বললেন, "পিতামাতার সাথে সদ্ব্যবহার।" আমি বললাম, "তারপর কোনটি?" তিনি বললেন, "আল্লাহর পথে জিহাদ।" (২৭) যে আমাদের ছোটদের স্নেহ করে না এবং বড়দের সম্মান দেয় না, সে আমাদের দলভুক্ত নয়। (২৮) এক বেদুইন জিজ্ঞেস করল, "কেয়ামত কবে?" তিনি বললেন, "তুমি এর জন্য কী প্রস্তুত করেছ?" সে বলল, "আল্লাহ ও তাঁর রাসূলের ভালোবাসা।" তিনি বললেন, "তুমি তার সাথেই থাকবে যাকে তুমি ভালোবাসো।" (২৯) সাবধান! আল্লাহর পণ্য অত্যন্ত দামি; সাবধান! আল্লাহর পণ্য হলো জান্নাত। (৩০) আল্লাহর একশত রহমত রয়েছে; তিনি এর একটি পৃথিবীতে পাঠিয়েছেন, যার মাধ্যমে সৃষ্টিজীব পরস্পরকে দয়া করে, আর নিরানব্বইটি কেয়ামতের জন্য রেখে দিয়েছেন। (৩১) যাঁর হাতে আমার প্রাণ তাঁর কসম, যদি তোমরা পাপ না করতে, তবে আল্লাহ তোমাদের সরিয়ে এমন এক সম্প্রদায় আনতেন যারা পাপ করত এবং আল্লাহর কাছে ক্ষমা চাইত, আর তিনি তাদের ক্ষমা করে দিতেন। (৩২) যদি তোমরা পাপ না করতে, তবে আল্লাহ এমন এক সৃষ্টি তৈরি করতেন যারা পাপ করত এবং ক্ষমা চাইত, আর তিনি তাদের ক্ষমা করতেন। (৩৩) আল্লাহ আমাকে নির্দেশ দিয়েছেন তোমাকে "লাম ইয়াকুনিল্লাযিনা কাফারু" পড়ে শোনাতে। উবাই জিজ্ঞেস করলেন, "তিনি কি আমার নাম নিয়েছেন?" নবী বললেন, "হ্যাঁ।" উবাই কেঁদে ফেললেন। (৩৪) দুনিয়া মুমিনের জন্য কারাগার এবং কাফেরের জন্য জান্নাত। (৩৫) দুনিয়া অভিশপ্ত এবং এর ভেতরের সবকিছুই অভিশপ্ত, তবে আল্লাহর জিকির, আলেম ও শিক্ষার্থী ব্যতীত। (৩৬) প্রত্যেক উম্মতের জন্য একটি পরীক্ষা রয়েছে, আর আমার উম্মতের পরীক্ষা হলো সম্পদ। (৩৭) গরিবরা ধনীদের পাঁচশ বছর আগে জান্নাতে প্রবেশ করবে। (৩৮) তোমরা কি শুনছ না? সহজ-সরল জীবনযাপন ঈমানের অঙ্গ। (৩৯) এক ব্যক্তি জিজ্ঞেস করল, "ইসলামে সবচেয়ে ভালো কাজ কোনটি?" তিনি বললেন, "খাবার খাওয়ানো এবং পরিচিত-অপরিচিত সবাইকে সালাম দেওয়া।" (৪০) দান সম্পদ কমায় না; ক্ষমা করার মাধ্যমে আল্লাহ কেবল সম্মানই বৃদ্ধি করেন; আর কেউ আল্লাহর জন্য বিনয়ী হলে আল্লাহ তাকে মর্যাদায় উন্নীত করেন। (৪১) নবী রাস্তায় একটি খেজুর পেয়ে বললেন, "যদি ভয় না হতো যে এটি সদকার, তবে আমি এটি খেয়ে ফেলতাম।" (৪২) যার অন্তরে কণা পরিমাণ অহংকার থাকবে সে জান্নাতে প্রবেশ করবে না। এক ব্যক্তি বলল, "মানুষ তো চায় তার পোশাক ও জুতো সুন্দর হোক।" তিনি বললেন, "আল্লাহ সুন্দর এবং তিনি সৌন্দর্য পছন্দ করেন।" (৪৩) মুমিন তার উত্তম চরিত্রের মাধ্যমে রাতে ইবাদতকারী ও দিনে রোজাদারের মর্যাদা লাভ করে। (৪৪) আল্লাহ কোমল এবং তিনি সব কাজে কোমলতা পছন্দ করেন। (৪৫) তোমরা সবাই দায়িত্বশীল এবং সবাইকে তার অধীনস্থদের সম্পর্কে জবাবদিহি করতে হবে। নেতা দায়িত্বশীল... স্বামী তার পরিবারের ওপর... স্ত্রী তার স্বামীর ঘরের ওপর... ভৃত্য তার মনিবের সম্পদের ওপর... (৪৬) যে আমার আনুগত্য করে সে আল্লাহর আনুগত্য করে, আর যে আমার অবাধ্য হয় সে আল্লাহর অবাধ্য হয়। যে আমিরের আনুগত্য করে সে আমার আনুগত্য করে, আর যে আমিরের অবাধ্য হয় সে আমার অবাধ্য হয়।'
          }
        ]
      }
    },
    {
      id: '5',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Part 3',
      titleAr: 'المفردات: القسم الثالث',
      titleBn: 'শব্দভাণ্ডার: পর্ব ৩',
      payload: {
        words: [
          { id: 45, ar: 'الْعِيَادَةُ (ن)', romanized: 'al-ʿiyādah', en: 'To visit the sick', bn: 'রোগীর ইয়াদাত করা, খোঁজ খবর নেওয়া', emoji: '🏥' },
          { id: 46, ar: 'الظُّفْرُ', romanized: 'aẓ-ẓufr', en: 'Nail', bn: 'নখ', emoji: '💅' },
          { id: 47, ar: 'لَنْ يَلِجَ (الْوُلُوجُ، ض)', romanized: 'lan yalija', en: 'Will not enter', bn: 'প্রবেশ করা', emoji: '🚪' },
          { id: 48, ar: 'دَرَنٌ', romanized: 'daran', en: 'Dirt', bn: 'ময়লা', emoji: '🦠' },
          { id: 49, ar: 'خَطِيئَةٌ ج خَطَايَا', romanized: 'khaṭīʾah pl. khaṭāyā', en: 'Sins', bn: 'পাপসমূহ', emoji: '❌' },
          { id: 50, ar: 'كَأَنَّمَا', romanized: 'kaʾannamā', en: 'As if', bn: 'যেন', emoji: '🤷‍♂️' }
        ]
      }
    },
    {
      id: '6',
      type: 'paragraph',
      titleEn: 'Reading: Excerpts from the Prophetic Hadith (Part 3)',
      titleAr: 'القراءة: مِنْ مِشْكَاةِ النُّبُوَّةِ (٣)',
      titleBn: 'পাঠ: নবুওয়তের কুলুঙ্গি থেকে (৩)',
      payload: {
        paragraphs: [
          {
            titleEn: 'Hadiths 47 to 67',
            titleBn: 'হাদিস ৪৭ থেকে ৬৭',
            lines: [
              '(٤٧) عن عمر بن الخطاب رضي الله عنه قال : قال رسول الله صلى الله عليه وسلم : لَا تَلْبَسُوا الْحَرِيرَ، فَإِنَّ مَنْ لَبِسَهُ فِي الدُّنْيَا لَمْ يَلْبَسْهُ فِي الْآخِرَةِ .',
              '(٤٨) عن عائشة رضي الله عنها قالت : قال لي رسول الله صلى الله عليه وسلم : هَذَا جِبْرِيلُ يَقْرَأُ عَلَيْكِ السَّلَامَ، قَالَتْ : قُلْتُ : وَعَلَيْهِ السَّلَامُ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ .',
              '(٤٩) عن أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال : يُسَلِّمُ الرَّاكِبُ عَلَى الْمَاشِي، وَالْمَاشِي عَلَى الْقَاعِدِ، وَالْقَلِيلُ عَلَى الْكَثِيرِ .',
              '(٥٠) عن كَلَدَةَ بْنِ الْحَنْبَلِ رضي الله عنه قال : أتيت النبي صلى الله عليه وسلم فدخلت عليه و لم أسلم، فقال النبي صلى الله عليه وسلم : ارْجِعْ فَقُلْ : السَّلَامُ عَلَيْكُمْ أَ أَدْخُلُ ؟',
              '(٥١) عن أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال : إِنَّ اللَّهَ عَزَّ وَجَلَّ يَقُولُ يَوْمَ الْقِيَامَةِ : يَا ابْنَ آدَمَ ! مَرِضْتُ فَلَمْ تَعُدْنِي ! قَالَ : يَا رَبِّ ! كَيْفَ أَعُودُكَ وَأَنْتَ رَبُّ الْعَالَمِينَ ! قَالَ : أَمَا عَلِمْتَ أَنَّ عَبْدِي فُلَانًا مَرِضَ فَلَمْ تَعُدْهُ ؟ أَمَا عَلِمْتَ أَنَّكَ لَوْ عُدْتَهُ لَوَجَدْتَنِي عِنْدَهُ ؟ يَا ابْنَ آدَمَ ! اسْتَطْعَمْتُكَ فَلَمْ تُطْعِمْنِي ! قَالَ : يَا رَبِّ ! كَيْفَ أَطْعَمَكَ وَأَنْتَ رَبُّ الْعَالَمِينَ ؟ قَالَ : أَمَا عَلِمْتَ أَنَّهُ اسْتَطْعَمَكَ عَبْدِي فُلَانٌ فَلَمْ تُطْعِمْهُ، أَمَا عَلِمْتَ أَنَّكَ لَوْ أَطْعَمْتَهُ لَوَجَدْتَ ذَلِكَ عِنْدِي ؟ يَا ابْنَ آدَمَ ! اسْتَسْقَيْتُكَ فَلَمْ تَسْقِنِي ! قَالَ : يَا رَبِّ ! كَيْفَ أَسْقِيكَ وَأَنْتَ رَبُّ الْعَالَمِينَ ! قَالَ : اسْتَسْقَاكَ عَبْدِي فُلَانٌ فَلَمْ تَسْقِهِ ! أَمَا عَلِمْتَ أَنَّكَ لَوْ سَقَيْتَهُ لَوَجَدْتَ ذَلِكَ عِنْدِي ؟',
              '(٥٢) عَنْ أَنَسٍ رَضِيَ اللّٰهُ عَنْهُ قَالَ : كَانَ غُلَامٌ يَهُودِيٌّ يَخْدُمُ النَّبِيَّ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ فَمَرِضَ، فَأَتَاهُ النَّبِيُّ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ يَعُودُهُ، فَقَعَدَ عِنْدَ رَأْسِهِ فَقَالَ لَهُ : أَسْلِمْ . فَنَظَرَ إِلَى أَبِيهِ وَ هُوَ عِنْدَهُ، فَقَالَ : أَطِعْ أَبَا الْقَاسِمِ، فَأَسْلَمَ، فَخَرَجَ النَّبِيُّ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ وَ هُوَ يَقُولُ : الْحَمْدُ لِلّٰهِ الَّذِي أَنْقَذَهُ مِنَ النَّارِ .',
              '(٥٣) عَنِ ابْنِ عُمَرَ رَضِيَ اللّٰهُ عَنْهُمَا أَنَّ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ عَادَ سَعْدَ بْنَ عُبَادَةَ، وَ مَعَهُ عَبْدُ الرَّحْمَنِ بْنُ عَوْفٍ وَ سَعْدُ بْنُ أَبِي وَقَّاصٍ وَ عَبْدُ اللّٰهِ بْنُ مَسْعُودٍ رَضِيَ اللّٰهُ عَنْهُمْ . فَبَكَى رَسُولُ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ، فَلَمَّا رَأَى الْقَوْمُ بُكَاءَ رَسُولِ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ بَكَوْا، فَقَالَ : أَلَا تَسْمَعُونَ ؟ إِنَّ اللّٰهَ لَا يُعَذِّبُ بِدَمْعِ الْعَيْنِ، وَ لَا بِحُزْنِ الْقَلْبِ وَ لَكِنْ يُعَذِّبُ بِهَذَا أَوْ يَرْحَمُ، وَ أَشَارَ إِلَى لِسَانِهِ .',
              '(٥٤) عَنْ أُسَامَةَ بْنِ زَيْدٍ رَضِيَ اللّٰهُ عَنْهُمَا أَنَّ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ بَكَى عَلَى ابْنِ ابْنَتِهِ وَ هُوَ فِي الْمَوْتِ، فَقَالَ لَهُ سَعْدٌ : مَا هَذَا يَا رَسُولَ اللّٰهِ ؟ قَالَ : هَذِهِ رَحْمَةٌ جَعَلَهَا اللّٰهُ فِي قُلُوبِ عِبَادِهِ، وَ إِنَّمَا يَرْحَمُ اللّٰهُ مِنْ عِبَادِهِ الرُّحَمَاءَ .',
              '(٥٥) عَنْ أَبِي أُمَامَةَ رَضِيَ اللّٰهُ عَنْهُ قَالَ : سَمِعْتُ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ يَقُولُ : اقْرَؤُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ .',
              '(٥٦) عَنْ عُثْمَانَ بْنِ عَفَّانَ رَضِيَ اللّٰهُ عَنْهُ قَالَ : قَالَ رَسُولُ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ : خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَ عَلَّمَهُ .',
              '(٥٧) عَنْ عُثْمَانَ بْنِ عَفَّانَ رَضِيَ اللّٰهُ عَنْهُ قَالَ : قَالَ رَسُولُ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ : مَنْ تَوَضَّأَ فَأَحْسَنَ الْوُضُوءَ خَرَجَتْ خَطَايَاهُ مِنْ جَسَدِهِ حَتَّى تَخْرُجَ مِنْ تَحْتِ أَظْفَارِهِ .',
              '(٥٨) عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ رَضِيَ اللّٰهُ عَنْهُ أَنَّ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ قَالَ : إِذَا سَمِعْتُمُ النِّدَاءَ فَقُولُوا كَمَا يَقُولُ الْمُؤَذِّنُ .',
              '(٥٩) عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللّٰهُ عَنْهُ قَالَ : سَمِعْتُ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ يَقُولُ : أَ رَأَيْتُمْ لَوْ أَنَّ نَهْرًا بِبَابِ أَحَدِكُمْ يَغْتَسِلُ مِنْهُ كُلَّ يَوْمٍ خَمْسَ مَرَّاتٍ، هَلْ يَبْقَى مِنْ دَرَنِهِ شَيْءٌ ؟ قَالُوا : لَا يَبْقَى مِنْ دَرَنِهِ شَيْءٌ، قَالَ : فَذَلِكَ مَثَلُ الصَّلَوَاتِ الْخَمْسِ يَمْحُو اللّٰهُ بِهِنَّ الْخَطَايَا .',
              '(٦٠) عَنْ عُمَارَةَ رَضِيَ اللّٰهُ عَنْهُ قَالَ : سَمِعْتُ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ يَقُولُ : لَنْ يَلِجَ النَّارَ أَحَدٌ صَلَّى قَبْلَ طُلُوعِ الشَّمْسِ وَ قَبْلَ غُرُوبِهَا .',
              '(٦١) عَنْ بُرَيْدَةَ رَضِيَ اللّٰهُ عَنْهُ قَالَ : قَالَ رَسُولُ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ : مَنْ تَرَكَ صَلَاةَ الْعَصْرِ فَقَدْ حَبِطَ عَمَلُهُ .',
              '(٦٢) عَنْ بُرَيْدَةَ رَضِيَ اللّٰهُ عَنْهُ أَنَّ النَّبِيَّ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ قَالَ : بَشِّرُوا الْمَشَّائِينَ فِي الظُّلَمِ إِلَى الْمَسَاجِدِ بِالنُّورِ التَّامِّ يَوْمَ الْقِيَامَةِ .',
              '(٦٣) عَنِ ابْنِ عُمَرَ رَضِيَ اللّٰهُ عَنْهُمَا أَنَّ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ قَالَ : صَلَاةُ الْجَمَاعَةِ أَفْضَلُ مِنْ صَلَاةِ الْفَذِّ بِسَبْعٍ وَ عِشْرِينَ دَرَجَةً .',
              '(٦٤) عَنْ عُثْمَانَ بْنِ عَفَّانَ رَضِيَ اللّٰهُ عَنْهُ قَالَ : سَمِعْتُ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ يَقُولُ : مَنْ صَلَّى الْعِشَاءَ فِي جَمَاعَةٍ فَكَأَنَّمَا قَامَ نِصْفَ اللَّيْلِ، وَ مَنْ صَلَّى الصُّبْحَ فِي جَمَاعَةٍ فَكَأَنَّمَا صَلَّى اللَّيْلَ كُلَّهُ .',
              '(٦٥) عَنْ زَيْدِ بْنِ ثَابِتٍ رَضِيَ اللّٰهُ عَنْهُ أَنَّ النَّبِيَّ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ قَالَ : صَلُّوا أَيُّهَا النَّاسُ ! فِي بُيُوتِكُمْ، فَإِنَّ أَفْضَلَ الصَّلَاةِ صَلَاةُ الْمَرْءِ فِي بَيْتِهِ إِلَّا الْمَكْتُوبَةَ .',
              '(٦٦) عَنْ عَبْدِ اللّٰهِ بْنِ سَلَامٍ رَضِيَ اللّٰهُ عَنْهُ أَنَّ النَّبِيَّ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ قَالَ : أَيُّهَا النَّاسُ ! أَفْشُوا السَّلَامَ وَ أَطْعِمُوا الطَّعَامَ وَصِلُوا بِاللَّيْلِ وَ النَّاسُ نِيَامٌ تَدْخُلُوا الْجَنَّةَ بِسَلَامٍ .',
              '(٦٧) عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللّٰهُ عَنْهُ قَالَ : قَالَ رَسُولُ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ : أَفْضَلُ الصِّيَامِ بَعْدَ رَمَضَانَ شَهْرُ اللّٰهِ الْمُحَرَّمُ، وَ أَفْضَلُ الصَّلَاةِ بَعْدَ الْفَرِيضَةِ صَلَاةُ اللَّيْلِ .'
            ],
            translationEn: '(47) Do not wear silk, for whoever wears it in this world will not wear it in the Hereafter. (48) The Prophet told Aisha, "Here is Gabriel conveying greetings to you." She replied, "And upon him be peace, Allah\'s mercy, and His blessings." (49) The rider should greet the pedestrian, the pedestrian should greet the one sitting, and the smaller group should greet the larger group. (50) A man entered without greeting, so the Prophet said, "Go back and say: Peace be upon you, may I enter?" (51) Allah will say on the Day of Judgment: "O son of Adam, I was sick and you did not visit Me." He will say, "O Lord, how could I visit You when You are the Lord of the worlds?" Allah will say, "Did you not know that My servant so-and-so was sick? If you had visited him, you would have found Me with him. O son of Adam, I asked you for food and you did not feed Me..." He will explain that feeding the hungry is feeding Him. (52) A Jewish boy who served the Prophet became sick. The Prophet visited him and said, "Embrace Islam." The boy looked at his father, who said, "Obey Abu Al-Qasim." The boy embraced Islam. The Prophet said, "Praise be to Allah who saved him from the Fire." (53) The Prophet visited a sick companion and wept. He said, "Allah does not punish for the tears of the eye or the grief of the heart, but He punishes or shows mercy because of this," pointing to his tongue. (54) The Prophet wept when holding his dying grandson. He said, "This is mercy that Allah has placed in the hearts of His servants, and Allah only shows mercy to His merciful servants." (55) Read the Quran, for it will come as an intercessor for its companions on the Day of Resurrection. (56) The best of you are those who learn the Quran and teach it. (57) Whoever performs ablution well, his sins exit his body, even from under his nails. (58) When you hear the call to prayer, repeat what the caller says. (59) If a river were at your door and you bathed in it five times a day, would any dirt remain? That is like the five prayers by which Allah wipes away sins. (60) None will enter the Fire who prays before the sun rises and before it sets. (61) Whoever abandons the Asr prayer, his deeds are ruined. (62) Give glad tidings to those who walk to the mosques in the dark of perfect light on the Day of Judgment. (63) Congregational prayer is twenty-seven degrees better than individual prayer. (64) Whoever prays Isha in congregation, it is as if he prayed half the night; and whoever prays Fajr in congregation, it is as if he prayed the whole night. (65) Pray in your homes, for the best prayer of a man is in his home, except the obligatory ones. (66) O people, spread greetings, feed the hungry, and pray at night while people sleep, you will enter Paradise in peace. (67) The best fasting after Ramadan is Allah\'s month of Muharram, and the best prayer after the obligatory ones is the night prayer.',
            translationBn: '(৪৭) তোমরা রেশম পরো না, কারণ দুনিয়াতে যে তা পরবে আখেরাতে সে তা পরতে পারবে না। (৪৮) নবী আয়েশাকে বললেন, "এই জিবরাঈল তোমাকে সালাম দিচ্ছেন।" তিনি বললেন, "তাঁর ওপরও শান্তি, আল্লাহর রহমত এবং বরকত বর্ষিত হোক।" (৪৯) আরোহী পথচারীকে, পথচারী উপবিষ্টকে এবং ছোট দল বড় দলকে সালাম দেবে। (৫০) এক ব্যক্তি সালাম না দিয়েই প্রবেশ করল, নবী বললেন, "ফিরে যাও এবং বলো: আসসালামু আলাইকুম, আমি কি ভেতরে আসতে পারি?" (৫১) কেয়ামতের দিন আল্লাহ বলবেন: "হে আদম সন্তান, আমি অসুস্থ ছিলাম, তুমি আমাকে দেখতে আসোনি।" সে বলবে, "হে রব, আপনি তো বিশ্বজগতের প্রতিপালক, আমি কীভাবে আপনাকে দেখতে যাব?" আল্লাহ বলবেন, "তুমি কি জানতে না আমার অমুক বান্দা অসুস্থ ছিল? তুমি যদি তাকে দেখতে যেতে, তবে সেখানে আমাকে পেতে। হে আদম সন্তান, আমি তোমার কাছে খাবার চেয়েছিলাম..." আল্লাহ বোঝাবেন যে ক্ষুধার্তকে খাওয়ানোই তাঁকে খাওয়ানো। (৫২) নবীর সেবক এক ইহুদি বালক অসুস্থ হলো। নবী তাকে দেখতে গেলেন এবং বললেন, "ইসলাম গ্রহণ করো।" ছেলেটি তার বাবার দিকে তাকালে বাবা বলল, "আবুল কাসিমের আনুগত্য করো।" ছেলেটি ইসলাম গ্রহণ করল। নবী বললেন, "সমস্ত প্রশংসা আল্লাহর যিনি তাকে আগুন থেকে বাঁচিয়েছেন।" (৫৩) নবী একজন অসুস্থ সাহাবিকে দেখতে গিয়ে কাঁদলেন। তিনি বললেন, "আল্লাহ চোখের পানি বা হৃদয়ের দুঃখের জন্য শাস্তি দেন না, বরং তিনি শাস্তি দেন বা রহমত করেন এর কারণে," এই বলে তিনি নিজের জিহ্বার দিকে ইশারা করলেন। (৫৪) নবী তাঁর মৃতপ্রায় নাতিকে কোলে নিয়ে কাঁদলেন। তিনি বললেন, "এটি হলো দয়া যা আল্লাহ তাঁর বান্দাদের অন্তরে রেখেছেন, আর আল্লাহ কেবল তাঁর দয়ালু বান্দাদের প্রতিই দয়া করেন।" (৫৫) কোরআন পড়ো, কারণ কেয়ামতের দিন এটি তার পাঠকদের জন্য সুপারিশকারী হিসেবে আসবে। (৫৬) তোমাদের মধ্যে সেই সর্বোত্তম যে কোরআন শেখে এবং অন্যকে শেখায়। (৫৭) যে ভালোভাবে ওযু করে, তার শরীর থেকে পাপগুলো বের হয়ে যায়, এমনকি তার নখের নিচ থেকেও। (৫৮) যখন আজান শুনবে, মুয়াজ্জিন যা বলে তোমরাও তাই বলবে। (৫৯) তোমাদের কারো দরজায় যদি একটি নদী থাকে এবং সে তাতে দিনে পাঁচবার গোসল করে, তবে কি তার গায়ে কোনো ময়লা থাকবে? পাঁচ ওয়াক্ত সালাতের দৃষ্টান্তও এমনই, যার মাধ্যমে আল্লাহ পাপ মোচন করেন। (৬০) যে ব্যক্তি সূর্যোদয়ের আগে এবং সূর্যাস্তের আগে সালাত আদায় করে সে কখনোই জাহান্নামে যাবে না। (৬১) যে ব্যক্তি আসরের সালাত ছেড়ে দেয়, তার আমল বরবাদ হয়ে যায়। (৬২) যারা অন্ধকারে হেঁটে মসজিদে যায়, তাদের কেয়ামতের দিন পরিপূর্ণ আলোর সুসংবাদ দাও। (৬৩) জামাতে সালাত আদায় করা একাকী সালাত আদায় করার চেয়ে সাতাশ গুণ বেশি মর্যাদাপূর্ণ। (৬৪) যে ব্যক্তি এশার সালাত জামাতে আদায় করল, সে যেন অর্ধেক রাত ইবাদত করল; আর যে ফজরের সালাত জামাতে আদায় করল, সে যেন সারা রাত ইবাদত করল। (৬৫) তোমাদের ঘরে সালাত আদায় করো, কারণ ফরজ সালাত ছাড়া মানুষের সর্বোত্তম সালাত হলো তার ঘরে আদায় করা সালাত। (৬৬) হে মানুষ, সালামের প্রসার করো, খাবার খাওয়াও এবং মানুষ যখন ঘুমিয়ে থাকে তখন রাতে সালাত আদায় করো, তবে শান্তিতে জান্নাতে প্রবেশ করতে পারবে। (৬৭) রমজানের পর সর্বোত্তম রোজা হলো আল্লাহর মাস মুহাররমের রোজা, এবং ফরজ সালাতের পর সর্বোত্তম সালাত হলো রাতের সালাত (তাহাজ্জুদ)।'
          }
        ]
      }
    },
    {
      id: '7',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Part 4',
      titleAr: 'المفردات: القسم الرابع',
      titleBn: 'শব্দভাণ্ডার: পর্ব ৪',
      payload: {
        words: [
          { id: 51, ar: 'حَجٌّ مَبْرُورٌ', romanized: 'ḥajj mabrūr', en: 'Accepted Hajj', bn: 'মকবুল হজ্ব', emoji: '🕋' },
          { id: 52, ar: 'ثُلُثٌ', romanized: 'thuluth', en: 'One third', bn: 'এক তৃতীয়াংশ', emoji: '⅓' },
          { id: 53, ar: 'سُدُسٌ', romanized: 'sudus', en: 'One sixth', bn: 'এক ষষ্ঠাংশ', emoji: '⅙' },
          { id: 54, ar: 'نَضَحَ الْمَاءَ', romanized: 'naḍaḥa al-māʾ', en: 'Sprinkled water', bn: 'পানি ছিটিয়ে দিল', emoji: '💦' },
          { id: 55, ar: 'دَيْنٌ', romanized: 'dayn', en: 'Debt', bn: 'ঋণ', emoji: '💸' },
          { id: 56, ar: 'دُخَانٌ', romanized: 'dukhān', en: 'Smoke', bn: 'ধোঁয়া', emoji: '💨' },
          { id: 57, ar: 'ثَمَرَةُ الْفُؤَادِ', romanized: 'thamarah al-fuʾād', en: 'Child (Fruit of the heart)', bn: 'কলিজার টুকরা সন্তান', emoji: '👶' },
          { id: 58, ar: 'اِسْتَرْجَعَ', romanized: 'istarjaʿa', en: 'Said "Inna lillahi wa inna ilayhi raji\'un"', bn: 'সে "ইন্না লিল্লাহি" পড়লো', emoji: '🤲' },
          { id: 59, ar: 'فِي نَفْسِهِ', romanized: 'fī nafsihi', en: 'In himself', bn: 'তার মনে', emoji: '👤' },
          { id: 60, ar: 'مَلَأٌ', romanized: 'malaʾ', en: 'Assembly / Group', bn: 'দল, সভা', emoji: '👥' },
          { id: 61, ar: 'مَجِيدٌ', romanized: 'majīd', en: 'Glorious', bn: 'গৌরবের অধিকারী', emoji: '🌟' }
        ]
      }
    },
    {
      id: '8',
      type: 'paragraph',
      titleEn: 'Reading: Excerpts from the Prophetic Hadith (Part 4)',
      titleAr: 'القراءة: مِنْ مِشْكَاةِ النُّبُوَّةِ (٤)',
      titleBn: 'পাঠ: নবুওয়তের কুলুঙ্গি থেকে (٤)',
      payload: {
        paragraphs: [
          {
            titleEn: 'Hadiths 68 to 84',
            titleBn: 'হাদিস ৬৮ থেকে ৮৪',
            lines: [
              '(٦٨) عَنْ أَبِي عَبْدِ اللّٰهِ بْنِ عَمْرِو بْنِ الْعَاصِ رَضِيَ اللّٰهُ عَنْهُمَا أَنَّ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ قَالَ : أَحَبُّ الصَّلَاةِ إِلَى اللّٰهِ صَلَاةُ دَاوُدَ، وَ أَحَبُّ الصِّيَامِ إِلَى اللّٰهِ صِيَامُ دَاوُدَ، كَانَ يَنَامُ نِصْفَ اللَّيْلِ وَ يَقُومُ ثُلُثَهُ وَ يَنَامُ سُدُسَهُ، وَ يَصُومُ يَوْمًا وَ يُفْطِرُ يَوْمًا .',
              '(٦٩) عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللّٰهُ عَنْهُ قَالَ : قَالَ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ : رَحِمَ اللّٰهُ رَجُلًا قَامَ مِنَ اللَّيْلِ فَصَلَّى وَ أَيْقَظَ امْرَأَتَهُ، فَإِنْ أَبَتْ نَضَحَ فِي وَجْهِهَا الْمَاءَ، رَحِمَ اللّٰهُ امْرَأَةً قَامَتْ مِنَ اللَّيْلِ فَصَلَّتْ وَ أَيْقَظَتْ زَوْجَهَا، فَإِنْ أَبَى نَضَحَتْ فِي وَجْهِهِ الْمَاءَ .',
              '(٧٠) عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللّٰهُ عَنْهُ قَالَ : قَالَ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ : كُلُّ عَمَلِ ابْنِ آدَمَ لَهُ إِلَّا الصَّوْمَ، فَإِنَّهُ لِي وَ أَنَا أَجْزِي بِهِ .',
              '(٧١) عَنْ أَنَسٍ رَضِيَ اللّٰهُ عَنْهُ قَالَ : قَالَ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ : تَسَحَّرُوا فَإِنَّ فِي السَّحُورِ بَرَكَةً .',
              '(٧٢) عَنْ عَائِشَةَ رَضِيَ اللّٰهُ عَنْهَا قَالَتْ : يَا رَسُولَ اللّٰهِ ! نَرَى الْجِهَادَ أَفْضَلَ الْعَمَلِ، أَفَلَا نُجَاهِدُ ؟ فَقَالَ : لَكِنْ أَفْضَلُ الْجِهَادِ حَجٌّ مَبْرُورٌ .',
              '(٧٣) عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللّٰهُ عَنْهُ أَنَّ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ قَالَ : إِنَّ فِي الْجَنَّةِ مِائَةَ دَرَجَةٍ أَعَدَّهَا اللّٰهُ لِلْمُجَاهِدِينَ فِي سَبِيلِ اللّٰهِ، مَا بَيْنَ الدَّرَجَتَيْنِ كَمَا بَيْنَ السَّمَاءِ وَ الْأَرْضِ .',
              '(٧٤) عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللّٰهُ عَنْهُ قَالَ : قَالَ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ : لَا يَلِجُ النَّارَ رَجُلٌ بَكَى مِنْ خَشْيَةِ اللّٰهِ حَتَّى يَعُودَ اللَّبَنُ فِي الضَّرْعِ . وَ لَا يَجْتَمِعُ عَلَى عَبْدٍ غُبَارٌ فِي سَبِيلِ اللّٰهِ وَ دُخَانُ جَهَنَّمَ .',
              '(٧٥) عَنْ عَبْدِ اللّٰهِ بْنِ عَمْرِو بْنِ الْعَاصِ رَضِيَ اللّٰهُ عَنْهُمَا أَنَّ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ قَالَ : يَغْفِرُ اللّٰهُ لِلشَّهِيدِ كُلَّ ذَنْبٍ إِلَّا الدَّيْنَ .',
              '(٧٦) عَنْ أَنَسٍ رَضِيَ اللّٰهُ عَنْهُ أَنَّ النَّبِيَّ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ قَالَ : جَاهِدُوا الْمُشْرِكِينَ بِأَمْوَالِكُمْ وَ أَنْفُسِكُمْ وَ أَلْسِنَتِكُمْ .',
              '(٧٧) عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللّٰهُ عَنْهُ قَالَ : جَاءَ رَجُلٌ إِلَى رَسُولِ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ فَقَالَ : يَا رَسُولَ اللّٰهِ ! أَ رَأَيْتَ إِنْ جَاءَ رَجُلٌ يُرِيدُ أَخْذَ مَالِي، قَالَ : فَلَا تُعْطِهِ مَالَكَ، قَالَ : أَ رَأَيْتَ إِنْ قَاتَلَنِي ؟ قَالَ : قَاتِلْهُ . قَالَ : أَ رَأَيْتَ إِنْ قَتَلَنِي ؟ قَالَ : فَأَنْتَ شَهِيدٌ . قَالَ : أَ رَأَيْتَ إِنْ قَتَلْتُهُ ؟ قَالَ : هُوَ فِي النَّارِ .',
              '(٧٨) عَنْ أَنَسٍ رَضِيَ اللّٰهُ عَنْهُ قَالَ : قَالَ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ : مَنْ خَرَجَ فِي طَلَبِ الْعِلْمِ فَهُوَ فِي سَبِيلِ اللّٰهِ حَتَّى يَرْجِعَ .',
              '(٧٩) عَنْ أَبِي مُوسَى الْأَشْعَرِيِّ رَضِيَ اللّٰهُ عَنْهُ أَنَّ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ قَالَ : إِذَا مَاتَ وَلَدُ الْعَبْدِ قَالَ اللّٰهُ تَعَالَى لِمَلَائِكَتِهِ : قَبَضْتُمْ وَلَدَ عَبْدِي ؟ فَيَقُولُونَ : نَعَمْ، فَيَقُولُ : قَبَضْتُمْ ثَمَرَةَ فُؤَادِهِ ؟ فَيَقُولُونَ : نَعَمْ، فَيَقُولُ : فَمَاذَا قَالَ عَبْدِي ؟ فَيَقُولُونَ : حَمِدَكَ وَ اسْتَرْجَعَ، فَيَقُولُ اللّٰهُ تَعَالَى : ابْنُوا لِعَبْدِي بَيْتًا فِي الْجَنَّةِ وَ سَمُّوهُ بَيْتَ الْحَمْدِ .',
              '(٨٠) عَنْ عَبْدِ اللّٰهِ بْنِ عَمْرِو بْنِ الْعَاصِ رَضِيَ اللّٰهُ عَنْهُمَا أَنَّهُ سَمِعَ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ يَقُولُ : مَنْ صَلَّى عَلَيَّ صَلَاةً صَلَّى اللّٰهُ عَلَيْهِ بِهَا عَشْرًا .',
              '(٨١) عَنْ أَبِي مُحَمَّدٍ كَعْبِ بْنِ عُجْرَةَ رَضِيَ اللّٰهُ عَنْهُ قَالَ : قُولُوا : اللّٰهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَ عَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَ عَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ . اللّٰهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَ عَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَ عَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ .',
              '(٨٢) عَنْ أَبِي ذَرٍّ رَضِيَ اللّٰهُ عَنْهُ قَالَ : قَالَ لِي رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ : أَلَا أُخْبِرُكَ بِأَحَبِّ الْكَلَامِ إِلَى اللّٰهِ ؟ إِنَّ أَحَبَّ الْكَلَامِ إِلَى اللّٰهِ : سُبْحَانَ اللّٰهِ وَ بِحَمْدِهِ .',
              '(٨٣) عَنْ أَبِي مُوسَى الْأَشْعَرِيِّ رَضِيَ اللّٰهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ قَالَ : مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ وَ الَّذِي لَا يَذْكُرُهُ مَثَلُ الْحَيِّ وَ الْمَيِّتِ .',
              '(٨٤) عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللّٰهُ عَنْهُ أَنَّ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ قَالَ : يَقُولُ اللّٰهُ تَعَالَى : أَنَا عِنْدَ ظَنِّ عَبْدِي بِي، وَ أَنَا مَعَهُ إِذَا ذَكَرَنِي، فَإِنْ ذَكَرَنِي فِي نَفْسِهِ ذَكَرْتُهُ فِي نَفْسِي، وَ إِنْ ذَكَرَنِي فِي مَلَأٍ ذَكَرْتُهُ فِي مَلَأٍ خَيْرٍ مِنْهُمْ .'
            ],
            translationEn: '(68) The most beloved prayer to Allah is the prayer of David, and the most beloved fasting is the fasting of David. He would sleep half the night, pray for a third, sleep for a sixth, and he would fast one day and break his fast the next. (69) May Allah have mercy on a man who wakes up at night, prays, and wakes his wife; if she refuses, he sprinkles water on her face. May Allah have mercy on a woman who wakes up at night, prays, and wakes her husband; if he refuses, she sprinkles water on his face. (70) Every deed of the son of Adam is for him except fasting; it is for Me and I will reward for it. (71) Eat Suhoor, for there is blessing in Suhoor. (72) Aisha asked if women should participate in Jihad. The Prophet replied, "The best Jihad for you is an accepted Hajj." (73) In Paradise there are a hundred levels Allah prepared for those who strive in His cause; the distance between two levels is like the distance between the heaven and the earth. (74) A man who weeps out of fear of Allah will not enter the Fire until milk returns to the udder. And the dust in the cause of Allah and the smoke of Hell will never come together on a servant. (75) Allah forgives every sin of a martyr except debt. (76) Strive against the polytheists with your wealth, yourselves, and your tongues. (77) A man asked the Prophet what to do if someone tries to take his wealth. The Prophet said, "Do not give it." He asked, "What if he fights me?" The Prophet said, "Fight him." He asked, "What if he kills me?" The Prophet said, "You are a martyr." He asked, "What if I kill him?" The Prophet said, "He is in the Fire." (78) Whoever goes out seeking knowledge is in the path of Allah until he returns. (79) When a servant\'s child dies, Allah asks His angels, "Did you take the soul of My servant\'s child, the fruit of his heart?" They say, "Yes." He asks, "What did My servant say?" They say, "He praised You and said Inna lillahi wa inna ilayhi raji\'un." Allah says, "Build for him a house in Paradise and call it the House of Praise." (80) Whoever sends blessings upon me once, Allah sends blessings upon him ten times. (81) The companions asked how to send blessings on the Prophet. He taught them to say: "O Allah, send blessings upon Muhammad and the family of Muhammad, as You sent blessings upon Abraham..." (82) The most beloved words to Allah are: "Subhanallahi wa bihamdihi" (Glory and praise be to Allah). (83) The example of one who remembers his Lord and one who does not is like the living and the dead. (84) Allah says: "I am as My servant expects Me to be, and I am with him when he remembers Me. If he remembers Me inwardly, I remember him inwardly; if he remembers Me in a gathering, I remember him in a better gathering."',
            translationBn: '(৬৮) আল্লাহর কাছে সবচেয়ে প্রিয় সালাত হলো দাউদ (আ.)-এর সালাত, এবং সবচেয়ে প্রিয় রোজা হলো দাউদ (আ.)-এর রোজা। তিনি অর্ধেক রাত ঘুমাতেন, এক-তৃতীয়াংশ ইবাদত করতেন, এবং এক-ষষ্ঠাংশ ঘুমাতেন; আর তিনি একদিন রোজা রাখতেন এবং পরদিন রোজা ছাড়তেন। (৬৯) আল্লাহ সেই ব্যক্তির ওপর রহম করুন যে রাতে উঠে সালাত আদায় করে এবং তার স্ত্রীকে জাগায়; স্ত্রী অস্বীকার করলে সে তার মুখে পানি ছিটিয়ে দেয়। আল্লাহ সেই নারীর ওপর রহম করুন যে রাতে উঠে সালাত আদায় করে এবং তার স্বামীকে জাগায়; স্বামী অস্বীকার করলে সে তার মুখে পানি ছিটিয়ে দেয়। (৭০) আদম সন্তানের প্রতিটি আমল তার নিজের জন্য, রোজা ব্যতীত; এটি আমার জন্য এবং আমিই এর প্রতিদান দেব। (৭১) সেহরি খাও, কারণ সেহরিতে বরকত রয়েছে। (৭২) আয়েশা (রা.) জিহাদ সম্পর্কে জিজ্ঞেস করলে নবী বলেন, "তোমাদের জন্য সর্বোত্তম জিহাদ হলো মকবুল হজ্ব।" (৭৩) জান্নাতে একশটি স্তর রয়েছে যা আল্লাহ তাঁর পথে মুজাহিদদের জন্য প্রস্তুত রেখেছেন; দুটি স্তরের মধ্যবর্তী দূরত্ব আসমান ও জমিনের দূরত্বের মতো। (৭৪) আল্লাহর ভয়ে যে ব্যক্তি কাঁদে সে জাহান্নামে যাবে না যতক্ষণ না দুধ আবার স্তনে ফিরে যায়। আর আল্লাহর পথের ধুলা এবং জাহান্নামের ধোঁয়া কোনো বান্দার ওপর একত্র হবে না। (৭৫) ঋণ ব্যতীত শহীদের সব পাপ আল্লাহ ক্ষমা করে দেন। (৭৬) মুশরিকদের বিরুদ্ধে তোমাদের সম্পদ, জীবন ও জবান দিয়ে জিহাদ করো। (৭৭) এক ব্যক্তি জিজ্ঞেস করল কেউ সম্পদ ছিনিয়ে নিতে চাইলে কী করবে। নবী বললেন, "দেবে না।" সে বলল, "যদি সে আমার সাথে লড়াই করে?" নবী বললেন, "তার সাথে লড়াই করো।" সে বলল, "যদি সে আমাকে হত্যা করে?" নবী বললেন, "তুমি শহীদ।" সে বলল, "যদি আমি তাকে হত্যা করি?" নবী বললেন, "সে জাহান্নামী।" (৭৮) যে ব্যক্তি জ্ঞান অন্বেষণের জন্য বের হয় সে ফিরে আসা পর্যন্ত আল্লাহর পথেই থাকে। (৭৯) যখন কোনো বান্দার সন্তান মারা যায়, আল্লাহ ফেরেশতাদের জিজ্ঞেস করেন, "তোমরা কি আমার বান্দার কলিজার টুকরা সন্তানের জান কবজ করেছ?" তারা বলে, "হ্যাঁ।" তিনি জিজ্ঞেস করেন, "আমার বান্দা কী বলেছে?" তারা বলে, "সে আপনার প্রশংসা করেছে এবং ইন্না লিল্লাহ পড়েছে।" আল্লাহ বলেন, "তার জন্য জান্নাতে একটি ঘর বানাও এবং এর নাম রাখো বায়তুল হামদ (প্রশংসার ঘর)।" (৮০) যে আমার ওপর একবার দরুদ পাঠ করে, আল্লাহ তার ওপর দশবার রহমত বর্ষণ করেন। (৮১) সাহাবিরা দরুদ পড়ার নিয়ম জানতে চাইলে নবী তাদের "আল্লাহুম্মা সাল্লি আলা মুহাম্মাদ..." পড়তে শেখালেন। (৮২) আল্লাহর কাছে সবচেয়ে প্রিয় কথা হলো: "সুবহানাল্লাহি ওয়া বিহামদিহি"। (৮৩) যে তার রবের জিকির করে এবং যে জিকির করে না তাদের দৃষ্টান্ত হলো জীবিত ও মৃতের মতো। (৮৪) আল্লাহ বলেন: "আমার বান্দা আমার সম্পর্কে যেমন ধারণা রাখে আমি তেমনই, আর সে যখন আমাকে স্মরণ করে আমি তার সাথে থাকি। সে যদি মনে মনে আমাকে স্মরণ করে আমি তাকে মনে মনে স্মরণ করি; আর যদি সে কোনো মজলিসে আমাকে স্মরণ করে, তবে আমি তাকে এর চেয়ে উত্তম মজলিসে স্মরণ করি।"'
          }
        ]
      }
    },
    {
      id: '9',
      type: 'vocabulary',
      titleEn: 'Vocabulary: Part 5',
      titleAr: 'المفردات: القسم الخامس',
      titleBn: 'শব্দভাণ্ডার: পর্ব ৫',
      payload: {
        words: [
          { id: 62, ar: 'دَلَّ عَلَى شَيْءٍ', romanized: 'dalla ʿalā shayʾ', en: 'Guided to something', bn: 'কোন কিছু দেখিয়ে দিল', emoji: '➡️' },
          { id: 63, ar: 'السَّلَامَةُ (س)', romanized: 'as-salāmah', en: 'To remain safe', bn: 'নিরাপদ থাকা', emoji: '🛡️' },
          { id: 64, ar: 'نَمَّامٌ', romanized: 'nammām', en: 'Talebearer', bn: 'চোগলখোর', emoji: '🗣️' },
          { id: 65, ar: 'حَطَبٌ', romanized: 'ḥaṭab', en: 'Firewood', bn: 'লাকড়ি, জ্বালানী কাঠ', emoji: '🪵' },
          { id: 66, ar: 'سِبَابٌ', romanized: 'sibāb', en: 'Abusing / Insulting', bn: 'গালি দেয়া', emoji: '🤬' },
          { id: 67, ar: 'فُسُوقٌ', romanized: 'fusūq', en: 'Sinfulness', bn: 'পাপাচার', emoji: '😈' },
          { id: 68, ar: 'إِيَّاكُمْ وَ الْحَسَدَ', romanized: 'iyyākum wa al-ḥasad', en: 'Beware of envy', bn: 'তোমরা হিংসা করা থেকে বেঁচে থাকো', emoji: '⚠️' },
          { id: 69, ar: 'الْغِشُّ (ن)', romanized: 'al-ghish', en: 'To deceive', bn: 'ধোঁকা দেয়া', emoji: '🎭' },
          { id: 70, ar: 'الشَّمَاتَةُ', romanized: 'ash-shamātah', en: "Rejoicing at another's misfortune", bn: 'অন্যের বিপদে উল্লাস', emoji: '😂' },
          { id: 71, ar: 'رَوْحٌ', romanized: 'rawḥ', en: 'Mercy / Favor', bn: 'অনুগ্রহ, করুণা', emoji: '✨' },
          { id: 72, ar: 'الِاسْتِعَاذَةُ', romanized: 'al-istiʿādhah', en: 'To seek refuge', bn: 'পানাহ চাওয়া', emoji: '🛡️' },
          { id: 73, ar: 'السَّبُّ (ن)', romanized: 'as-sabb', en: 'To insult / Abuse', bn: 'গালি দেয়া', emoji: '🤬' },
          { id: 74, ar: 'كَانَ يَكْرَهُ', romanized: 'kāna yakrahu', en: 'Used to dislike', bn: 'অপছন্দ করতেন', emoji: '👎' },
          { id: 75, ar: 'أَبْغَضُ', romanized: 'abghaḍ', en: 'Most hateful / disliked', bn: 'ঘৃণ্যতম', emoji: '🤮' }
        ]
      }
    },
    {
      id: '10',
      type: 'paragraph',
      titleEn: 'Reading: Excerpts from the Prophetic Hadith (Part 5)',
      titleAr: 'القراءة: مِنْ مِشْكَاةِ النُّبُوَّةِ (٥)',
      titleBn: 'পাঠ: নবুওয়তের কুলুঙ্গি থেকে (٥)',
      payload: {
        paragraphs: [
          {
            titleEn: 'Hadiths 85 to 110',
            titleBn: 'হাদিস ৮৫ থেকে ১১০',
            lines: [
              '(٨٥) عَنْ جَابِرٍ رَضِيَ اللّٰهُ عَنْهُ قَالَ : سَمِعْتُ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ يَقُولُ : أَفْضَلُ الذِّكْرِ لَا إِلَهَ إِلَّا اللّٰهُ .',
              '(٨٦) عَنْ أَبِي مُوسَى رَضِيَ اللّٰهُ عَنْهُ قَالَ : قَالَ لِي رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ : أَلَا أَدُلُّكَ عَلَى كَنْزٍ مِنْ كُنُوزِ الْجَنَّةِ ؟ فَقُلْتُ : بَلَى يَا رَسُولَ اللّٰهِ ! قَالَ : لَا حَوْلَ وَ لَا قُوَّةَ إِلَّا بِاللّٰهِ .',
              '(٨٧) عَنِ النُّعْمَانِ بْنِ بَشِيرٍ رَضِيَ اللّٰهُ عَنْهُمَا، عَنِ النَّبِيِّ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ قَالَ : الدُّعَاءُ هُوَ الْعِبَادَةُ .',
              '(٨٨) عَنْ أَبِي بَكْرٍ الصِّدِّيقِ رَضِيَ اللّٰهُ عَنْهُ أَنَّهُ قَالَ لِرَسُولِ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ : عَلِّمْنِي دُعَاءً أَدْعُو بِهِ فِي صَلَاتِي، قَالَ : قُلِ اللّٰهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، وَ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَ ارْحَمْنِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ .',
              '(٨٩) عَنْ أَبِي مُوسَى رَضِيَ اللّٰهُ عَنْهُ قَالَ : قُلْتُ يَا رَسُولَ اللّٰهِ ! أَيُّ الْمُسْلِمِينَ أَفْضَلُ ؟ قَالَ : مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَ يَدِهِ .',
              '(٩٠) عَنْ حُذَيْفَةَ رَضِيَ اللّٰهُ عَنْهُ قَالَ : قَالَ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ : لَا يَدْخُلُ الْجَنَّةَ نَمَّامٌ .',
              '(٩١) عَنِ ابْنِ مَسْعُودٍ رَضِيَ اللّٰهُ عَنْهُ قَالَ : قَالَ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ : سِبَابُ الْمُسْلِمِ فُسُوقٌ، وَ قِتَالُهُ كُفْرٌ .',
              '(٩٢) عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللّٰهُ عَنْهُ أَنَّ النَّبِيَّ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ قَالَ : إِيَّاكُمْ وَ الْحَسَدَ، فَإِنَّ الْحَسَدَ يَأْكُلُ الْحَسَنَاتِ كَمَا تَأْكُلُ النَّارُ الْحَطَبَ .',
              '(٩٣) عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللّٰهُ عَنْهُ أَنَّ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ قَالَ : مَنْ حَمَلَ عَلَيْنَا السِّلَاحَ فَلَيْسَ مِنَّا، وَ مَنْ غَشَّنَا فَلَيْسَ مِنَّا .',
              '(٩٤) عَنْ وَائِلَةَ بْنِ الْأَسْقَعِ رَضِيَ اللّٰهُ عَنْهُ قَالَ : قَالَ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ : لَا تُظْهِرِ الشَّمَاتَةَ لِأَخِيكَ فَيَرْحَمَهُ اللّٰهُ وَ يَبْتَلِيَكَ .',
              '(٩٥) عَنْ جَابِرٍ رَضِيَ اللّٰهُ عَنْهُ قَالَ : قَالَ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ : لَا تَأْكُلُوا بِالشِّمَالِ، فَإِنَّ الشَّيْطَانَ يَأْكُلُ وَ يَشْرَبُ بِشِمَالِهِ .',
              '(٩٦) عَنِ ابْنِ عُمَرَ رَضِيَ اللّٰهُ عَنْهُمَا عَنِ النَّبِيِّ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ قَالَ : لَا تَتْرُكُوا النَّارَ فِي بُيُوتِكُمْ حِينَ تَنَامُونَ .',
              '(٩٧) عَنْ أَبِي طَلْحَةَ رَضِيَ اللّٰهُ عَنْهُ أَنَّ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ قَالَ : لَا تَدْخُلُ الْمَلَائِكَةُ بَيْتًا فِيهِ كَلْبٌ وَ لَا صُورَةٌ .',
              '(٩٨) عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللّٰهُ عَنْهُ قَالَ : الرِّيحُ مِنْ رَوْحِ اللّٰهِ تَأْتِي بِالرَّحْمَةِ وَ تَأْتِي بِالْعَذَابِ، فَإِذَا رَأَيْتُمُوهَا فَلَا تَسُبُّوهَا وَ سَلُوا اللّٰهَ خَيْرَهَا وَ اسْتَعِيذُوا بِاللّٰهِ مِنْ شَرِّهَا .',
              '(٩٩) عَنْ زَيْدِ بْنِ خَالِدٍ الْجُهَنِيِّ رَضِيَ اللّٰهُ عَنْهُ قَالَ : لَا تَسُبُّوْا الدِّيكَ، فَإِنَّهُ يُوقِظُ لِلصَّلَاةِ .',
              '(١٠٠) عَنْ أَبِي بَرْزَةَ رَضِيَ اللّٰهُ عَنْهُ أَنَّ رَسُولَ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ كَانَ يَكْرَهُ النَّوْمَ قَبْلَ الْعِشَاءِ، وَ الْحَدِيثَ بَعْدَهَا .',
              '(١٠١) عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللّٰهُ عَنْهُ أَنَّ النَّبِيَّ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ قَالَ : أَمَا يَخْشَى أَحَدُكُمْ إِذَا رَفَعَ رَأْسَهُ قَبْلَ الْإِمَامِ أَنْ يَجْعَلَ اللّٰهُ رَأْسَهُ رَأْسَ حِمَارٍ !',
              '(١٠٢) إِنَّ الدَّجَّالَ يَخْرُجُ، وَ إِنَّ مَعَهُ مَاءً وَ نَارًا . فَأَمَّا الَّذِي يَرَاهُ النَّاسُ مَاءً فَنَارٌ تُحْرِقُ وَ أَمَّا الَّذِي يَرَاهُ النَّاسُ نَارًا فَمَاءٌ عَذْبٌ، فَمَنْ أَدْرَكَهُ مِنْكُمْ فَلْيَقَعْ فِي الَّذِي يَرَاهُ نَارًا .',
              '(١٠٣) عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللّٰهُ عَنْهُ أَنَّ النَّبِيَّ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ قَالَ : أَحَبُّ الْبِلَادِ إِلَى اللّٰهِ مَسَاجِدُهَا وَ أَبْغَضُ الْبِلَادِ إِلَى اللّٰهِ أَسْوَاقُهَا .',
              '(١٠٤) ثُمَّ تَلَا هَذِهِ الْآيَةَ : وَ اسْتَغْفِرْ لِذَنْبِكَ وَ لِلْمُؤْمِنِينَ وَ الْمُؤْمِنَاتِ .',
              '(١٠٥) عَنْ عَائِشَةَ رَضِيَ اللّٰهُ عَنْهَا قَالَتْ : كَانَ رَسُولُ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ يُكْثِرُ أَنْ يَقُولَ قَبْلَ مَوْتِهِ سُبْحَانَ اللّٰهِ وَ بِحَمْدِهِ، أَسْتَغْفِرُ اللّٰهَ وَ أَتُوبُ إِلَيْهِ .',
              '(١٠٦) مَنْ أَحَقُّ بِحُسْنِ صَحَابَتِي ؟ قَالَ : أُمُّكَ، قَالَ : ثُمَّ مَنْ ؟ قَالَ : أُمُّكَ، قَالَ : ثُمَّ مَنْ ؟ قَالَ : أُمُّكَ، قَالَ : ثُمَّ مَنْ ؟ قَالَ : أَبُوكَ .',
              '(١٠٧) عَنْ عَبْدِ اللّٰهِ بْنِ عُمَرَ رَضِيَ اللّٰهُ عَنْهُمَا قَالَ : قَالَ رَسُولُ اللّٰهِ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ : رِضَى اللّٰهِ فِي رِضَى الْوَالِدِ وَ سَخَطُ الرَّبِّ فِي سَخَطِ الْوَالِدِ .',
              '(١٠٨) عَنْ أَبِي أُمَامَةَ رَضِيَ اللّٰهُ عَنْهُ أَنَّ رَجُلًا قَالَ : يَا رَسُولَ اللّٰهِ مَا حَقُّ الْوَالِدَيْنِ عَلَى وَلَدِهِمَا ؟ قَالَ هُمَا جَنَّتُكَ وَ نَارُكَ .',
              '(١٠۹) عَنْ عَبْدِ اللّٰهِ بْنِ عَمْرٍو رَضِيَ اللّٰهُ عَنْهُمَا قَالَ : الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الْأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ .',
              '(١١٠) عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللّٰهُ عَنْهُ قَالَ : كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ، حَبِيبَتَانِ إِلَى الرَّحْمَنِ، سُبْحَانَ اللّٰهِ وَ بِحَمْدِهِ سُبْحَانَ اللّٰهِ الْعَظِيمِ .'
            ],
            translationEn: '(85) The best remembrance is "La ilaha illallah". (86) "Shall I not guide you to a treasure from the treasures of Paradise? Say: La hawla wa la quwwata illa billah." (87) Supplication is worship. (88) Abu Bakr asked for a supplication to say in prayer. The Prophet taught him: "O Allah, I have wronged myself greatly, and none forgives sins but You, so forgive me..." (89) The best Muslim is the one from whose tongue and hand other Muslims are safe. (90) A talebearer will not enter Paradise. (91) Abusing a Muslim is a sin, and fighting him is disbelief. (92) Beware of envy, for envy consumes good deeds just as fire consumes firewood. (93) Whoever takes up arms against us is not of us, and whoever deceives us is not of us. (94) Do not rejoice at the misfortune of your brother, lest Allah show mercy to him and afflict you. (95) Do not eat with the left hand, for Satan eats and drinks with his left hand. (96) Do not leave fire burning in your houses when you sleep. (97) Angels do not enter a house containing a dog or a picture. (98) The wind is from Allah\'s mercy; it brings mercy and punishment. Do not curse it, but ask Allah for its good and seek refuge from its evil. (99) Do not curse the rooster, for it wakes people for prayer. (100) The Prophet disliked sleeping before Isha and talking after it. (101) Does the one who raises his head before the Imam not fear that Allah might turn his head into the head of a donkey? (102) The Dajjal will appear with water and fire. What people see as water is burning fire, and what they see as fire is sweet water. Whoever encounters him should fall into what he sees as fire. (103) The most beloved places to Allah are mosques, and the most hated places are markets. (104) "And seek forgiveness for your sin and for the believing men and women." (105) Before his death, the Prophet used to say frequently: "Glory and praise be to Allah, I seek Allah\'s forgiveness and repent to Him." (106) A man asked who is most deserving of his good companionship. The Prophet said, "Your mother" three times, then "Your father." (107) Allah\'s pleasure is in the father\'s pleasure, and the Lord\'s displeasure is in the father\'s displeasure. (108) A man asked about parents\' rights. The Prophet said, "They are your Paradise and your Hell." (109) The Merciful shows mercy to those who are merciful. Show mercy to those on earth, and the One in the heavens will show mercy to you. (110) Two words are light on the tongue, heavy on the scale, and beloved to the Most Merciful: "Subhanallahi wa bihamdihi, Subhanallahil-Azim".',
            translationBn: '(৮৫) সর্বোত্তম জিকির হলো "লা ইলাহা ইল্লাল্লাহ"। (৮৬) "আমি কি তোমাকে জান্নাতের গুপ্তধনগুলোর একটির পথ দেখাব না? তা হলো: লা হাওলা ওয়া লা কুওয়াতা ইল্লা বিল্লাহ।" (৮৭) দোয়াই হলো ইবাদত। (৮৮) আবু বকর সালাতে পড়ার জন্য একটি দোয়া শিখতে চাইলেন। নবী তাঁকে শেখালেন: "হে আল্লাহ, আমি আমার নিজের ওপর অনেক জুলুম করেছি, আর আপনি ছাড়া কেউ পাপ ক্ষমা করতে পারেশে পারে না, তাই আমাকে ক্ষমা করুন..." (৮৯) সর্বোত্তম মুসলিম সেই ব্যক্তি যার জবান ও হাত থেকে অন্য মুসলিমরা নিরাপদ থাকে। (৯০) চোগলখোর জান্নাতে প্রবেশ করবে না। (৯১) মুসলিমকে গালি দেওয়া পাপাচার এবং তার সাথে লড়াই করা কুফরি। (৯২) তোমরা হিংসা থেকে বেঁচে থাকো, কারণ হিংসা নেক আমলকে এমনভাবে খেয়ে ফেলে যেমন আগুন কাঠকে খেয়ে ফেলে। (৯৩) যে আমাদের বিরুদ্ধে অস্ত্র ধারণ করে সে আমাদের দলভুক্ত নয়, আর যে আমাদের ধোঁকা দেয় সেও আমাদের দলভুক্ত নয়। (৯৪) তোমার ভাইয়ের বিপদে উল্লাস প্রকাশ কোরো না, পাছে আল্লাহ তার প্রতি দয়া করেন এবং তোমাকে বিপদে ফেলেন। (৯৫) বাঁ হাতে খেয়ো না, কারণ শয়তান বাঁ হাতে খায় ও পান করে। (৯৬) ঘুমানোর সময় তোমাদের ঘরে আগুন জ্বালানো রেখো না। (৯৭) ফেরেশতারা এমন ঘরে প্রবেশ করে না যেখানে কুকুর বা ছবি থাকে। (৯৮) বাতাস আল্লাহর রহমতের অংশ; এটি রহমত ও আজাব উভয়ই নিয়ে আসে। একে গালি দিয়ো না, বরং আল্লাহর কাছে এর কল্যাণ চাও এবং এর অকল্যাণ থেকে পানাহ চাও। (৯৯) মোরগকে গালি দিয়ো না, কারণ এটি সালাতের জন্য জাগিয়ে তোলে। (১০০) নবী এশার আগে ঘুমানো এবং এর পরে কথা বলা অপছন্দ করতেন। (১০১) যে ব্যক্তি ইমামের আগে মাথা তোলে সে কি ভয় পায় না যে আল্লাহ তার মাথাকে গাধার মাথায় পরিণত করে দেবেন? (১০২) দাজ্জাল আত্মপ্রকাশ করবে এবং তার সাথে পানি ও আগুন থাকবে। মানুষ যাকে পানি দেখবে তা আসলে পোড়ানো আগুন, আর যাকে আগুন দেখবে তা সুপেয় পানি। যে তাকে পাবে সে যেন তাতে ঝাঁপ দেয় যাকে সে আগুন দেখছে। (১০৩) আল্লাহর কাছে সবচেয়ে প্রিয় জায়গা হলো মসজিদ, আর সবচেয়ে ঘৃণ্য জায়গা হলো বাজার। (১০৪) "আর তোমার পাপের জন্য এবং মুমিন নারী-পুরুষের জন্য ক্ষমা চাও।" (১০৫) মৃত্যুর আগে নবী বেশি বেশি পড়তেন: "সুবহানাল্লাহি ওয়া বিহামদিহি, আস্তাগফিরুল্লাহ ওয়া আতুবু ইলাইহি"। (১০৬) এক ব্যক্তি জিজ্ঞেস করল তার সর্বোত্তম সাহচর্য পাওয়ার অধিকার কার সবচেয়ে বেশি। নবী তিনবার বললেন, "তোমার মায়ের", তারপর বললেন, "তোমার বাবার।" (১০৭) পিতার সন্তুষ্টিতে আল্লাহর সন্তুষ্টি এবং পিতার অসন্তুষ্টিতে রবের অসন্তুষ্টি। (১০৮) এক ব্যক্তি পিতামাতার অধিকার সম্পর্কে জিজ্ঞেস করলে নবী বললেন, "তারা তোমার জান্নাত এবং তোমার জাহান্নাম।" (১০৯) দয়ালুদের প্রতি দয়াময় আল্লাহ দয়া করেন। পৃথিবীতে যারা আছে তাদের প্রতি দয়া করো, তবে আসমানে যিনি আছেন তিনি তোমাদের প্রতি দয়া করবেন। (১১০) দুটি বাক্য এমন যা উচ্চারণে সহজ, পাল্লায় ভারী এবং দয়াময় আল্লাহর কাছে অত্যন্ত প্রিয়: "সুবহানাল্লাহি ওয়া বিহামদিহি, সুবহানাল্লাহিল আজিম"।'
          }
        ]
      }
    }
  ]
};