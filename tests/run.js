// Simple test runner
const app = require('../src/app');

let passed = 0;
let failed = 0;

function assert(condition, name) {
  if (condition) {
    console.log('  PASS: ' + name);
    passed++;
  } else {
    console.log('  FAIL: ' + name);
    failed++;
  }
}

console.log('Running tests...');
assert(app.init() === true, 'app.init returns true');
assert(app.getVersion() === '1.0.0', 'version is 1.0.0');
assert(typeof app.uploadFile === 'function', 'uploadFile is a function');

console.log('\nResults: ' + passed + ' passed, ' + failed + ' failed');
if (failed > 0) process.exit(1);
