
function runProgram(input) {
     //format the input and call the function to execute
    const [n, arr] = input.trim().split('\n');
    n = +n;
    arr = ar.trim().split(" ").map(Number);
    
    let dp = [];
    function LIS() {
        
    }
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`9
10 22 9 33 21 50 41 60 80`);
  
  
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