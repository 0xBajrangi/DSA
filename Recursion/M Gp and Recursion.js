const GpandRecursion = (n, r) => {
    if (n == 0) return 1;
    return 1 / Math.pow(r, n) + GpandRecursion(n - 1, r);
}

function runProgram(input) {
     //format the input and call the function to execute
 
    let [n, r] = input.split(" ").map(Number);
    let ans = GpandRecursion(n, r)
    console.log(ans.toFixed(4));
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`1 1`);
  
  
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