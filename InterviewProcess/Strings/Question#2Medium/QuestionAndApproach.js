/*
*  Given a string, find the length of the longest substring without repeating characters.
*  Exemple : "abccabb" => "abc" or "cab" => 3
*
*  Step 1 : Verify the constraints :
*   - Is the substring contiguous ? check difference between substring and subsequence.
*   - Does case sensitivity matter ? No, assume all characters in the string are lowercase.
*
*  Step 2 : Write out some test cases
*  "abccabb"    => 3
*  "cccccc"     => 1
*  ""           => 0
*  "abcbda"     => 4
*
*  Step 3 : Figure out a solution without code
*
*
*  Step 4 : Write out our solution in code
*   check BruteForceSolution file
*
*  Step 5 : Double check for errors
*
*  Step 6 : Testing our solution
*   check TestingBruteForceSolution file
*
*  Step 7 : Space & Time Complexity
*   Time complexity :
*   Space complexity :
*
*  Step 8 : Can we optimize our solution ?
*   check OptimizingSolution file
*
*  Step 9 : Double check for errors
*
*  Step 10 : Testing optimized solution
*   check TestingOptimizedSolution file
*
*  Step 11 : Space & Time Complexity
*   Time complexity :
*   Space complexity :
*/