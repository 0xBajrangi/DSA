
function runProgram(input) {
     //format the input and call the function to execute
    let [ncr, arr] = input.trim().split("\n");
    let [n, c, r] = ncr.split(" ").map(Number);
    arr = arr.split(" ").map(Number)
 arr =    arr.sort((a, b) => a - b)
    let sum = 0
    for (let i = 0; i < c; i++){

        sum+=arr[i]
    }

   
    if (sum <= r) {
        console.log("Party")
    } else {
        console.log("Sad")
    }
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`5 3 24
6 4 21 20 13`);
  
  
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