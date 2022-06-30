
function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr] = input.trim().split('\n');
    n = +n;
    arr = arr.split(" ").map(Number);
    let subarr = [];
    for (let i = 0; i < arr.length; i++){
        if (i == 0) subarr.push(arr[i]);
        else if (subarr[subarr.length - 1] > arr[i]) {
            subarr.push(arr[i]);
        } else {
            
        }
    }
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`10
-1 0 1 2 3 10 9 7 6 4`);
  
  
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