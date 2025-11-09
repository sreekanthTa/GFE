// Graph represented as an adjacency list
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

 /**
 * @param {number[][]} adj
 * @returns {number[]}
 */

class Solution {
    dfs(adj) {
        // code here
        const result = []
        const visited = new Set()
        
        const dfs_ = (node) => {
            if(visited.has(node)) return
            visited.add(node)
            result.push(node)
            
            for(const neighb of adj[node]){
                dfs_(neighb)
            }
            
        }
        
        
        dfs_(0)
        return result
    }
}