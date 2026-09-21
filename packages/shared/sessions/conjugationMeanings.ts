import type { VerbConjugatorForm, VerbConjugatorItem } from './lessonSessionTypes';

/**
 * Strips Arabic diacritics (Harakat) for resilient root/form dictionary lookups.
 */
export function stripArabicTashkeel(text: string): string {
  return text.replace(/[\u064B-\u065F\u0670]/g, '');
}

export interface ConjugationMeaning {
  en: string;
  bn: string;
}

type SubjectMap = Record<string, ConjugationMeaning>;
type TenseMap = {
  past?: SubjectMap;
  present?: SubjectMap;
  imperative?: SubjectMap;
  prohibition?: SubjectMap;
};

/**
 * Curated high-fidelity dictionary for foundation verbs in the curriculum.
 * Keys are normalized (Tashkeel-free) Arabic roots/lemmas.
 */
export const VERB_CONJUGATION_DICTIONARY: Record<string, TenseMap> = {
  // ف-ع-ل (To do)
  فعل: {
    past: {
      هُوَ: { en: 'He did', bn: 'সে করল' },
      هِيَ: { en: 'She did', bn: 'সে করল (স্ত্রী)' },
      أَنْتَ: { en: 'You did (m)', bn: 'তুমি করলে (পুং)' },
      أَنْتِ: { en: 'You did (f)', bn: 'তুমি করলে (স্ত্রী)' },
      أَنَا: { en: 'I did', bn: 'আমি করলাম' },
      نَحْنُ: { en: 'We did', bn: 'আমরা করলাম' },
      هُمْ: { en: 'They did (m)', bn: 'তারা করল' },
      أَنْتُمْ: { en: 'You all did (m)', bn: 'তোমরা করলে' },
    },
    present: {
      هُوَ: { en: 'He does', bn: 'সে করে' },
      هِيَ: { en: 'She does', bn: 'সে করে (স্ত্রী)' },
      أَنْتَ: { en: 'You do (m)', bn: 'তুমি করো (পুং)' },
      أَنْتِ: { en: 'You do (f)', bn: 'তুমি করো (স্ত্রী)' },
      أَنَا: { en: 'I do', bn: 'আমি করি' },
      نَحْنُ: { en: 'We do', bn: 'আমরা করি' },
      هُمْ: { en: 'They do (m)', bn: 'তারা করে' },
      أَنْتُمْ: { en: 'You all do (m)', bn: 'তোমরা করো' },
    },
    imperative: {
      أَنْتَ: { en: 'Do! (m)', bn: 'করো! (পুং)' },
      أَنْتِ: { en: 'Do! (f)', bn: 'করো! (স্ত্রী)' },
      أَنْتُمْ: { en: 'Do! (pl)', bn: 'করো! (তোমরা)' },
    },
    prohibition: {
      أَنْتَ: { en: "Don't do! (m)", bn: 'করো না! (পুং)' },
      أَنْتِ: { en: "Don't do! (f)", bn: 'করো না! (স্ত্রী)' },
      أَنْتُمْ: { en: "Don't do! (pl)", bn: 'করো না! (তোমরা)' },
    },
  },

  // خ-ر-ج (To exit / go out)
  خرج: {
    past: {
      هُوَ: { en: 'He went out', bn: 'সে বের হলো' },
      هِيَ: { en: 'She went out', bn: 'সে বের হলো (স্ত্রী)' },
      أَنْتَ: { en: 'You went out (m)', bn: 'তুমি বের হলে (পুং)' },
      أَنْتِ: { en: 'You went out (f)', bn: 'তুমি বের হলে (স্ত্রী)' },
      أَنَا: { en: 'I went out', bn: 'আমি বের হলাম' },
      نَحْنُ: { en: 'We went out', bn: 'আমরা বের হলাম' },
      هُمْ: { en: 'They went out', bn: 'তারা বের হলো' },
      أَنْتُمْ: { en: 'You all went out', bn: 'তোমরা বের হলে' },
    },
    present: {
      هُوَ: { en: 'He goes out', bn: 'সে বের হয়' },
      هِيَ: { en: 'She goes out', bn: 'সে বের হয় (স্ত্রী)' },
      أَنْتَ: { en: 'You go out (m)', bn: 'তুমি বের হও (পুং)' },
      أَنْتِ: { en: 'You go out (f)', bn: 'তুমি বের হও (স্ত্রী)' },
      أَنَا: { en: 'I go out', bn: 'আমি বের হই' },
      نَحْنُ: { en: 'We go out', bn: 'আমরা বের হই' },
    },
    imperative: {
      أَنْتَ: { en: 'Exit! (m)', bn: 'বের হও! (পুং)' },
      أَنْتِ: { en: 'Exit! (f)', bn: 'বের হও! (স্ত্রী)' },
      أَنْتُمْ: { en: 'Exit! (pl)', bn: 'বের হও! (তোমরা)' },
    },
    prohibition: {
      أَنْتَ: { en: "Don't go out! (m)", bn: 'বের হয়ো না! (পুং)' },
      أَنْتِ: { en: "Don't go out! (f)", bn: 'বের হয়ো না! (স্ত্রী)' },
      أَنْتُمْ: { en: "Don't go out! (pl)", bn: 'বের হয়ো না! (তোমরা)' },
    },
  },

  // ذ-ه-ب (To go)
  ذهب: {
    past: {
      هُوَ: { en: 'He went', bn: 'সে গেল' },
      هِيَ: { en: 'She went', bn: 'সে গেল (স্ত্রী)' },
      أَنْتَ: { en: 'You went (m)', bn: 'তুমি গেলে (পুং)' },
      أَنْتِ: { en: 'You went (f)', bn: 'তুমি গেলে (স্ত্রী)' },
      أَنَا: { en: 'I went', bn: 'আমি গেলাম' },
      نَحْنُ: { en: 'We went', bn: 'আমরা গেলাম' },
      هُمْ: { en: 'They went', bn: 'তারা গেল' },
      أَنْتُمْ: { en: 'You all went', bn: 'তোমরা গেলে' },
    },
    present: {
      هُوَ: { en: 'He goes', bn: 'সে যায়' },
      هِيَ: { en: 'She goes', bn: 'সে যায় (স্ত্রী)' },
      أَنْتَ: { en: 'You go (m)', bn: 'তুমি যাও (পুং)' },
      أَنْتِ: { en: 'You go (f)', bn: 'তুমি যাও (স্ত্রী)' },
      أَنَا: { en: 'I go', bn: 'আমি যাই' },
      نَحْنُ: { en: 'We go', bn: 'আমরা যাই' },
    },
    imperative: {
      أَنْتَ: { en: 'Go! (m)', bn: 'যাও! (পুং)' },
      أَنْتِ: { en: 'Go! (f)', bn: 'যাও! (স্ত্রী)' },
      أَنْتُمْ: { en: 'Go! (pl)', bn: 'যাও! (তোমরা)' },
    },
    prohibition: {
      أَنْتَ: { en: "Don't go! (m)", bn: 'যেয়ো না! (পুং)' },
      أَنْتِ: { en: "Don't go! (f)", bn: 'যেয়ো না! (স্ত্রী)' },
      أَنْتُمْ: { en: "Don't go! (pl)", bn: 'যেয়ো না! (তোমরা)' },
    },
  },

  // ج-ل-س (To sit)
  جلس: {
    past: {
      هُوَ: { en: 'He sat', bn: 'সে বসল' },
      هِيَ: { en: 'She sat', bn: 'সে বসল (স্ত্রী)' },
      أَنْتَ: { en: 'You sat (m)', bn: 'তুমি বসলে (পুং)' },
      أَنْتِ: { en: 'You sat (f)', bn: 'তুমি বসলে (স্ত্রী)' },
      أَنَا: { en: 'I sat', bn: 'আমি বসলাম' },
      نَحْنُ: { en: 'We sat', bn: 'আমরা বসলাম' },
      هُمْ: { en: 'They sat', bn: 'তারা বসল' },
      أَنْتُمْ: { en: 'You all sat', bn: 'তোমরা বসলে' },
    },
    present: {
      هُوَ: { en: 'He sits', bn: 'সে বসে' },
      هِيَ: { en: 'She sits', bn: 'সে বসে (স্ত্রী)' },
      أَنْتَ: { en: 'You sit (m)', bn: 'তুমি বসো (পুং)' },
      أَنْتِ: { en: 'You sit (f)', bn: 'তুমি বসো (স্ত্রী)' },
      أَنَا: { en: 'I sit', bn: 'আমি বসি' },
      نَحْنُ: { en: 'We sit', bn: 'আমরা বসি' },
    },
    imperative: {
      أَنْتَ: { en: 'Sit! (m)', bn: 'বসো! (পুং)' },
      أَنْتِ: { en: 'Sit! (f)', bn: 'বসো! (স্ত্রী)' },
      أَنْتُمْ: { en: 'Sit! (pl)', bn: 'বসো! (তোমরা)' },
    },
    prohibition: {
      أَنْتَ: { en: "Don't sit! (m)", bn: 'বসো না! (পুং)' },
      أَنْتِ: { en: "Don't sit! (f)", bn: 'বসো না! (স্ত্রী)' },
      أَنْتُمْ: { en: "Don't sit! (pl)", bn: 'বসো না! (তোমরা)' },
    },
  },

  // ق-ر-أ (To read)
  قرأ: {
    past: {
      هُوَ: { en: 'He read', bn: 'সে পড়ল' },
      هِيَ: { en: 'She read', bn: 'সে পড়ল (স্ত্রী)' },
      أَنْتَ: { en: 'You read (m)', bn: 'তুমি পড়লে (পুং)' },
      أَنْتِ: { en: 'You read (f)', bn: 'তুমি পড়লে (স্ত্রী)' },
      أَنَا: { en: 'I read', bn: 'আমি পড়লাম' },
      نَحْنُ: { en: 'We read', bn: 'আমরা পড়লাম' },
      هُمْ: { en: 'They read', bn: 'তারা পড়ল' },
      أَنْتُمْ: { en: 'You all read', bn: 'তোমরা পড়লে' },
    },
    present: {
      هُوَ: { en: 'He reads', bn: 'সে পড়ে' },
      هِيَ: { en: 'She reads', bn: 'সে পড়ে (স্ত্রী)' },
      أَنْتَ: { en: 'You read (m)', bn: 'তুমি পড়ো (পুং)' },
      أَنْتِ: { en: 'You read (f)', bn: 'তুমি পড়ো (স্ত্রী)' },
      أَنَا: { en: 'I read', bn: 'আমি পড়ি' },
      نَحْنُ: { en: 'We read', bn: 'আমরা পড়ি' },
    },
    imperative: {
      أَنْتَ: { en: 'Read! (m)', bn: 'পড়ো! (পুং)' },
      أَنْتِ: { en: 'Read! (f)', bn: 'পড়ো! (স্ত্রী)' },
      أَنْتُمْ: { en: 'Read! (pl)', bn: 'পড়ো! (তোমরা)' },
    },
    prohibition: {
      أَنْتَ: { en: "Don't read! (m)", bn: 'পড়ো না! (পুং)' },
      أَنْتِ: { en: "Don't read! (f)", bn: 'পড়ো না! (স্ত্রী)' },
      أَنْتُمْ: { en: "Don't read! (pl)", bn: 'পড়ো না! (তোমরা)' },
    },
  },

  // ك-ت-ب (To write)
  كتب: {
    past: {
      هُوَ: { en: 'He wrote', bn: 'সে লিখল' },
      هِيَ: { en: 'She wrote', bn: 'সে লিখল (স্ত্রী)' },
      أَنْتَ: { en: 'You wrote (m)', bn: 'তুমি লিখলে (পুং)' },
      أَنْتِ: { en: 'You wrote (f)', bn: 'তুমি লিখলে (স্ত্রী)' },
      أَنَا: { en: 'I wrote', bn: 'আমি লিখলাম' },
      نَحْنُ: { en: 'We wrote', bn: 'আমরা লিখলাম' },
      هُمْ: { en: 'They wrote', bn: 'তারা লিখল' },
      أَنْتُمْ: { en: 'You all wrote', bn: 'তোমরা লিখলে' },
    },
    present: {
      هُوَ: { en: 'He writes', bn: 'সে লেখে' },
      هِيَ: { en: 'She writes', bn: 'সে লেখে (স্ত্রী)' },
      أَنْتَ: { en: 'You write (m)', bn: 'তুমি লেখো (পুং)' },
      أَنْتِ: { en: 'You write (f)', bn: 'তুমি লেখো (স্ত্রী)' },
      أَنَا: { en: 'I write', bn: 'আমি লিখি' },
      نَحْنُ: { en: 'We write', bn: 'আমরা লিখি' },
    },
    imperative: {
      أَنْتَ: { en: 'Write! (m)', bn: 'লেখো! (পুং)' },
      أَنْتِ: { en: 'Write! (f)', bn: 'লেখো! (স্ত্রী)' },
      أَنْتُمْ: { en: 'Write! (pl)', bn: 'লেখো! (তোমরা)' },
    },
    prohibition: {
      أَنْتَ: { en: "Don't write! (m)", bn: 'লিখো না! (পুং)' },
      أَنْتِ: { en: "Don't write! (f)", bn: 'লিখো না! (স্ত্রী)' },
      أَنْتُمْ: { en: "Don't write! (pl)", bn: 'লিখো না! (তোমরা)' },
    },
  },

  // ر-ج-ع (To return)
  رجع: {
    past: {
      هُوَ: { en: 'He returned', bn: 'সে ফিরল' },
      هِيَ: { en: 'She returned', bn: 'সে ফিরল (স্ত্রী)' },
      أَنْتَ: { en: 'You returned (m)', bn: 'তুমি ফিরলে (পুং)' },
      أَنْتِ: { en: 'You returned (f)', bn: 'তুমি ফিরলে (স্ত্রী)' },
      أَنَا: { en: 'I returned', bn: 'আমি ফিরলাম' },
      نَحْنُ: { en: 'We returned', bn: 'আমরা ফিরলাম' },
      هُمْ: { en: 'They returned', bn: 'তারা ফিরল' },
      أَنْتُمْ: { en: 'You all returned', bn: 'তোমরা ফিরলে' },
    },
    present: {
      هُوَ: { en: 'He returns', bn: 'সে ফেরে' },
      هِيَ: { en: 'She returns', bn: 'সে ফেরে (স্ত্রী)' },
      أَنْتَ: { en: 'You return (m)', bn: 'তুমি ফেরো (পুং)' },
      أَنْتِ: { en: 'You return (f)', bn: 'তুমি ফেরো (স্ত্রী)' },
      أَنَا: { en: 'I return', bn: 'আমি ফিরি' },
      نَحْنُ: { en: 'We return', bn: 'আমরা ফিরি' },
    },
    imperative: {
      أَنْتَ: { en: 'Return! (m)', bn: 'ফেরো! (পুং)' },
      أَنْتِ: { en: 'Return! (f)', bn: 'ফেরো! (স্ত্রী)' },
      أَنْتُمْ: { en: 'Return! (pl)', bn: 'ফেরো! (তোমরা)' },
    },
    prohibition: {
      أَنْتَ: { en: "Don't return! (m)", bn: 'ফেরো না! (পুং)' },
      أَنْتِ: { en: "Don't return! (f)", bn: 'ফেরো না! (স্ত্রী)' },
      أَنْتُمْ: { en: "Don't return! (pl)", bn: 'ফেরো না! (তোমরা)' },
    },
  },

  // ل-ع-ب (To play)
  لعب: {
    past: {
      هُوَ: { en: 'He played', bn: 'সে খেলল' },
      هِيَ: { en: 'She played', bn: 'সে খেলল (স্ত্রী)' },
      أَنْتَ: { en: 'You played (m)', bn: 'তুমি খেললে (পুং)' },
      أَنْتِ: { en: 'You played (f)', bn: 'তুমি খেললে (স্ত্রী)' },
      أَنَا: { en: 'I played', bn: 'আমি খেললাম' },
      نَحْنُ: { en: 'We played', bn: 'আমরা খেললাম' },
      هُمْ: { en: 'They played', bn: 'তারা খেলল' },
      أَنْتُمْ: { en: 'You all played', bn: 'তোমরা খেললে' },
    },
    present: {
      هُوَ: { en: 'He plays', bn: 'সে খেলে' },
      هِيَ: { en: 'She plays', bn: 'সে খেলে (স্ত্রী)' },
      أَنْتَ: { en: 'You play (m)', bn: 'তুমি খেলো (পুং)' },
      أَنْتِ: { en: 'You play (f)', bn: 'তুমি খেলো (স্ত্রী)' },
      أَنَا: { en: 'I play', bn: 'আমি খেলি' },
      نَحْنُ: { en: 'We play', bn: 'আমরা খেলি' },
    },
    imperative: {
      أَنْتَ: { en: 'Play! (m)', bn: 'খেলো! (পুং)' },
      أَنْتِ: { en: 'Play! (f)', bn: 'খেলো! (স্ত্রী)' },
      أَنْتُمْ: { en: 'Play! (pl)', bn: 'খেলো! (তোমরা)' },
    },
    prohibition: {
      أَنْتَ: { en: "Don't play! (m)", bn: 'খেলো না! (পুং)' },
      أَنْتِ: { en: "Don't play! (f)", bn: 'খেলো না! (স্ত্রী)' },
      أَنْتُمْ: { en: "Don't play! (pl)", bn: 'খেলো না! (তোমরা)' },
    },
  },

  // ما ذهب (Did not go)
  'ما ذهب': {
    past: {
      هُوَ: { en: 'He did not go', bn: 'সে যায়নি' },
      هِيَ: { en: 'She did not go', bn: 'সে যায়নি' },
      أَنْتَ: { en: 'You did not go (m)', bn: 'তুমি যাওনি (পুং)' },
      أَنْتِ: { en: 'You did not go (f)', bn: 'তুমি যাওনি (স্ত্রী)' },
      أَنَا: { en: 'I did not go', bn: 'আমি যাইনি' },
      نَحْنُ: { en: 'We did not go', bn: 'আমরা যাইনি' },
    },
  },

  // ما خرج (Did not exit)
  'ما خرج': {
    past: {
      هُوَ: { en: 'He did not go out', bn: 'সে বের হয়নি' },
      هِيَ: { en: 'She did not go out', bn: 'সে বের হয়নি' },
      أَنْتَ: { en: 'You did not go out (m)', bn: 'তুমি বের হওনি (পুং)' },
      أَنْتِ: { en: 'You did not go out (f)', bn: 'তুমি বের হওনি (স্ত্রী)' },
      أَنَا: { en: 'I did not go out', bn: 'আমি বের হইনি' },
      نَحْنُ: { en: 'We did not go out', bn: 'আমরা বের হইনি' },
    },
  },

  // غ-س-ل (To wash)
  غسل: {
    past: {
      هُوَ: { en: 'He washed', bn: 'সে ধুলো' },
      هِيَ: { en: 'She washed', bn: 'সে ধুলো (স্ত্রী)' },
      أَنْتَ: { en: 'You washed (m)', bn: 'তুমি ধুলে (পুং)' },
      أَنْتِ: { en: 'You washed (f)', bn: 'তুমি ধুলে (স্ত্রী)' },
      أَنَا: { en: 'I washed', bn: 'আমি ধুলাম' },
      نَحْنُ: { en: 'We washed', bn: 'আমরা ধুলাম' },
    },
    prohibition: {
      أَنْتَ: { en: "Don't wash! (m)", bn: 'ধুয়ো না! (পুং)' },
      أَنْتِ: { en: "Don't wash! (f)", bn: 'ধুয়ো না! (স্ত্রী)' },
    },
  },

  // خ-ل-ق (To create)
  خلق: {
    past: {
      هُوَ: { en: 'He created', bn: 'তিনি সৃষ্টি করলেন' },
      هِيَ: { en: 'She created', bn: 'তিনি সৃষ্টি করলেন' },
      أَنْتَ: { en: 'You created (m)', bn: 'তুমি সৃষ্টি করলে' },
      أَنْتِ: { en: 'You created (f)', bn: 'তুমি সৃষ্টি করলে' },
      أَنَا: { en: 'I created', bn: 'আমি সৃষ্টি করলাম' },
      نَحْنُ: { en: 'We created', bn: 'আমরা সৃষ্টি করলাম' },
    },
  },

  // ك-و-ن / كان (To be / was)
  'ك-و-ن': {
    past: {
      هُوَ: { en: 'He was', bn: 'সে ছিল' },
      هِيَ: { en: 'She was', bn: 'সে ছিল (স্ত্রী)' },
      أَنْتَ: { en: 'You were (m)', bn: 'তুমি ছিলে (পুং)' },
      أَنْتِ: { en: 'You were (f)', bn: 'তুমি ছিলে (স্ত্রী)' },
      أَنَا: { en: 'I was', bn: 'আমি ছিলাম' },
      نَحْنُ: { en: 'We were', bn: 'আমরা ছিলাম' },
    },
  },
  كان: {
    past: {
      هُوَ: { en: 'He was', bn: 'সে ছিল' },
      هِيَ: { en: 'She was', bn: 'সে ছিল (স্ত্রী)' },
      أَنْتَ: { en: 'You were (m)', bn: 'তুমি ছিলে (পুং)' },
      أَنْتِ: { en: 'You were (f)', bn: 'তুমি ছিলে (স্ত্রী)' },
      أَنَا: { en: 'I was', bn: 'আমি ছিলাম' },
      نَحْنُ: { en: 'We were', bn: 'আমরা ছিলাম' },
    },
  },

  // ل-ي-س / ليس (Is not)
  'ل-ي-س': {
    past: {
      هُوَ: { en: 'He is not', bn: 'সে নয়' },
      هِيَ: { en: 'She is not', bn: 'সে নয় (স্ত্রী)' },
      أَنْتَ: { en: 'You are not (m)', bn: 'তুমি নও (পুং)' },
      أَنْتِ: { en: 'You are not (f)', bn: 'তুমি নও (স্ত্রী)' },
      أَنَا: { en: 'I am not', bn: 'আমি নই' },
      نَحْنُ: { en: 'We are not', bn: 'আমরা নই' },
    },
  },
  ليس: {
    past: {
      هُوَ: { en: 'He is not', bn: 'সে নয়' },
      هِيَ: { en: 'She is not', bn: 'সে নয় (স্ত্রী)' },
      أَنْتَ: { en: 'You are not (m)', bn: 'তুমি নও (পুং)' },
      أَنْتِ: { en: 'You are not (f)', bn: 'তুমি নও (স্ত্রী)' },
      أَنَا: { en: 'I am not', bn: 'আমি নই' },
      نَحْنُ: { en: 'We are not', bn: 'আমরা নই' },
    },
  },

  // ص-ي-ر / صار (To become)
  'ص-ي-ر': {
    past: {
      هُوَ: { en: 'He became', bn: 'সে হলো' },
      هِيَ: { en: 'She became', bn: 'সে হলো (স্ত্রী)' },
      أَنْتَ: { en: 'You became (m)', bn: 'তুমি হলে (পুং)' },
      أَنْتِ: { en: 'You became (f)', bn: 'তুমি হলে (স্ত্রী)' },
      أَنَا: { en: 'I became', bn: 'আমি হলাম' },
      نَحْنُ: { en: 'We became', bn: 'আমরা হলাম' },
    },
  },
  صار: {
    past: {
      هُوَ: { en: 'He became', bn: 'সে হলো' },
      هِيَ: { en: 'She became', bn: 'সে হলো (স্ত্রী)' },
      أَنْتَ: { en: 'You became (m)', bn: 'তুমি হলে (পুং)' },
      أَنْتِ: { en: 'You became (f)', bn: 'তুমি হলে (স্ত্রী)' },
      أَنَا: { en: 'I became', bn: 'আমি হলাম' },
      نَحْنُ: { en: 'We became', bn: 'আমরা হলাম' },
    },
  },

  // ش-ر-ب (To drink)
  شرب: {
    past: {
      هُوَ: { en: 'He drank', bn: 'সে পান করল' },
      هِيَ: { en: 'She drank', bn: 'সে পান করল (স্ত্রী)' },
      أَنْتَ: { en: 'You drank (m)', bn: 'তুমি পান করলে (পুং)' },
      أَنْتِ: { en: 'You drank (f)', bn: 'তুমি পান করলে (স্ত্রী)' },
      أَنَا: { en: 'I drank', bn: 'আমি পান করলাম' },
      نَحْنُ: { en: 'We drank', bn: 'আমরা পান করলাম' },
    },
    prohibition: {
      أَنْتَ: { en: "Don't drink! (m)", bn: 'পান করো না! (পুং)' },
      أَنْتِ: { en: "Don't drink! (f)", bn: 'পান করো না! (স্ত্রী)' },
    },
  },
};

