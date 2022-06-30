
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let [n, k] = int[++line].trim().split(" ").map(Number);
        let arr = int[++line].trim().split(" ").map(Number);
        count(n, k, arr);
    }
  
}
function count(n, k, arr) {
    max = 0;
    function subset(n, k, arr, curr, count,sub) {

        if (count >= k) {
            max++;
        }
        if (curr == n) {
            return;
        }
        for (let i = curr; i < n; i++){
            sub.push(arr[i]);
            if (arr[i] % 2 == 1) count++;
            subset(n, k, arr, i + 1, count,sub);
            sub.pop();
            if (arr[i] % 2 == 1) count--;
        }
          
    }
    subset(n, k, arr, 0, 0, []);
    console.log(max);
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`2
4 2
4 3 2 1
2 1
2 3`);
  
  
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