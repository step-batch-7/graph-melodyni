//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const parse = (pairs) => {
  const graph = {};
  pairs.forEach(([src, target]) => {
    if (graph[src] == undefined) {
      graph[src] = [];
    }
    graph[src].push(target);
  });
  return graph;
};

const bfs = function (pairs, source, target) {
  graph = parse(pairs);
  const visited = new Set();
  const queue = [source];
  while (queue.length) {
    const node = queue.shift();
    visited.add(node);
    const adjacent = graph[node] || [];
    if (adjacent.includes(target)) {
      return true;
    }
    adjacent.forEach((node) => {
      if (!visited.has(node) && !queue.includes(node)) {
        queue.push(node);
      }
    });
  }
  return false;
};

module.exports = { bfs };
