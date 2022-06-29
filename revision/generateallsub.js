function runProgram(input) {
    //format the input and call the function to execute
    let [test , ...int] = input.trim().split('\n');
     test = +test;
     let line = -1;
     while(test--){
         let n = +int[++line];
         let arr = int[++line].trim().split("");
generateAll(n,arr,0,[]);
     }
 }
 function generateAll(n,arr){
     for(let i = 0;i<n;i++){
         let temp = "";
         for(let j = i;j<n;j++){
             temp+=arr[j];
             console.log(temp);
         }
     }
     
 }
if (process.env.LOGNAME === "pawanlode") {
 runProgram(`1
 4
 aman`);
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





