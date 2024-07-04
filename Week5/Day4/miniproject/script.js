const main = document.querySelector('main')
const aside = document.querySelector('aside')

const draw = []
for (let i = 0; i < 50 * 30; i++) {
    let div = document.createElement('div')
    draw.push(div)
    main.appendChild(div)
}

const colors = ['red', 'white', 'black', 'green', 'yellow', 'blue', 'gray', 'orange', 'purple', 'lightgreen', 'lightblue']
const colorsDiv = []
for (let color of colors) {
    let div = document.createElement('div')
    colorsDiv.push(div)
    div.style.backgroundColor = color
    aside.appendChild(div)
}

let color;
let mousedown = false;

for (let colorDiv of colorsDiv) {
    colorDiv.addEventListener("click", (event) => {
        color = event.target.style.backgroundColor;
    });
}

for (let div of draw) {
    div.addEventListener("mousedown", (event) => {
        mousedown = true;
        if (color != null) event.target.style.backgroundColor = color;
    });
    div.addEventListener("mouseover", (event) => {
        if (mousedown && color != null) event.target.style.backgroundColor = color;
    });
    div.addEventListener("mouseup", (event) => {
        mousedown = false
    });
}

const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    draw.forEach(
        div => div.style.backgroundColor = 'white'
    )
})