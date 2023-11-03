const array = [1,2,3,4];

// return I am at index 4, 4 times
for(var i=0; i < array.length; i++) {
    setTimeout(function () {
        console.log(`I am at index ` + i);
    }, 3000);
}

// return I am at index 0 to 4
for(let i=0; i < array.length; i++) {
    setTimeout(function () {
        console.log(`I am at index ${array[i]}`);
    }, 3000);
}

// better soluce with closure
for(var i=0; i < array.length; i++) {
    (function (closureI) {
        setTimeout(function () {
            console.log('I am at index ' + array[closureI])
        }, 3000)
    })(i)
}