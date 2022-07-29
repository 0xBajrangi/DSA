
function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr] = input.trim().split('\n');
    n = +n;
    arr = arr.trim().split(" ").map(Number);
    
  let dp = new Array(n).fill(1);
    function LIS(n,arr) {
      for (let i = 0; i < n; i++){
        for (let j = i; j < n; j++){
          if (arr[i] < arr[j]) {
            dp[j] = Math.max(dp[j], dp[i] + 1);
          }
        }
      }
  }
  LIS(n,arr)
  console.log(dp[n-1])
  
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