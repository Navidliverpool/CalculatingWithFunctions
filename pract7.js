function four() {
    // moshkel injas. plus() inja dere moshkel ijad mikone.
    return 4;
}

function nine() {
    return 9;
}

function plus(i) {
    if (i == nine()) {
        console.log("inja", i)
        return nine();
    }
    return "zart";
}
var test = plus(nine());
var t = test + four();
// console.log(four(plus(nine())))
console.log(t)