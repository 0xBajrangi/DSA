function runProgram(input) {
    //format the input and call the function to execute
    let [test , ...int] = input.trim().split('\n');
     test = +test;
     let line = -1;
     while(test--){
         let n = +int[++line];
         let arr = int[++line].trim().split("");
possible(n,arr);
     }
 }
 function possible(n,arr){
    
     let obj = {};
     for(let i = 0;i<n;i++){
         if(obj[arr[i]]==undefined) obj[arr[i]] =1;
         else obj[arr[i]]++;
     }
     let odd_count = 0;
     let even_count = 0;
     for(let key in obj){
         if(obj[key]%2==0) even_count++;
         else odd_count++;
     }
     if(odd_count>1) console.log("No");
     else console.log('Yes');
     
 }
if (process.env.LOGNAME === "pawanlode") {
 runProgram(`3
 1
 a
 3
 aab
 4
 abbb`);
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





