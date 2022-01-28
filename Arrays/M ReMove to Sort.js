function removeToSort(n, arr) {
    
    let sArr = [];
    sArr.push(arr[0]);
    for (let i = 1; i < arr.length; i++){
        if (sArr[sArr.length - 1] <= arr[i]) sArr.push(arr[i]);
    }
    console.log(sArr.join(" "));


}

function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr] = input.trim().split("\n");
    n = +n;
    arr = arr.trim().split(" ").map(Number);

    removeToSort(n, arr);
 
  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`10
1 2 4 3 5 7 8 6 9 10`);
  
  
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





/*
Remove to Sort Ended
Description

Given an array of integers of length n, the task is to remove elements from the array to make array sorted. That is, remove the elements which do not follow an increasing order.


Input
Input Format

First line Consists of integer n.

Second line consists of n integers separated by spaces.

Constraints

1 <= n <= 10^6


Output
Print the sorted array.


Sample Input 1 

10
1 2 4 3 5 7 8 6 9 10
Sample Output 1

1 2 4 5 7 8 9 10
*/ 