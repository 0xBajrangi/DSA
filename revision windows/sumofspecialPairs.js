
function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr] = input.trim().split("\n");
    n = +n;
    arr = arr.trim().split(" ").map(Number);

    let sum = 0;
    for (let i = 0; i < n; i++){
        for (let j = i + 1; j < n; j++){
            // console.log(i,j,prime(j-i))
            if (prime(j - i)) {
                sum += Math.abs(arr[j]-arr[i]);
            }
        }
    }
  console.log(sum)
}
function prime(n) {
    let count = 0;
    for (let i = 1; i <= n; i++){
        if (n % i == 0) count++;
    }
    if (count === 2) return true;
    return false;
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`6
1 2 3 5 7 12`);
  
  
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