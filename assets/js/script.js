function verifyResponses(){
var total = 5;
var points = 0;
var myForm = document.forms["quizForm"];
var responses = ["a","c","b","c","a"];

for (var i = 1; i <= total; i++){
  if (myForm["p"+ i].value === null || myForm["p" + i].value === "") {
  alert ("Please, answer the question " + i);
  return false;
  }else{
  if (myForm["p" + i].value === responses [i - 1]){
       points++;
  }
  }
  }
  var resultado = document.getElementById ("result");
resultado.innerHTML = '<h3> You obtain <span>'+ points +'</span> of <span>' + total +' points </span></h3>'
return false;
}

function startQuiz() {
  var timeRemaining = 60; // 60 seconds
  var timerEl = document.getElementById("time-remaining");
  var timerInterval = setInterval(function() {
    timeRemaining--;
    timerEl.textContent = timeRemaining;
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
  document.getElementById("start-btn").style.display = "none";
  showQuestion(0);
}
document.getElementById("start-btn").addEventListener("click", startQuiz);

function showQuestion(questionIndex) {
  var quizForm = document.forms["quizForm"];
  quizForm.style.display = "block";
  var questionEl = document.getElementById("question");
  questionEl.textContent = questions[questionIndex].question;
  for (var i = 0; i < questions[questionIndex].options.length; i++) {
    var optionEl = document.getElementById("option-" + i);
    optionEl.textContent = questions[questionIndex].options[i];
    quizForm["p" + (i+1)].value = questions[questionIndex].options[i];
  }
  quizForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var selectedOption = quizForm["p" + (questionIndex+1)].value;
    if (selectedOption === questions[questionIndex].answer) {
      points++;
    } else {
      timeRemaining -= 10; // subtract 10 seconds for incorrect answer
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }
    if (questionIndex < questions.length - 1) {
      showQuestion(questionIndex+1);
    } else {
      endQuiz();
    }
  });
}

