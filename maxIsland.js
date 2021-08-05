const visited = {};

const isVisited = (r, k) => {
  if (visited[r]) {
    if (visited[r].has(k)) return true;
    visited[r].add(k);
    return false;
  }

  visited[r] = new Set();
  visited[r].add(k);
  return false;
};

const islandCount = (grid) => {
  let size = 0;
  let maxSize = 0;

  for (const row in grid) {
    for (const column in grid[row]) {
      if (grid[row][column] === "1") {
        size = exploreLand(grid, +row, +column, visited, 0);
      }
      if (size > maxSize) {
        maxSize = size;
      }
    }
  }

  return maxSize;
};

const exploreLand = (grid, row, column, visited) => {
  let depth = 0;

  if (isVisited(row, column)) return 0;
  if (row > grid.length - 1 || row < 0) return 0;
  if (column > grid[row].length - 1 || column < 0) return 0;
  if (grid[row][column] != "1") return 0;
  depth = 1;

  depth += exploreLand(grid, row - 1, column, visited, depth);
  depth += exploreLand(grid, row + 1, column, visited, depth);
  depth += exploreLand(grid, row, column - 1, visited, depth);
  depth += exploreLand(grid, row, column + 1, visited, depth);

  return depth;
};

const grid = [];

const rows = 1000;
const cols = 1000;

for (let i = 0; i < rows; i++) {
  const arr = [];
  for (let j = 0; j < cols; j++) {
    arr.push((((Math.random() * 10) % 2 > 1) | 0) + "");
  }
  grid.push(arr);
}

console.log(islandCount(grid));

module.exports = {
  islandCount,
};
