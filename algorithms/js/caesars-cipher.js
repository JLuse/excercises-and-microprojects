// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
let formula = function(code) {
  return (code - 65 + 13) % 26 + 65;
}

var rot13 = function (string) {
  let codeArr = [];
  
  string.split('').forEach(element => (element !== '!' && element !== ' ') ? codeArr.push(String.fromCharCode(formula(element.charCodeAt(0)))) : codeArr.push(element));
  
  return codeArr.join('');
};

console.log(rot13("SERR CVMMN!"));