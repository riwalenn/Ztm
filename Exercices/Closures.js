function callMeMaybe() {
    setTimeout(function () {
        console.log(callMe);
    }, 4000);

    const callMe = 'Hi! I am now here!';
}

callMeMaybe(); // return Hi! I am now here!