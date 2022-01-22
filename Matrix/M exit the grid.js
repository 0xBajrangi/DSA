
function exitMaze(arr, n) {
    
    let i = 0;
    let j = 0;
    let count = 0;

    while (i>=0 && i<n && j>=0 && j<n) {

        if (arr[i][j] === "X") {
            console.log(0);
            return;
        }
        if (arr[i][j] === "L") {
            arr[i][j] = "X"
            j--;
            count++;
        } else if (arr[i][j] === "R") {
            arr[i][j] = "X"

            j++;
            count++;
        } else if (arr[i][j] === "U") {
            arr[i][j] = "X"
            i--;
            count++;
        } else if (arr[i][j] === "D") {
            arr[i][j] = "X"
            i++;
            count++;
        }

        
    }
    console.log(count)

}

function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = parseInt(test, 10);


    
    let line = -1;
    while (test--) {
        
        let n = Number(int[++line]);
        let ans = [];
        while (n--) {
            ans.push(int[++line].split(""));
        }
        exitMaze(ans, ans.length);


    }
 
  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`3
4 
RRRR
LLLL
UUUU
DDDD
3
LRL
UUU
DLR
2
RL
DD`);
  
  
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