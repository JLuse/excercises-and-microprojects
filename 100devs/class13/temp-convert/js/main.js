//Write your pseduo code first! 
// create a single input
// Have two buttons, one that represents convert to F, the other to comvert C
// try and see if you can validate input in HTML, to only allow numbers, inluding negatives
// in the javascript, make an event handler for each of the buttons
// when you click the button take the input value from whatever you clicked and store im some variable
// Then create two funtions one for converting F, the other C

// in each function pass the value from the input and apply it to the proper conversion cacluation
// insert/append calculated vale back to the DOM
document.querySelector('#f-to-c-btn').addEventListener('click', convertFToC)
document.querySelector('#c-to-f-btn').addEventListener('click', convertCToF)

function convertCToF() {
  const tempValC = Number(document.querySelector('#tempC').value)
  const convertedToFval = (tempValC * 1.8) + 32
  document.querySelector('#converted-temp').innerText = `${convertedToFval} Fahrenheit`
}

function convertFToC() {
  const tempValF = Number(document.querySelector('#tempF').value)
  const convertedToCval = (tempValF - 32) / 1.8
  document.querySelector('#converted-temp').innerText = `${convertedToCval} Celsius`
}

