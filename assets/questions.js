// Quiz questions will go here
const questions = [
    {
        question: "What does the 'this' keyword in javascript mean?",
        answers: [
            { content: "the current object", correct: true },
            { content: "booleans", correct: false },
            { content: "cursor", correct: false },
            { content: "numbers", correct: false }
        ]
    },
    {
        question: "String values must be enclosed with ___ when being assigned to variables?",
        answers: [
            { content: "curly brackets", correct: true },
            { content: "objects", correct: false },
            { content: "threads", correct: false },
            { content: "parenthesis", correct: false }
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        answers: [
            { content: "react", correct: false },
            { content: "python", correct: false },
            { content: "alerts", correct: false },
            { content: "for loops", correct: true }
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: [
            { content: "quotes", correct: false },
            { content: "curly brackets", correct: false },
            { content: "parentheses", correct: true },
            { content: "square brackets", correct: false }
        ]
    },
    {
        question: "using a/an ___ statement is how you test for a specific condition",
        answers: [
            { content: "switch", correct: false },
            { content: "for", correct: false },
            { content: "if", correct: true },
            { content: "select", correct: false }
        ]
    },
    {
        question: "which is not considered a javascript operator?",
        answers: [
            { content: "delete", correct: false },
            { content: "typeof", correct: false },
            { content: "this", correct: true },
            { content: "new", correct: false }
        ]
    },
    {
        question: "arrays in javascrips can be used to store what?",
        answers: [
            { content: "booleans", correct: false },
            { content: "other arrays", correct: false },
            { content: "numbers and strings", correct: false },
            { content: "all of the above", correct: true }
        ]
    }
];

var timeout = setTimeout(function () { quizTimer() }, 10000);