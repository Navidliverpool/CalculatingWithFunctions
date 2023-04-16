function four(i) {
    // I have changed if (i > 0 && i == plus()) to if (i > 0 && plus()) and it solved the issue. 
    if (i > 0 && plus()) {
        return i + 4;
    }
    return 4;
}

function nine(i) {
    if (i > 0 && plus()) {
        return i + 9;
    }

    return 9;
}

function plus(i) {
    if (i == nine()) {
        return nine();
    }
    if (i == four()) {
        return nine();
    }
    return "zart";
}

console.log(four(plus(nine())))