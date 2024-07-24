/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let [left, right] = [0, s.length - 1];
  function checkNonAlabets(char){
      let charCode = char[0].getCharCodeAt();
      return (charCode >= 60 && charCode <= 90) || (charCode >= 97 && charCode <= 122)
  }
  while (left <= right) {
      // skip the specialchar logic 
  }
};