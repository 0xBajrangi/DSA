
function runProgram(input) {
     //format the input and call the function to execute
    
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let n = +int[++line].trim()
        let arr = int[++line].trim().split(" ").map(Number);
        findStrength(n, arr);
    }
}
function findStrength(n, arr) {
    let stack = [];
    let ans = [];
    for (let i =0; i < n; i++){
        if (stack.length == 0) {
            ans.push(1);
        } else if (arr[i] < stack[stack.length - 1][0]) {
            ans.push(i - stack[stack.length - 1][1]);
        } else if (arr[i] >= stack[stack.length - 1][0]) {
            while (stack.length > 0 && arr[i] >= stack[stack.length - 1][0]) {
                stack.pop();
            }
            if (stack.length == 0) {
                ans.push(i+1);
            } else {
                ans.push(i - stack[stack.length - 1][1]);

            }

        }
        stack.push([arr[i],i])
    }
    console.log(ans.join(" "));
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`2
7
100 80 60 70 60 75 85
5
3 5 0 9 8`);
  
  
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