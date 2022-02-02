
function runProgram(input) {
     //format the input and call the function to execute
  let [test, ...int] = input.trim().split("\n");
  test = +test;
  let line = -1;
  let stack = [];
  while (test--) {
    
    let query = int[++line].trim().split(" ");
    // console.log(query)
    // console.log(...stack)
    if (query[0] === "push") {
         stack.push(Number(query[1]));      
    } else if (query[0] == "pop") {
      stack.pop();
    } else {
      console.log(Math.min(...stack))
    }

  }
    
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`8
push 5
push 3
push 1
getMin
pop
getMin
pop
getMin`);
  
  
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