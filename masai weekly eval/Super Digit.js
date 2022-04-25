
const superDigit = (n) => {
    if (n < 10) return n;
    let digitSum = 0;
    for (let i = 0; i < n.length; i++){
        digitSum += Number(n[i]);
    }
    
    return superDigit(digitSum.toString());
}
function runProgram(input) {
     //format the input and call the function to execute
 let [n,...arr] = input.trim().split("\n")
    n = +n;
    let line = -1;
    while (n--) {
        let N = arr[++line];
        
        console.log(superDigit(N))
    }

  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`3
45
8
186`);
  
  
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