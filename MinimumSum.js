function findMinSum(n, k, arr) {
    
    let sum = 0;
    let min = Infinity;
    let i = 0, j = 0;
    while (j < arr.length) {
        sum += arr[j];
        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            min = Math.min(min, sum);
            sum -= arr[i];
            i++;
            j++;
        }
    }
    
console.log(min)
}

function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.split("\n");
    test = +test;
    let line = -1;
    while (test--) {

        let [n, k] = int[++line].trim().split(" ").map(Number);

        let arr = int[++line].split(" ").map(Number);
        findMinSum(n,k,arr);

    }
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`2
5 3
9 9 -5 9 5 
5 4
2 7 6 2 -5`);
  
  
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