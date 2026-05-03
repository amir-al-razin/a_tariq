import type { LessonData } from '../../curriculum';

export const lesson07: LessonData = {
  darsNumber: 7,
  chunks: [
    {
      id: '1',
      type: 'assessment',
      titleEn: 'TEMPLATE: Lesson 07 assessment',
      titleAr: 'تَقْيِيم الدرس ٠٧',
      titleBn: 'টেম্পলেট: পাঠ ০৭ মূল্যায়ন',
      payload: {
        instruction: 'Complete the assessment items',
        instructionBn: 'মূল্যায়ন আইটেমগুলি পূরণ করুন',
        items: [
          { itemNumber: 1, content: 'Example item', contentBn: 'উদাহরণ আইটেম', englishTranslation: 'Example', explanationBn: 'ব্যাখ্যা' },
        ],
      },
    },
  ],
};
