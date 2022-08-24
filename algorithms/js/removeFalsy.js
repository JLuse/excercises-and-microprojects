// Falsy values in JavaScript include false, null, 0, "", undefined, and NaN.

// The "removeFalsy" function is passed an array of values. Can you return a new array with all falsy values removed?

let removeFalsy = function (arr) {
  const result = arr.filter(element => !!element)
  
  return result;
};

console.log(removeFalsy([1, undefined, "hello", "", false, 5]));
// -> [1, "hello", 5]