/**
 * Resolves full concrete meaning for a conjugated verb form across persons and tenses.
 * Prioritizes:
 * 1. Explicit properties on form (pastMeaningEn, pastMeaningBn, etc.)
 * 2. Curated VERB_CONJUGATION_DICTIONARY lookup by root/lemma and subjectAr.
 * 3. Graceful assembled fallback ensuring complete script purity and zero empty labels.
 */
export function getConjugationMeaning(
  form: VerbConjugatorForm,
  tense: 'past' | 'present' | 'imperative' | 'prohibition',
  item: VerbConjugatorItem
): ConjugationMeaning {
  // 1. Check explicit fields
  if (tense === 'past' && form.pastMeaningEn && form.pastMeaningBn) {
    return { en: form.pastMeaningEn, bn: form.pastMeaningBn };
  }
  if (tense === 'present' && form.presentMeaningEn && form.presentMeaningBn) {
    return { en: form.presentMeaningEn, bn: form.presentMeaningBn };
  }
  if (tense === 'imperative' && form.imperativeMeaningEn && form.imperativeMeaningBn) {
    return { en: form.imperativeMeaningEn, bn: form.imperativeMeaningBn };
  }
  if (tense === 'prohibition' && form.prohibitionMeaningEn && form.prohibitionMeaningBn) {
    return { en: form.prohibitionMeaningEn, bn: form.prohibitionMeaningBn };
  }

  // 2. Dictionary lookup by rootAr or stripped root
  const rawRoot = item.rootAr.trim();
  const strippedRoot = stripArabicTashkeel(rawRoot);
  const normalizedKey = strippedRoot.replace(/\s+/g, ' ');

  const dictEntry =
    VERB_CONJUGATION_DICTIONARY[normalizedKey] ||
    VERB_CONJUGATION_DICTIONARY[rawRoot] ||
    VERB_CONJUGATION_DICTIONARY[strippedRoot.replace(/-/g, '')];

  if (dictEntry && dictEntry[tense] && dictEntry[tense]![form.subjectAr]) {
    return dictEntry[tense]![form.subjectAr];
  }

  // 3. Fallback derivation
  const cleanSubjectEn = form.subjectEn || 'Subject';
  const cleanSubjectBn = form.subjectBn || 'সর্বনাম';
  const actionEn = item.meaningEn ? item.meaningEn.replace(/^to\s+/i, '') : 'act';
  const actionBn = item.meaningBn || '';

  if (tense === 'prohibition') {
    return {
      en: `Don't ${actionEn}!`,
      bn: actionBn ? `${actionBn} করো না!` : 'করো না!',
    };
  }

  return {
    en: `${cleanSubjectEn} (${actionEn})`,
    bn: actionBn ? `${cleanSubjectBn} (${actionBn})` : cleanSubjectBn,
  };
}

