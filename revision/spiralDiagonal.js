function runProgram(input) {
    //format the input and call the function to execute
   let [test , ...int] = input.trim().split('\n');
   test = +test;
   let line = -1;
   while(test--){
       let n = +int[++line];
       let arr = int[++line].split(" ").map(Number);
       spiralTraversal(n,arr);
       
   }
 }
 function spiralTraversal(n,arr){
    let matrix =[];
    let sum = 0;
    for(let i = 0;i<n;i++){
        let temp = [];
        for(let j = 0;j<n;j++){
            temp.push(null);
        }
        matrix.push(temp)
    }
    let count = 0;
    let rowStart = 0,rowEnd = n;
    let colStart = 0 , colEnd = n;
    while(count < n*n){
      for(let i = colStart;i<colEnd;i++){
        let a  = arr[count];
              matrix[rowStart][i] = a;
              count++;
          
      }
     
      rowStart++;
      for(let i  = rowStart;i<rowEnd;i++){

        let a  = arr[count];
          matrix[i][colEnd-1] = a;
          count++;
        }

        colEnd--;


      for(let i = colEnd-1;i>=colStart;i--){
        let a  = arr[count];

          matrix[rowEnd-1][i] = a;
          count++;
      }
      rowEnd--;

      for(let i = rowEnd-1 ;i >= rowStart;i--){
        let a  = arr[count];

          matrix[i][colStart] = a;
          count++;
      }
      colStart++;
    
    }
    for(let i = 0;i<n;i++){
        sum+=matrix[i][i];
       if(i!=n-1-i) sum+=matrix[i][n-1-i];
    }
console.log(sum)
 }
if (process.env.LOGNAME === "pawanlode") {
 runProgram(`3
1
1
2
1 2 3 4
3
1 2 3 4 5 6 7 8 9`);
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





