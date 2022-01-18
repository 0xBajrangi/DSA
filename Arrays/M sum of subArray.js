function subArraySum(n, k, arr) {
    let sum = 0;
    let i = 0;
    let j = 0;
    while (i < n & j<n) {
        sum += arr[j];
        if (sum === k) {
            console.log("Yes");
            return
        } else if (sum > k) {
            i++;
            j = i;
            sum = 0;
        } else {
            j++;
        }
    }
    console.log("No")
}
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...inp] = input.trim().split("\n");
   
    test = +test;
    let line = -1;
    while (test--) {
        let [n, k] = inp[++line].trim().split(" ").map(Number);
        let arr = inp[++line].trim().split(" ").map(Number);
        // console.log(n,k,arr)
        subArraySum(n, k, arr);
    }
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`3
5 3
1 2 1 3 4
4 5
1 2 1 3
3 2
1 2 1`);
  
  
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