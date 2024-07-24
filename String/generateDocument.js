function generateDocument(characters, document) {
  // Write your code here.



  if (document === "") return true;
  let map = new Map();
  let docMap = new Map();
  for (let character of characters) {
    if (map.has(character)) map.set(character, map.get(character) + 1)
    else map.set(character, 1)
  }
  for (let character of document) {
    if (docMap.has(character)) docMap.set(character, docMap.get(character) + 1)
    else docMap.set(character, 1)
  }

  for (let value of docMap) {

  }
  return false;
}

// Do not edit the line below.
exports.generateDocument = generateDocument;
