// /**
//  * @param {string} s
//  * @return {number}
//  */

var scoreOfString = function (s) {
  let result = 0;

  const asciiArr = s.split("").map((char) => {
    return char.charCodeAt();
  });

  for (let i = 0; i < asciiArr.length; i++) {
    if (i + 1 < asciiArr.length) {
      const r = Math.abs(asciiArr[i] - asciiArr[i + 1]);

      result += r;
    }
  }

  return result;
};

console.log(scoreOfString("hello"));
console.log(scoreOfString("zaz"));
