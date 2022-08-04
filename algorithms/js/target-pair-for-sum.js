// your function will be given an array of positive integers, and a number called SUM.
// Your objective is to find a pair of numbers from the array that adds up to be the SUM.
// Return the pair of numbers in an array with the smaller number first.

// I.e.
// [3, 7, 10, 15, 9] and 19: you should return [9, 10]
// [6, 8, 12, 14, 2, 4] and 6: you should return [2, 4]

// tips - might need hashmap (object) to sore and comapre current number
//  multiple for loops, loop within a loop

// Steps:
// 1. iterate over array
// 2. add current number to the following numbers
// 3. if a number adds up to the SUM, push those numbers to a new array

let findPairForSum = function (array, sum) {
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i] + ' current');
    if (array[i + 1] === undefined) {
      break;
    } else if (array[i] + array[i + 1] === sum){
      console.log(array[i] + array[i + 1]);
    }
    
  }
};

findPairForSum([3, 7, 10, 15, 9], 19)

// console.log(findPairForSum([3, 7, 10, 15, 9], 19));
// // -> [9, 10]
// console.log(findPairForSum([6, 8, 12, 14, 2, 4], 6));
// -> [2, 4]