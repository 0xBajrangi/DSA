function findMissing(arr) {
    let low = 0;
    let high = arr.length;
    while (high > low) {
        let mid = Math.floor((high + low) / 2);
        if (arr[mid] > mid) {
            high = mid;
        } else {
            low = mid+1
        }
    }
   console.log(high)
}
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...arr] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let letters = arr[++line].trim().split(" ").map(Number);
        findMissing(letters)
    }
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`2
0 1 2 4 5 6 9 10 11 12 
0 1 2 3 5 7 8 9 10 11 `);
  
  
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