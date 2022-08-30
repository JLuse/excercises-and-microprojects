let romanNumeral = function (integer) {
  // create pairs of romain-ints
  const romanPairs = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  let result = '';
  for (key in romanPairs) {
    // determines how many particular symbols we are going to repeat
    result += key.repeat(Math.floor(integer / romanPairs[key]));
    integer %= romanPairs[key];
  }
  
  return result;
};

console.log(romanNumeral(3));
console.log(romanNumeral(5));
console.log(romanNumeral(9));
// -> IX