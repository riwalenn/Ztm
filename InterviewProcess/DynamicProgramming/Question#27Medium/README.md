On a given nxn chessboard, a knight piece will start at the r-th row and the c-th column.
The knight will attempt to make k moves.
A knight can move in 8 possible ways. Each move will choose one of the 8 at random.
The knight continues moving until it finishes k moves or it moves off the chessboard.
Return the probability that the knight is on the chessboard after it finishes moving.

### Step 1 : Verify the constraints
- How many decimals do we round to ? Don't round, leave the answer as is.

### Step 2 : Write some tests cases
- N = 6; k = 3; r = 2; c = 2;
- N = 2; K = 3; r = 1; c = 1;
- N = 0; k = 2; r = 1; c = 2;
- N = 2; K = 0; r = 1; c = 1;

### Step 4 : Write out our solution in code
checking Solution file 