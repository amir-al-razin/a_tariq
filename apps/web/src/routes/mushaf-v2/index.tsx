import React, { useState, useEffect } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useLanguageContent } from '../../hooks/useLanguageContent';
import ThemeToggle from '../../components/ThemeToggle';
import FontToggle from '../../components/FontToggle';
import { TarkeebView, VocabularyView } from '../../components/pedagogy-v2';
import * as m from '#/paraglide/messages.js';
import {
  BookOpen,
  Sparkles,
  Type,
  Layers,
  X,
  Eye,
  EyeOff,
  Bookmark,
  Share2,
  Volume2,
  GraduationCap,
  MessageSquare,
  HelpCircle,
  Copy,
  MoreHorizontal
} from 'lucide-react';

export const Route = createFileRoute('/mushaf-v2/')({
  component: MushafV2Page,
});

type TierType = 'tier1' | 'tier2' | 'tier3';

interface QuranWord {
  id: string;
  arabic: string;
  romanized: string;
  en: string;
  bn: string;
  tier: TierType;
  tarkeebData?: {
    tarkeeb: any[];
    instruction?: string;
  };
  vocabData?: {
    words: {
      id: number;
      ar: string;
      romanized: string;
      en: string;
      bn?: string;
      emoji?: string;
    }[];
  };
}

interface QuranVerse {
  ayahNumber: number;
  verseKey: string;
  words: QuranWord[];
  translationEn: string;
  translationBn: string;
}

interface SurahData {
  number: number;
  nameEn: string;
  nameBn: string;
  arabicTitle: string;
  surahGlyph: string;
  revelationType: 'meccan' | 'madini';
  totalVerses: number;
  featuredVersesText: string;
  featuredVersesTextBn: string;
  juz: number;
  pageNumber: number;
  hasBismillahHeader: boolean;
  verses: QuranVerse[];
}

