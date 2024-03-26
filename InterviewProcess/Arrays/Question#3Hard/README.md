Given an array of integers representing an elevation map where the width of each bar is 1,
return how much rainwater can be trapped. nums = [0,1,0,2,1,0,3,1,0,1,2]; result = 8 units of water

### Step 1 : Verify the constraints
- Do the left and right sides of the graph count as walls ? No, the sides are not walls.
- Will there be negative integers ? No, assume all integers are positive.

### Step 2 : Write out some test cases
-  [0,1,0,2,1,0,3,1,0,1,2]; result = 8
-  []; result = 0
-  [3]; result = 0
-  [3,4,3]; result = 0

### Step 3 : Figure out a solution without code
cf QuestionAndApproach file

### Step 4 : Write out our solution in code
check BruteForceSolution file

### Step 5 : Double check for errors

### Step 6 : Testing our solution
check TestingBruteForceSolution file

### Step 7 : Space & Time Complexity
- Time complexity : O(n²)
- Space complexity : O(1)

### Step 8 : Can we optimize our solution ?
check OptimizingSolution file

### Step 9 : Double check for errors

### Step 10 : Testing optimized solution
check TestingOptimizedSolution file