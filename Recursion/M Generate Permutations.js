let ans = [];
const permutation = (n, arr, j) => {
   
    if (j == n) {
        ans.push(Number(arr.join(""))); 

        return;
    }

    for (let i = j; i < n; i++) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
        permutation(n, arr, j+1);
        [arr[j], arr[i]] = [arr[i], arr[j]];   
    }

}

function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr] = input.split("\n");
    n = +n;
    arr = arr.split(" ").map(Number);

    permutation(n, arr, 0);
    ans = ans.sort((a, b) => a - b).map(el => el.toString().split("").join(" "));
    for (let el of ans) {
        console.log(el)
    }
     

    
    
    

  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`3
1 2 3`);
  
  
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