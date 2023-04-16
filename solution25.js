// From Codewars.
function sum(num, arg) {
    if (Object.keys(arg).length === 1 && Number.isInteger(arg[0][1])) {
        switch (arg[0][0]) {
            case "+":
                return Math.floor(num + arg[0][1])
            case "-":
                return Math.floor(num - arg[0][1])
            case "*":
                return Math.floor(num * arg[0][1])
            case "/":
                return Math.floor(num / arg[0][1])
            default:
                console.log('error')
        }
    }
    return num
}

function operator(op, arg) {
    if (Object.keys(arg).length === 1) {
        return { 0: op, 1: arg[0] }
    }
    return op
}

function zero() { return sum(0, arguments) }

function one() { return sum(1, arguments) }

function two() { return sum(2, arguments) }

function three() { return sum(3, arguments) }

function four() { return sum(4, arguments) }

function five() { return sum(5, arguments) }

function six() { return sum(6, arguments) }

function seven() { return sum(7, arguments) }

function eight() { return sum(8, arguments) }

function nine() { return sum(9, arguments) }

function plus() { return operator("+", arguments) }

function minus() { return operator("-", arguments) }

function times() { return operator("*", arguments) }

function dividedBy() { return operator("/", arguments) }