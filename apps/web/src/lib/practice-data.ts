export type PracticeWord = {
  id: number;
  ar: string;
  enClean: string; // The exact english word to type
  bnClean: string; // The exact bengali word
  hint?: string; // Optional hint like 'this (m.)'
  hintBn?: string; // Bengali hint
  revealed: boolean; // 10% hint
}

export type PracticeLine = {
  id: number;
  enSentence: string;
  bnSentence: string;
  words: PracticeWord[];
}

interface RawLineData {
  ar: string;
  en: string;
  bn: string;
  mappings: string;
  mappingsBn?: string;
}

function createParagraph(linesData: RawLineData[]): PracticeLine[] {
  let wordIdCounter = 1;
  let lineIdCounter = 1;

  return linesData.map((lineData) => {
    const arWords = lineData.ar.split(' ');
    const enMap = lineData.mappings.split(' ');
    const bnMap = lineData.mappingsBn ? lineData.mappingsBn.split(' ') : [];

    const words = arWords.map((arWord, index) => {
      const currentId = wordIdCounter++;
      const rawMap = enMap[index] || '???';
      let enClean = rawMap.replace(/_/g, ' ').toLowerCase();
      let hint: string | undefined = undefined;

      const hintMatch = rawMap.match(/^(.*?)\((.*?)\)$/);
      if (hintMatch) {
        enClean = hintMatch[1].replace(/_/g, ' ').toLowerCase();
        hint = `${enClean} (${hintMatch[2].replace(/_/g, ' ')})`;
      }

      const rawBn = bnMap[index] || '';
      let bnClean = rawBn.replace(/_/g, ' ');
      let hintBn: string | undefined = undefined;
      const bnHintMatch = rawBn.match(/^(.*?)\((.*?)\)$/);
      if (bnHintMatch) {
        bnClean = bnHintMatch[1].replace(/_/g, ' ');
        hintBn = `${bnClean} (${bnHintMatch[2].replace(/_/g, ' ')})`;
      }

      return {
        id: currentId,
        ar: arWord,
        enClean,
        bnClean: bnClean || enClean,
        hint,
        hintBn,
        revealed: currentId % 10 === 0,
      };
    });

    return {
      id: lineIdCounter++,
      enSentence: lineData.en,
      bnSentence: lineData.bn,
      words,
    };
  });
}

