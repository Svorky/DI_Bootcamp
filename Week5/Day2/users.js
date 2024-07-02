// Using Javascript:
// Retrieve the div and console.log it
let div = document.getElementById("container")
console.log('div', div)
// Change the name “Pete” to “Richard”.
let uls = document.getElementsByTagName("ul")
let li = uls[0].getElementsByTagName("li")[1]
li.innerText = "Richard"
// Delete the second <li> of the second <ul>.
uls[1].children[1].remove()
// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
for(let ul of uls){
    ul.children[0].innerText = "Alexander"
    // Add a class called student_list to both of the <ul>'s.
    ul.setAttribute('class', 'student_list')
}
// Using Javascript:
// Add the classes university and attendance to the first <ul>.
uls[0].classList.add("university", "attendance")
// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
div.style.backgroundColor = 'lightblue'
div.style.padding = '10px'
// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
let lis = document.getElementsByTagName('li')
for(let li of lis){
    if(li.innerText === 'Dan'){
        li.style.display = 'none'
    }
    // Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
    if(li.innerText === 'Richard'){
        li.style.border = '3px solid black'
    }
}
// Change the font size of the whole body.
let body = document.getElementsByTagName("body")[0]
body.style.fontSize = '22px'
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if(div.style.backgroundColor === 'lightblue'){
    let lis = [...div.querySelectorAll("li")]
    let users = lis.map(li => li.innerText)
    alert(`Hello ${users[0]} and ${users[1]}`)
}