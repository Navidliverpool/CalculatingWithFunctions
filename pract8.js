function four(i) {
    console.log("inja1", typeof(i), i)
        // I have changed return plus() + 4; to return i + 4; and it solved the issue. 
    return i + 4;
}

function nine(i) {
    if (i == four()) {
        return i + 9;
    }
    return 9;
}

function plus(i) {
    if (i == nine()) {
        console.log("inja3", i)
        return nine();
    }
    return "zart";
}
console.log(four(plus(nine())))