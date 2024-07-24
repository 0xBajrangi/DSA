function groupAnagrams(words) {
  // Write your code here.
  let map = new Map();
  for(let i = 0; i<words.length;i++){
    let currentSortedWord = words[i].split("").sort().join("");

    console.log(`🚀 ~ file: groupAnagram.js:7 ~ currentSortedWord👨🏻‍💻`, currentSortedWord);

    if(map.has(currentSortedWord)) map.set(currentSortedWord,[...map.get(currentSortedWord),words[i]])
    else map.set(currentSortedWord,[words[i]])
  }
return   Array.from(map.values())
  
}

let ans = groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"])

console.log(`🚀 ~ file: groupAnagram.js:16 ~ ans👨🏻‍💻`, ans);

exports.groupAnagrams = groupAnagrams;
