// generate Power set
let solution = []
const powerSet = (set, array, fixedPointer) => {
  solution.push([...set])
  if (fixedPointer === array.length) return;
  for (let i = fixedPointer; i < array.length; i++) {
    set.push(array[i]);
    powerSet(set, array, i + 1, solution);
    set.pop();
  }
}
powerSet([],[1,2,3],0)
console.log(solution)