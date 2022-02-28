function factorial(n) {
    // base case for
    if (n === 1 || n == 0) {
        return 1;
    }

    return n * factorial(n-1)
    
}

function runProgram(input) {
     //format the input and call the function to execute
    let n = Number(input);

    let ans = factorial(n);
    console.log(ans)
  
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`5`);
  
  
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