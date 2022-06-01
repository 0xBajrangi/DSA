
function runProgram(input) {
     //format the input and call the function to execute
    let [nm, coins] = input.trim().split('\n');
    let [n, value] = nm.trim().split(" ").map(Number);
    coins = coins.split(" ").map(Number);
    function minNumberCoins(coins, value) {
        if (value == 0) {
            return 1;
        }
        if (value < 0) return 0;

        if (dp[n]) return dp[n];
        let min = Infinity;
    }
  
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