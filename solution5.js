// From Codewars.
const n = (d) => (f) => f ? f(d) : d
const zero = n(0)
const one = n(1)
const two = n(2)
const three = n(3)
const four = n(4)
const five = n(5)
const six = n(6)
const seven = n(7)
const eight = n(8)
const nine = n(9)

const plus = (f) => n => n + f
const minus = (f) => n => n - f
const times = (f) => n => n * f
const dividedBy = (f) => n => Math.floor(n / f)