
function runProgram(input) {
     //format the input and call the function to execute
    let exp = input.trim();
    let ans = "";
    let stack = [];
    // ascii a - z 97 - 122
    for (let i = 0; i < exp.length; i++){
        if (stack.length == 0) {
            stack.push(exp[i]);
        } else if(exp[i]!=')' || exp[i]!="(") {
                if (exp[i].charCodeAt(0) >= 97 && exp[i].charCodeAt(1) >= 122) {
                    stack.push(exp[i]);
                } else {
                    while(stack.length !=0){
                         
                    }
                }
            }
        }
    }
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`);
  
  
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