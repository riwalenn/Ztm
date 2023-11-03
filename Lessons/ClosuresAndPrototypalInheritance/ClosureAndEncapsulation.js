// Encapsulation
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => {
        timeWithoutDestruction++;
    }
    const totalPeaceTime = () => {
        return timeWithoutDestruction;
    }

    const launch = () => {
        timeWithoutDestruction = -1;
        return 'boom'
    };
    setInterval(passTime, 1000);
    return {
        launch: launch,                 // if removed here : get error launch is not a function
        totalPeaceTime: totalPeaceTime
    }
}

const ohno = makeNuclearButton();
ohno.totalPeaceTime();
ohno.totalPeaceTime();
ohno.totalPeaceTime();
ohno.totalPeaceTime();
ohno.totalPeaceTime();
ohno.launch(); // return boom
ohno.totalPeaceTime(); // reset