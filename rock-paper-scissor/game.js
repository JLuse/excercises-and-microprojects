let start = document.querySelector('.btn');
let playerResponse

let getInfo = function () {
  let input = prompt('rock, paper, scissor?');
  playerResponse = input;
}

start.addEventListener("click", getInfo);

let game = function () {

}


