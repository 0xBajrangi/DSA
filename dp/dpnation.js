const solc = require("solc");

function runProgram(input) {
     //format the input and call the function to execute
 let [test , ...arr] = input.trim().split('\n').map(Number)
    let line = -1;
    while (test--) {
        let n = arr[++line];
        console.log(sol(n));
    }
  
}
function sol(n) {
    let count = 0;
    while (true) {
        flag = false;
        for (let i = 1; i < n; i++){
            if (n % i === 0) {
                n = n - i;
                flag = true;
                count++;
                break;
            }
       
        }

        if (!flag) {
            if (count % 2 == 0) return false;
            else return true;
        }
                    
    }
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`2
3
2`);
  
  
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