// Authentic Quran.com word-by-word structural data with 3-Tier Comprehension Injection
const SURAH_AL_FATIHAH: SurahData = {
  number: 1,
  nameEn: 'Al-Fatihah (The Opener)',
  nameBn: 'আল-ফাতিহা (সূচনা)',
  arabicTitle: 'سُورَةُ الْفَاتِحَةِ',
  surahGlyph: '001',
  revelationType: 'meccan',
  totalVerses: 7,
  featuredVersesText: '7 Verses (Complete)',
  featuredVersesTextBn: '৭ আয়াত (সম্পূর্ণ)',
  juz: 1,
  pageNumber: 1,
  hasBismillahHeader: false, // In Al-Fatihah, Bismillah is verse 1
  verses: [
    {
      ayahNumber: 1,
      verseKey: '1:1',
      translationEn: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
      translationBn: 'পরম করুণাময় অশেষ ദয়াবান আল্লাহর নামে।',
      words: [
        {
          id: '1:1:1',
          arabic: 'بِسْمِ',
          romanized: 'bis-mi',
          en: 'In the name of',
          bn: 'নামে / শুরু করছি',
          tier: 'tier2',
          vocabData: {
            words: [
              { id: 1, ar: 'اِسْمٌ ج أَسْمَاءٌ (بِسْمِ)', romanized: 'ism pl. asmāʾ', en: 'Name / Identifier', bn: 'নাম / বিশেষ্য', emoji: '🏷️' },
              { id: 2, ar: 'بِـ (حرف جر)', romanized: 'bi (preposition)', en: 'In / With / By', bn: 'দারা / সাথে / মধ্যে', emoji: '🔗' },
            ],
          },
        },
        {
          id: '1:1:2',
          arabic: 'اللَّهِ',
          romanized: 'al-lā-hi',
          en: 'Allah',
          bn: 'আল্লাহর',
          tier: 'tier2',
          vocabData: {
            words: [
              { id: 3, ar: 'اللَّهُ', romanized: 'Allāh', en: 'Allah / The One True God', bn: 'আল্লাহ / একমাত্র প্রকৃত উপাস্য', emoji: '🕋' },
            ],
          },
        },
        {
          id: '1:1:3',
          arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
          romanized: 'ar-raḥ-mā-ni r-raḥīm',
          en: 'the Entirely Merciful, the Especially Merciful',
          bn: 'পরম করুণাময়, অশেষ দয়াবান',
          tier: 'tier1',
          tarkeebData: {
            instruction: 'Grammatical analysis of divine attributes',
            tarkeeb: [
              {
                type: 'incomplete',
                text: 'اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                label: 'صفة وموصوف (Sifah + Mawsuf)',
                labelEn: 'Adjective + Noun Phrase',
                children: [
                  { text: 'اللَّهِ', label: 'موصوف (Mawsuf)', labelEn: 'Described Noun' },
                  { text: 'الرَّحْمَٰنِ', label: 'صفة أولى (Sifah 1)', labelEn: 'First Adjective (Intense Mercy)' },
                  { text: 'الرَّحِيمِ', label: 'صفة ثانية (Sifah 2)', labelEn: 'Second Adjective (Continuous Mercy)' },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      ayahNumber: 2,
      verseKey: '1:2',
      translationEn: '[All] praise is [due] to Allah, Lord of the worlds.',
      translationBn: 'সমস্ত প্রশংসা বিশ্বজগতের রব আল্লাহর জন্য।',
      words: [
        {
          id: '1:2:1',
          arabic: 'الْحَمْدُ لِلَّهِ',
          romanized: 'al-ḥam-du lil-lā-hi',
          en: '[All] praise is [due] to Allah',
          bn: 'সমস্ত প্রশংসা আল্লাহর জন্য',
          tier: 'tier1',
          tarkeebData: {
            instruction: 'The quintessential nominal sentence of praise',
            tarkeeb: [
              {
                type: 'complete',
                text: 'الْحَمْدُ لِلَّهِ',
                label: 'جملة اسمية (Nominal Sentence)',
                labelEn: 'Complete Nominal Sentence',
                children: [
                  { text: 'الْحَمْدُ', label: 'مبتدأ مرفوع (Mubtada)', labelEn: 'Subject (Nominative Case)' },
                  { text: 'لِلَّهِ', label: 'جار ومجرور - خبر (Khabar)', labelEn: 'Preposition + Noun - Predicate' },
                ],
              },
            ],
          },
        },
        {
          id: '1:2:2',
          arabic: 'رَبِّ',
          romanized: 'rab-bi',
          en: 'Lord',
          bn: 'রব / প্রতিপালક',
          tier: 'tier2',
          vocabData: {
            words: [
              { id: 4, ar: 'رَبٌّ ج أَرْبَابٌ', romanized: 'rabb pl. arbāb', en: 'Lord / Nurturer / Sustainer', bn: 'রব / প্রতিপালক / প্রভু', emoji: '🌱' },
            ],
          },
        },
        {
          id: '1:2:3',
          arabic: 'الْعَالَمِينَ',
          romanized: 'l-ʿā-la-mīn',
          en: 'of the worlds',
          bn: 'বিশ্বজগতের',
          tier: 'tier2',
          vocabData: {
            words: [
              { id: 5, ar: 'عَالَمٌ ج عَالَمُونَ / عَالَمِينَ', romanized: 'ʿālam pl. ʿālamīn', en: 'World / Universe / Created beings', bn: 'বিশ্বজগৎ / জগৎসমূহ', emoji: '🌍' },
            ],
          },
        },
      ],
    },
    {
      ayahNumber: 3,
      verseKey: '1:3',
      translationEn: 'The Entirely Merciful, the Especially Merciful,',
      translationBn: 'যিনি পরম করুণাময় ও অশেষ দয়াবান,',
      words: [
        {
          id: '1:3:1',
          arabic: 'الرَّحْمَٰنِ',
          romanized: 'ar-raḥ-mā-ni',
          en: 'The Entirely Merciful',
          bn: 'পরম করুণাময়',
          tier: 'tier2',
          vocabData: {
            words: [
              { id: 6, ar: 'رَحْمَٰنٌ (رَحِمَ)', romanized: 'Raḥmān', en: 'Entirely Merciful (Intense, encompassing mercy)', bn: 'পরম করুণাময় (ব্যাপক রহমত)', emoji: '❤️' },
            ],
          },
        },
        {
          id: '1:3:2',
          arabic: 'الرَّحِيمِ',
          romanized: 'ar-raḥ-ī-mi',
          en: 'The Especially Merciful',
          bn: 'অশেষ দয়াবান',
          tier: 'tier2',
          vocabData: {
            words: [
              { id: 7, ar: 'رَحِيمٌ (رَحِمَ)', romanized: 'Raḥīm', en: 'Especially Merciful (Constant, lasting mercy)', bn: 'অশেষ দয়াবান (স্থায়ী রহমত)', emoji: '💖' },
            ],
          },
        },
      ],
    },
    {
      ayahNumber: 4,
      verseKey: '1:4',
      translationEn: 'Sovereign of the Day of Recompense.',
      translationBn: 'বিচার দিবসের মালিক ও অধিপতি।',
      words: [
        {
          id: '1:4:1',
          arabic: 'مَٰلِكِ',
          romanized: 'mā-li-ki',
          en: 'Sovereign / Master',
          bn: 'মালিক / অধিপতি',
          tier: 'tier2',
          vocabData: {
            words: [
              { id: 8, ar: 'مَالِكٌ (مَلَكَ)', romanized: 'mālik', en: 'Master / King / Sovereign Owner', bn: 'মালিক / রাজা / অধিপতি', emoji: '👑' },
            ],
          },
        },
        {
          id: '1:4:2',
          arabic: 'يَوْمِ الدِّينِ',
          romanized: 'yaw-mi d-dīn',
          en: 'of the Day of Recompense',
          bn: 'বিচার দিবসের',
          tier: 'tier1',
          tarkeebData: {
            instruction: 'Idafah construction signifying absolute ownership of the afterlife',
            tarkeeb: [
              {
                type: 'incomplete',
                text: 'يَوْمِ الدِّينِ',
                label: 'مركب إضافي (Idafah Phrase)',
                labelEn: 'Possessive Construction',
                children: [
                  { text: 'يَوْمِ', label: 'مضاف (Mudaf)', labelEn: 'Possessed / Head Noun (Day of)' },
                  { text: 'الدِّينِ', label: 'مضاف إليه مجرور (Mudaf Ilayhi)', labelEn: 'Possessor (Genitive Case - Recompense)' },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      ayahNumber: 5,
      verseKey: '1:5',
      translationEn: 'It is You we worship and You we ask for help.',
      translationBn: 'আমরা কেবল আপনারই ইবাদত করি এবং কেবল আপনারই সাহায্য প্রার্থনা করি।',
      words: [
        {
          id: '1:5:1',
          arabic: 'إِيَّاكَ نَعْبُدُ',
          romanized: 'ī-yā-ka naʿ-bu-du',
          en: 'It is You we worship',
          bn: 'আমরা কেবল আপনারই ইবাদত করি',
          tier: 'tier1',
          tarkeebData: {
            instruction: 'Fronted direct object establishing exclusivity of worship',
            tarkeeb: [
              {
                type: 'complete',
                text: 'إِيَّاكَ نَعْبُدُ',
                label: 'جملة فعلية مع التخصيص (Verbal Sentence with Exclusivity)',
                labelEn: 'Fronted Object + Verb & Subject',
                children: [
                  { text: 'إِيَّاكَ', label: 'مفعول به مقدم (Maf\'ul Bihi Muqaddam)', labelEn: 'Fronted Direct Object (You alone)' },
                  { text: 'نَعْبُدُ', label: 'فعل مضارع والفاعل ضمير مستتر (نَحْنُ)', labelEn: 'Present Verb + Hidden Subject (We worship)' },
                ],
              },
            ],
          },
        },
        {
          id: '1:5:2',
          arabic: 'وَ',
          romanized: 'wa',
          en: 'and',
          bn: 'এবং',
          tier: 'tier3',
        },
        {
          id: '1:5:3',
          arabic: 'إِيَّاكَ نَسْتَعِينُ',
          romanized: 'ī-yā-ka nas-ta-ʿīn',
          en: 'You we ask for help',
          bn: 'আমরা কেবল আপনারই সাহায্য চাই',
          tier: 'tier1',
          tarkeebData: {
            instruction: 'Seeking divine aid exclusively through fronted pronoun',
            tarkeeb: [
              {
                type: 'complete',
                text: 'إِيَّاكَ نَسْتَعِينُ',
                label: 'جملة فعلية (Verbal Sentence)',
                labelEn: 'Fronted Object + Seeking Help Verb',
                children: [
                  { text: 'إِيَّاكَ', label: 'مفعول به مقدم (Maf\'ul Bihi Muqaddam)', labelEn: 'Fronted Direct Object (You alone)' },
                  { text: 'نَسْتَعِينُ', label: 'فعل مضارع والفاعل (نَحْنُ)', labelEn: 'Verb (Root: ع و ن) + Hidden Subject (We seek help)' },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      ayahNumber: 6,
      verseKey: '1:6',
      translationEn: 'Guide us to the straight path -',
      translationBn: 'আমাদেরকে সরল সঠিক পথের দিশা দিন -',
      words: [
        {
          id: '1:6:1',
          arabic: 'اهْدِنَا',
          romanized: 'ih-di-nā',
          en: 'Guide us',
          bn: 'আমাদের দিশা দিন',
          tier: 'tier2',
          vocabData: {
            words: [
              { id: 9, ar: 'هَدَى (يَهْدِي) - اِهْدِ', romanized: 'hadā / ihdi', en: 'To guide / Direct (Imperative supplication)', bn: 'পথপ্রদর্শন করা / হেদায়েত দেয়া', emoji: '🧭' },
            ],
          },
        },
        {
          id: '1:6:2',
          arabic: 'الصِّرَاطَ الْمُسْتَقِيمَ',
          romanized: 'ṣ-ṣi-rā-ṭa l-mus-ta-qīm',
          en: 'to the straight path',
          bn: 'সরল সঠিক পথে',
          tier: 'tier1',
          tarkeebData: {
            instruction: 'Descriptive phrase specifying the object of divine guidance',
            tarkeeb: [
              {
                type: 'incomplete',
                text: 'الصِّرَاطَ الْمُسْتَقِيمَ',
                label: 'مركب وصفي (Sifah + Mawsuf)',
                labelEn: 'Descriptive Noun Phrase (Direct Object)',
                children: [
                  { text: 'الصِّرَاطَ', label: 'موصوف / مفعول به ثانٍ منصوب', labelEn: 'Described Noun (Accusative Case)' },
                  { text: 'الْمُسْتَقِيمَ', label: 'صفة منصوبة (Sifah)', labelEn: 'Adjective (Matching Accusative Case)' },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      ayahNumber: 7,
      verseKey: '1:7',
      translationEn: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.',
      translationBn: 'তাদের পথে যাদের ওপর আপনি অনুগ্রহ করেছেন, যাদের ওপর আপনার ক্রোধ আপতিত হয়নি এবং যারা পথভ্রষ্টও নয়।',
      words: [
        {
          id: '1:7:1',
          arabic: 'صِرَاطَ الَّذِينَ',
          romanized: 'ṣi-rā-ṭa l-la-dhī-na',
          en: 'The path of those',
          bn: 'তাদের পথে',
          tier: 'tier2',
          vocabData: {
            words: [
              { id: 10, ar: 'صِرَاطٌ ج صُرُطٌ', romanized: 'ṣirāṭ pl. ṣuruṭ', en: 'Path / Way / Road', bn: 'পথ / রাস্তা', emoji: '🛣️' },
              { id: 11, ar: 'الَّذِينَ (اسم موصول)', romanized: 'alladhīna', en: 'Those who (Plural relative pronoun)', bn: 'যারা / যাদেরকে', emoji: '👥' },
            ],
          },
        },
        {
          id: '1:7:2',
          arabic: 'أَنْعَمْتَ عَلَيْهِمْ',
          romanized: 'an-ʿam-ta ʿa-lay-him',
          en: 'You have bestowed favor upon them',
          bn: 'যাদের ওপর আপনি অনুগ্রহ করেছেন',
          tier: 'tier1',
          tarkeebData: {
            instruction: 'Relative verb clause detailing divine grace',
            tarkeeb: [
              {
                type: 'complete',
                text: 'أَنْعَمْتَ عَلَيْهِمْ',
                label: 'صلة الموصول (Sila of Relative Pronoun)',
                labelEn: 'Relative Clause (Verbal Sentence)',
                children: [
                  { text: 'أَنْعَمْتَ', label: 'فعل ماض والفاعل ضمير (أَنْتَ)', labelEn: 'Past Verb + Subject Pronoun (You)' },
                  { text: 'عَلَيْهِمْ', label: 'جار ومجرور متعلقان بالفعل', labelEn: 'Preposition + Pronoun (Upon them)' },
                ],
              },
            ],
          },
        },
        {
          id: '1:7:3',
          arabic: 'غَيْرِ الْمَغْضُوبِ',
          romanized: 'ghay-ri l-magh-ḍū-bi',
          en: 'not of those who have evoked anger',
          bn: 'যাদের ওপর ক্রোধ পতিত হয়নি',
          tier: 'tier2',
          vocabData: {
            words: [
              { id: 12, ar: 'مَغْضُوبٌ عَلَيْهِمْ (غَضِبَ)', romanized: 'maghḍūb ʿalayi-him', en: 'Those who have evoked anger (Passive Participle)', bn: 'যাদের ওপর রোষ বা ক্রোধ পতিত হয়েছে', emoji: '⚡' },
            ],
          },
        },
        {
          id: '1:7:4',
          arabic: 'عَلَيْهِمْ وَلَا الضَّالِّينَ',
          romanized: 'ʿa-lay-him wa-lā ḍ-ḍāl-līn',
          en: 'upon them or of those who are astray',
          bn: 'এবং যারা পথভ্রষ্ট নয়',
          tier: 'tier3',
        },
      ],
    },
  ],
};

const SURAH_AL_MULK: SurahData = {
  number: 67,
  nameEn: 'Al-Mulk (The Sovereignty)',
  nameBn: 'আল-মুলক (সার্বভৌমত্ব)',
  arabicTitle: 'سُورَةُ الْمُلْكِ',
  surahGlyph: '067',
  revelationType: 'meccan',
  totalVerses: 30,
  featuredVersesText: 'Verses 1 to 5 Featured',
  featuredVersesTextBn: 'আয়াত ১ থেকে ৫ প্রদর্শিত',
  juz: 29,
  pageNumber: 562,
  hasBismillahHeader: true, // Display Bismillah banner above verses
  verses: [
    {
      ayahNumber: 1,
      verseKey: '67:1',
      translationEn: 'Blessed is He in whose hand is dominion, and He is over all things competent -',
      translationBn: 'বরকতময় ও মহিমান্বিত তিনি যার হাতে সর্বময় কর্তৃত্ব ও রাজত্ব এবং তিনি সব কিছুর ওপর সর্বশক্তিমান -',
      words: [
        {
          id: '67:1:1',
          arabic: 'تَبَارَكَ',
          romanized: 'ta-bā-ra-ka',
          en: 'Blessed is He / Exalted',
          bn: 'মহিমান্বিত ও বরকতপূর্ণ তিনি',
          tier: 'tier2',
          vocabData: {
            words: [
              { id: 13, ar: 'تَبَارَكَ (بَرَكَ)', romanized: 'tabāraka', en: 'Exalted / Abundantly Blessed / Supreme in blessing', bn: 'মহামহিমান্বিত / কল্যাণময় / বরকতপূর্ণ', emoji: '🌟' },
            ],
          },
        },
        {
          id: '67:1:2',
          arabic: 'الَّذِي بِيَدِهِ الْمُلْكُ',
          romanized: 'l-la-dhī bi-ya-di-hi l-mul-ku',
          en: 'in Whose hand is the sovereignty',
          bn: 'যার হাতে সর্বময় কর্তৃত্ব ও রাজত্ব',
          tier: 'tier1',
          tarkeebData: {
            instruction: 'Relative clause containing an inverted nominal sentence expressing sovereignty',
            tarkeeb: [
              {
                type: 'complete',
                text: 'بِيَدِهِ الْمُلْكُ',
                label: 'جملة اسمية (صلة الموصول)',
                labelEn: 'Nominal Sentence (Relative Clause)',
                children: [
                  { text: 'بِيَدِهِ', label: 'خبر مقدم (جار ومجرور + مضاف إليه)', labelEn: 'Fronted Predicate (In His hand)' },
                  { text: 'الْمُلْكُ', label: 'مبتدأ مؤخر مرفوع', labelEn: 'Delayed Subject (The Sovereignty / Kingdom)' },
                ],
              },
            ],
          },
        },
        {
          id: '67:1:3',
          arabic: 'وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
          romanized: 'wa-hu-wa ʿa-lā kul-li shay-in qa-dīr',
          en: 'and He is over all things competent',
          bn: 'এবং তিনি সর্ব বিষয়ে সর্বশক্তিমান',
          tier: 'tier1',
          tarkeebData: {
            instruction: 'Nominal sentence with fronted prepositional qualifier emphasizing omnipotence',
            tarkeeb: [
              {
                type: 'complete',
                text: 'وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
                label: 'جملة اسمية (Nominal Sentence)',
                labelEn: 'Subject + Fronted Qualifier + Predicate',
                children: [
                  { text: 'وَهُوَ', label: 'مبتدأ (Subject Pronoun)', labelEn: 'Pronoun Subject (And He)' },
                  { text: 'عَلَىٰ كُلِّ شَيْءٍ', label: 'جار ومجرور متعلق بالخبر', labelEn: 'Prepositional Phrase (Over all things)' },
                  { text: 'قَدِيرٌ', label: 'خبر مرفوع (Khabar)', labelEn: 'Predicate Adjective (All-Powerful / Competent)' },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      ayahNumber: 2,
      verseKey: '67:2',
      translationEn: '[He] who created death and life to test you [as to] which of you is best in deed - and He is the Exalted in Might, the Forgiving -',
      translationBn: 'যিনি সৃষ্টি করেছেন মৃত্যু ও জীবন তোমাদের পরীক্ষা করার জন্য যে, তোমাদের মধ্যে কে আমলের দিক থেকে উত্তম। আর তিনি পরাক্রমশালী, অতি ক্ষমাশীল।',
      words: [
        {
          id: '67:2:1',
          arabic: 'الَّذِي خَلَقَ',
          romanized: 'l-la-dhī kha-la-qa',
          en: '[He] who created',
          bn: 'যিনি সৃষ্টি করেছেন',
          tier: 'tier2',
          vocabData: {
            words: [
              { id: 14, ar: 'خَلَقَ (يَخْلُقُ)', romanized: 'khalaqa / yakhluqu', en: 'To create from nothing / Bring into existence', bn: 'সৃষ্টি করা / অস্তিত্বে আনা', emoji: '✨' },
            ],
          },
        },
        {
          id: '67:2:2',
          arabic: 'الْمَوْتَ وَالْحَيَاةَ',
          romanized: 'l-maw-ta wa-l-ḥa-yā-ta',
          en: 'death and life',
          bn: 'মৃত্যু এবং জীবন',
          tier: 'tier2',
          vocabData: {
            words: [
              { id: 15, ar: 'المَوْتُ وَالْحَيَاةُ', romanized: 'al-mawtu wal-ḥayāh', en: 'Death and Life (Antonym Pair / Direct Objects)', bn: 'মৃত্যু এবং জীবন', emoji: '🌱' },
            ],
          },
        },
        {
          id: '67:2:3',
          arabic: 'لِيَبْلُوَكُمْ',
          romanized: 'li-yab-lu-wa-kum',
          en: 'that He may test you',
          bn: 'যেন তিনি তোমাদের পরীক্ষা করতে পারেন',
          tier: 'tier3',
        },
        {
          id: '67:2:4',
          arabic: 'أَيُّكُمْ أَحْسَنُ عَمَلًا',
          romanized: 'ay-yu-kum ah-sa-nu ʿa-ma-lā',
          en: 'which of you is best in deed',
          bn: 'তোমাদের মধ্যে কে আমলের দিক থেকে উত্তম',
          tier: 'tier1',
          tarkeebData: {
            instruction: 'Comparative structure clarified by an accusative noun of specification (Tamyiz)',
            tarkeeb: [
              {
                type: 'complete',
                text: 'أَيُّكُمْ أَحْسَنُ عَمَلًا',
                label: 'جملة استفهامية مفعول ثانٍ (Interrogative Clause)',
                labelEn: 'Subject + Comparative Predicate + Tamyiz',
                children: [
                  { text: 'أَيُّكُمْ', label: 'مبتدأ (Interrogative Pronoun + Mudaf Ilayehi)', labelEn: 'Subject (Which of you)' },
                  { text: 'أَحْسَنُ', label: 'خبر مرفوع (Comparative Noun / Ism Tafdil)', labelEn: 'Predicate (Best / Superior)' },
                  { text: 'عَمَلًا', label: 'تمييز منصوب (Tamyiz / Specifying Accusative)', labelEn: 'Specification (In action / deed)' },
                ],
              },
            ],
          },
        },
        {
          id: '67:2:5',
          arabic: 'وَهُوَ الْعَزِيزُ الْغَفُورُ',
          romanized: 'wa-hu-wa l-ʿa-zī-zu l-gha-fūr',
          en: 'and He is the Exalted in Might, the Forgiving',
          bn: 'এবং তিনি পরাক্রমশালী, অতি ক্ষমাশীল',
          tier: 'tier1',
          tarkeebData: {
            instruction: 'Nominal sentence uniting power and forgiveness with multiple predicates',
            tarkeeb: [
              {
                type: 'complete',
                text: 'وَهُوَ الْعَزِيزُ الْغَفُورُ',
                label: 'جملة اسمية مع تعداد الخبر (Multiple Predicates)',
                labelEn: 'Subject + Predicate 1 + Predicate 2',
                children: [
                  { text: 'وَهُوَ', label: 'مبتدأ (Subject)', labelEn: 'Pronoun (And He)' },
                  { text: 'الْعَزِيزُ', label: 'خبر أول (Khabar 1)', labelEn: 'The Almighty / Exalted in Might' },
                  { text: 'الْغَفُورُ', label: 'خبر ثانٍ (Khabar 2)', labelEn: 'The All-Forgiving' },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      ayahNumber: 3,
      verseKey: '67:3',
      translationEn: '[He] who created seven heavens in layers. You do not see in the creation of the Most Merciful any inconsistency. So return your vision to the sky, do you see any breaks?',
      translationBn: 'যিনি স্তরে স্তরে সপ্ত আকাশ সৃষ্টি করেছেন। করুণাময় আল্লাহর সৃষ্টিতে তুমি কোনো অসংগতি বা ত্রুটি দেখতে পাবে না। অতএব তুমি দৃষ্টি ফিরিয়ে তাকাও, কোনো ফাটল দেখতে পাও কি?',
      words: [
        {
          id: '67:3:1',
          arabic: 'الَّذِي خَلَقَ',
          romanized: 'l-la-dhī kha-la-qa',
          en: 'Who created',
          bn: 'যিনি সৃষ্টি করেছেন',
          tier: 'tier2',
          vocabData: {
            words: [
              { id: 16, ar: 'خَلَقَ', romanized: 'khalaqa', en: 'Created / Shaped', bn: 'সৃষ্টি করেছেন', emoji: '🌌' },
            ],
          },
        },
        {
          id: '67:3:2',
          arabic: 'سَبْعَ سَمَاوَاتٍ طِبَاقًا',
          romanized: 'sab-ʿa sa-mā-wā-tin ṭi-bā-qā',
          en: 'seven heavens in layers',
          bn: 'স্তরে স্তরে সপ্ত আকাশ',
          tier: 'tier1',
          tarkeebData: {
            instruction: 'Numeral and counted noun phrase accompanied by an adjective of perfection',
            tarkeeb: [
              {
                type: 'incomplete',
                text: 'سَبْعَ سَمَاوَاتٍ طِبَاقًا',
                label: 'مركب إضافي (العدد والمعدود) + صفة',
                labelEn: 'Number Construction + Adjective',
                children: [
                  { text: 'سَبْعَ', label: 'مفعول به مضاف (Number 7 in Accusative)', labelEn: 'Head Noun (Seven of)' },
                  { text: 'سَمَاوَاتٍ', label: 'مضاف إليه مجرور (Ma\'dud / Counted Noun)', labelEn: 'Genitive Plural (Heavens / Skies)' },
                  { text: 'طِبَاقًا', label: 'صفة لـ (سَبْعَ) أو (سَمَاوَاتٍ)', labelEn: 'Adjective / Adverb (Layered / Harmonized)' },
                ],
              },
            ],
          },
        },
        {
          id: '67:3:3',
          arabic: 'مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ',
          romanized: 'mā ta-rā fī khāl-qi r-raḥ-mā-ni min ta-fā-wu-tin',
          en: 'You do not see in the creation of the Most Merciful any inconsistency',
          bn: 'করুণাময় আল্লাহর সৃষ্টিতে তুমি কোনো অসংগতি দেখতে পাবে না',
          tier: 'tier3',
        },
        {
          id: '67:3:4',
          arabic: 'فَارْجِعِ الْبَصَرَ',
          romanized: 'far-ji-ʿi l-ba-ṣa-ra',
          en: 'So return your vision',
          bn: 'অতএব তুমি দৃষ্টি ফিরিয়ে দেখো',
          tier: 'tier2',
          vocabData: {
            words: [
              { id: 17, ar: 'اِرْجِعِ الْبَصَرَ (رَجَعَ / بَصَر)', romanized: 'irjiʿi l-baṣara', en: 'Return the glance / Direct your gaze again', bn: 'দৃষ্টি আবার ঘুরিয়ে দেখুন / পুনরায় তাকান', emoji: '👁️' },
            ],
          },
        },
        {
          id: '67:3:5',
          arabic: 'هَلْ تَرَىٰ مِن فُطُورٍ',
          romanized: 'hal ta-rā min fu-ṭūr',
          en: 'do you see any breaks / rifts?',
          bn: 'কোনো ফাটল বা ত্রুটি দেখতে পাও কি?',
          tier: 'tier2',
          vocabData: {
            words: [
              { id: 18, ar: 'فُطُورٌ ج (فَطَرَ)', romanized: 'fuṭūr pl. of faṭr', en: 'Rifts / Cracks / Flaws / Breaks', bn: 'ফাটল / ত্রুটি / অসঙ্গতি', emoji: '🔍' },
            ],
          },
        },
      ],
    },
    {
      ayahNumber: 4,
      verseKey: '67:4',
      translationEn: 'Then return your vision twice again. Your vision will return to you humbled while it is fatigued.',
      translationBn: 'অতঃপর তুমি বারবার দৃষ্টি ফেরাও, তোমার দৃষ্টি অপদস্থ ও ক্লান্ত-শ্রান্ত হয়ে তোমার কাছে ফিরে আসবে।',
      words: [
        {
          id: '67:4:1',
          arabic: 'ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ',
          romanized: 'thum-ma r-ji-ʿi l-ba-ṣa-ra kar-ra-tay-ni',
          en: 'Then return your vision twice again',
          bn: 'অতঃপর তুমি বারবার দৃষ্টি ফেরাও',
          tier: 'tier1',
          tarkeebData: {
            instruction: 'Command sentence emphasized by a dual verb modifier of repetition',
            tarkeeb: [
              {
                type: 'complete',
                text: 'ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ',
                label: 'جملة فعلية طلبية مع مفعول مطلق (Dual Adverb of Repetition)',
                labelEn: 'Command Verb + Object + Dual Adverb of Time/Times',
                children: [
                  { text: 'ثُمَّ ارْجِعِ', label: 'حرف عطف + فعل أمر (Imperative Verb)', labelEn: 'Then turn back / look again' },
                  { text: 'الْبَصَرَ', label: 'مفعول به منصوب (Direct Object)', labelEn: 'The vision / glance' },
                  { text: 'كَرَّتَيْنِ', label: 'مفعول مطلق منصوب بالياء (مثنى)', labelEn: 'Dual Adverb (Two times / Repeatedly)' },
                ],
              },
            ],
          },
        },
        {
          id: '67:4:2',
          arabic: 'يَنقَلِبْ إِلَيْكَ الْبَصَرُ',
          romanized: 'yan-qa-lib i-lay-ka l-ba-ṣa-ru',
          en: 'your vision will return to you',
          bn: 'তোমার দৃষ্টি তোমার কাছে ফিরে আসবে',
          tier: 'tier3',
        },
        {
          id: '67:4:3',
          arabic: 'خَاسِئًا وَهُوَ حَسِيرٌ',
          romanized: 'khā-si-an wa-hu-wa ḥa-sīr',
          en: 'humbled while it is fatigued',
          bn: 'অপদস্থ ও ক্লান্ত-শ্রান্ত অবস্থায়',
          tier: 'tier2',
          vocabData: {
            words: [
              { id: 19, ar: 'خَاسِئًا وَحَسِيرٌ', romanized: 'khāsiʾan / ḥasīr', en: 'Humbled, defeated, weary, and exhausted', bn: 'অপদস্থ, ব্যর্থ এবং ক্লান্ত-শ্রান্ত', emoji: '😩' },
            ],
          },
        },
      ],
    },
    {
      ayahNumber: 5,
      verseKey: '67:5',
      translationEn: 'And We have certainly beautified the nearest heaven with stars and have made them what is thrown at the devils and have prepared for them the punishment of the Blaze.',
      translationBn: 'এবং আমরা অবশ্যই নিকটবর্তী আকাশকে প্রদীপমালা (তারকা) দ্বারা সুসজ্জিত করেছি এবং সেগুলোকে বানিয়েছি শয়তানদের প্রতি নিক্ষেপের উপকরণ, আর তাদের জন্য প্রস্তুত রেখেছি জ্বলন্ত আগুনের শাস্তি।',
      words: [
        {
          id: '67:5:1',
          arabic: 'وَلَقَدْ زَيَّنَّا',
          romanized: 'wa-la-qa-d zay-ya-nā',
          en: 'And We have certainly adorned',
          bn: 'এবং আমরা অবশ্যই সুসজ্জিত করেছি',
          tier: 'tier2',
          vocabData: {
            words: [
              { id: 20, ar: 'زَيَّنَّا (زَيَّنَ / زينة)', romanized: 'zayyannā', en: 'We adorned / Beautified / Decorated', bn: 'আমরা সুসজ্জিত করেছি / সৌন্দর্যমণ্ডিত করেছি', emoji: '✨' },
            ],
          },
        },
        {
          id: '67:5:2',
          arabic: 'السَّمَاءَ الدُّنْيَا',
          romanized: 's-sa-mā-a d-dun-yā',
          en: 'the nearest heaven',
          bn: 'নিকটবর্তী আকাশকে',
          tier: 'tier1',
          tarkeebData: {
            instruction: 'Descriptive phrase with elided vowel endings on the feminine superlative',
            tarkeeb: [
              {
                type: 'incomplete',
                text: 'السَّمَاءَ الدُّنْيَا',
                label: 'مركب وصفي (Sifah + Mawsuf in Accusative)',
                labelEn: 'Descriptive Phrase (Direct Object)',
                children: [
                  { text: 'السَّمَاءَ', label: 'موصوف / مفعول به منصوب', labelEn: 'Described Noun (The Heaven / Sky)' },
                  { text: 'الدُّنْيَا', label: 'صفة منصوبة بفتحة مقدرة (Elided Accusative)', labelEn: 'Adjective (The Nearest / Worldly)' },
                ],
              },
            ],
          },
        },
        {
          id: '67:5:3',
          arabic: 'بِمَصَابِيحَ',
          romanized: 'bi-ma-ṣā-bī-ḥa',
          en: 'with lamps / stars',
          bn: 'প্রদীপমালা / তারকা দ্বারা',
          tier: 'tier2',
          vocabData: {
            words: [
              { id: 21, ar: 'مِصْبَاحٌ ج مَصَابِيحُ', romanized: 'miṣbāḥ pl. maṣābīḥ', en: 'Lamps / Lanterns / Celestial lights (Diptote)', bn: 'প্রদীপমালা / তারকাচয়', emoji: '💡' },
            ],
          },
        },
        {
          id: '67:5:4',
          arabic: 'وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ ۖ وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ',
          romanized: 'wa-ja-ʿal-nā-hā ru-jū-man lil-sha-yā-ṭīn wa-aʿ-tad-nā la-hum ʿa-dhā-ba s-sa-ʿīr',
          en: 'and made them missiles for the devils, and prepared for them the punishment of the Blaze',
          bn: 'এবং সেগুলোকে বানিয়েছি শয়তানদের প্রতি নিক্ষেপের উপকরণ, আর তাদের জন্য প্রস্তুত রেখেছি জ্বলন্ত আগুনের শাস্তি',
          tier: 'tier3',
        },
      ],
    },
  ],
};

function toArabicNumeral(num: number): string {
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return num
    .toString()
    .split('')
    .map((digit) => arabicDigits[parseInt(digit, 10)] || digit)
    .join('');
}

function MushafV2Page() {
  const { t_content } = useLanguageContent();
  const [selectedSurahKey, setSelectedSurahKey] = useState<'fatihah' | 'mulk'>('mulk');
  const [readingMode, setReadingMode] = useState<'page' | 'verse'>('page');
  const [showWordByWord, setShowWordByWord] = useState(true);
  const [showTranslations, setShowTranslations] = useState(true);

  // Modal State for 3-Tier interactions
  const [modalData, setModalData] = useState<{
    type: 'tarkeeb' | 'vocab';
    title: string;
    subtitle?: string;
    payload: any;
  } | null>(null);

  const currentSurah = selectedSurahKey === 'fatihah' ? SURAH_AL_FATIHAH : SURAH_AL_MULK;

  // Handle closing modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalData) {
        setModalData(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalData]);

  return (
    <div className="min-h-screen pb-24 bg-[#F8F7F4] dark:bg-[#0B0F12] text-neutral-900 dark:text-neutral-50 transition-colors">
      {/* Quran.com Replica Sticky Top Bar */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#121619]/95 backdrop-blur-md px-4 md:px-8 py-3 border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-xs">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left: Surah Dropdown Selector */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <select
                value={selectedSurahKey}
                onChange={(e) => setSelectedSurahKey(e.target.value as 'fatihah' | 'mulk')}
                className="appearance-none bg-neutral-100 hover:bg-neutral-200/70 dark:bg-neutral-800 dark:hover:bg-neutral-700/80 text-neutral-950 dark:text-neutral-100 font-english-semibold text-xs md:text-sm font-semibold py-2 pl-3.5 pr-8 rounded-xl cursor-pointer outline-none transition-colors border border-neutral-200/60 dark:border-neutral-700/60"
              >
                <option value="mulk">67. Al-Mulk (The Sovereignty)</option>
                <option value="fatihah">1. Al-Fatihah (The Opener)</option>
              </select>
              <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Center: Page & Juz Metadata Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40 text-xs font-semibold">
            <Bookmark className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>
              Page {currentSurah.pageNumber} · Juz {currentSurah.juz} / Hizb {currentSurah.pageNumber === 1 ? 1 : 57}
            </span>
          </div>

          {/* Right: Controls & Toggles */}
          <div className="flex items-center gap-2">
            {/* View Mode Segmented Control */}
            <div className="flex bg-neutral-200/80 dark:bg-neutral-800/90 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setReadingMode('page')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  readingMode === 'page'
                    ? 'bg-white dark:bg-neutral-900 text-emerald-700 dark:text-emerald-400 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Mushaf Page</span>
              </button>
              <button
                type="button"
                onClick={() => setReadingMode('verse')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  readingMode === 'verse'
                    ? 'bg-white dark:bg-neutral-900 text-emerald-700 dark:text-emerald-400 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Verse by Verse</span>
              </button>
            </div>

            {/* Translation Toggle */}
            <button
              type="button"
              onClick={() => setShowTranslations(!showTranslations)}
              className={`p-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1 border ${
                showTranslations
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-300/60 dark:border-emerald-800/60'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-700'
              }`}
              title={showTranslations ? 'Hide Translation' : 'Show Translation'}
            >
              {showTranslations ? <Eye className="w-4 h-4 text-emerald-600" /> : <EyeOff className="w-4 h-4" />}
            </button>

            <FontToggle variant="toolbar" />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 md:pt-10 space-y-8">
        {/* Surah Header Card (Quran.com Style) */}
        <section className="bg-white dark:bg-[#121619] rounded-3xl p-6 md:p-8 border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
              <span>{currentSurah.revelationType === 'meccan' ? 'Meccan Revelation' : 'Medinan Revelation'}</span>
              <span>·</span>
              <span>Juz {currentSurah.juz}</span>
              <span>·</span>
              <span>Page {currentSurah.pageNumber}</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-english-semibold font-bold text-neutral-950 dark:text-white">
              {currentSurah.number}. {t_content(currentSurah.nameEn, currentSurah.nameBn)}
            </h1>

            <p className="text-xs sm:text-sm font-english text-neutral-600 dark:text-neutral-400 max-w-xl">
              Authentic Madani physical Mushaf representation using local KFGQPC Uthmanic Hafs script & 3-Tier comprehension trees.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <button
                type="button"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Volume2 className="w-4 h-4" /> Listen Recitation
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Sparkles className="w-4 h-4 text-emerald-500" /> Surah Information
              </button>
            </div>
          </div>

          {/* Surah Calligraphic Ornament Emblem */}
          <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/50 dark:border-neutral-800/50">
            <span className="font-mushaf text-3xl md:text-4xl text-emerald-800 dark:text-emerald-400 text-center" dir="rtl">
              {currentSurah.arabicTitle}
            </span>
            <span className="font-surah text-4xl md:text-5xl text-neutral-700 dark:text-neutral-300 mt-1 select-none">
              {currentSurah.surahGlyph}
            </span>
          </div>
        </section>

        {/* 3-Tier Pedagogy Legend Bar */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-2xl p-3.5 bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <div>
                <span className="text-xs font-bold text-emerald-950 dark:text-emerald-200 block">Tier 1: Tarkeeb Syntax</span>
                <span className="text-[11px] text-neutral-600 dark:text-neutral-400">Click highlighted phrases for syntax tree</span>
              </div>
            </div>
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          </div>

          <div className="rounded-2xl p-3.5 bg-neutral-200/60 dark:bg-neutral-800/60 border border-neutral-300/40 dark:border-neutral-700/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-500" />
              <div>
                <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100 block">Tier 2: Known Vocabulary</span>
                <span className="text-[11px] text-neutral-600 dark:text-neutral-400">Click words for lemma flashcards</span>
              </div>
            </div>
            <BookOpen className="w-4 h-4 text-neutral-500 shrink-0" />
          </div>

          <div className="rounded-2xl p-3.5 bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200/50 dark:border-neutral-800/50 flex items-center justify-between opacity-80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-400" />
              <div>
                <span className="text-xs font-bold text-neutral-600 dark:text-neutral-400 block">Tier 3: Pure Manuscript</span>
                <span className="text-[11px] text-neutral-500 dark:text-neutral-500">Traditional Uthmanic reading</span>
              </div>
            </div>
            <Type className="w-4 h-4 text-neutral-400 shrink-0" />
          </div>
        </section>

        {/* DISPLAY AREA BASED ON READING MODE */}
        {readingMode === 'page' ? (
          /* =========================================================
           * AUTHENTIC PHYSICAL MUSHAF PAGE VIEW (Quran.com Replication)
           * ========================================================= */
          <div className="space-y-6">
            <div className="mushaf-page-container rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden transition-all">
              {/* Physical Page Top Frame Line */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-300/60 dark:border-neutral-700/60 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                <span className="font-mushaf text-sm text-neutral-800 dark:text-neutral-200" dir="rtl">
                  {currentSurah.arabicTitle}
                </span>
                <span className="font-english uppercase tracking-widest text-[11px] bg-neutral-200/50 dark:bg-neutral-800/60 px-3 py-1 rounded-full">
                  Page {currentSurah.pageNumber}
                </span>
                <span className="font-english text-[11px]">
                  Juz {currentSurah.juz}
                </span>
              </div>

              {/* Ornate Surah Title Banner Box inside physical Mushaf page */}
              <div className="surah-header-ornament rounded-2xl py-4 px-6 my-6 text-center shadow-xs">
                <h3 className="font-mushaf text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-100" dir="rtl">
                  {currentSurah.arabicTitle}
                </h3>
                <div className="flex items-center justify-center gap-4 text-xs font-english text-neutral-700 dark:text-neutral-300 mt-1">
                  <span>{currentSurah.totalVerses} Verses</span>
                  <span>·</span>
                  <span className="capitalize">{currentSurah.revelationType}</span>
                </div>
              </div>

              {/* Bismillah Header Banner */}
              {currentSurah.hasBismillahHeader && (
                <div className="my-8 text-center">
                  <div className="inline-flex items-center justify-center gap-4 w-full">
                    <span className="text-neutral-400 dark:text-neutral-600 text-xs">❖ ❖ ❖</span>
                    <span className="font-mushaf text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-100 inline-block px-4" dir="rtl">
                      بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                    </span>
                    <span className="text-neutral-400 dark:text-neutral-600 text-xs">❖ ❖ ❖</span>
                  </div>
                  {showTranslations && (
                    <p className="text-xs font-english text-neutral-500 dark:text-neutral-400 mt-2">
                      {m['mushaf.bismillah']?.() ?? 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'}
                    </p>
                  )}
                </div>
              )}

              {/* CONTINUOUS PHYSICAL MUSHAF MANUSCRIPT BODY */}
              <div className="my-6" dir="rtl">
                <div className="text-center md:text-justify leading-loose sm:leading-[2.5] md:leading-[2.8] select-none">
                  {currentSurah.verses.map((verse) => (
                    <React.Fragment key={verse.verseKey}>
                      {verse.words.map((word) => {
                        const wordMeaning = t_content(word.en, word.bn);

                        return (
                          <span
                            key={word.id}
                            onClick={() => {
                              if (word.tier === 'tier1') {
                                const adaptedTarkeeb = word.tarkeebData?.tarkeeb?.map((item: any) => ({
                                  sentence: item.text,
                                  sentenceEn: word.en,
                                  type: item.type || 'complete',
                                  tree: [
                                    {
                                      text: item.text,
                                      label: item.label,
                                      labelEn: item.labelEn,
                                      children: item.children,
                                    },
                                  ],
                                }));
                                setModalData({
                                  type: 'tarkeeb',
                                  title: word.arabic,
                                  subtitle: wordMeaning,
                                  payload: word.tarkeebData ? { ...word.tarkeebData, tarkeeb: adaptedTarkeeb } : { text: word.arabic },
                                });
                              } else if (word.tier === 'tier2') {
                                setModalData({
                                  type: 'vocab',
                                  title: word.arabic,
                                  subtitle: wordMeaning,
                                  payload: word.vocabData || {
                                    words: [
                                      {
                                        id: 1,
                                        ar: word.arabic,
                                        romanized: word.romanized,
                                        en: word.en,
                                        bn: word.bn,
                                        emoji: '📖',
                                      },
                                    ],
                                  },
                                });
                              }
                            }}
                            className={`font-mushaf text-[28px] sm:text-[34px] md:text-[38px] text-neutral-950 dark:text-neutral-100 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer mx-1 ${
                              word.tier === 'tier1'
                                ? 'underline decoration-emerald-500/50 underline-offset-8'
                                : word.tier === 'tier2'
                                ? 'underline decoration-neutral-400/40 dark:decoration-neutral-600/40 underline-offset-8'
                                : ''
                            }`}
                            title={wordMeaning}
                          >
                            {word.arabic}
                          </span>
                        );
                      })}

                      {/* Authentic Inline Ayah End Marker */}
                      <span className="inline-flex items-center justify-center font-mushaf text-[26px] sm:text-[30px] text-emerald-700 dark:text-emerald-400 mx-2 select-none">
                        ﴿{toArabicNumeral(verse.ayahNumber)}﴾
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Physical Page Bottom Footer Line */}
              <div className="pt-6 mt-8 border-t border-neutral-300/60 dark:border-neutral-700/60 flex items-center justify-center">
                <span className="font-english text-xs font-bold text-neutral-500 dark:text-neutral-400 tracking-widest">
                  ❖ {currentSurah.pageNumber} ❖
                </span>
              </div>
            </div>

            {/* Translation Overlay Card (if Translation is toggled ON) */}
            {showTranslations && (
              <div className="bg-white dark:bg-[#121619] rounded-3xl p-6 md:p-8 border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-500" />
                  Verse Translations
                </h3>
                <div className="space-y-3 divide-y divide-neutral-100 dark:divide-neutral-800/60">
                  {currentSurah.verses.map((verse) => (
                    <div key={verse.verseKey} className="pt-3 first:pt-0">
                      <p className="text-sm sm:text-base font-english text-neutral-800 dark:text-neutral-200 leading-relaxed">
                        <span className="font-bold text-emerald-700 dark:text-emerald-400 mr-2">
                          {verse.verseKey}:
                        </span>
                        {t_content(verse.translationEn, verse.translationBn)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* =========================================================
           * VERSE BY VERSE VIEW (Quran.com Replication)
           * ========================================================= */
          <div className="space-y-4">
            {currentSurah.verses.map((verse) => (
              <article
                key={verse.verseKey}
                className="bg-white dark:bg-[#121619] rounded-3xl p-6 md:p-8 border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs space-y-6"
              >
                {/* Verse Header Action Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800/60 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-neutral-950 dark:text-white text-sm bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-xl">
                      {verse.verseKey}
                    </span>
                    <button
                      type="button"
                      title="Audio Preview"
                      className="text-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer p-1"
                    >
                      <Volume2 className="w-5 h-5 fill-current" />
                    </button>
                    <button
                      type="button"
                      title="Bookmark Verse"
                      className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors cursor-pointer p-1"
                    >
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3 text-neutral-400">
                    <button
                      type="button"
                      title="Copy Verse"
                      className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors cursor-pointer p-1"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      title="Share Verse"
                      className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors cursor-pointer p-1"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      title="More Options"
                      className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors cursor-pointer p-1"
                    >
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Verse Full Arabic Header */}
                <div className="text-right" dir="rtl">
                  <span className="font-mushaf text-3xl md:text-4xl text-neutral-950 dark:text-neutral-100 leading-relaxed">
                    {verse.words.map((w) => w.arabic).join(' ')} ﴿{toArabicNumeral(verse.ayahNumber)}﴾
                  </span>
                </div>

                {/* Interactive Word-by-Word Cards */}
                {showWordByWord && (
                  <div className="pt-2" dir="rtl">
                    <div className="inline-flex flex-wrap justify-start items-baseline gap-4">
                      {verse.words.map((word) => {
                        const wordMeaning = t_content(word.en, word.bn);

                        return (
                          <div
                            key={word.id}
                            onClick={() => {
                              if (word.tier === 'tier1') {
                                const adaptedTarkeeb = word.tarkeebData?.tarkeeb?.map((item: any) => ({
                                  sentence: item.text,
                                  sentenceEn: word.en,
                                  type: item.type || 'complete',
                                  tree: [
                                    {
                                      text: item.text,
                                      label: item.label,
                                      labelEn: item.labelEn,
                                      children: item.children,
                                    },
                                  ],
                                }));
                                setModalData({
                                  type: 'tarkeeb',
                                  title: word.arabic,
                                  subtitle: wordMeaning,
                                  payload: word.tarkeebData ? { ...word.tarkeebData, tarkeeb: adaptedTarkeeb } : { text: word.arabic },
                                });
                              } else if (word.tier === 'tier2') {
                                setModalData({
                                  type: 'vocab',
                                  title: word.arabic,
                                  subtitle: wordMeaning,
                                  payload: word.vocabData || {
                                    words: [
                                      {
                                        id: 1,
                                        ar: word.arabic,
                                        romanized: word.romanized,
                                        en: word.en,
                                        bn: word.bn,
                                        emoji: '📖',
                                      },
                                    ],
                                  },
                                });
                              }
                            }}
                            className={`flex flex-col items-center p-3 rounded-2xl transition-colors cursor-pointer select-none border ${
                              word.tier === 'tier1'
                                ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/40'
                                : word.tier === 'tier2'
                                ? 'bg-neutral-100/70 dark:bg-neutral-800/50 border-neutral-200 dark:border-neutral-700/50 hover:bg-neutral-200 dark:hover:bg-neutral-800'
                                : 'bg-transparent border-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800/40'
                            }`}
                          >
                            <span className="font-mushaf text-2xl text-neutral-950 dark:text-neutral-100">
                              {word.arabic}
                            </span>
                            <span className="text-xs font-english text-neutral-600 dark:text-neutral-400 mt-1 max-w-[130px] text-center leading-tight">
                              {wordMeaning}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Verse Translation Banner */}
                {showTranslations && (
                  <div className="pt-4 text-base font-english leading-relaxed text-neutral-800 dark:text-neutral-200 border-t border-neutral-100 dark:border-neutral-800/60">
                    {t_content(verse.translationEn, verse.translationBn)}
                  </div>
                )}

                {/* Bottom Options Bar */}
                <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-medium text-neutral-500 dark:text-neutral-400 border-t border-neutral-100 dark:border-neutral-800/60">
                  <button className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer">
                    <BookOpen className="w-3.5 h-3.5" /> Tafsirs
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer">
                    <GraduationCap className="w-3.5 h-3.5" /> Lessons
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer">
                    <MessageSquare className="w-3.5 h-3.5" /> Reflections
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer">
                    <HelpCircle className="w-3.5 h-3.5" /> Answers
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* =========================================================
       * INTERACTIVE PEDAGOGY MODAL (3-Tier Comprehension)
       * ========================================================= */}
      {modalData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalData(null);
          }}
        >
          <div className="bg-white dark:bg-neutral-900 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 shadow-2xl border border-neutral-200 dark:border-neutral-800">
            {/* Modal Header */}
            <div className="px-6 py-4 flex items-center justify-between bg-neutral-100 dark:bg-neutral-800/70 border-b border-neutral-200/60 dark:border-neutral-700/60">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2.5 rounded-2xl ${
                    modalData.type === 'tarkeeb'
                      ? 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-300'
                      : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200'
                  }`}
                >
                  {modalData.type === 'tarkeeb' ? (
                    <Sparkles className="w-5 h-5" />
                  ) : (
                    <BookOpen className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <h3 className="text-base font-english-semibold font-bold text-neutral-950 dark:text-white">
                    {modalData.type === 'tarkeeb'
                      ? (m['mushaf.modalTarkeebTitle']?.() ?? 'Syntax Tarkeeb Analysis')
                      : (m['mushaf.modalVocabTitle']?.() ?? 'Vocabulary Lemma Flashcard')}
                  </h3>
                  <p className="text-xs font-english text-neutral-500 dark:text-neutral-400">
                    {modalData.subtitle || modalData.title}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setModalData(null)}
                className="p-2 rounded-2xl bg-neutral-200 dark:bg-neutral-800 text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
                title="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-80px)] space-y-6 flex-1">
              <div className="text-center p-6 rounded-3xl bg-neutral-100 dark:bg-neutral-800">
                <span
                  className="font-mushaf text-3xl md:text-4xl text-neutral-950 dark:text-white block"
                  dir="rtl"
                >
                  {modalData.title}
                </span>
              </div>

              <div className="pt-2">
                {modalData.type === 'tarkeeb' ? (
                  <div className="bg-neutral-100 dark:bg-neutral-800/50 rounded-3xl p-4 md:p-6">
                    <TarkeebView payload={modalData.payload} />
                  </div>
                ) : (
                  <div className="bg-neutral-100 dark:bg-neutral-800/50 rounded-3xl p-4 md:p-6">
                    <VocabularyView payload={modalData.payload} />
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-neutral-100 dark:bg-neutral-800/70 border-t border-neutral-200/60 dark:border-neutral-700/60 flex justify-end">
              <button
                type="button"
                onClick={() => setModalData(null)}
                className="px-6 py-2.5 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-english-semibold text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer"
              >
                {m['mushaf.closeModal']?.() ?? 'Close Window'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MushafV2Page;
