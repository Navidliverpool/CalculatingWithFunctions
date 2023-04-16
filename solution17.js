// From Codewars.
function zero(b = 0) {
    return b === 0 ? b : b(0);
}

function one(b = 1) {
    return b === 1 ? b : b(1);
}

function two(b = 2) {
    return b === 2 ? b : b(2);
}

function three(b = 3) {
    return b === 3 ? b : b(3);
}

function four(b = 4) {
    return b === 4 ? b : b(4);
}

function five(b = 5) {
    return b === 5 ? b : b(5);
}

function six(b = 6) {
    return b === 6 ? b : b(6);
}

function seven(b = 7) {
    return b === 7 ? b : b(7);
}

function eight(b = 8) {
    return b === 8 ? b : b(8);
}

function nine(b = 9) {
    return b === 9 ? b : b(9);
}

function plus(a) {
    return (b) => a + b;
}

function minus(a) {
    return (b) => b - a;
}

function times(a) {
    return (b) => a * b;
}

function dividedBy(a) {
    return (b) => Math.floor(b / a);
}