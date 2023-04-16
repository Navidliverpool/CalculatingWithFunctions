// From Codewars.
function zero(ch = '') {
    n = 0
    return main(n, ch)
}

function one(ch = '') {
    n = 1
    return main(n, ch)
}

function two(ch = '') {
    n = 2
    return main(n, ch)
}

function three(ch = '') {
    n = 3
    return main(n, ch)
}

function four(ch = '') {
    n = 4
    return main(n, ch)
}

function five(ch = '') {
    n = 5
    return main(n, ch)
}

function six(ch = '') {
    n = 6
    return main(n, ch)
}

function seven(ch = '') {
    n = 7
    return main(n, ch)
}

function eight(ch = '') {
    n = 8
    return main(n, ch)
}

function nine(ch = '') {
    n = 9
    return main(n, ch)
}

function plus(n) { return `${n} p` }

function minus(n) { return `${n} m` }

function times(n) { return `${n} t` }

function dividedBy(n) { return `${n} d` }


function main(n, ch) {
    console.log(ch)
    if (ch[ch.length - 1] == 'p')
        return n + Number(ch[0])
    else if (ch[ch.length - 1] == 't') {
        sum = 0
        for (i = 0; i < Number(ch[0]); i++)
            sum += n
        return sum
    } else if (ch[ch.length - 1] == 'm')
        return n - Number(ch[0])
    else if (ch[ch.length - 1] == 'd')
        return parseInt(n / Number(ch[0]))
    else
        return n
}