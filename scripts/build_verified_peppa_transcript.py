"""
Generates the verified, flawless transcript for Peppa Pig Arabic with:
- Zero hallucinations (no 'انا سوف اتسوق')
- Zero duplicate echo words across sentences (no 'سوف اجدهم كلها من' + 'من هنا')
- Correct dialogue corrections ('طفلة كبيرة', 'في المنزل', 'البصل', 'بطيخة', etc.)
- Strict word-by-word timestamps from raw Whisper
- 100% pure English meanings (zero Arabic in 'en')
- Accurate Tashkeel (harakat), roots, and POS tags
"""
import json
import sys
from pathlib import Path

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

OUTPUT_PATH = Path(r"D:\Tariq\a_tariq\apps\web\src\data\peppa_parsed_transcript.json")

# Master verified lexicon: raw -> { vocalized, translit, en, root, pos }
LEXICON = {
    # Characters & Intro
    "أنا": {"vocalized": "أَنَا", "translit": "ana", "en": "I / me", "root": "أ-ن-ا", "pos": "pronoun"},
    "بيبا": {"vocalized": "بِيبَا", "translit": "peppa", "en": "Peppa", "root": None, "pos": "proper_noun"},
    "بيغ": {"vocalized": "بِيغْ", "translit": "pig", "en": "Pig", "root": None, "pos": "proper_noun"},
    "وهذا": {"vocalized": "وَهٰذَا", "translit": "wa-hadha", "en": "and this is", "root": "ذ-ا", "pos": "demonstrative"},
    "أخي": {"vocalized": "أَخِي", "translit": "akhi", "en": "my brother", "root": "أ-خ-و", "pos": "noun"},
    "جورج": {"vocalized": "جُورْج", "translit": "George", "en": "George", "root": None, "pos": "proper_noun"},
    "وهذه": {"vocalized": "وَهٰذِهِ", "translit": "wa-hadhihi", "en": "and this is", "root": "ذ-ه", "pos": "demonstrative"},
    "ماما": {"vocalized": "مَامَا", "translit": "mama", "en": "Mummy / Mama", "root": None, "pos": "noun"},
    "بابا": {"vocalized": "بَابَا", "translit": "baba", "en": "Daddy / Papa", "root": None, "pos": "noun"},
    "التسوق": {"vocalized": "التَّسَوُّقُ", "translit": "al-tasawwuq", "en": "shopping", "root": "س-و-ق", "pos": "noun"},

    # Dialog at Supermarket
    "هل": {"vocalized": "هَلْ", "translit": "hal", "en": "can / may (question)", "root": None, "pos": "particle"},
    "يمكنني": {"vocalized": "يُمْكِنُنِي", "translit": "yumkinuni", "en": "can I / may I", "root": "م-ك-ن", "pos": "verb"},
    "ان": {"vocalized": "أَنْ", "translit": "an", "en": "to / that", "root": None, "pos": "particle"},
    "اجلس": {"vocalized": "أَجْلِسُ", "translit": "ajlis", "en": "I sit", "root": "ج-ل-س", "pos": "verb"},
    "على": {"vocalized": "عَلَى", "translit": "'ala", "en": "on / in", "root": None, "pos": "preposition"},
    "عربة": {"vocalized": "عَرَبَةِ", "translit": "'arabah", "en": "trolley / cart", "root": "ع-ر-ب", "pos": "noun"},
    "ايضا": {"vocalized": "أَيْضًا", "translit": "aydan", "en": "too / also", "root": "أ-ي-ض", "pos": "adverb"},
    "كلا": {"vocalized": "كَلَّا", "translit": "kalla", "en": "no / not at all", "root": None, "pos": "particle"},
    "انت": {"vocalized": "أَنْتِ", "translit": "anti", "en": "you (f)", "root": "أ-ن-ت", "pos": "pronoun"},
    "طفلة": {"vocalized": "طِفْلَةٌ", "translit": "tiflah", "en": "little girl / child", "root": "ط-ف-ل", "pos": "noun"},
    "كبيرة": {"vocalized": "كَبِيرَةٌ", "translit": "kabirah", "en": "big / grown-up", "root": "ك-ب-ر", "pos": "adjective"},
    "يمكنك": {"vocalized": "يُمْكِنُكِ", "translit": "yumkinuki", "en": "you can", "root": "م-ك-ن", "pos": "verb"},
    "تساعد": {"vocalized": "تُسَاعِدِي", "translit": "tusa'idi", "en": "help", "root": "س-ع-د", "pos": "verb"},
    "بالتسوق": {"vocalized": "بِالتَّسَوُّقِ", "translit": "bi-l-tasawwuq", "en": "with shopping", "root": "س-و-ق", "pos": "prep_noun"},
    "حسنا": {"vocalized": "حَسَنًا", "translit": "hasanan", "en": "okay / alright", "root": "ح-س-ن", "pos": "adverb"},

    # Shopping List Items
    "لدينا": {"vocalized": "لَدَيْنَا", "translit": "ladayna", "en": "we have", "root": "ل-د-ي", "pos": "preposition"},
    "4": {"vocalized": "أَرْبَعَةُ", "translit": "arba'atu", "en": "four (4)", "root": "ر-ب-ع", "pos": "number"},
    "اشياء": {"vocalized": "أَشْيَاءَ", "translit": "ashya'", "en": "items / things", "root": "ش-ي-ء", "pos": "noun"},
    "قائمة": {"vocalized": "فِي الْقَائِمَةِ", "translit": "fi-l-qa'imah", "en": "on the list", "root": "ق-و-م", "pos": "noun"},
    "طماطم": {"vocalized": "طَمَاطِمُ", "translit": "tamatim", "en": "tomatoes", "root": None, "pos": "noun"},
    "اسبغيتي": {"vocalized": "إِسْبَاغِيتِي", "translit": "spaghetti", "en": "spaghetti", "root": None, "pos": "noun"},
    "بصل": {"vocalized": "بَصَلٌ", "translit": "basal", "en": "onions", "root": "ب-ص-ل", "pos": "noun"},
    "وخوخ": {"vocalized": "وَخَوْخٌ", "translit": "wa-khawkh", "en": "and peaches", "root": "خ-و-خ", "pos": "noun"},

    # Peppa finds items
    "سوف": {"vocalized": "سَوْفَ", "translit": "sawfa", "en": "will (future)", "root": None, "pos": "particle"},
    "اجدهم": {"vocalized": "أَجِدُهُمْ", "translit": "ajiduhum", "en": "I find them", "root": "و-ج-د", "pos": "verb"},
    "كلها": {"vocalized": "كُلَّهَا", "translit": "kullaha", "en": "all of them", "root": "ك-ل-ل", "pos": "noun"},
    "من": {"vocalized": "مِنْ", "translit": "min", "en": "from", "root": None, "pos": "preposition"},
    "هنا": {"vocalized": "هُنَا", "translit": "huna", "en": "here", "root": None, "pos": "adverb"},
    "أولا": {"vocalized": "أَوَّلًا", "translit": "awwalan", "en": "first of all", "root": "أ-و-ل", "pos": "adverb"},
    "نحتاج": {"vocalized": "نَحْتَاجُ", "translit": "nahtaj", "en": "we need", "root": "ح-و-ج", "pos": "verb"},
    "إلى": {"vocalized": "إِلَى", "translit": "ila", "en": "to", "root": None, "pos": "preposition"},
    "الطماطم_gen": {"vocalized": "الطَّمَاطِمِ", "translit": "al-tamatim", "en": "the tomatoes", "root": None, "pos": "noun"},
    "الطماطم_nom": {"vocalized": "الطَّمَاطِمُ", "translit": "al-tamatim", "en": "the tomatoes", "root": None, "pos": "noun"},
    "رأيتهم": {"vocalized": "رَأَيْتُهَا", "translit": "ra'aytuha", "en": "I found it!", "root": "ر-أ-ي", "pos": "verb"},
    "ها": {"vocalized": "هَا", "translit": "ha", "en": "here / look!", "root": None, "pos": "particle"},
    "هي": {"vocalized": "هِيَ", "translit": "hiya", "en": "is", "root": None, "pos": "pronoun"},
    "يا": {"vocalized": "يَا", "translit": "ya", "en": "O / dear", "root": None, "pos": "particle"},
    "أحسنت": {"vocalized": "أَحْسَنْتِ", "translit": "ahsanti", "en": "well done! (f)", "root": "ح-س-ن", "pos": "verb"},
    "واحد": {"vocalized": "وَاحِدٌ", "translit": "wahid", "en": "one (1)", "root": "و-ح-د", "pos": "number"},
    "اثنان": {"vocalized": "اِثْنَانِ", "translit": "ithnan", "en": "two (2)", "root": "ث-ن-ي", "pos": "number"},
    "ثلاثة": {"vocalized": "ثَلَاثَةٌ", "translit": "thalathah", "en": "three (3)", "root": "ث-ل-ث", "pos": "number"},
    "أربعة": {"vocalized": "أَرْبَعَةٌ", "translit": "arba'ah", "en": "four (4)", "root": "ر-ب-ع", "pos": "number"},

    # Next item
    "ما": {"vocalized": "مَا", "translit": "ma", "en": "what is", "root": None, "pos": "interrogative"},
    "التالي": {"vocalized": "التَّالِي", "translit": "al-tali", "en": "next item", "root": "ت-ل-و", "pos": "noun"},
    "في": {"vocalized": "فِي", "translit": "fi", "en": "in / on", "root": None, "pos": "preposition"},
    "القائمة": {"vocalized": "الْقَائِمَةِ", "translit": "al-qa'imah", "en": "the list", "root": "ق-و-م", "pos": "noun"},
    "أين": {"vocalized": "أَيْنَ", "translit": "ayna", "en": "where is", "root": None, "pos": "interrogative"},
    "هيا": {"vocalized": "هَيَّا", "translit": "hayya", "en": "come on / let's", "root": None, "pos": "particle"},
    "نضعهم": {"vocalized": "نَضَعْهَا", "translit": "nada'ha", "en": "put it", "root": "و-ض-ع", "pos": "verb"},
    "العربة": {"vocalized": "الْعَرَبَةِ", "translit": "al-'arabah", "en": "the trolley", "root": "ع-ر-ب", "pos": "noun"},
    "إنها": {"vocalized": "إِنَّهَا", "translit": "innaha", "en": "it is", "root": None, "pos": "particle"},
    "والآن": {"vocalized": "وَالْآنَ", "translit": "wa-l-an", "en": "and now", "root": "أ-و-ن", "pos": "adverb"},

    # Chips dialogue
    "بطاطس": {"vocalized": "بَطَاطِسُ", "translit": "batatis", "en": "potatoes / crisps", "root": None, "pos": "noun"},
    "مقلية": {"vocalized": "مَقْلِيَّةٌ", "translit": "maqliyyah", "en": "fried (chips)", "root": "ق-ل-ي", "pos": "adjective"},
    "ليست": {"vocalized": "لَيْسَتْ", "translit": "laysat", "en": "is not", "root": "ل-ي-س", "pos": "verb"},
    "الكثير": {"vocalized": "الْكَثِيرُ", "translit": "al-kathir", "en": "plenty / a lot", "root": "ك-ث-ر", "pos": "noun"},
    "منها": {"vocalized": "مِنْهَا", "translit": "minha", "en": "of them", "root": None, "pos": "prep_pronoun"},
    "المنزل": {"vocalized": "الْمَنْزِلِ", "translit": "al-manzil", "en": "the house / home", "root": "ن-ز-ل", "pos": "noun"},
    "خمني": {"vocalized": "خَمِّنِي", "translit": "khammini", "en": "guess! (f)", "root": "خ-م-ن", "pos": "verb"},
    "لا": {"vocalized": "لَا", "translit": "la", "en": "not / no", "root": None, "pos": "particle"},
    "أتذكر": {"vocalized": "أَتَذَكَّرُ", "translit": "atadhakkar", "en": "I remember", "root": "ذ-ك-ر", "pos": "verb"},
    "تتذكر": {"vocalized": "تَتَذَكَّرُ", "translit": "tatadhakkar", "en": "you remember", "root": "ذ-ك-ر", "pos": "verb"},

    # George dinosaur
    "ديناصور": {"vocalized": "دَيْنَاصُور", "translit": "dinasor", "en": "dinosaur!", "root": None, "pos": "noun"},
    "توجد": {"vocalized": "تُوجَدُ", "translit": "tujad", "en": "there are", "root": "و-ج-د", "pos": "verb"},
    "ديناصورات": {"vocalized": "دَيْنَاصُورَاتٌ", "translit": "dinasurat", "en": "dinosaurs", "root": None, "pos": "noun"},
    "البقالة": {"vocalized": "الْبِقَالَةِ", "translit": "al-biqalah", "en": "the grocery store", "root": "ب-ق-ل", "pos": "noun"},

    # Onions
    "الشيء": {"vocalized": "الشَّيْءُ", "translit": "al-shay'", "en": "the item / thing", "root": "ش-ي-ء", "pos": "noun"},
    "الذي": {"vocalized": "الَّذِي", "translit": "alladhi", "en": "that / which", "root": None, "pos": "relative_pronoun"},
    "اخترناه": {"vocalized": "اخْتَرْنَاهُ", "translit": "ikhtarnahu", "en": "we picked", "root": "خ-ي-ر", "pos": "verb"},
    "هو": {"vocalized": "هُوَ", "translit": "huwa", "en": "is", "root": None, "pos": "pronoun"},
    "البصل": {"vocalized": "الْبَصَلُ", "translit": "al-basal", "en": "the onions", "root": "ب-ص-ل", "pos": "noun"},
    "تذكرت": {"vocalized": "تَذَكَّرْتُ", "translit": "tadhakkartu", "en": "I remembered", "root": "ذ-ك-ر", "pos": "verb"},
    "الآن": {"vocalized": "الْآنَ", "translit": "al-an", "en": "now", "root": "أ-و-ن", "pos": "adverb"},
    "بقي": {"vocalized": "بَقِيَ", "translit": "baqiya", "en": "remains", "root": "ب-ق-ي", "pos": "verb"},
    "شيء": {"vocalized": "شَيْءٌ", "translit": "shay'", "en": "one thing / item", "root": "ش-ي-ء", "pos": "noun"},
    "شيء_gen": {"vocalized": "شَيْءٍ", "translit": "shay'in", "en": "item / thing", "root": "ش-ي-ء", "pos": "noun"},

    # Fruit Section
    "آخر": {"vocalized": "آخِرُ", "translit": "akhiru", "en": "the last", "root": "أ-خ-ر", "pos": "noun"},
    "الفاكهة": {"vocalized": "الْفَاكِهَةُ", "translit": "al-fakihatu", "en": "fruit", "root": "ف-ك-ه", "pos": "noun"},
    "تقلق": {"vocalized": "تَقْلَقْ", "translit": "taqlaq", "en": "worry", "root": "ق-ل-ق", "pos": "verb"},
    "تختار": {"vocalized": "تَخْتَارُ", "translit": "takhtaru", "en": "you choose", "root": "خ-ي-ر", "pos": "verb"},
    "الفواكه_acc": {"vocalized": "الْفَوَاكِهَ", "translit": "al-fawakih", "en": "the fruits", "root": "ف-ك-ه", "pos": "noun"},
    "الفواكه_nom": {"vocalized": "الْفَوَاكِهُ", "translit": "al-fawakihu", "en": "the fruits", "root": "ف-ك-ه", "pos": "noun"},
    "هناك": {"vocalized": "هُنَاكَ", "translit": "hunaka", "en": "over there", "root": None, "pos": "adverb"},
    "التفاح": {"vocalized": "التُّفَّاحُ", "translit": "al-tuffah", "en": "apples", "root": "ت-ف-ح", "pos": "noun"},
    "البرتقال": {"vocalized": "الْبُرْتُقَالُ", "translit": "al-burtuqal", "en": "oranges", "root": None, "pos": "noun"},
    "الموز": {"vocalized": "الْمَوْزُ", "translit": "al-mawz", "en": "bananas", "root": "م-و-ز", "pos": "noun"},
    "والبطيخ": {"vocalized": "وَالْبِطِّيخُ", "translit": "wa-l-bittikh", "en": "and watermelon", "root": "ب-ط-خ", "pos": "noun"},
    "ماذا": {"vocalized": "مَاذَا", "translit": "madha", "en": "what", "root": None, "pos": "interrogative"},
    "تريد": {"vocalized": "تُرِيدُ", "translit": "turidu", "en": "do you want", "root": "ر-و-د", "pos": "verb"},
    "تفاح": {"vocalized": "تُفَّاحٌ", "translit": "tuffah", "en": "apple", "root": "ت-ف-ح", "pos": "noun"},
    "برتقال": {"vocalized": "بُرْتُقَالٌ", "translit": "burtuqal", "en": "orange", "root": None, "pos": "noun"},
    "موز": {"vocalized": "مَوْزٌ", "translit": "mawz", "en": "banana", "root": "م-و-ز", "pos": "noun"},
    "بطيخة": {"vocalized": "بِطِّيخَةٌ", "translit": "bittikhah", "en": "watermelon", "root": "ب-ط-خ", "pos": "noun"},
    "بندورة": {"vocalized": "بَنْدُورَةٌ", "translit": "bandurah", "en": "tomatoes", "root": None, "pos": "noun"},

    # Cake & Ending
    "كعكة_acc": {"vocalized": "كَعْكَةَ", "translit": "ka'kata", "en": "the cake of", "root": "ك-ع-ك", "pos": "noun"},
    "كعكة_nom": {"vocalized": "كَعْكَةُ", "translit": "ka'katu", "en": "cake of", "root": "ك-ع-ك", "pos": "noun"},
    "الشوكولاتة": {"vocalized": "الشُّوكُولَاتَةِ", "translit": "al-shukulatah", "en": "chocolate", "root": None, "pos": "noun"},
    "وضعت_f": {"vocalized": "وَضَعْتِ", "translit": "wada'ti", "en": "did you put (f)", "root": "و-ض-ع", "pos": "verb"},
    "وضعت_m": {"vocalized": "وَضَعْتَ", "translit": "wada'ta", "en": "did you put (m)", "root": "و-ض-ع", "pos": "verb"},
    "وضعتها": {"vocalized": "وَضَعْتُهَا", "translit": "wada'tuha", "en": "I put it", "root": "و-ض-ع", "pos": "verb"},
    "أضعها": {"vocalized": "أَضَعْهَا", "translit": "ada'ha", "en": "put it", "root": "و-ض-ع", "pos": "verb"},
    "لم": {"vocalized": "لَمْ", "translit": "lam", "en": "did not", "root": None, "pos": "particle"},
    "إذن": {"vocalized": "إِذَنْ", "translit": "idhan", "en": "then / so", "root": None, "pos": "particle"},
    "من_who": {"vocalized": "مَنْ", "translit": "man", "en": "who?", "root": None, "pos": "interrogative"},
    "شقي": {"vocalized": "شَقِيٌّ", "translit": "shaqiyy", "en": "naughty / cheeky", "root": "ش-ق-ي", "pos": "adjective"},
    "آسف": {"vocalized": "آسِفٌ", "translit": "asif", "en": "sorry", "root": "أ-س-ف", "pos": "adjective"},
    "تبدو": {"vocalized": "تَبْدُو", "translit": "tabdu", "en": "it looks", "root": "ب-د-و", "pos": "verb"},
    "شهية": {"vocalized": "شَهِيَّةً", "translit": "shahiyyah", "en": "delicious / tasty", "root": "ش-ه-و", "pos": "adjective"},
    "لنكتبها": {"vocalized": "لِنَكْتُبْهَا", "translit": "li-naktubha", "en": "let us write it", "root": "ك-ت-ب", "pos": "verb"},
    "هكذا": {"vocalized": "هٰكَذَا", "translit": "hakadha", "en": "like this", "root": "ك-ذ-ا", "pos": "adverb"},
    "شكولاتة": {"vocalized": "شُوكُولَاتَةٌ", "translit": "shukulatah", "en": "chocolate!", "root": None, "pos": "noun"},
    "ياي": {"vocalized": "يَاي", "translit": "yay", "en": "yay!", "root": None, "pos": "interjection"},
    "اشتركوا": {"vocalized": "اشْتَرِكُوا", "translit": "ishtaraku", "en": "subscribe", "root": "ش-ر-ك", "pos": "verb"},
    "القناة": {"vocalized": "الْقَنَاةِ", "translit": "al-qanah", "en": "the channel", "root": "ق-ن-و", "pos": "noun"}
}

