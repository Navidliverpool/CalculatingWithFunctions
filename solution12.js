// From Codewars.
function zero(operator) { return (arguments.length == 0) ? 0 : operator(0); }

function one(operator) { return (arguments.length == 0) ? 1 : operator(1); }

function two(operator) { return (arguments.length == 0) ? 2 : operator(2); }

function three(operator) { return (arguments.length == 0) ? 3 : operator(3); }

function four(operator) { return (arguments.length == 0) ? 4 : operator(4); }

function five(operator) { return (arguments.length == 0) ? 5 : operator(5); }

function six(operator) { return (arguments.length == 0) ? 6 : operator(6); }

function seven(operator) { return (arguments.length == 0) ? 7 : operator(7); }

function eight(operator) { return (arguments.length == 0) ? 8 : operator(8); }

function nine(operator) { return (arguments.length == 0) ? 9 : operator(9); }

function plus(operand2) { return (operand1) => operand1 + operand2; }

function minus(operand2) { return (operand1) => operand1 - operand2; }

function times(operand2) { return (operand1) => operand1 * operand2; }

function dividedBy(operand2) { return (operand1) => Math.trunc(operand1 / operand2); }