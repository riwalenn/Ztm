/*
 *  Step 4 : Write out our solution in code
 */
const lengthOfLongestSubstring = function (string) {
    if(string.length <= 1) return string.length;

    let longest = 0;

    for(let left = 0; left < string.length; left++) {
        let seenChars = {}, currentLength = 0;

        for(let right = left; right < string.length; right++) {
            const currentChar = string[right];

            if(!seenChars[currentChar]) {
                currentLength++;
                seenChars[currentChar] = true;
                longest = Math.max(longest, currentLength);
            } else {
                break;
            }
        }
    }
    return longest;
}

console.log(lengthOfLongestSubstring("abccabb")); // return 3
console.log(lengthOfLongestSubstring("cccccc")); // return 1
console.log(lengthOfLongestSubstring("")); // return 0
console.log(lengthOfLongestSubstring("abcbda")); // return 4