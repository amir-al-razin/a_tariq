import { useState } from 'react';
import { VocabGrid, type VocabItem } from './shared/VocabGrid';
import { InteractiveDrill, type InteractiveExercise } from './shared/InteractiveDrill';
import { CurriculumHeader } from './shared/CurriculumHeader';
import { CurriculumFooter } from './shared/CurriculumFooter';
import { audioService } from '@/lib/audioService';

// --- VOCABULARY SETS ---
const vocabPeopleAndTraits: VocabItem[] = [
  { id: 1, ar: 'تِلْمِيْذٌ - تِلْمِيْذَةٌ', en: 'A student (m. / f.)', roman: 'tilmeedhun - tilmeedhatun' },
  { id: 2, ar: 'مُعَلِّمٌ - مُعَلِّمَةٌ', en: 'A teacher (m. / f.)', roman: "mu'allimun - mu'allimatun" },
  { id: 3, ar: 'وَلَدٌ - بِنْتٌ', en: 'A boy - A girl', roman: 'waladun - bintun' },
  { id: 4, ar: 'طِفْلٌ - طِفْلَةٌ', en: 'A child (m. / f.)', roman: 'ṭiflun - ṭiflatun' },
  { id: 5, ar: 'مُؤَدَّبٌ - مُؤَدَّبَةٌ', en: 'Polite / Well-mannered', roman: "mu'addabun - mu'addabatun" },
];

const vocabPronouns: VocabItem[] = [
  { id: 101, ar: 'أَنَا', en: 'I (both m. & f.)', roman: 'anā' },
  { id: 102, ar: 'أَنْتَ - أَنْتِ', en: 'You (m. / f.)', roman: 'anta - anti' },
  { id: 103, ar: 'هُوَ - هِيَ', en: 'He - She', roman: 'huwa - hiya' },
];

const vocabQuestionsAndConjunctions: VocabItem[] = [
  { id: 201, ar: 'هَلْ ؟', en: 'Is / Are / Do ? (Question particle)', roman: 'hal' },
  { id: 202, ar: 'نَعَمْ', en: 'Yes', roman: "na'am" },
  { id: 203, ar: 'لَا', en: 'No', roman: 'lā' },
  { id: 204, ar: 'بَلْ', en: 'Rather / But rather', roman: 'bal' },
  { id: 205, ar: 'مَنْ ؟', en: 'Who ?', roman: 'man' },
  { id: 206, ar: 'وَ', en: 'And', roman: 'wa' },
];

const vocabOccupationsAndQualities: VocabItem[] = [
  { id: 301, ar: 'تَاجِرٌ', en: 'A merchant / businessman', roman: 'tājirun' },
  { id: 302, ar: 'فَلَّاحٌ', en: 'A farmer', roman: 'fallāḥun' },
  { id: 303, ar: 'غَنِيٌّ', en: 'Rich', roman: 'ghaniyyun' },
  { id: 304, ar: 'فَقِيْرٌ', en: 'Poor / needy', roman: 'faqīrun' },
  { id: 305, ar: 'ذَكِيٌّ - ذَكِيَّةٌ', en: 'Intelligent / sharp (m. / f.)', roman: 'dhakiyyun - dhakiyyatun' },
  { id: 306, ar: 'غَبِيٌّ - غَبِيَّةٌ', en: 'Foolish / dull (m. / f.)', roman: 'ghabiyyun - ghabiyyatun' },
  { id: 307, ar: 'رَجُلٌ', en: 'A man / adult male', roman: 'rajulun' },
  { id: 308, ar: 'اِمْرَأَةٌ', en: 'A woman / adult female', roman: "imra'atun" },
];

// --- READING & DEMONSTRATION DATA ---
const introExamples = [
  { id: 1, ar: 'أَنَا تِلْمِيْذٌ', en: 'I am a student' },
  { id: 2, ar: 'أَنَا تِلْمِيْذٌ جَدِيْدٌ', en: 'I am a new student' },
];

