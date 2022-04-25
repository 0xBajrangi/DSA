
function runProgram(input) {
     //format the input and call the function to execute
     
    input = input.trim().split("\n").map(Number);
    let n = input[0];
  arr = [];
  for (let i = 1; i <= n; i++){
    arr.push(input[i]);
  }
  let q = input[n+1];
  arr = arr.sort((a, b) => a - b)
  let p = [];
  let i = n + 2;
  while ( i< input.length) {
    p.push(input[i]);
    i++;
  }
  // console.log(n,arr,q,p)
  for (let i = 0; i < q; i++){
    findPower(n, arr, p[i]);
  }

    
    

 
  
}
function findPower(n, arr, p) {
  let high = n;
  let low = 0;
  while (high > low) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] <= p) {
      low = mid+1
    } else {
      high  = mid
     }
  }

  let sum = 0;
  for (let i = 0; i < high; i++){
    sum+=arr[i]
  }
  console.log(high, sum)
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`7
1 
2 
3 
4 
5 
6 
7
3
3
10
1`);
  
  
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