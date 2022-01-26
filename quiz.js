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

let questions = [
    {
        question: "'OS' computer abbreviation usually means?",
        choice1: "Order of Significance",
        choice2: "Open Software",
        choice3: "Operating System",
        choice4: "Optical Sensor",
        answer: 3
    },
    
    {
        question: "'.MOV' extension refers usually to what kind of file?",
        choice1: "Image file",
        choice2: "Animation/movie file",
        choice3: "Audio file",
        choice4: "MS Office document",
        answer: 2
    },
    { 
        question: "'.MPG' extension refers usually to what kind of file?",
        choice1: "Word Perfect Document file",
        choice2: "MS Office document",
        choice3: "Animation/movie file",
        choice4: "Image file",
        answer: 3
    },
    {
        question: "What is part of a database that holds only one type of information?",
        choice1: "Report",
        choice1: "Field",
        choice1: "Record",
        choice1: "File",
        answer: 2
    },
    {    
        question: "Who developed Yahoo?",
        choice1: "Dennis Ritchie & Ken Thompson",
        choice2: "David Filo & Jerry Yang",
        choice3: "Vint Cerf & Robert Kahn",
        choice4: "Steve Case & Jeff Bezos",
        answer: 2
    },
    {

        question: "'DB' computer abbreviation usually means?",
        choice1: "Database",
        choice2: "Double Byte",
        choice3: "Data Block",
        choice4: "Driver Boot",
        answer: 1
    },
    {

        question: "'.INI' extension refers usually to what kind of file?",
        choice1: "Image file",
        choice2: "System file",
        choice3: "Hypertext related file",
        choice4: "Image Color Matching Profile file",
        answer: 2
    },
    {

        question: "The sampling rate, (how many samples per second are stored) for a CD is?",
        choice1: "48.4 kHz",
        choice2: "22,050 Hz",
        choice3: "44.1 kHz",
        choice4: "48 kHz",
        answer: 3
    },
    {

        question: "What do we call a network whose elements may be separated by some distance? It usually involves two or more small networks and dedicated high-speed telephone lines.",
        choice1: "URL (Universal Resource Locator)",
        choice2: "LAN (Local Area Network)",
        choice3: "WAN (Wide Area Network)",
        choice4: "World Wide Web",
        answer: 3
    },
    {

        question: "Sometimes computers and cache registers in a foodmart are connected to a UPS system. What does UPS mean?",
        choice1: "United Parcel Service",
        choice2: "Uniform Product Support",
        choice3: "Under Paneling Storage",
        choice4: "Uninterruptable Power Supply",
        answer: 4
     }
    //,
    // {
    //     question: "What is FMD?",
    //     choice1: "Fast-Ethernet Measuring Device",
    //     choice2: "Flashing Media Diode",
    //     choice3: "Fluorescent Multi-Layer Disc",
    //     choice4: "Flash Media Driver",
    //     answer: 3
    // }
    //,
    // {
    //     question: "Which of these is a documented hoax virus?",
    //     choice1: "McDonalds screensaver",
    //     choice2: "Alien.worm",
    //     choice3: "Merry Xmas",
    //     choice4: "Adolph",
    //     answer: 1
    // },
    // {
    //     question: "What does SSL stand for?",
    //     choice1: "Secure Socket Layer",
    //     choice2: "System Socket Layer",
    //     choice3: "Superuser System Login",
    //     choice4: "Secure System Login",
    //     answer: 3
    // },
    // {
    //     question: "What is a URL?",
    //     choice1: "A computer software program",
    //     choice2: "A type of UFO",
    //     choice3: "The address of a document or 'page' on the World Wide Web",
    //     choice4: "An acronym for Uniform Resources Learning",
    //     answer: 3
    // },
    // {
    //     question: "The Central Processing Unit is an embedded chip that acts as the 'brains' of a computer. What Intel chip was used in the Altair (the first real personal computer)?",
    //     choice1: "6502",
    //     choice2: "8080",
    //     choice3: "6400",
    //     choice4: "8286",
    //     answer: 2
    // },
    // {
    //     question: "'.TMP' extension refers usually to what kind of file?",
    //     choice1: "Compressed Archive file",
    //     choice2: "Image file",
    //     choice3: "Temporary file",
    //     choice4: "Audio file",
    //     answer: 3
    // }
];

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
        // Go to end page
        return window.location.assign('/end.html');
    }
    questionCounter++;

    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

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

