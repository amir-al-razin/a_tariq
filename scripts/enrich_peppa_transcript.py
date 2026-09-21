"""Enriches apps/web/src/data/peppa_parsed_transcript.json with real transliteration, Tashkeel, root, and English meanings."""
import json
from pathlib import Path

TRANSCRIPT_PATH = Path(r"D:\Tariq\a_tariq\apps\web\src\data\peppa_parsed_transcript.json")

# Comprehensive dictionary for Peppa Pig Arabic Shopping Episode
LEXICON = {
    "4": {"vocalized": "٤", "translit": "arba'a", "en": "4 (four)", "root": "ر-ب-ع", "pos": "number"},
    "آخر": {"vocalized": "آخَرُ", "translit": "akhar", "en": "another / other", "root": "أ-خ-ر", "pos": "adjective"},
    "آسف": {"vocalized": "آسِفٌ", "translit": "asif", "en": "sorry", "root": "أ-س-ف", "pos": "adjective"},
    "أتذكر": {"vocalized": "أَتَذَكَّرُ", "translit": "atadhakkar", "en": "I remember", "root": "ذ-ك-ر", "pos": "verb"},
    "أجدهم": {"vocalized": "أَجِدُهُمْ", "translit": "ajiduhum", "en": "I find them", "root": "و-ج-د", "pos": "verb"},
    "أجلس": {"vocalized": "أَجْلِسُ", "translit": "ajlis", "en": "I sit", "root": "ج-ل-س", "pos": "verb"},
    "أحسنت": {"vocalized": "أَحْسَنْتَ", "translit": "ahsanta", "en": "well done! (to masc.)", "root": "ح-س-ن", "pos": "verb"},
    "احسنتي": {"vocalized": "أَحْسَنْتِ", "translit": "ahsanti", "en": "well done! (to fem.)", "root": "ح-س-ن", "pos": "verb"},
    "أحسنتي": {"vocalized": "أَحْسَنْتِ", "translit": "ahsanti", "en": "well done! (to fem.)", "root": "ح-س-ن", "pos": "verb"},
    "أخي": {"vocalized": "أَخِي", "translit": "akhi", "en": "my brother", "root": "أ-خ-و", "pos": "noun"},
    "أدعينا": {"vocalized": "أَدْعَيْنَا", "translit": "ad'ayna", "en": "we pretended", "root": "د-ع-و", "pos": "verb"},
    "أربعة": {"vocalized": "أَرْبَعَةُ", "translit": "arba'ah", "en": "four", "root": "ر-ب-ع", "pos": "number"},
    "اربعة": {"vocalized": "أَرْبَعَةُ", "translit": "arba'ah", "en": "four", "root": "ر-ب-ع", "pos": "number"},
    "أشياء": {"vocalized": "أَشْيَاءُ", "translit": "ashya'", "en": "things / items", "root": "ش-ي-ء", "pos": "noun"},
    "أضعها": {"vocalized": "أَضَعُهَا", "translit": "ada'uha", "en": "I put it", "root": "و-ض-ع", "pos": "verb"},
    "ألعاب": {"vocalized": "أَلْعَابٍ", "translit": "al'ab", "en": "toys", "root": "ل-ع-ب", "pos": "noun"},
    "ألعاب؟": {"vocalized": "أَلْعَابٍ؟", "translit": "al'ab?", "en": "toys?", "root": "ل-ع-ب", "pos": "noun"},
    "أن": {"vocalized": "أَنْ", "translit": "an", "en": "to / that", "root": None, "pos": "particle"},
    "أنا": {"vocalized": "أَنَا", "translit": "ana", "en": "I / me", "root": "أ-ن-ا", "pos": "pronoun"},
    "أنت": {"vocalized": "أَنْتِ", "translit": "anti", "en": "you (fem.)", "root": "أ-ن-ت", "pos": "pronoun"},
    "أولاً": {"vocalized": "أَوَّلًا", "translit": "awwalan", "en": "first / firstly", "root": "أ-و-ل", "pos": "adverb"},
    "أيضاً": {"vocalized": "أَيْضًا", "translit": "aydan", "en": "also / too", "root": "أ-ي-ض", "pos": "adverb"},
    "أيضا؟": {"vocalized": "أَيْضًا؟", "translit": "aydan?", "en": "too?", "root": "أ-ي-ض", "pos": "adverb"},
    "أين": {"vocalized": "أَيْنَ", "translit": "ayna", "en": "where", "root": None, "pos": "interrogative"},
    "إذن": {"vocalized": "إِذَنْ", "translit": "idhan", "en": "so / then", "root": None, "pos": "particle"},
    "إلى": {"vocalized": "إِلَى", "translit": "ila", "en": "to / towards", "root": None, "pos": "preposition"},
    "إنها": {"vocalized": "إِنَّهَا", "translit": "innaha", "en": "it is / indeed she is", "root": None, "pos": "particle"},
    "اثنان": {"vocalized": "اِثْنَانِ", "translit": "ithnan", "en": "two", "root": "ث-ن-ي", "pos": "number"},
    "اختارناه": {"vocalized": "اخْتَرْنَاهُ", "translit": "ikhtarnahu", "en": "we picked it", "root": "خ-ي-ر", "pos": "verb"},
    "اسبغيّتي،": {"vocalized": "اِسْبَغْيِتِّي،", "translit": "isbaghiti,", "en": "spaghetti,", "root": None, "pos": "noun"},
    "سباغيتي": {"vocalized": "سَبَاغِيتِي", "translit": "spaghetti", "en": "spaghetti", "root": None, "pos": "noun"},
    "سباجاتي": {"vocalized": "سَبَاغِيتِي", "translit": "spaghetti", "en": "spaghetti", "root": None, "pos": "noun"},
    "سباقتي": {"vocalized": "سَبَاغِيتِي", "translit": "spaghetti", "en": "spaghetti", "root": None, "pos": "noun"},
    "سباكتي": {"vocalized": "سَبَاغِيتِي", "translit": "spaghetti", "en": "spaghetti", "root": None, "pos": "noun"},
    "اشتركوا": {"vocalized": "اشْتَرِكُوا", "translit": "ishtaraku", "en": "subscribe!", "root": "ش-ر-ك", "pos": "verb"},
    "الان": {"vocalized": "الْآنَ", "translit": "al-an", "en": "now", "root": None, "pos": "adverb"},
    "والآن": {"vocalized": "وَالْآنَ", "translit": "wa-al-an", "en": "and now", "root": None, "pos": "adverb"},
    "البرتقال": {"vocalized": "الْبُرْتُقَالُ", "translit": "al-burtuqal", "en": "the oranges", "root": None, "pos": "noun"},
    "برتقال": {"vocalized": "بُرْتُقَالٌ", "translit": "burtuqal", "en": "oranges", "root": None, "pos": "noun"},
    "البصر": {"vocalized": "الْبَصَلُ", "translit": "al-basal", "en": "the onions", "root": "ب-ص-ل", "pos": "noun"},
    "بصل": {"vocalized": "بَصَلٌ", "translit": "basal", "en": "onions", "root": "ب-ص-ل", "pos": "noun"},
    "بصر": {"vocalized": "بَصَلٌ", "translit": "basal", "en": "onions", "root": "ب-ص-ل", "pos": "noun"},
    "البطاطس": {"vocalized": "الْبَطَاطِسُ", "translit": "al-batatis", "en": "the potatoes", "root": None, "pos": "noun"},
    "بطاطس": {"vocalized": "بَطَاطِسُ", "translit": "batatis", "en": "potatoes", "root": None, "pos": "noun"},
    "البقالة": {"vocalized": "الْبِقَالَةُ", "translit": "al-biqalah", "en": "the grocery", "root": "ب-ق-ل", "pos": "noun"},
    "التالي؟": {"vocalized": "التَّالِي؟", "translit": "al-tali?", "en": "the next?", "root": "ت-ل-و", "pos": "adjective"},
    "التالي": {"vocalized": "التَّالِي", "translit": "al-tali", "en": "the next", "root": "ت-ل-و", "pos": "adjective"},
    "التسوق": {"vocalized": "التَّسَوُّقُ", "translit": "al-tasawwuq", "en": "shopping", "root": "س-و-ق", "pos": "noun"},
    "بالتسوق": {"vocalized": "بِالتَّسَوُّقِ", "translit": "bi-l-tasawwuq", "en": "with shopping", "root": "س-و-ق", "pos": "prep_noun"},
    "التفاح": {"vocalized": "التُّفَّاحُ", "translit": "al-tuffah", "en": "the apples", "root": "ت-ف-ح", "pos": "noun"},
    "تفاح": {"vocalized": "تُفَّاحٌ", "translit": "tuffah", "en": "apples", "root": "ت-ف-ح", "pos": "noun"},
    "الثالثة": {"vocalized": "الثَّالِثَةُ", "translit": "al-thalithah", "en": "the third", "root": "ث-ل-ث", "pos": "number"},
    "الشوكولاتة": {"vocalized": "الشُّوكُولَاتَةُ", "translit": "al-shukulatah", "en": "the chocolate", "root": None, "pos": "noun"},
    "تشكولاتا": {"vocalized": "شُوكُولَاتَة", "translit": "shukulatah", "en": "chocolate", "root": None, "pos": "noun"},
    "الطماطم": {"vocalized": "الطَّمَاطِمُ", "translit": "al-tamatim", "en": "the tomatoes", "root": None, "pos": "noun"},
    "طماطم": {"vocalized": "طَمَاطِمُ", "translit": "tamatim", "en": "tomatoes", "root": None, "pos": "noun"},
    "طماطم،": {"vocalized": "طَمَاطِمُ،", "translit": "tamatim,", "en": "tomatoes,", "root": None, "pos": "noun"},
    "العربة": {"vocalized": "الْعَرَبَةُ", "translit": "al-'arabah", "en": "the cart / trolley", "root": "ع-ر-ب", "pos": "noun"},
    "العربة؟": {"vocalized": "الْعَرَبَةُ؟", "translit": "al-'arabah?", "en": "the cart?", "root": "ع-ر-ب", "pos": "noun"},
    "عربة": {"vocalized": "عَرَبَةِ", "translit": "'arabah", "en": "cart / trolley", "root": "ع-ر-ب", "pos": "noun"},
    "الفاكهة": {"vocalized": "الْفَاكِهَةُ", "translit": "al-fakihah", "en": "the fruit", "root": "ف-ك-ه", "pos": "noun"},
    "الفواكه": {"vocalized": "الْفَوَاكِهُ", "translit": "al-fawakih", "en": "the fruits", "root": "ف-ك-ه", "pos": "noun"},
    "الفواكه؟": {"vocalized": "الْفَوَاكِهُ؟", "translit": "al-fawakih?", "en": "the fruits?", "root": "ف-ك-ه", "pos": "noun"},
    "وفواكه": {"vocalized": "وَفَوَاكِهُ", "translit": "wa-fawakih", "en": "and fruits", "root": "ف-ك-ه", "pos": "noun"},
    "القائمة": {"vocalized": "الْقَائِمَةُ", "translit": "al-qa'imah", "en": "the list", "root": "ق-و-م", "pos": "noun"},
    "القائمة؟": {"vocalized": "الْقَائِمَةُ؟", "translit": "al-qa'imah?", "en": "the list?", "root": "ق-و-م", "pos": "noun"},
    "القناة": {"vocalized": "الْقَنَاةُ", "translit": "al-qanah", "en": "the channel", "root": "ق-ن-ي", "pos": "noun"},
    "الكثير": {"vocalized": "الْكَثِيرُ", "translit": "al-kathir", "en": "a lot / many", "root": "ك-ث-ر", "pos": "adjective"},
    "اللي": {"vocalized": "اللِّي", "translit": "illi", "en": "which / that (spoken)", "root": None, "pos": "relative"},
    "المجد": {"vocalized": "الْمَجْدُ", "translit": "al-majd", "en": "glory (channel)", "root": "م-ج-د", "pos": "proper_noun"},
    "الموز": {"vocalized": "الْمَوْزُ", "translit": "al-mawz", "en": "the bananas", "root": "م-و-ز", "pos": "noun"},
    "موز": {"vocalized": "مَوْزٌ", "translit": "mawz", "en": "bananas", "root": "م-و-ز", "pos": "noun"},
    "ايه؟": {"vocalized": "إِيهْ؟", "translit": "eyh?", "en": "what?", "root": None, "pos": "interrogative"},
    "بابا": {"vocalized": "بَابَا", "translit": "baba", "en": "Daddy", "root": None, "pos": "noun"},
    "باقي": {"vocalized": "بَاقِي", "translit": "baqi", "en": "remaining", "root": "ب-ق-ي", "pos": "noun"},
    "بضعها": {"vocalized": "بِضَاعَتُهَا", "translit": "bida'atuha", "en": "her groceries", "root": "ب-ض-ع", "pos": "noun"},
    "بضعتها": {"vocalized": "بِضَاعَتُهَا", "translit": "bida'atuha", "en": "her groceries", "root": "ب-ض-ع", "pos": "noun"},
    "بطيخة": {"vocalized": "بِطِّيخَةٌ", "translit": "bittikhah", "en": "watermelon", "root": "ب-ط-خ", "pos": "noun"},
    "بندورة": {"vocalized": "بَنْدُورَةٌ", "translit": "bandurah", "en": "tomatoes", "root": None, "pos": "noun"},
    "بيبا": {"vocalized": "بِيبَا", "translit": "peppa", "en": "Peppa", "root": None, "pos": "proper_noun"},
    "بيبا؟": {"vocalized": "بِيبَا؟", "translit": "peppa?", "en": "Peppa?", "root": None, "pos": "proper_noun"},
    "بيبتا": {"vocalized": "بِيبَا", "translit": "peppa", "en": "Peppa", "root": None, "pos": "proper_noun"},
    "بيجاتي": {"vocalized": "سَبَاغِيتِي", "translit": "spaghetti", "en": "spaghetti", "root": None, "pos": "noun"},
    "بيغ": {"vocalized": "بِيغْ", "translit": "pig", "en": "Pig", "root": None, "pos": "proper_noun"},
    "تبدو": {"vocalized": "تَبْدُو", "translit": "tabdu", "en": "looks / appears", "root": "ب-د-و", "pos": "verb"},
    "تتذكر": {"vocalized": "تَتَذَكَّرُ", "translit": "tatadhakkar", "en": "remembers / you remember", "root": "ذ-ك-ر", "pos": "verb"},
    "تحسنتي": {"vocalized": "أَحْسَنْتِ", "translit": "ahsanti", "en": "well done!", "root": "ح-س-ن", "pos": "verb"},
    "تختار": {"vocalized": "تَخْتَارُ", "translit": "takhtar", "en": "she chooses", "root": "خ-ي-ر", "pos": "verb"},
    "تذكرته": {"vocalized": "تَذَكَّرْتُهُ", "translit": "tadhakkartuhu", "en": "I remembered it", "root": "ذ-ك-ر", "pos": "verb"},
    "تريد": {"vocalized": "تُرِيدُ", "translit": "turid", "en": "wants", "root": "ر-و-د", "pos": "verb"},
    "تساعد": {"vocalized": "تُسَاعِدَ", "translit": "tusa'id", "en": "help", "root": "س-ع-د", "pos": "verb"},
    "تقلق": {"vocalized": "تَقْلَقْ", "translit": "taqlaq", "en": "worry", "root": "ق-ل-ق", "pos": "verb"},
    "تلفة": {"vocalized": "طِفْلَةٌ", "translit": "tislah", "en": "child / young girl", "root": "ط-ف-ل", "pos": "noun"},
    "تلي": {"vocalized": "تَلِي", "translit": "tali", "en": "follows / next", "root": "ت-ل-و", "pos": "verb"},
    "توجد": {"vocalized": "تُوجَدُ", "translit": "tujad", "en": "is found / there is", "root": "و-ج-د", "pos": "verb"},
    "ثلاثة": {"vocalized": "ثَلَاثَةُ", "translit": "thalathah", "en": "three", "root": "ث-ل-ث", "pos": "number"},
    "جورج": {"vocalized": "جُورْج", "translit": "george", "en": "George", "root": None, "pos": "proper_noun"},
    "جورج؟": {"vocalized": "جُورْج؟", "translit": "george?", "en": "George?", "root": None, "pos": "proper_noun"},
    "حاكا": {"vocalized": "هٰكَذَا", "translit": "hakadha", "en": "like this", "root": None, "pos": "adverb"},
    "حسنا": {"vocalized": "حَسَنًا", "translit": "hasanan", "en": "okay / alright", "root": "ح-س-ن", "pos": "adverb"},
    "خم": {"vocalized": "هُمْ", "translit": "hum", "en": "them", "root": None, "pos": "pronoun"},
    "ديناصور": {"vocalized": "دِينَاصُور", "translit": "dinasur", "en": "dinosaur", "root": None, "pos": "noun"},
    "ديناصور؟": {"vocalized": "دِينَاصُور؟", "translit": "dinasur?", "en": "dinosaur?", "root": None, "pos": "noun"},
    "دينوسور": {"vocalized": "دِينَاصُور", "translit": "dinasur", "en": "dinosaur", "root": None, "pos": "noun"},
    "رأيتهم": {"vocalized": "رَأَيْتُهُمْ", "translit": "ra'aytuhum", "en": "I saw them", "root": "ر-أ-ي", "pos": "verb"},
    "سوف": {"vocalized": "سَوْفَ", "translit": "sawfa", "en": "will (future particle)", "root": None, "pos": "particle"},
    "شهية": {"vocalized": "شَهِيَّةٌ", "translit": "shahiyyah", "en": "delicious", "root": "ش-ه-و", "pos": "adjective"},
    "شيء": {"vocalized": "شَيْءٍ", "translit": "shay'", "en": "thing / item", "root": "ش-ي-ء", "pos": "noun"},
    "على": {"vocalized": "عَلَى", "translit": "'ala", "en": "on / upon", "root": None, "pos": "preposition"},
    "في": {"vocalized": "فِي", "translit": "fi", "en": "in / inside", "root": None, "pos": "preposition"},
    "كبيرة": {"vocalized": "كَبِيرَةٌ", "translit": "kabirah", "en": "big / grown-up", "root": "ك-ب-ر", "pos": "adjective"},
    "كعكة": {"vocalized": "كَعْكَةُ", "translit": "ka'kah", "en": "cake", "root": "ك-ع-ك", "pos": "noun"},
    "كلا": {"vocalized": "كَلَّا", "translit": "kalla", "en": "no / not at all", "root": None, "pos": "particle"},
    "كلهم": {"vocalized": "كُلُّهُمْ", "translit": "kullahum", "en": "all of them", "root": "ك-ل-ل", "pos": "noun"},
    "لا": {"vocalized": "لَا", "translit": "la", "en": "no / don't", "root": None, "pos": "particle"},
    "لدينا": {"vocalized": "لَدَيْنَا", "translit": "ladayna", "en": "we have", "root": "ل-د-ي", "pos": "preposition"},
    "لم": {"vocalized": "لَمْ", "translit": "lam", "en": "did not", "root": None, "pos": "particle"},
    "لنكتبها": {"vocalized": "لِنَكْتُبْهَا", "translit": "linaktubha", "en": "let's write it down", "root": "ك-ت-ب", "pos": "verb"},
    "ما": {"vocalized": "مَا", "translit": "ma", "en": "what", "root": None, "pos": "interrogative"},
    "ماذا": {"vocalized": "مَاذَا", "translit": "madha", "en": "what", "root": None, "pos": "interrogative"},
    "ماما": {"vocalized": "مَامَا", "translit": "mama", "en": "Mummy", "root": None, "pos": "noun"},
    "ماما؟": {"vocalized": "مَامَا؟", "translit": "mama?", "en": "Mummy?", "root": None, "pos": "noun"},
    "مقلية": {"vocalized": "مَقْلِيَّة", "translit": "maqliyyah", "en": "fried", "root": "ق-ل-ي", "pos": "adjective"},
    "من": {"vocalized": "مِنْ", "translit": "min", "en": "from", "root": None, "pos": "preposition"},
    "من؟": {"vocalized": "مِنْ؟", "translit": "min?", "en": "from?", "root": None, "pos": "preposition"},
    "منها": {"vocalized": "مِنْهَا", "translit": "minha", "en": "from it", "root": None, "pos": "preposition"},
    "ناتي": {"vocalized": "نَأْتِي", "translit": "na'ti", "en": "we come", "root": "أ-ت-ي", "pos": "verb"},
    "نحتاج": {"vocalized": "نَحْتَاجُ", "translit": "nahtaj", "en": "we need", "root": "ح-و-ج", "pos": "verb"},
    "نضعهم": {"vocalized": "نَضَعُهُمْ", "translit": "nada'uhum", "en": "we put them", "root": "و-ض-ع", "pos": "verb"},
    "ها": {"vocalized": "هَا", "translit": "ha", "en": "here / look!", "root": None, "pos": "particle"},
    "هات": {"vocalized": "هَاتِ", "translit": "hati", "en": "give me / bring", "root": "ه-ت-و", "pos": "verb"},
    "هل": {"vocalized": "هَلْ", "translit": "hal", "en": "can / do / is (question)", "root": None, "pos": "particle"},
    "هنا": {"vocalized": "هُنَا", "translit": "huna", "en": "here", "root": None, "pos": "adverb"},
    "هناك": {"vocalized": "هُنَاكَ", "translit": "hunaka", "en": "there", "root": None, "pos": "adverb"},
    "هو": {"vocalized": "هُوَ", "translit": "huwa", "en": "he / it", "root": None, "pos": "pronoun"},
    "هي": {"vocalized": "هِيَ", "translit": "hiya", "en": "she / it", "root": None, "pos": "pronoun"},
    "هيا": {"vocalized": "هَيَّا", "translit": "hayya", "en": "let's go! / come on", "root": None, "pos": "particle"},
    "واحد": {"vocalized": "وَاحِدٌ", "translit": "wahid", "en": "one", "root": "و-ح-د", "pos": "number"},
    "وبطن": {"vocalized": "وَبَطْنِ", "translit": "wa-batn", "en": "and belly", "root": "ب-ط-ن", "pos": "noun"},
    "ورد": {"vocalized": "وَرْدٌ", "translit": "ward", "en": "flowers", "root": "و-ر-د", "pos": "noun"},
    "وضعت": {"vocalized": "وَضَعَتْ", "translit": "wada'at", "en": "put / placed", "root": "و-ض-ع", "pos": "verb"},
    "وهذا": {"vocalized": "وَهٰذَا", "translit": "wa-hadha", "en": "and this", "root": "ذ-ا", "pos": "demonstrative"},
    "وهذه": {"vocalized": "وَهٰذِهِ", "translit": "wa-hadhihi", "en": "and this (fem.)", "root": "ذ-ه", "pos": "demonstrative"},
    "ياي": {"vocalized": "يَايْ!", "translit": "yay!", "en": "yay! (cheering)", "root": None, "pos": "interjection"},
    "يمكنك": {"vocalized": "يُمْكِنُكِ", "translit": "yumkinuki", "en": "you can (fem.)", "root": "م-ك-ن", "pos": "verb"},
    "يمكنني": {"vocalized": "يُمْكِنُنِي", "translit": "yumkinuni", "en": "can I / possible for me", "root": "م-ك-ن", "pos": "verb"},
}

with open(TRANSCRIPT_PATH, "r", encoding="utf-8") as f:
    data = json.load(f)

enriched_count = 0
for sentence in data:
    for word in sentence.get("words", []):
        raw = word.get("ar", "").strip()
        info = LEXICON.get(raw)
        if info:
            word["vocalized"] = info["vocalized"]
            word["transliteration"] = info["translit"]
            word["en"] = info["en"]
            word["root"] = info["root"]
            word["pos"] = info["pos"]
            enriched_count += 1
        else:
            word["vocalized"] = raw
            word["transliteration"] = raw
            word["en"] = raw
            word["root"] = None
            word["pos"] = "word"

with open(TRANSCRIPT_PATH, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Successfully enriched {enriched_count} words in {TRANSCRIPT_PATH}")
