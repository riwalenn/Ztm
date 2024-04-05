const minRemoveToMakeValid = function(str) {
    const res = str.split('');
    const stack = [];

    for (let i = 0; i < res.length; i++) {
        if (res[i] === '(') {
            stack.push(i);
        } else if (res[i] === ')' && stack.length) {
            stack.pop();
        } else if (res[i] === ')') {
            res[i] = ''
        }
    }

    while (stack.length) {
        const curIdx = stack.pop();
        res[curIdx] = '';
    }

    return res.join('');
};

console.log(minRemoveToMakeValid("a)bc(d)")); //return abc(d)
console.log(minRemoveToMakeValid("(ab(c)d")); //return ab(c)d
console.log(minRemoveToMakeValid("))((")); //return empty string