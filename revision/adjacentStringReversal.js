function runProgram(input) {
    //format the input and call the function to execute
    let [test , ...int] = input.trim().split('\n');
     test = +test;
     let line = -1;
     while(test--){
         let n = +int[++line];
         let arr = int[++line].trim().split("");
        for(let i = 0;i<n;i+=2){
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
        }
        console.log(arr.join(""));
     }
 }
if (process.env.LOGNAME === "pawanlode") {
 runProgram(`1
 6
 rutwik`);
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





