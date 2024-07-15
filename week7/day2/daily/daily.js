document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    let data = new FormData(event.target);
    let formjson = Object.fromEntries(data);

    let query = new URLSearchParams({
        ...formjson,
        api_key: "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My",
    });
    getGif(query);
});

async function getGif(query) {
    let res = await fetch(`https://api.giphy.com/v1/gifs/random?${query}`);
    let json = await res.json();
    renderGif(json.data);
}

function renderGif(json) {
    console.log("json", json);
    let gifs = document.querySelector("#gifs");
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", json.images.original.url);
    div.appendChild(img);
    let delet = document.createElement("button");
    delet.innerText = "Delete";
    delet.addEventListener("click", (event) => {
        event.target.parentElement.remove();
    });
    div.appendChild(delet);
    gifs.appendChild(div);
}

document.querySelector('#deleteall').addEventListener('click', (event) => {
    let a = document.querySelectorAll('#gifs > * > button')
    a.forEach( button => button.click())
})