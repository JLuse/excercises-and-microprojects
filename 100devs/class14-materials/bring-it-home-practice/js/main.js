// *Variables*
// Create a variable and console log the value
let variable = 'A milli'
console.log(variable)

// Create a variable, add 10 to it, and alert the value
let nums = 10
alert(nums+=10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub() {
  alert(6-3-4-2)
}
sub()

// Create a function that divides one number by another and returns the remainder
function remainder() {
  return 4 % 10;
}
remainder()

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function conditions(x,y) {
  return x + y > 50 ? alert('Jumanji') : console.log('conditions')
}


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function conditions2(x,y,z) {
  return (x * y * z) % 3 === 0 ? alert('ZEBRA') : console.log('conditions2')
}
