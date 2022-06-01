
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let [n, m] = int[++line].trim().split(" ").map(Number);
        let matrix = [];
        for (let i = 0; i < n; i++){
            matrix.push(int[++line].trim().split(" ").map(Number))
        }
        console.log(springBoard(n, m, matrix));
    }
  

}
function springBoard(n, m, matrix) {
    let dp = {};
    let max = Number.MIN_VALUE;
    for (let i = 0; i < m; i++){
       let ans =  findMax(matrix, 0, i,dp);
 max = Math.max(max,ans)
    }
    return max;
    function findMax(matrix, row, col,dp) {
    
        if (row >= n || row < 0 || col >= m || col < 0) return 0;        
        if (dp[[row,col]] || dp[[row,col]]==0) return dp[[row,col]];
        dp[[row,col]] = matrix[row][col]+ Math.max(findMax(matrix, row + 1, col, dp), findMax(matrix, row + 1, col + 1, dp), findMax(matrix, row + 1, col - 1, dp))
        
        return dp[[row,col]]

    }
}
if (process.env.USERNAME === "Acer") {
  
    runProgram(`1
6 5
3 1 7 4 2
2 1 3 1 1
1 2 2 1 8
2 2 1 5 3
2 1 4 4 4
5 2 7 5 1`);
  
  
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