function subSequence(n, arr, sub,curr) {
    if (sub.length > 0) {
        console.log(sub.join(""))
    }
    for (let i = curr; i < n; i++){
        sub.push(arr[i])
        subSequence(n, arr, sub, i + 1);
        sub.pop();
    }
}
function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr] = input.trim().split("\n");
    n = +n;

    subSequence(n, arr,[], 0);
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`4
abcd`);
  
  
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