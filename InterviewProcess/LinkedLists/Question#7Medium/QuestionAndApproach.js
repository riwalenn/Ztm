/*
    Given a linked list and numbers m and n,
    return it back with only positions m to n reverse.
    list = [1,2,3,4,5]
    m = 2
    n = 4
    return 1,4,3,2,5

    Step 1 : Verify the constraints
    - Will m and n always be within the bounds of the linked list ? Yes, assume 1 <= m <= n <= length of linked list.
    - Can we receive m and n values for the whole linked list ? Yes, we can receive m = 1 and n = length of linked list.

    Step 2 : Write out some test cases
    - 1 -> 2 -> 3 -> 4 -> 5 -> null     m = 2 n = 4
    1 -> 4 -> 3 -> 2 -> 5 -> null
    - 1 -> 2 -> 3 -> 4 -> 5 -> null     m = 1 n = 5
    5 -> 4 -> 3 -> 2 -> 1 -> null
    - 5     m = 1 n = 1 => return 1
    - null  m = 0 n = 0 => return 0

    Step 4 : Write out our solution in code
    checking Solution file

    Step 10 : Testing optimized solution
    checking TestingSolution file

    Step 11 : Space & Time Complexity
    - Time complexity : O(n)
    - Space complexity : O(1)

 */