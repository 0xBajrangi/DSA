
function helper(n, str) {
    var ans = "";
    const mrRobot = (n, str) => {
   

        if (str === "") { return }
        if (str.length === 1) {
    
            ans += str[0];
            return;

        }
        let mid = Math.floor((str.length - 1)/2)
        ans += str[mid];
 
        mrRobot(n, str.slice(0, mid));
        mrRobot(n, str.slice(mid + 1));


    }
    mrRobot(n, str);
    console.log(ans)
}
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let n = Number(int[++line]);
        let str = int[++line].trim();
        let ans = "";
        helper(n, str);

    }
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`3
3
abc
4
abcd
11
abcdefghijk`);
  
  
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
  