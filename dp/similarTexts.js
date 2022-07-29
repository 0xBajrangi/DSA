
function runProgram(input) {
     //format the input and call the function to execute
   
    const [str1, str2] = input.trim().split('\n');
    
    let dp = {}; 
    function similar(str1, str2, i, j) {
        if (i >= str1.length || j >= str2.length) {
            return 0;
        }

        if (dp[[i, j]]) return dp[[i, j]];
        if (str1[i] == str2[j]) {
            dp[[i, j]] = 1 + similar(str1, str2, i + 1, j + 1);
        } else {
            dp[[i,j]] = Math.max(similar(str1,str2,i,j+1),similar(str1,str2,i+1,j))
        }
        return dp[[i, j]];
    }
    console.log(similar(str1, str2, 0, 0));
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`AEDFHR
ABCDGH`);
  
  
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