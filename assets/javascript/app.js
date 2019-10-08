// VARIABLES
var correctAnswers=0;
var incorrectAnswers=0;
var unansweredQuestions=8;
var currentQuestion = 0;
var time = 15;
var buttonValue=0;

// QUESTIONS AND ANSWERS
var triviaQs = [
    {
    question: "Who was the first superstar dog",
    answers: ["Rin Tin Tin", "Pluto", "Lassie"],
    correct: 1,
    image: "assets/images/rintintin.gif"
    },

    {
    question: "How many times are dogs mentioned in the Bible?",
    answers: ["3", "14", "35"],
    correct: 3,
    image: "assets/images/dog-books.gif"
    },

    {
    question: "Dalmatian puppies are born with how many spots?",
    answers: ["Zero", "At least 5", "Dozens"],
    correct: 1,
    image: "assets/images/dalmatians.gif"
    },

    {
    question: "A dog is as smart as a:",
    answers: ["One year old", "Two year old", "Three year old"],
    correct: 2,
    image: "assets/images/smart-dog.gif"
    },

    {
    question: "The most common health problem in dogs is:",
    answers: ["Fleas", "Obesity", "Broken bones"] ,
    correct: 2,
    image: "assets/images/dog-eating.gif"
    },

    {
    question: "What is the favorite breed of the Queen of England?",
    answers: ["Basset Hound", "English Shepherd", "Corgi"],
    correct: 3,
    image: "assets/images/queen-dogs.gif"
    },

    {
    question: "Which breed has a black tongue?",
    answers: ["Chow Chow","Rottweiler","Weimaraner"],
    correct: 1,
    image: "assets/images/dog-tongue.gif"
    },

    {
    question: "The country with the highest population of dogs is:",
    answers: ["China","France","United States"],
    correct: 3,
    image: "assets/images/dog-population.gif"
    },

];

//To count alloted time
function timer() {
    timeCounter = setInterval(countDown,1000);
    function countDown () {
        if (time>0) {
            time--;
        }
        if (time<1) {
            clearInterval(timeCounter);
            timeOut();
        }
    $("#timer").html("You have "+time+" seconds left");
    };
}

//to give results if your alloted time runs out
function timeOut () {
    if (time===0) {
        $("#answers").empty();
        $("#timer").hide();
        $("#questions").html("<h2>You ran out of time!</h2>");
        $("#correct-answers").html("Correct answers: " + correctAnswers)        
        $("#incorrect-answers").html("Incorrect answers: " +incorrectAnswers)        
        $("#unanswered-questions").html("Unanswered questions: " +unansweredQuestions) 
        $("#unanswered-questions").append("<br><a href='index.html'><button id='restart'> Restart </button></a>");
    }
}

//to give results if you answer all the questions
function allAnswered () {

    if (unansweredQuestions===0) {
	clearInterval(timeCounter);
        $("#answers").empty();
        $("#timer").empty();
        $("#questions").html("<h2>You completed the trivia!</h2>");
        $("#correct-answers").html("Correct answers: " + correctAnswers)        
        $("#incorrect-answers").html("Incorrect answers: " +incorrectAnswers)        
        $("#unanswered-questions").html("Unanswered questions: " +unansweredQuestions) 
        $("#unanswered-questions").append("<br><a href='index.html'><button id='restart'> Restart </button></a>");
    }
}

//To start the Game after click on start button
function start () {
    currentQuestion=1
    showQuestion();
    
}

//To show the question and its answers
function showQuestion () {
    time=15;
    timer();
    timeOut();
    allAnswered();
    $("#questions").text(triviaQs[currentQuestion-1].question);
    console.log(triviaQs[currentQuestion-1].question);
    $("#answers").html("<button value='1'>"+(triviaQs[currentQuestion-1].answers[0])+"</button><br><button value='2'>"+(triviaQs[currentQuestion-1].answers[1])+"</button><br><button value='3'>"+(triviaQs[currentQuestion-1].answers[2])+"</button>");
    checkAnswer();
    clearInterval(resAnswerPage);

	if (unansweredQuestions===0) {
	clearInterval(timeCounter);
	$("#answers").empty();
        $("#questions").html("<h2>You are finished!</h2>");
	$("#questions").append("<br>Correct answers: "+correctAnswers);
	$("#questions").append("<br>Incorrect answers: "+incorrectAnswers);
	$("#questions").append("<br>Unaswered questions: "+unansweredQuestions);
        $("#timer").empty();

};

}

//To catch the user's selected answer 
function checkAnswer () {
$("button").on("click", (function() {
    //$("#timer").empty();
    clearInterval(timeCounter);
    buttonValue=$(this).val();
    //console.log(buttonValue);
    //console.log((triviaQs[currentQuestion-1].correct).toString());
    //and see if it is correct or incorrect
    if (buttonValue===(triviaQs[currentQuestion-1].correct).toString()) {
        //alert("correct"); This needs to stay just for some seconds, so put it inside an interval
        $("#answers").empty();
        $("#questions").html("<h2>You are correct!</h2>")
        $("#questions").append("<img src='"+triviaQs[currentQuestion-1].image+"'</img>");
        correctAnswers++;
        unansweredQuestions--;
        currentQuestion++;
        $("#timer").empty();
    }

    else if (buttonValue!==(triviaQs[currentQuestion-1].correct).toString()) {
        //alert("incorrect");
        $("#answers").empty();
        $("#questions").html("<h2>You are incorrect!</h2>")
        $("#questions").append("<img src='"+triviaQs[currentQuestion-1].image+"'</img>");
        incorrectAnswers++;
        unansweredQuestions--;
        currentQuestion++;
        $("#timer").empty();
        
    }
    resAnswerPage=setInterval(nextQuestion,4000);
}))
}

//Show next question
function nextQuestion () {
    showQuestion();
}

//Click on start button
$("#start").click(start);

