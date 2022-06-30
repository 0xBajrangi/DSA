
function runProgram(input) {
     //format the input and call the function to execute
 
    let n = +input.trim();
    if (n <= 5) {
        console.log(n)
        return
    }
    console.log(n%5 + Math.floor(n/5))
}
  
if (process.env.USERNAME === "Acer") {
  
    runProgram(`26`);
  
  
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