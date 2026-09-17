// High-fidelity Arabic Audio Engine for Pedagogy Lessons
// Combines pre-rendered authentic studio/native pronunciation with on-demand TTS proxy and Web Speech fallback.

const STATIC_AUDIO_MAP: Record<string, string> = {
  // Vocabulary items (both by Arabic text and ID)
  'كِتَابٌ': '/audio/vol1/kitab.mp3',
  'kitab': '/audio/vol1/kitab.mp3',
  'v1_c1_kitab': '/audio/vol1/kitab.mp3',

  'قَلَمٌ': '/audio/vol1/qalam.mp3',
  'qalam': '/audio/vol1/qalam.mp3',
  'v1_c1_qalam': '/audio/vol1/qalam.mp3',

  'كُرْسِيٌّ': '/audio/vol1/kursi.mp3',
  'kursi': '/audio/vol1/kursi.mp3',
  'v1_c1_kursi': '/audio/vol1/kursi.mp3',

  'بَيْتٌ': '/audio/vol1/bayt.mp3',
  'bayt': '/audio/vol1/bayt.mp3',
  'v1_c1_bayt': '/audio/vol1/bayt.mp3',

  'بَابٌ': '/audio/vol1/bab.mp3',
  'bab': '/audio/vol1/bab.mp3',
  'v1_c1_bab': '/audio/vol1/bab.mp3',

  'مِصْبَاحٌ': '/audio/vol1/misbah.mp3',
  'misbah': '/audio/vol1/misbah.mp3',
  'v1_c1_misbah': '/audio/vol1/misbah.mp3',

  'جِدَارٌ': '/audio/vol1/jidar.mp3',
  'jidar': '/audio/vol1/jidar.mp3',
  'v1_c1_jidar': '/audio/vol1/jidar.mp3',

  'سَرِيرٌ': '/audio/vol1/sarir.mp3',
  'sarir': '/audio/vol1/sarir.mp3',
  'v1_c1_sarir': '/audio/vol1/sarir.mp3',

  'مَدْرَسَةٌ': '/audio/vol1/madrasah.mp3',
  'madrasah': '/audio/vol1/madrasah.mp3',
  'v1_c1_madrasah': '/audio/vol1/madrasah.mp3',

  'سَبُّورَةٌ': '/audio/vol1/sabburah.mp3',
  'sabburah': '/audio/vol1/sabburah.mp3',
  'v1_c1_sabburah': '/audio/vol1/sabburah.mp3',

  'مِسْطَرَةٌ': '/audio/vol1/mistarah.mp3',
  'mistarah': '/audio/vol1/mistarah.mp3',
  'v1_c1_mistarah': '/audio/vol1/mistarah.mp3',

  'حَقِيبَةٌ': '/audio/vol1/haqibah.mp3',
  'haqibah': '/audio/vol1/haqibah.mp3',
  'v1_c1_haqibah': '/audio/vol1/haqibah.mp3',

  'نَظَّارَةٌ': '/audio/vol1/nazzarah.mp3',
  'nazzarah': '/audio/vol1/nazzarah.mp3',
  'v1_c1_nazzarah': '/audio/vol1/nazzarah.mp3',

  'مَسْجِدٌ': '/audio/vol1/masjid.mp3',
  'masjid': '/audio/vol1/masjid.mp3',

  'مِفْتَاحٌ': '/audio/vol1/miftah.mp3',
  'miftah': '/audio/vol1/miftah.mp3',

  'سَاعَةٌ': '/audio/vol1/saah.mp3',
  'saah': '/audio/vol1/saah.mp3',

  'مِظَلَّةٌ': '/audio/vol1/mizallah.mp3',
  'mizallah': '/audio/vol1/mizallah.mp3',

  'سَيَّارَةٌ': '/audio/vol1/sayyarah.mp3',
  'sayyarah': '/audio/vol1/sayyarah.mp3',

  'طَاوِلَةٌ': '/audio/vol1/tawilah.mp3',
  'tawilah': '/audio/vol1/tawilah.mp3',

  // Pointer Phrases
  'هَذَا كِتَابٌ': '/audio/vol1/haza_kitab.mp3',
  'ذَلِكَ كِتَابٌ': '/audio/vol1/dhalika_kitab.mp3',
  'هَذَا قَلَمٌ': '/audio/vol1/haza_qalam.mp3',
  'ذَلِكَ قَلَمٌ': '/audio/vol1/dhalika_qalam.mp3',
  'هَذَا جِدَارٌ': '/audio/vol1/haza_jidar.mp3',
  'ذَلِكَ مِصْبَاحٌ': '/audio/vol1/dhalika_misbah.mp3',
  'هَذِهِ مَدْرَسَةٌ': '/audio/vol1/hazihi_madrasah.mp3',
  'تِلْكَ مَدْرَسَةٌ': '/audio/vol1/tilka_madrasah.mp3',
  'تِلْكَ حَقِيبَةٌ': '/audio/vol1/tilka_haqibah.mp3',
  'هَذِهِ حَقِيبَةٌ': '/audio/vol1/hazihi_haqibah.mp3',

  // Questions
  'مَا هَذَا ؟': '/audio/vol1/ma_haza.mp3',
  'مَا هَذَا': '/audio/vol1/ma_haza.mp3',
  'مَا ذَلِكَ ؟': '/audio/vol1/ma_dhalika.mp3',
  'مَا ذَلِكَ': '/audio/vol1/ma_dhalika.mp3',
  'مَا هَذِهِ ؟': '/audio/vol1/ma_hazihi.mp3',
  'مَا هَذِهِ': '/audio/vol1/ma_hazihi.mp3',

  // Pointers
  'هَذَا': '/audio/vol1/haza.mp3',
  'ذَلِكَ': '/audio/vol1/dhalika.mp3',
  'هَذِهِ': '/audio/vol1/hazihi.mp3',
  'تِلْكَ': '/audio/vol1/tilka.mp3',

  // Quran Ayah (Mishary Rashid Alafasy)
  'quran_002002': '/audio/vol1/quran_002002.mp3',
  'quran_012018': '/audio/vol1/quran_012018.mp3',
  'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ': '/audio/vol1/quran_002002.mp3',
  'فَصَبْرٌ جَمِيلٌ ۖ وَاللَّهُ الْمُسْتَعَانُ عَلَىٰ مَا تَصِفُونَ': '/audio/vol1/quran_012018.mp3',

  // Lesson 2 Adjectives & Nouns
  'جَدِيدٌ': '/audio/vol1/jadid.mp3',
  'v1_c2_jadid': '/audio/vol1/jadid.mp3',
  'قَدِيمٌ': '/audio/vol1/qadim.mp3',
  'v1_c2_qadim': '/audio/vol1/qadim.mp3',
  'جَمِيلٌ': '/audio/vol1/jamil.mp3',
  'v1_c2_jamil': '/audio/vol1/jamil.mp3',
  'كَبِيرٌ': '/audio/vol1/kabir.mp3',
  'v1_c2_kabir': '/audio/vol1/kabir.mp3',
  'صَغِيرٌ': '/audio/vol1/saghir.mp3',
  'v1_c2_saghir': '/audio/vol1/saghir.mp3',
  'جَيِّدٌ': '/audio/vol1/jayyid.mp3',
  'v1_c2_jayyid': '/audio/vol1/jayyid.mp3',
  'نَظِيفٌ': '/audio/vol1/nazif.mp3',
  'v1_c2_nazif': '/audio/vol1/nazif.mp3',
  'وَسِخٌ': '/audio/vol1/wasikh.mp3',
  'v1_c2_wasikh': '/audio/vol1/wasikh.mp3',
  'عَلَمٌ': '/audio/vol1/alam.mp3',
  'v1_c2_alam': '/audio/vol1/alam.mp3',
  'مِرْوَحَةٌ': '/audio/vol1/mirwahah.mp3',
  'v1_c2_mirwahah': '/audio/vol1/mirwahah.mp3',
  'حَدِيقَةٌ': '/audio/vol1/hadiqah.mp3',
  'v1_c2_hadiqah': '/audio/vol1/hadiqah.mp3',
  'قَمِيصٌ': '/audio/vol1/qamis.mp3',
  'v1_c2_qamis': '/audio/vol1/qamis.mp3',

  // Lesson 2 Descriptive Phrases & Sentences
  'كِتَابٌ جَدِيدٌ': '/audio/vol1/kitab_jadid.mp3',
  'v1_c2_kitab_jadid': '/audio/vol1/kitab_jadid.mp3',
  'سَاعَةٌ جَدِيدَةٌ': '/audio/vol1/saah_jadidah.mp3',
  'عَلَمٌ جَمِيلٌ': '/audio/vol1/alam_jamil.mp3',
  'v1_c2_alam_jamil': '/audio/vol1/alam_jamil.mp3',
  'حَدِيقَةٌ جَمِيلَةٌ': '/audio/vol1/hadiqah_jamilah.mp3',
  'هَذَا كِتَابٌ جَدِيدٌ': '/audio/vol1/haza_kitab_jadid.mp3',
  'تِلْكَ سَاعَةٌ جَدِيدَةٌ': '/audio/vol1/tilka_saah_jadidah.mp3',
  'ذَلِكَ عَلَمٌ جَمِيلٌ': '/audio/vol1/dhalika_alam_jamil.mp3',
  'هَذِهِ مِرْوَحَةٌ جَيِّدَةٌ': '/audio/vol1/hazihi_mirwahah_jayyidah.mp3',
  'تِلْكَ حَقِيبَةٌ صَغِيرَةٌ': '/audio/vol1/tilka_haqibah_saghirah.mp3',
  'ذَلِكَ مَسْجِدٌ كَبِيرٌ': '/audio/vol1/dhalika_masjid_kabir.mp3',
  'تِلْكَ مَدْرَسَةٌ كَبِيرَةٌ': '/audio/vol1/tilka_madrasah_kabirah.mp3',
  'بَيْتٌ صَغِيرٌ': '/audio/vol1/bayt_saghir.mp3',
  'v1_c2_bayt_saghir': '/audio/vol1/bayt_saghir.mp3',
  'مَدْرَسَةٌ كَبِيرَةٌ': '/audio/vol1/madrasah_kabirah.mp3',
  'v1_c2_madrasah_kabirah': '/audio/vol1/madrasah_kabirah.mp3',
  'فَصَبْرٌ جَمِيلٌ': '/audio/vol1/sabrun_jamil.mp3',

  // Lesson 3 Vocabulary, Pronouns, and Sentences
  'تِلْمِيذٌ': '/audio/vol1/tilmidh.mp3',
  'tilmidh': '/audio/vol1/tilmidh.mp3',
  'v1_c3_tilmidh': '/audio/vol1/tilmidh.mp3',
  'تِلْمِيذَةٌ': '/audio/vol1/tilmidhah.mp3',
  'tilmidhah': '/audio/vol1/tilmidhah.mp3',
  'v1_c3_tilmidhah': '/audio/vol1/tilmidhah.mp3',
  'مُعَلِّمٌ': '/audio/vol1/muallim.mp3',
  'muallim': '/audio/vol1/muallim.mp3',
  'v1_c3_muallim': '/audio/vol1/muallim.mp3',
  'مُعَلِّمَةٌ': '/audio/vol1/muallimah.mp3',
  'muallimah': '/audio/vol1/muallimah.mp3',
  'v1_c3_muallimah': '/audio/vol1/muallimah.mp3',
  'وَلَدٌ': '/audio/vol1/walad.mp3',
  'walad': '/audio/vol1/walad.mp3',
  'v1_c3_walad': '/audio/vol1/walad.mp3',
  'بِنْتٌ': '/audio/vol1/bint.mp3',
  'bint': '/audio/vol1/bint.mp3',
  'v1_c3_bint': '/audio/vol1/bint.mp3',
  'طِفْلٌ': '/audio/vol1/tifl.mp3',
  'tifl': '/audio/vol1/tifl.mp3',
  'v1_c3_tifl': '/audio/vol1/tifl.mp3',
  'طِفْلَةٌ': '/audio/vol1/tiflah.mp3',
  'tiflah': '/audio/vol1/tiflah.mp3',
  'v1_c3_tiflah': '/audio/vol1/tiflah.mp3',
  'مُؤَدَّبٌ': '/audio/vol1/muaddab.mp3',
  'muaddab': '/audio/vol1/muaddab.mp3',
  'v1_c3_muaddab': '/audio/vol1/muaddab.mp3',
  'مُؤَدَّبَةٌ': '/audio/vol1/muaddabah.mp3',
  'muaddabah': '/audio/vol1/muaddabah.mp3',
  'v1_c3_muaddabah': '/audio/vol1/muaddabah.mp3',
  'تَاجِرٌ': '/audio/vol1/tajir.mp3',
  'tajir': '/audio/vol1/tajir.mp3',
  'v1_c3_tajir': '/audio/vol1/tajir.mp3',
  'فَلَّاحٌ': '/audio/vol1/fallah.mp3',
  'fallah': '/audio/vol1/fallah.mp3',
  'v1_c3_fallah': '/audio/vol1/fallah.mp3',
  'غَنِيٌّ': '/audio/vol1/ghaniyy.mp3',
  'ghaniyy': '/audio/vol1/ghaniyy.mp3',
  'v1_c3_ghaniyy': '/audio/vol1/ghaniyy.mp3',
  'فَقِيرٌ': '/audio/vol1/faqir.mp3',
  'faqir': '/audio/vol1/faqir.mp3',
  'v1_c3_faqir': '/audio/vol1/faqir.mp3',
  'ذَكِيٌّ': '/audio/vol1/dhakiyy.mp3',
  'dhakiyy': '/audio/vol1/dhakiyy.mp3',
  'v1_c3_dhakiyy': '/audio/vol1/dhakiyy.mp3',
  'غَبِيٌّ': '/audio/vol1/ghabiyy.mp3',
  'ghabiyy': '/audio/vol1/ghabiyy.mp3',
  'v1_c3_ghabiyy': '/audio/vol1/ghabiyy.mp3',
  'رَجُلٌ': '/audio/vol1/rajul.mp3',
  'rajul': '/audio/vol1/rajul.mp3',
  'v1_c3_rajul': '/audio/vol1/rajul.mp3',
  'اِمْرَأَةٌ': '/audio/vol1/imraah.mp3',
  'imraah': '/audio/vol1/imraah.mp3',
  'v1_c3_imraah': '/audio/vol1/imraah.mp3',

  // Pronouns
  'أَنَا': '/audio/vol1/ana.mp3',
  'ana': '/audio/vol1/ana.mp3',
  'أَنْتَ': '/audio/vol1/anta.mp3',
  'anta': '/audio/vol1/anta.mp3',
  'أَنْتِ': '/audio/vol1/anti.mp3',
  'anti': '/audio/vol1/anti.mp3',
  'هُوَ': '/audio/vol1/huwa.mp3',
  'huwa': '/audio/vol1/huwa.mp3',
  'هِيَ': '/audio/vol1/hiya.mp3',
  'hiya': '/audio/vol1/hiya.mp3',

  // Proper names & Vocatives
  'بِلَالٌ': '/audio/vol1/bilal.mp3',
  'bilal': '/audio/vol1/bilal.mp3',
  'عَائِشَةُ': '/audio/vol1/aishah.mp3',
  'aishah': '/audio/vol1/aishah.mp3',
  'مَاجِدٌ': '/audio/vol1/majid.mp3',
  'majid': '/audio/vol1/majid.mp3',
  'زَيْنَبُ': '/audio/vol1/zaynab.mp3',
  'zaynab': '/audio/vol1/zaynab.mp3',
  'مَحْمُودٌ': '/audio/vol1/mahmud.mp3',
  'mahmud': '/audio/vol1/mahmud.mp3',
  'يَا وَلَدُ': '/audio/vol1/ya_walad.mp3',
  'ya_walad': '/audio/vol1/ya_walad.mp3',
  'يَا وَلَدُ !': '/audio/vol1/ya_walad.mp3',
  'يَا بِنْتُ': '/audio/vol1/ya_bint.mp3',
  'ya_bint': '/audio/vol1/ya_bint.mp3',
  'يَا بِلَالُ': '/audio/vol1/ya_bilalu.mp3',
  'ya_bilalu': '/audio/vol1/ya_bilalu.mp3',
  'يَا بِلَالُ !': '/audio/vol1/ya_bilalu.mp3',
  'يَا زَيْنَبُ': '/audio/vol1/ya_zaynabu.mp3',
  'ya_zaynabu': '/audio/vol1/ya_zaynabu.mp3',

  // Dialogues and Sentences
  'مَنْ أَنْتَ يَا وَلَدُ ؟': '/audio/vol1/man_anta_ya_walad.mp3',
  'man_anta_ya_walad': '/audio/vol1/man_anta_ya_walad.mp3',
  'هَلْ أَنْتَ مُعَلِّمٌ ؟': '/audio/vol1/hal_anta_muallim.mp3',
  'hal_anta_muallim': '/audio/vol1/hal_anta_muallim.mp3',
  'لَا ، بَلْ أَنَا تِلْمِيذٌ': '/audio/vol1/la_bal_ana_tilmidh.mp3',
  'la_bal_ana_tilmidh': '/audio/vol1/la_bal_ana_tilmidh.mp3',
  'أَنَا تِلْمِيذٌ جَدِيدٌ': '/audio/vol1/ana_tilmidh_jadid.mp3',
  'ana_tilmidh_jadid': '/audio/vol1/ana_tilmidh_jadid.mp3',
  'أَنَا تِلْمِيذَةٌ جَدِيدَةٌ': '/audio/vol1/ana_tilmidhah_jadidah.mp3',
  'ana_tilmidhah_jadidah': '/audio/vol1/ana_tilmidhah_jadidah.mp3',
  'هُوَ تِلْمِيذٌ جَدِيدٌ': '/audio/vol1/huwa_tilmidh_jadid.mp3',
  'huwa_tilmidh_jadid': '/audio/vol1/huwa_tilmidh_jadid.mp3',
  'هِيَ تِلْمِيذَةٌ جَدِيدَةٌ': '/audio/vol1/hiya_tilmidhah_jadidah.mp3',
  'hiya_tilmidhah_jadidah': '/audio/vol1/hiya_tilmidhah_jadidah.mp3',
  'هُوَ وَلَدٌ مُؤَدَّبٌ': '/audio/vol1/huwa_walad_muaddab.mp3',
  'huwa_walad_muaddab': '/audio/vol1/huwa_walad_muaddab.mp3',
  'هِيَ بِنْتٌ مُؤَدَّبَةٌ': '/audio/vol1/hiya_bint_muaddabah.mp3',
  'hiya_bint_muaddabah': '/audio/vol1/hiya_bint_muaddabah.mp3',
  'مَحْمُودٌ تَاجِرٌ غَنِيٌّ': '/audio/vol1/mahmud_tajir_ghaniyy.mp3',
  'mahmud_tajir_ghaniyy': '/audio/vol1/mahmud_tajir_ghaniyy.mp3',
  'أَنَا فَلَّاحٌ فَقِيرٌ': '/audio/vol1/ana_fallah_faqir.mp3',
  'ana_fallah_faqir': '/audio/vol1/ana_fallah_faqir.mp3',
  'بِلَالٌ تِلْمِيذٌ ذَكِيٌّ': '/audio/vol1/bilal_tilmidh_dhakiyy.mp3',
  'bilal_tilmidh_dhakiyy': '/audio/vol1/bilal_tilmidh_dhakiyy.mp3',
  'تَاجِرٌ غَنِيٌّ': '/audio/vol1/tajir_ghaniyy.mp3',
  'tajir_ghaniyy': '/audio/vol1/tajir_ghaniyy.mp3',
  'فَلَّاحٌ فَقِيرٌ': '/audio/vol1/fallah_faqir.mp3',
  'fallah_faqir': '/audio/vol1/fallah_faqir.mp3',
  'تِلْمِيذٌ ذَكِيٌّ': '/audio/vol1/tilmidh_dhakiyy.mp3',
  'tilmidh_dhakiyy': '/audio/vol1/tilmidh_dhakiyy.mp3',
  'نَعَمْ': '/audio/vol1/naam.mp3',
  'naam': '/audio/vol1/naam.mp3',
  'لَا': '/audio/vol1/la.mp3',
  'la': '/audio/vol1/la.mp3',
  'بَلْ': '/audio/vol1/bal.mp3',
  'bal': '/audio/vol1/bal.mp3',
  'مَنْ هُوَ ؟': '/audio/vol1/man_huwa.mp3',
  'man_huwa': '/audio/vol1/man_huwa.mp3',
  'مَنْ هِيَ ؟': '/audio/vol1/man_hiya.mp3',
  'man_hiya': '/audio/vol1/man_hiya.mp3',

  // Surah Muhammad 47:38
  'quran_047038': '/audio/vol1/quran_047038.mp3',
  'وَاللَّهُ الْغَنِيُّ وَأَنتُمُ الْفُقَرَاءُ': '/audio/vol1/quran_047038.mp3',

  // Surah Maryam 19:36
  'quran_019036': '/audio/vol1/quran_019036.mp3',
  'وَإِنَّ اللَّهَ رَبِّي وَرَبُّكُمْ فَاعْبُدُوهُ ۚ هَٰذَا صِرَاطٌ مُّسْتَقِيمٌ': '/audio/vol1/quran_019036.mp3',

  // Lesson 4 Moon / Sun Letters & Definite Nouns
  'al_kitab': '/audio/vol1/al_kitab.mp3',
  'اَلْكِتَابُ': '/audio/vol1/al_kitab.mp3',
  'al_qalam': '/audio/vol1/al_qalam.mp3',
  'اَلْقَلَمُ': '/audio/vol1/al_qalam.mp3',
  'al_bayt': '/audio/vol1/al_bayt.mp3',
  'اَلْبَيْتُ': '/audio/vol1/al_bayt.mp3',
  'al_jidar': '/audio/vol1/al_jidar.mp3',
  'اَلْجِدَارُ': '/audio/vol1/al_jidar.mp3',
  'al_haqibah': '/audio/vol1/al_haqibah.mp3',
  'اَلْحَقِيبَةُ': '/audio/vol1/al_haqibah.mp3',
  'at_tilmidh': '/audio/vol1/at_tilmidh.mp3',
  'اَلتِّلْمِيذُ': '/audio/vol1/at_tilmidh.mp3',
  'at_tifl': '/audio/vol1/at_tifl.mp3',
  'اَلطِّفْلُ': '/audio/vol1/at_tifl.mp3',
  'ar_rajul': '/audio/vol1/ar_rajul.mp3',
  'اَلرَّجُلُ': '/audio/vol1/ar_rajul.mp3',
  'az_zahrah': '/audio/vol1/az_zahrah.mp3',
  'اَلزَّهْرَةُ': '/audio/vol1/az_zahrah.mp3',
  'as_saah': '/audio/vol1/as_saah.mp3',
  'اَلسَّاعَةُ': '/audio/vol1/as_saah.mp3',

  // Lesson 4 Nouns & Adjectives
  'darrajah': '/audio/vol1/darrajah.mp3',
  'دَرَّاجَةٌ': '/audio/vol1/darrajah.mp3',
  'ad_darrajah': '/audio/vol1/ad_darrajah.mp3',
  'اَلدَّرَّاجَةُ': '/audio/vol1/ad_darrajah.mp3',
  'nafidhah': '/audio/vol1/nafidhah.mp3',
  'نَافِذَةٌ': '/audio/vol1/nafidhah.mp3',
  'an_nafidhah': '/audio/vol1/an_nafidhah.mp3',
  'اَلنَّافِذَةُ': '/audio/vol1/an_nafidhah.mp3',
  'mindil': '/audio/vol1/mindil.mp3',
  'مِنْدِيلٌ': '/audio/vol1/mindil.mp3',
  'al_mindil': '/audio/vol1/al_mindil.mp3',
  'اَلْمِنْدِيلُ': '/audio/vol1/al_mindil.mp3',
  'wisadah': '/audio/vol1/wisadah.mp3',
  'وِسَادَةٌ': '/audio/vol1/wisadah.mp3',
  'al_wisadah': '/audio/vol1/al_wisadah.mp3',
  'اَلْوِسَادَةُ': '/audio/vol1/al_wisadah.mp3',
  'al_marah': '/audio/vol1/al_marah.mp3',
  'اَلْمَرْأَةُ': '/audio/vol1/al_marah.mp3',
  'jamal': '/audio/vol1/jamal.mp3',
  'جَمَلٌ': '/audio/vol1/jamal.mp3',
  'al_jamal': '/audio/vol1/al_jamal.mp3',
  'اَلْجَمَلُ': '/audio/vol1/al_jamal.mp3',
  'naqah': '/audio/vol1/naqah.mp3',
  'نَاقَةٌ': '/audio/vol1/naqah.mp3',
  'an_naqah': '/audio/vol1/an_naqah.mp3',
  'اَلنَّاقَةُ': '/audio/vol1/an_naqah.mp3',
  'mufid': '/audio/vol1/mufid.mp3',
  'مُفِيدٌ': '/audio/vol1/mufid.mp3',
  'sharif': '/audio/vol1/sharif.mp3',
  'شَرِيفٌ': '/audio/vol1/sharif.mp3',
  'mahir': '/audio/vol1/mahir.mp3',
  'مَاهِرٌ': '/audio/vol1/mahir.mp3',
  'maftuh': '/audio/vol1/maftuh.mp3',
  'مَفْتُوحٌ': '/audio/vol1/maftuh.mp3',
  'mughlaq': '/audio/vol1/mughlaq.mp3',
  'مُغْلَقٌ': '/audio/vol1/mughlaq.mp3',
  'wasi': '/audio/vol1/wasi.mp3',
  'وَاسِعٌ': '/audio/vol1/wasi.mp3',
  'dayyiq': '/audio/vol1/dayyiq.mp3',
  'ضَيِّقٌ': '/audio/vol1/dayyiq.mp3',
  'qawiyy': '/audio/vol1/qawiyy.mp3',
  'قَوِيٌّ': '/audio/vol1/qawiyy.mp3',
  'daif': '/audio/vol1/daif.mp3',
  'ضَعِيفٌ': '/audio/vol1/daif.mp3',
  'mujtahid': '/audio/vol1/mujtahid.mp3',
  'مُجْتَهِدٌ': '/audio/vol1/mujtahid.mp3',
  'mashhur': '/audio/vol1/mashhur.mp3',
  'مَشْهُورٌ': '/audio/vol1/mashhur.mp3',

  // Lesson 4 Sentences & Phrases
  'al_kitab_jadid': '/audio/vol1/al_kitab_jadid.mp3',
  'اَلْكِتَابُ جَدِيدٌ': '/audio/vol1/al_kitab_jadid.mp3',
  'al_madrasah_saghirah': '/audio/vol1/al_madrasah_saghirah.mp3',
  'اَلْمَدْرَسَةُ صَغِيرَةٌ': '/audio/vol1/al_madrasah_saghirah.mp3',
  'al_masjid_jamil': '/audio/vol1/al_masjid_jamil.mp3',
  'اَلْمَسْجِدُ جَمِيلٌ': '/audio/vol1/al_masjid_jamil.mp3',
  'haza_al_kitab': '/audio/vol1/haza_al_kitab.mp3',
  'هَذَا الْكِتَابُ': '/audio/vol1/haza_al_kitab.mp3',
  'haza_al_kitab_jamil': '/audio/vol1/haza_al_kitab_jamil.mp3',
  'هَذَا الْكِتَابُ جَمِيلٌ': '/audio/vol1/haza_al_kitab_jamil.mp3',
  'dhalika_al_qalam': '/audio/vol1/dhalika_al_qalam.mp3',
  'ذَلِكَ الْقَلَمُ': '/audio/vol1/dhalika_al_qalam.mp3',
  'kayfa_al_kitab': '/audio/vol1/kayfa_al_kitab.mp3',
  'كَيْفَ الْكِتَابُ ؟': '/audio/vol1/kayfa_al_kitab.mp3',
  'kayfa_as_saah': '/audio/vol1/kayfa_as_saah.mp3',
  'كَيْفَ السَّاعَةُ ؟': '/audio/vol1/kayfa_as_saah.mp3',
  'kayfa_haza_al_kitab': '/audio/vol1/kayfa_haza_al_kitab.mp3',
  'كَيْفَ هَذَا الْكِتَابُ ؟': '/audio/vol1/kayfa_haza_al_kitab.mp3',
  'haza_al_kitab_mufid': '/audio/vol1/haza_al_kitab_mufid.mp3',
  'هَذَا الْكِتَابُ مُفِيدٌ': '/audio/vol1/haza_al_kitab_mufid.mp3',
  'al_marah_sharifah': '/audio/vol1/al_marah_sharifah.mp3',
  'اَلْمَرْأَةُ شَرِيفَةٌ': '/audio/vol1/al_marah_sharifah.mp3',
  'haza_al_jidar_qawiyy': '/audio/vol1/haza_al_jidar_qawiyy.mp3',
  'هَذَا الْجِدَارُ قَوِيٌّ': '/audio/vol1/haza_al_jidar_qawiyy.mp3',
  'dhalika_al_jidar_daif': '/audio/vol1/dhalika_al_jidar_daif.mp3',
  'ذَلِكَ الْجِدَارُ ضَعِيفٌ': '/audio/vol1/dhalika_al_jidar_daif.mp3',

  // Lesson 5 Family Words
  'ab': '/audio/vol1/ab.mp3',
  'أَبٌ': '/audio/vol1/ab.mp3',
  'umm': '/audio/vol1/umm.mp3',
  'أُمٌّ': '/audio/vol1/umm.mp3',
  'akh': '/audio/vol1/akh.mp3',
  'أَخٌ': '/audio/vol1/akh.mp3',
  'ukht': '/audio/vol1/ukht.mp3',
  'أُخْتٌ': '/audio/vol1/ukht.mp3',
  'amm': '/audio/vol1/amm.mp3',
  'عَمٌّ': '/audio/vol1/amm.mp3',
  'ammah': '/audio/vol1/ammah.mp3',
  'عَمَّةٌ': '/audio/vol1/ammah.mp3',
  'khal': '/audio/vol1/khal.mp3',
  'خَالٌ': '/audio/vol1/khal.mp3',
  'khalah': '/audio/vol1/khalah.mp3',
  'خَالَةٌ': '/audio/vol1/khalah.mp3',
  'jadd': '/audio/vol1/jadd.mp3',
  'جَدٌّ': '/audio/vol1/jadd.mp3',
  'jaddah': '/audio/vol1/jaddah.mp3',
  'جَدَّةٌ': '/audio/vol1/jaddah.mp3',
  'ism': '/audio/vol1/ism.mp3',
  'اِسْمٌ': '/audio/vol1/ism.mp3',
  'sadiq': '/audio/vol1/sadiq.mp3',
  'صَدِيقٌ': '/audio/vol1/sadiq.mp3',
  'aduww': '/audio/vol1/aduww.mp3',
  'عَدُوٌّ': '/audio/vol1/aduww.mp3',
  'rabb': '/audio/vol1/rabb.mp3',
  'رَبٌّ': '/audio/vol1/rabb.mp3',
  'din': '/audio/vol1/din.mp3',
  'دِينٌ': '/audio/vol1/din.mp3',
  'iqd': '/audio/vol1/iqd.mp3',
  'عِقْدٌ': '/audio/vol1/iqd.mp3',
  'kurrasah': '/audio/vol1/kurrasah.mp3',
  'كُرَّاسَةٌ': '/audio/vol1/kurrasah.mp3',
  'ghurfah': '/audio/vol1/ghurfah.mp3',
  'غُرْفَةٌ': '/audio/vol1/ghurfah.mp3',
  'firash': '/audio/vol1/firash.mp3',
  'فِرَاشٌ': '/audio/vol1/firash.mp3',
  'libas': '/audio/vol1/libas.mp3',
  'لِبَاسٌ': '/audio/vol1/libas.mp3',

  // Lesson 5 Possessive Suffixes
  'kitabi': '/audio/vol1/kitabi.mp3',
  'كِتَابِي': '/audio/vol1/kitabi.mp3',
  'kitabuka': '/audio/vol1/kitabuka.mp3',
  'كِتَابُكَ': '/audio/vol1/kitabuka.mp3',
  'kitabuki': '/audio/vol1/kitabuki.mp3',
  'كِتَابُكِ': '/audio/vol1/kitabuki.mp3',
  'kitabuhu': '/audio/vol1/kitabuhu.mp3',
  'كِتَابُهُ': '/audio/vol1/kitabuhu.mp3',
  'kitabuha': '/audio/vol1/kitabuha.mp3',
  'كِتَابُهَا': '/audio/vol1/kitabuha.mp3',
  'qalami': '/audio/vol1/qalami.mp3',
  'قَلَمِي': '/audio/vol1/qalami.mp3',
  'qalamuka': '/audio/vol1/qalamuka.mp3',
  'قَلَمُكَ': '/audio/vol1/qalamuka.mp3',
  'qalamuki': '/audio/vol1/qalamuki.mp3',
  'قَلَمُكِ': '/audio/vol1/qalamuki.mp3',
  'qalamuhu': '/audio/vol1/qalamuhu.mp3',
  'قَلَمُهُ': '/audio/vol1/qalamuhu.mp3',
  'qalamuha': '/audio/vol1/qalamuha.mp3',
  'قَلَمُهَا': '/audio/vol1/qalamuha.mp3',

  // Lesson 5 Five Nouns Irregulars with Waw
  'abi': '/audio/vol1/abi.mp3',
  'أَبِي': '/audio/vol1/abi.mp3',
  'abuka': '/audio/vol1/abuka.mp3',
  'أَبُوكَ': '/audio/vol1/abuka.mp3',
  'abuki': '/audio/vol1/abuki.mp3',
  'أَبُوكِ': '/audio/vol1/abuki.mp3',
  'abuhu': '/audio/vol1/abuhu.mp3',
  'أَبُوهُ': '/audio/vol1/abuhu.mp3',
  'abuha': '/audio/vol1/abuha.mp3',
  'أَبُوهَا': '/audio/vol1/abuha.mp3',
  'akhi': '/audio/vol1/akhi.mp3',
  'أَخِي': '/audio/vol1/akhi.mp3',
  'akhuka': '/audio/vol1/akhuka.mp3',
  'أَخُوكَ': '/audio/vol1/akhuka.mp3',
  'akhuki': '/audio/vol1/akhuki.mp3',
  'أَخُوكِ': '/audio/vol1/akhuki.mp3',
  'akhuhu': '/audio/vol1/akhuhu.mp3',
  'أَخُوهُ': '/audio/vol1/akhuhu.mp3',
  'akhuha': '/audio/vol1/akhuha.mp3',
  'أَخُوهَا': '/audio/vol1/akhuha.mp3',

  // Lesson 5 Vocatives & Sentences
  'ayyuha_al_walad': '/audio/vol1/ayyuha_al_walad.mp3',
  'أَيُّهَا الْوَلَدُ !': '/audio/vol1/ayyuha_al_walad.mp3',
  'ayyatuha_al_bint': '/audio/vol1/ayyatuha_al_bint.mp3',
  'أَيَّتُهَا الْبِنْتُ !': '/audio/vol1/ayyatuha_al_bint.mp3',
  'kitabuna': '/audio/vol1/kitabuna.mp3',
  'كِتَابُنَا': '/audio/vol1/kitabuna.mp3',
  'kitabukum': '/audio/vol1/kitabukum.mp3',
  'كِتَابُكُمْ': '/audio/vol1/kitabukum.mp3',
  'kitabuhum': '/audio/vol1/kitabuhum.mp3',
  'كِتَابُهُمْ': '/audio/vol1/kitabuhum.mp3',
  'daruna': '/audio/vol1/daruna.mp3',
  'دَارُنَا': '/audio/vol1/daruna.mp3',
  'allahu_rabbuna': '/audio/vol1/allahu_rabbuna.mp3',
  'اَللهُ رَبُّنَا وَ رَبُّكُمْ': '/audio/vol1/allahu_rabbuna.mp3',
  'muhammadun_nabiyyuna': '/audio/vol1/muhammadun_nabiyyuna.mp3',
  'مُحَمَّدٌ نَبِيُّنَا وَ نَبِيُّكُمْ': '/audio/vol1/muhammadun_nabiyyuna.mp3',
  'al_islamu_dinuna': '/audio/vol1/al_islamu_dinuna.mp3',
  'اَلْإِسْلَامُ دِينُنَا وَ دِينُكُمْ': '/audio/vol1/al_islamu_dinuna.mp3',
  'al_quranu_kitabuna': '/audio/vol1/al_quranu_kitabuna.mp3',
  'اَلْقُرْآنُ كِتَابُنَا وَ كِتَابُكُمْ': '/audio/vol1/al_quranu_kitabuna.mp3',
  'la_ilaha_illallah': '/audio/vol1/la_ilaha_illallah.mp3',
  'لَا إِلَهَ إِلَّا اللهُ كَلِمَتُنَا وَ كَلِمَتُكُمْ': '/audio/vol1/la_ilaha_illallah.mp3',
  'al_jannatu_daruna': '/audio/vol1/al_jannatu_daruna.mp3',
  'اَلْجَنَّةُ دَارُنَا وَ دَارُكُمْ': '/audio/vol1/al_jannatu_daruna.mp3',
  'al_kabatu_qiblatuna': '/audio/vol1/al_kabatu_qiblatuna.mp3',
  'اَلْكَعْبَةُ قِبْلَتُنَا وَ قِبْلَتُكُمْ': '/audio/vol1/al_kabatu_qiblatuna.mp3',
  'ismi_shahid': '/audio/vol1/ismi_shahid.mp3',
  'اِسْمِي شَاهِدٌ': '/audio/vol1/ismi_shahid.mp3',
  'ma_ismuka_ya_walad': '/audio/vol1/ma_ismuka_ya_walad.mp3',
  'مَا اسْمُكَ يَا وَلَدُ ؟': '/audio/vol1/ma_ismuka_ya_walad.mp3',
  'hal_haza_qalamuka': '/audio/vol1/hal_haza_qalamuka.mp3',
  'هَلْ هَذَا قَلَمُكَ ؟': '/audio/vol1/hal_haza_qalamuka.mp3',
  'na_am_haza_qalami': '/audio/vol1/na_am_haza_qalami.mp3',
  'نَعَمْ ، هَذَا قَلَمِي': '/audio/vol1/na_am_haza_qalami.mp3',
  'kayfa_qalamuka': '/audio/vol1/kayfa_qalamuka.mp3',
  'كَيْفَ قَلَمُكَ ؟': '/audio/vol1/kayfa_qalamuka.mp3',
  'qalami_jayyid': '/audio/vol1/qalami_jayyid.mp3',
  'قَلَمِي جَيِّدٌ': '/audio/vol1/qalami_jayyid.mp3',
  'fatimatu_ukhti': '/audio/vol1/fatimatu_ukhti.mp3',
  'فَاطِمَةُ أُخْتِي': '/audio/vol1/fatimatu_ukhti.mp3',
  'wa_ana_akhuha': '/audio/vol1/wa_ana_akhuha.mp3',
  'وَ أَنَا أَخُوهَا': '/audio/vol1/wa_ana_akhuha.mp3',
  'hazihi_ghurfati': '/audio/vol1/hazihi_ghurfati.mp3',
  'هَذِهِ غُرْفَتِي': '/audio/vol1/hazihi_ghurfati.mp3',
  'babuha_maftuh': '/audio/vol1/babuha_maftuh.mp3',
  'بَابُهَا مَفْتُوحٌ': '/audio/vol1/babuha_maftuh.mp3',

  // Lesson 6 - Idafah Rule & Examples
  'kitabu_rashidin': '/audio/vol1/kitabu_rashidin.mp3',
  'كِتَابُ رَاشِدٍ': '/audio/vol1/kitabu_rashidin.mp3',
  'kitabu_aishata': '/audio/vol1/kitabu_aishata.mp3',
  'كِتَابُ عَائِشَةَ': '/audio/vol1/kitabu_aishata.mp3',
  'kitabu_al_muallimi': '/audio/vol1/kitabu_al_muallimi.mp3',
  'كِتَابُ الْمُعَلِّمِ': '/audio/vol1/kitabu_al_muallimi.mp3',
  'qalamu_khalidin': '/audio/vol1/qalamu_khalidin.mp3',
  'قَلَمُ خَالِدٍ': '/audio/vol1/qalamu_khalidin.mp3',
  'saatu_bashirin': '/audio/vol1/saatu_bashirin.mp3',
  'سَاعَةُ بَشِيرٍ': '/audio/vol1/saatu_bashirin.mp3',
  'iqdu_aminata': '/audio/vol1/iqdu_aminata.mp3',
  'عِقْدُ آمِنَةَ': '/audio/vol1/iqdu_aminata.mp3',
  'babu_al_masjidi': '/audio/vol1/babu_al_masjidi.mp3',
  'بَابُ الْمَسْجِدِ': '/audio/vol1/babu_al_masjidi.mp3',
  'akhu_saeedin': '/audio/vol1/akhu_saeedin.mp3',
  'أَخُو سَعِيدٍ': '/audio/vol1/akhu_saeedin.mp3',
  'haqibatu_fatimata': '/audio/vol1/haqibatu_fatimata.mp3',
  'حَقِيبَةُ فَاطِمَةَ': '/audio/vol1/haqibatu_fatimata.mp3',
  'saatuhu': '/audio/vol1/saatuhu.mp3',
  'سَاعَتُهُ': '/audio/vol1/saatuhu.mp3',
  'iqduha': '/audio/vol1/iqduha.mp3',
  'عِقْدُهَا': '/audio/vol1/iqduha.mp3',

  // Lesson 6 - Dialogue Q&A
  'man_anta_ayyuha_al_rajul': '/audio/vol1/man_anta_ayyuha_al_rajul.mp3',
  'مَنْ أَنْتَ أَيُّهَا الرَّجُلُ ؟': '/audio/vol1/man_anta_ayyuha_al_rajul.mp3',
  'ana_abu_fatimata_wa_ammu_khalidin': '/audio/vol1/ana_abu_fatimata_wa_ammu_khalidin.mp3',
  'أَنَا أَبُو فَاطِمَةَ وَعَمُّ خَالِدٍ': '/audio/vol1/ana_abu_fatimata_wa_ammu_khalidin.mp3',
  'hal_haza_qalamu_khalidin': '/audio/vol1/hal_haza_qalamu_khalidin.mp3',
  'هَلْ هَذَا قَلَمُ خَالِدٍ ؟': '/audio/vol1/hal_haza_qalamu_khalidin.mp3',
  'naam_haza_qalamuhu': '/audio/vol1/naam_haza_qalamuhu.mp3',
  'نَعَمْ ، هَذَا قَلَمُهُ': '/audio/vol1/naam_haza_qalamuhu.mp3',
  'hal_babu_al_bayti_maftuh': '/audio/vol1/hal_babu_al_bayti_maftuh.mp3',
  'هَلْ بَابُ الْبَيْتِ مَفْتُوحٌ ؟': '/audio/vol1/hal_babu_al_bayti_maftuh.mp3',
  'la_babu_al_bayti_mughlaq': '/audio/vol1/la_babu_al_bayti_mughlaq.mp3',
  'لَا ، بَابُ الْبَيْتِ مُغْلَقٌ': '/audio/vol1/la_babu_al_bayti_mughlaq.mp3',
  'hal_anta_imamu_al_masjidi': '/audio/vol1/hal_anta_imamu_al_masjidi.mp3',
  'هَلْ أَنْتَ إِمَامُ الْمَسْجِدِ ؟': '/audio/vol1/hal_anta_imamu_al_masjidi.mp3',
  'naam_ana_imamu_al_masjidi': '/audio/vol1/naam_ana_imamu_al_masjidi.mp3',
  'نَعَمْ ، أَنَا إِمَامُ الْمَسْجِدِ': '/audio/vol1/naam_ana_imamu_al_masjidi.mp3',
  'imamu_al_masjidi': '/audio/vol1/imamu_al_masjidi.mp3',
  'إِمَامُ الْمَسْجِدِ': '/audio/vol1/imamu_al_masjidi.mp3',

  // Lesson 6 - Vocab & Reading
  'tariqun': '/audio/vol1/tariqun.mp3',
  'طَرِيقٌ': '/audio/vol1/tariqun.mp3',
  'suqun': '/audio/vol1/suqun.mp3',
  'سُوقٌ': '/audio/vol1/suqun.mp3',
  'qaryatun': '/audio/vol1/qaryatun.mp3',
  'قَرْيَةٌ': '/audio/vol1/qaryatun.mp3',
  'madinatun': '/audio/vol1/madinatun.mp3',
  'مَدِينَةٌ': '/audio/vol1/madinatun.mp3',
  'manzarun': '/audio/vol1/manzarun.mp3',
  'مَنْظَرٌ': '/audio/vol1/manzarun.mp3',
  'jiddan': '/audio/vol1/jiddan.mp3',
  'جِدًّا': '/audio/vol1/jiddan.mp3',
  'manzaru_al_qaryati_jamilun_jiddan': '/audio/vol1/manzaru_al_qaryati_jamilun_jiddan.mp3',
  'مَنْظَرُ الْقَرْيَةِ جَمِيلٌ جِدًّا': '/audio/vol1/manzaru_al_qaryati_jamilun_jiddan.mp3',
  'haza_al_tariqu_wasi_wa_zalika_dayyiq': '/audio/vol1/haza_al_tariqu_wasi_wa_zalika_dayyiq.mp3',
  'هَذَا الطَّرِيقُ وَاسِعٌ وَذَلِكَ الطَّرِيقُ ضَيِّقٌ': '/audio/vol1/haza_al_tariqu_wasi_wa_zalika_dayyiq.mp3',
  'suqu_al_qaryati_saghir_wa_suqu_al_madinati_kabir': '/audio/vol1/suqu_al_qaryati_saghir_wa_suqu_al_madinati_kabir.mp3',
  'سُوقُ الْقَرْيَةِ صَغِيرٌ وَسُوقُ الْمَدِينَةِ كَبِيرٌ': '/audio/vol1/suqu_al_qaryati_saghir_wa_suqu_al_madinati_kabir.mp3',
  'zawjun': '/audio/vol1/zawjun.mp3',
  'زَوْجٌ': '/audio/vol1/zawjun.mp3',
  'zawjatun': '/audio/vol1/zawjatun.mp3',
  'زَوْجَةٌ': '/audio/vol1/zawjatun.mp3',
  'walidun': '/audio/vol1/walidun.mp3',
  'وَالِدٌ': '/audio/vol1/walidun.mp3',
  'walidatun': '/audio/vol1/walidatun.mp3',
  'وَالِدَةٌ': '/audio/vol1/walidatun.mp3',
  'al_quranu_kitabullah': '/audio/vol1/al_quranu_kitabullah.mp3',
  'الْقُرْآنُ كِتَابُ اللهِ': '/audio/vol1/al_quranu_kitabullah.mp3',
  'muhammadun_rasulullah': '/audio/vol1/muhammadun_rasulullah.mp3',
  'مُحَمَّدٌ رَسُولُ اللهِ': '/audio/vol1/muhammadun_rasulullah.mp3',
  'al_kabatu_baytullah': '/audio/vol1/al_kabatu_baytullah.mp3',
  'الْكَعْبَةُ بَيْتُ اللهِ': '/audio/vol1/al_kabatu_baytullah.mp3',

  // Lesson 7 - Spatial Prepositions
  'inda': '/audio/vol1/inda.mp3',
  'عِنْدَ': '/audio/vol1/inda.mp3',
  'amama': '/audio/vol1/amama.mp3',
  'أَمَامَ': '/audio/vol1/amama.mp3',
  'waraa': '/audio/vol1/waraa.mp3',
  'وَرَاءَ': '/audio/vol1/waraa.mp3',
  'khalfa': '/audio/vol1/khalfa.mp3',
  'خَلْفَ': '/audio/vol1/khalfa.mp3',
  'tahta': '/audio/vol1/tahta.mp3',
  'تَحْتَ': '/audio/vol1/tahta.mp3',
  'fawqa': '/audio/vol1/fawqa.mp3',
  'فَوْقَ': '/audio/vol1/fawqa.mp3',
  'bijanibi': '/audio/vol1/bijanibi.mp3',
  'بِجَانِبِ': '/audio/vol1/bijanibi.mp3',
  'ayna': '/audio/vol1/ayna.mp3',
  'أَيْنَ ؟': '/audio/vol1/ayna.mp3',
  'أَيْنَ': '/audio/vol1/ayna.mp3',

  // Lesson 7 - Spatial Syntax Contrast & Fronting
  'indi_kitab': '/audio/vol1/indi_kitab.mp3',
  'عِنْدِي كِتَابٌ': '/audio/vol1/indi_kitab.mp3',
  'al_kitabu_indi': '/audio/vol1/al_kitabu_indi.mp3',
  'الْكِتَابُ عِنْدِي': '/audio/vol1/al_kitabu_indi.mp3',
  'amamaka_kitab': '/audio/vol1/amamaka_kitab.mp3',
  'أَمَامَكَ كِتَابٌ': '/audio/vol1/amamaka_kitab.mp3',
  'al_kitabu_amamaka': '/audio/vol1/al_kitabu_amamaka.mp3',
  'الْكِتَابُ أَمَامَكَ': '/audio/vol1/al_kitabu_amamaka.mp3',
  'fawqaha_mirwahah': '/audio/vol1/fawqaha_mirwahah.mp3',
  'فَوْقَهَا مِرْوَحَةٌ': '/audio/vol1/fawqaha_mirwahah.mp3',
  'al_mirwahatu_fawqaha': '/audio/vol1/al_mirwahatu_fawqaha.mp3',
  'الْمِرْوَحَةُ فَوْقَهَا': '/audio/vol1/al_mirwahatu_fawqaha.mp3',
  'inda_mani_al_qalamu': '/audio/vol1/inda_mani_al_qalamu.mp3',
  'عِنْدَ مَنِ الْقَلَمُ ؟': '/audio/vol1/inda_mani_al_qalamu.mp3',
  'al_qalamu_inda_man': '/audio/vol1/al_qalamu_inda_man.mp3',
  'الْقَلَمُ عِنْدَ مَنْ ؟': '/audio/vol1/al_qalamu_inda_man.mp3',

  // Lesson 7 - Vocab
  'massahatun': '/audio/vol1/massahatun.mp3',
  'مَسَّاحَةٌ': '/audio/vol1/massahatun.mp3',
  'kharitatun': '/audio/vol1/kharitatun.mp3',
  'خَارِطَةٌ': '/audio/vol1/kharitatun.mp3',
  'mihrathun': '/audio/vol1/mihrathun.mp3',
  'مِحْرَاثٌ': '/audio/vol1/mihrathun.mp3',
  'maksurun': '/audio/vol1/maksurun.mp3',
  'مَكْسُورٌ': '/audio/vol1/maksurun.mp3',
  'as_samau': '/audio/vol1/as_samau.mp3',
  'السَّمَاءُ': '/audio/vol1/as_samau.mp3',
  'al_ardu': '/audio/vol1/al_ardu.mp3',
  'الأَرْضُ': '/audio/vol1/al_ardu.mp3',
  'qalbun': '/audio/vol1/qalbun.mp3',
  'قَلْبٌ': '/audio/vol1/qalbun.mp3',
  'nurun': '/audio/vol1/nurun.mp3',
  'نُورٌ': '/audio/vol1/nurun.mp3',
  'zulmatun': '/audio/vol1/zulmatun.mp3',
  'ظُلْمَةٌ': '/audio/vol1/zulmatun.mp3',
  'qissatun': '/audio/vol1/qissatun.mp3',
  'قِصَّةٌ': '/audio/vol1/qissatun.mp3',

  // Lesson 7 - Dialogue Q&As
  'maza_indaka_ya_majid': '/audio/vol1/maza_indaka_ya_majid.mp3',
  'مَاذَا عِنْدَكَ يَا مَاجِدُ ؟': '/audio/vol1/maza_indaka_ya_majid.mp3',
  'indi_saah': '/audio/vol1/indi_saah.mp3',
  'عِنْدِي سَاعَةٌ': '/audio/vol1/indi_saah.mp3',
  'maza_inda_aishata': '/audio/vol1/maza_inda_aishata.mp3',
  'مَاذَا عِنْدَ عَائِشَةَ ؟': '/audio/vol1/maza_inda_aishata.mp3',
  'indaha_qalam': '/audio/vol1/indaha_qalam.mp3',
  'عِنْدَهَا قَلَمٌ': '/audio/vol1/indaha_qalam.mp3',
  'ayna_al_kharitatu': '/audio/vol1/ayna_al_kharitatu.mp3',
  'أَيْنَ الْخَارِطَةُ ؟': '/audio/vol1/ayna_al_kharitatu.mp3',
  'al_kharitatu_inda_al_muallimah': '/audio/vol1/al_kharitatu_inda_al_muallimah.mp3',
  'الْخَارِطَةُ عِنْدَ الْمُعَلِّمَةِ': '/audio/vol1/al_kharitatu_inda_al_muallimah.mp3',
  'al_qalamu_inda_aishata': '/audio/vol1/al_qalamu_inda_aishata.mp3',
  'الْقَلَمُ عِنْدَ عَائِشَةَ': '/audio/vol1/al_qalamu_inda_aishata.mp3',

  // Lesson 7 - Reading Sentences
  'as_samau_fawqana_wa_al_ardu_tahtana': '/audio/vol1/as_samau_fawqana_wa_al_ardu_tahtana.mp3',
  'السَّمَاءُ فَوْقَنَا وَالأَرْضُ تَحْتَنَا': '/audio/vol1/as_samau_fawqana_wa_al_ardu_tahtana.mp3',
  'amama_al_muallimi_sabburatun_wa_massahah': '/audio/vol1/amama_al_muallimi_sabburatun_wa_massahah.mp3',
  'أَمَامَ الْمُعَلِّمِ سَبُّورَةٌ وَمَسَّاحَةٌ': '/audio/vol1/amama_al_muallimi_sabburatun_wa_massahah.mp3',
  'sadiqu_bashirin_amama_al_masjidi': '/audio/vol1/sadiqu_bashirin_amama_al_masjidi.mp3',
  'صَدِيقُ بَشِيرٍ أَمَامَ الْمَسْجِدِ': '/audio/vol1/sadiqu_bashirin_amama_al_masjidi.mp3',
};

