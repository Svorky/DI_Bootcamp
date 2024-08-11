// Exercise 1: Hello, World! Program
console.log('Hello World')

// Exercise 2: Type Annotations
// Define a variable age of type number and a variable name of type string, and log them to the console.
let age: number = 6
let nam: string = 'John'
console.log(nam, age)

// Exercise 3: Union Types
// Define a variable id that can be either a string or a number.
let id: string | number

// Exercise 4: Control Flow with if...else
// Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.
const foo = (num: number): string => {
    if(num > 0){
        return 'positive'
    } else if (num < 0){
        return 'negative'
    }
    return 'zero'
}
let pos = foo(5)
let neg = foo(-10)
let z = foo(0)
console.log(pos, neg, z)

// Exercise 5: Function Overloading
// Create a function called add that can add two numbers together or concatenate two strings.
const add = (a: any, b: any): any => {
    return a + b
}

// Exercise 6: Tuple Types
// Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.
const getDetails = (name: string, age: number): [string, number, string] => {
    return [name, age, `Hello ${name}`]
}

// Exercise 7: Object Type Annotations
// Create a function createPerson that returns an object representing a person, with properties for name and age, using object type annotations.
type Person = {
    name: string,
    age: number
}

const createPerson = (name: string, age: number): Person => {
    return {
        name,
        age
    }
}

// Exercise 8: Type Assertions
// Given an HTML element, use a type assertion to cast it to a specific type and access its properties.
let body = document.body;
let myBody = body as HTMLBodyElement
myBody.innerHTML = '<h1>Hello</h1>'

// Exercise 9: switch Statement with Complex Conditions
// Create a function getAction that takes a string representing a user role and returns an action for the user. Use a switch statement with complex conditions to handle multiple roles.
const getAction = (role: string): string => {
    switch (role) {
        case 'admin':
            return 'adminPanel'
        case 'user':
            return 'login'
        case 'newUser':
            return 'registration'
        default:
            return 'No role ' + role;
    }
}

// Exercise 10: Function Overloading with Default Parameters
// Create an overloaded function greet that can either take a name and greet the person, or take no arguments and return a default greeting.
const greet = (name?: string) => {
    return `Hello ${name || 'User'}`
}
console.log(greet('John'))
console.log(greet())