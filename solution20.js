// From Codewars.
const number = (n) => (f) => f ? f(n) : n;
const zero = number(0)
const one = number(1)
const two = number(2)
const three = number(3)
const four = number(4)
const five = number(5)
const six = number(6)
const seven = number(7)
const eight = number(8)
const nine = number(9)

const f = (o) => (y) => (x) => {
    return new Function(`return parseInt(${x} ${o} ${y});`)()
}

const plus = f('+')
const minus = f('-')
const times = f('*')
const dividedBy = f('/')