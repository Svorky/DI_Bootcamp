// Exercise 1 : Location
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const { name, location: { country, city, coordinates: [lat, lng] } } = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// Exercise 2: Display Student Info
function displayStudentInfo(objUser) {
    //destructuring
    const { first, last } = objUser
    console.log(`Your full name is ${first} ${last}`)
}

displayStudentInfo({ first: 'Elie', last: 'Schoppik' });

// Exercise 3: User & Id
const users = { user1: 18273, user2: 92833, user3: 90315 }

const usersArray = Object.entries(users);
console.log(usersArray);

const modifiedUsersArray = usersArray.map(([user, id]) => [user, id * 2]);
console.log(modifiedUsersArray);

// Exercise 4 : Person Class
class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');
console.log(typeof member);

// Exercise 5 : Dog Class
class Dog {
    constructor(name) {
        this.name = name;
    }
};

// 2 success
class Labrador extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
};

// Exercise 6 : Challenges
// [2] === [2] false
// {} === {} error

// What is, for each object below, the value of the property number and why?
const object1 = { number: 5 }; // 4 because of reference
const object2 = object1;  // 4 because of reference
const object3 = object2;  // 4 because of reference
const object4 = { number: 5}; // 5 because this a new object

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)

class Animal{
    constructor(name, type, color){
        this.name = name
        this.type = type
        this.color = color
    }
}

class Mamal extends Animal{
    sound(snd){
        console.log(`${snd} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`);
    }
}

const farmerCow = new Mamal('Lily', 'cow', 'brown and white')
farmerCow.sound('Mooo')