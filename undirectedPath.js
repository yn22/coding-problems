const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildAdjacencyList(edges);
  const visited = new Set();

  return explore(nodeA, nodeB, graph, visited);
};

const explore = (nA, nB, graph, visited) => {
  if (nA === nB) return true;
  if (visited.has(nA)) return false;
  visited.add(nA);

  for (let n of graph[nA]) {
    if (!explore(n, nB, graph, visited)) continue;
    return true;
  }

  return false;
};

const buildAdjacencyList = (edges) => {
  const res = {};

  for (let e of edges) {
    if (!(e[0] in res)) res[e[0]] = [];
    res[e[0]].push(e[1]);

    if (!(e[1] in res)) res[e[1]] = [];
    res[e[1]].push(e[0]);
  }

  return res;
};

// const edges = [
//   ["i", "j"],
//   ["k", "i"],
//   ["m", "k"],
//   ["k", "l"],
//   ["o", "n"],
// ];

// console.log(undirectedPath(edges, "j", "m"));

module.exports = {
  undirectedPath,
};
