const triviaQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "Blue whale",
    },
];

module.exports = {
    getQuestion: (index) => {
        return triviaQuestions[index] ?? {};
    },
    insertUserAnswer: (index, answer) => {
        if(triviaQuestions[index]){
            triviaQuestions[index].userAnswer = answer.trim();
            return triviaQuestions[index];
        } else {
            return {}
        }
    },
    getAll: () => {
        return triviaQuestions;
    }
};