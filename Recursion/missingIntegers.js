
function runProgram(input) {
     //format the input and call the function to execute
    let arr = input.trim().split(" ").map(Number).sort((a, b) => a - b);
    
    function missing(arr) {
 
        for (let i = 0; i < arr.length; i++){
            if (arr[i] != i + 1) {
                return i + 1;
            }
        }
        
    }
    console.log(missing(arr))
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`4 5 1 3`);
  
  
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