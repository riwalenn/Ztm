const findTwoSum = function (nums, target) {
    const numsMap = {};
    for (let p = 0; p < nums.length; p++) {
        const currentMapVal = numsMap[nums[p]]; // Space complexity of O(1)
        if (currentMapVal >= 0) {
            return [currentMapVal, p];
        } else {
            const numberToFind = target - nums[p];
            numsMap[numberToFind] = p;
        }
    }
    return null;
}

console.log(findTwoSum([1,3,7,9,2], 11)); // return [3,4]
console.log(findTwoSum([1,3,7,9,2], 25)); // return null
console.log(findTwoSum([], 1)); // return null
console.log(findTwoSum([5], 5)); // return null
console.log(findTwoSum([1,6], 7)); // return [0,1]