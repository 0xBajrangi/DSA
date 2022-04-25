
function runProgram(input) {
     //format the input and call the function to execute
    
    let [n, strength, count] = input.trim().split("\n");
    
    strength = strength.split(" ").map(Number).sort((a, b) => a - b);
    count = count.split(" ").map(Number).sort((a, b) => a - b);
    let flag = true;
    let i = 0;
    while (i < n) {
        if (strength[i] < count[i]) {
            flag = false;
            break;
        }
        i++
            
    }
    if (flag) {
        console.log("Yes");
    } else {
        console.log("No");
    }
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`5
123 146 454 542 456
100 328 248 689 200`);
  
  
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