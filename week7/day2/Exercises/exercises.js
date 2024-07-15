fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
.then( res => res.json())
.then( json => console.log(json))
.catch( error => console.error(error))

fetch("https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
.then( res => res.json())
.then( json => console.log(json))
.catch( error => console.error(error))

async function getResponse(){
    let res = await fetch("https://www.swapi.tech/api/starships/9/")
    let json = await res.json()
    console.log(json.result)
}

getResponse()


function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
// Output
// 1. console.log('calling');
// 2. console.log(result); after 2 seconds with 'resolved' value