const fs = require('fs')
console.log(fs);
let rotate = (arr) => {
    let temp = arr[0];
    for (let i = 1; i < arr.length; i++){
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = temp;
    return arr;
}
function runProgram(input) {
     //format the input and call the function to execute
    let [n, order, ideal] = input.split("\n");
    n = +n;
    order = order.split(" ").map(Number)
    ideal = ideal.split(" ").map(Number)

    let time_taken = 0;
    while (order.length > 0) {
        
        if (order[0] != ideal[0]) {
            order = rotate(order);
        } else if (order[0] == ideal[0]) {
            order.shift();
            ideal.shift();
        }

        time_taken += 1;


    }

    console.log(time_taken);


 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`3
3 2 1
1 3 2`);
  
  
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