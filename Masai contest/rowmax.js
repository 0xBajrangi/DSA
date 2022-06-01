
function runProgram(input) {
     //format the input and call the function to execute
    let [nm, ...mat] = input.trim().split('\n');
    let [n, m] = nm.trim().split(' ').map(Number);
    mat = mat.map((el) => el.trim().split(' ').map(Number))
    let ans = [];
    for (let i = 0; i < n; i++){
        ans.push(Math.max(...mat[i]));
    }
console.log(ans.join(" "))
}
if (process.env.USERNAME === "Acer") {
  
    runProgram(`3 3
1 2 3
4 5 6
7 8 9`);
  
  
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