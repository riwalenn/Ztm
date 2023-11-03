let view;

// function initialize() { //not ideal because can be called more than once
//     view = 'view';
//     console.log('view has been set');
// }

function initialize() {
    let called = 0;
    return function () {
        if (called > 0) {
            return;
        } else {
            view = 'view';
            called++;
            console.log('view has been set!');
        }
    }

}

const startOnce = initialize();
startOnce(); // return view has been set!
startOnce(); // don't work
startOnce(); // don't work
console.log(view)