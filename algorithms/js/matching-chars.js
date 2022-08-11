// You are to compare the characters of two strings. If the first string contains all the characters that exist in the second string, you should return true. Otherwise return false.


let matchingCharacters = function (str1, str2) {
  // str1 = str1.toLowerCase();
  // str2 = str2.toLowerCase();
  // let result = [];

  // // Iterate through every letter in s1
  // for (i = 0; i < str1.length; i++) {
  //   // Iterate through every letter in s2
  //   for (j = 0; j < str2.length; j++) {
  //     // Check if the letter in s1 matches letter in s2
  //     if (str1[i] === str2[j]) {
  //       // Changed per request of OP
  //       // console.log(str1[i] + str2[j])
  //       result.push(str2[j]);
  //     }
  //   }
  // }
  // console.log(result.join(''));
  let duplicateCharacter = "";
  for (let i = 0; i < str1.length; i += 1) {
    if (duplicateCharacter.indexOf(str1[i]) === -1) {
      if (str2.indexOf(str1[i]) !== -1) {
        duplicateCharacter += str1[i];
      }
    }
  }
  return [...duplicateCharacter];
}

// console.log(matchingCharacters("alien", "line"));
matchingCharacters("alien", "line")
// -> true
// console.log(matchingCharacters("hello", "hew"));
// -> false