const introTranslationDrills: InteractiveExercise[] = [
  { id: 1, q: 'أَنَا بِلَالٌ - أَنَا تِلْمِيْذٌ', expected: ['I', 'am', 'Belal', '-', 'I', 'am', 'a', 'student'], chips: ['I', 'am', 'Belal', '-', 'a', 'student', 'teacher', 'new', 'He', 'is'] },
  { id: 2, q: 'أَنَا تِلْمِيْذٌ جَدِيْدٌ - أَنَا وَلَدٌ مُؤَدَّبٌ', expected: ['I', 'am', 'a', 'new', 'student', '-', 'I', 'am', 'a', 'polite', 'boy'], chips: ['I', 'am', 'a', 'new', 'student', '-', 'polite', 'boy', 'girl', 'teacher', 'old'] },
  { id: 3, q: 'أَنَا عَائِشَةُ - أَنَا تِلْمِيْذَةٌ', expected: ['I', 'am', 'Ayesha', '-', 'I', 'am', 'a', 'student'], chips: ['I', 'am', 'Ayesha', '-', 'a', 'student', 'teacher', 'new', 'She', 'He', 'is'] },
  { id: 4, q: 'أَنَا تِلْمِيْذَةٌ جَدِيْدَةٌ - أَنَا بِنْتٌ مُؤَدَّبَةٌ', expected: ['I', 'am', 'a', 'new', 'student', '-', 'I', 'am', 'a', 'polite', 'girl'], chips: ['I', 'am', 'a', 'new', 'student', '-', 'polite', 'girl', 'boy', 'teacher', 'old', 'She'] },
  { id: 5, q: 'هُوَ بِلَالٌ - هُوَ تِلْمِيْذٌ', expected: ['He', 'is', 'Belal', '-', 'He', 'is', 'a', 'student'], chips: ['He', 'is', 'Belal', '-', 'a', 'student', 'teacher', 'I', 'am', 'She', 'new'] },
  { id: 6, q: 'هُوَ تِلْمِيْذٌ جَدِيْدٌ - هُوَ وَلَدٌ مُؤَدَّبٌ', expected: ['He', 'is', 'a', 'new', 'student', '-', 'He', 'is', 'a', 'polite', 'boy'], chips: ['He', 'is', 'a', 'new', 'student', '-', 'polite', 'boy', 'girl', 'teacher', 'old', 'She'] },
  { id: 7, q: 'هِيَ عَائِشَةُ - هِيَ تِلْمِيْذَةٌ', expected: ['She', 'is', 'Ayesha', '-', 'She', 'is', 'a', 'student'], chips: ['She', 'is', 'Ayesha', '-', 'a', 'student', 'teacher', 'He', 'I', 'am', 'new'] },
  { id: 8, q: 'هِيَ تِلْمِيْذَةٌ جَدِيْدَةٌ - هِيَ بِنْتٌ مُؤَدَّبَةٌ', expected: ['She', 'is', 'a', 'new', 'student', '-', 'She', 'is', 'a', 'polite', 'girl'], chips: ['She', 'is', 'a', 'new', 'student', '-', 'polite', 'girl', 'boy', 'teacher', 'He', 'old'] },
];

// --- INTERACTIVE EXERCISES ---
const descriptivePractice: InteractiveExercise[] = [
  { id: 1, q: 'بِلَالٌ تِلْمِيْذٌ جَدِيْدٌ', expected: ['Belal', 'is', 'a', 'new', 'student'], chips: ['Belal', 'is', 'a', 'new', 'student', 'teacher', 'good'] },
  { id: 2, q: 'مَاجِدٌ مُعَلِّمٌ جَيِّدٌ', expected: ['Majid', 'is', 'a', 'good', 'teacher'], chips: ['Majid', 'is', 'a', 'good', 'teacher', 'student', 'small'] },
  { id: 3, q: 'زَيْنَبُ بِنْتٌ صَغِيْرَةٌ', expected: ['Zaynab', 'is', 'a', 'small', 'girl'], chips: ['Zaynab', 'is', 'a', 'small', 'girl', 'boy', 'polite'] },
  { id: 4, q: 'فَرْحَانَةُ مُعَلِّمَةٌ جَدِيْدَةٌ', expected: ['Farhana', 'is', 'a', 'new', 'teacher'], chips: ['Farhana', 'is', 'a', 'new', 'teacher', 'old', 'girl'] },
  { id: 5, q: 'مَحْمُوْدٌ طِفْلٌ جَمِيْلٌ', expected: ['Mahmud', 'is', 'a', 'beautiful', 'child'], chips: ['Mahmud', 'is', 'a', 'beautiful', 'child', 'girl', 'teacher'] },
  { id: 6, q: 'فَاطِمَةُ طِفْلَةٌ جَمِيْلَةٌ', expected: ['Fatema', 'is', 'a', 'beautiful', 'child'], chips: ['Fatema', 'is', 'a', 'beautiful', 'child', 'boy', 'new'] },
  { id: 7, q: 'خَالِدٌ وَلَدٌ مُؤَدَّبٌ', expected: ['Khaled', 'is', 'a', 'polite', 'boy'], chips: ['Khaled', 'is', 'a', 'polite', 'boy', 'girl', 'teacher'] },
  { id: 8, q: 'خَدِيْجَةُ بِنْتٌ مُؤَدَّبَةٌ', expected: ['Khadijah', 'is', 'a', 'polite', 'girl'], chips: ['Khadijah', 'is', 'a', 'polite', 'girl', 'boy', 'student'] },
];

