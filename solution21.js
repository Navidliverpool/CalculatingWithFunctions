// From Codewars.
const zero = (fn) => fn === undefined ? 0 : fn(0)
const one = (fn) => fn === undefined ? 1 : fn(1)
const two = (fn) => fn === undefined ? 2 : fn(2)
const three = (fn) => fn === undefined ? 3 : fn(3)
const four = (fn) => fn === undefined ? 4 : fn(4)
const five = (fn) => fn === undefined ? 5 : fn(5)
const six = (fn) => fn === undefined ? 6 : fn(6)
const seven = (fn) => fn === undefined ? 7 : fn(7)
const eight = (fn) => fn === undefined ? 8 : fn(8)
const nine = (fn) => fn === undefined ? 9 : fn(9)

const plus = (value) => { return val => { return value + val } }
const minus = (value) => { return val => { return val - value } }
const times = (value) => { return val => { return value * val } }
const dividedBy = (value) => { return val => { return Math.trunc(val / value) } }