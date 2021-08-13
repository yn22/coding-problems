const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;

  for (let i in graph) {
    count += explore(+i, graph, visited);
  }

  return count;
};

const explore = (i, graph, visited) => {
  if (visited.has(i)) return 0;

  visited.add(i);

  for (let n of graph[i]) {
    explore(n, graph, visited);
  }

  return 1;
};

// console.log(
//   connectedComponentsCount({
//     0: [8, 1, 5],
//     1: [0],
//     5: [0, 8],
//     8: [0, 5],
//     2: [3, 4],
//     3: [2, 4],
//     4: [3, 2],
//   })
// );

module.exports = {
  connectedComponentsCount,
};
