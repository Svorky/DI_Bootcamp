// Exercise 1 : Find The Numbers Divisible By 23
// Instructions
// Create a function call displayNumbersDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.
function displayNumbersDivisible(divisor = 23) {
    let sum = 0
    for (let i = 0; i < 500; i++) {
        if (i % divisor === 0) {
            sum += i
            console.log(i);
        }
    }
    console.log(sum);
}
displayNumbersDivisible()
// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
// 368 391 414 437 460 483
// Sum : 5313


// Bonus: Add a parameter divisor to the function.

// displayNumbersDivisible(divisor)

// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3, 
// and their sum
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45, 
// and their sum
console.log("Exercise 2 : Shopping List")
// Exercise 2 : Shopping List
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

let shoppingList = ["banana", "orange", "apple"]

function myBill() {
    let total = 0
    for (let item of shoppingList) {
        if (item in stock) {
            if (stock[item] > 0) {
                total += prices[item]
                stock[item] -= 1
            }
        }
    }
    console.log('total', total)
}
myBill()

//Exercise 3 : What’s In My Wallet ?
console.log("Exercise 3 : What’s In My Wallet ?")
function changeEnough(itemPrice, amountOfChange) {
    let total = 0;
    for (let i = 0; i < amountOfChange.length; i++) {
        let change;
        switch (i) {
            case 0:
                change = 0.25
                break;
            case 1:
                change = 0.10
                break;
            case 2:
                change = 0.05
                break;
            case 3:
                change = 0.01
            default:
                break;
        }
        total += amountOfChange[i] * change
    }
    if (total >= itemPrice) {
        return true
    } else {
        return false
    }
}
console.log(changeEnough(4.25, [25, 20, 5, 0]))
console.log(changeEnough(14.11, [2, 100, 0, 0]))
console.log(changeEnough(0.75, [0, 0, 20, 5]))

// Exercise 4 : Vacations Costs
console.log("Exercise 4 : Vacations Costs");
function hotelCost() {
    let night = 140;
    let nights;
    do {
        let answer = prompt("How many nights you want to stay?")
        if(answer !== ''){
            parse = parseInt(answer)
            if(!isNaN(parse)){
                nights = parse
                break
            }
        }
    }
    while (true)
    return night * nights
}

function planeRideCost(){
    let dest;
    do {
        let answer = prompt("Destination")
        if(answer != ''){
            dest = answer
            break;
        }
    } while (true);
    let destinations = {
        london: 183,
        paris: 220
    }
    if(dest in destinations){
        return destinations[dest]
    } else {
        return 300
    }
}

function rentalCarCost(){
   let days;
    do {
        answer = prompt("How many days you want to rent a car?")
        if(answer !== ''){
            parse = parseInt(answer)
            if(!isNaN(parse)) {
                days = parse
                break
            }
        }
    }
    while (true)
    if(days > 10){
        return 40 * days * 0.95
    } else {
        return 40 * days
    }
}

function totalVacationCost(){
    let plane = planeRideCost()
    let hotel = hotelCost()
    let car = rentalCarCost()
    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
}

totalVacationCost()
