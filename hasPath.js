const hasPath = (graph, src, dst, visited = new Set()) => {
  if (src === dst) return true;

  if (visited.has(src)) return false;
  visited.add(src);

  for (let n of graph[src]) {
    if (hasPath(graph, n, dst, visited)) {
      return true;
    }
  }

  return false;
};

module.exports = {
  hasPath,
};
