// Exercise 2 : Ternary Operator
function winBattle(){
    return true;
}
// Transform the winBattle() function to an arrow function.
const winBattleArrow = () => {return true}
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator.
// If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.
const experiencePoints = winBattleArrow() ? 10 : 1

// Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not.
// The function should return true or false
// Check out the example below to see the expected output
// Example:
const isString = (value) => {
    const res = value.constructor == String ? true : false
    return res
}
console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

// Exercise 4 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
const sum = (a,b) => a + b


// Exercise 5 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.
function grams1(kg) {
    return kg * 1000
}

const grams2 = function(kg){
    return kg * 1000
}

const grams3 = kg => kg*1000;

console.log('grams1(5)', grams1(5));
console.log('grams2(5)', grams2(5));
console.log('grams3(5)', grams3(5));

// Exercise 6 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
(function (number, name, location, job) {
    let s = `Yow will ${job} in ${location}, and married to ${name} with ${number} kids.`
    let p = document.querySelector('p')
    p.innerText = s
})(3, 'John', 'Tokio', 'CEO');

// Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.
(function (name) {
    let nav = document.querySelector('nav')
    let div = document.createElement('div')

    let p =document.createElement('p')
    p.innerText = `Welcome ${name}!`
    
    let img = document.createElement('img')
    img.setAttribute('src', 'https://octopus.developers.institute/static/theme/images/avatars/home-profile.jpg')
    img.setAttribute('width', '50px')
    p.appendChild(img)
    
    div.appendChild(p)
    nav.appendChild(div)
})('Adam')

// Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
function makeJuice(size){
    const ingredients = []
    function addIngredients(first, second, third){
       ingredients.push(first, second, third)
    }
    function displayJuice(){
        let bar = document.querySelector('#juicebar')
        let p = document.createElement('p')
        p.innerText = `The client wants a ${size} juice, containig ${ingredients.join(", ")}.`
        bar.appendChild(p)
    }
    addIngredients('apple', 'mango', 'watermelon')
    addIngredients('grape', 'peach', 'pear')
    displayJuice()
}
makeJuice('small')

// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.