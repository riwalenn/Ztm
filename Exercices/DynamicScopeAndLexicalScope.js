const a = function () {
    console.log('a', this);
    const b = function () {
        console.log('b', this);
        const c = {
            hi: function () {
                console.log('c', this)
            }
        }
        c.hi();
    }
    b();
}

a();

const obj = {
    name:'Billy',
    sing() {
        console.log('a', this);
        var anotherFunc =  () => {
            console.log('b', this)
        }
        anotherFunc()
    }
}

obj.sing();

const obj2 = {
    name:'Billy',
    sing() {
        console.log('a', this);
        var anotherFunc =  () => {
            console.log('b', this)
        }
        return anotherFunc.bind(this)
    }
}

obj2.sing()();