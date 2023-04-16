// Not working.
function four(i) {
    // I have changed if (i > 0 && i == plus()) to if (i > 0 && plus()) and it solved the issue. 
    if (i === plus) {
        return i + 4;
    }
    // if (i > 0) {
    //     return i - 4;
    // }
    return 4;
}

function nine(i) {
    // if (i === plus()) {
    //     return i + 9;
    // }
    // if (i > 0 && minus()) {
    //     return i - 9;
    // }
    return 9;
}

function plus(i) {
    if (i === nine) {
        console.log("inja1")
        return nine;
    }
    if (i === four) {
        console.log("inja2")
        return four;
    }
    return "zart";
}

// function minus(i) {
//     if (i == nine()) {
//         return nine();
//     }
//     if (i == four()) {
//         return nine();
//     }
//     return "zart";
// }

console.log(four(plus(nine())))