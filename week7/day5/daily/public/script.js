async function getData() {
    const res = await fetch("/api/emoji");
    const data = await res.json();
    return data;
}

const form = document.querySelector("form")

getData().then((game) => {
    document.querySelector("#emoji-to-guess").innerHTML = game.emoji;

    for (let index = 0; index < game.names.length; index++) {
        const element = game.names[index];
        let btn = document.createElement("button");
        btn.setAttribute("type", "submit");
        btn.setAttribute("name", "choise")
        btn.setAttribute("value", element)
        btn.innerText = element
        form.appendChild(btn)
    }
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let submitButton = event.submitter
    fetch('/api/guess',{
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({choise: submitButton.value})
    })
    .then( res => res.json())
    .then( json => {
        let query = new URLSearchParams(json)
        if(json.success){
            location.href = `correct.html?${query}`;
        } else {
            location.href = `fail.html?${query}`;
        }
    })
});