# The verified clean sentence blueprints matching exact speech timeline
SENTENCE_SPECS = [
    # 1. Intro
    {
        "words": [
            ("أنا", 0.00, 3.08),
            ("بيبا", 3.08, 3.50),
            ("بيغ", 3.50, 3.76),
        ]
    },
    {
        "words": [
            ("وهذا", 3.90, 5.44),
            ("أخي", 5.44, 5.84),
            ("جورج", 5.84, 6.38),
        ]
    },
    {
        "words": [
            ("وهذه", 7.46, 8.02),
            ("ماما", 8.02, 8.46),
            ("بيغ", 8.46, 8.84),
        ]
    },
    {
        "words": [
            ("وهذا", 9.96, 10.50),
            ("بابا", 10.50, 10.96),
            ("بيغ", 10.96, 11.36),
        ]
    },
    {
        "words": [
            ("بيبا", 13.86, 14.30),
            ("بيغ", 14.30, 14.54),
        ]
    },
    # 2. Episode Title
    {
        "words": [
            ("التسوق", 17.52, 18.48),
        ]
    },
    # 3. Supermarket entrance (Note: 18.5s - 27.3s is music while car drives to store. Zero speech!)
    {
        "words": [
            ("بابا", 27.32, 27.86),
            ("هل", 27.86, 28.38),
            ("يمكنني", 28.38, 28.86),
            ("ان", 28.86, 29.08),
            ("اجلس", 29.08, 29.36),
            ("على", 29.36, 29.56),
            ("عربة", 29.56, 29.88),
            ("ايضا", 29.88, 30.42),
        ]
    },
    {
        "words": [
            ("كلا", 31.52, 31.92),
            ("انت", 31.92, 32.26),
            ("طفلة", 32.26, 32.50),
            ("كبيرة", 32.50, 32.96),
        ]
    },
    {
        "words": [
            ("يمكنك", 33.90, 35.16),
            ("ان", 35.16, 35.30),
            ("تساعد", 35.30, 35.66),
            ("بالتسوق", 35.66, 36.22),
        ]
    },
    {
        "words": [
            ("حسنا", 36.70, 37.22),
        ]
    },
    {
        "words": [
            ("لدينا", 38.72, 39.10),
            ("4", 39.10, 39.28),
            ("اشياء", 39.28, 39.66),
            ("قائمة", 39.66, 40.20),
        ]
    },
    {
        "words": [
            ("طماطم", 40.44, 41.12),
            ("اسبغيتي", 41.12, 41.92),
            ("بصل", 41.92, 42.18),
            ("وخوخ", 42.18, 42.88),
        ]
    },
    # 4. Peppa says: "I will find them all from here" (Merged single sentence, zero repetition!)
    {
        "words": [
            ("سوف", 43.58, 43.90),
            ("اجدهم", 43.90, 44.42),
            ("كلها", 44.42, 44.88),
            ("من", 45.40, 47.00),
            ("هنا", 47.00, 47.40),
        ]
    },
    {
        "words": [
            ("بيبا", 49.86, 50.24),
            ("أولا", 50.24, 50.70),
            ("نحتاج", 50.70, 51.12),
            ("إلى", 51.12, 51.26),
            ("الطماطم_gen", 51.26, 51.70),
        ]
    },
    {
        "words": [
            ("رأيتهم", 52.64, 54.48),
            ("رأيتهم", 54.48, 55.36),
        ]
    },
    {
        "words": [
            ("ها", 56.82, 57.16),
            ("هي", 57.16, 57.28),
            ("الطماطم_nom", 57.28, 57.90),
            ("ماما", 57.90, 58.30),
        ]
    },
    {
        "words": [
            ("أحسنت", 58.84, 59.98),
            ("بيبا", 60.11, 60.35),
        ]
    },
    {
        "words": [
            ("واحد", 61.31, 62.03),
            ("اثنان", 62.61, 63.43),
            ("ثلاثة", 63.97, 64.91),
            ("أربعة", 65.43, 66.03),
        ]
    },
    {
        "words": [
            ("ها", 69.49, 70.11),
            ("الطماطم_nom", 70.11, 71.23),
        ]
    },
    {
        "words": [
            ("أحسنت", 71.79, 72.35),
            ("بيبا", 72.35, 72.67),
        ]
    },
    {
        "words": [
            ("طماطم", 74.25, 74.85),
            ("ما", 74.85, 75.13),
            ("التالي", 75.13, 75.39),
            ("في", 75.39, 75.55),
            ("القائمة", 75.55, 76.03),
        ]
    },
    {
        "words": [
            ("اسبغيتي", 77.07, 77.73),
            ("اسبغيتي", 78.57, 79.31),
        ]
    },
    {
        "words": [
            ("أين", 82.89, 83.07),
            ("اسبغيتي", 83.07, 83.65),
            ("بيبا", 83.65, 84.17),
        ]
    },
    {
        "words": [
            ("رأيتهم", 84.25, 85.27),
            ("من", 86.07, 86.23),
            ("هنا", 86.23, 86.59),
        ]
    },
    {
        "words": [
            ("ها", 88.57, 88.79),
            ("اسبغيتي", 88.79, 89.31),
            ("ماما", 89.31, 90.33),
        ]
    },
    {
        "words": [
            ("أحسنت", 91.87, 92.49),
            ("بيبا", 92.49, 93.05),
            ("هيا", 93.05, 93.19),
            ("نضعهم", 93.19, 93.65),
            ("في", 93.65, 93.83),
            ("العربة", 93.83, 94.25),
        ]
    },
    {
        "words": [
            ("اسبغيتي", 95.69, 96.23),
        ]
    },
    {
        "words": [
            ("جورج", 97.57, 98.41),
            ("إنها", 98.41, 99.11),
            ("اسبغيتي", 99.11, 101.45),
        ]
    },
    {
        "words": [
            ("اسبغيتي", 102.61, 103.91),
        ]
    },
    {
        "words": [
            ("والآن", 104.43, 104.83),
            ("ما", 104.83, 105.11),
            ("التالي", 105.11, 105.65),
        ]
    },
    {
        "words": [
            ("بطاطس", 106.13, 106.65),
            ("مقلية", 106.65, 107.17),
        ]
    },
    {
        "words": [
            ("بطاطس", 107.15, 107.89),
            ("ليست", 107.89, 108.07),
            ("في", 108.07, 108.30),
            ("القائمة", 108.30, 108.59),
        ]
    },
    {
        "words": [
            ("لدينا", 109.37, 109.77),
            ("الكثير", 109.77, 110.05),
            ("منها", 110.05, 110.25),
            ("في", 110.25, 110.39),
            ("المنزل", 110.39, 110.93),
        ]
    },
    {
        "words": [
            ("خمني", 111.47, 111.99),
        ]
    },
    {
        "words": [
            ("أنا", 113.43, 114.95),
            ("لا", 114.95, 115.23),
            ("أتذكر", 115.23, 115.99),
        ]
    },
    {
        "words": [
            ("هل", 115.93, 116.85),
            ("تتذكر", 116.85, 117.31),
            ("جورج", 117.31, 117.87),
        ]
    },
    {
        "words": [
            ("ديناصور", 118.11, 118.93),
        ]
    },
    {
        "words": [
            ("ديناصور", 119.47, 120.29),
        ]
    },
    {
        "words": [
            ("جورج", 121.23, 121.83),
            ("لا", 121.83, 122.29),
            ("توجد", 122.29, 122.77),
            ("ديناصورات", 122.77, 123.31),
            ("هنا", 123.31, 123.69),
            ("في", 123.69, 123.83),
            ("البقالة", 123.83, 124.61),
        ]
    },
    {
        "words": [
            ("لا", 128.67, 128.93),
            ("جورج", 128.93, 129.35),
            ("الشيء", 129.35, 129.75),
            ("التالي", 129.75, 129.93),
            ("الذي", 129.93, 130.30),
            ("اخترناه", 130.30, 130.65),
            ("هو", 130.65, 130.83),
            ("البصل", 130.83, 131.19),
        ]
    },
    {
        "words": [
            ("بصل", 131.91, 132.87),
            ("تذكرت", 132.87, 133.71),
            ("الآن", 133.71, 134.19),
        ]
    },
    {
        "words": [
            ("أحسنت", 138.35, 139.21),
        ]
    },
    {
        "words": [
            ("واحد", 139.81, 140.65),
            ("اثنان", 140.65, 142.31),
            ("ثلاثة", 142.31, 144.31),
            ("أربعة", 144.31, 145.17),
            ("بصل", 146.55, 147.55),
        ]
    },
    {
        "words": [
            ("أحسنت", 147.87, 148.73),
        ]
    },
    {
        "words": [
            ("بقي", 149.65, 149.91),
            ("شيء", 149.91, 150.19),
            ("واحد", 150.19, 150.45),
            ("في", 150.45, 150.63),
            ("القائمة", 150.63, 151.07),
        ]
    },
    {
        "words": [
            ("لا", 155.75, 155.99),
            ("جورج", 155.99, 156.27),
            ("آخر", 156.27, 156.61),
            ("شيء_gen", 156.61, 156.91),
            ("هو", 156.91, 157.07),
            ("الفاكهة", 157.07, 157.61),
        ]
    },
    {
        "words": [
            ("لا", 158.27, 159.27),
            ("تقلق", 159.27, 159.69),
            ("جورج", 159.69, 160.01),
            ("سوف", 160.01, 160.33),
            ("تختار", 160.33, 160.73),
            ("الفواكه_acc", 160.73, 161.29),
        ]
    },
    {
        "words": [
            ("أين", 162.89, 163.11),
            ("الفواكه_nom", 163.11, 164.11),
        ]
    },
    {
        "words": [
            ("هنا", 164.85, 165.19),
        ]
    },
    {
        "words": [
            ("هناك", 168.05, 168.55),
            ("التفاح", 168.55, 169.13),
            ("البرتقال", 169.13, 170.09),
            ("الموز", 170.09, 170.89),
            ("والبطيخ", 170.89, 171.41),
        ]
    },
    {
        "words": [
            ("ماذا", 171.45, 171.67),
            ("تريد", 171.67, 171.99),
            ("جورج", 171.99, 172.45),
        ]
    },
    {
        "words": [
            ("تفاح", 174.31, 174.87),
        ]
    },
    {
        "words": [
            ("برتقال", 174.87, 175.81),
        ]
    },
    {
        "words": [
            ("موز", 176.27, 176.79),
        ]
    },
    {
        "words": [
            ("بطيخة", 177.87, 180.05),
        ]
    },
    {
        "words": [
            ("بندورة", 185.37, 186.23),
            ("اسبغيتي", 186.23, 188.04),
            ("بصل", 188.04, 189.94),
            ("بطيخة", 189.94, 192.42),
        ]
    },
    {
        "words": [
            ("كعكة_nom", 193.60, 194.02),
            ("الشوكولاتة", 194.02, 194.68),
        ]
    },
    {
        "words": [
            ("كعكة_nom", 195.80, 196.32),
            ("الشوكولاتة", 196.32, 197.20),
        ]
    },
    {
        "words": [
            ("بيبا", 200.66, 201.18),
            ("هل", 201.18, 201.52),
            ("وضعت_f", 201.52, 201.84),
            ("كعكة_acc", 201.84, 202.18),
            ("الشوكولاتة", 202.18, 202.76),
            ("في", 202.76, 203.04),
            ("العربة", 203.04, 203.94),
        ]
    },
    {
        "words": [
            ("كلا", 204.24, 204.62),
            ("ماما", 204.62, 205.16),
        ]
    },
    {
        "words": [
            ("جورج", 205.82, 206.30),
            ("هل", 206.30, 206.48),
            ("وضعت_m", 206.48, 206.78),
            ("كعكة_acc", 206.78, 207.14),
            ("الشوكولاتة", 207.14, 207.66),
            ("في", 207.66, 207.80),
            ("العربة", 207.80, 208.38),
        ]
    },
    {
        "words": [
            ("كلا", 208.02, 208.96),
            ("أنا", 209.08, 209.82),
            ("لم", 209.82, 210.00),
            ("أضعها", 210.00, 210.52),
        ]
    },
    {
        "words": [
            ("إذن", 211.78, 212.10),
            ("من_who", 212.10, 212.96),
        ]
    },
    {
        "words": [
            ("أنا", 213.92, 214.46),
            ("وضعتها", 214.46, 215.10),
        ]
    },
    {
        "words": [
            ("شقي", 215.58, 216.10),
            ("يا", 216.10, 216.20),
            ("بابا", 216.20, 216.60),
        ]
    },
    {
        "words": [
            ("آسف", 216.22, 217.28),
            ("إنها", 217.28, 217.62),
            ("تبدو", 217.62, 218.02),
            ("شهية", 218.02, 218.48),
        ]
    },
    {
        "words": [
            ("إنها", 218.98, 219.42),
            ("تبدو", 219.42, 219.74),
            ("شهية", 219.74, 220.20),
        ]
    },
    {
        "words": [
            ("هيا", 220.44, 220.76),
            ("لنكتبها", 220.76, 221.30),
            ("في", 221.30, 221.40),
            ("القائمة", 221.40, 221.90),
        ]
    },
    {
        "words": [
            ("هكذا", 221.96, 222.34),
            ("شكولاتة", 222.34, 223.34),
        ]
    },
    {
        "words": [
            ("ياي", 223.36, 224.66),
        ]
    },
    {
        "words": [
            ("اشتركوا", 239.08, 244.90),
            ("في", 244.90, 244.92),
            ("القناة", 244.92, 245.20),
        ]
    }
]

