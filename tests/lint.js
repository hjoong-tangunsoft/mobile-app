// Simple lint check
const fs = require('fs');
const path = require('path');

function lintFile(filepath) {
  const content = fs.readFileSync(filepath, 'utf-8');
  const lines = content.split('\n');
  let issues = 0;
  lines.forEach((line, i) => {
    if (line.length > 200) {
      console.log('  WARN: ' + filepath + ':' + (i+1) + ' line too long');
      issues++;
    }
  });
  return issues;
}

console.log('Linting source files...');
let total = 0;
const srcDir = path.join(__dirname, '..', 'src');

function walkDir(dir) {
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walkDir(full);
    else if (f.endsWith('.js')) total += lintFile(full);
  });
}
walkDir(srcDir);

console.log('Lint complete: ' + total + ' issues');
if (total > 5) process.exit(1);
