var assert = require('assert');
var sum = require('../src/sum').sum;
assert.strictEqual(sum([]), 0);
assert.strictEqual(sum([1, 2, 3]), 6);
assert.strictEqual(sum([5, -2, -1]), 2);
var threw = false;
try { sum('123'); } catch (e) { threw = (e instanceof TypeError); }
assert.ok(threw, '非陣列應丟出 TypeError');
console.log('assertions=PASS node=' + process.version);
