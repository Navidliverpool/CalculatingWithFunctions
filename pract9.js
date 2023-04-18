// From Codewars. I have changed the code slightly for demonstration purposes.

const zero = a => a ? a(0) : 0
const one = a => a ? a(1) : 1
const two = a => a ? a(2) : 2
const three = a => a ? a(3) : 3
const four = a => a ? a(4) : 4
const five = a => a ? a(5) : 5
const six = a => a ? a(6) : 6
const seven = a => a ? a(7) : 7
const eight = a => a ? a(8) : 8
const nine = a => a ? a(9) : 9

function fourr(a) {
    if (a) {
        return a(4);
    }
    return 4;
}

function outer(a) {
    return function inner(b) {
        return a + b;
    }
}
console.log(fourr(outer(nine())))