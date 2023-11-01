function one() {
    return 1;
}

one(); // return 1

const obj = {
    two: function () {
        return 2;
    }
}

obj.two(); //return 2

function three() {
    return 3;
}

three.call(); // return 3

const four = new Function('num', 'return num');

four(4) // return 4