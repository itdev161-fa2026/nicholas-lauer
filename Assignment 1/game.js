const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName(".choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        questions: "Whatup??",
        choice1: "nothing",
        choice2: "not much",
        choice3: "the sky",
        choice4: "yo mama",
        answer: 3
    },
       {
        questions: "Whats your favorite color??",
        choice1: "Red",
        choice2: "Blue",
        choice3: "Greem",
        choice4: "Purple",
        answer: 4
    }
];

//Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 2;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length == 0 || questionCounter > MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign("end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions(questionIndex);
        question.innerText = currentQuestion.question;

        choices.forEach( choice => {
            const number = choice.dataset['number'];
            choice.innerText = currentQuestion['choice' + number];
        });

        availableQuestions.splice(questionIndex, 1);

        acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        getNewQuestion();
    })
})

startGame();