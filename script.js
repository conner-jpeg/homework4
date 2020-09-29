//For the homework we must facilitate a scenario where:
//App prompts the user. The user interacts with the game by clicking. App recieves the user interaction and processes it.
// MORE SPECIFICALLY: 1) The user loads the page. 2) User selects "start quiz". 3) Quiz/timer starts 4) App tracks correct/incorrect answers. If the user selects the right answer the game loads new questions and continues on. If the wrong answer is selected new questions load and the timer decreases. 5) the game ends due to either the timer running out naturally (i.e the player got no wrong answers or B the timer runs out sooner due to wrong answers.) 6) App records the high score/Initial of the player, stores it and presents it to the user.

// On the first page I need a button that will listen to the button click and start the game/timer

var startButton = document.getElementById("startButton");
var countDown = 60 //PARAMETERS
var currentQuestion = 0
var timer = document.getElementById("timer")
var startPage = document.getElementById("startPage")
var gamePage = document.getElementById("gamePage")
var questions = document.getElementById('question')
var option1 = document.getElementById('option1')
var option2 = document.getElementById('option2')
var option3 = document.getElementById('option3')
var option4 = document.getElementById('option4')
var endPage = document.getElementById('endPage')
var lastAnswer = ""
var highScore1 = ["100%"]
var highScore2 = ["75%"]
var highScore3 = ["50%"]
var highScore4 = ["25%"] 
var highScore5 =["0%"]
var correctLogic = ["Good", "Huh", "blue", "4"];

var quizLogic = [{
    questionLogic: "How are you?",
    optionLogic: ["Good", "Bad", "What?", "Alright, I guess"],
    correctLogic: "Good"

}, {
    questionLogic: "How hungry are you?",
    optionLogic: ["Very", "Not At All", "I could eat a horse", "Huh"],
    correctLogic: "Huh"
}, {
    questionLogic: "Is the sky...?",
    optionLogic: ["Blue", "Green", "Crimson", "Grey"],
    correctLogic: "Blue"
}, {
    questionLogic: "What is two + two?",
    optionLogic: ["5", "Fire turck", "Undefined", "4"],
    correctLogic: "4"
}, {
    questionLogic: "loading",
    optionLogic: ["loading", "loading", "loading", "loading"],
    correctLogic: "4"
    
}
]

function timerStart() {
    var timerInterval = setInterval(function () {
        countDown--;
        timer.textContent = countDown
        if (countDown <= 0 || currentQuestion === 5) {
            clearInterval(timerInterval)
            gamePage.setAttribute("class", "hide") 
            endPage.setAttribute("class", "show")
            //if (correctLogic = 100%){}
        }
    }, 1000)
}

function begin() {
    startPage.setAttribute("class", "hide")
    gamePage.setAttribute("class", "show")
    timerStart()
    iterate()
}

function iterate() {
    lastAnswer = this.textContent 
    
    if(currentQuestion !== 0) {
    if(lastAnswer === quizLogic[currentQuestion-1].correctLogic)
        { 
            //trying shit 
            
        highScore++;
        //if(highScore ===
        //console.log("correct") //in here I can add to my score variable a set amout of points for people answering correctly
        
    } else if(lastAnswer !== quizLogic[currentQuestion-1].correctLogic){
        countDown -= 7 //In here I can deduct points and from the countdown time for incorrect answers
    }
    }
    
    questions.textContent = quizLogic[currentQuestion].questionLogic 
    option1.textContent = quizLogic[currentQuestion].optionLogic[0]
    option2.textContent = quizLogic[currentQuestion].optionLogic[1]
    option3.textContent = quizLogic[currentQuestion].optionLogic[2]
    option4.textContent = quizLogic[currentQuestion].optionLogic[3]
    
}


startButton.addEventListener("click", begin);
option1.addEventListener("click", iterate)
option2.addEventListener("click", iterate)
option3.addEventListener("click", iterate)
option4.addEventListener("click", iterate)

endPage.setAttribute("countDown", "correctLogic", "highScore")
endPage.textContent = "Your Score:" + highScore1;

//if (correctLogic = 100% 





