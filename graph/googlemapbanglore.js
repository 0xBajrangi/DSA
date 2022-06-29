function runProgram(input) {
    //format the input and call the function to execute

 }
if (process.env.LOGNAME === "pawanlode") {
 runProgram(`5 6
 1 2
 1 3
 2 3
 3 4
 3 5
 4 5
 3
 2 4
 1 3
 1 5`);
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





