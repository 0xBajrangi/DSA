
function runProgram(input) {
     //format the input and call the function to execute
    let str = input.trim();
    let ans = findlength(str, 0);
    function findlength(str, index) {
        if (str[index] === undefined) return index;
        return findlength(str, index + 1);
    }
    console.log(ans);
 
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`masaischool`);
  
  
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