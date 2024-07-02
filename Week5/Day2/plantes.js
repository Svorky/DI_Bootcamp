let planets = [
    {
        name: "Mercury",
        moons: 0,
        backgroundColor: 'grey'
    },
    {
        name: "Venus",
        moons: 0,
        backgroundColor: 'brown'
    },
    {
        name: "Earth",
        moons: 1,
        backgroundColor: 'blue'
    },
    {
        name: "Mars",
        moons: 2,
        backgroundColor: 'red'
    },
    {
        name: "Jupiter",
        moons: 95,
        backgroundColor: 'yellow'
    },
    {
        name: "Saturn",
        moons: 146,
        backgroundColor: 'brown'
    },
    {
        name: "Uranus",
        moons: 28,
        backgroundColor: 'cyan'
    },
    {
        name: "Neptune",
        moons: 16,
        backgroundColor: 'blue'
    },
]
let section = document.querySelector('section')
planets.forEach(
    planet => {
        let div = document.createElement('div')
        div.classList.add('planet')
        div.style.backgroundColor = planet.backgroundColor

        for(let i=0; i<planet.moons; i++){
            let moon = document.createElement('div')
            moon.classList.add('moon')
            moon.style.left = i * 10 + "px"
            div.appendChild(moon)
        }

        section.appendChild(div)
    }
)