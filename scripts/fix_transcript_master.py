"""Master script to clean, deduplicate, vocalize, and provide 100% pure English meanings for peppa_parsed_transcript.json."""
import json
import re
import sys
from pathlib import Path

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

PROJECT_ROOT = Path(r"D:\Tariq\a_tariq")
TRANSCRIPT_PATH = PROJECT_ROOT / "apps" / "web" / "src" / "data" / "peppa_parsed_transcript.json"

# 100% Comprehensive Lexicon for all 130 words in Peppa Pig Arabic episode
FULL_LEXICON = {
    "4": {"vocalized": "٤", "translit": "arba'a", "en": "four (4)", "root": "ر-ب-ع", "pos": "number"},
    "آخر": {"vocalized": "آخَرُ", "translit": "akhar", "en": "another / other", "root": "أ-خ-ر", "pos": "adjective"},
    "آسف": {"vocalized": "آسِفٌ", "translit": "asif", "en": "sorry", "root": "أ-س-ف", "pos": "adjective"},
    "أتذكر": {"vocalized": "أَتَذَكَّرُ", "translit": "atadhakkar", "en": "I remember", "root": "ذ-ك-ر", "pos": "verb"},
    "أحسنت": {"vocalized": "أَحْسَنْتَ", "translit": "ahsanta", "en": "well done! (m)", "root": "ح-س-ن", "pos": "verb"},
    "أحسنتي": {"vocalized": "أَحْسَنْتِ", "translit": "ahsanti", "en": "well done! (f)", "root": "ح-س-ن", "pos": "verb"},
    "احسنتي": {"vocalized": "أَحْسَنْتِ", "translit": "ahsanti", "en": "well done! (f)", "root": "ح-س-ن", "pos": "verb"},
    "أخي": {"vocalized": "أَخِي", "translit": "akhi", "en": "my brother", "root": "أ-خ-و", "pos": "noun"},
    "أدعينا": {"vocalized": "أَدَّعَيْنَا", "translit": "adda'ayna", "en": "we pretended", "root": "د-ع-و", "pos": "verb"},
    "أربعة": {"vocalized": "أَرْبَعَةُ", "translit": "arba'ah", "en": "four", "root": "ر-ب-ع", "pos": "number"},
    "اربعة": {"vocalized": "أَرْبَعَةُ", "translit": "arba'ah", "en": "four", "root": "ر-ب-ع", "pos": "number"},
    "أضعها": {"vocalized": "أَضَعُهَا", "translit": "ada'uha", "en": "I put it", "root": "و-ض-ع", "pos": "verb"},
    "أنا": {"vocalized": "أَنَا", "translit": "ana", "en": "I / me", "root": "أ-ن-ا", "pos": "pronoun"},
    "انا": {"vocalized": "أَنَا", "translit": "ana", "en": "I / me", "root": "أ-ن-ا", "pos": "pronoun"},
    "أولا": {"vocalized": "أَوَّلًا", "translit": "awwalan", "en": "firstly / first", "root": "أ-و-ل", "pos": "adverb"},
    "أين": {"vocalized": "أَيْنَ", "translit": "ayna", "en": "where", "root": None, "pos": "interrogative"},
    "إذن": {"vocalized": "إِذَنْ", "translit": "idhan", "en": "so / then", "root": None, "pos": "particle"},
    "إلى": {"vocalized": "إِلَى", "translit": "ila", "en": "to / towards", "root": None, "pos": "preposition"},
    "إنها": {"vocalized": "إِنَّهَا", "translit": "innaha", "en": "it is (f)", "root": None, "pos": "particle"},
    "اتسوق": {"vocalized": "أَتَسَوَّقُ", "translit": "atasawwaq", "en": "I go shopping", "root": "س-و-ق", "pos": "verb"},
    "اثنان": {"vocalized": "اِثْنَانِ", "translit": "ithnan", "en": "two", "root": "ث-ن-ي", "pos": "number"},
    "اجدهم": {"vocalized": "أَجِدُهُمْ", "translit": "ajiduhum", "en": "I find them", "root": "و-ج-د", "pos": "verb"},
    "اجلس": {"vocalized": "أَجْلِسُ", "translit": "ajlis", "en": "I sit", "root": "ج-ل-س", "pos": "verb"},
    "اختارناه": {"vocalized": "اخْتَرْنَاهُ", "translit": "ikhtarnahu", "en": "we picked it", "root": "خ-ي-ر", "pos": "verb"},
    "اسبغيتي": {"vocalized": "اِسْبَاغِيتِي", "translit": "spaghetti", "en": "spaghetti", "root": None, "pos": "noun"},
    "اشتركوا": {"vocalized": "اشْتَرِكُوا", "translit": "ishtariku", "en": "subscribe!", "root": "ش-ر-ك", "pos": "verb"},
    "اشياء": {"vocalized": "أَشْيَاءُ", "translit": "ashya'", "en": "items / things", "root": "ش-ي-ء", "pos": "noun"},
    "الآن": {"vocalized": "الْآنَ", "translit": "al-an", "en": "now", "root": None, "pos": "adverb"},
    "والآن": {"vocalized": "وَالْآنَ", "translit": "wa-al-an", "en": "and now", "root": None, "pos": "adverb"},
    "البرتقال": {"vocalized": "الْبُرْتُقَالُ", "translit": "al-burtuqal", "en": "the oranges", "root": None, "pos": "noun"},
    "برتقال": {"vocalized": "بُرْتُقَالٌ", "translit": "burtuqal", "en": "oranges", "root": None, "pos": "noun"},
    "البصر": {"vocalized": "الْبَصَلُ", "translit": "al-basal", "en": "the onions", "root": "ب-ص-ل", "pos": "noun"},
    "البطاطسية": {"vocalized": "الْبَطَاطِسُ", "translit": "al-batatis", "en": "the potatoes", "root": None, "pos": "noun"},
    "بطاطس": {"vocalized": "بَطَاطِسُ", "translit": "batatis", "en": "potatoes", "root": None, "pos": "noun"},
    "البقالة": {"vocalized": "الْبِقَالَةُ", "translit": "al-biqalah", "en": "the grocery", "root": "ب-ق-ل", "pos": "noun"},
    "التالي": {"vocalized": "التَّالِي", "translit": "al-tali", "en": "next", "root": "ت-ل-و", "pos": "adjective"},
    "التصوّق": {"vocalized": "التَّسَوُّقُ", "translit": "al-tasawwuq", "en": "shopping", "root": "س-و-ق", "pos": "noun"},
    "بالتسوق": {"vocalized": "بِالتَّسَوُّقِ", "translit": "bi-l-tasawwuq", "en": "with shopping", "root": "س-و-ق", "pos": "prep_noun"},
    "التفاح": {"vocalized": "التُّفَّاحُ", "translit": "al-tuffah", "en": "the apples", "root": "ت-ف-ح", "pos": "noun"},
    "تفاح": {"vocalized": "تُفَّاحٌ", "translit": "tuffah", "en": "apples", "root": "ت-ف-ح", "pos": "noun"},
    "الثالث": {"vocalized": "الثَّالِثُ", "translit": "al-thalith", "en": "the third", "root": "ث-ل-ث", "pos": "number"},
    "الثالثة": {"vocalized": "الثَّالِثَةُ", "translit": "al-thalithah", "en": "the third (f)", "root": "ث-ل-ث", "pos": "number"},
    "الشوكولاتة": {"vocalized": "الشُّوكُولَاتَةُ", "translit": "al-shukulatah", "en": "the chocolate", "root": None, "pos": "noun"},
    "شكولاتة": {"vocalized": "شُوكُولَاتَة", "translit": "shukulatah", "en": "chocolate", "root": None, "pos": "noun"},
    "الطماطم": {"vocalized": "الطَّمَاطِمُ", "translit": "al-tamatim", "en": "the tomatoes", "root": None, "pos": "noun"},
    "طماطم": {"vocalized": "طَمَاطِمُ", "translit": "tamatim", "en": "tomatoes", "root": None, "pos": "noun"},
    "العربة": {"vocalized": "الْعَرَبَةُ", "translit": "al-'arabah", "en": "the trolley / cart", "root": "ع-ر-ب", "pos": "noun"},
    "عربة": {"vocalized": "عَرَبَةِ", "translit": "'arabah", "en": "trolley / cart", "root": "ع-ر-ب", "pos": "noun"},
    "الفاكهة": {"vocalized": "الْفَاكِهَةُ", "translit": "al-fakihah", "en": "the fruit", "root": "ف-ك-ه", "pos": "noun"},
    "الفواكه": {"vocalized": "الْفَوَاكِهُ", "translit": "al-fawakih", "en": "the fruits", "root": "ف-ك-ه", "pos": "noun"},
    "القائمة": {"vocalized": "الْقَائِمَةُ", "translit": "al-qa'imah", "en": "the list", "root": "ق-و-م", "pos": "noun"},
    "قائمة": {"vocalized": "قَائِمَةِ", "translit": "qa'imah", "en": "list", "root": "ق-و-م", "pos": "noun"},
    "القناة": {"vocalized": "الْقَنَاةُ", "translit": "al-qanah", "en": "the channel", "root": "ق-ن-ي", "pos": "noun"},
    "الكثير": {"vocalized": "الْكَثِيرُ", "translit": "al-kathir", "en": "many / a lot", "root": "ك-ث-ر", "pos": "adjective"},
    "اللي": {"vocalized": "اللِّي", "translit": "illi", "en": "which / that", "root": None, "pos": "relative"},
    "المجلس": {"vocalized": "الْمَجْلِسُ", "translit": "al-majlis", "en": "the seat / gathering", "root": "ج-ل-س", "pos": "noun"},
    "الموز": {"vocalized": "الْمَوْزُ", "translit": "al-mawz", "en": "the bananas", "root": "م-و-ز", "pos": "noun"},
    "موز": {"vocalized": "مَوْزٌ", "translit": "mawz", "en": "bananas", "root": "م-و-ز", "pos": "noun"},
    "ان": {"vocalized": "أَنْ", "translit": "an", "en": "to / that", "root": None, "pos": "particle"},
    "انت": {"vocalized": "أَنْتِ", "translit": "anti", "en": "you (f)", "root": "أ-ن-ت", "pos": "pronoun"},
    "ايضا": {"vocalized": "أَيْضًا", "translit": "aydan", "en": "also / too", "root": "أ-ي-ض", "pos": "adverb"},
    "بابا": {"vocalized": "بَابَا", "translit": "baba", "en": "Daddy", "root": None, "pos": "noun"},
    "باقي": {"vocalized": "بَاقِي", "translit": "baqi", "en": "remaining", "root": "ب-ق-ي", "pos": "noun"},
    "بصر": {"vocalized": "بَصَلٌ", "translit": "basal", "en": "onions", "root": "ب-ص-ل", "pos": "noun"},
    "بصل": {"vocalized": "بَصَلٌ", "translit": "basal", "en": "onions", "root": "ب-ص-ل", "pos": "noun"},
    "بضعتها": {"vocalized": "بِضَاعَتُهَا", "translit": "bida'atuha", "en": "her groceries", "root": "ب-ض-ع", "pos": "noun"},
    "بطيخة": {"vocalized": "بِطِّيخَةٌ", "translit": "bittikhah", "en": "watermelon", "root": "ب-ط-خ", "pos": "noun"},
    "قطيخة": {"vocalized": "بِطِّيخَةٌ", "translit": "bittikhah", "en": "watermelon", "root": "ب-ط-خ", "pos": "noun"},
    "بندورة": {"vocalized": "بَنْدُورَةٌ", "translit": "bandurah", "en": "tomatoes", "root": None, "pos": "noun"},
    "بيبا": {"vocalized": "بِيبَا", "translit": "peppa", "en": "Peppa", "root": None, "pos": "proper_noun"},
    "بيجاتي": {"vocalized": "سَبَاغِيتِي", "translit": "spaghetti", "en": "spaghetti", "root": None, "pos": "noun"},
    "سباجاتي": {"vocalized": "سَبَاغِيتِي", "translit": "spaghetti", "en": "spaghetti", "root": None, "pos": "noun"},
    "سباقتي": {"vocalized": "سَبَاغِيتِي", "translit": "spaghetti", "en": "spaghetti", "root": None, "pos": "noun"},
    "سباكتي": {"vocalized": "سَبَاغِيتِي", "translit": "spaghetti", "en": "spaghetti", "root": None, "pos": "noun"},
    "بيغ": {"vocalized": "بِيغْ", "translit": "pig", "en": "Pig", "root": None, "pos": "proper_noun"},
    "تبدو": {"vocalized": "تَبْدُو", "translit": "tabdu", "en": "looks / appears", "root": "ب-د-و", "pos": "verb"},
    "تتذكر": {"vocalized": "تَتَذَكَّرُ", "translit": "tatadhakkar", "en": "remembers", "root": "ذ-ك-ر", "pos": "verb"},
    "تختار": {"vocalized": "تَخْتَارُ", "translit": "takhtar", "en": "chooses", "root": "خ-ي-ر", "pos": "verb"},
    "تذكرت": {"vocalized": "تَذَكَّرْتُ", "translit": "tadhakkart", "en": "I remembered", "root": "ذ-ك-ر", "pos": "verb"},
    "تريد": {"vocalized": "تُرِيدُ", "translit": "turid", "en": "wants", "root": "ر-و-د", "pos": "verb"},
    "تساعد": {"vocalized": "تُسَاعِدَ", "translit": "tusa'id", "en": "help", "root": "س-ع-د", "pos": "verb"},
    "تقلق": {"vocalized": "تَقْلَقْ", "translit": "taqlaq", "en": "worry", "root": "ق-ل-ق", "pos": "verb"},
    "تنفق": {"vocalized": "طِفْلَةٌ", "translit": "tiflah", "en": "child / young girl", "root": "ط-ف-ل", "pos": "noun"},
    "توجد": {"vocalized": "تُوجَدُ", "translit": "tujad", "en": "is found / exists", "root": "و-ج-د", "pos": "verb"},
    "ثلاثة": {"vocalized": "ثَلَاثَةُ", "translit": "thalathah", "en": "three", "root": "ث-ل-ث", "pos": "number"},
    "جورج": {"vocalized": "جُورْج", "translit": "george", "en": "George", "root": None, "pos": "proper_noun"},
    "حسنا": {"vocalized": "حَسَنًا", "translit": "hasanan", "en": "okay / alright", "root": "ح-س-ن", "pos": "adverb"},
    "خمني": {"vocalized": "خَمِّنِي", "translit": "khammini", "en": "guess! (f)", "root": "خ-م-ن", "pos": "verb"},
    "ديناصور": {"vocalized": "دِينَاصُور", "translit": "dinasur", "en": "dinosaur", "root": None, "pos": "noun"},
    "دينوسور": {"vocalized": "دِينَاصُور", "translit": "dinasur", "en": "dinosaur", "root": None, "pos": "noun"},
    "رأيتهم": {"vocalized": "رَأَيْتُهُمْ", "translit": "ra'aytuhum", "en": "I saw them", "root": "ر-أ-ي", "pos": "verb"},
    "سوف": {"vocalized": "سَوْفَ", "translit": "sawfa", "en": "will (future)", "root": None, "pos": "particle"},
    "شهية": {"vocalized": "شَهِيَّةٌ", "translit": "shahiyyah", "en": "delicious", "root": "ش-ه-و", "pos": "adjective"},
    "شيء": {"vocalized": "شَيْءٍ", "translit": "shay'", "en": "thing / item", "root": "ش-ي-ء", "pos": "noun"},
    "على": {"vocalized": "عَلَى", "translit": "'ala", "en": "on / upon", "root": None, "pos": "preposition"},
    "في": {"vocalized": "فِي", "translit": "fi", "en": "in / inside", "root": None, "pos": "preposition"},
    "كبيرة": {"vocalized": "كَبِيرَةٌ", "translit": "kabirah", "en": "big / grown-up", "root": "ك-ب-ر", "pos": "adjective"},
    "كعكة": {"vocalized": "كَعْكَةُ", "translit": "ka'kah", "en": "cake", "root": "ك-ع-ك", "pos": "noun"},
    "كلا": {"vocalized": "كَلَّا", "translit": "kalla", "en": "no / not at all", "root": None, "pos": "particle"},
    "كلها": {"vocalized": "كُلَّهَا", "translit": "kullaha", "en": "all of it", "root": "ك-ل-ل", "pos": "noun"},
    "لا": {"vocalized": "لَا", "translit": "la", "en": "no / don't", "root": None, "pos": "particle"},
    "لدينا": {"vocalized": "لَدَيْنَا", "translit": "ladayna", "en": "we have", "root": "ل-د-ي", "pos": "preposition"},
    "لم": {"vocalized": "لَمْ", "translit": "lam", "en": "did not", "root": None, "pos": "particle"},
    "لنكتبها": {"vocalized": "لِنَكْتُبْهَا", "translit": "linaktubha", "en": "let's write it down", "root": "ك-ت-ب", "pos": "verb"},
    "ما": {"vocalized": "مَا", "translit": "ma", "en": "what", "root": None, "pos": "interrogative"},
    "ماذا": {"vocalized": "مَاذَا", "translit": "madha", "en": "what", "root": None, "pos": "interrogative"},
    "ماما": {"vocalized": "مَامَا", "translit": "mama", "en": "Mummy", "root": None, "pos": "noun"},
    "مقلية": {"vocalized": "مَقْلِيَّة", "translit": "maqliyyah", "en": "fried", "root": "ق-ل-ي", "pos": "adjective"},
    "من": {"vocalized": "مِنْ", "translit": "min", "en": "from", "root": None, "pos": "preposition"},
    "منها": {"vocalized": "مِنْهَا", "translit": "minha", "en": "from it", "root": None, "pos": "preposition"},
    "ناتي": {"vocalized": "نَأْتِي", "translit": "na'ti", "en": "we bring", "root": "أ-ت-ي", "pos": "verb"},
    "نحتاج": {"vocalized": "نَحْتَاجُ", "translit": "nahtaj", "en": "we need", "root": "ح-و-ج", "pos": "verb"},
    "نضعهم": {"vocalized": "نَضَعُهُمْ", "translit": "nada'uhum", "en": "we put them", "root": "و-ض-ع", "pos": "verb"},
    "ها": {"vocalized": "هَا", "translit": "ha", "en": "here / look!", "root": None, "pos": "particle"},
    "هات": {"vocalized": "هَاتِ", "translit": "hati", "en": "bring / give me", "root": "ه-ت-و", "pos": "verb"},
    "هكذا": {"vocalized": "هٰكَذَا", "translit": "hakadha", "en": "like this", "root": None, "pos": "adverb"},
    "هل": {"vocalized": "هَلْ", "translit": "hal", "en": "can / does", "root": None, "pos": "particle"},
    "هنا": {"vocalized": "هُنَا", "translit": "huna", "en": "here", "root": None, "pos": "adverb"},
    "هناك": {"vocalized": "هُنَاكَ", "translit": "hunaka", "en": "there", "root": None, "pos": "adverb"},
    "هو": {"vocalized": "هُوَ", "translit": "huwa", "en": "he / it", "root": None, "pos": "pronoun"},
    "هي": {"vocalized": "هِيَ", "translit": "hiya", "en": "she / it", "root": None, "pos": "pronoun"},
    "هيا": {"vocalized": "هَيَّا", "translit": "hayya", "en": "come on / let's go", "root": None, "pos": "particle"},
    "واجهة": {"vocalized": "وَاجِهَةِ", "translit": "wajahah", "en": "section / front", "root": "و-ج-ه", "pos": "noun"},
    "واحد": {"vocalized": "وَاحِدٌ", "translit": "wahid", "en": "one", "root": "و-ح-د", "pos": "number"},
    "وبطن": {"vocalized": "وَبَطْنِ", "translit": "wa-batn", "en": "and belly", "root": "ب-ط-ن", "pos": "noun"},
    "وخوكة": {"vocalized": "وَخَوْخَةٍ", "translit": "wa-khawkhah", "en": "and peach", "root": "خ-و-خ", "pos": "noun"},
    "وضعت": {"vocalized": "وَضَعَتْ", "translit": "wada'at", "en": "placed / put", "root": "و-ض-ع", "pos": "verb"},
    "وهذا": {"vocalized": "وَهٰذَا", "translit": "wa-hadha", "en": "and this", "root": "ذ-ا", "pos": "demonstrative"},
    "وهذه": {"vocalized": "وَهٰذِهِ", "translit": "wa-hadhihi", "en": "and this (f)", "root": "ذ-ه", "pos": "demonstrative"},
    "ياي": {"vocalized": "يَايْ!", "translit": "yay!", "en": "yay! (cheering)", "root": None, "pos": "interjection"},
    "يمكنني": {"vocalized": "يُمْكِنُنِي", "translit": "yumkinuni", "en": "can I / may I", "root": "م-ك-ن", "pos": "verb"},
    "يمكنك": {"vocalized": "يُمْكِنُكِ", "translit": "yumkinuki", "en": "you can", "root": "م-ك-ن", "pos": "verb"},
}

