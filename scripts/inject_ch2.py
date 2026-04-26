import re

CHAPTER2 = r"""    {
        id: 2,
        titleAr: 'الباب الثاني',
        titleEn: 'Chapter Two',
        subtitle: 'Q&A Logic, Tarkeeb & Verb Conjugation',
        lessons: [__LESSONS__],
    },
"""

with open('data/curriculum.ts', 'r') as f:
    content = f.read()

marker = "    {\n        id: 3,"
idx = content.find(marker)
if idx == -1:
    print("ERROR: Chapter 3 marker not found")
    exit(1)

lessons_placeholder = "__LESSONS__"
print(f"Inserting Chapter 2 at index {idx}")
new_content = content[:idx] + CHAPTER2.replace(lessons_placeholder, "/* LESSONS_HERE */") + content[idx:]
with open('data/curriculum.ts', 'w') as f:
    f.write(new_content)
print("Done")
