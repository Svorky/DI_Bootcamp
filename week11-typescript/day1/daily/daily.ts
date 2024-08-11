const processInput = (input: number | string | boolean) => {
    if(typeof input === 'number'){
        return Math.pow(input, 2)
    } else if (typeof input === 'string'){
        return input.toUpperCase()
    } else {
        return !input
    }
}

console.log(processInput(5))
console.log(processInput('hello'))
console.log(true)