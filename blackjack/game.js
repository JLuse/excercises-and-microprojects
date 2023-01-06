let blackjackGame = {
  "You": {"scoreSpan": "#your-blackjack-result", "div": "#your-box", "score": 0,},
  "Dealer": {"scoreSpan": "#dealer-blackjack-result", "div": "#dealer-box", "score": 0,},
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
      showCard(YOU);
      updateScore(card, YOU);
      showScore(YOU);
  } else if (!STAND) {
      alert('Sorry you\'re already standing. You need to deal again.')
  } else {
      alert('Sorry! Cannot pick a card after bust.')
  }
}

function showCard(activePlayer) {
  displayCard(card, activePlayer);
}

function blackjackDeal() {
  document.querySelector('#blackjack-result').textContent = 'Let\'s Play';
  document.querySelector('#blackjack-result').style.color = '#212529'
  updateTable();
  let yourImages = document.querySelector('#your-box').querySelectorAll('img');
  let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
  for (let i = 0; i < yourImages.length; i++) {
      yourImages[i].remove();
  }
  for (let j = 0; j < dealerImages.length; j++) {
      dealerImages[j].remove();
  }
  
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
    displayCard(userCard, YOU);
    updateScore(userCard, YOU);
    showScore(YOU);

    displayCard(botCard, DEALER);
    updateScore(botCard, DEALER);
    showScore(DEALER)
  }
}

function displayCard(card, activePlayer) {
  let cardElement = document.createElement("li")
  cardElement.className = 'card-list-item'
  cardElement.innerHTML = card
  document.querySelector(activePlayer['div']).appendChild(cardElement);
}

function pickCard() {
  return blackjackGame['Cards'][Math.floor(Math.random() * 13)];
}

function updateScore(card, activePlayer) {
  // If adding 11 keeps me below 21, add 11, otherwise add 1.
  // console.log(activePlayer)
  if (card === 'A') {
      if (activePlayer['score'] + 11 <= 21) {
          activePlayer['score'] += 11;
      } else {
          activePlayer['score'] += 1;
      }
  } else {
      activePlayer['score'] += blackjackGame['cardsMap'][card];
  }

  // Refactoring
  let activePlayerHand = document.querySelector(activePlayer['div']).getElementsByClassName('card-list-item');

  let sum = 0;
  for (let i = 0; i < activePlayerHand.length; i++) {
    sum += blackjackGame['cardsMap'][card]
  }
  console.log(sum)
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
      displayCard(card, DEALER);
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
}
