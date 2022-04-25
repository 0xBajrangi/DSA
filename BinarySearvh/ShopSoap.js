
function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr, query, ...qrr] = input.trim().split("\n");
    n = +n;
    arr = arr.split(" ").map(Number);
    query = +query;
    qrr = qrr.map(Number);
    arr = arr.sort((a, b) => a - b);

    for (let i = 0; i < query; i++){
        
        findSolution(n, arr, qrr[i]);


    }
 
  
}
function findSolution(n, arr, query) {
    let high = n;
    let low = 0;
    while (high > low) {
        let mid = low + Math.floor((high - low) / 2);

        if (arr[mid] >= query) {
            high = mid;
        } else {
            low = mid + 1;
        }

    }
    console.log(high)
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