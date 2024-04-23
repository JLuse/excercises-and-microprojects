//Write your pseduo code first! 
// input for your temp
// click that converts F to C that goes to the page
document.querySelector('#cvrt-btn').addEventListener('click', convert)

function convert() {
  let temp = document.querySelector('#temp').value
  let convertedToC = (temp - 32) / 1.8

  document.querySelector('#result').innerText = convertedToC
}

