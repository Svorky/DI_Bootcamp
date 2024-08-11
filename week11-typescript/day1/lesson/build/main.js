"use strict";
//type
let num = 7;
num = 9;
let str;
str = "a";
let bol;
bol = false;
let anyt;
anyt = 1;
anyt = "2";
anyt = false;
anyt = [];
anyt = undefined;
// union type
let union;
union = 12;
union = "12";
// type RegExp
let reg = /\w+/g;
// type Array
// let strarr = ['abc']
// or
let strarr = ["abc"];
strarr[1] = "bbb";
// strarr[0] = 11 // error
let numarr = [];
let numstrarr = ["a", 1];
// type Tuple
// can't change types on index
let mytuple = ["a", 1, true];
// type Object
let myobj = {};
const userOne = {
    name: "John",
    age: 25,
    address: "abc",
};
let myuser = {
    name: "aaa",
    age: 25,
    address: "bbb",
    active: true,
};
let myuser1 = {
    name: "aaa",
    age: 25,
    address: "bbb",
    active: true,
    gender: "male",
};
let myuser3 = {
    name: "aaa",
    age: 25,
    address: "bbb",
    active: true,
};
// type Enum
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade[3]); // return B before change index
console.log(Grade[3]); // return C after change index
console.log(Grade.U); // return 0 before change index
console.log(Grade.U); // return 1 after change index
// type literal
let statuscode;
statuscode = "loading";
// function
const sum = (a, b) => {
    return a + b;
};
sum(4, 6);
const add = (a, b) => {
    return a + b;
};
const sumDefault = (a, b = 5) => {
    return a + b;
};
const sumOptional = (a, b) => {
    return a + (b || 0);
};
// type never
const throwError = (message) => {
    throw new Error(message);
};
