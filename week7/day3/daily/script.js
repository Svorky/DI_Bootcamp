const apiKey = "3fc822fde9de20e252907d02";

let from = document.querySelector("#from");
let to = document.querySelector("#to");

async function getCodes() {
    const supportURL = `https://v6.exchangerate-api.com/v6/${apiKey}/codes`;
    let res = await fetch(supportURL);
    let json = await res.json();
    return json.supported_codes;
}

async function renderOption() {
    let codes = await getCodes();

    for (let code of codes) {
        let option = document.createElement("option");
        if (code[0] === "USD") option.defaultSelected = true;
        option.value = code[0];
        option.innerText = code.join(" - ");

        from.appendChild(option);
    }

    for (let code of codes) {
        let option = document.createElement("option");
        if (code[0] === "ILS") option.defaultSelected = true;
        option.value = code[0];
        option.innerText = code.join(" - ");

        to.appendChild(option);
    }
}

renderOption();

async function getAmount(formData) {
    const getAmount = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${formData.from}/${formData.to}/${formData.amount}`;
    let res = await fetch(getAmount);
    let json = await res.json();
    return json;
}

async function onSubmit(element) {
    let formData = new FormData(element);
    let data = Object.fromEntries(formData);

    if(data.amount === ''){
        alert("Amount field is empty!")
        return
    }

    let amount = await getAmount(data);
    renderAmount(amount);
}

const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    onSubmit(event.target);
});

function renderAmount(amount) {
    let res = document.querySelector("#result");
    res.innerText = amount.conversion_result + " " + amount.target_code;
}

document.querySelector("#switch").addEventListener("click", () => {
    let fromIndex = from.selectedIndex;
    let toIndex = to.selectedIndex;

    from.options[toIndex].selected = true;
    to.options[fromIndex].selected = true;

    onSubmit(form);
});
