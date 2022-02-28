
function runProgram(input) {
     //format the input and call the function to execute
    let [number, digit] = input.trim().split(" ").map(Number);
    let count = 0;
    while (number > 0) {
        let last = number % 10;
        if (last === digit) {
            count++;
        }
        number = Math.floor(number / 10);
    }
    console.log(count)
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`124577 4`);
  
  
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