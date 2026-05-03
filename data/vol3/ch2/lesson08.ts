import type { LessonData } from '../../curriculum';

export const lesson08: LessonData = {
  darsNumber: 8,
  chunks: [
    {
      id: '1',
      type: 'q_and_a',
      titleEn: 'TEMPLATE: Lesson 08 Q&A',
      titleAr: 'الأسئلة الدرس ٠٨',
      titleBn: 'টেম্পলেট: পাঠ ০৮ প্রশ্নোত্তর',
      payload: {
        instruction: 'Answer the questions',
        instructionBn: 'প্রশ্নগুলোর উত্তর দিন',
        questions: [
          {
            emoji: '❓',
            question_ar: 'سؤال مثال',
            question_en: 'Example question',
            question_bn: 'উদাহরণ প্রশ্ন',
            correct_ar: 'اجابة',
            correct_en: 'Answer',
            correct_bn: 'উত্তর',
            options_ar: ['خيار1', 'خيار2'],
            questionType: 'general',
          },
        ],
      },
    },
  ],
};