const qaDirectDrills: InteractiveExercise[] = [
  { id: 1, q: 'هَلْ أَنْتَ تِلْمِيْذٌ ؟ نَعَمْ، أَنَا تِلْمِيْذٌ.', expected: ['Are', 'you', 'a', 'student?', 'Yes,', 'I', 'am', 'a', 'student'], chips: ['Are', 'you', 'a', 'student?', 'Yes,', 'I', 'am', 'teacher', 'No,', 'he', 'is'] },
  { id: 2, q: 'هَلْ أَنْتَ تِلْمِيْذٌ جَدِيْدٌ ؟ نَعَمْ، أَنَا تِلْمِيْذٌ جَدِيْدٌ.', expected: ['Are', 'you', 'a', 'new', 'student?', 'Yes,', 'I', 'am', 'a', 'new', 'student'], chips: ['Are', 'you', 'a', 'new', 'student?', 'Yes,', 'I', 'am', 'old', 'teacher', 'No,', 'he'] },
  { id: 3, q: 'مَنْ أَنْتِ يَا بِنْتُ ؟ أَنَا زَيْنَبُ.', expected: ['Who', 'are', 'you,', 'O', 'girl?', 'I', 'am', 'Zaynab'], chips: ['Who', 'are', 'you,', 'O', 'girl?', 'boy?', 'I', 'am', 'Zaynab', 'Ayesha', 'He', 'is'] },
  { id: 4, q: 'هَلْ أَنْتِ بِنْتٌ صَغِيْرَةٌ ؟ نَعَمْ، أَنَا بِنْتٌ صَغِيْرَةٌ.', expected: ['Are', 'you', 'a', 'small', 'girl?', 'Yes,', 'I', 'am', 'a', 'small', 'girl'], chips: ['Are', 'you', 'a', 'small', 'girl?', 'big', 'Yes,', 'I', 'am', 'No,', 'she', 'boy'] },
  { id: 5, q: 'هَلْ أَنْتِ مُعَلِّمَةٌ ؟ لَا، بَلْ أَنَا تِلْمِيْذَةٌ.', expected: ['Are', 'you', 'a', 'teacher?', 'No,', 'rather', 'I', 'am', 'a', 'student'], chips: ['Are', 'you', 'a', 'teacher?', 'No,', 'rather', 'I', 'am', 'a', 'student', 'Yes,', 'boy', 'she'] },
];

