
function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr, ...query] = input.trim().split("\n");
    n = +n;
    arr = arr.trim().split(" ").map(Number).sort((a,b)=>a-b);
  
    query = query.map(Number);
    for (let i = 1; i < query.length; i++){
        console.log(upperBound(arr, query[i]));
    }
    function upperBound(arr, k) {
        let high = arr.length;
        let low = 0;

        while (high > low) {
            let mid = low + Math.floor((high - low) / 2);
           
            if (arr[mid] <= k) {
                low = mid + 1;
            } else {
                high = mid
            }
        }
    return low===arr.length?-1:arr[high]
    }
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`10
13 89 81 66 81 63 71 76 73 81
2
90
15`);
  
  
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