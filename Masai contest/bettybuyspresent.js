
function runProgram(input) {
     //format the input and call the function to execute
    let [nm, ...value] = input.trim().split("\n");
    
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`3 11
1 5 7`);
  
  
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