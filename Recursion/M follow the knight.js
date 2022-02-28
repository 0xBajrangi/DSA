let matrix = new Array(10).fill().map(() => Array(10).fill(0));

function followTheKnight(i, j, n) {

    if (i < 1 || i > 10 || j < 1 || j > 10) return ;
    if (n === 0) {
        matrix[i-1][j-1] = 1;
        return;
    }
    
        followTheKnight(i - 2, j - 1, n - 1) ;
        followTheKnight(i - 2, j + 1, n - 1) ;
        followTheKnight(i - 1, j + 2, n - 1) ;
        followTheKnight(i + 1, j + 2, n - 1) ;
        followTheKnight(i + 2, j + 1, n - 1) ;
        followTheKnight(i + 2, j - 1, n - 1) ;
        followTheKnight(i - 1, j - 2, n - 1) ;
        followTheKnight(i + 1, j - 2, n - 1);
}
function runProgram(input) {
     //format the input and call the function to execute
    let [i, j, n] = input.split(" ").map(Number);
  followTheKnight(i, j, n);
    let ans = 0;
    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            if (matrix[i][j] == 1)
                ans++;
        }
    }
    console.log(ans);
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`1 1 2`);
  
  
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