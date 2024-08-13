// function overload
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string | number, b: string | number): string | number {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return -1;
}

// rest
const addRest = (a: number, ...rest: number[]): number => {
    return rest.reduce((total, num) => total + num, a);
};
addRest(0, 100, 3, 4, 5);

// never type
const errorMessage = (msg: string): never => {
    throw new Error(msg);
};

const numberOrString = (value: number | string): string => {
    if (typeof value === "string") return "string";
    if (typeof value === "number") return "number";
    return errorMessage("number or string accepted");
};

// Assertion or Casting
// as

// aliases
type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "abc";
let b = a as Two;
b = 9;

let c = a as Three;
// c = 'hi' error
c = "hello";

// angle brackets - not use in tsx
let d = <One>"hi";
let f = <string | number>777;

// DOM
// const img = document.querySelector('img') as HTMLImageElement
// img.src = ''

// const input = <HTMLInputElement>document.querySelector('input')
// const input1 = document.querySelector('input') as HTMLInputElement

// let year: HTMLElement | null = document.getElementById('year')
// const thisYear: string = new Date().getFullYear().toString()
// if(year){
//   year.textContent = thisYear
// }

const year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.textContent = thisYear;

class User {
    public name: string;
    private age: number;
    protected active: boolean;

    constructor(name: string, age: number, active: boolean) {
        this.name = name;
        this.age = age;
        this.active = active;
    }

    //public
    getAge() {
        return `My age is ${this.age}`;
    }

    getActive() {
        return `Am I active? ${this.active}`;
    }

    setAge(age: number) {
        this.age = age;
    }
}

let user1 = new User("John", 25, true);
user1.setAge(33);
console.log(user1.getAge());
console.log(user1.getActive());

class Student extends User {
    constructor(name: string, age: number, active: boolean) {
        super(name, age, active);
    }

    getStudentAge(){
      // return `My age is ${this.age}`;
    }

    getStudentActive(){
      return `Am I active? ${this.active}`;
    }
}

let student1 = new Student("Anne", 22, true);
console.log(student1.name);
console.log(student1.getAge());
console.log(student1.getActive());
console.log(student1.getStudentActive());


// static methods
class Peeps{
  static count: number = 0

  static getCount(): number{
    return Peeps.count
  }

  public id: number;
  // public name: string;

  constructor(public name:string){
    this.name = name
    this.id = ++Peeps.count;
  }
}

const stud1 = new Peeps('John')
const stud2 = new Peeps('Marry')
const stud3 = new Peeps('Anne')


type UserType = {
  name:string,
  age:number,
  active:boolean
}

type Grade = {
  grade:number
}

let user: UserType = {
  name:'John',
  age: 22,
  active: true
}

let student: UserType & Grade = {
  name:'John',
  age: 22,
  active: true,
  grade: 10
}

interface UserInterface {
  name:string,
  age:number,
  active:boolean,
  getAge():number
}

class User1 implements UserInterface {
  public _name: string;
  protected _age: number;
  private _active: boolean;

  constructor(name: string, age: number, active:boolean){
    this._name = name
    this._age = age
    this._active = active
  }

  getAge(): number {
      return this._age
  }

  get name(): string{
    return this._name
  }
  get age(): number{
    return this._age
  }
  get active(): boolean{
    return this._active
  }
  set name(name: string){
    this._name = name
  }
  set age(age: number){
    this._age = age
  }
  set active(active: boolean){
    this._active = active
  }
}

function validateUnionType(value: any, allowedTypes: string[]) : boolean {
  for(const type of allowedTypes){
    if(typeof value === type){
      return true
    }
  }
  return false
}

const allowedTypes = ['string', 'number', 'boolean']
const validString = 'Hello'