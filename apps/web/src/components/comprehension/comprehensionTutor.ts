export interface ChunkExplanationGuide {
  coreIntuition: string
  analogy: string
  commonPitfall: string
  socraticHint: string
}

export const PEDAGOGICAL_CHUNK_GUIDES: Record<string, ChunkExplanationGuide> = {
  // Pointers and Demonstratives (هذا / ذلك)
  pointers: {
    coreIntuition:
      'In Arabic, demonstrative pointers (Asma al-Isharah) are mental laser pointers. "هَٰذَا" points to what is physically or conceptually within arm\'s reach (near). "ذَٰلِكَ" points across distance or reverence (far).',
    analogy:
      'Imagine pointing your index finger right at an item on your desk (هَٰذَا), versus pointing across the street at a distant tower (ذَٰلِكَ).',
    commonPitfall:
      'Do not confuse the pointer itself with the "is" verb. Arabic has no word for "is" in the present tense; juxtaposition creates the equational link automatically!',
    socraticHint:
      'Ask yourself: If you were standing next to the object right now, could you touch it immediately, or would you need to stretch your arm across the room?',
  },

  // Gender agreement (Taa Marbuta, masculine vs feminine)
  gender: {
    coreIntuition:
      'Nouns ending in Taa Marbuta (ة) are almost always grammatically feminine. Masculine nouns use masculine pointers (هَٰذَا, ذَٰلِكَ) and masculine adjectives; feminine nouns use feminine pointers (هَٰذِهِ, تِلْكَ) and feminine adjectives ending in ة.',
    analogy:
      'Think of Taa Marbuta (ـَة) as a phonetic ribbon: whenever a noun wears this ribbon, its descriptive adjectives must wear the exact same ribbon to match.',
    commonPitfall:
      'Describing a feminine noun with a bare masculine adjective (e.g. saying مَدْرَسَة كَبِير instead of مَدْرَسَة كَبِيرَة).',
    socraticHint:
      'Look closely at the final letter of the noun. Does it end in a round Taa (ة)? If yes, your pointer and adjective must also take feminine form.',
  },

  // Prepositions (حروف الجر)
  prepositions: {
    coreIntuition:
      'Prepositions like فِي (in), عَلَى (on), مِنْ (from), and إِلَى (to) are "case pullers" (حروف الجر). Whenever a noun enters their gravitational field, its ending vowel is pulled down into a Kasrah (ـِ / ـٍ).',
    analogy:
      'Think of prepositions as anchors that drag the noun\'s ending sound downwards to the ground (Kasrah).',
    commonPitfall:
      'Leaving a Dammah on a noun after a preposition (e.g. saying فِي الْبَيْتُ instead of فِي الْبَيْتِ).',
    socraticHint:
      'Whenever you spot فِي, عَلَى, مِنْ, or إِلَى, ask: what should happen to the very last vowel mark of the noun following it?',
  },

  // Nominal Sentence (Mubtada & Khabar)
  nominal_sentence: {
    coreIntuition:
      'An equational nominal sentence has two pillars: The Subject (الْمُبْتَدَأ - usually definite with Al-) and the Predicate (الْخَبَر - the new information, usually indefinite with Tanween Damm).',
    analogy:
      'The Mubtada is who you are introducing onto the stage ("The House..."). The Khabar is what you announce about them ("...is clean!").',
    commonPitfall:
      'Putting "ال" on both words turns it into a phrase ("The clean house...") rather than a complete sentence ("The house is clean").',
    socraticHint:
      'Notice where the "Al-" is placed. If the first word has Al- and the second has Tanween, you have a complete statement!',
  },

  // Pronouns (ضمائر منفصلة)
  pronouns: {
    coreIntuition:
      'Independent pronouns stand as full grammatical subjects: هُوَ (He), هِيَ (She), أَنَا (I), نَحْنُ (We), أَنْتَ (You m.), هُمْ (They m.).',
    analogy:
      'They function like identity cards representing individuals or groups directly.',
    commonPitfall:
      'Mixing up هُوَ (he) and هِيَ (she), or using singular pronouns with plural groups.',
    socraticHint:
      'Identify who is speaking or being spoken of: is it 1st person (speaker), 2nd person (listener), or 3rd person (absent)?',
  },
}

export function generateSocraticExplanation(
  chunkTitle: string,
  userQuestion?: string
): ChunkExplanationGuide {
  const lowerTitle = chunkTitle.toLowerCase()
  const lowerQ = (userQuestion || '').toLowerCase()

  if (lowerTitle.includes('distance') || lowerTitle.includes('pointer') || lowerQ.includes('this') || lowerQ.includes('that')) {
    return PEDAGOGICAL_CHUNK_GUIDES.pointers
  }

  if (lowerTitle.includes('gender') || lowerTitle.includes('feminine') || lowerQ.includes('female') || lowerQ.includes('marbuta')) {
    return PEDAGOGICAL_CHUNK_GUIDES.gender
  }

  if (lowerTitle.includes('preposition') || lowerTitle.includes('jar') || lowerQ.includes('in') || lowerQ.includes('on')) {
    return PEDAGOGICAL_CHUNK_GUIDES.prepositions
  }

  if (lowerTitle.includes('pronoun') || lowerQ.includes('he') || lowerQ.includes('she') || lowerQ.includes('they')) {
    return PEDAGOGICAL_CHUNK_GUIDES.pronouns
  }

  return PEDAGOGICAL_CHUNK_GUIDES.nominal_sentence
}
