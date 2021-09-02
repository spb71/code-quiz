var rootEl = document.getElementById("root");
var firstDiv = document.getElementById("section-1");
var questionContEl = document.getElementById("section-2");
var questionEl = document.getElementById("question");
var answersEl = document.querySelectorAll(".answer");
var goBackEl = document.getElementById("go-back");
var clearEl = document.getElementById("clear");
var timerEl = document.querySelector(".countdown");

var questions = [
    {
        question:"Commonly used data types DO NOT include:",
        answers:["a. strings","b. booleans","c. alerts","d. numbers"],
        correctAnswer:"c. alerts"        
    },
    {
        question:"The condition in an if/else statement is enclosed within:",
        answers:["a. quotes","b. curly braces","c. parentheses","d. square brackets"],
        correctAnswer:"c. parentheses"
    },
    {
        question:"Arrays in Javascript can be used to store ______.",
        answers:["a. numbers and strings","b. other arrays","c. booleans","d. all of the above"],
        correctAnswer:"d. all of the above"
    },
    {
        question:"String values must be enclosed within ______ when being assigned to variables.",
        answers:["a. commas","b. curly braces","c. quotes","d. parentheses"],
        correctAnswer:"c. quotes"
    },
    {
        question:"A very useful tool during development and debugging for printing content to the debugger is:",
        answers:["a. Javascript","b. terminal/bash","c. for loops","d. console.log"],
        correctAnswer:"d. console.log"
    }

];

document.getElementById("start-btn").addEventListener("click", startGame);

var index = 0;

function startGame() {
    firstDiv.remove();
    timeInterval();
    questionEl.textContent = questions[index].question;
    questionContEl.style.display = "block";
    console.log(answersEl);
    for (var i = 0; i < questions[index].answers.length; i++) {
        answersEl[i].textContent = questions[index].answers[i]
        answersEl[i].addEventListener("click", setNextQuestion);
    }
}

function timeInterval() {
    var timeLeft = 75;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 0) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = timeLeft;
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
      }
    }, 1000);
}

function setNextQuestion() {
    index++;
    questionEl.textContent = questions[index].question;
    for (var i = 0; i < questions[index].answers.length; i++) {
        answersEl[i].textContent = questions[index].answers[i]
        answersEl[i].addEventListener("click", setNextQuestion);
    }
}

function selectAnswer() {

}

// function showQuestion(question) {
//     questionContEl.innerText = question.question;
// }