import re

filepath = 'apps/web/src/components/screens/LessonScreen.tsx'

with open(filepath, 'r') as f:
    content = f.read()

# Remove the color definitions
content = re.sub(r'type VolumeAccent = {[^}]+}', '', content)
content = re.sub(r'const neutral = {[^}]+}', '', content)
content = re.sub(r'const vol1Colors: VolumeAccent = {[^}]+}', '', content)
content = re.sub(r'const vol2Colors: VolumeAccent = {[^}]+}', '', content)
content = re.sub(r'const vol3Colors: VolumeAccent = {[^}]+}', '', content)
content = re.sub(r'const colorMap = {\s*1: vol1Colors,\s*2: vol2Colors,\s*3: vol3Colors,\s*}', '', content)
content = re.sub(r'const colors = colorMap\[volumeId\]', '', content)

# Remove color references in the jsx
content = re.sub(r'style={{ backgroundColor: isDark \? colors\[200\] : colors\[700\] }}', '', content)
content = re.sub(r'style={{ color: isDark \? colors\[300\] : colors\[800\] }}', '', content)
content = re.sub(r'color=\{isDark \? colors\[300\] : colors\[800\]\}', 'color={isDark ? "#e5e5e5" : "#171717"}', content)
content = re.sub(r'style={{ color: isDark \? colors\[400\] : colors\[600\] }}', '', content)
content = re.sub(r'style={{ backgroundColor: isDark \? colors\[600\] \+ \'20\' : colors\[500\] \+ \'20\' }}', '', content)
content = re.sub(r'color=\{isDark \? colors\[300\] : colors\[700\]\}', 'color={isDark ? "#e5e5e5" : "#171717"}', content)

with open(filepath, 'w') as f:
    f.write(content)
