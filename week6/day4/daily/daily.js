document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let data = new FormData(e.target)
    let json = Object.fromEntries(data)
    
    let body = document.body
    let p = document.createElement('p')

    let code = document.createElement('code')
    code.innerText = JSON.stringify(json)

    p.appendChild(code)
    body.appendChild(p)
})