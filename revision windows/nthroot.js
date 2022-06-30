
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split('\n');
    test = +test;
    let line = -1;
    while (test--) {
        let [n, m] = int[++line].trim().split(" ").map(Number);
        console.log(findroot(n, m));
    }
  
}
function findroot(n, m) {
    let high = m;
    let low = 1;
    while (high > low) {
        let mid = low + Math.floor((high - low) / 2);
        if (mid ** n == m) {
            return mid;
        } else if (mid ** n > m) {
          high = mid-1
        } else {
            low = mid+1;
        }
    }
    return (high ** n > m) ? high - 1 : high ;
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`3
2 9
6 4096
3 126`);
  
  
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