
function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr, q, ...query] = input.split("\n");
    n = +n;
    arr = arr.split(" ").map(Number).sort((a, b) => a - b);
    q = +q;
    for (let i = 0; i < q; i++){
        let curr = query[i].split(" ").map(Number);
        if (curr[0] === 0) {
            // cann not less than x
            let high = n;
            let low = 0;
            let k = curr[1];
            while (high > low) {
                let mid = low + Math.floor((high - low) / 2);
                if (arr[mid] >= k) {
                    high = mid;
                } else {
                   low = mid + 1;
                }
            }
            console.log( n - high)

        } else {
            // greater than x
            let high = n;
            let low = 0;
            let k = curr[1];
            while (high > low) {
                let mid = low + Math.floor((high - low) / 2);
                if (arr[mid] <= k) {
                    low = mid + 1;
                } else {
                    high = mid;
                }
            }
            console.log(n - high)
        }
    }
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`4
1 2 3 4
3
0 5
1 3
0 3`);
  
  
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