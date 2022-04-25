
function runProgram(input) {
     //format the input and call the function to execute
    let [mn, arr] = input.trim().split("\n");
    let [n, m] = mn.split(" ").map(Number);
    arr = arr.split(" ").map(Number);
    let total_time = arr.reduce((ac, el) => ac + el, 0);
    let dummy = arr.sort((a, b) => a - b);
    
    let x = Math.floor(n / m) * dummy[n - 1];
    console.log(x)
    
 
  
}
function BinarSearch(n, m, arr, dummy) {
      
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`5 3
1 2 2 1 3`);
  
  
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