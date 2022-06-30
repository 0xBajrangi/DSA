
function runProgram(input) {
     //format the input and call the function to execute
 
    let [test, ...int] = input.trim().split('\n');
    test = +test;
    let line = -1;
    while (test--) {
        let n = +int[++line].trim();
        if (NicksandHacks(n,1)) {
           console.log('Yes');
        } else {
            console.log('No');
       }
    }
  
}
function NicksandHacks(y, amt) {
    if (amt == y) return true;

    if (amt > y) return false;
    return NicksandHacks(y, amt * 10) || NicksandHacks(y, amt * 20);

  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`5
1
2
10
25
200`);
  
  
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