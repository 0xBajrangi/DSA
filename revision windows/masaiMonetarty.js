
function runProgram(input) {
     //format the input and call the function to execute
    let int = input.trim().split("\n").map(Number);
    let dp = new Array(int.length).fill(null)
    for (let i = 0; i < int.length; i++){
        console.log(monetary(int[i]));
    }
    function monetary(n) {
        if (n == 0) {
            return 0;
        }
        if (dp[n]) return dp[n]
        dp[n] = Math.max(n, monetary(Math.floor(n / 2)) + monetary(Math.floor(n / 3)) + monetary(Math.floor(n / 4)))
        return dp[n]
    }
}

if (process.env.USERNAME === "Acer") {
  
    runProgram(`12
2`);
  
  
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