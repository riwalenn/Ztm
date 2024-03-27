/*
*  Given two string S and T, return if they equal when both are typed out.
*  Any '#' that appears in the string counts as a backspace.
*
*  Step 1 : Verify the constraints :
*   - What happens when two #'s appear beside each other ? Delete the two values before the first #.
      - "ab##" = ""
    - What happens to # when there is no character to remove ? It deletes nothing then, just like backspace would.
      - "a###b" = "b"
    - Are two empty strings equal to each other ? Yes, consider two empty strings are equal.
      - S: "x#y#z#"; T: "a#" => S ("") = T ("")
- Does case sensitivity matter ? Yes it does, "a" does not equal "A".
*
*  Step 2 : Write out some test cases
*   - S: "ab#z"     T: "az#z"    result = True
    - S: "abc#d"    T: "acc#c"   result = False
    - S: "x#y#z#"   T: "a#"      result = True
    - S: "a###b"    T: "b"       result = True
    - S: "Ab#z"     T: "ab#z"    result = False
*
*  Step 3 : Figure out a solution without code
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
*   Time complexity : O(n) + O(a) + O(b) + (O(a) or O(b)) => O(a+b)
*   Space complexity : O(n) + O(a) + O(b) => O(a+b)
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
*   Time complexity : O (a+b)
*   Space complexity : O(1)
*/