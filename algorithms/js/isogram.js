// An isogram is a word that has no repeating letters, whether its consecutive or non consecutive.

// The isIsogram function will be passed an string input, determine whether it is an isogram. If it is, return true, otherwise return false.

// I.e.

// "helo" -> return true
// "hello" -> return false
// "helicopter" -> return false
// "orange" -> return true

let isIsogram = function (word) {
  
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (i !== j) {
        if (word[i] === word[j]) {
          return false;
        }
      }
    }
  }
  
  return true;

  // Better method
  // use objects to comapre array to itself
  // var charactersCount = {};
  // for (var i = 0; i < word.length; i++) {
  //   charactersCount[word[i]] = charactersCount[word[i]] ? charactersCount[word[i]] + 1 : 1;
  // }
  
  // return Object.values(charactersCount).every(function(count) {
  //   return count === 1;
  // });
}

console.log(isIsogram("helo"));
// -> true
console.log(isIsogram("helicopter"));
// -> false