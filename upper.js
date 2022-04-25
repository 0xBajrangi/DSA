function processData(input) {
    //Enter your code here
    
}


function runProgram(input) {
     //format the input and call the function to execute
    let str = input;
    let lower = "abcdefghijklmnopqrstuvwxyz".split("");
    let uppercount = 0;
    let lowercount = 0;

    for (let i = 0; i < str.length; i++) {
        if (lower.includes(str[i])) {
            lowercount++;
        } else {
            uppercount++;
        }
    }

    if (uppercount > lowercount) {
        console.log(str.toUpperCase());

    } else {
        console.log(str.toLowerCase());
    }
 
  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`heLlO`);
  
  
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
