// From Codewars.
function zero(fn) {
    if (fn === undefined) {
        return 0
    }
    return fn(0);
}

function one(fn) {
    if (fn === undefined) {
        return 1
    }
    return fn(1);
}

function two(fn) {
    if (fn === undefined) {
        return 2
    }
    return fn(2);
}

function three(fn) {
    if (fn === undefined) {
        return 3
    }
    return fn(3);
}

function four(fn) {
    if (fn === undefined) {
        return 4
    }
    return fn(4);
}

function five(fn) {
    if (fn === undefined) {
        return 5
    }
    return fn(5);
}

function six(fn) {
    if (fn === undefined) {
        return 6
    }
    return fn(6);
}

function seven(fn) {
    if (fn === undefined) {
        return 7
    }
    return fn(7);
}

function eight(fn) {
    if (fn === undefined) {
        return 8
    }
    return fn(8);
}

function nine(fn) {
    if (fn === undefined) {
        return 9
    }
    return fn(9);
}

function plus(value) {
    return (val) => {
        return value + val;
    };
}

function minus(value) {
    return (val) => {
        return val - value;
    };
}

function times(value) {
    return (val) => {
        return value * val;
    };
}

function dividedBy(value) {
    return (val) => {
        return Math.trunc(val / value);
    };
}