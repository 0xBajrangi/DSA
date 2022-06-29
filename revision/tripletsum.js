function runProgram(input) {
    //format the input and call the function to execute
    let [test , ...int] = input.trim().split('\n');
     test = +test;
     let line = -1;
     while(test--){
         let n = +int[++line].trim();
         let arr = int[++line].trim().split(" ").map(Number);
         console.log(tripleExits(n,arr));;
         
     }

 }
 function tripleExits(n,arr){
     let obj = {};
     for(let i = 0;i<n;i++){
         if(obj[arr[i]]==undefined) obj[arr[i]] =1;
     }

     for(let i = 0;i<n;i++){
         for(let j = i+1;j<n;j++){
             if(obj[arr[i]+arr[j]]) return 1;  
         }
     }
     return 0;
 }
 
if (process.env.LOGNAME === "pawanlode") {
 runProgram(`1
 5
 1 3 2 4 5`);
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