// Internal audio cache to avoid re-instantiating HTMLAudioElement
const audioCache = new Map<string, HTMLAudioElement>();
let currentAudio: HTMLAudioElement | null = null;

function normalizeText(text: string): string {
  return text.trim();
}

/**
 * Stop any currently playing speech or recitation.
 */
export function stopArabicAudio(): void {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

/**
 * Play authentic Arabic audio for a word, phrase, question, or Quranic Ayah.
 * Resolution priority:
 * 1. Preloaded local asset from STATIC_AUDIO_MAP (0ms instant playback)
 * 2. Dynamic high-fidelity TTS proxy endpoint `/api/tts?text=...`
 * 3. Browser SpeechSynthesis API fallback
 */
export async function playArabicAudio(textOrKey: string): Promise<void> {
  if (typeof window === 'undefined' || !textOrKey) return;

  stopArabicAudio();

  const clean = normalizeText(textOrKey);
  const audioSrc = STATIC_AUDIO_MAP[clean] || STATIC_AUDIO_MAP[clean.replace(/[؟?]/g, '').trim()];

  if (audioSrc) {
    try {
      let audio = audioCache.get(audioSrc);
      if (!audio) {
        audio = new Audio(audioSrc);
        audioCache.set(audioSrc, audio);
      } else {
        audio.currentTime = 0;
      }
      currentAudio = audio;
      await audio.play();
      return;
    } catch {
      // Audio playback failed or blocked; fall through to TTS/speechSynthesis
    }
  }

  // Fallback 1: Online Quran Ayah Recitation (Mishary Alafasy) if key is quran_SSSAAA
  if (clean.startsWith('quran_')) {
    const ayahCode = clean.replace('quran_', '');
    const quranCdnUrl = `https://everyayah.com/data/Alafasy_128kbps/${ayahCode}.mp3`;
    try {
      let audio = audioCache.get(quranCdnUrl);
      if (!audio) {
        audio = new Audio(quranCdnUrl);
        audioCache.set(quranCdnUrl, audio);
      } else {
        audio.currentTime = 0;
      }
      currentAudio = audio;
      await audio.play();
      return;
    } catch {
      // Quran CDN failed; fall through to TTS
    }
  }

  // Fallback 2: Dynamic TTS proxy endpoint
  try {
    const dynamicUrl = `/api/tts?text=${encodeURIComponent(clean)}`;
    let audio = audioCache.get(dynamicUrl);
    if (!audio) {
      audio = new Audio(dynamicUrl);
      audioCache.set(dynamicUrl, audio);
    } else {
      audio.currentTime = 0;
    }
    currentAudio = audio;
    await audio.play();
    return;
  } catch {
    // Dynamic TTS failed; fall through to SpeechSynthesis
  }

  // Fallback 2: Browser SpeechSynthesis
  if ('speechSynthesis' in window) {
    try {
      const utterance = new SpeechSynthesisUtterance(clean);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.85;

      const voices = window.speechSynthesis.getVoices();
      const arabicVoice = voices.find((v) => v.lang.startsWith('ar'));
      if (arabicVoice) {
        utterance.voice = arabicVoice;
      }
      window.speechSynthesis.speak(utterance);
    } catch {
      // Graceful silence if all speech options fail
    }
  }
}

/**
 * Preload an array of audio items so they are instantly ready when the step begins.
 */
export function preloadArabicAudio(keys: string[]): void {
  if (typeof window === 'undefined') return;
  for (const key of keys) {
    const clean = normalizeText(key);
    const audioSrc = STATIC_AUDIO_MAP[clean] || STATIC_AUDIO_MAP[clean.replace(/[؟?]/g, '').trim()];
    if (audioSrc && !audioCache.has(audioSrc)) {
      const audio = new Audio(audioSrc);
      audio.preload = 'auto';
      audioCache.set(audioSrc, audio);
    }
  }
}
