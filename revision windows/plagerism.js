let permutation = [];
function runProgram(input) {
     //format the input and call the function to execute
    let [n, lr] = input.trim().split('\n');
    n = +n;
    let [l, r] = lr.split(" ").map(Number);

    let arr = [];
    for (let i = 1; i <= n; i++){
        arr.push(i);
    }
    perAll(n, arr, 0)
    let sum = 0;
    for (let i = 0; i < permutation.length; i++){
        let local = 0;
        for (let j = l; j <= r; j++){
        
            local += Number(permutation[i][j])
        }
        // console.log(permutation[i],local);
        if(local%2==1) sum++
    }
    console.log(sum);
  
  }
function perAll(n, arr, curr) {
    if (n === curr) {
        permutation.push(arr.join(""))
        return;
        
    } else {
        
        for (let i = curr; i < n; i++){
            [arr[curr], arr[i]] = [arr[i], arr[curr]];
            perAll(n, arr, curr + 1);
            [arr[curr], arr[i]] = [arr[i], arr[curr]];
    
        }
    }
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`3
0 1`);
  
  
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