function findPair(n, k, arr) {
    
    let obj = {};
    obj[arr[0]] = 1;
    let ans = -1;

    for (let i = 1; i < n; i++){
        let find = k - arr[i];
        if (obj[find]) {
            ans = 1;
            break;
        } else {
            obj[arr[i]] = 1;
        }
    }
    console.log(ans)


}
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...output] = input.trim().split("\n");
    test = +test;
    
    let line = -1;
    while (test--) {

        let [n, k] = output[++line].trim().split(" ").map(Number);
   
        let arr = output[++line].trim().split(" ").map(Number);
       

         findPair(n, k, arr);
    }

  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`1
5 2
3 4 0 2 7`);
  
  
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

Such Pair Returns Ended
Description

For each test case, you are given N integers and K, your task is to write a program that prints "1" (without quotes) if there are 2 integers present in the array whose sum is K. Else print "-1" (without quotes).


Input
10^6Input Format :

First line contains T, no of test cases.

First line of each test case contains 2 space separated integers: N & K

Second line of each test case contains **N** space separated integers

Constraints :

1 <= T <= 10

1 <= N <=1000000

1 <= abs(A[i]) <=10^6<= abs(K) <= 2*10^6




Output
Output 1/-1 depending on the condition for each test case on new line


Sample Input 1 

1
5 2
3 4 0 2 7

Sample Output 1

1
*/ 