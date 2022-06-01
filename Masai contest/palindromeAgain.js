
function runProgram(input) {
  //format the input and call the function to execute
 
  let str = input.trim();
  let rev = str.trim().split("").reverse().join("");
  // console.log(str,rev)
  let dp = {}

  function palindrome(i, j, str,rev) {
    if (i >= str.length || j >= rev.length) return 0;
    if (dp[[i, j]]!=undefined) return dp[[i, j]];
    if (str[i] === rev[j]) {
      dp[[i, j]] = 1 + palindrome(i + 1, j + 1, str, rev);
      return dp[[i,j]]
    }
    dp[[i, j]] = Math.max(palindrome(i + 1, j, str, rev), palindrome(i, j + 1, str, rev));
    return dp[[i,j]]

  }
  console.log(palindrome(0, 0, str, rev));
}
if (process.env.USERNAME === "Acer") {
  
  runProgram(`AABCDEBAZ`);
  
  
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