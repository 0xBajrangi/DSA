let ans = [];
let count = 0

function nQueens(n, chess, row) {

    if (row === n) {
        ans.push([]);
        for (let i = 0; i < chess.length; i++) {
            ans[count].push(chess[i].join(""))
        }
        count++;
    // count++
    
        return;
    }
    for (let i = 0; i < n; i++) {
       
        
            chess[row][i] = 'Q';
            if (validity(chess, row, i)) {
                nQueens(n, chess, row + 1);
            }
            
            chess[row][i] = ".";

        } 
    }

function validity(chess, row, col) {
    // set rows 
    for (let i = 0; i < chess.length; i++) {
        if (chess[row][i] == "Q" && i != col ) {
            return false;

        }
        
    }
 

    // set column
    for (let i = 0; i < chess.length; i++) {
        if (chess[i][col] == "Q" && i != row) {
            return false;
        }
    }
  


    let i = row;
    let j = col;
    while (i > 0 && j > 0) {
        i--;
        j--;
    }

    while (i < chess.length && j < chess.length) {
        if (chess[i][j] == "Q"&& i != row && j != col) {
            return false
        }
        i++;
        j++;
    }



    i = row;
    j = col;
    while (i > 0 && j < chess.length - 1) {
        i--;
        j++;
    }


    while (i < chess.length && j >= 0) {
        if (chess[i][j] === "Q" && i != row && j != col) {
            return false;
        }
        i++; j--;




    }

    return true;

}
function runProgram(input) {
     //format the input and call the function to execute
    let n = Number(input.trim());
    let chess = new Array(n).fill().map(() => Array(n).fill("."));
    

     nQueens(n,chess,0)
  console.log(ans.length)
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`4`);
  
  
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