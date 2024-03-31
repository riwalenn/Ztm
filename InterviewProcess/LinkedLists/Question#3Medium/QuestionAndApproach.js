/*
    Given a doubly linked list, list nodes also have a child
    property that can point to a separate doubly linked list.
    These child lists can also have one or more child doubly linked lists of their own, and so on.
    Return the list as a single level flattened doubly linked list.

    Step 1 : Verify the constraints
    - Can a doubly linked list have multiple child list nodes ? Yes, every list node can have multiple levels of children.
    - What do we do with child properties after flattening ? Just set the child property value to null.

    Step 2 : Write out some test cases
    1   2   3   4   5   6
        |           |
        7   8   9   12  13
            |
            10  11

    1 - 2 - 7 - 8 - 10 - 11 - 9 - 3 - 4 - 5 - 12 - 13 - 6

    null => null
    3 => 3

    Step 4 : Write out our solution in code
    checking Solution file

    Step 10 : Testing optimized solution
    checking TestingSolution file

    Step 11 : Space & Time Complexity
    - Time complexity : O(n)
    - Space complexity : O(1)

 */