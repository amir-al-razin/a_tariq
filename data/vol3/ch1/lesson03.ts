import type { LessonData } from '../../curriculum';

export const lesson03: LessonData = {
  darsNumber: 3,
  chunks: [
    {
      id: '3-1-3-1',
      type: 'verb_table',
      titleEn: 'Plural Verb Forms with Future Negation',
      titleAr: 'الأَفْعَالُ بِصِيغَةِ الجَمْع مَعَ النَّفْيِ الْمُسْتَقْبَلِي',
      payload: {
        verbTense: 'present',
        verbTable: [
          {
            root: 'يَذْهَبُونَ / لَنْ يَذْهَبُوا',
            meaning: 'they (m) go / they (m) will never go',
            he: 'يَذْهَبُونَ',
            she: 'يَذْهَبْنَ',
            youM: 'تَذْهَبُونَ',
            youF: 'تَذْهَبْنَ',
            i: 'نَذْهَبُ',
          },
          {
            root: 'يَشْرَبُونَ / لَنْ يَشْرَبُوا',
            meaning: 'they (m) drink / they (m) will never drink',
            he: 'يَشْرَبُونَ',
            she: 'يَشْرَبْنَ',
            youM: 'تَشْرَبُونَ',
            youF: 'تَشْرَبْنَ',
            i: 'نَشْرَبُ',
          },
          {
            root: 'يَسْمَعُونَ / لَنْ يَسْمَعُوا',
            meaning: 'they (m) hear / they (m) will never hear',
            he: 'يَسْمَعُونَ',
            she: 'يَسْمَعْنَ',
            youM: 'تَسْمَعُونَ',
            youF: 'تَسْمَعْنَ',
            i: 'نَسْمَعُ',
          },
          {
            root: 'يَلْعَبُونَ / لَنْ يَلْعَبُوا',
            meaning: 'they (m) play / they (m) will never play',
            he: 'يَلْعَبُونَ',
            she: 'يَلْعَبْنَ',
            youM: 'تَلْعَبُونَ',
            youF: 'تَلْعَبْنَ',
            i: 'نَلْعَبُ',
          },
          {
            root: 'يَفْهَمُونَ / لَنْ يَفْهَمُوا',
            meaning: 'they (m) understand / they (m) will never understand',
            he: 'يَفْهَمُونَ',
            she: 'يَفْهَمْنَ',
            youM: 'تَفْهَمُونَ',
            youF: 'تَفْهَمْنَ',
            i: 'نَفْهَمُ',
          },
        ],
        sourceText: 'Plural verb forms with future negation using لَنْ',
      },
    },
    {
      id: '3-1-3-2',
      type: 'grammar_rule',
      titleEn: 'Grammar Rule 1 - Future Negation (لَنْ)',
      titleAr: 'القَاعِدَةُ النَّحْوِيَّةُ الأُولَى - النَّفْيُ الْمُسْتَقْبَلِي',
      payload: {
        rules: [
          {
            label: 'Future Negation Particle (لَنْ)',
            labelBn: 'ভবিষ্যত নেতিবাচক কণ',
            arabic:
              'لَنْ is used to negate future actions. The verb after لَنْ takes the subjunctive form (منصوب).',
            romanized: 'lan yunaffi al-afyal al-mustaqbaliyyah',
            meaning:
              'Use لَنْ before the present tense verb to express that something will never happen',
            meaningBn:
              'ভবিষ্যতে কিছু কখনও ঘটবে না তা প্রকাশ করতে বর্তমান কালের ক্রিয়ার আগে لَنْ ব্যবহার করুন',
            examples: [],
          },
        ],
      },
    },
    {
      id: '3-1-3-3',
      type: 'grammar_rule',
      titleEn: 'Grammar Rule 2 - Purpose with لِـ',
      titleAr: 'القَاعِدَةُ النَّحْوِيَّةُ الثَّانِيَة - حَرْفُ الْقَصْدِ',
      payload: {
        rules: [
          {
            label: 'The Particle لِـ for Purpose/Intention',
            labelBn: 'উদ্দেশ্যের জন্য لِـ কণ',
            arabic:
              'The particle لِـ is attached to verbs to express purpose or intention (why someone does something).',
            romanized: 'lam yuassir al-qasdi wa al-niyyah',
            meaning:
              'When you add لِـ to a present tense verb, it indicates the purpose or reason for the action',
            meaningBn:
              'বর্তমান কালের ক্রিয়ায় لِـ যোগ করলে এটি কাজের উদ্দেশ্য বা কারণ নির্দেশ করে',
            examples: [],
          },
        ],
      },
    },
    {
      id: '3-1-3-4',
      type: 'paragraph',
      titleEn: 'Reading - Verb Chains with Future Negation',
      titleAr: 'القِرَاءَةُ - سِلْسِلَةُ الأَفْعَالِ بِالنَّفْيِ الْمُسْتَقْبَلِي',
      payload: {
        paragraphs: [
          {
            title: 'Future Negation Chains',
            titleEn: 'Future Negation Chains',
            titleBn: 'ভবিষ্যত নেতিবাচক কণের শৃঙ্খল',
            lines: [
              'احْفَظْ سِلْسِلَةَ الْأَفْعَالِ الْآتِيَةِ:',
              'لَنْ يَشْرَبُوا ... لَنْ يَسْمَعُوا ... لَنْ يَلْعَبُوا ... لَنْ يَفْهَمُوا ...',
              'لَنْ يَفْتَحُوا ... لَنْ يَمْنَعُوا ... لَنْ يَذْبَحُوا ... لَنْ يَسْأَلُوا ...',
              'لَنْ يَجْلِسُوا ... لَنْ يَضْرِبُوا ... لَنْ يَغْسِلُوا ... لَنْ يَكْذِبُوا ...',
              'لَنْ يَنْصُرُوا ... لَنْ يَكْتُبُوا ... لَنْ يَأْكُلُوا ... لَنْ يَأْمُرُوا ...',
              'لَنْ يُكْرِمُوا ... لَنْ يُعَلِّمُوا ... لَنْ يَنْتَظِرُوا ... لَنْ يُسَافِرُوا ...',
              'لَنْ يَصُومُوا ... لَنْ يَبِيعُوا ... لَنْ يُجِيبُوا ... لَنْ يَسْتَرِيحُوا ...',
            ],
            translationEn:
              'Memorize the following verb chains: They will never drink... hear... play... understand... open... prevent... slaughter... ask... sit... hit... wash... lie... help... write... eat... command... honor... teach... wait... travel... fast... sell... answer... rest...',
            translationBn:
              'নিম্নলিখিত ক্রিয়া শৃঙ্খল মুখস্ত করুন: তারা কখনও পান করবে না... শুনবে না... খেলবে না... বুঝবে না... খুলবে না... প্রতিরোধ করবে না... জবাই করবে না... জিজ্ঞাসা করবে না... বসবে না... মারবে না... ধুবে না... মিথ্যা বলবে না... সাহায্য করবে না... লিখবে না... খাবে না... আদেশ করবে না... সম্মান করবে না... শেখাবে না... অপেক্ষা করবে না... ভ্রমণ করবে না... উপবাস করবে না... বিক্রয় করবে না... উত্তর দেবে না... বিশ্রাম নেবে না...',
          },
        ],
      },
    },
    {
      id: '3-1-3-5',
      type: 'paragraph',
      titleEn: 'Reading - Negation & Purpose in Stories',
      titleAr: 'القِرَاءَةُ - النَّفْيُ وَ الْقَصْدُ فِي الْقِصَص',
      payload: {
        paragraphs: [
          {
            title: 'Stories with Negation and Purpose',
            titleEn: 'Stories with Negation and Purpose',
            titleBn: 'নেতিবাচকতা এবং উদ্দেশ্যের গল্প',
            lines: [
              'لَنْ يَدْخُلَ الْمُشْرِكُونَ الْجَنَّةَ، بَلْ يَدْخُلُونَ النَّارَ، وَلَنْ يَخْرُجُوا مِنْهَا أَبَدًا.',
              'لَنْ نَعْبُدَ غَيْرَ اللَّهِ وَلَنْ نَسْجُدَ لِغَيْرِ اللَّهِ.',
              'قَالَ الْوَالِدُ لِأَوْلَادِهِ : أَرْجُو أَنْ أَتْرُكَكُمْ مِنْ بَعْدِي، وَلَنْ تَتْرُكُوا كِتَابَ اللَّهِ وَسُنَّةَ رَسُولِهِ.',
              'قَالَ الْعَالِمُ : مَا حَالَكُمْ يَا شُبَّانَ الْإِسْلَامِ! أَلَنْ تَحْمِلُوا السِّلَاحَ؟ أَلَنْ تَخْرُجُوا إِلَى الْجِهَادِ فِي سَبِيلِ اللَّهِ؟ بَلَى.. سَنَحْمِلُ وَسَنَخْرُجُ.',
              'هَؤُلَاءِ الصَّالِحُونَ لَنْ يَأْكُلُوا أَمْوَالَ الْيَتَامَى وَلَنْ يَمْلَؤُوا بُطُونَهُمْ بِالنَّارِ.',
              'تَصْدُقُ الْمُسْلِمَاتُ دَائِمًا، وَلَنْ يَكْذِبْنَ أَبَدًا.',
              'لَنْ تَعْبُدَ الْمُسْلِمَاتُ غَيْرَ اللَّهِ وَلَنْ يَسْجُدْنَ لِغَيْرِ اللَّهِ.',
              'أَيَّتُهَا الْبَنَاتُ! أَلَنْ تَغْسِلْنَ ثِيَابَكُنَّ الْوَسِخَةَ؟ أَلَنْ تَلْبَسْنَ ثِيَابًا نَظِيفَةً؟ بَلَى.. نَغْسِلُ ثِيَابَنَا الْوَسِخَةَ وَنَلْبَسُ ثِيَابًا نَظِيفَةً.',
              'سَيَنْصُرُ أَصْدِقَاءُ مَاجِدٍ الْمَظْلُومِينَ وَلَنْ يَنْصُرُوا الظَّالِمِينَ.',
            ],
            translationEn:
              "The polytheists will never enter Paradise; rather, they will enter the Fire and will never exit from it. We will never worship other than Allah and will never prostrate to other than Allah. The father said to his children: I hope to leave you after me, and you will never abandon the Book of Allah and the Sunnah of His Messenger. The scholar said: What is your condition, O youth of Islam! Will you not carry weapons? Will you not go out for Jihad in the path of Allah? Yes indeed... we will carry and we will go out. These righteous people will never eat the wealth of orphans and will never fill their bellies with the Fire. Muslim women always speak the truth and will never lie. Muslim women will never worship other than Allah and will never prostrate to other than Allah. O girls! Will you not wash your dirty clothes? Will you not wear clean clothes? Yes indeed... we wash our dirty clothes and wear clean clothes. Majid's friends will help the oppressed and will never help the oppressors.",
            translationBn:
              'মুশরিক রা কখনও স্বর্গে প্রবেশ করবে না; বরং তারা নরকে প্রবেশ করবে এবং কখনও বের হবে না। আমরা আল্লাহ ছাড়া আর কাউকে পূজা করব না এবং আল্লাহ ছাড়া আর কাউকে সিজদা করব না। পিতা তার সন্তানদের বলেছেন: আমি আশা করি আমার পরে তোমাদের রেখে যাব, এবং তোমরা কখনও আল্লাহর কিতাব এবং তার রাসূলের সুন্নত পরিত্যাগ করবে না। বিদ্বান বলেছেন: তোমাদের অবস্থা কী, হে ইসলামের যুবকরা! তোমরা কি অস্ত্র বহন করবে না? তোমরা কি আল্লাহর পথে জিহাদের জন্য বের হবে না? হ্যাঁ অবশ্যই... আমরা অস্ত্র বহন করব এবং বের হব। এই সৎকর্মশীলরা কখনও অনাথদের সম্পদ খাবে না এবং কখনও তাদের পেট নরক দিয়ে পূরণ করবে না। মুসলিম মহিলারা সবসময় সত্য বলে এবং কখনও মিথ্যা বলবে না। মুসলিম মহিলারা আল্লাহ ছাড়া অন্য কারও পূজা করবে না এবং আল্লাহ ছাড়া অন্য কারও সিজদা করবে না। হে মেয়েরা! তোমরা কি তোমাদের ময়লা কাপড় ধুবে না? তোমরা কি পরিচ্ছন্ন কাপড় পরবে না? হ্যাঁ অবশ্যই... আমরা আমাদের ময়লা কাপড় ধুই এবং পরিচ্ছন্ন কাপড় পরি। মাজিদের বন্ধুরা অত্যাচারিতদের সাহায্য করবে এবং অত্যাচারীদের কখনও সাহায্য করবে না।',
          },
        ],
      },
    },
    {
      id: '3-1-3-6',
      type: 'paragraph',
      titleEn: 'Reading - Purpose with لِـ Particle',
      titleAr: 'القِرَاءَةُ - التمرين الثالث - اقْرَأْ وَ تَرْجِمْ',
      payload: {
        paragraphs: [
          {
            title: 'Reading and Translation Practice',
            titleEn: 'Reading and Translation Practice',
            titleBn: 'পড়া এবং অনুবাদ অনুশীলন',
            lines: [
              'هَؤُلَاءِ الْأَوْلَادُ يَدْرُسُونَ اللُّغَةَ الْعَرَبِيَّةَ لِيَفْهَمُوا كَلَامَ اللَّهِ.',
              'ذَهَبَتِ الْبَنَاتُ إِلَى حَدِيقَةِ الْمَنْزِلِ لِيَلْعَبْنَ مَعَ عَائِشَةَ.',
              'قَالَتِ الْأُمُّ لِبَنَاتِهَا : أُدْخُلْنَ الْحَمَّامَ لِتَغْسِلْنَ ثِيَابَكُنَّ الْوَسِخَةَ.',
              'قَالَ رَاشِدٌ لِأَصْدِقَائِهِ : خُذُوا هَذِهِ الْأَكْوَابَ لِتَشْرَبُوا مَاءً بَارِدًا.',
              'فَتَحَ أَصْدِقَاءُ مَاجِدٍ بَابَ الْغُرْفَةِ لِيَخْرُجُوا مِنَ الْغُرْفَةِ وَيَذْهَبُوا إِلَى حَدِيقَةِ الْمَنْزِلِ.',
              'أَخَذَتِ الْبَنَاتُ الْمَنَادِيلَ النَّظِيفَةَ لِيَمْسَحْنَ بِهَا وُجُوهَهُنَّ.',
              'قَالَتِ الْأُمُّ لِأَوْلَادِهَا : إِجْلِسُوا عَلَى الْمَائِدَةِ لِتَأْكُلُوا طَعَامَ الْعِشَاءِ.',
              'أَخَذَ التَّلَامِيذُ أَقْلَامَهُمْ لِيَكْتُبُوا مَقَالَةً عَنْ فَضِيلَةِ الْعِلْمِ.',
              'أَخَذَ الْأَوْلَادُ الْكُرَةَ الْجَدِيدَةَ لِيَلْعَبُوا بِهَا مَعَ أَصْدِقَائِهِمْ.',
              'جَلَسَ النَّاسُ فِي مَجْلِسِ الْعَالِمِ لِيَسْمَعُوا عِظَتَهُ.',
              'أَرْسَلَ هَؤُلَاءِ الْآبَاءُ أَوْلَادَهُمْ إِلَى الْمَدْرَسَةِ لِيَتَعَلَّمُوا اللُّغَةَ الْعَرَبِيَّةَ.',
              'جَلَسَ الْمُسَافِرُونَ فِي غُرْفَةِ الِانْتِظَارِ لِيَنْتَظِرُوا الْقِطَارَ السَّرِيعَ.',
            ],
            translationEn:
              'These boys are studying the Arabic language in order to understand the speech of Allah. The girls went to the house garden to play with Aisha. The mother said to her daughters: Enter the bathroom to wash your dirty clothes. Rashid said to his friends: Take these cups to drink cold water. Majids friends opened the door of the room to exit the room and go to the house garden. The girls took the clean handkerchiefs to wipe their faces with them. The mother said to her children: Sit at the dining table to eat dinner. The students took their pens to write an article about the virtue of knowledge. The boys took the new ball to play with it with their friends. The people sat in the gathering of the scholar to hear his sermon. These fathers sent their children to school to learn the Arabic language. The travelers sat in the waiting room to wait for the fast train.',
            translationBn:
              'এই ছেলেরা আল্লাহর বাণী বোঝার জন্য আরবি ভাষা অধ্যয়ন করছে। মেয়েরা আয়ের সাথে খেলার জন্য বাড়ির বাগানে গেছে। মা তার মেয়েদের বলেছেন: বাথরুমে প্রবেশ করুন তোমাদের ময়লা কাপড় ধুতে। রাশিদ তার বন্ধুদের বলেছেন: এই কাপগুলি নিন ঠান্ডা জল পাওয়ার জন্য। মাজিদের বন্ধুরা ঘর থেকে বেরিয়ে বাগানে যাওয়ার জন্য ঘরের দরজা খুলেছে। মেয়েরা তাদের মুখ মোছার জন্য পরিচ্ছন্ন রুমাল নিয়েছে। মা তার সন্তানদের বলেছেন: ডাইনিং টেবিলে বসুন রাতের খাবার খেতে। শিক্ষার্থীরা জ্ঞানের গুণাবলী নিয়ে একটি প্রবন্ধ লিখতে তাদের কলম নিয়েছে। ছেলেরা তাদের বন্ধুদের সাথে খেলার জন্য নতুন বল নিয়েছে। মানুষ বিদ্বানের সম্বোধন শুনতে বিদ্বানের সমাবেশে বসেছে। এই পিতারা আরবি ভাষা শিখতে তাদের সন্তানদের স্কুলে পাঠিয়েছেন। ভ্রমণকারীরা দ্রুত ট্রেনের অপেক্ষায় অপেক্ষার ঘরে বসেছিল।',
          },
        ],
      },
    },
    {
      id: '3-1-3-7',
      type: 'application',
      titleEn: 'Application - Verb Conjugation with Purpose',
      titleAr: 'التَّطْبِيقُ - تَصْرِيفُ الأَفْعَالِ مَعَ الْقَصْدِ',
      payload: {
        instruction:
          'Complete the following sentences using the verb patterns with purpose (لِـ) and the conjugations shown in the examples, and using the form of the verb that matches the subject.',
        text: 'Example: يَدْرُسُ هَؤُلَاءِ الْأَوْلَادُ اللُّغَةَ الْعَرَبِيَّةَ لِيَفْهَمُوا كَلَامَ اللَّهِ\n(١) يَدْرُسُ هَذَا الْوَلَدُ اللُّغَةَ الْعَرَبِيَّةَ لِ___\n(٢) تَدْرُسُ هَذِهِ الْبِنْتُ اللُّغَةَ الْعَرَبِيَّةَ لِ___\n(٣) أَيُّهَا الْأَوْلَادُ! اُدْرُسُوا اللُّغَةَ الْعَرَبِيَّةَ لِـ___\n(٤) أَيَّتُهَا الْبَنَاتُ! اُدْرُسْنَ اللُّغَةَ الْعَرَبِيَّةَ لِـ___\n(٥) أَنْتِ تَدْرُسِينَ اللُّغَةَ الْعَرَبِيَّةَ لِـ___\n(٦) أَنْتَ تَدْرُسُ اللُّغَةَ الْعَرَبِيَّةَ لِـ___',
      },
    },
    {
      id: '3-1-3-8',
      type: 'assessment',
      titleEn: 'Assessment - Complete Verb Chains with لِـ',
      titleAr: 'التَّمْرِينُ - أَكْمِلِ السِّلْسِلَةَ بِـ لِـ',
      payload: {
        instruction:
          'Complete the following verb chains adding the purpose particle لِـ to each verb form.',
        questions: [
          {
            emoji: '📝',
            question_ar: '(١) لِيَكْتُبُوا ... لِيَأْكُلُوا ... لِيَشْرَبُوا ... لِيَجْلِسُوا ...',
            question_en:
              'Complete: For them to write... For them to eat... For them to drink... For them to sit...',
            correct_ar:
              'لِيَكْتُبُوا - لِيَأْكُلُوا - لِيَشْرَبُوا - لِيَجْلِسُوا - لِيَفْتَحُوا - لِيَحْفَظُوا - لِيَسْأَلُوا - لِيَلْعَبُوا',
            correct_en:
              'To write - to eat - to drink - to sit - to open - to memorize - to ask - to play',
            options_ar: ['لِـ pattern', 'يـ pattern', 'تـ pattern'],
            questionType: 'general',
          },
          {
            emoji: '📝',
            question_ar:
              '(٢) لِيُرْسِلُوا ... لِيُعَلِّمُوا ... لِيَنْتَظِرُوا ... لِيَصُومُوا ...',
            question_en:
              'Complete: For them to send... For them to teach... For them to wait... For them to fast...',
            correct_ar:
              'لِيُرْسِلُوا - لِيُعَلِّمُوا - لِيَنْتَظِرُوا - لِيَصُومُوا - لِيَبِيعُوا - لِيُسَافِرُوا - لِيَسْتَرِيحُوا - لِيُجِيبُوا',
            correct_en:
              'To send - to teach - to wait - to fast - to sell - to travel - to rest - to answer',
            options_ar: ['لِـ pattern', 'يـ pattern', 'تـ pattern'],
            questionType: 'general',
          },
        ],
      },
    },
    {
      id: '3-1-3-9',
      type: 'q_and_a',
      titleEn: 'Comprehension Questions - Negation & Purpose',
      titleAr: 'أَسْئِلَة الْفَهْم - النَّفْيُ وَ الْقَصْدُ',
      payload: {
        instruction: 'Answer the following comprehension questions based on the lesson material.',
        questions: [
          {
            emoji: '❓',
            question_ar: 'هَلْ يَدْخُلُ الْمُشْرِكُونَ الْجَنَّةَ؟',
            question_en: 'Will the polytheists enter Paradise?',
            correct_ar: 'لا، لَنْ يَدْخُلُوا الْجَنَّةَ، بَلْ سَيَدْخُلُونَ النَّارَ',
            correct_en:
              'No, the polytheists will never enter Paradise; rather, they will enter the Fire',
            options_ar: ['نَعَمْ، سَيَدْخُلُونَ', 'لا، لَنْ يَدْخُلُوا الْجَنَّةَ'],
            questionType: 'hal',
          },
          {
            emoji: '❓',
            question_ar: 'هَلْ يَخْرُجُ الْمُشْرِكُونَ مِنَ النَّارِ أَبَدًا؟',
            question_en: 'Will the polytheists ever exit the Fire?',
            correct_ar: 'لا، لَنْ يَخْرُجُوا مِنْهَا أَبَدًا',
            correct_en: 'No, they will never exit from it',
            options_ar: ['نَعَمْ', 'لا، أَبَدًا'],
            questionType: 'hal',
          },
          {
            emoji: '❓',
            question_ar: 'مَاذَا قَالَتِ الْأُمُّ لِبَنَاتِهَا؟',
            question_en: 'What did the mother say to her daughters?',
            correct_ar:
              'قَالَتِ الْأُمُّ : أُدْخُلْنَ الْحَمَّامَ لِتَغْسِلْنَ ثِيَابَكُنَّ الْوَسِخَةَ',
            correct_en: 'The mother said: Enter the bathroom to wash your dirty clothes',
            options_ar: ['ادرسن', 'ادخلن الحمام', 'العبن'],
            questionType: 'general',
          },
          {
            emoji: '❓',
            question_ar: 'لِمَ يَدْرُسُ الْأَوْلَادُ اللُّغَةَ الْعَرَبِيَّةَ؟',
            question_en: 'Why do the boys study the Arabic language?',
            correct_ar: 'يَدْرُسُونَ اللُّغَةَ الْعَرَبِيَّةَ لِيَفْهَمُوا كَلَامَ اللَّهِ',
            correct_en: 'They study the Arabic language in order to understand the speech of Allah',
            options_ar: ['للمال', 'لفهم كلام الله', 'للعب'],
            questionType: 'general',
          },
          {
            emoji: '❓',
            question_ar: 'أَيْنَ ذَهَبَتِ الْبَنَاتُ؟',
            question_en: 'Where did the girls go?',
            correct_ar: 'ذَهَبَتِ الْبَنَاتُ إِلَى حَدِيقَةِ الْمَنْزِلِ',
            correct_en: 'The girls went to the house garden',
            options_ar: ['المسجد', 'المدرسة', 'حديقة المنزل'],
            questionType: 'general',
          },
          {
            emoji: '❓',
            question_ar: 'لِمَ ذَهَبَتِ الْبَنَاتُ إِلَى الْحَدِيقَةِ؟',
            question_en: 'Why did the girls go to the garden?',
            correct_ar: 'لِيَلْعَبْنَ مَعَ عَائِشَةَ',
            correct_en: 'To play with Aisha',
            options_ar: ['للقراءة', 'للعب مع عائشة', 'للدراسة'],
            questionType: 'general',
          },
          {
            emoji: '❓',
            question_ar: 'مَاذَا قَالَ رَاشِدٌ لِأَصْدِقَائِهِ؟',
            question_en: 'What did Rashid say to his friends?',
            correct_ar: 'قَالَ رَاشِدٌ : خُذُوا هَذِهِ الْأَكْوَابَ لِتَشْرَبُوا مَاءً بَارِدًا',
            correct_en: 'Rashid said: Take these cups to drink cold water',
            options_ar: ['اركضوا', 'خذوا الاكواب', 'اجلسوا'],
            questionType: 'general',
          },
          {
            emoji: '❓',
            question_ar: 'مَاذَا أَخَذَتِ الْبَنَاتُ؟',
            question_en: 'What did the girls take?',
            correct_ar: 'أَخَذَتِ الْبَنَاتُ الْمَنَادِيلَ النَّظِيفَةَ',
            correct_en: 'The girls took the clean handkerchiefs',
            options_ar: ['الكتب', 'المناديل النظيفة', 'الاقلام'],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};
