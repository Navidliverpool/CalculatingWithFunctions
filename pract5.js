function four() {
    return 4;
}

function nine() {
    return 9;
}

function plus(a, b) {
    return a + b;
}
var r = plus();
r.a = four;
r.b = nine;
console.log(r)
    // console.log(four(plus(nine())))