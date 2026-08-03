import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Clean up leftovers
    content = content.replace(' dark: ', ' ')
    content = content.replace(' border-2 ', ' ')
    content = content.replace(' border ', ' ')
    content = content.replace(' border-[1.5px] ', ' ')
    content = re.sub(r'border-neutral-[0-9]+', '', content)
    content = re.sub(r'border-[a-z]+-[0-9]+', '', content)
    content = re.sub(r'border-r-[0-9]+px', '', content)
    content = re.sub(r'border-b-[0-9]+px', '', content)

    # Some `dark:` variants may have been attached to nothing, or attached to a quote
    content = content.replace('dark:"', '"')
    content = content.replace('dark:\'', '\'')
    content = content.replace('dark: `', ' `')
    content = content.replace('dark: \n', '\n')
    
    # Tone-on-tone updates
    content = content.replace('bg-neutral-50 dark:bg-neutral-900', 'bg-white dark:bg-neutral-950')
    content = content.replace('bg-neutral-800', 'bg-neutral-900') # Shift cards to 900
    content = content.replace('bg-neutral-700', 'bg-neutral-800') # Shift inner to 800

    # Ensure clean spacing
    content = re.sub(r' +', ' ', content)
    content = content.replace('className=" ', 'className="')
    content = content.replace(' "', '"')
    content = content.replace('` ', '`')
    content = content.replace(' `', '`')
    content = content.replace(' {', '{')
    content = content.replace('{ ', '{')
    content = content.replace(' }', '}')
    
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

