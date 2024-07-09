// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array) {
  // Write your code here.
  function isSpecial(value) {
    return Array.isArray(value)
  }
  function getProductArray(curr, depth, currArray) {
    if (curr === currArray.length) {
      return 0
    }
    let ans = currArray[curr]
    if (isSpecial(currArray[curr])) {
      ans = (depth + 1) * getProductArray(0, depth + 1, currArray[curr])
    }


    return ans + getProductArray(curr + 1, depth, currArray);

  }

  return getProductArray(0, 1, array)


}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]))

// Do not edit the line below.
exports.productSum = productSum;
