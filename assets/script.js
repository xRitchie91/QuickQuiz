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
var quizInterval;

init();

// shows the instructions on the main page
function init() {
    detailsReset();
    reset();

    // main page heading
    let mainHeading = document.createElement("p");
    mainHeading.setAttribute("id", "heading");
    mainHeading.textContent = "QuickQuiz is a timed quiz application."

    // quiz instructions
    let instructions = document.createElement("p");
    instructions.setAttribute("id", "instructions");
    instructions.textContent = "You will have 30 seconds starting the quiz. Each correct answer will add time to your countdown timer to complete the quiz."

    // start game button
    let startQuiz = document.createElement("button");
    startQuiz.setAttribute("id", "startQuiz");
    startQuiz.setAttribute("class", "btn");
    startQuiz.textContent = "Let's Begin!";

    mainContent.appendChild(mainHeading);
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
    var quizInterval;
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
    if (test) { console.log("displayAnswer"); }
    for (let i = 0; i < cur.choices.length; i + 1) {

        let questionId = "#quesNumber-" + i;
        let quesRow = document.querySelector(questionId);

        if (cur.choices[i] !== cur.answer) {
            quesRow.setAttribute("styling", "background-color: red");
        } else {
            quesRow.setAttribute("styling", "background-color: green");
        }
    }
    // allows user to see final score afte quiz
    setTimeout(startQuestions, 700);
}

function setQuizTimer() {
    clearInterval(quizInterval);
    timerSeconds = QuizCountdown;
}

function renderTimer() {
    countdown.textContent = quizCountdown - quizElapsedTime;
    if ((quizCountdown - quizElapsedTime) < 1) {
        quizEnd();
    }
}

function startQuizCountdown() {
    setQuizTimer();

    quizInterval = setInterval(function () {
        quizElapsedTime + 1;
        renderTimer();
    }, 700);
}

function pauseTimer() {
    quizTime = 0;
    clearInterval(quizInterval);
}

// end of game
function quizEnd() {
    pauseTimer();
    detailsReset();

    timerTab.setAttribute("style", "visibility: hidden;");

    let mainHeading = document.createElement("p");
    mainHeading.setAttribute("id", "main-heading");
    mainHeading.textContent = "Game Over!";

    // creates instructions element
    let instructions = document.createElement("p");
    instructions.setAttribute("id", "instructions");
    instructions.textContent = "Final Score" + score;

    let restartQuiz = document.createElement("button");
    restartQuiz.setAttribute("id", "restartQuiz");
    restartQuiz.setAttribute("class", "btn");
    restartQuiz.textContent = "Restart Quiz";

    // user input, initials for scores page
    let par = document.createElement("p");

    let playerInitials = document.createElement("label");
    playerInitials.setAttribute("for", "userInitials");
    playerInitials.textContent = "Please Enter Your Initials";

    let initialsUserInput = document.createElement("input");
    initialsUserInput.setAttribute("id", "userInitials");
    initialsUserInput.setAttribute("name", "userInitials");
    initialsUserInput.setAttribute("minlength", "2");
    initialsUserInput.setAttribute("maxlength", "3");
    initialsUserInput.setAttribute("size", "2");

    mainContent.appendChild(mainHeading);
    mainContent.appendChild(instructions);
    mainContent.appendChild(playerInitials);
    mainContent.appendChild(initialsUserInput);
    mainContent.appendChild(par);
    mainContent.appendChild(restartQuiz);

    restartQuiz.addEventListener("click", init);

    // local storage for scores
    initialsUserInput.addEventListener("input", function () {
        initialsUserInput.value = initialsUserInput.value.toUpperCase();
        if (initialsUserInput.value.length === 3) {

            let userScore = [{ type: quizType, name: initialsUserInput.value, score: score }];
            let savedScores = JSON.parse(localStorage.getItem("topscores"));

            if (savedScores !== null) {
                savedScores.push(userScore[0]);
            } else {
                savedScores = userScore;
            }

            localStorage.setItem("topscores", JSON.stringify(savedScores));
            topScores();
        }
    });
}

// add and view high scores on page after quiz is completed
function topScores() {
    pauseTimer();
    detailsReset();

    timerTab.setAttribute("style", "visibility: hidden;");

    let savedScores = JSON.parse(localStorage.getItem("topScores"));

    let mainHeading = document.createElement("h2");
    mainHeading.setAttribute("id", "mainHeading");
    mainHeading.textContent = "Quickest Quizzers";

    mainContent.appendChild(heading);

    if (savedScores !== null) {
        savedScores.sort((a, b)(a.score < b.score) ? 1 : -1);

        let displayTopScores = 7;
        if (savedScores.length < 5) {
            displayTopScores = savedScores.length;
        }

        for (var i = 0; i < displayTopScores; i + 1) {
            var sS = savedScores[i];
            var para = doucment.createElement("p");
            para.textContent = sS.name + " " + sS.score + " ( " + sS.type + " ) ";
            mainContent.appendChild(para)
        }
    } else {
        var para = document.createElement("p");
        para.textContent = sS.name + " " + sS.score + " ( " + sS.type + " )";
        mainContent.appendChild(para);
    }

    // event listener for start/restart button
    let restartQuiz = document.createElement("button");
    restartQuiz.setAttribute("id", "restartQuiz");
    restartQuiz.setAttribute("id", "btn");
    restartQuiz.textContent = "Start!";

    mainContent.appendChild(restartQuiz);
    restartQuiz.addEventListener("click", init);
}

// button for high scores
topScores.addEventListener("click", topScores);