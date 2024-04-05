Given a string, find the length of the longest substring without repeating characters.
Exemple : "abccabb"; longest: "abc" or "cab"; result = 3
Différence between substring vs. subsequence:
- substring : "abc" of "abcbbd"
- subsequence : "abcd" of "abcbbd"

### Step 1 : Verify the constraints :
- Is the substring contiguous ? check difference between substring and subsequence.
- Does case sensitivity matter ? No, assume all characters in the string are lowercase.

### Step 2 : Write out some test cases
- "abccabb" = 3
- "cccccc" = 1
- "" = 0
- "abcbda" = 4

### Step 3 : Figure out a solution without code
 cf QuestionAndApproach file
### Step 4 : Write out our solution in code
 check BruteForceSolution file

### Step 5 : Double check for errors

### Step 6 : Testing our solution
 check TestingBruteForceSolution file

### Step 7 : Space & Time Complexity
- Time complexity : O(N^2)
- Space complexity : O(N)

### Step 8 : Can we optimize our solution ?
check OptimizingSolution file

### Step 9 : Double check for errors

### Step 10 : Testing optimized solution
check TestingOptimizedSolution file

### Step 11 : Space & Time Complexity
- Time complexity : O(N)
- Space complexity : O(N)