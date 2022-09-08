onclick can only handle clicks
dont use that much
document.getElementById('start').onclick = startGame;

// addEventListener can handle any kind of event
document.querySelector('#start').addEventListener('click', startGame)

function startGame () {
  // build a deck here
  console.log('Inside start');
}

