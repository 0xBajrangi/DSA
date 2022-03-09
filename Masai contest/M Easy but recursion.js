const sum = (n, arr) => {
    if (n-1 < 0) return 0;
    return arr[n-1] + sum(n-1,arr)
}
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let n = Number(int[++line]);
        let arr = int[++line].trim().split(" ").map(Number);
        let ans = sum(n, arr)
        console.log(ans)
    }
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`3
5
6 3 8 2 -4
5
-10 -7 10 2 -2
5
-4 -5 6 -3 9`);
  
  
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