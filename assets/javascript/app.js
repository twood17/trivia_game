// timer for time to answer questions
// multiple choice questions [array?]
// questions chosen from a for(?) loop
// answers assigned to questions
// question answered in time
// number right/wrong
// display correct answer
window.onload = function () {
    $("#stop").on("click", stop);
    $("#reset").on("click", reset);
    $("#start").on("click", start);
};


//Variable for question, and to set indexes
var questionCount = 0;
var questionObj = [{
    question: "Who is Luke Skywalker's father?",
    answers: ["Shyv Palpatine", "Boba Fett", "Darth Vader", "Exar Kun"],
    correctAnswer: 2,
}];

//Variable to check selected answer
var selectedAnswer;

//function to check selected answer
// function answerCheck(event) {
$(".answerButton").on("click", function (event) {
    if (event.target.id === "firstAnswer") {
        selectedAnswer = 0;
    } else if (event.target.id === "secondAnswer") {
        selectedAnswer = 1;
    } else if (event.target.id === "thirdAnswer") {
        selectedAnswer = 2;
    } else if (event.target.id === "fourthAnswer") {
        selectedAnswer = 3;
    }

    if (selectedAnswer === questionObj[questionCount].correctAnswer) {
        console.log("correct");
    } else {
        console.log("wrong");
    }
});


//Function to start the game and pull questions and answers.
function startGame() {
    $("#question").text(questionObj[questionCount].question)
    $("#firstAnswer").text(questionObj[questionCount].answers[0])
    $("#secondAnswer").text(questionObj[questionCount].answers[1])
    $("#thirdAnswer").text(questionObj[questionCount].answers[2])
    $("#fourthAnswer").text(questionObj[questionCount].answers[3])

}


//variable to hold timer
var intervalID;
var timerRunning = false;
var time = 15;


function start() {
    if (!timerRunning) {
        intervalID = setInterval(count, 1000)
        timerRunning = true;
    }
    if (time < 0) {
        clearInterval(intervalID);
        $("#timerDisplay").text("Times Up!");
    }
    startGame();
}

//stops the timer
function stop() {
    clearInterval(intervalID);
    timerRunning = false;
}

//resets the timer back to 15
function reset() {
    time = 15;
    $("#timerDisplay").text("00:15");
    $("#question").text("");
    $("#firstAnswer").text("");
    $("#secondAnswer").text("");
    $("#thirdAnswer").text("");
    $("#fourthAnswer").text("");
    stop()
}

//counter to start the timer
function count() {
    time--;
    var converted = timeConverter(time);
    console.log(converted);
    $("#timerDisplay").text(converted);
}

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}