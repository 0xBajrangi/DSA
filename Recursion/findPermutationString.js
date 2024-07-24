function getPermutations(array) {
  // Write your code here.
  let solution = [];
  const findPermuation = (array, fixedPointer) => {

    if (fixedPointer === array.length) {
      solution.push([...array])
    }
    for (let i = fixedPointer; i < array.length; i++) {
      [array[i], array[fixedPointer]] = [array[fixedPointer], array[i]]
      findPermuation(array, fixedPointer + 1);
      [array[i], array[fixedPointer]] = [array[fixedPointer], array[i]]
    }
  }
  findPermuation(array, 0)
  return solution
}

// Do not edit the line below.
console.log(getPermutations([1, 2, 3]))
exports.getPermutations = getPermutations;
