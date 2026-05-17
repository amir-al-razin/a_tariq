import * as fs from 'fs';
import * as path from 'path';

const pedagogyDir = './apps/web/src/components/pedagogy';

const files = fs.readdirSync(pedagogyDir);
for (const file of files) {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(pedagogyDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    content = content.replace(/m\.([a-zA-Z]+)_([a-zA-Z0-9]+)\(\)/g, (match, prefix, suffix) => {
        // e.g. "chunk.reviewThenContinue"
        return `m['${prefix}.${suffix}']()`;
    });

    fs.writeFileSync(filePath, content, 'utf8');
  }
}
console.log("Done");
