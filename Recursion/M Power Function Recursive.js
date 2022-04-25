function powerFunction(n, e) {
    if (e == 0) return 1;
    return n* powerFunction(n,e-1)
}
function runProgram(input) {
     //format the input and call the function to execute
    let [n, e] = input.trim().split(" ").map(Number);
 
console.log(powerFunction(n,e))
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`2 4`);
  
  
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