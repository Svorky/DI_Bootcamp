let form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let data = new FormData(event.target)
    let json = Object.fromEntries(data)

    fetch('/user/register', {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'post',
        body: JSON.stringify(json)
    })
    .then( result => result.json())
    .then( json =>
        document.querySelector('#response').innerHTML = json.message
    )
})