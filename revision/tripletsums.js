function runProgram(input) {
    //format the input and call the function to execute
    let [n, arr] = input.trim().split("\n");
    n = +n;
    arr = arr.split(" ").map(Number).sort((a,b)=>a-b);
    let count = 0;
    for(let i = 0;i<n;i++){
        let target = -1*arr[i];
        let j = i+1;
        let k = arr.length -1;
        while( k > j ){
            if(arr[k]+arr[j] === target){
                
                count++;
                j++;
            }else if(arr[k]+arr[j]>target){
                k--;
            }else{
                j++;
            }
        }
    }
    console.log(count);
 }
if (process.env.LOGNAME === "pawanlode") {
 runProgram(`3
 -1 -2 3`);
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





