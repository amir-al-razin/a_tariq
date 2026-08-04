export type PracticeWord = {
  id: number;
  ar: string;
  enClean: string; // The exact english word to type
  hint?: string; // Optional hint like 'this (f.)'
  revealed: boolean; // 10% hint
}

export type PracticeLine = {
  id: number;
  enSentence: string;
  words: PracticeWord[];
}

function createParagraph(linesData: {ar: string, en: string, mappings: string}[]): PracticeLine[] {
  let wordIdCounter = 1;
  let lineIdCounter = 1;
  
  return linesData.map(lineData => {
    const arWords = lineData.ar.split(' ');
    const enMap = lineData.mappings.split(' '); // e.g., "this(m.) the_house big"
    
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

      return {
        id: currentId,
        ar: arWord,
        enClean,
        hint,
        revealed: currentId % 10 === 0
      };
    });

    return {
      id: lineIdCounter++,
      enSentence: lineData.en,
      words
    };
  });
}

export const VOL1_PRACTICE: Record<number, PracticeLine[]> = {
  1: createParagraph([
    { ar: "هذا بيت كبير", en: "This is a big house.", mappings: "this(m.) house big" },
    { ar: "في البيت سرير و كرسي", en: "In the house there is a bed and a chair.", mappings: "in the_house bed and chair" },
    { ar: "هذا قلم و ذلك كتاب", en: "This is a pen and that is a book.", mappings: "this(m.) pen and that(m.) book" },
    { ar: "الباب مفتوح", en: "The door is open.", mappings: "the_door open" },
    { ar: "على الجدار مصباح جميل", en: "On the wall is a beautiful lamp.", mappings: "on the_wall lamp beautiful" }
  ]),
  2: createParagraph([
    { ar: "عندي كتاب جديد", en: "I have a new book.", mappings: "i_have book new" },
    { ar: "البيت نظيف و الباب جميل", en: "The house is clean and the door is beautiful.", mappings: "the_house clean and the_door beautiful" },
    { ar: "المسجد كبير و المدرسة صغيرة", en: "The mosque is big and the school is small.", mappings: "the_mosque big and the_school small" },
    { ar: "هذا كرسي قديم", en: "This is an old chair.", mappings: "this(m.) chair old" },
    { ar: "القلم جيد", en: "The pen is good.", mappings: "the_pen good" }
  ]),
  3: createParagraph([
    { ar: "هذه مدرسة كبيرة", en: "This is a big school.", mappings: "this(f.) school big" },
    { ar: "تلك سبورة نظيفة", en: "That is a clean blackboard.", mappings: "that(f.) blackboard clean" },
    { ar: "هذه سيارة قديمة", en: "This is an old car.", mappings: "this(f.) car old" },
    { ar: "المدرسة بعيدة", en: "The school is far.", mappings: "the_school far" },
    { ar: "السيارة قريبة", en: "The car is near.", mappings: "the_car near" }
  ]),
  4: createParagraph([
    { ar: "الولد صغير و البنت صغيرة", en: "The boy is small and the girl is small.", mappings: "the_boy small and the_girl small" },
    { ar: "الرجل كبير و المرأة كبيرة", en: "The man is big and the woman is big.", mappings: "the_man big and the_woman big" },
    { ar: "الكتاب مفتوح", en: "The book is open.", mappings: "the_book open" },
    { ar: "الماء بارد", en: "The water is cold.", mappings: "the_water cold" },
    { ar: "الطالب ذكي", en: "The student is smart.", mappings: "the_student smart" }
  ]),
  5: createParagraph([
    { ar: "الكتاب على المكتب", en: "The book is on the desk.", mappings: "the_book on the_desk" },
    { ar: "القلم في الحقيبة", en: "The pen is in the bag.", mappings: "the_pen in the_bag" },
    { ar: "ذهب الطالب إلى المدرسة", en: "The student went to the school.", mappings: "went the_student to the_school" },
    { ar: "رجع المعلم من المسجد", en: "The teacher returned from the mosque.", mappings: "returned the_teacher from the_mosque" },
    { ar: "الرجل في البيت", en: "The man is in the house.", mappings: "the_man in the_house" }
  ]),
  6: createParagraph([
    { ar: "هو طالب و هي طالبة", en: "He is a student and she is a student.", mappings: "he(m.) student and she(f.) student" },
    { ar: "أنا معلم", en: "I am a teacher.", mappings: "i teacher" },
    { ar: "نحن في المدرسة", en: "We are in the school.", mappings: "we in the_school" },
    { ar: "هم ذهبوا إلى الملعب", en: "They went to the playground.", mappings: "they(m.) went to the_playground" },
    { ar: "أنت مهندس", en: "You are an engineer.", mappings: "you(m.) engineer" }
  ]),
  7: createParagraph([
    { ar: "هذا كتابي و ذلك كتابك", en: "This is my book and that is your book.", mappings: "this(m.) my_book and that(m.) your_book" },
    { ar: "بيتنا كبير", en: "Our house is big.", mappings: "our_house big" },
    { ar: "سيارتها جديدة", en: "Her car is new.", mappings: "her_car new" },
    { ar: "أين مدرستكم", en: "Where is your school?", mappings: "where your_school" },
    { ar: "غرفتي نظيفة", en: "My room is clean.", mappings: "my_room clean" }
  ]),
  8: createParagraph([
    { ar: "هؤلاء طلاب جدد", en: "These are new students.", mappings: "these students new" },
    { ar: "الكتب كثيرة", en: "The books are many.", mappings: "the_books many" },
    { ar: "الرجال في المسجد", en: "The men are in the mosque.", mappings: "the_men in the_mosque" },
    { ar: "الأقلام حمراء", en: "The pens are red.", mappings: "the_pens red" },
    { ar: "الأبواب مفتوحة", en: "The doors are open.", mappings: "the_doors open" }
  ]),
  9: createParagraph([
    { ar: "عندي ثلاثة كتب", en: "I have three books.", mappings: "i_have three books" },
    { ar: "في الفصل خمسة طلاب", en: "In the class there are five students.", mappings: "in the_class five students" },
    { ar: "اشتريت ست سيارات", en: "I bought six cars.", mappings: "bought six cars" },
    { ar: "عشرة دراهم", en: "Ten dirhams.", mappings: "ten dirhams" },
    { ar: "سبعة رجال", en: "Seven men.", mappings: "seven men" }
  ])
}
