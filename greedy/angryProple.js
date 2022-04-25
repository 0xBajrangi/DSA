
function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr] = input.split("\n");
    n = +n;
    arr = arr.split(" ").map(Number).sort((a, b) => a - b);
    // making pair
    let pair = []
    for (let i = 0; i < arr.length-1; i++) {
        if (i == 0) {
            pair.push([arr[i], arr[i + 1]], [arr[i], arr[i + 2]]);
        } else if (i == arr.length -2) {
            pair.push([arr[i], arr[i + 1]]);
        } else {
            pair.push([arr[i], arr[i + 2]]);
        }
    }
    let max = 0;
    for (let i = 0; i < pair.length; i++) {
        max = Math.max(max, Math.abs(pair[i][0]-pair[i][1]));
    }
    console.log(max)
    
    
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`4
5 10 6 8`);
  
  
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