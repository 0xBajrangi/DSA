function commonCharacters(strings) {
  // Write your code here.

  let map = new Map();
  for (let i = 0; i < strings.length; i++) {
    let set = new Set(strings[i]);
    for (let value of set) {
      if (!map.has(value)) map.set(value, 1);
      else map.set(value, map.get(value) + 1)
    }

  }
  let ans = []
  for (let value of map) {
    if (value[1] === strings.length) {
      ans.push(value[0])
    }
  }

  return ans

}

commonCharacters(["abc", "bcd", "cbad"])

// Docom not edit the line below.
exports.commonCharacters = commonCharacters;
