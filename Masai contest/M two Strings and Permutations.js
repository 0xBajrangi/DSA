
function runProgram(input) {
     //format the input and call the function to execute
    let [str1, str2] = input.trim().split("\n");
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < str1.length; i++){
        if (obj1[str1[i]] == undefined) obj1[str1[i]] = 1;
        else
            obj1[str1[i]]++;


    }
    for (let i = 0; i < str2.length; i++) {
        if (obj2[str2[i]] == undefined) obj2[str2[i]] = 1;
        else
            obj2[str2[i]]++;


    }
    for (key in obj2) {
        if (obj1[key] != obj2[key]) {
            console.log("No");
            return;
        }
    }
    console.log("Yes")
    return;
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`amit
mtia`);
  
  
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