import express, { json, urlencoded } from 'express';
import { Player, Players } from './players.js';
const app = express();
const port = 5000;

//middleware
app.use(json())
app.use(express.static('public'));
//middleware - parses urlencoded bodies 
app.use(urlencoded({ extended: true }));

import fetchEmoji from './emoji.js';

app.listen(port, () => {
    console.log(`Emoji app listening on port ${port}`);
});

const data = await fetchEmoji()

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

const player = new Player("Alex")

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

let emojiToGuess;

app.get('/api/emoji', (req,res) => {
    const emojies = [];

    for (let i = 0; i < 3; i++) {
        emojies.push(choose(data));
    }

    emojiToGuess = choose(emojies);

    const game = {
        emoji: emojiToGuess.character,
        names: emojies.map( e => e.unicodeName.split(" ").slice(1).join(" "))
    }

    res.status(200).json(game)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.post('/api/guess', (req,res) => {

    let response;
    if(emojiToGuess.unicodeName.includes(req.body.choise)){
        player.addCorrect()
        response = {
            success: true,
            score: player.score
        }
    } else {
        player.addWrong()
        response = {
            success: false,
            correct_answer: emojiToGuess.unicodeName.split(" ").slice(1).join(" "),
            score: player.score
        }
    }
    res.status(200).json(response)
})
