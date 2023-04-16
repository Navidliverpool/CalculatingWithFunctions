// From Codewars.
function zero(expression) { return parseInt(numExp(0, expression)); }

function one(expression) { return parseInt(numExp(1, expression)); }

function two(expression) { return parseInt(numExp(2, expression)); }

function three(expression) { return parseInt(numExp(3, expression)); }

function four(expression) { return parseInt(numExp(4, expression)); }

function five(expression) { return parseInt(numExp(5, expression)); }

function six(expression) { return parseInt(numExp(6, expression)); }

function seven(expression) { return parseInt(numExp(7, expression)); }

function eight(expression) { return parseInt(numExp(8, expression)); }

function nine(expression) { return parseInt(numExp(9, expression)); }

function numExp(number, expression) {
    return expression == undefined ? number : expression(number);
}

function plus(a) { return function(b) { return b + a; } }

function minus(a) { return function(b) { return b - a; } }

function times(a) { return function(b) { return b * a; } }

function dividedBy(a) { return function(b) { return b / a; } }