raw_data = json.load(open(TRANSCRIPT_PATH, "r", encoding="utf-8"))

# Step 1: Clean and Deduplicate repetitive sentences
cleaned_sentences = []
prev_text = ""
prev_end = 0.0

for s in raw_data:
    words = s.get("words", [])
    if not words:
        continue
    
    current_text = " ".join(w["ar"] for w in words).strip()
    current_start = words[0]["start"]
    current_end = words[-1]["end"]
    
    # Specific known Peppa Pig Whisper duplicate cleanup:
    # Example: "التصوّق انا سوف اتسوق" followed immediately by "انا سوف اتسوق"
    if "اتسوق" in current_text and prev_text and "اتسوق" in prev_text:
        # Overlapping duplicate line! Skip the redundant repetition
        print(f"Skipping duplicate shopping line: '{current_text}'")
        continue

    # If the exact text is repeated within 1 second of previous end, it's a hallucinated echo
    if current_text == prev_text and abs(current_start - prev_end) < 1.0:
        print(f"Skipping echo repetition: '{current_text}' ({current_start}s)")
        continue
        
    cleaned_sentences.append(s)
    prev_text = current_text
    prev_end = current_end

print(f"Deduplicated from {len(raw_data)} to {len(cleaned_sentences)} sentences.")

