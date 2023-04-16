// From Codewars.
const a = (num, b) => {
    if (Array.isArray(b)) {
        if (b[1] === 'times') {
            return num * b[0]
        }
        if (b[1] === 'plus') {
            return num + b[0]
        }
        if (b[1] === 'minus') {
            return num - b[0]
        }
        if (b[1] === 'dividedBy') {
            return num / b[0]
        }
    } else {
        return num
    }
}

function zero(b) {
    return Math.floor(a(0, b))
}

function one(b) {
    return Math.floor(a(1, b))
}

function two(b) {
    return Math.floor(a(2, b))
}

function three(b) {
    return Math.floor(a(3, b))
}

function four(b) {
    return Math.floor(a(4, b))
}

function five(b) {
    return Math.floor(a(5, b))
}

function six(b) {
    return Math.floor(a(6, b))
}

function seven(b) {
    return Math.floor(a(7, b))
}

function eight(b) {
    return Math.floor(a(8, b))
}

function nine(b) {
    return Math.floor(a(9, b))
}

function plus(c) {
    return (function() {
        return [c, 'plus']
    }())
}

function minus(c) {
    return (function() {
        return [c, 'minus']
    }())
}

function times(c) {
    return (function() {
        return [c, 'times']
    }())
}

function dividedBy(c) {
    return (function() {
        return [c, 'dividedBy']
    }())
}