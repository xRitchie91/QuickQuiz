const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const questionContainerEl = document.getElementById ('question-container')
const questionEl = document.getElementById ('question')
const answerBtnEl = document.getElementById('select-buttons')

//let variables initially set to undefined to be used to jumble the questions
//so that they don't appear in the same order every time.
let randomQuestion, currentIndex 

// event listener that calls the startGame function when clicked.
startBtn.addEventListener('click', startGame)

//event listener that calls the nextQuestion function to allow nex 
//button to function and go to the the currentIndex of the array of questions
nextBtn.addEventListener('click', () => {
    currentIndex++
    nextQuestion()
})

// function that reveals a question and options after start has been pressed.
function startGame() {
    startBtn.classList.add('hide')

    randomQuestion = questions.sort(() => Math.random() - .5)
    currentIndex = 0

    questionContainerEl.classList.remove('hide')
    // function allocates info for the next question
    nextQuestion()
}

function nextQuestion() {
    //function call to set everything back to default state
    refreshQuestion()
    revealQuestion(randomQuestion[currentIndex])
}

function revealQuestion(question) {
    //populates question
    questionEl.innerText = question.question
    //populates coresponding possible answers through a loop.
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.content
        button.classList.add('btn')
        //operation to verify if the answer is right or wrong
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        //calls makeSelection to append new answers when clicked.
        button.addEventListener('click', makeSelection)
        answerBtnEl.appendChild(button)
    })
}

function refreshQuestion(){
    statusWipe(document.body)
    //hide next button again
    nextBtn.classList.add('hide')
    //while loop to replace child elements
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild)
    }
}

function makeSelection(e) {
    const btnSelection = e.target
    const correct = btnSelection.dataset.correct

    //???
    setStatus(document.body, correct)
    Array.from(answerBtnEl.children).forEach (button => {
        setStatus(button, button.dataset.correct)
    })

    //make sure the program stops when we run out of questions
    if (randomQuestion.length > currentIndex + 1) {
        nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = 'Resart'
        startBtn.classList.remove('hide')
    }
    //reveal next button as soon as question is answered
    nextBtn.classList.remove('hide')
}

function setStatus(element, correct) {

    statusWipe(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    }
}

function statusWipe(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}

//array of actual questions
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
        question: "arrays in javascript can be used to store what?",
        answers: [
            { content: "booleans", correct: false },
            { content: "other arrays", correct: false},
            { content: "numbers and strings", correct: false },
            { content: "all of the above", correct: true }
        ]
    }
]