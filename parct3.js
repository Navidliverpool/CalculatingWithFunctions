class A {
    four() {
        return 4 + this.plus();
    }

    nine() {
        return 9;
    }

    plus() {

        return this.nine();
    }
}
class B {
    constructor() {
        this.a = new A();
    }
    result() {
        console.log(this.a.four(this.a.plus(this.a.nine())))
    }
}
var r = new B();
r.result();