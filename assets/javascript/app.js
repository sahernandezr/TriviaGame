var correctAnswers=0;
var incorrectAnswers=0;
var unansweredQuestions=1;


$("#start").on("click", function() {
q1();
correct();
incorrect();
})

function q1() {
$("#questions").html("<h3>Question 1: Which was the first dog superstar?</h3>");
 $("#answers").html("<button class='correct'>Rin Tin Tin</button><br><button class='incorrect'>Lassie</button><br><button class='incorrect'>Pluto</button>")
}

function correct() {
$(".correct").on("click", function () {
$("#answers").html("You are correct!");
correctAnswers++;
unansweredQuestions--;
console.log("Corrects: "+ correctAnswers);
console.log("Unanswered: " + unansweredQuestions);
}) }

function incorrect() {

$(".incorrect").on("click", function () {
$("#answers").html("You are incorrect!");
incorrectAnswers++;
unansweredQuestions--;
console.log("Incorrects: "+ incorrectAnswers);
console.log("Unanswered: " + unansweredQuestions);
}) }
