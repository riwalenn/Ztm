function a() {
    let grandpa = 'grandpa';
    return function b() {
        let father = 'father';
        return function c() {
            let son = 'son';
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

a(); // return function b
a()(); // return function c
a()()(); // return 'grandpa > father > son'

const boo = (string) => (name1) => (name2) =>
    console.log(`${string} ${name1} ${name2} !`);

boo('hi')('tim')('becca');