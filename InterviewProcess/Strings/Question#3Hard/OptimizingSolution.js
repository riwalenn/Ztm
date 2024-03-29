const validPalindrome = function(s) {
    console.log(s);
    let start = 0;
    let end = s.length - 1;
    let newString = s.replace(/[^a-z]+/gi, '');
    while (start < end) {
        if (newString[start] !== newString[end]) {
            return validSubPalindrome(newString, start + 1, end) || validSubPalindrome(newString, start, end - 1);
        }
        start++;
        end--;
    }
    return true;
};

const validSubPalindrome = function(s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};

console.log(validPalindrome("aba"))//return true
console.log(validPalindrome("a"))//return true
console.log(validPalindrome("race car"))//return true
console.log(validPalindrome(""))//return true
console.log(validPalindrome("A man, a plan, a canal: Panama"))//return true
console.log(validPalindrome("HELLO HERE"))//return false
console.log(validPalindrome("aabbaa"))//return true
console.log(validPalindrome("2aabbaa2"))//return true
console.log(validPalindrome("abc"))//return false
console.log(validPalindrome("ab2c"))//return false