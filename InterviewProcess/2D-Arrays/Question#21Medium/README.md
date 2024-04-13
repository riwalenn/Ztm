Given a 2D array containing 0's (empty cell),
1's (fresh orange) and 2's (rotten orange).
Every minute, all fresh orange immediately adjacent (4 directions)
to rotten oranges will rot.
How many minutes must pass until all oranges are rotten ?

### Step 1 : Verify the constraints
- What do we return if it's not possible ? If all oranges can't rot, return -1.
- What do we return if there are no oranges ? Return 0 if there are no oranges.

### Step 4 : Write some tests cases
- [[2, 1, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1]]
- return 7

- [[1, 1, 0, 0, 0],
  [2, 1, 0, 0, 0],
  [0, 0, 0, 1, 2],
  [0, 1, 0, 0, 1]]
- return -1

- []
- return 0

- [[], []]
- return 0

### Step 4 : Write out our solution in code
checking Solution file 