function twoSortedArrays(n, arr1, arr2) {
    
    let i = 0;
    let j = n - 1;
    let ans = [];
    while (i < n && j >= 0) {
        if (arr1[i] === arr2[j]) {
            ans.push(arr1[i]);
            i++;
            j--;
        } else if (arr1[i] > arr2[j]) {
            j--;
        } else {
            i++;
        }
    }
    console.log(ans.length)

}
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let n = Number(int[++line]);
        let arr1 = int[++line].split(" ").map(Number);
        let arr2 = int[++line].split(" ").map(Number);
        twoSortedArrays(n,arr1,arr2);
    }
    
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`1
6
1 2 2 3 4 5
4 4 3 2 1 1`);
  
  
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