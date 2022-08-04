// Your function will be given an array of numbers. The set of numbers will either be all even numbers with one odd number, or all odd numbers with one even number. Your function needs to find this outlier number and return it.

// Steps:
// 1. Create two arrays
// 2. check orginal array for odd or even numbers
// 3. push even and odd numbers to appropriate arrays
// 4. return/check which array contains a single integer, which will be the result

let detectOutlierValue = function (array) {
  let evenArr = [];
  let oddArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArr.push(array[i]);
    } else if (array[i] % 2 === 1) {
      oddArr.push(array[i]);
    }
  }

  return evenArr.length === 1 ? evenArr[0] : oddArr[0];
}
// detectOutlierValue([1, 3, 4, 7, 9, 11]);
// detectOutlierValue([2, 4, 6, 10, 11, 14]);

console.log(detectOutlierValue([1, 3, 4, 7, 9, 11]));
// -> 4
console.log(detectOutlierValue([2, 4, 6, 10, 11, 14]));
// -> 11