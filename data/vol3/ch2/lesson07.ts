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
        questions: [
          { emoji: '📝', question_ar: 'سؤال', question_en: 'Question', question_bn: 'প্রশ্ন', correct_ar: 'جواب', correct_en: 'Answer', correct_bn: 'উত্তর', options_ar: ['جواب'], questionType: 'general' },
        ],
      },
    },
  ],
};
