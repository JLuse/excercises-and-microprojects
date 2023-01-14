let blackjackGame = {
  "You": {"scoreSpan": "#your-blackjack-result", "div": "#your-box", "score": 0, hand: []},
  "Dealer": {"scoreSpan": "#dealer-blackjack-result", "div": "#dealer-box", "score": 0, hand: []},
  "Cards": ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
  "cardsMap": {'A': [1, 11], '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10,},
  "Wins": 0,
  "Losses": 0,
  "Draws": 0,
}

const YOU = blackjackGame['You'];
const DEALER = blackjackGame['Dealer'];

document.querySelector('#hit').addEventListener('click', blackjackHit);
document.querySelector('#deal').addEventListener('click', blackjackDeal);
document.querySelector('#stand').addEventListener('click', dealerLogic);

let STAND = true;

function blackjackHit() {
  if (YOU['score'] === 0 && DEALER['score'] === 0) {
    alert('Sorry gotta DEAL the cards first')
  }
  else if (YOU['score'] <= 21 && STAND) {
      card = pickCard();
      YOU['hand'].push(card)
      displayCard(YOU);
      updateScore(card, YOU);
      showScore(YOU);
  } else if (!STAND) {
      alert('Sorry you\'re already standing. You need to deal again.')
  } else {
      alert('Sorry! Cannot pick a card after bust.')
  }
}

function blackjackDeal() {
  document.querySelector('#blackjack-result').textContent = 'Let\'s Play';
  document.querySelector('#blackjack-result').style.color = '#212529'
  updateTable();
  
  YOU['score'] = 0;
  DEALER['score'] = 0;

  document.querySelector('#your-blackjack-result').textContent = 0;
  document.querySelector('#dealer-blackjack-result').textContent = 0;
  startingCards();
}

function startingCards() {
  for (let i = 0; i < 2; i++) {
    let userCard = pickCard();
    let botCard = pickCard();
    YOU['hand'].push(userCard);
    displayCard(YOU);
    updateScore(userCard, YOU);
    showScore(YOU);

    DEALER['hand'].push(botCard)
    displayCard(DEALER);
    updateScore(botCard, DEALER);
    showScore(DEALER)
  }
}

function displayCard(activePlayer) {
  let cardElement = document.createElement("li")
  cardElement.className = 'card-list-item'
  for (let i = 0; i < activePlayer['hand'].length; i++) {
    cardElement.innerHTML = activePlayer['hand'][i]
  }
  document.querySelector(activePlayer['div']).appendChild(cardElement);
}

function pickCard() {
  return blackjackGame['Cards'][Math.floor(Math.random() * 13)];
}

function updateScore(card, activePlayer) {
  // If adding 11 keeps me below 21, add 11, otherwise add 1.
  if (card === 'A') {
      if (activePlayer['score'] + 11 <= 21) {
          activePlayer['score'] += 11;
      } else {
          activePlayer['score'] += 1;
      }
  } else {
      activePlayer['score'] += blackjackGame['cardsMap'][card];
  }
}


function showScore(activePlayer) {
  if (activePlayer['score'] <= 21) {
      document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
  } else {
      document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
      document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
  }
}

function dealerLogic() {
  while (DEALER['score'] < 15) {
      let card = pickCard();
      DEALER['hand'].push(card)
      displayCard(DEALER);
      updateScore(card, DEALER);
      showScore(DEALER);
  }
  if (STAND) {
    showResult(computeWinner());
    STAND = false
  }
}

// Compute winner and return result
function computeWinner() {
  let winner;

  if (YOU['score'] <= 21) {
      if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
          winner = YOU;
      } else if (YOU['score'] < DEALER['score']) {
          winner = DEALER;
      }
  } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
      winner = DEALER;
  }
  return winner;
}

function showResult(result) {
  resultSpan = document.querySelector('#blackjack-result');
  if (result == YOU) {
      resultSpan.textContent = 'You won! =D';
      resultSpan.style.color = 'green';
      blackjackGame['Wins']++;
  } else if (result == DEALER) {
      resultSpan.textContent = 'You lost! =(';
      resultSpan.style.color = 'red';
      blackjackGame['Losses']++;
  } else {
      resultSpan.textContent = 'You drew! =|';
      blackjackGame['Draws']++;
  }
}

function blackjackReset() {
  document.querySelector('#blackjack-result').textContent = 'Let\'s Play!'
  document.querySelector('#blackjack-result').style.color = 'black';
}

function updateTable() {
  let wins = document.querySelector('#wins');
  let losses = document.querySelector('#losses');
  let draws = document.querySelector('#draws');
  let playerCards = document.querySelector('#your-box');
  let dealerCards = document.querySelector('#dealer-box');

  wins.textContent = blackjackGame['Wins'];
  losses.textContent = blackjackGame['Losses'];
  draws.textContent = blackjackGame['Draws'];
  removeAllCards(playerCards);
  removeAllCards(dealerCards);
  STAND = true;

}

function removeAllCards(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
  // Start a new hand
  YOU['hand'] = [];
  DEALER['hand'] = [];
}