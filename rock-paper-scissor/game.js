let oneRound = document.querySelector('.btn');
let multiRound = document.querySelector('.btn-1');

let userScore = 0;
let botScore = 0;
let round = 0;

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
    runGame(userSelection)
  }
});

multiRound.addEventListener("click", e => {
    let valid = false;

    // potentially an issue here
    while (userScore < 2 && botScore < 2) {

    let input = prompt('rock, paper, scissor?').toLowerCase();
    let userSelection = SELECTIONS.find(selection => selection.name === input)
  

    if (validatePicks(input, valid)) {
      runGame(userSelection)
    }

    console.log(userScore + ' - User')
    console.log(botScore + ' - Bot')

    // this where im having trouble
    if (round === 3) {
      while (!(userScore === 2 || botScore === 2)) {
        gameResult(); 
      }
    }
  }
  //   // The best out of three mode should only stop when either user or the bot player has won at least two rounds.
  //   // Maybe add if condtion to account for this, only progress round unless someone has score >= 2
});

let runGame = function (selection) {
  // console.log(selection);

  let botChoice = SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)];

  if (selection.name === botChoice.name) {
    alert('TIE! Bot: ' + botChoice.name + " USER: " + selection.name)
    round++
  } else if (selection.name === botChoice.defeats) {
    botScore++;
    round++
    alert('YOU LOST! Bot: ' + botChoice.name + " USER: " + selection.name)
  } else if (selection.defeats === botChoice.name){
    userScore++;
    round++
    alert('YOU WON! Bot: ' + botChoice.name + " USER: " + selection.name)
  }
}

let gameResult = function() {
  console.log('In results');
  if (userScore > botScore) {
    alert('YOU WIN THE GAME! Your Score: ' + userScore + ' BOT score: ' + botScore);
  } else if (userScore < botScore) {
    alert('LOST THE GAME TO DA BOT! Your Score:' + userScore + ' BOT score: ' + botScore);
  } else if (userScore === botScore) {
    alert('THE GAME WAS A TIE. Your Score:' + userScore + ' BOT score: ' + botScore);
  }
}


