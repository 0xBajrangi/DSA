function runProgram(input) {
    //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while(test--){
        let [n,m] = int[++line].trim().split(" ").map(Number);
        let arr = [];
        for(let i = 0;i<n;i++){
            arr.push(int[++line].trim());
        }
console.log(n,m,arr);
     }
 }
if (process.env.LOGNAME === "pawanlode") {
 runProgram(`6
 4 4
 ####
 #...
 #.##
 #.##
 5 5
 #.###
 #..##
 ##..#
 #.#.#
 ###.#
 1 1
 .
 5 1
 #
 #
 .
 .
 #
 2 2
 #.
 .#
 3 4
 #..#
 #.##
 #.##`);
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





