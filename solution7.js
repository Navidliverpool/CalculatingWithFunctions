// From Codewars.
function number(num) {
    return function() {
        if (arguments.length === 0) {
            return num
        } else {
            return Math.floor(eval(num + arguments[0]))
        }
    }
}

function method(met) {
    return (val) => met + val
}

const zero = number(0),
    one = number(1),
    two = number(2),
    three = number(3),
    four = number(4),
    five = number(5),
    six = number(6),
    seven = number(7),
    eight = number(8),
    nine = number(9),
    plus = method('+'),
    minus = method('-'),
    times = method('*'),
    dividedBy = method('/');