const qaThirdPersonDrills: InteractiveExercise[] = [
  { id: 1, q: 'مَنْ هُوَ يَا بِلَالُ ؟ هُوَ رَاشِدٌ.', expected: ['Who', 'is', 'he,', 'O', 'Belal?', 'He', 'is', 'Rashed'], chips: ['Who', 'is', 'he,', 'O', 'Belal?', 'she,', 'He', 'is', 'Rashed', 'Zaynab', 'I', 'am'] },
  { id: 2, q: 'هَلْ هُوَ مُعَلِّمٌ ؟ لَا، بَلْ هُوَ تِلْمِيْذٌ.', expected: ['Is', 'he', 'a', 'teacher?', 'No,', 'rather', 'he', 'is', 'a', 'student'], chips: ['Is', 'he', 'a', 'teacher?', 'No,', 'rather', 'she', 'he', 'is', 'student', 'Yes,', 'farmer'] },
  { id: 3, q: 'مَنْ هِيَ يَا زَيْنَبُ ؟ هِيَ خَدِيْجَةُ، هِيَ تِلْمِيْذَةٌ جَدِيْدَةٌ.', expected: ['Who', 'is', 'she,', 'O', 'Zaynab?', 'She', 'is', 'Khadijah,', 'she', 'is', 'a', 'new', 'student'], chips: ['Who', 'is', 'she,', 'O', 'Zaynab?', 'Belal?', 'She', 'He', 'is', 'Khadijah,', 'she', 'a', 'new', 'student', 'old'] },
  { id: 4, q: 'مَنْ أَنَا ؟ أَنْتَ مَاجِدٌ، أَنْتَ مُعَلِّمٌ جَيِّدٌ.', expected: ['Who', 'am', 'I?', 'You', 'are', 'Majid,', 'you', 'are', 'a', 'good', 'teacher'], chips: ['Who', 'am', 'I?', 'You', 'are', 'Majid,', 'you', 'a', 'good', 'teacher', 'he', 'is', 'student'] },
  { id: 5, q: 'مَنْ مَاجِدٌ ؟ مَاجِدٌ مُعَلِّمٌ.', expected: ['Who', 'is', 'Majid?', 'Majid', 'is', 'a', 'teacher'], chips: ['Who', 'is', 'Majid?', 'Majid', 'a', 'teacher', 'student', 'farmer', 'Belal?', 'he'] },
  { id: 6, q: 'هَلْ هُوَ مُعَلِّمٌ جَيِّدٌ ؟ نَعَمْ، هُوَ مُعَلِّمٌ جَيِّدٌ.', expected: ['Is', 'he', 'a', 'good', 'teacher?', 'Yes', 'he', 'is', 'a', 'good', 'teacher'], chips: ['Is', 'he', 'a', 'good', 'teacher?', 'Yes', 'she', 'is', 'No,', 'bad', 'student'] },
  { id: 7, q: 'هَلْ زَيْنَبُ بِنْتٌ كَبِيْرَةٌ ؟ لَا، بَلْ هِيَ بِنْتٌ صَغِيْرَةٌ.', expected: ['Is', 'Zaynab', 'a', 'big', 'girl?', 'No,', 'rather', 'she', 'is', 'a', 'small', 'girl'], chips: ['Is', 'Zaynab', 'a', 'big', 'girl?', 'boy?', 'No,', 'rather', 'she', 'he', 'is', 'small', 'Yes,'] },
  { id: 8, q: 'هَلْ فَرْحَانَةُ مُعَلِّمَةٌ جَدِيْدَةٌ ؟ نَعَمْ، هِيَ مُعَلِّمَةٌ جَدِيْدَةٌ.', expected: ['Is', 'Farhana', 'a', 'new', 'teacher?', 'Yes', 'she', 'is', 'a', 'new', 'teacher'], chips: ['Is', 'Farhana', 'a', 'new', 'teacher?', 'student?', 'Yes', 'she', 'he', 'is', 'teacher', 'No,', 'old'] },
  { id: 9, q: 'هَلْ خَالِدٌ وَلَدٌ مُؤَدَّبٌ ؟ نَعَمْ، هُوَ وَلَدٌ مُؤَدَّبٌ.', expected: ['Is', 'Khaled', 'a', 'polite', 'boy?', 'Yes', 'he', 'is', 'a', 'polite', 'boy'], chips: ['Is', 'Khaled', 'a', 'polite', 'boy?', 'girl?', 'Yes', 'he', 'she', 'is', 'boy', 'No,', 'teacher'] },
];

