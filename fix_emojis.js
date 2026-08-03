const fs = require('fs');
const glob = require('glob'); // Note: we can just use native fs since it's just a few files
const files = [
  'apps/web/src/components/curriculum/EshoArbiShikhiVol1Lesson4Engine.tsx',
  'apps/web/src/components/curriculum/EshoArbiShikhiVol1Lesson5Engine.tsx',
  'apps/web/src/components/curriculum/EshoArbiShikhiVol1Lesson6Engine.tsx',
  'apps/web/src/components/curriculum/EshoArbiShikhiVol1Lesson7Engine.tsx'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // Remove lines that contain avatarEmoji
    content = content.replace(/.*avatarEmoji.*/g, '');
    fs.writeFileSync(file, content);
  }
}
console.log("Done fixing emojis");
