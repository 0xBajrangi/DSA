function runProgram(input) {
    //format the input and call the function to execute
    let [test , ...int] = input.trim().split('\n');
    test = +test;
    let line = -1;
    let lecture = [];
    while(test--){
       lecture.push(int[++line].trim().split(" ").map(Number));
    }
    findMax(lecture);
    
 }

 function findMax(lecture){
       lecture = lecture.sort((a,b)=>a[0]-b[0]);
       let count = 1;
       end = lecture[0][1]
       for(let i = 1;i<lecture.length;i++){
                    if(lecture[i][0]>=end){
                        count++;
                        end = lecture[i][i]
                    }
       }
       console.log(count);
 }
if (process.env.LOGNAME === "pawanlode") {
 runProgram(`3
 3 5
 4 9
 5 8`);
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





