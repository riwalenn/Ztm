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

console.log(stringIsAPalindrome("race car"))