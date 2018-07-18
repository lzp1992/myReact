class MyPromise {
    constructor(props) {
        props(this._reslove.bind(this), this._reject.bind(this));
    }
    _reslove(reslove) {
        this.returnRes = this._success(reslove);
    }
    _reject(resject) {
        this._err(resject);
    }
    then(success, err) {
        this._success = success;
        this._err = err;
    }

}


var p = new MyPromise((reslove, reject) => {
    setTimeout(() => {
        let num = Math.random();
        reslove(num);
    }, 2000);
})

p.then((num) => {
    console.log(num);
    return {
        a: 12
    };
});