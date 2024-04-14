Given a 2D array containing -1's (walls), 0's (gates)
and INF's (empty room). Fill each empty room 
with the number of steps to the nearest gate.

If it is impossible to reach a gate, leave INF as the value. INF is equal to 2147483647.
Example : [
  [INF, -1, 0, INF],
  [INF, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
]

### Step 1 : Verify the constraints


### Step 4 : Write some tests cases
- [
  [INF, -1, 0, INF],
  [INF, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
  ] = [
  [3, -1, 0, 1],
  [2, 2, 1, 0],
  [1, -1, 2, -1],
  [0, -1, 3, 4],
]

- [
  [INF, -1, 0, INF],
  [-1, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
  ] = [
  [INF, -1, 0, 1],
  [-1, 2, 1, -1],
  [1, -1, 2, -1],
  [0, -1, 3, 4],
  ]

- [] = []

- [[]] = [[]]
### Step 4 : Write out our solution in code
checking Solution file 