const readingPart1: InteractiveExercise[] = [
  { id: 1, q: 'أَنَا مَاجِدٌ وَ أَنْتَ بِلَالٌ', expected: ['I', 'am', 'Majid', 'and', 'you', 'are', 'Belal'], chips: ['I', 'am', 'Majid', 'and', 'you', 'are', 'Belal', 'He', 'is'] },
  { id: 2, q: 'أَنَا مُعَلِّمٌ وَ أَنْتَ تِلْمِيْذٌ', expected: ['I', 'am', 'a', 'teacher', 'and', 'you', 'are', 'a', 'student'], chips: ['I', 'am', 'a', 'teacher', 'and', 'you', 'are', 'a', 'student', 'farmer', 'merchant'] },
  { id: 3, q: 'أَنَا مُعَلِّمٌ جَدِيْدٌ وَ أَنْتَ تِلْمِيْذٌ جَدِيْدٌ', expected: ['I', 'am', 'a', 'new', 'teacher', 'and', 'you', 'are', 'a', 'new', 'student'], chips: ['I', 'am', 'a', 'new', 'teacher', 'and', 'you', 'are', 'a', 'new', 'student', 'old', 'good'] },
  { id: 4, q: 'هُوَ مَحْمُوْدٌ وَ أَنَا بَشِيْرٌ', expected: ['He', 'is', 'Mahmud', 'and', 'I', 'am', 'Bashir'], chips: ['He', 'is', 'Mahmud', 'and', 'I', 'am', 'Bashir', 'She', 'you'] },
  { id: 5, q: 'مَحْمُوْدٌ تَاجِرٌ غَنِيٌّ وَ أَنَا فَلَّاحٌ فَقِيْرٌ', expected: ['Mahmud', 'is', 'a', 'rich', 'merchant', 'and', 'I', 'am', 'a', 'poor', 'farmer'], chips: ['Mahmud', 'is', 'a', 'rich', 'merchant', 'and', 'I', 'am', 'a', 'poor', 'farmer', 'teacher'] },
  { id: 6, q: 'هُوَ بِلَالٌ وَ هِيَ زَيْنَبُ', expected: ['He', 'is', 'Belal', 'and', 'she', 'is', 'Zaynab'], chips: ['He', 'is', 'Belal', 'and', 'she', 'is', 'Zaynab', 'I', 'am'] },
  { id: 7, q: 'بِلَالٌ تِلْمِيْذٌ ذَكِيٌّ وَ زَيْنَبُ تِلْمِيْذَةٌ ذَكِيَّةٌ', expected: ['Belal', 'is', 'an', 'intelligent', 'student', 'and', 'Zaynab', 'is', 'an', 'intelligent', 'student'], chips: ['Belal', 'is', 'an', 'intelligent', 'student', 'and', 'Zaynab', 'is', 'an', 'intelligent', 'student', 'foolish', 'teacher'] },
  { id: 8, q: 'مَحْمُوْدٌ رَجُلٌ غَنِيٌّ وَ رَيْحَانَةُ امْرَأَةٌ فَقِيْرَةٌ', expected: ['Mahmud', 'is', 'a', 'rich', 'man', 'and', 'Rayhana', 'is', 'a', 'poor', 'woman'], chips: ['Mahmud', 'is', 'a', 'rich', 'man', 'and', 'Rayhana', 'is', 'a', 'poor', 'woman', 'farmer'] },
];

const readingPart2: InteractiveExercise[] = [
  { id: 1, q: 'هَلْ مَحْمُوْدٌ تَاجِرٌ ؟ نَعَمْ .. مَحْمُوْدٌ تَاجِرٌ', expected: ['Is', 'Mahmud', 'a', 'merchant', 'Yes', 'Mahmud', 'is', 'a', 'merchant'], chips: ['Is', 'Mahmud', 'a', 'merchant', 'Yes', 'Mahmud', 'is', 'a', 'merchant', 'No', 'farmer'] },
  { id: 2, q: 'هَلْ زَيْنَبُ تِلْمِيْذَةٌ غَبِيَّةٌ ؟ لَا .. بَلْ هِيَ تِلْمِيْذَةٌ ذَكِيَّةٌ جِدًّا', expected: ['Is', 'Zaynab', 'a', 'foolish', 'student', 'No', 'rather', 'she', 'is', 'a', 'very', 'intelligent', 'student'], chips: ['Is', 'Zaynab', 'a', 'foolish', 'student', 'No', 'rather', 'she', 'is', 'a', 'very', 'intelligent', 'student', 'Yes'] },
  { id: 3, q: 'أَنْتِ امْرَأَةٌ ذَكِيَّةٌ جِدًّا', expected: ['You', 'are', 'a', 'very', 'intelligent', 'woman'], chips: ['You', 'are', 'a', 'very', 'intelligent', 'woman', 'man', 'rich', 'She', 'is'] },
  { id: 4, q: 'عَائِشَةُ امْرَأَةٌ ذَكِيَّةٌ جِدًّا', expected: ['Ayesha', 'is', 'a', 'very', 'intelligent', 'woman'], chips: ['Ayesha', 'is', 'a', 'very', 'intelligent', 'woman', 'girl', 'poor', 'student'] },
  { id: 5, q: 'سَعِيْدٌ رَجُلٌ شَرِيْفٌ جِدًّا', expected: ['Saeed', 'is', 'a', 'very', 'noble', 'man'], chips: ['Saeed', 'is', 'a', 'very', 'noble', 'man', 'rich', 'poor', 'teacher', 'merchant'] },
  { id: 6, q: 'هُوَ غَنِيٌّ جِدًّا', expected: ['He', 'is', 'very', 'rich'], chips: ['He', 'is', 'very', 'rich', 'poor', 'noble', 'She', 'man'] },
];

