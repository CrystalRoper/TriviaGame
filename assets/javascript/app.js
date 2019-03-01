var numberCorrect = 0;
var numberIncorrect = 0;
var numberUnanswered = 0;
var currentQuestionIndex = 0;


var q1 = {
    question: "In what year did The Simpsons premier on Fox?",
    a1: "1980",
    a2: "1986",
    a3: "1989",
    a4: "1991",
}
var q2 = {
    question: "What is the name of the Simpson family dog?",
    a1: "Santa's Little Helper",
    a2: "Dog",
    a3: "Spike",
    a4: "Why You Little",
}
var q3 = {
    question: "Which profession has Homer not held during the course of the show?",
    a1: "Astronaut",
    a2: "Grave Digger",
    a3: "President of the United States",
    a4: "Snow Plow Driver",
}
var q4 = {
    question: "What is Mr. Burns' full name?",
    a1: "Richie Rich Burns",
    a2: "Charles Montgomery Burns",
    a3: "Rockefeller J. Burns",
    a4: "Charles Moneybags Burns",
}
var q5 = {
    question: "Which celebrity did not have a guest appearance?",
    a1: "Michael Jackson",
    a2: "Paul McCartney",
    a3: "Stan Lee",
    a4: "Kathy Bates",
}
var q6 = {
    question: "According to S11E19 (Kill the Alligator and Run), which states are the Simpsons not yet banned from?",
    a1: "Arizona, North Dakota, & South Dakota",
    a2: "Florida, Maine, & Ohio",
    a3: "California, Virginia, & West Virginia",
    a4: "Nevada, North Carolina, & South Carolina",
}
var q7 = {
    question: "What does Homer dream about during his night terrors?",
    a1: "The world running out of donuts",
    a2: "Falling",
    a3: "Cobras",
    a4: "Duff beer going out of business",
}
var q8 = {
    question: "What form does Homer's spirit animal take on his vision quest?",
    a1: "Pig",
    a2: "Dog",
    a3: "Monkey",
    a4: "Fox",
}
var q9 = {
    question: "What sector does Homer work in at the Springfield Nuclear Power Plant?",
    a1: "H23",
    a2: "Network Services",
    a3: "7G",
    a4: "Human Resources",
}
var q10 = {
    question: "Who is the creator of The Simpsons",
    a1: "David X. Cohen",
    a2: "Matt Groening",
    a3: "Seth MacFarlane",
    a4: "Adam Reed",
}

var allQuestions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
var correctAnswers = ["1989", "Santa's Little Helper", "President of the United States", "Charles Montgomery Burns", "Kathy Bates", "Arizona, North Dakota, & South Dakota", "Cobras", "Fox", "7G", "Matt Groening"]

$("#retryBtn").hide();
$("#retryBtn").click(function () {
    window.location.reload();
});


$("#startBtn").click(function () {
    $("#startBtn").hide();
    showQuestion();
    setInterval(updateCounter, 1000);
});

$("#answer1").click(playerAnswer1);
$("#answer2").click(playerAnswer2);
$("#answer3").click(playerAnswer3);
$("#answer4").click(playerAnswer4);

function updateCounter() {
    timeRemaining--;
    $("#counter").text("Time Remaining: " + timeRemaining);

if (timeRemaining <= 0) {
    scorePlayerAnswer(undefined)
}

}

var timeRemaining = 15;


function showQuestion() {
    var question = getCurrentQuestion();

    $("#question").text(question.question);
    $("#answer1").text(question.a1);
    $("#answer2").text(question.a2);
    $("#answer3").text(question.a3);
    $("#answer4").text(question.a4);
}

function getCurrentAnswer() {
    return correctAnswers[currentQuestionIndex];
}

function getCurrentQuestion() {
    return allQuestions[currentQuestionIndex];
}

function playerAnswer1() {
    var question = getCurrentQuestion();
    scorePlayerAnswer(question.a1);
}

function playerAnswer2() {
    var question = getCurrentQuestion();
    scorePlayerAnswer(question.a2);
}
function playerAnswer3() {
    var question = getCurrentQuestion();
    scorePlayerAnswer(question.a3);
}
function playerAnswer4() {
    var question = getCurrentQuestion();
    scorePlayerAnswer(question.a4);
}
function scorePlayerAnswer(playerGuess) {
    var correctAnswer = getCurrentAnswer();

    if (playerGuess == undefined) {
        numberUnanswered++;
    }

    else if (playerGuess == correctAnswer) {
        numberCorrect++;
    }

    else if (playerGuess != correctAnswer) {
        numberIncorrect++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex >= allQuestions.length) {
        $("#question").text("Results");
        $("#answer1").text("");
        $("#answer2").text("Correct: " + numberCorrect);
        $("#answer3").text("Incorrect: " + numberIncorrect);
        $("#answer4").text("Unanswered: " + numberUnanswered);
        $("#counter").hide();
        $("#retryBtn").show();
    }
    showQuestion();
    timeRemaining = 15;

}