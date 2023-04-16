// From Codewars.
const number = (n, operation) => typeof operation === 'function' ? operation(n) : n;
const numberWithOperation = (n) => operation => number(n, operation);
const [zero, one, two, three, four, five, six, seven, eight, nine] = Array.from({ length: 10 }).map((_, index) => numberWithOperation(index));
const plus = right => left => left + right;
const minus = right => left => left - right;
const times = right => left => left * right;
const dividedBy = right => left => parseInt(left / right);