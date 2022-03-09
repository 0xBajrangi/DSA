const sumExistsOrNot = (n, j, arr, k, sub) => {
    
  
    let sum = sub.reduce((ac, el) => ac + el, 0);
    if (sum === k) {
        return "Yes";
    }
    if (sum > k) {
        return;
    }

    for (let i = j; i < n; i++){
        sub.push(arr[i]);
        let ans = sumExistsOrNot(n, i + 1, arr, k, sub);
        if (ans) {
            return true;
        }
        sub.pop();
    }




    
}

function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr, k] = input.split("\n");
    n = +n;
    arr = arr.split(" ").map(Number);
    k = +k;

    let ans = sumExistsOrNot(n, 0, arr, k, []);
    console.log(ans?"Yes":"No")


    
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`4
1 2 3 4
6`);
  
  
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