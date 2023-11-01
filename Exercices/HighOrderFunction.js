const multiplyBy = (multiple) => (num) => multiple * num;

multiplyBy(2)(10); // return 20

const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);

multiplyByTwo(10); // return 20
multiplyByTwo(100); // return 200
multiplyByFive(4); // return 20
multiplyByFive(10); // return 50