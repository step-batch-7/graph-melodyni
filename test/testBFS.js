const assert = require('assert');
const { bfs } = require('../src/graph');
const pairs = require('../data.json');

describe('bfs', () => {
  it('should return true if there is direct path from source to target', () => {
    assert.strictEqual(bfs(pairs, 'mm', 'cc'), true);
  });
  it('should return true if there is indirect path from source to target', () => {
    assert.strictEqual(bfs(pairs, 'jj', 'aa'), true);
  });
  it('should return true if there is path to itself', () => {
    assert.strictEqual(bfs(pairs, 'aa', 'aa'), true);
  });
  it('should return true if there is no path to itself', () => {
    assert.strictEqual(bfs(pairs, 'nn', 'nn'), false);
  });
  it('should return true if there is no path from source to target', () => {
    assert.strictEqual(bfs(pairs, 'bb', 'jj'), false);
  });
});
