
function runProgram(input) {
     //format the input and call the function to execute
 
    let [nq, arr, ...query] = input.trim().split("\n");
   
    let [n, q] = nq.trim().split(" ").map(Number);
    arr = arr.trim().split(" ").map(Number);
    let line = -1;
// console.log(arr)
    while (q--) {
        let [left, right, value] = query[++line].trim().split(" ").map(Number);
        let count = 0;
        for (let i = left; i <= right; i++){
            
            if (arr[i-1] === value) count++;
        }
        console.log(count);
    }
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`6 2
1 5 3 2 3 2 
3 6 2
4 4 2
`);
  
  
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