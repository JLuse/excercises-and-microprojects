let oneRound = document.querySelector('.btn');
let multiRound = document.querySelector('.btn-1');

let userScore = 0;
let botScore = 0;

const SELECTIONS = [
  {
    name: 'rock',
    defeats: 'scissor'
  },
  {
    name: 'paper',
    defeats: 'rock'
  },
  {
    name: 'scissor',
    defeats: 'paper'
  }
]

let validatePicks = function (userInput, validation) {
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor') {
    validation = true;
  } else {
    alert('Type in rock, paper or scissor')
  }
  return validation;
}

oneRound.addEventListener("click", e => {
  let input = prompt('rock, paper, scissor?').toLowerCase(); 
  let valid = false;
  let userSelection = SELECTIONS.find(selection => selection.name === input)

  if (validatePicks(input, valid)) {
    runGame(userSelection);
    gameResult();
  }
});

multiRound.addEventListener("click", e => {
    let valid = false;

    while (userScore < 2 && botScore < 2) {

      let input = prompt('rock, paper, scissor?').toLowerCase();
      let userSelection = SELECTIONS.find(selection => selection.name === input)
    

      if (validatePicks(input, valid)) {
        runGame(userSelection)
      }

      console.log(userScore + ' - User')
      console.log(botScore + ' - Bot')
    }
    
    if (userScore < botScore || userScore > botScore) {
      gameResult();
    }
});

let runGame = function (selection) {
  let botChoice = SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)];

  if (selection.name === botChoice.name) {
    alert('TIE! Bot: ' + botChoice.name + " USER: " + selection.name);
    document.querySelector('#user-choice').innerHTML = selection.name;
    document.querySelector('#computer-choice').innerHTML = botChoice.name;

  } else if (selection.name === botChoice.defeats) {
    botScore++;
    alert('YOU LOST! Bot: ' + botChoice.name + " USER: " + selection.name)
    document.querySelector('#user-choice').innerHTML = selection.name;
    document.querySelector('#computer-choice').innerHTML = botChoice.name;

  } else if (selection.defeats === botChoice.name){
    userScore++;
    alert('YOU WON! Bot: ' + botChoice.name + " USER: " + selection.name)
    document.querySelector('#user-choice').innerHTML = selection.name;
    document.querySelector('#computer-choice').innerHTML = botChoice.name;

  }
}

let gameResult = function() {
  if (userScore > botScore) {
    alert('YOU WIN THE GAME! Your Score: ' + userScore + ' BOT score: ' + botScore);
    userScore = 0;
    botScore = 0;
    document.querySelector('#results').innerHTML = 'User';

  } else if (userScore < botScore) {
    alert('LOST THE GAME TO DA BOT! Your Score:' + userScore + ' BOT score: ' + botScore);
    userScore = 0;
    botScore = 0;
    document.querySelector('#results').innerHTML = 'Bot';

  } else if (userScore === botScore) {
    alert('THE GAME WAS A TIE. Your Score:' + userScore + ' BOT score: ' + botScore);
    userScore = 0;
    botScore = 0;
    document.querySelector('#results').innerHTML = 'Tie';

  }
}


