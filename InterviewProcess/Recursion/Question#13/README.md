Given an unsorted array, return the kth largest element.
It is the kth largest element in sorted order, not the kth distinct element.

### Step 1 : Verify the constraints
- Can we get an array where k is larger than the array length ? No, assume an answer is always available.

### Step 3 : Write some test cases
- [5,3,1,6,4,2], k = 2 => [1,2,3,4,5,6] => result = 5
- [2,3,1,2,4,2], k = 4 => [1,2,2,2,3,4] => result = 2 (in the middle)
- [3], k = 1 => result = 3

### Step 4 : Write out our solution in code
checking Solution file 

