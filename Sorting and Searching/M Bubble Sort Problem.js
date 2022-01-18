function bubbleSort(n, arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr.join(' '));
}


function runProgram(input) {
     //format the input and call the function to execute
      
    let [n, arr] = input.split("\n");
    n = +n;
    arr = arr.split(" ").map(Number);
    bubbleSort(n, arr);
  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`5
3 5 0 9 8`);
  
  
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