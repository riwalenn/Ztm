const parenthesis = {
    '(': ')',
    '{' : '}',
    '[': ']'
}

var isValid = function(s) {
    if(s.length === 0) return true;

    const stack = [];

    for(let i = 0; i < s.length; i++)  {
        if(parenthesis[s[i]]) {
            stack.push(s[i]);
        } else {
            const leftBracket = stack.pop();
            const correctBracket = parenthesis[leftBracket];
            if(s[i] !== correctBracket) return false
        }
    }

    return stack.length === 0;
};

console.log(isValid("")); // return true
console.log(isValid("{([])}")); // return true
console.log(isValid("{([]")); // return false
console.log(isValid("{([)]}")); // return false
console.log(isValid("{[]()}")); // return true