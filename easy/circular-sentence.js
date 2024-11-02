/**
 * @param {string} sentence
 * @return {boolean}
 */

var isCircularSentence = function (sentence) {
  const wordsArr = sentence.split(" ");

  let a = "";
  let b = "";

  for (let i = 0; i < wordsArr.length; i++) {
    if (i === wordsArr.length - 1) {
      a = wordsArr[i][wordsArr[i].length - 1];
      b = wordsArr[0][0];

      //   console.log(wordsArr[i]);
      //   console.log(wordsArr[0]);

      //   console.log(a, b);
      //   console.log("~~~~~~~~");

      if (a === b) {
        return true;
      } else {
        return false;
      }
    }

    a = wordsArr[i][wordsArr[i].length - 1];
    b = wordsArr[i + 1][0];

    // console.log(wordsArr[i]);
    // console.log(wordsArr[i + 1]);
    // console.log(a, b);

    // console.log("==============");

    if (a !== b) return false;
  }

  return true;
};

console.log(isCircularSentence("leetcode exercises sound delightful")); //true
console.log(isCircularSentence("eetcode")); //true
console.log(isCircularSentence("Leetcode is cool")); //false
console.log(isCircularSentence("Leetcode")); //false