const STEPS = [
  { id: 'vocab_people', title: 'People & Traits' },
  { id: 'vocab_pronouns', title: 'Pronouns' },
  { id: 'grammar_tanween', title: 'Tanween on Names' },
  { id: 'intro_examples', title: 'Introduction Pattern' },
  { id: 'intro_translation', title: 'Introduction Practice' },
  { id: 'practice_descriptives', title: 'Descriptive Sentences' },
  { id: 'vocab_questions', title: 'Questions & Conjunctions' },
  { id: 'grammar_vocative', title: 'Vocative Particle (Ya)' },
  { id: 'qa_direct_examples', title: 'Direct Q&A Examples' },
  { id: 'qa_direct', title: 'Direct Q&A Translation' },
  { id: 'qa_third_person', title: 'Third Person Q&A Translation' },
  { id: 'vocab_occupations', title: 'Occupations & Qualities' },
  { id: 'grammar_imraatun', title: "Alif in Imra'atun" },
  { id: 'reading_comp_1', title: 'Reading Pairs' },
  { id: 'reading_comp_2', title: 'Questions & Intensifiers' },
];

export function EshoArbiShikhiVol1Lesson3Engine() {
  const [currentStep, setCurrentStep] = useState(0);
  const audioEnabled = true;

  const handleNextStep = () => {
    if (currentStep < STEPS.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleGoToStep = (idx: number) => {
    setCurrentStep(idx);
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 flex flex-col justify-between p-3 md:p-6 transition-colors">
      
      {/* HEADER */}
      <CurriculumHeader 
        volume={1}
        lesson={3}
        steps={STEPS}
        currentStep={currentStep}
      />

      {/* MAIN CANVAS */}
      <main className="max-w-4xl w-full mx-auto flex-1 flex flex-col justify-center mb-6">
        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 sm:p-8 min-h-[540px] flex flex-col justify-between transition-colors relative">
          
          <div className="w-full flex-1 flex flex-col justify-center">

            {/* STEP 0: Vocabulary - People & Traits */}
            {currentStep === 0 && (
              <VocabGrid items={vocabPeopleAndTraits} audioEnabled={audioEnabled} />
            )}

            {/* STEP 1: Vocabulary - Pronouns */}
            {currentStep === 1 && (
              <VocabGrid items={vocabPronouns} audioEnabled={audioEnabled} />
            )}

            {/* STEP 2: Grammar - Tanween on Proper Names */}
            {currentStep === 2 && (
              <div className="bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 rounded-3xl space-y-6">
                <div className="bg-white dark:bg-neutral-800 p-5 rounded-2xl border border-neutral-200/60 dark:border-neutral-700/60">
                  <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 font-medium text-center leading-relaxed">
                    Usually, masculine proper names take <span className="font-bold">Tanween</span> (double vowel ending), whereas feminine proper names <span className="font-bold">do not take Tanween</span>.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" dir="rtl">
                  <div className="space-y-3">
                    <div className="text-center font-bold text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 pb-1" dir="ltr">
                      Masculine Names (With Tanween)
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {['مَحْمُوْدٌ', 'رَاشِدٌ', 'خَالِدٌ', 'سَعِيْدٌ'].map((name) => (
                        <div
                          key={name}
                          onClick={() => audioService.speakArabic(name, audioEnabled)}
                          className="bg-white dark:bg-neutral-800 p-4 rounded-2xl text-center cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700/50 active:scale-95 transition-all flex flex-col justify-center items-center h-24"
                        >
                          <span className="font-arabic text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">{name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-center font-bold text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 pb-1" dir="ltr">
                      Feminine Names (No Tanween)
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {['خَدِيْجَةُ', 'فَرْحَانَةُ', 'فَاطِمَةُ', 'عَائِشَةُ'].map((name) => (
                        <div
                          key={name}
                          onClick={() => audioService.speakArabic(name, audioEnabled)}
                          className="bg-white dark:bg-neutral-800 p-4 rounded-2xl text-center cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700/50 active:scale-95 transition-all flex flex-col justify-center items-center h-24"
                        >
                          <span className="font-arabic text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">{name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Demonstration - Introduction Pattern Examples */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 rounded-3xl space-y-6">
                  <div className="bg-white dark:bg-neutral-800 p-5 rounded-2xl border border-neutral-200/60 dark:border-neutral-700/60 text-center">
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                      Introduction Pattern Examples
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                      Study these introductory sentences from the book before translating similar patterns in the next step.
                    </p>
                  </div>
                  <div className="space-y-4">
                    {introExamples.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => audioService.speakArabic(item.ar, audioEnabled)}
                        className="bg-white dark:bg-neutral-800 p-5 rounded-3xl cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-all active:scale-[0.99]"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6" dir="rtl">
                          <div className="font-arabic text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 leading-relaxed flex-1">
                            {item.ar}
                          </div>
                          <div className="text-sm sm:text-base font-semibold text-neutral-600 dark:text-neutral-400 shrink-0" dir="ltr">
                            {item.en}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: Interactive Translation - Self & Peer Introductions */}
            {currentStep === 4 && (
              <InteractiveDrill exercises={introTranslationDrills} onComplete={handleNextStep} audioEnabled={audioEnabled} />
            )}

            {/* STEP 5: Interactive Practice - Descriptive Sentences */}
            {currentStep === 5 && (
              <InteractiveDrill exercises={descriptivePractice} onComplete={handleNextStep} audioEnabled={audioEnabled} />
            )}

            {/* STEP 6: Vocabulary - Questions & Conjunctions */}
            {currentStep === 6 && (
              <VocabGrid items={vocabQuestionsAndConjunctions} audioEnabled={audioEnabled} />
            )}

            {/* STEP 7: Grammar - Vocative Particle (Ya) */}
            {currentStep === 7 && (
              <div className="bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 rounded-3xl space-y-6">
                <div className="bg-white dark:bg-neutral-800 p-5 rounded-2xl border border-neutral-200/60 dark:border-neutral-700/60">
                  <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 font-medium text-center leading-relaxed">
                    When addressing someone with the vocative particle <span className="font-arabic font-bold text-lg px-1">يَا</span> (O / Hey), the noun drops its Tanween and ends with a single damma.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" dir="rtl">
                  {[
                    { orig: 'وَلَدٌ', voc: 'يَا وَلَدُ !', en: 'O boy!' },
                    { orig: 'بِنْتٌ', voc: 'يَا بِنْتُ !', en: 'O girl!' },
                    { orig: 'بِلَالٌ', voc: 'يَا بِلَالُ !', en: 'O Belal!' },
                    { orig: 'زَيْنَبُ', voc: 'يَا زَيْنَبُ !', en: 'O Zaynab!' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => audioService.speakArabic(item.voc, audioEnabled)}
                      className="bg-white dark:bg-neutral-800 p-5 rounded-2xl cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700/50 active:scale-95 transition-all flex flex-col justify-between items-center text-center"
                    >
                      <div className="flex items-center justify-center gap-3 w-full my-2">
                        <span className="font-arabic text-xl sm:text-2xl text-neutral-400 dark:text-neutral-500">{item.orig}</span>
                        <span className="text-neutral-300 dark:text-neutral-600 font-mono">←</span>
                        <span className="font-arabic text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">{item.voc}</span>
                      </div>
                      <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 mt-2 block" dir="ltr">
                        {item.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 8: Demonstration - Direct Q&A Examples */}
            {currentStep === 8 && (
              <div className="bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 rounded-3xl space-y-6">
                <div className="bg-white dark:bg-neutral-800 p-5 rounded-2xl border border-neutral-200/60 dark:border-neutral-700/60 text-center">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                    Read the questions and answers below and say the meaning
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                    Familiarize yourself with these example dialogues from the book before translating similar conversations in the next step.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" dir="rtl">
                  {[
                    { q_ar: 'هَلْ أَنْتَ مُعَلِّمٌ ؟', a_ar: 'لَا، بَلْ أَنَا تِلْمِيْذٌ.', en: 'Are you a teacher? - No, rather I am a student.' },
                    { q_ar: 'مَنْ أَنْتَ يَا وَلَدُ ؟', a_ar: 'أَنَا بِلَالٌ.', en: 'Who are you, O boy? - I am Belal.' },
                  ].map((example, idx) => (
                    <div
                      key={idx}
                      onClick={() => audioService.speakArabic(`${example.q_ar} ${example.a_ar}`, audioEnabled)}
                      className="bg-white dark:bg-neutral-800 p-5 rounded-3xl cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700/50 active:scale-[0.99] transition-all flex flex-col justify-center items-center text-center space-y-2"
                    >
                      <span className="font-arabic text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 leading-relaxed">
                        {example.q_ar}
                      </span>
                      <span className="font-arabic text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400 leading-relaxed">
                        {example.a_ar}
                      </span>
                      <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 block pt-1" dir="ltr">
                        {example.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 9: Interactive Q&A - Direct Dialogue Translation */}
            {currentStep === 9 && (
              <InteractiveDrill exercises={qaDirectDrills} onComplete={handleNextStep} audioEnabled={audioEnabled} />
            )}

            {/* STEP 10: Interactive Q&A - Third Person Dialogue Translation */}
            {currentStep === 10 && (
              <InteractiveDrill exercises={qaThirdPersonDrills} onComplete={handleNextStep} audioEnabled={audioEnabled} />
            )}

            {/* STEP 11: Vocabulary - Occupations & Qualities */}
            {currentStep === 11 && (
              <VocabGrid items={vocabOccupationsAndQualities} audioEnabled={audioEnabled} />
            )}

            {/* STEP 12: Grammar - Alif in Imra'atun */}
            {currentStep === 12 && (
              <div className="bg-neutral-100 dark:bg-neutral-900 p-6 sm:p-8 rounded-3xl space-y-6">
                <div className="bg-white dark:bg-neutral-800 p-5 rounded-2xl border border-neutral-200/60 dark:border-neutral-700/60">
                  <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 font-medium text-center leading-relaxed">
                    When another word precedes <span className="font-arabic font-bold text-lg px-1">اِمْرَأَةٌ</span> (imra&apos;atun), the initial Alif (ا) is written but omitted during pronunciation.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" dir="rtl">
                  {[
                    { ar: 'اِمْرَأَةٌ', pron: "imra'atun", en: 'A woman (Alif pronounced at start)' },
                    { ar: 'هِيَ امْرَأَةٌ', pron: "hiya mra'atun", en: 'She is a woman (Alif silent after hiya)' },
                    { ar: 'رَيْحَانَةُ امْرَأَةٌ فَقِيْرَةٌ', pron: "Rayḥānatu mra'atun faqīratun", en: 'Rayhana is a poor woman' },
                    { ar: 'عَائِشَةُ امْرَأَةٌ ذَكِيَّةٌ', pron: "'Ā'ishatu mra'atun dhakiyyatun", en: 'Ayesha is an intelligent woman' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => audioService.speakArabic(item.ar, audioEnabled)}
                      className="bg-white dark:bg-neutral-800 p-5 rounded-3xl cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700/50 active:scale-[0.99] transition-all flex flex-col items-center justify-center text-center space-y-2"
                    >
                      <span className="font-arabic text-xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 block leading-tight py-1">
                        {item.ar}
                      </span>
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold block mt-1" dir="ltr">
                        {item.pron}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300 block mt-1" dir="ltr">
                        {item.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 13: Reading - Extended Paragraphs Part 1 */}
            {currentStep === 13 && (
              <InteractiveDrill exercises={readingPart1} onComplete={handleNextStep} audioEnabled={audioEnabled} />
            )}

            {/* STEP 14: Reading - Extended Paragraphs Part 2 */}
            {currentStep === 14 && (
              <InteractiveDrill exercises={readingPart2} onComplete={handleNextStep} audioEnabled={audioEnabled} />
            )}

          </div>

          {/* FOOTER STAGE NAVIGATION */}
          <CurriculumFooter
            steps={STEPS}
            currentStep={currentStep}
            onPrev={handlePrevStep}
            onNext={handleNextStep}
            onGoToStep={handleGoToStep}
          />

        </div>
      </main>
    </div>
  );
}
