Given a 2D array containing only 1's (land) and O's (water),
count the number of islands.
An island is land connected horizontally or vertically.
[
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 1, 1],
]

islands = 2;

[
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 1, 1, 0],
    [1, 0, 1, 0, 1],
]

islands = 7;

### Step 1 : Verify the constraints
- Are the edges of the 2D array water ? Yes, assume anything outside of the 2D array is water.

### Step 4 : Write some tests cases
- [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 1],
  ]
  islands = 2;
- [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1],
  ]
  islands = 7;

- []
  island = 0;

- [
  [],
  [],
  ]
  island = 0;
### Step 4 : Write out our solution in code
checking Solution file 