
function runProgram(input) {
     //format the input and call the function to execute
    let n = Number(input);
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4
    for (let i = 4; i <= n; i++){
        dp[i] = dp[n - 1] + dp[n - 2] + dp[n - 3];
    }
    console.log(dp[n])
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`4`);
  
  
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