var startScreen = document.getElementById("startScreen")
var startButton = document.getElementById("start")
var questionScreen = document.getElementById("gameField")
var questionEl = document.getElementById("question")
var answersEl = document.getElementById("answers")
var timerEl = document.getElementById("timer")
var linkHighscores = document.getElementById("linkHighscores")
var submitInitialsForm = document.getElementById("submitInitialsForm")
var initialsInp = document.getElementById("initials")
var addScoreEl = document.getElementById("addScore")
var secondsLeft = 75
var timer
var currentQuestion = 0

var questions = [
    {
        question: "What is NOT a JavaScript data type?",
        answers: ["Harry Potter", "Number", "Boolean", "Object"],
        correct: 0
    },
    {
        question: "Inside which HTML element do we put the JavaScript ?",
        answers: ["<js>", "<scripting>", "<script>", "<javascript"],
        correct: 2
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: ["<body>", "<head>", "<nav>", "<footer>"],
        correct: 0
    },
    {
        question: "What does Jeff like to call functions he makes up?",
        answers: ["Cinderalla", "Harry Potter", "Mary Poppins", "Star Wars"],
        correct: 2
    },
    {
        question: "What does JS stand for?",
        answers: ["JavaScript", "Joe Schmoe", "Just Syntax", "Jolly Spider"],
        correct: 0
    }

];

startButton.addEventListener("click", init)
submitInitialsForm.addEventListener("submit", updateScores)


function init() {
    //start timer
    time()
    //make welcom screen invisible
    startScreen.setAttribute("class", "d-none")
    //display first question
    questionScreen.classList.remove("d-none")
    showQuestion()
}

function time() {
    timer = setInterval(function () {
        secondsLeft--
        timerEl.textContent = "Time: " + secondsLeft + " sec"
        if (secondsLeft <= 0) {
            endGame()
        }
    }, 1000)
}

function showQuestion() {
    answersEl.innerHTML = ""
    questionEl.textContent = questions[currentQuestion].question
    for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
        var button = document.createElement("button")
        button.textContent = questions[currentQuestion].answers[i]
        button.setAttribute('value', i)
        button.classList.add("answer", "btn", "btn-primary")
        button.addEventListener("click", checkAnswer)

        answersEl.appendChild(button)
    }
}

function checkAnswer() {
    var userGuess = parseInt(this.value)
    if (userGuess !== questions[currentQuestion].correct) {
        secondsLeft -= 15
        console.log('you are wrong')
    }

    currentQuestion++

    if (currentQuestion < questions.length) {
        showQuestion()
    } else {
        endGame()
    }
}

function endGame() {
    clearInterval(timer)
    console.log('end game')

    questionScreen.classList.add("d-none")
    addScore.classList.remove("d-none")
}

function updateScores(event){
    event.preventDefault();

    var initials = initialsInp.value
    console.log(initials, secondsLeft)
}