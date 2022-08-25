let start = document.querySelector('.btn');
const SELECTIONS = [
  {
    name: 'rock',
    defeats: 'scissor'
  },
  {
    name: 'paper',
    defeats: 'scissor'
  },
  {
    name: 'scissor',
    defeats: 'paper'
  }
]



start.addEventListener("click", e => {
  let input = prompt('rock, paper, scissor?');
  let userSelection = SELECTIONS.find(selection => selection.name === input)
  runGame(userSelection)
});

function runGame(selection) {
  console.log(selection);
  let botChoice = SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)];
  if (selection.name === botChoice.name) {
    console.log('TIE, Bot: ' + botChoice.name + "USER: " + selection.name);
  }
}


