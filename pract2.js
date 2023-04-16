// Not working.

function four(i) {
    console.log("inja 1")
    if (i == plus()) {
        console.log("1", i)
        return 4 + plus();
    }
    return 4;
}

function nine(i) {
    console.log("inja 2")
    if (i === plus()) {
        console.log("inja 22")
        return 9 + plus();
    }
    return 9;
}

function plus(i) {
    console.log("inja 3")
    console.log("3", i)
    if (i == nine()) {
        return nine();
    }
    return "zart";
}

console.log(plus(nine()))