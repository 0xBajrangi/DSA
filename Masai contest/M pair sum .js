
function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr] = input.split("\n").map((el)=>el.split(" ").map(Number));
    n = n[0];

    let count = 0;

    let i = 0;
    let j = 1;
    while (j < n) {
        let sum = arr[i] + arr[j];
        if (sum % 2 === 0) count++;
        i++;
        j++;
    }
    console.log(count);
    
    








  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`5
1 2 3 4 5`);
  
  
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