var global;

(function() {

  var variable = 10;

  var quizContainer = document.getElementById("quiz");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submit");
  var resetButton = document.getElementById("reset");

  var myQuestions = [];

var question1= {
  question: "What color is the sky?",
  answers: {
    a: "Blue",
    b: "Brown",
    c: "Green",
  },
  correctAnswer: "a"
}

var question2 = {
question: "How many wheels does a car have?",
answers: {
  a: "2",
  b: "4",
  c: "3",
},
correctAnswer: "b"
}

var question3 = {
question: "How many different NFL teams are there?",
answers: {
  a: "28",
  b: "16",
  c: "32",
},
correctAnswer: "c"
}

myQuestions.push(question1, question2, question3);


function buildQuiz() {
  for (var i = 0; i <myQuestions.length; i++) {
    var questionDiv = document.createElement("div");
    questionDiv.innerText = myQuestions[i].question;



    var answersDiv = document.createElement("div");

    answersDiv.classList.add("answers");

    for (letter in myQuestions[i].answers) {
      var label = document.createElement("label");



      var input = document.createElement("input");
      input.type = "radio";
      input.name = "question" + i;
      input.value = letter;

      label.appendChild(input);


      var labelText = document.createTextNode(`${letter} : ${myQuestions[i].answers[letter]}`);

      label.appendChild(labelText);

      answersDiv.appendChild(label);
    }
    quizContainer.appendChild(questionDiv);
    quizContainer.appendChild(answersDiv);
  }
  
}

buildQuiz();

function showResults() {
  var answerContainers = quizContainer.querySelectorAll(".answers");


  var numCorrect = 0;

    for (var i = 0; i < answerContainers.length; i++) {
      var answerContainer = answerContainers[i];

      var selector = `input[name=question${i}]:checked`;

      var userAnswer = (answerContainer.querySelector(selector) || {}).value;

      console.log(answerContainer.querySelector(selector))

      if (userAnswer === myQuestions[i].correctAnswer) {

        numCorrect++;

        answerContainer.style.color = "green";
      }
      else {
        answerContainer.style.color = "red";
      }
    }

    resultsContainer.innerText = "You got " + numCorrect + " out of " + myQuestions.length;
    quizContainer.appendChild(resultsContainer);
}

submitButton.addEventListener("click", showResults);

function resetQuiz() {
resultsContainer.innerText = "";
quizContainer.innerHTML = "";
buildQuiz();
}


resetButton.addEventListener("click", resetQuiz);

}) ()
