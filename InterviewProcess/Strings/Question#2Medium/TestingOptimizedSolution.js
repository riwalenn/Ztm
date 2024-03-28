const lengthOfLongestSubstring = function(string) {
    if(string.length <= 1) return string.length;

    const seen = {};
    let left = 0, longest = 0;

    for(let right = 0; right < string.length; right++) {
        const currentChar = string[right];
        const previouslySeenChar = seen[currentChar];

        if(previouslySeenChar >= left) {
            left = previouslySeenChar + 1;
        }

        seen[currentChar] = right;

        longest = Math.max(longest, right - left + 1);
    }

    return longest;
};
console.log(lengthOfLongestSubstring("abccabb")); // return 3
console.log(lengthOfLongestSubstring("cccccc")); // return 1
console.log(lengthOfLongestSubstring("")); // return 0
console.log(lengthOfLongestSubstring("abcbda")); // return 4