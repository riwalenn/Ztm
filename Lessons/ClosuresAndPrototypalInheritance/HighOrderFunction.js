// simple function
function letAdamLogin() {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
        array.push(i)
    }
    return 'Access Granted to Adam'
}

letAdamLogin();


// function with parameters
const giveAccessTo = (userName) => `Access granted to ${userName}`;
function letUserLogin(userName) {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
        array.push(i)
    }
    return  giveAccessTo(userName)
}

letUserLogin('Adam');
letUserLogin('Eva');


// high order function
function authenticate(verify) {
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i)
    }

    return true;
}

function letPerson(person, fn) {
    if (person.level === 'admin') {
        fn(500000);
    } else if (person.level === 'user') {
        fn(100000);
    }
    return giveAccessTo(person.name);
}

letPerson({ level: 'user', name: 'Tim' }, authenticate);
letPerson({ level: 'admin', name: 'Gabriela' }, authenticate);