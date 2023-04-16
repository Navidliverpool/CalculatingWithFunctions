function four(i) {
    // I have changed return plus() + 4; to return i + 4; and it solved the issue. 

    if (i > 0) {
        return i + 4;
    }
    return i + 4;
}

function nine(i) {
    // console.log("inja2", i)
    if (i > 0) {
        return i + 9;
    }

    return 9;
}

function plus(i) {
    if (i == nine()) {
        // console.log("inja3", i)
        return nine();
    }
    if (i == four()) {
        // console.log("inja3", i)
        return nine();
    }
    return "zart";
}
console.log(four(plus(nine())))