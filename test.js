var a = 1;

const arrowQuiz = () => {
    console.log(this.a);
};

arrowQuiz();
var a = 2;