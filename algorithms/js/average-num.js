// In this exercise, you need to implement the code that calculates the average value of a collection of numbers.

// The collection of numbers is passed to the "average" function as an array.

// Return the average value of the numbers.

// I.e.

// 1, 3, 5, 7, 9 -> return 5
// 2, 4, 6, 8, 10 -> return 6

let average = function (array) {
  // Implement your code below
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  
  return sum / array.length;
}

console.log(average([1, 3, 5, 7, 9]));
// -> 5
console.log(average([2, 4, 6, 8, 10]));
// -> 6