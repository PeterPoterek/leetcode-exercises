/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
  let result = "";
  let count = 1;

  for (let i = 1; i <= word.length; i++) {
    if (i === word.length || word[i] !== word[i - 1] || count === 9) {
      result += `${count}${word[i - 1]}`;
      count = 1;
    } else {
      count++;
    }
  }

  return result;
};

console.log(compressedString("abcde")); // "1a1b1c1d1e"
console.log(compressedString("aaaaaaaaaaaaaabb")); // "9a5a2b"
console.log(compressedString("mrm")); // "1m1r1m"
