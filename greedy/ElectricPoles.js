
function runProgram(input) {
    //format the input and call the function to execute
    let [n, ...int] = input.trim().split("\n");
    n = +n;
    let count = 0;
    while (count < 2 * n) {
        let a = +int[count++];
        let arr = int[count++].trim().split(" ").map(Number);
        findPower(a, arr);
    }

 
  
}
function findPower(n, arr) {
    arr = arr.sort((a, b) => a - b);
   
    let poles  = 0
    for (let i = 1; i < n; i++){
        if (arr[i - 1] < arr[i]) {
            poles++;
        }
    }
    console.log(5*poles)
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`4
3
1 2 3
5
1 2 3 4 5
4
1 1 1 1
5
1 1 1 2 2`);
  
  
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