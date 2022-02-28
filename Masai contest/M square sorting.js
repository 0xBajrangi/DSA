function SquareSort(n, arr) {
    
    for (let i = 0; i < n; i++){
        for (let j = 0; j < arr.length - 1 - i; j++){
            if (Math.pow(arr[j], 2) > Math.pow(arr[j + 1], 2)) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;

}
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let n = Number(int[++line]);
        let arr = int[++line].split(" ").map(Number);
        let ans = SquareSort(n,arr);
        console.log(ans.join(" "))
    }
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`1
5
-2 3 1 -4 6`);
  
  
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