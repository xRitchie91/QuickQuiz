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

var quizCountdown = 10;
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
        quizName = "QuickQuiz";
        playQuiz(questions);
    });
}


// Event listeners/Buttons
topScores.addEventListener("click", topScores);