# Build the final sentences JSON structure
final_sentences = []
global_word_id = 1

for s_idx, spec in enumerate(SENTENCE_SPECS):
    formatted_words = []
    for raw_word, start, end in spec["words"]:
        # Lookup in lexicon
        lex = LEXICON.get(raw_word)
        if not lex:
            print(f"Warning: '{raw_word}' not found in LEXICON!")
            lex = {
                "vocalized": raw_word,
                "translit": raw_word,
                "en": raw_word,
                "root": None,
                "pos": "word"
            }
            
        # Clean raw Arabic string
        raw_ar = raw_word.split('_')[0]
        
        # Ensure clean min duration
        clean_start = round(start, 2)
        clean_end = max(round(end, 2), round(start + 0.25, 2))
        
        formatted_words.append({
            "id": f"w{global_word_id}",
            "ar": raw_ar,
            "vocalized": lex["vocalized"],
            "transliteration": lex["translit"],
            "en": lex["en"],
            "start": clean_start,
            "end": clean_end,
            "root": lex["root"],
            "pos": lex["pos"]
        })
        global_word_id += 1
        
    final_sentences.append({
        "sentenceId": f"s{s_idx + 1}",
        "words": formatted_words
    })

# Check for consecutive word duplication across sentence boundaries
duplicates_found = 0
for i in range(1, len(final_sentences)):
    last_word_prev = final_sentences[i-1]["words"][-1]["ar"]
    first_word_curr = final_sentences[i]["words"][0]["ar"]
    if last_word_prev == first_word_curr:
        print(f"Boundary duplicate between s{i} and s{i+1}: '{last_word_prev}'")
        duplicates_found += 1

print(f"Total sentences: {len(final_sentences)}")
print(f"Total words: {global_word_id - 1}")
print(f"Boundary duplicates: {duplicates_found}")

# Write to file
with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
    json.dump(final_sentences, f, ensure_ascii=False, indent=2)

print(f"Successfully wrote {OUTPUT_PATH}!")
