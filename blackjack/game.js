// onclick can only handle clicks
// dont use that much
// document.getElementById('start').onclick = startGame;

// addEventListener can handle any kind of event
document.querySelector('#start').addEventListener('click', myUndefinedFunction())

// function startGame () {
//   // build a deck here
//   console.log('Inside start');
// }

let game = {
  user: {
    htmlScore: '#user-result',
    score: 0
  },
  dealer: {
    htmlScore: '#dealer-result',
    score: 0
  },

  cards: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],

  cardValues: {
    '2': 2, 
    '3': 3, 
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10, 
    'Q': 10, 
    'K': 10, 
    A: [1, 11] 
  },

  wins: 0,
  losses: 0,
  draw: 0,
  stand: false,
  flipCards: false
}

const USER = game.user;
const DEALER = game.dealer;

document.querySelector('#hit').addEventListener('click', )