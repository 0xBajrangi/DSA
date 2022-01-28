function smallerNeighbors(arr, n) {
    let ans = [];

    let stack = [];
    for (let i = 0; i < n; i++){
        if (stack.length == 0) {
            ans.push(-1);
        } else if (stack[stack.length - 1] < arr[i]) {
            ans.push(stack[stack.length - 1]);
        } else if (stack[stack.length - 1] >= arr[i]) {
            while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
                // console.log(stack[stack.length - 1])
                stack.pop();
            }
            if (stack.length == 0) {
                ans.push(-1);
            } else {
                ans.push(stack[stack.length - 1]);
            }
        }
        stack.push(arr[i]);
        // console.log(ans,arr[i],stack)
    }
    console.log(ans.join(" "))
}
function runProgram(input) {
     //format the input and call the function to execute
    
    let [n, arr] = input.trim().split("\n");
    n = +n;
    arr = arr.split(" ").map(Number);
    smallerNeighbors(arr, n);
    
    
 
  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`8
39 27 11 4 24 32 32 1`);
  
  
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
Smaller Neighbour Element Ended
Description

Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

Mathematically,

G[i] for an element A[i] is an element A[j] such that

j is maximum possible AND

j < i AND

A[j] < A[i]

Note: Elements for which no smaller element exist, consider next smaller element as -1.


Input
Input Format:

First line contains an integer N denoting the number of elements in the array (not necessarily distinct).

Second line contains N space separated integers denoting the elements of the array.

Constraints:

N <= 100000


Output
Print N space separated integers denoting the array G.


Sample Input 1 

8
39 27 11 4 24 32 32 1
Sample Output 1

-1 -1 -1 -1 4 24 24 -1

*/ 