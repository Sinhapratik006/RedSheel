const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (content.includes('useReveal')) {
    content = content.replace(/import \{ useReveal \} from ["'].+useReveal["'];\n?/g, '');
    content = content.replace(/\s*useReveal\(\);\n?/g, '');
    changed = true;
  }

  if (content.includes('revealClass')) {
    content = content.replace(/import \{ revealClass \} from ["'].+revealClass["'];\n?/g, '');
    content = content.replace(/\$\{revealClass\}\s*/g, '');
    changed = true;
  }
  
  if (content.includes('data-reveal')) {
    content = content.replace(/data-reveal/g, '');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
  }
});

fs.rmSync('./src/hooks', { recursive: true, force: true });
fs.rmSync('./src/utils/revealClass.js', { force: true });
console.log('Cleanup complete');
