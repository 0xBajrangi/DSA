function runProgram(input) {
    //format the input and call the function to execute
    let [test , ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while(test--){
        let n = +int[++line].trim();
        let arr = [];
        for(let i = 0;i<n;i++){
           arr.push(int[++line].trim().split(" ").map(Number));

        }
        console.log(findHouse(n,arr))
    }
 }
 function findHouse(n,arr){
    let count = 0;
    let list = {};
    for(let i = 0;i<n;i++){
        if(list[arr[i][0]]==undefined) list[arr[i][0]] = [arr[i][1]];
        else list[arr[i][0]].push(arr[i][1]);
        if(list[arr[i][1]] === undefined) list[arr[i][1]] = [arr[i][0]];
        else list[arr[i][1]].push(arr[i][0])
    }
    let bought = {};

    for(let key in list){
        bought[key] = true;
        for(let i = 0;i<list[key].length;i++){
            if(bought[list[key][i]]==undefined) bought[list[key][i]] = true;
        }
    }
  return Object.keys(bought).length;
 }
if (process.env.LOGNAME === "pawanlode") {
 runProgram(`1
 3
 1 2
 2 3
 1 3
 `);
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





