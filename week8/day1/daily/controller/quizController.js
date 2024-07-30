const model = require('../model/quizModel.js');

let index = 0;

module.exports = {
    getQuestion: (req, res) => {
        const { question, answer} = model.getQuestion(index);
        if(question){
            res.status(200).json(question)
        } else {
            res.status(200).json('No more questions')
        }
    },
    insertAnswer: (req, res) => {
        const answer = req.body;
        const result = model.insertUserAnswer(index, answer)
        let check = result?.answer ? result.answer.toLowerCase() === result.userAnswer.toLowerCase() ? 'Correct!' : 'Wrong!' : ''
        index++;
        const next = model.getQuestion(index)
        const { question } = next
        if(question){
            res.send(`${check}
                Next question:
                ${question}`);
        } else {
            res.send(`${check}
                No more questions`);
        }
       
    },
    getScore: (req,res) => {
        let obj = model.getAll()
        let score = obj.map( q => {
            if(q.userAnswer){
                return q.answer.toLowerCase() === q.userAnswer.toLowerCase() ? 1 : 0    
            } else {
                return 0
            }
        })
        let result = score.reduce((acc,curr) => acc + curr, 0)
        res.json(`Your score is ${result}`)
    }
};