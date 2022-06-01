
function runProgram(input) {
     //format the input and call the function to execute
    let n = Number(input.trim());
    let dp = new Array(n + 1).fill(undefined);
  
    // dp[0] = 0;
    // dp[1] = 1;
    // dp[2] = 2;
    // dp[3] = 2;
    // dp[4] = 4
    function functionNumber(N) {
        if (N == 0) {
            return 1;
        } else if (N < 0) {
            return 0;
        }
    if(dp[N]!=undefined) return dp[N]
        dp[N] = functionNumber(N - 1) + functionNumber(N - 3) + functionNumber(N - 4); 
        return dp[N]
        // return dp[N]
    }
    functionNumber(n);
    console.log(dp[n])
  
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