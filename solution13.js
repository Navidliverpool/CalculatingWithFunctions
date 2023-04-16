// From Codewars.
function zero(a) {
    if (a == null) return 0;
    cur = 0;
    foreExp = a[0];
    if (foreExp == '+') {
        return (cur + a[1]);
    } else if (foreExp == '*') {
        return (cur * a[1]);
    } else if (foreExp == '-') {
        return (cur - a[1]);
    } else {
        return parseInt(cur / a[1]);
    }
}

function one(a) {
    if (a == null) return 1;
    cur = 1;
    foreExp = a[0];
    if (foreExp == '+') {
        return (cur + a[1]);
    } else if (foreExp == '*') {
        return (cur * a[1]);
    } else if (foreExp == '-') {
        return (cur - a[1]);
    } else {
        return parseInt(cur / a[1]);
    }
}

function two(a) {
    if (a == null) return 2;
    cur = 2;
    foreExp = a[0];
    if (foreExp == '+') {
        return (cur + a[1]);
    } else if (foreExp == '*') {
        return (cur * a[1]);
    } else if (foreExp == '-') {
        return (cur - a[1]);
    } else {
        return parseInt(cur / a[1]);
    }
}

function three(a) {
    if (a == null) return 3;
    cur = 3;
    foreExp = a[0];
    if (foreExp == '+') {
        return (cur + a[1]);
    } else if (foreExp == '*') {
        return (cur * a[1]);
    } else if (foreExp == '-') {
        return (cur - a[1]);
    } else {
        return parseInt(cur / a[1]);
    }
}

function four(a) {
    if (a == null) return 4;
    cur = 4;
    foreExp = a[0];
    if (foreExp == '+') {
        return (cur + a[1]);
    } else if (foreExp == '*') {
        return (cur * a[1]);
    } else if (foreExp == '-') {
        return (cur - a[1]);
    } else {
        return parseInt(cur / a[1]);
    }
}

function five(a) {
    if (a == null) return 5;
    cur = 5;
    foreExp = a[0];
    if (foreExp == '+') {
        return (cur + a[1]);
    } else if (foreExp == '*') {
        return (cur * a[1]);
    } else if (foreExp == '-') {
        return (cur - a[1]);
    } else {
        return parseInt(cur / a[1]);
    }
}

function six(a) {
    if (a == null) return 6;
    cur = 6;
    foreExp = a[0];
    if (foreExp == '+') {
        return (cur + a[1]);
    } else if (foreExp == '*') {
        return (cur * a[1]);
    } else if (foreExp == '-') {
        return (cur - a[1]);
    } else {
        return parseInt(cur / a[1]);
    }
}

function seven(a) {
    if (a == null) return 7;
    cur = 7;
    foreExp = a[0];
    if (foreExp == '+') {
        return (cur + a[1]);
    } else if (foreExp == '*') {
        return (cur * a[1]);
    } else if (foreExp == '-') {
        return (cur - a[1]);
    } else {
        return parseInt(cur / a[1]);
    }
}

function eight(a) {
    if (a == null) return 8;
    cur = 8;
    foreExp = a[0];
    if (foreExp == '+') {
        return (cur + a[1]);
    } else if (foreExp == '*') {
        return (cur * a[1]);
    } else if (foreExp == '-') {
        return (cur - a[1]);
    } else {
        return parseInt(cur / a[1]);
    }
}

function nine(a) {
    if (a == null) return 9;
    cur = 9;
    foreExp = a[0];
    if (foreExp == '+') {
        return (cur + a[1]);
    } else if (foreExp == '*') {
        return (cur * a[1]);
    } else if (foreExp == '-') {
        return (cur - a[1]);
    } else {
        return parseInt(cur / a[1]);
    }
}

function plus(a) {
    return ['+', a];
}

function minus(a) {
    return ['-', a];
}

function times(a) {
    return ['*', a];
}

function dividedBy(a) {
    return ['/', a];
}