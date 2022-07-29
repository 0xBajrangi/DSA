var ans = [];
var flag = false;
function sudoku(int, zeros, curr) {
    if (curr === zeros.length) {
        
        for (let i = 0; i < int.length; i++) {
            ans.push(int[i].join(" "));
        }
        flag = true;
        return;
    }

    for (let i = 1; i < 10; i++) {
        let [row, col] = zeros[curr];
        // console.log(validity(int,row,col,i))
        if (validity(int, row, col, i)) {
            int[row][col] = i;

            sudoku(int, zeros, curr + 1);
            int[row][col] = 0;

        }

    }


}
function validity(int, row, col, value) {
    let start = Math.floor(row / 3) * 3;
    let end = Math.floor(col / 3) * 3;

    for (let k = 0; k < 9; k++) {
        if (int[k][col] === value && k != row) {
            return false;
        }
    }

    for (let k = 0; k < 9; k++) {
        if (int[row][k] === value && k != col) {
            return false;
        }
    }

    for (let k = start; k < start + 3; k++) {
        for (let q = end; q < end + 3; q++) {
            if (int[k][q] === value && (row != k && col != q)) {
                return false;
            }
        }
    }

    return true;


}





function runProgram(input) {
     //format the input and call the function to execute
    let int = [];
input= input.trim().split("\n")
for (let i = 0; i < 9; i++){
   int[i] = input[i].trim().split(" ").map(Number);
    }
    let zeros = [];
    for (let i = 0; i < 9; i++){
        for (let j = 0; j < 9; j++){
            if (int[i][j] === 0) {
                zeros.push([i, j]);
            }
        }
    }
    sudoku(int, zeros, 0);
    if (flag) {
        ans.forEach((el) => console.log(el));
    } else {
        console.log(-1)
    }
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`0 4 0 0 0 0 1 7 9 
0 0 2 0 0 8 0 5 4 
0 0 6 0 0 5 0 0 8 
0 8 0 0 7 0 9 1 0 
0 5 0 0 9 0 0 3 0 
0 1 9 0 6 0 0 4 0 
3 0 0 4 0 0 7 0 0 
5 7 0 1 0 0 2 0 0 
9 2 8 0 0 0 0 6 0`);
  
  
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