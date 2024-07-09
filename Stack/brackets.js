function balancedBrackets(string) {
  // Write your code here.
  let map = {
    ')': '(',
    ']': '[',
    '}': '{',
    '(': 1,
    '[': 1,
    '{': 1
  }

  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if (stack[stack.length - 1] === map[string[i]]) {
      stack.pop();
    } else {
      if (map[string[i]] != undefined) {
        stack.push(string[i])
      }
    }
  }

  return stack.length === 0
}

console.log(balancedBrackets("(a("))

exports.balancedBrackets = balancedBrackets;