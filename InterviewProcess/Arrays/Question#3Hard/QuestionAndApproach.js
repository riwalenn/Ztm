/*
    Given an array of integers representing an elevation map where the width of each bar is 1,
    return how much rainwater can be trapped.
    [0,1,0,2,1,0,3,1,0,1,2]
    BLACK BOXES
   4
   3                        ||
   2            ||          ||              ||
   1     ||     ||   ||     ||  ||      ||  ||
      0  1   0   2   1   0   3   1   0   1   2

    BLUE BOXES

    4
    3
    2                |_1_ 1|     |_1_ 1 _1_|
    1        |1|         |1|         |1|
       0  1   0   2   1   0   3   1   0   1   2

       8 blue boxes = 8 units of water

    Step 1 : Verify the constraints
    - Do the left and right sides of the graph count as walls ? No, the sides are not walls.
    - Will there be negative integers ? No, assume all integers are positive.


    Step 2 : Write out some test cases
    -  [0,1,0,2,1,0,3,1,0,1,2]; result = 8
    -  []; result = 0
    -  [3]; result = 0
    -  [3,4,3]; result = 0

    Step 3 : Figure out a solution without code
    currentWater = min(maxL, maxR) - cH

    Step 4 : Write out our solution in code
     check BruteForceSolution file

    Step 5 : Double check for errors

    Step 6 : Testing our solution
     check TestingBruteForceSolution file

    Step 7 : Space & Time Complexity
    - Time complexity :
    - Space complexity :

    Step 8 : Can we optimize our solution ?
     check OptimizingSolution file

    Step 9 : Double check for errors

    Step 10 : Testing optimized solution
     check TestingOptimizedSolution file
 */