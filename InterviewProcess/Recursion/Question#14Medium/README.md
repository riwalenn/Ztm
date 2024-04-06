Given an array of integers sorted in ascending order,
return the starting and ending index of a given target value in an array, i.e. [x, y].
Your solution should run in O(logN) time.
Example : [1,3,3,5,5,5,8,9]; target = 5; start: index 3; ending: index 5

### Step 1 : Verify the constraints
- What do we return if the target is not found in the array ? Return -1, all values in the array are positive.

### Step 3 : Write some test cases
- array = [1,3,3,5,5,5,8,9]; target = 6; result = [-1,-1];
- array = [1,3,3,5,5,5,8,9]; target = 5; result = [3,5];
- array = [1,2,3,4,5,6]; target = 4; result = [3,3]
- array = []; target = 3; result = [-1,-1];

### Step 4 : Write out our solution in code
checking Solution file 

