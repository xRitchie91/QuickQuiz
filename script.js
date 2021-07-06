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

    // heading
    let heading = document.createElement("instructions");
    heading.setAttribute("id", "heading");
    heading.textContent = "QuickQuiz is a timed quiz game."
}


// Event listeners/Buttons
topScores.addEventListener("click", topScores);