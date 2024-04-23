document.querySelector('#yell').addEventListener('click', talk)

function talk() {
  let fName = document.querySelector('#firstName').value
  let fMName = document.querySelector('#firstMiddle').value
  let mName = document.querySelector('#lastMiddle').value
  let lName = document.querySelector('#lastName').value
  
  document.querySelector('#placeToYell').innerText = `${fName} ${fMName} ${mName} ${lName}`
}