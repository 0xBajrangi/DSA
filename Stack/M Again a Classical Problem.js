function againAClassicalProblem(str) {
    let obj = {
        "]": "[", 
        ")": "(", 
        "}":"{"
    }
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (stack.length === 0) {
            stack.push(str[i]);
        } else if (stack[stack.length - 1] === obj[str[i]]) {
            stack.pop();
        } else {
            stack.push(str[i]);
        }
    }
    console.log(stack.length === 0 ? "balanced" : "not balanced");
}
function runProgram(input) {
     //format the input and call the function to execute
 
    let [test, ...int] = input.trim().split('\n');
    test = +test;
    let line = -1;
    while (test--) {
        let str = int[++line].trim();
        againAClassicalProblem(str);
    }
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`3
{([])}
()
([]
`);
  
  
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }