
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = +test;
  let line = -1;
  while (test--) {
    let n = +int[++line];
    let arr = int[++line].trim().split(" ").map(Number);
     bananaGame(n, arr);
  }
  
}
function bananaGame(n, arr) {
  let x = 0;
  let y = arr.length - 1;
  let richard = Math.min(...arr);
  let rick = 2 * richard;
  while (y > x) {
    arr[x] -= rick;
    arr[y] -= richard;
    if (arr[x] <= 0) x++;
    if (arr[y] <= 0) y--;
  }
  console.log(x+1,y)
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`1
5
2 9 8 2 7`);
  
  
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