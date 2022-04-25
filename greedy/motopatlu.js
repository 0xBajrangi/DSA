
function runProgram(input) {
     //format the input and call the function to execute
    let int = +input.trim();
    let byFive = Math.floor(int / 5);
    let remainder = (int % 5 >=1)?1:0;
    console.log(byFive + remainder)

 
  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(``);
  
  
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