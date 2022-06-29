function runProgram(input) {
    //format the input and call the function to execute
    let [test,...int] = input.trim().split('\n');
    test = +test;
    let line  = -1;
    while(test--){
        let [n,k] = int[++line].trim().split(" ").map(Number)
        let arr = int[++line].trim().split(" ").map(Number)
        nearest(n,k,arr);

    }
 }

 function nearest(n,trg,arr){
     let ans = [];

     for(let i = 0;i<n;i++){
         for(let j = i+1;j<n;j++){
             for(let  k= j+1;k<n;k++){
                 ans.push(arr[i]+arr[j]+arr[k])
             }
         }
     }
    //  console.log(ans);
     // for   -x target y which will be closests
     let closets = ans[0];
     for(let i = 0;i<ans.length;i++){
        //  console.log(closets , trg , ans[i]);
        if(Math.abs(trg - closets) > Math.abs(trg - ans[i])){
            closets = ans[i];
        }
         
     }
     console.log(closets||0)
 }
if (process.env.LOGNAME === "pawanlode") {
 runProgram(`2
 4 1
 -1 2 1 -4
 6 5
-4 1 -5 3 2 -5`);
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


