
function runProgram(input) {
     //format the input and call the function to execute
    let [n, str] = input.trim().split("\n");
    n = +n;
    let max = 0;
    currmax = ""
    for (let i = 0; i < n; i++){
        let j = i+1;
        let sub = "" + str[i];
        while (j < n) {
            if (str[j].charCodeAt(0) <=str[i].charCodeAt(0)) {
                sub += str[j];
                j++;
            } else {
                break;
                }
        }
        if (max < sub.length) {
            max = sub.length;
            currmax = sub;
        }
    }
 console.log(currmax)
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`6
ababaa`);
  
  
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