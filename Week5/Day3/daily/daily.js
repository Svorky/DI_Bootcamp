let storyTemplate = `
One day, my friend {person} and I decided to visit {place}. We were excited to see all the {adjective} sights. Our first stop was the {adjective} {noun} exhibit. The {noun} was {verb} around and looked very {adjective}.
`;

function onSubmit(event){
    event.preventDefault()
    // let noun = event.target.noun.value
    // let adjective = event.target.adjective.value
    // let person = event.target.person.value
    // let verb = event.target.verb.value
    // let place = event.target.place.value

    var formData = new FormData(event.target);
    data = Object.fromEntries(formData);
    
    for(let [key,value] of Object.entries(data)){
        if(value.trim() === ''){
            alert(`${key} is empty`)
            return
        }
    }
    let story = document.querySelector('#story')
    story.innerHTML = storyTemplate.replace(/{(\w+)}/g, (_, key) => data[key]);
}