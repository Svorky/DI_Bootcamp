let article = document.querySelector('article')
let h1 = article.querySelector('h1')
console.log('h1', h1)

article.lastElementChild.remove()

let h2 = article.querySelector('h2')
h2.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red'
})

let h3 = article.querySelector('h3')
h3.addEventListener('click', (e) => {
    e.target.style.display = 'none'
})

function makeBold(event) {
    let para = article.querySelectorAll('p')
    para.forEach(
        p => p.style.fontWeight = 'bold'
    )
}

h1.addEventListener('mouseover', (e) => {
    let r = Math.floor(Math.random() * 101);
    e.target.style.fontSize = r + 'px'
})

// let par = article.querySelectorAll('p')[1]
// par.addEventListener('mouseover')

let form = document.querySelector('form')
console.log('form', form)
let fname = document.getElementById('fname')
console.log('fname', fname)
let lname = document.getElementById('lname')
console.log('lname', lname)
let submit = document.getElementById('submit')
console.log('submit', submit)
let fnameinp = document.getElementsByName('firstname')
let lnameinp = document.getElementsByName('lastname')
console.log('fnameinp', fnameinp)
console.log('lnameinp', lnameinp)
let ul = document.querySelector('ul')
function formsubmit(event) {
    event.preventDefault()
    let fn = event.target.firstname
    let ln = event.target.lastname
    console.log('ln.value', ln.value)
    if (fn.value.trim() === '') {
        alert("First name is empty")
        return
    }
    let li1 = document.createElement('li')
    li1.innerText = fn.value.trim()
    ul.appendChild(li1)
    if (ln.value.trim() === '') {
        alert("Last name is empty")
        return
    }
    let li2 = document.createElement('li')
    li2.innerText = ln.value.trim()
    ul.appendChild(li2)
    // event.target.submit()
}


let allBoldItems = [];
let p = document.querySelector('#exercise3')

function getBoldItems() {
    allBoldItems = [...p.querySelectorAll('strong')]
}

function highlight() {
    getBoldItems()
    allBoldItems.forEach(
        el =>
            el.style.color = 'blue'

    )
}

function returnItemsToDefault() {
    getBoldItems()
    allBoldItems.forEach(
        el =>
            el.style.color = 'black'
    )
}

p.addEventListener('mouseover', highlight)
p.addEventListener('mouseout', returnItemsToDefault)

let ex4 = document.querySelector('#exercise4')

function calculate(event) {
    event.preventDefault()
    let r = parseInt(event.target.radius.value.trim())
    if(isNaN(r)){
        alert("Type a number")
        return
    }
    event.target.volume.value = 4 * Math.PI * Math.pow(r, 3) / 3
}