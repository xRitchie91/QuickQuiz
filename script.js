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
function clearDetails() {
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
if (test) {console.log("duration:",quizCountdown);}

startQuizCountdown();
renderTimer();

// start questions
function startQuiz(questions) {
    if (test) {console.log("startQuiz");}

    quiz = questionOrder(questions);

    // displays the quiz timer
    countdown.setAttribute("style", "visibility: visible;");

    // takes user to first question
    startQuestions();
}


// Event listeners/Buttons
topScores.addEventListener("click", topScores);