/**
 * Resolves the primary conjugated meaning for the verb header.
 * In past tense lessons, returns "He did" / "সে করল" instead of the citation infinitive "To do".
 */
export function getRootVerbMeaning(
  item: VerbConjugatorItem,
  tense: 'past' | 'present' | 'imperative' | 'prohibition'
): ConjugationMeaning {
  if (item.forms && item.forms.length > 0) {
    if (tense === 'prohibition') {
      const prohForm = item.forms.find((f) => Boolean(f.prohibitionAr));
      if (prohForm) return getConjugationMeaning(prohForm, tense, item);
    } else if (tense === 'imperative') {
      const impForm = item.forms.find((f) => Boolean(f.imperativeAr));
      if (impForm) return getConjugationMeaning(impForm, tense, item);
    }
    return getConjugationMeaning(item.forms[0], tense, item);
  }
  const rawRoot = item.rootAr.trim();
  const strippedRoot = stripArabicTashkeel(rawRoot);
  const dictEntry =
    VERB_CONJUGATION_DICTIONARY[strippedRoot] ||
    VERB_CONJUGATION_DICTIONARY[rawRoot];
  if (dictEntry && dictEntry[tense]) {
    const key = (tense === 'imperative' || tense === 'prohibition') ? 'أَنْتَ' : 'هُوَ';
    if (dictEntry[tense]![key]) {
      return dictEntry[tense]![key]!;
    }
  }
  return {
    en: item.meaningEn ? item.meaningEn.replace(/^to\s+/i, '') : 'Act',
    bn: item.meaningBn || '',
  };
}

