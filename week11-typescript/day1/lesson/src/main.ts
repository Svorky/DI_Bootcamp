//type
let num: number = 7;
num = 9;
let str: string;
str = "a";
let bol: boolean;
bol = false;
let anyt: any;
anyt = 1;
anyt = "2";
anyt = false;
anyt = [];
anyt = undefined;

// union type
let union: number | string;
union = 12;
union = "12";

// type RegExp
let reg: RegExp = /\w+/g;

// type Array
// let strarr = ['abc']
// or
let strarr: string[] = ["abc"];
strarr[1] = "bbb";
// strarr[0] = 11 // error

let numarr: number[] = [];

let numstrarr: (string | number)[] = ["a", 1];

// type Tuple
// can't change types on index
let mytuple: [string | number, number, boolean] = ["a", 1, true];

// type Object
let myobj: object = {};

const userOne = {
    name: "John",
    age: 25,
    address: "abc",
};

// userOne.age = 'qwer' // error
// userOne.gender = 'male' // error, gender not define

// type
type User = {
    name: string;
    age: number;
    address: string;
    active: boolean;
    gender?: string;
};

let myuser: User = {
    name: "aaa",
    age: 25,
    address: "bbb",
    active: true,
};

let myuser1: User = {
    name: "aaa",
    age: 25,
    address: "bbb",
    active: true,
    gender: "male",
};

// intreface
interface UserInterface {
    name: string;
    age: number;
    address: string;
    active: boolean;
    gender?: string;
}

let myuser3: UserInterface = {
    name: "aaa",
    age: 25,
    address: "bbb",
    active: true,
};

// type Enum
enum Grade {
    U = 1, //change index
    D,
    C,
    B,
    A,
}

console.log(Grade[3]); // return B before change index
console.log(Grade[3]); // return C after change index
console.log(Grade.U); // return 0 before change index
console.log(Grade.U); // return 1 after change index

// type literal
let statuscode: "loading" | "success" | "failed";
statuscode = "loading";
// statuscode = 'pending' // error

// type Aliases
type StringOrNumber = string | number;

type Student = {
    name: string;
    pasport: StringOrNumber;
};

// function
const sum = (a: number, b: number): number => {
    return a + b;
};

sum(4,6)

// type function
type SumFunc = (a: number, b:number) => number;

const add: SumFunc = (a, b) => {
    return a + b
}

const sumDefault = (a: number, b: number = 5): number => {
    return a + b;
};

const sumOptional = (a: number, b?: number): number => {
    return a + (b || 0);
};

// type never
const throwError = (message: string): never => {
    throw new Error(message);
    
}
