function findSum(arr) {
    if (arr.length == 2) {
        return Math.abs(arr[0] - arr[1]);
    }

    return Math.abs(arr[0] - arr[1]) + findSum(arr.slice(1));
}
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");

    test = +test;
    let line = -1;
    while (test--) {

        let n = Number(int[++line]);
        let arr = int[++line].trim().split(" ").map(Number);
        // console.log(n, arr)
        
        let sum = findSum(arr);
        console.log(sum)
        
    }
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`2
3
1 5 2
5
3 5 6 1 8`);
  
  
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