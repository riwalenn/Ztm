There are n network nodes labelled 1 to N.
Given a times array, containing edges represented by arrays [u, v, w] 
where u is the source node, v is the target node, and w is the time taken to travel 
from the source node to the target node.
Send a signal from node k, return how long it takes for all nodes to receive the signal.
Return -1 if it's impossible.

### Step 1 : Verify the constraints
- Can the graph be unconnected ? Yes, account for an unconnected graph.
- Can the time be negative integers ? No, the weight of edges is always positive.

### Step 4 : Write out our solution in code
checking Solution file 