
function runProgram(input) {
     //format the input and call the function to execute
    let [size, ...int] = input.split("\n");
    let stack = [];
    let queue = [];
    let line = -1;
    for (let i = 0; i < size; i++){
        
        let arr = int[++line].split(" ").map(Number);
        if (arr[0] === 1) {
    queue.push(arr[1]);
        } else if (arr[0] === 2) {
            stack.push(arr[1]);
        } else if (arr[0] === 3) {
            console.log(queue.length ===0?-1:queue[0]);
        } else if (arr[0] === 4) {
            console.log((stack.length ==0)?-1:stack[stack.length - 1]);

        } else if (arr[0] === 5) {
            let front = queue.shift();
            stack.push(front)
        }
       

    }
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`7
1 4
2 3
1 2
3
4
5
4`);
  
  
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