/**
 * Resolves the target Arabic verb form for the hero header matching the active tense.
 * - Past tense: returns the 3rd person past form (e.g. خَرَجَ / فَعَلَ).
 * - Present tense: returns the 3rd person present form (e.g. يَخْرُجُ / يَفْعَلُ).
 * - Imperative: returns the 2nd person masculine command (e.g. اخْرُجْ / افْعَلْ).
 * - Prohibition: returns the 2nd person masculine forbidding (e.g. لَا تَخْرُجْ / لَا تَفْعَلْ).
 */
export function getRootVerbArabic(
  item: VerbConjugatorItem,
  tense: 'past' | 'present' | 'imperative' | 'prohibition'
): string {
  if (item.forms && item.forms.length > 0) {
    if (tense === 'past') {
      return item.forms[0].pastAr || item.rootAr;
    }
    if (tense === 'present') {
      return item.forms[0].presentAr || item.forms[0].pastAr || item.rootAr;
    }
    if (tense === 'imperative') {
      const impForm = item.forms.find((f) => Boolean(f.imperativeAr));
      return impForm?.imperativeAr || item.forms[0].pastAr || item.rootAr;
    }
    if (tense === 'prohibition') {
      const prohForm = item.forms.find((f) => Boolean(f.prohibitionAr));
      return prohForm?.prohibitionAr || item.forms[0].pastAr || item.rootAr;
    }
  }
  return item.rootAr;
}
