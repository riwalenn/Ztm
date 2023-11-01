// Memory efficient
function heavyDuty(index) {
    const bigArray = new Array(7000).fill(':)');
    console.log('created!');
    return bigArray[index];
}

heavyDuty(564);
heavyDuty(564);
heavyDuty(564);
const getHeavyDuty = heavyDuty2();
getHeavyDuty(688);
getHeavyDuty(700);
getHeavyDuty(800);

function heavyDuty2() {
    const bigArray = new Array(7000).fill(':)');
    console.log('created again!');
    return (index) => bigArray[index];
}