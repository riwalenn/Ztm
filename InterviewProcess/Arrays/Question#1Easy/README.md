Given an array of integers, return the indices of the two numbers that add up to a given target.
Example an array [1,3,7,9,2] and a target 11. The response is [3,4]
Cf QuestionAndApproach file

### Step 1 : Verify the constraints :
 - Are all numbers positives or can there be negatives ? Here, all numbers are positive.
 - Are there duplicate numbers in the array ? Here, no, there are no duplicates.
 - Will there always be a solution available ? Here, no, there may not always be a solution.
 - What do we return if there's no solution ? Here, just return null.
 - Can there be multiple pairs that add up to the target ? Here, no, only 1 pair of numbers will add up to the target.

### Step 2 : Write out some test cases
- nums = [1,3,7,9,2]; t = 11; r = [3,4]
- nums = [1,3,7,9,2]; t = 25; r = null
- nums = []; t = 1; r = null
- nums = [5]; t = 5; r = null
- nums = [1,6]; t = 7; r = [0,1]

### Step 3 : Figure out a solution without code
 cf QuestionAndApproach file
### Step 4 : Write out our solution in code
 check BruteForceSolution file

### Step 5 : Double check for errors

### Step 6 : Testing our solution
 check TestingBruteForceSolution file

### Step 7 : Space & Time Complexity
- Time complexity first for loop : N + 4 (with nums = [1, 3, 7, 9, 2])
- Time complexity second for loop: N + 4 (with nums = [1, 3, 7, 9, 2])
- Time complexity : O(N)²
- Space complexity : 0(1)

### Step 8 : Can we optimize our solution ?
check OptimizingSolution file

### Step 9 : Double check for errors

### Step 10 : Testing optimized solution
check TestingOptimizedSolution file

### Step 11 : Space & Time Complexity
- Time complexity : O(N)
- Space complexity : O(N)