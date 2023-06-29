

//Variables List
var startButton = document.getElementById('startButton');
var quizContainer = document.getElementById('quizContainer');
var question = document.getElementById('question');
var secondQ = document.getElementById('secondQ');
var score = 0;

//Button Variables
var buttonA = document.getElementById('buttonA');
var buttonB = document.getElementById('buttonB');
var buttonC = document.getElementById('buttonC');
var buttonD = document.getElementById('buttonD');
var nextButton = document.getElementById('nextButton')


//Questions & Answers
const quizArray = [
    {
        id: "0",
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Historic Task Meneuvering Lexicon",
            "Hard Terminal Management Layer",
            "It doesn't stand for anything...like KFC."
        ],
        correct: "Hyper Text Markup Language",
    },
    {
        id: "1",
        question: "What does CSS stand for?",
        options: [
            "Cat Supervision Strategies",
            "Cascading Style Sheets",
            "Crystal Solvent Solution",
            "Clairvoyant Search Selectors",
        ],
        correct: "Cascading Style Sheets",
    },
    {
        id: "2",
        question: "Which language adds interactivity to a website?",
        options: [
            "HTML",
            "CSS",
            "French",
            "JavaScript",
        ],
        correct: "JavaScript",
    },
    {
        id: "3",
        question: "Which of the following is truthy",
        options: [
            "If X than Y",
            "0",
            "False",
            "Mac is better than PC",
        ],
        correct: '0',
    },
    {
        id: "4",
        question: "A JavaScript variable is _____",
        options: [
            "The mysterious force that animates gif files",
            "JavaScript doesn't use variables",
            "A container that holds a value",
            "The part of the code that does the thing",
        ],
        correct: 'A container that holds a value',
    },
];

//Click to Start the Quiz
document.getElementById("startButton").addEventListener("click", function() {
    this.hidden = true;
    question.innerHTML = "What does HTML stand for?";

    buttonA.style.display = 'block';
    buttonA.innerHTML = 'Hyper Text Mark-Up Language.';
    buttonB.style.display = 'block';
    buttonB.innerHTML = 'Historic Text Meneuvering Lexicon';
    buttonC.style.display = 'block';
    buttonC.innerHTML = 'Hard Terminal Management Layer';
    buttonD.style.display = 'block';
    buttonD.innerHTML = 'It does not stand for anything';
});

// Quiz Questions
const quizArray = [
    {
        id: "0",
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Historic Task Meneuvering Lexicon",
            "Hard Terminal Management Layer",
            "It doesn't stand for anything...like KFC."
        ],
        correct: "Hyper Text Markup Language",
    },
    {
        id: "1",
        question: "What does CSS stand for?",
        options: [
            "Cat Supervision Strategies",
            "Cascading Style Sheets",
            "Crystal Solvent Solution",
            "Clairvoyant Search Selectors",
        ],
        correct: "Cascading Style Sheets",
    },
    {
        id: "2",
        question: "Which language adds interactivity to a website?",
        options: [
            "HTML",
            "CSS",
            "French",
            "JavaScript",
        ],
        correct: "JavaScript",
    },
    {
        id: "3",
        question: "Which of the following is truthy",
        options: [
            "If X than Y",
            "0",
            "False",
            "Mac is better than PC",
        ],
        correct: '0',
    },
    {
        id: "4",
        question: "A JavaScript variable is _____",
        options: [
            "The mysterious force that animates gif files",
            "JavaScript doesn't use variables",
            "A container that holds a value",
            "The part of the code that does the thing",
        ],
        correct: 'A container that holds a value',
    },
];

// Answer Button Actions
// Correct Answer
buttonA.addEventListener('click', function(){
    buttonA.style.backgroundColor = "green";
    nextButton.style.display = 'block';
});

// Incorrect Answers
buttonB.addEventListener('click', function(){
    buttonB.style.backgroundColor = "red";
    nextButton.style.display = 'block';
});
buttonC.addEventListener('click', function(){
    buttonC.style.backgroundColor = "red";
    nextButton.style.display = 'block';
});
buttonD.addEventListener('click', function(){
    buttonD.style.backgroundColor = "red";
    nextButton.style.display = 'block';
});

// Next Button Action
nextButton.addEventListener('click',function () {
    nextButton.style.display = "none";
    question.innerHTML = "What does CSS stand for?";

    buttonA.style.display = 'block';
    buttonA.innerHTML = 'Cat Supervision Strategies';
    buttonB.style.display = 'block';
    buttonB.innerHTML = 'Cascading Style Sheets';
    buttonC.style.display = 'block';
    buttonC.innerHTML = 'Crystal Solvent Solution';
    buttonD.style.display = 'block';
    buttonD.innerHTML = 'Clairvoyan Search Selectors';
});

buttonA.addEventListener('click', function(){
    buttonA.style.backgroundColor = "red";
    nextButton.style.display = 'block';

});




//Quiz Loop
for (var i = 0; i < quizArray.length; i++) {
// Retrieve current question object from the array
    var currentQuestion = quizArray [i];

//Display the question and choice to user
}




