// This console is for testing purpose:
console.log("Hello from Quiz App!!!");

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
console.log(choices);

const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');

let currentQuestion = {}
let acceptingAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];
fetch("questions.json").then ( response => {
    console.log(response);
});

// Constants

const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 10;

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    
    console.log(availableQuestions);

    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS) {
        
        // Local Storage:
        localStorage.setItem("mostRecentScore", score);
        
        // Go to end page
        return window.location.assign('/end.html');
    }
    questionCounter++;

    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

    // Update the progress bar:
    console.log((questionCounter / MAX_QUESTIONS) * 100);

    progressBarFull.style.width = `${((questionCounter / MAX_QUESTIONS) * 100)}%`;
    
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswer = true;
};

choices.forEach( choice => {
    choice.addEventListener("click", (e) => {
      //  console.log(e.target);

        if(!availableQuestions) return;
        acceptingAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

      //  console.log(selectedAnswer);

        // const classToApply = 'incorrect';
        // if( selectedAnswer == currentQuestion.answer){
        //     classToApply = 'correct';
        // };
    
    // console.log(selectedAnswer == currentQuestion.answer);
    
    // Conditional (ternary) operator: 

    const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
    
    console.log(classToApply);

    if (classToApply === "correct") {
        incrementScore(CORRECT_BONUS)
    }

    selectedChoice.parentElement.classList.add(classToApply);
    
    setTimeout( () => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
    }, 1000);


    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

startQuiz();

