/*
    You are given an array of positive integers where each integer represents the heigh of a vertical line on a chart.
    Find two lines which together with the x-asis forms a container that would hold the greatest amount of water.
    Return the area of water it would hold.
    [1,8,6,2,9,4]
    area = L x W.
    Lengh = heigh of our container which is the smaller of the two sides, so the 8.
    Width = the distance between our two lines on the x-axis which is 3.
    area = 8*3
    area = 24

    Step 1 : Verify the constraints
     - Does the thickness of the lines affect the area ? No, assume they take up no space.
     - Do the left and right sides of the graph count as walls ? No, the sides cannot be used to form a container.
     - Does a higher line inside our container affect our area ? No, lines inside a container don't affect the area.

    Step 2 : Write out some test cases
    - nums = [7,1,2,3,9]; indices = [0,1,2,3,4]; 7 x 4 = 28
    - nums = [] = 0
    - nums = [7] = 0
    - nums = [6,9,3,4,5,8]; indices = [0,1,2,3,4,5]; 6 x 5 = 30 (not good); 8 x 4 = 32 (good)

    Step 3 : Figure out a solution without code
     area = l x w
      0  1  2  3  4
     [7, 1, 2, 3, 9]
      a  b

    min (a,b) x (bi-ai)

    [7, 1, 2, 3, 9]
     a  b
    maxArea = 0
    min(7, 1) x (1-0) => 1 x 1 = 1 => maxArea = 1

    [7, 1, 2, 3, 9]
     a     b
    min(7, 2) x (2-0) => 2 x 2 = 4 => maxArea = 4

    [7, 1, 2, 3, 9]
     a        b
    min(7, 3) x (3-0) => 3 x 3 = 9 => maxArea = 9

    [7, 1, 2, 3, 9]
     a           b
    min(7, 9) x (4-0) => 7 x 4 = 28 => maxArea = 28

    [7, 1, 2, 3, 9]
        a  b
    min(1, 2) x (2-1) => 1 x 1 = 1 => maxArea = 28

    [7, 1, 2, 3, 9]
        a     b
    min(1, 3) x (3-1) => 1 x 2 = 2 => maxArea = 28

    [7, 1, 2, 3, 9]
        a        b
    min(1, 9) x (4-1) => 1 x 3 = 3 => maxArea = 28

    [7, 1, 2, 3, 9]
           a  b
    min(2, 3) x (3-2) => 2 x 1 = 2 => maxArea = 28

    [7, 1, 2, 3, 9]
           a     b
    min(2, 9) x (4-2) => 2 x 2 = 4 => maxArea = 28

    [7, 1, 2, 3, 9]
              a  b
    min(3, 9) x (4-3) => 3 x 1 = 3 => maxArea = 28


    Step 4 : Write out our solution in code
     check BruteForceSolution file

    Step 5 : Double check for errors

    Step 6 : Testing our solution
     check TestingBruteForceSolution file

    Step 7 : Space & Time Complexity
    - Time complexity : O(n^2)
    - Space complexity : 0(1)

    Step 8 : Can we optimize our solution ?
     check OptimizingSolution file

    Step 9 : Double check for errors

    Step 10 : Testing optimized solution
     check TestingOptimizedSolution file
 */