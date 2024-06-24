function distinctSub(n, k, str) {
    let count = 0;
    let i = 0;
    let j = i;
    let tempcount = 0;
    let obj = {};
    while (i <= n - k) {

        if (Object.keys(obj).length == 0) {
            obj[str[j]] = 1;
            j++;
            tempcount++;
        } else if (obj[str[j]] === undefined) {
            obj[str[j]] = 1;
            j++;
            tempcount++;
        } else {
            obj = {};
            tempcount = 0;
            i++;
            j = i;
        }

        //this is a comment 
        if (tempcount == k) {
            count++;
         obj = {};
            tempcount = 0;
            i++;
            j = i;
        }
    }
    console.log(count)

}

function runProgram(input) {
     //format the input and call the function to execute
    let [nk, str] = input.trim().split("\n");
    let [n, k] = nk.split(" ").map(Number);
    distinctSub(n, k, str);

     
  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`4 2
abcc`);
  
  
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

ubstrings with K distinct letters Ended
Description

Given string str of lowercase alphabets of length n and an integer K, the task is to count all substrings of length K which have exactly K distinct characters.


Input
Input Format

First line contains n and k separated by space

Second line contains strings of length n.

Constraints

1<=n<=10^6

1<=k<=10^6








Output
Print count of substrings of length k with k distinct letters


Sample Input 1 

4 2
abcc
Sample Output 1

2
Hint

Sample 1 Explanation

Possible substrings of length K = 2 are

ab : 2 distinct characters

bc : 2 distinct characters

cc : 1 distinct character

Only two valid substrings exist {“ab”, “bc”}.
*/ 