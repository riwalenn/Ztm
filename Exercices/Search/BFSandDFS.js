//BFS: Shortest Path, Closer Nodes => More Memory than DFS
//DFS: Less Memory, Does Path exist ? => Can get Slow
//Dijkstra: shortest path - faster, more efficient with the downside that it can accommodate for negative weights between nodes
//Bellman-Ford: very effective at solving the shortest path over Dijkstra algorithm: can accommodate negative weights
//can take a long time to run in terms of complexity, not the most efficient algorithm
//worst case for Bellman-Ford algorithm is usually time complexity of O(n²)

//If you know a solution is not far from the root of the tree: BFS

//If the tree is very deep and solutions are rare: BFS (DFS will take long)

//If the tree is very wide: DFS (BFS will need too much memory)

//If solutions are frequent but located deep in the tree: DFS

//Determining whether a path exists between two nodes: DFS

//Finding the shortest path: BFS