# Step 2: Ensure 100% pure English meaning and full Harakat
word_id_counter = 1
for s_idx, s in enumerate(cleaned_sentences):
    s["sentenceId"] = f"s{s_idx + 1}"
    for w in s.get("words", []):
        raw = w.get("ar", "").strip("،.؟!؛:«»\"'()[]{}")
        lex = FULL_LEXICON.get(raw)
        
        if lex:
            w["vocalized"] = lex["vocalized"]
            w["transliteration"] = lex["translit"]
            w["en"] = lex["en"]
            w["root"] = lex["root"]
            w["pos"] = lex["pos"]
        else:
            # Fallback if stripped key
            w["vocalized"] = raw
            w["transliteration"] = raw
            w["en"] = raw
            w["root"] = None
            w["pos"] = "word"
            
        w["id"] = f"w{word_id_counter}"
        word_id_counter += 1

# Check for any remaining Arabic characters in 'en'
arabic_in_en = []
arabic_char_re = re.compile(r"[\u0600-\u06FF]")
for s in cleaned_sentences:
    for w in s["words"]:
        if arabic_char_re.search(w.get("en", "")):
            arabic_in_en.append((w["ar"], w.get("en")))

if arabic_in_en:
    print(f"WARNING: {len(arabic_in_en)} words still have Arabic in 'en':", arabic_in_en)
else:
    print("SUCCESS: Zero Arabic characters in English meanings! 100% pure English.")

# Write back to peppa_parsed_transcript.json
with open(TRANSCRIPT_PATH, "w", encoding="utf-8") as f:
    json.dump(cleaned_sentences, f, ensure_ascii=False, indent=2)

print(f"Successfully saved {len(cleaned_sentences)} pristine sentences to {TRANSCRIPT_PATH}!")
