// Graph represented as an adjacency list
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

// BFS - Breadth First Search
function bfs(start) {
  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const node = queue.shift();

    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);

      // Add all unvisited neighbors
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
}

console.log("BFS traversal:");
bfs('A');