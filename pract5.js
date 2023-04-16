function four() {
    return 4 + plus();
}

function nine() {
    return 9;
}

function plus() {

    return nine();
}

console.log(four(plus(nine())))