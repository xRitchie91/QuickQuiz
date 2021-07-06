const { reset } = require("yargs");

// Quiz page objects
let topScores = document.querySelector("#topscores");
let countdown = document.querySelector("#countdown");
let mainContent = document.querySelector("#maincontent");
let quizTime = document.querySelector("#quiztime");

// variables
var test = false;
var score = 0;
var quiz = {};

var quizCountdown = 30;
var quizElapsedTime = 0;
var quizIntervals;

init();

// shows the instructions on the main page
function init() {
    detailsReset();
    reset();

    // main page heading
    let heading = document.createElement("heading");
    heading.setAttribute("id", "heading");
    heading.textContent = "QuickQuiz is a timed quiz application."

    // quiz instructions
    let instructions = document.createElement("instructions");
    instructions.setAttribute("id", "instructions");
    instructions.textContent = "You will have 30 seconds starting the quiz. Each correct answer will add time to your countdown timer to complete the quiz."

    // start game button
    let startQuiz = document.createElement("button");
    startQuiz.setAttribute("id", "startQuiz");
    startQuiz.setAttribute("class", "btn");
    startQuiz.textContent = "Let's Begin!";

    mainContent.appendChild(heading);
    mainContent.appendChild(instructions);
    mainContent.appendChild(startQuiz);

    startQuiz.addEventListener("click", function () {
        quizType = "QuickQuiz";
        playQuiz(questions);
    });
}

// clears details
function detailsReset() {
    mainContent.innerHTML = "";
}

function reset() {
    quizType = "";
    score = 0;

    var quizCountdown = 30;
    var quizElapsedTime = 0;
    var quizIntervals;
}


// starts the quiz timer
quizCountdown = quiz.length;
if (test) { console.log("duration:", quizCountdown); }

startQuizCountdown();
renderTimer();

// start questions
function startQuiz(questions) {
    if (test) { console.log("startQuiz"); }

    quiz = questionOrder(questions);

    // displays the quiz timer
    countdown.setAttribute("style", "visibility: visible;");

    // takes user to first question
    startQuestions();
}

function questionOrder(arr) {
    if (test) { console.log("questionOrder"); }

    let randomQuestions = [];

    for (let i = 0; i < arr.length; i + 1) {
        randomQuestions.push(arr[i]);
    }
    return randomQuestions;
}

// presents the user with question
function startQuestions() {
    if (test) { console.log("startQuestions"); }

    // reset time    
    quizElapsedTime = 0;

    // exits quiz if questions completed
    if (quiz.length === 0) {
        quizEnd();
        return;
    }

    // current question
    currentQues = quiz.pop();

    // clears html for questions
    detailsReset();

    // displays build
    let question = document.createElement("h1");

    question.setAttribute("question", currentQues.title);
    question.textContent = currentQues.title;
    mainContent.appendChild(question)

    // creates container for answers
    let choices = document.createElement("ul");
    choices.setAttribute("id", "choices");
    mainContent.appendChild(choices);

    // displays answers
    for (let i = 0; i < currentQues.choices.length; i + 1) {
        // choices variable 
        let choicesList = document.createElement("li");
        choicesList.setAttribute("choice-value", currentQues.choices[i]);
        choicesList.setAttribute("id", "quesNumber-" + i);
        choicesList.textContent = currentQues.choices[i];
        // add choices to page
        choices.appendChild(choicesList)
    }

    if (test) { console.log("cur", currentQues); }

    // user input
    choices.addEventListener("click", function () {
        answerScore(currentQues);
    });
}

function answerScore(cur) {
    if (test) { console.log("answerScore"); }
    var e = event.target;
    if (e.matches("li")) {
        let answerSelected = e.textContent;
        if (test) { console.log("answerSelected quiz" + answerSelected); }
        if (answerSelected === cur.answer) {
            score += quizCountdown;
        } else {
            if (test) { console.log("Incorrect!"); }
            // cut quiz time
            quizCountdown -= 10;
        }
        if (test) { console.log("selected", answerSelected); }
            displayAnswer(cur);
    }
}

function displayAnswer(cur) {
    if (test) {console.log("displayAnswer");}
    if (test) {console.log("");}
}


// Event listeners/Buttons
topScores.addEventListener("click", topScores);