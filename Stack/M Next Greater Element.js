function nextGreaterElement(n, arr) {
    
    let stack = [];
    let ans = [];

    for (let i = n - 1; i >= 0; i--){
        if (stack.length == 0) {
            ans.push(-1);

        } else if (stack[stack.length - 1] > arr[i]) {
            ans.push(stack[stack.length - 1]);
        } else {
            while (stack.length != 0 && stack[stack.length - 1] <= arr[i]) {
                stack.pop();
            }
            if (stack.length == 0) {
                ans.push(-1)
            } else {
                ans.push(stack[stack.length - 1])
            }
        }
        stack.push(arr[i]);
    }
console.log(ans.reverse().join(" "));

}
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let n = Number(int[++line].trim());
        let arr = int[++line].split(" ").map(Number);
        nextGreaterElement(n,arr)
    }
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`1
4
1 3 2 4`);
  
  
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