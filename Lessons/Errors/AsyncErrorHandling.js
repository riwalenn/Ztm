// silent fail without catch
Promise.resolve('asyncfail')
    .then(response => {
        console.log(response)
        throw new Error("#1 fail");
    })
    .then(response => {
        console.log(response)
    })
    .catch(err => { console.log(err) });