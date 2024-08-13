// Exercise 1: Class with Access Modifiers
// Create a class Person with private, protected, and public properties. Include a constructor to initialize the properties and a method that returns the full name of the person.
// Create a class Person with the following properties:
// A private property firstName of type string.
// A private property lastName of type string.
// A public property age of type number.
// A protected property address of type string.
// Also, include a constructor to initialize these properties and a method getFullName that returns the full name of the person.
// In this exercise, a class Person is created with different access modifiers for its properties: private for firstName and lastName, public for age, and protected for address. The constructor initializes these properties, and the method getFullName returns the full name of the person.

class Person{
  private _firstName: string
  private _lastName: string
  _age: number
  protected _address: string

  constructor(firstName: string, lastName: string, age: number, address: string){
    this._firstName = firstName
    this._lastName = lastName
    this._age = age
    this._address = address
  }

  getFullName(): string{
    return `${this._firstName} ${this._lastName}`
  }
}

const pers = new Person('John', 'Doe', 22, 'Tel Aviv')
console.log(pers.getFullName())

// Exercise 2: Extending Interfaces
/*
Create an interface Vehicle with properties make and model, both of type string, and a method start that returns a string. Then create an interface Car that extends Vehicle and includes an additional property numberOfDoors of type number.

In this exercise, an interface Vehicle is created with common properties (make and model) and a method (start). Another interface Car extends Vehicle and includes an additional property numberOfDoors. A class Sedan implements the Car interface and provides the implementation for the start method.
*/
interface Vehicle {
  make: string,
  model: string,
  start(): string
}

interface Car extends Vehicle {
  numberOfDoors: number
}

class Sedan implements Car {
  make: string
  model: string
  numberOfDoors: number
  constructor(make: string, model: string, numberOfDoors: number){
    this.make = make
    this.model = model
    this.numberOfDoors = numberOfDoors
  }
  start(): string {
      return `${this.make} ${this.model} has ${this.numberOfDoors} doors`
  }
}

const honda = new Sedan('Honda', 'Aurus', 4)
console.log(honda.start())

// Exercise 3: Using Intersection Types
/*
Create a function combineObjects that accepts two objects and combines them using intersection types. The function should return a new object containing all properties from both input objects.

In this exercise, a function combineObjects accepts two objects of types T and U and returns a new object containing all properties from both input objects using intersection types. The function uses the spread operator to combine the properties of the two objects.
*/
const combineObjects = <T extends object, U extends object>(a: T, b: U): T & U => {
  return {
    ...a,
    ...b
  }
}
const user = {name: 'John', age: 22}
const student = {grade: 'A'}
console.log(combineObjects(user,student))

// Exercise 4: Using Generics with Classes
class Stack<T> {
  private elements: T[] = [];

  constructor() {}
  isEmpty(): boolean {
    return this.elements.length === 0;
  }
  push(element: T): void {
    this.elements.push(element);
  }
  pop(): T | undefined {
    if (this.elements.length == 0) {
      throw new Error("The stack is empty!");
    }
    return this.elements.pop();
  }
}

let numbers = new Stack<number>();
console.log(numbers.isEmpty())
numbers.push(1)
numbers.push(2)
numbers.push(3)
console.log(numbers)
console.log(numbers.pop())

// Exercise 5: Using Generics with Functions
const filterArray = <T>(arr: T[], fn: ((element: T) => boolean)) => {
  return arr.filter(fn)
}

const nums: number[] = [1,2,3,4,5,6]
const pred = (el: number) => el % 2 === 0
const newarr = filterArray(nums, pred)
console.log(newarr)

const strs: string[] = ['apple', 'grape', 'melon']
const predi = (el: string) => el.includes('a')
const newar = filterArray(strs, predi)
console.log(newar)