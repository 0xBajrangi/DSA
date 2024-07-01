function threeNumberSum(array, targetSum) {
  // Write your code here.
  let arr = [];
  const sArray = array.sort((a, b) => a - b);
  for (let i = 0; i < sArray.length; i++) {
    let requiredSum = targetSum - sArray[i];
    let start = i + 1;
    let end = sArray.length - 1;
    while (start < end) {
      if (requiredSum == sArray[start] + sArray[end]) {
        arr.push([sArray[i], sArray[start], sArray[end]])
        start++;
        end--;
      } else if (sArray[start] + sArray[end] > requiredSum) {
        end--;
      } else {
        start++;
      }
    }
  }
  return arr;
}


console.log(threeNumberSum([12,3,1,2,-6,5,-8,6],0))