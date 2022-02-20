function DiffOfK(n, k, arr) {
    let i = 0;
    let j = 0;
    while (i < n && j < n) {
        if (i == j) {
            i++;
        } else if (arr[i] - arr[j] === k) {
            console.log("Yes");
            return;
        } else if (arr[i] - arr[j] > k) {
            j++;
        } else {
            i++;
        }
    }
    console.log("No")
}
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let [n, k] = int[++line].trim().split(" ").map(Number);
        let arr = int[++line].trim().split(" ").map(Number);

        DiffOfK(n, k, arr);

    }
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`2
5 3
1 2 3 4 5
5 8
1 2 3 4 5 `);
  
  
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