
function runProgram(input) {
     //format the input and call the function to execute
    let time = Number(input.trim());
    let hrs = Math.floor(time / 60);
    let min = time % 60;
    
    console.log(`${hrs}${hrs===1?"hr":"hrs"} ${min==0?"00":min}mins`)
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`120`);
  
  
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