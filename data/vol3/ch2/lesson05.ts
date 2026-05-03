import type { LessonData } from '../../curriculum';

export const lesson05: LessonData = {
  darsNumber: 5,
  chunks: [
    {
      id: '1',
      type: 'masdar_factory',
      titleEn: 'TEMPLATE: Lesson 05 masdar factory',
      titleAr: 'مَصْنَع المَصْدَر الدرس ٠٥',
      titleBn: 'টেম্পলেট: পাঠ ০৫ মাসদার ফ্যাক্টরি',
      payload: {
        description: 'Example masdar_factory description',
        descriptionBn: 'উদাহরণ বর্ণনা',
        example: {
          verb: 'كَبُرَ',
          verbBn: 'বড় হওয়া',
          masculine: [{ form: 'كَابِرٌ', meaning: 'One who is big', meaningBn: 'যে বড়' }],
          feminine: [{ form: 'كَابِرَةٌ', meaning: 'One who is big (f)', meaningBn: 'যে বড় (মহিলা)' }],
        },
      },
    },
  ],
};
