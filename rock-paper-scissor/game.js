let oneRound = document.querySelector('.btn');
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



oneRound.addEventListener("click", e => {
  let input = prompt('rock, paper, scissor?');
  let valid = false;

  if (input === 'rock' || input === 'paper' || input === 'scissor') {
    valid = true;
  } else {
    alert('Type in rock, paper or scissor')
  }

  let userSelection = SELECTIONS.find(selection => selection.name === input)

  if (valid) {
    runGame(userSelection)
  }
});

function runGame(selection) {
  // console.log(selection);
  let botChoice = SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)];
  if (selection.name === botChoice.name) {
    // console.log('TIE, Bot: ' + botChoice.name + " USER: " + selection.name);
    alert('TIE! Bot: ' + botChoice.name + " USER: " + selection.name)
  } else if (selection.name === botChoice.defeats) {
    // console.log('LOST, Bot: ' + botChoice.name + " USER: " + selection.name);
    alert('YOU LOST! Bot: ' + botChoice.name + " USER: " + selection.name)
  } else if (selection.defeats === botChoice.name){
    // console.log('YOU WON! Bot: ' + botChoice.name + " USER: " + selection.name);
    alert('YOU WON! Bot: ' + botChoice.name + " USER: " + selection.name)
  }
}


