// Exercise 1 : Colors
const colors1 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors1.forEach(
    (color, idx) => console.log(`${idx + 1}# choise is ${color}`)
)

let s = colors1.some(c => c === "Violet") ? "Yeah" : "No..."
console.log(s);

//Exercise 2 : Colors #2
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];
colors.forEach(
    (color, idx) => {
        let suffix = idx === 0 ? ordinal[idx + 1] :
            idx === 1 ? ordinal[idx + 1] :
                idx === 2 ? ordinal[idx + 1] :
                    ordinal[0]
        console.log(`${idx + 1}${suffix} choise is ${color}`)
    }
)

// Exercise 3 : Analyzing
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];
// spread operator unpacks array
const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// ------2------
// spread operator unpacks string to chars
const country = "USA";
console.log([...country]);

// ------Bonus------
// array with two elements which undefined will be unpack
let newArray = [...[, ,]];
console.log(newArray);

// Exercise 4 : Employees
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];

// Using the map() method, push into a new array the firstname of the user and a welcome message
let firstnames = users.map(
    user =>
        `Hello ${user.firstName}`
)
console.log('firstnames', firstnames)

// Using the filter() method, create a new array, containing only the Full Stack Residents.
let filter = users.filter(
    user =>
        user.role === 'Full Stack Resident'
)
console.log('filter', filter)

//  Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
let chain = users
    .filter(user => user.role === 'Full Stack Resident')
    .map(user => user.lastName)
console.log('chain', chain)

// Exercise 5 : Star Wars
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let newEpic = epic.reduce(
    (acc, cur) => {
        return acc + cur + " "
    }, ''
)
console.log('newEpic', newEpic)

// Exercise 6 : Employees #2
const students = [{ name: "Ray", course: "Computer Science", isPassed: true },
{ name: "Liam", course: "Computer Science", isPassed: false },
{ name: "Jenner", course: "Information Technology", isPassed: true },
{ name: "Marco", course: "Robotics", isPassed: true },
{ name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
{ name: "Jamie", course: "Big Data", isPassed: false }];

// Using the filter() method, create a new array, containing the students that passed the course.
let passed = students.filter(
    student => student.isPassed
)
console.log('passed', passed)
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
let passedChain = students.filter(
    student => student.isPassed
)
.forEach(
    student =>
        console.log(`Good job ${student.name}, you passed the course in ${student.course}`)
)