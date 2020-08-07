var startButton = document.getElementById("start")
var questionScreen = document.getElementById("gameField")
var secondsLeft =75
var answersEl = document.getElementById("answers")
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

function time(){
    timer = setInterval(function(){
        secondsLeft--
        document.getElementById("timer").textContent = "Time: " + secondsLeft + " sec" 
        if(secondsLeft === 0){
            clearInterval(timer)
            console.log('end game')
        }

    },1000)
}

function showQuestion (){
    var questionEl = document.getElementById("question")
    answersEl.innerHTML =""
    questionEl.textContent = questions[currentQuestion].question
    for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
        var button = document.createElement("button")
        button.textContent = questions[currentQuestion].answers[i]
        button.setAttribute('value', i )
        button.classList.add("answer","btn", "btn-primary")
        answersEl.appendChild(button)
    }

}

function init(){
    //start timer
    time()
    //make welcom screen invisible
    var startScreen = document.getElementById("startScreen")
    startScreen.setAttribute("class", "d-none")
    //display first question
    questionScreen.classList.remove("d-none")
    showQuestion()
}

function checkAnswer(){
    if (!event.target.classList.contains('answer')) return;
    var userGuess = parseInt(event.target.value)
if(userGuess !== questions[currentQuestion].correct){
        secondsLeft = secondsLeft - 15
        console.log('you are wrong')
    }
    currentQuestion++
    showQuestion()

}

answersEl.addEventListener("click", checkAnswer)
startButton.addEventListener("click", init)