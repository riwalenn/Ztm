/*
 *  Step 4 : Write out our solution in code
 */
const string = "abccabb";

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

console.log(lengthOfLongestSubstring(string));