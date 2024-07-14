const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

function toJs(morse){
    return new Promise(
        (resolve,reject) => {
            let json = JSON.parse(morse)
            if(Object.keys(json).length === 0){
                reject("empty object")
            } else {
                resolve(json)
            }
        }
    )
}

function toMorse(morseJS){
    let word = prompt("Type a word or a sentence").trim()
    return new Promise(
        (resolve, reject) => {
            let charactres = word.split('')
            let keys = Object.keys(morseJS)
            let morseArray = []
            for(let c of charactres){
                if(c === ' ') continue;
                let low = c.toLowerCase()
                if(!keys.includes(low)){
                    reject(`There is wrong character ${c}`)
                    return;
                } else {
                    morseArray.push(morseJS[low] + "\n")
                }
            }
            document.body.style.fontSize = '2rem'
            let p = document.createElement('p')
            p.innerText = word
            document.body.appendChild(p)
            resolve(morseArray)
        }
    )
}

function joinWords(morseTranslation){
    let pre = document.createElement('pre')
    let code = document.createElement('code')
    for(let mor of morseTranslation){
        code.innerHTML += mor
        pre.appendChild(code)
    }
    document.body.appendChild(pre)
}

toJs(morse)
.then(
    (res) => toMorse(res)
)
.then(
    (res) => joinWords(res)
)
.catch( err => {
    console.error(err)
    alert(err)
})