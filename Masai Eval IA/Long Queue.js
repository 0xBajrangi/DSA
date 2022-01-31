
function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr] = input.trim().split("\n");
    n = +n;
    arr = arr.trim().split(" ").map(Number);
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]<arr[i-1]) count++;
    }
    console.log(count+1)
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`6
1 2 4 3 5 8`);
  
  
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