function runProgram(input) {
    //format the input and call the function to execute
    let [test , ...int] = input.trim().split('\n');
     test = +test;
     let line = -1;
     while(test--){
         let n = int[++line].trim().split("");
         findMinimum(n)
     }
 }
 function findMinimum(n){
    if(n[0]=='-'){
       n = n.slice(1).map(Number).sort((a,b)=>b-a);
       n = "-"+n.join("")
    }else{
        n = n.map(Number).sort((a,b)=>a-b);
        if(n[0]==0){
            for(let i = 0;i<n.length;i++){
                if(n[i]!='0') {
                    [n[0],n[i]] = [n[i],n[0]]
                    break
                }
            }
        }
        n = n.join('');


    }console.log(n)

 }
if (process.env.LOGNAME === "pawanlode") {
 runProgram(`2
 53334121
 -1002911`);
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





