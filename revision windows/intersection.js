
function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr1, arr2] = input.trim().split("\n");
    n = +n;
    arr1 = arr1.trim().split(" ").map(Number).sort((a, b) => a - b);
    arr2 = arr2.trim().split(" ").map(Number).sort((a, b) => a - b);

    console.log(common(n,arr1,arr2));
 
  
  }
function common(n, arr1, arr2) {
    let i = 0, j = 0;
    while (i < n && j < n) {
        if (arr1[i] > arr2[j]) {
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            return arr1[i]
        }
    }
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`3
4 5 7
9 2 5`);
  
  
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