// From Codewars.
function zero() {
    if (arguments.length === 0) return 0;
    return arguments[0](0);
}

function one() {
    if (arguments.length === 0) return 1;
    return arguments[0](1);
}

function two() {
    if (arguments.length === 0) return 2;
    return arguments[0](2);
}

function three() {
    if (arguments.length === 0) return 3;
    return arguments[0](3);
}

function four() {
    if (arguments.length === 0) return 4;
    return arguments[0](4);
}

function five() {
    if (arguments.length === 0) return 5;
    return arguments[0](5);
}

function six() {
    if (arguments.length === 0) return 6;
    return arguments[0](6);
}

function seven() {
    if (arguments.length === 0) return 7;
    return arguments[0](7);
}

function eight() {
    if (arguments.length === 0) return 8;
    return arguments[0](8);
}

function nine() {
    if (arguments.length === 0) return 9;
    return arguments[0](9);
}

function plus(b) {
    return function(a) {
        return a + b;
    }
}

function minus(b) {
    return function(a) {
        return a - b;
    }
}

function times(b) {
    return function(a) {
        return a * b;
    }
}

function dividedBy(b) {
    return function(a) {
        return Math.floor(a / b);
    }
}