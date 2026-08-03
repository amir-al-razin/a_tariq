import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove borders
    content = re.sub(r'border-\[.*?\]', '', content)
    content = re.sub(r'\bborder-[a-z]+-[0-9]+(/[0-9]+)?\b', '', content)
    content = re.sub(r'\bdark:border-[a-z]+-[0-9]+(/[0-9]+)?\b', '', content)
    content = re.sub(r'\bborder-t\b', '', content)
    content = re.sub(r'\bborder-b\b', '', content)
    content = re.sub(r'\bborder-r\b', '', content)
    content = re.sub(r'\bborder-l\b', '', content)
    content = re.sub(r'\bborder\b', '', content)
    content = re.sub(r'\bshadow-sm\b', '', content)
    content = re.sub(r'\bshadow\b', '', content)

    # Clean up multiple spaces left by removal
    content = re.sub(r' +', ' ', content)
    content = content.replace('className=" ', 'className="')
    content = content.replace(' "', '"')

    # Update rounded corners
    content = content.replace('rounded-xl', 'rounded-2xl')
    content = content.replace('rounded-2xl', 'rounded-3xl')
    content = content.replace('rounded-[20px]', 'rounded-3xl')

    # Note: bg-neutral-50 to bg-white might be tricky because some are cards.
    # We will just let them be, or do it manually if needed.
    # The main request was: no borders, flat design, update invariant pills.

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for root, _, files in os.walk('apps/web/src/components/pedagogy'):
    for file in files:
        if file.endswith('.tsx'):
            process_file(os.path.join(root, file))

for root, _, files in os.walk('apps/web/src/components/pedagogy-v2'):
    for file in files:
        if file.endswith('.tsx'):
            process_file(os.path.join(root, file))

