function reverse(str) {
    let newString = '';
    const stringLength = str.length -1;
    for (let i = stringLength; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
}

function stringIsAPalindrome(str) {
    let newString = str.toLowerCase();
    newString = newString.replace(/[^a-z]+/gi, '');
    return newString === reverse(newString);
}

console.log(stringIsAPalindrome("aba"))//return true
console.log(stringIsAPalindrome("a"))//return true
console.log(stringIsAPalindrome("race car"))//return true
console.log(stringIsAPalindrome(""))//return true
console.log(stringIsAPalindrome("A man, a plan, a canal: Panama"))//return true
console.log(stringIsAPalindrome("HELLO HERE"))//return false
console.log(stringIsAPalindrome("aabbaa"))//return true
console.log(stringIsAPalindrome("2aabbaa2"))//return true
console.log(stringIsAPalindrome("abc"))//return false
console.log(stringIsAPalindrome("ab2c"))//return false