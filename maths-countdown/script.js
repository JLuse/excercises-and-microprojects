$(document).ready(function(){
  var addButton = document.getElementById('addition')
  var subButton = document.getElementById('subtraction')
  var multiplyButton = document.getElementById('multiplication')
  var divisionButton = document.getElementById('division')
  var currentQuestion;
  var timeLeft = 10;
  var score = 0;
  var interval;

  // var randomNumberGenerator = function (size) {
  //   return Math.ceil(Math.random() * size);
  // }

  
  
  var questionGenerator = function () {
    var question = {};

    var num1 = Math.floor(Math.random() * 9) + 2;
    var num2 = Math.floor(Math.random() * (num1 - 1)) + 1;
    
    if (addButton.checked) {
      question.answer = num1 + num2;
      question.equation = String(num1) + " + " + String(num2);
    } else if (subButton.checked) {
      question.answer = num1 - num2;
      question.equation = String(num1) + " - " + String(num2);
    } else if (multiplyButton.checked) {
      question.answer = num1 * num2;
      question.equation = String(num1) + " * " + String(num2);
    } else if (divisionButton.checked) {
      question.answer = Math.floor(num1 / num2);
      question.equation = String(num1) + " / " + String(num2);
    }
    
    return question;
  }

  var renderNewQuestion = function () {
    currentQuestion = questionGenerator();
    $('#equation').text(currentQuestion.equation);
  }

  addButton.addEventListener('click', renderNewQuestion);
  subButton.addEventListener('click', renderNewQuestion);
  multiplyButton.addEventListener('click', renderNewQuestion);
  divisionButton.addEventListener('click', renderNewQuestion);
  
  var checkAnswer = function (userInput, answer) {
    if (userInput === answer) {
      renderNewQuestion();
      $('#user-input').val('');
      updateTimeLeft(+1);
      updateScore(+1);
    }
  };

  var updateTimeLeft = function (amount) {
    timeLeft += amount;
    $('#time-left').text(timeLeft);
  }

  var updateScore = function (amount) {
    score += amount;
    $('#score').text(score);
  };
  
  var startGame = function () {
    if (!interval) {
      if (timeLeft === 0) {
        updateTimeLeft(10);
        updateScore(-score);
      }
      interval = setInterval(function () {
        updateTimeLeft(-1);
        if (timeLeft === 0) {
          clearInterval(interval);
          interval = undefined;
        }
      }, 1000);  
    }
  }

  $('#user-input').on('keyup', function () {
    startGame();
    checkAnswer(Number($(this).val()), currentQuestion.answer);
  });

  renderNewQuestion();
});
