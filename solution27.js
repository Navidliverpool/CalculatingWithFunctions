// From Codewars.
function zero(operation) {
    return (!operation) ? 0 : operation(0);
}

function one(operation) {
    return (!operation) ? 1 : operation(1);
}

function two(operation) {
    return (!operation) ? 2 : operation(2);
}

function three(operation) {
    return (!operation) ? 3 : operation(3);
}

function four(operation) {
    return (!operation) ? 4 : operation(4);
}

function five(operation) {
    return (!operation) ? 5 : operation(5);
}

function six(operation) {
    return (!operation) ? 6 : operation(6);
}

function seven(operation) {
    return (!operation) ? 7 : operation(7);
}

function eight(operation) {
    return (!operation) ? 8 : operation(8);
}

function nine(operation) {
    return (!operation) ? 9 : operation(9);
}

function plus(number1) {
    return answer = number2 => number2 + number1;
}

function minus(number1) {
    return answer = number2 => number2 - number1;
}

function times(number1) {
    return answer = number2 => number2 * number1
}

function dividedBy(number1) {
    return answer = number2 => Math.floor(number2 / number1);
}