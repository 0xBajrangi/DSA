
function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr, m, ...query] = input.trim().split("\n");
    n = +n;
    arr = arr.trim().split(" ").map(Number);
    arr = arr.sort((a, b) => a - b);
    m = +m;
    let q;
    for (let i = 0; i < m; i++){
        q = +query[i];
        soaps(n, arr, q);
    }
 
  
}
  
function soaps(n, arr, q) {
    let high = n;
    let low = 0;
    // console.log(arr,q);
    while (high > low) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] >= q) {
            high = mid;
        } else {
            low = mid +1;
        }
    }
    console.log(low);
}
if (process.env.USERNAME === "Acer") {
  
    runProgram(`5
1 4 10 5 6
4
2
3
5
11`);
  
  
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