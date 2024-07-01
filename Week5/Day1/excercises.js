// Exercise 1 : List Of People
const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
console.log('people.shift()', people.shift())
// Write code to replace “James” to “Jason”.
people[3] = "Jason"
console.log('people', people)
// Write code to add your name to the end of the people array.
people.push("Alexander")
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"))
// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
let p = people.slice(1,3)
console.log('p', p)
// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo"))
// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people.at(-1)
console.log('last', last)
// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for(let p of people){
    console.log('p', p)
}
// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
for(let p of people){
    console.log('p', p)
    if(p === 'Devon') break;
}

// Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
const colors = ['orange', 'white', 'grey', 'red']
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for(let i = 0; i < colors.length; i++){
    console.log(`My #${i+1} choise is ${colors[i]}`)
}
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
const suffixes = ['st', 'nd', 'rd', 'th']
for(let i = 0; i < colors.length; i++){
    if(i < 3){
        console.log(`My ${i+1}${suffixes[i]} choise is ${colors[i]}`)
    } else {
        console.log(`My ${i+1}${suffixes.at(-1)} choise is ${colors[i]}`)
    }
}

// Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
let userNumber = 0
do
    userNumber = prompt("Number")
while(userNumber < 10)

// Exercise 4 : Building Management
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Review About Objects
// Copy and paste the above object to your Javascript file.
// Console.log the number of floors in the building.
console.log(building.numberOfFloors);
// Console.log how many apartments are on the floors 1 and 3.
console.log('firstFloor', building.numberOfAptByFloor.firstFloor);
console.log('thirdFloor', building.numberOfAptByFloor.thirdFloor);
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
const name = building.nameOfTenants[1];
console.log(name);
console.log(building.numberOfRoomsAndRent[name.toLowerCase()][0]);
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let rent = building.numberOfRoomsAndRent
if(rent.sarah[1] + rent.david[1] > rent.dan[1]){
    rent.dan[1] = 1200
}
console.log(building);

// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.
const family = {
    father: "Homer Simpson",
    mother: "Marge Simpson",
    son: "Bart Simpson",
    dother: "Lisa Simpson",
    baby: "Meggy Simpson"
}

for(let k of Object.keys(family)){
    console.log('keys', k)
}
for(let k of Object.values(family)){
    console.log('values', k)
}

// Exercise 6 : Rudolf
// Instructions
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
let s = []
for(let [k,v] of Object.entries(details)){
    s.push( k + " " + v )
}
console.log(s.join(" "));

// Exercise 7 : Secret Group
// Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society.
// The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”
names.sort()
let society = names.map( n => n[0]).join("")
console.log(society);