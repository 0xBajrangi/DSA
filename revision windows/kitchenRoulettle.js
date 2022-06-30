
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split('\n');
    test = +test;
    let line = -1;
    while (test--) {
        let [n, k] = int[++line].trim().split(" ").map(Number);
        let taste = int[++line].trim().split(" ").map(Number);
        let random = int[++line].trim().split(" ").map(Number);
        if (possible(n, k, taste, random)) {
            console.log('YES');
        } else {
            console.log('NO');
        }
    }
  
}
function possible(n, k, taste, random) {
    let value = {}

    for (let i = 0; i < random.length; i++){
        value[taste[random[i] - 1]]  =1;
    }
    taste = taste.sort((a, b) => b - a);
    for (let i = 0; i < k; i++){
        if (value[taste[i]]) return true;
    }
    return false;

  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`2
10 9
7 8 4 8 8 7 6 3 6 2
8 5 6 7 10 4 2 9 1
4 4
6 3 3 9
4 3 1 2`);
  
  
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