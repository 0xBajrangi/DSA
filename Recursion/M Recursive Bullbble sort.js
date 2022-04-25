function bubbleSort(arr,n,j) {
    if (j === n-1) {
        return arr;
     }
 
    for (let i = 0; i <= n-1-j; i++){
        if (arr[i] > arr[i + 1]) {

            [arr[i], arr[i + 1]] = [arr[i+1], arr[i ]]
        }
    }

    return bubbleSort(arr, n, j + 1);


}

function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr] = input.split("\n");
    n = +n;
    arr = arr.split(" ").map(Number);
    let ans = bubbleSort(arr, n, 0);
    console.log(ans.join(" "));
    
 
  
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