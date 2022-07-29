function runProgram(input) {
    //format the input and call the function to execute
    let [test , ...int] = input.trim().split("\n");
    let line = -1;
    test = +test;
    while(test--){
        let n = +int[++line].trim();
        let arr = int[++line].trim().split(" ").map(Number).sort((a,b)=>a-b);
        console.log(arr.join(" "))
    }
 }
if (process.env.LOGNAME === "pawanlode") {
 runProgram(`3
 1
 2
 3
 2 0 1
 4
 2 0 2 1`);
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





