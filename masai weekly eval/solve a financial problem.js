const financialProblem = (n, arr) => {
    let stack = [];
    let index = [];

    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        if (stack.length === 0) {
            ans.push(1);
        } else if (stack[stack.length - 1] > arr[i]) {
            ans.push(i - index[index.length - 1]);
        } else if (stack[stack.length - 1] <= arr[i]) {
            while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
                stack.pop();
                index.pop();
            }
            if (stack.length ==0) {
                ans.push(i+1)
            } else {
                ans.push(i - index[index.length - 1]);
            }
        }
        stack.push(arr[i])
        index.push(i)
    }
    return ans;


}
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let n = +int[++line].trim();
        let arr = int[++line].split(" ").map(Number);
        let ans = financialProblem(n, arr);
        console.log(ans)
    }
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`2
6
1 1 1 1 1 10
6
100 60 70 65 80 85`);
  
  
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