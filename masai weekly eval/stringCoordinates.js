
function runProgram(input) {
     //format the input and call the function to execute
    let [n, str] = input.trim().split("\n");
    let x = 0;
    let y = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "u") {
            x += 1;
        } else if (str[i] === "d") {
            x-= 1
        } else if (str[i] === "r") {
            y += 1;
        } else {
            y -= 1;
        }
    }
    console.log(x,y)
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`5
ulrdr`);
  
  
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