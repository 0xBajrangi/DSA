
function runProgram(input) {
     //format the input and call the function to execute
    let [n, ...int] = input.trim().split("\n");
    n = +n;
    let arr = [];
    let i = 0;
    for (; i < n; i++){
        arr.push(+int[i])
    }
    arr = arr.sort()
    let k = +int[i];
    i++;
    let power = [];
    for (; i < int.length; i++){
        power.push(+int[i])
    }
    for (let i = 0; i < k;i++)
        sol(n, arr, power[i])
    
    
 
  
}
function sol(n, arr, power) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < n; i++){
        if (power >= arr[i]) {
            count++;
            sum+=arr[i]
        }
    }
    console.log(count , sum)
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