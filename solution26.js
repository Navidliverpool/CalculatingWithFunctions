// From Codewars.
// for numbers functions we can also use ternary operator
// passing number to inner function by invoking that function within function with argument set as subsequent number

function zero(funct) {
    if (!funct) { return 0 }
    return funct(0)
}

function one(funct) {
    if (!funct) { return 1 }
    return funct(1)
}

function two(funct) {
    if (!funct) { return 2 }
    return funct(2)
}

function three(funct) {
    if (!funct) { return 3 }
    return funct(3)
}

function four(funct) {
    if (!funct) { return 4 }
    return funct(4)
}

function five(funct) {
    if (!funct) { return 5 }
    return funct(5)
}

function six(funct) {
    if (!funct) { return 6 }
    return funct(6)
}

function seven(funct) {
    if (!funct) { return 7 }
    return funct(7)
}

function eight(funct) {
    if (!funct) { return 8 }
    return funct(8)
}

function nine(funct) {
    if (!funct) { return 9 }
    return funct(9)
}

/*
for arithemtical operations we need to return functions which will do calculations for us - setting parameter lets us
nest further functions
*/
function plus(funct) {
    return function(operand) {
        return operand + funct
    }
}

function minus(funct) {
    return function(operand) {
        return operand - funct
    }
}

function times(funct) {
    return function(operand) {
        return operand * funct
    }
}

function dividedBy(funct) {
    return function(operand) {
        return Math.floor(operand / funct)
    }
}