export const VOL1_PRACTICE: Record<number, PracticeLine[]> = {
  1: createParagraph([
    {
      ar: 'هَٰذَا بَيْتٌ كَبِيرٌ',
      en: 'This is a big house.',
      bn: 'এটি একটি বড় বাড়ি।',
      mappings: 'this(m.) house big',
      mappingsBn: 'এটি বাড়ি বড়',
    },
    {
      ar: 'فِي البَيْتِ سَرِيرٌ وَكُرْسِيٌّ',
      en: 'In the house there is a bed and a chair.',
      bn: 'বাড়িতে একটি খাট ও একটি চেয়ার আছে।',
      mappings: 'in the_house bed and chair',
      mappingsBn: 'মধ্যে বাড়িতে খাট এবং চেয়ার',
    },
    {
      ar: 'هَٰذَا قَلَمٌ وَذَٰلِكَ كِتَابٌ',
      en: 'This is a pen and that is a book.',
      bn: 'এটি একটি কলম এবং ওটি একটি বই।',
      mappings: 'this(m.) pen and that(m.) book',
      mappingsBn: 'এটি কলম এবং ওটি বই',
    },
    {
      ar: 'البَابُ مَفْتُوحٌ',
      en: 'The door is open.',
      bn: 'দরজাটি খোলা।',
      mappings: 'the_door open',
      mappingsBn: 'দরজাটি খোলা',
    },
    {
      ar: 'عَلَى الجِدَارِ مِصْبَاحٌ جَمِيلٌ',
      en: 'On the wall is a beautiful lamp.',
      bn: 'দেয়ালে একটি সুন্দর বাতি আছে।',
      mappings: 'on the_wall lamp beautiful',
      mappingsBn: 'উপরে দেয়ালে বাতি সুন্দর',
    },
  ]),
  2: createParagraph([
    {
      ar: 'عِنْدِي كِتَابٌ جَدِيدٌ',
      en: 'I have a new book.',
      bn: 'আমার কাছে একটি নতুন বই আছে।',
      mappings: 'i_have book new',
      mappingsBn: 'আমার_কাছে বই নতুন',
    },
    {
      ar: 'البَيْتُ نَظِيفٌ وَالبَابُ جَمِيلٌ',
      en: 'The house is clean and the door is beautiful.',
      bn: 'বাড়িটি পরিষ্কার এবং দরজাটি সুন্দর।',
      mappings: 'the_house clean and the_door beautiful',
      mappingsBn: 'বাড়িটি পরিষ্কার এবং দরজাটি সুন্দর',
    },
    {
      ar: 'المَسْجِدُ كَبِيرٌ وَالمَدْرَسَةُ صَغِيرَةٌ',
      en: 'The mosque is big and the school is small.',
      bn: 'মসজিদটি বড় এবং বিদ্যালয়টি ছোট।',
      mappings: 'the_mosque big and the_school small',
      mappingsBn: 'মসজিদটি বড় এবং বিদ্যালয়টি ছোট',
    },
    {
      ar: 'هَٰذَا كُرْسِيٌّ قَدِيمٌ',
      en: 'This is an old chair.',
      bn: 'এটি একটি পুরনো চেয়ার।',
      mappings: 'this(m.) chair old',
      mappingsBn: 'এটি চেয়ার পুরনো',
    },
    {
      ar: 'القَلَمُ جَيِّدٌ',
      en: 'The pen is good.',
      bn: 'কলমটি ভালো।',
      mappings: 'the_pen good',
      mappingsBn: 'কলমটি ভালো',
    },
  ]),
  3: createParagraph([
    {
      ar: 'هَٰذِهِ مَدْرَسَةٌ كَبِيرَةٌ',
      en: 'This is a big school.',
      bn: 'এটি একটি বড় বিদ্যালয়।',
      mappings: 'this(f.) school big',
      mappingsBn: 'এটি বিদ্যালয় বড়',
    },
    {
      ar: 'تِلْكَ سَبُّورَةٌ نَظِيفَةٌ',
      en: 'That is a clean blackboard.',
      bn: 'ওটি একটি পরিষ্কার ব্ল্যাকবোর্ড।',
      mappings: 'that(f.) blackboard clean',
      mappingsBn: 'ওটি ব্ল্যাকবোর্ড পরিষ্কার',
    },
    {
      ar: 'هَٰذِهِ سَيَّارَةٌ قَدِيمَةٌ',
      en: 'This is an old car.',
      bn: 'এটি একটি পুরনো গাড়ি।',
      mappings: 'this(f.) car old',
      mappingsBn: 'এটি গাড়ি পুরনো',
    },
    {
      ar: 'المَدْرَسَةُ بَعِيدَةٌ',
      en: 'The school is far.',
      bn: 'বিদ্যালয়টি দূরে।',
      mappings: 'the_school far',
      mappingsBn: 'বিদ্যালয়টি দূরে',
    },
    {
      ar: 'السَّيَّارَةُ قَرِيبَةٌ',
      en: 'The car is near.',
      bn: 'গাড়িটি কাছে।',
      mappings: 'the_car near',
      mappingsBn: 'গাড়িটি কাছে',
    },
  ]),
  4: createParagraph([
    {
      ar: 'الوَلَدُ صَغِيرٌ وَالبِنْتُ صَغِيرَةٌ',
      en: 'The boy is small and the girl is small.',
      bn: 'ছেলেটি ছোট এবং মেয়েটি ছোট।',
      mappings: 'the_boy small and the_girl small',
      mappingsBn: 'ছেলেটি ছোট এবং মেয়েটি ছোট',
    },
    {
      ar: 'الرَّجُلُ كَبِيرٌ وَالمَرْأَةُ كَبِيرَةٌ',
      en: 'The man is big and the woman is big.',
      bn: 'লোকটি বড় এবং মহিলাটি বড়।',
      mappings: 'the_man big and the_woman big',
      mappingsBn: 'লোকটি বড় এবং মহিলাটি বড়',
    },
    {
      ar: 'الكِتَابُ مَفْتُوحٌ',
      en: 'The book is open.',
      bn: 'বইটি খোলা।',
      mappings: 'the_book open',
      mappingsBn: 'বইটি খোলা',
    },
    {
      ar: 'المَاءُ بَارِدٌ',
      en: 'The water is cold.',
      bn: 'পানিটি ঠান্ডা।',
      mappings: 'the_water cold',
      mappingsBn: 'পানিটি ঠান্ডা',
    },
    {
      ar: 'الطَّالِبُ ذَكِيٌّ',
      en: 'The student is smart.',
      bn: 'ছাত্রটি বুদ্ধিমান।',
      mappings: 'the_student smart',
      mappingsBn: 'ছাত্রটি বুদ্ধিমান',
    },
  ]),
  5: createParagraph([
    {
      ar: 'الكِتَابُ عَلَى المَكْتَبِ',
      en: 'The book is on the desk.',
      bn: 'বইটি টেবিলের উপরে।',
      mappings: 'the_book on the_desk',
      mappingsBn: 'বইটি উপরে টেবিলের',
    },
    {
      ar: 'القَلَمُ فِي الحَقِيبَةِ',
      en: 'The pen is in the bag.',
      bn: 'কলমটি ব্যাগের ভেতরে।',
      mappings: 'the_pen in the_bag',
      mappingsBn: 'কলমটি মধ্যে ব্যাগের',
    },
    {
      ar: 'ذَهَبَ الطَّالِبُ إِلَى المَدْرَسَةِ',
      en: 'The student went to the school.',
      bn: 'ছাত্রটি বিদ্যালয়ে গেল।',
      mappings: 'went the_student to the_school',
      mappingsBn: 'গেল ছাত্রটি দিকে বিদ্যালয়ের',
    },
    {
      ar: 'رَجَعَ المُعَلِّمُ مِنَ المَسْجِدِ',
      en: 'The teacher returned from the mosque.',
      bn: 'শিক্ষক মসজিদ থেকে ফিরে এলেন।',
      mappings: 'returned the_teacher from the_mosque',
      mappingsBn: 'ফিরলেন শিক্ষক হতে মসজিদের',
    },
    {
      ar: 'الرَّجُلُ فِي البَيْتِ',
      en: 'The man is in the house.',
      bn: 'লোকটি ঘরে আছে।',
      mappings: 'the_man in the_house',
      mappingsBn: 'লোকটি মধ্যে ঘরের',
    },
  ]),
  6: createParagraph([
    {
      ar: 'هُوَ طَالِبٌ وَهِيَ طَالِبَةٌ',
      en: 'He is a student and she is a student.',
      bn: 'সে একজন ছাত্র এবং সে একজন ছাত্রী।',
      mappings: 'he(m.) student and she(f.) student',
      mappingsBn: 'সে ছাত্র এবং সে ছাত্রী',
    },
    {
      ar: 'أَنَا مُعَلِّمٌ',
      en: 'I am a teacher.',
      bn: 'আমি একজন শিক্ষক।',
      mappings: 'i teacher',
      mappingsBn: 'আমি শিক্ষক',
    },
    {
      ar: 'نَحْنُ فِي المَدْرَسَةِ',
      en: 'We are in the school.',
      bn: 'আমরা বিদ্যালয়ে আছি।',
      mappings: 'we in the_school',
      mappingsBn: 'আমরা মধ্যে বিদ্যালয়ের',
    },
    {
      ar: 'هُمْ ذَهَبُوا إِلَى المَلْعَبِ',
      en: 'They went to the playground.',
      bn: 'তারা খেলার মাঠে গেল।',
      mappings: 'they(m.) went to the_playground',
      mappingsBn: 'তারা গেল দিকে খেলার_মাঠের',
    },
    {
      ar: 'أَنْتَ مُهَنْدِسٌ',
      en: 'You are an engineer.',
      bn: 'তুমি একজন প্রকৌশলী।',
      mappings: 'you(m.) engineer',
      mappingsBn: 'তুমি প্রকৌশলী',
    },
  ]),
  7: createParagraph([
    {
      ar: 'هَٰذَا كِتَابِي وَذَٰلِكَ كِتَابُكَ',
      en: 'This is my book and that is your book.',
      bn: 'এটি আমার বই এবং ওটি তোমার বই।',
      mappings: 'this(m.) my_book and that(m.) your_book',
      mappingsBn: 'এটি আমার_বই এবং ওটি তোমার_বই',
    },
    {
      ar: 'بَيْتُنَا كَبِيرٌ',
      en: 'Our house is big.',
      bn: 'আমাদের বাড়িটি বড়।',
      mappings: 'our_house big',
      mappingsBn: 'আমাদের_বাড়ি বড়',
    },
    {
      ar: 'سَيَّارَتُهَا جَدِيدَةٌ',
      en: 'Her car is new.',
      bn: 'তার গাড়িটি নতুন।',
      mappings: 'her_car new',
      mappingsBn: 'তার_গাড়ি নতুন',
    },
    {
      ar: 'أَيْنَ مَدْرَسَتُكُمْ ؟',
      en: 'Where is your school?',
      bn: 'তোমাদের বিদ্যালয় কোথায়?',
      mappings: 'where your_school',
      mappingsBn: 'কোথায় তোমাদের_বিদ্যালয়',
    },
    {
      ar: 'غُرْفَتِي نَظِيفَةٌ',
      en: 'My room is clean.',
      bn: 'আমার ঘরটি পরিষ্কার।',
      mappings: 'my_room clean',
      mappingsBn: 'আমার_ঘর পরিষ্কার',
    },
  ]),
  8: createParagraph([
    {
      ar: 'هَٰؤُلَاءِ طُلَّابٌ جُدُدٌ',
      en: 'These are new students.',
      bn: 'এরা নতুন শিক্ষার্থী।',
      mappings: 'these students new',
      mappingsBn: 'এরা শিক্ষার্থী নতুন',
    },
    {
      ar: 'الكُتُبُ كَثِيرَةٌ',
      en: 'The books are many.',
      bn: 'বইগুলো অনেক।',
      mappings: 'the_books many',
      mappingsBn: 'বইগুলো অনেক',
    },
    {
      ar: 'الرِّجَالُ فِي المَسْجِدِ',
      en: 'The men are in the mosque.',
      bn: 'পুরুষরা মসজিদে আছে।',
      mappings: 'the_men in the_mosque',
      mappingsBn: 'পুরুষরা মধ্যে মসজিদের',
    },
    {
      ar: 'الأَقْلَامُ حَمْرَاءُ',
      en: 'The pens are red.',
      bn: 'কলমগুলো লাল।',
      mappings: 'the_pens red',
      mappingsBn: 'কলমগুলো লাল',
    },
    {
      ar: 'الأَبْوَابُ مَفْتُوحَةٌ',
      en: 'The doors are open.',
      bn: 'দরজাগুলো খোলা।',
      mappings: 'the_doors open',
      mappingsBn: 'দরজাগুলো খোলা',
    },
  ]),
  9: createParagraph([
    {
      ar: 'عِنْدِي ثَلَاثَةُ كُتُبٍ',
      en: 'I have three books.',
      bn: 'আমার কাছে তিনটি বই আছে।',
      mappings: 'i_have three books',
      mappingsBn: 'আমার_কাছে তিনটি বই',
    },
    {
      ar: 'فِي الفَصْلِ خَمْسَةُ طُلَّابٍ',
      en: 'In the class there are five students.',
      bn: 'শ্রেণিকক্ষে পাঁচজন শিক্ষার্থী আছে।',
      mappings: 'in the_class five students',
      mappingsBn: 'মধ্যে শ্রেণিকক্ষের পাঁচ শিক্ষার্থী',
    },
    {
      ar: 'اشْتَرَيْتُ سِتَّ سَيَّارَاتٍ',
      en: 'I bought six cars.',
      bn: 'আমি ছয়টি গাড়ি কিনলাম।',
      mappings: 'bought six cars',
      mappingsBn: 'কিনলাম ছয় গাড়ি',
    },
    {
      ar: 'عَشَرَةُ دَرَاهِمَ',
      en: 'Ten dirhams.',
      bn: 'দশ দিরহাম।',
      mappings: 'ten dirhams',
      mappingsBn: 'দশ দিরহাম',
    },
    {
      ar: 'سَبْعَةُ رِجَالٍ',
      en: 'Seven men.',
      bn: 'সাতজন পুরুষ।',
      mappings: 'seven men',
      mappingsBn: 'সাত পুরুষ',
    },
  ]),
};
