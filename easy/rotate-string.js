/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  let shiftedS = s;

  let firstChar = "";

  for (let i = 0; i < s.length; i++) {
    if (shiftedS !== goal) {
      firstChar = shiftedS[0];
      shiftedS = shiftedS.slice(1);
      shiftedS = shiftedS + firstChar;
    }
  }

  console.log(shiftedS === goal);

  return shiftedS === goal;
};

rotateString("abcde", "cdeab"); //true
rotateString("abcde", "abced"); //false
