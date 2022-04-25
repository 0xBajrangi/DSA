
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let [n, k] = int[++line].trim().split(" ").map(Number);
        let arr = int[++line].trim().split(" ").map(Number);
        minimumBoats(n, k, arr);
    }

  
}
function minimumBoats(n, k, arr) {
    arr = arr.sort((a, b) => a - b);
    let boat = 0;
    let boatCount = 0;
    // console.log(arr)
    for (let i = 0; i < n; i++){
        boat += arr[i];

        if (boat > k) {
            boatCount++;
            boat = arr[i];
            if (i == n - 1) {
                boatCount++;
            }
        } else if (boat == k) {
            boat = 0;
            boatCount++;
        }
        // console.log(boat,arr[i],k,boatCount)
    }
    console.log(boatCount)


  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`2
4 5
3 5 3 4
4 3
1 2 2 3`);
  
  
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