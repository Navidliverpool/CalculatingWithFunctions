// From Codewars.
const calculate = ({ lastNumber, operator }, number) => {
    if (operator === '+') return number + lastNumber
    if (operator === '-') return number - lastNumber
    if (operator === '*') return number * lastNumber
    return Math.floor(number / lastNumber)
}

const zero = (partial) => partial ? calculate(partial, 0) : 0
const one = (partial) => partial ? calculate(partial, 1) : 1
const two = (partial) => partial ? calculate(partial, 2) : 2
const three = (partial) => partial ? calculate(partial, 3) : 3
const four = (partial) => partial ? calculate(partial, 4) : 4
const five = (partial) => partial ? calculate(partial, 5) : 5
const six = (partial) => partial ? calculate(partial, 6) : 6
const seven = (partial) => partial ? calculate(partial, 7) : 7
const eight = (partial) => partial ? calculate(partial, 8) : 8
const nine = (partial) => partial ? calculate(partial, 9) : 9

const plus = (lastNumber) => ({ lastNumber, operator: '+' })
const minus = (lastNumber) => ({ lastNumber, operator: '-' })
const times = (lastNumber) => ({ lastNumber, operator: '*' })
const dividedBy = (lastNumber) => ({ lastNumber, operator: '/' })