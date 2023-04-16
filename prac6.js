function four() {
    // moshkel injas. plus() inja dere moshkel ijad mikone.
    return 4 + plus();
}

function nine() {
    return 9;
}

function plus(i) {
    console.log(i)
    if (i == nine()) {
        return nine();
    }
    return "zart";
}
console.log(four(plus(nine())))