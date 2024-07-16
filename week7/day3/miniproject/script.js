async function getInfo() {
    let randomNumber = Math.floor(Math.random() * 83 + 1);
    let personURL = `https://www.swapi.tech/api/people/${randomNumber}`;
    // let personURL = `https://www.swapi.tech/api/people/500`;
    let responsePerson = await fetch(personURL);
    if (responsePerson.status != 200) {
        return {
            success: false,
            error: { status: responsePerson.status, url: personURL },
        };
    } else {
        let jsonPerson = await responsePerson.json();
        console.log("json", jsonPerson);
        let homeworldURL = jsonPerson.result.properties.homeworld;
        let responseHomeworld = await fetch(homeworldURL);
        if (responseHomeworld.status != 200) {
            return {
                success: false,
                error: { status: responsePerson.status, url: homeworldURL },
            };
        } else {
            let jsonHomeworld = await responseHomeworld.json();
            console.log("jsonHomeworld", jsonHomeworld);
            jsonPerson = jsonPerson.result.properties;
            jsonPerson.homeworld = jsonHomeworld.result.properties;
            return { success: true, data: jsonPerson };
        }
    }
}

function render(json) {
    console.log("json", json);
    const properties = ["name", "height", "gender", "birth_year", "homeworld"];
    const info = document.querySelector(".info-container");
    info.innerHTML = ''
    for (let prop of properties) {
        if (prop === "name") {
            let h1 = document.createElement("h1");
            h1.innerText = json[prop];
            info.appendChild(h1);
            continue;
        }
        if (prop === "homeworld") {
            let p = document.createElement("p");
            p.innerText = `Homeworld: ${json[prop].name}`;
            info.appendChild(p);
            continue;
        }
        let p = document.createElement("p");
        p.innerText = `${prop.replace("_", " ")}: ${json[prop]}`;
        info.appendChild(p);
    }
}

document.querySelector("button").addEventListener("click", async () => {
    loading()
    let json = await getInfo();
    if (json.success) {
        render(json.data);
    } else {
        document.querySelector('.info-container').innerHTML = "Can't find a person"
        console.error(json.error);
    }
});

function loading(){
    document.querySelector('.info-container').innerHTML = `<i class="fa-3x fa-solid fa-sync fa-spin"></i>`
}