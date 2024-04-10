Given a binary tree, determine if it is a valid binary search tree.

### Step 1 : Verify the constraints
- Can there be duplicate values in the tree ? Yes, if you receive duplicate values 
the tree is not a valid binary search tree.

### Step 4 : Write some tests cases
- when the values on the right are greater than the root and the values on the left are a much smaller than the root => return true
- if the tree is null => return true
- if the tree have one value => return true
- if a left value is greater than the root => return false
- if a right value is lesser than the root => return false

### Step 4 : Write out our solution in code
checking Solution file 