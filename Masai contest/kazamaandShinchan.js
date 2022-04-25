
function runProgram(input) {
     //format the input and call the function to execute
    let  [n, arr, k] = input.trim().split("\n");
   
    n = +n;
    arr = arr.split(" ").map(Number);

    k = +k;
    console.log(binarySearch(n,arr,k))

 
  
}
  
function binarySearch(n, arr, k) {

    let high = n;
    let low = 0;


    while (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] === k) {
            return mid;

        } else if (arr[mid] > k) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
}
if (process.env.USERNAME === "Acer") {
  
    runProgram(`4
1 3 5 6
2`);
  
  
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