
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;

    while (test--) {
        let [s, n] = int[++line].trim().split(" ").map(Number);
        let art = [];
        for (let i = 0; i < n; i++){
            art.push(int[++line].trim().split(" ").map(Number));
        }
        art = art.sort((a,b)=>a[0]-b[0])
        valueMax(s, n, art);
    }
  
}
function valueMax(s, n, art) {
    let max = 0;
    function getMax(s, n, art, bag, curr) {
        if (n == curr) return 0;
        if (bag >= s) return 0;
        let inc = 0;
        if (bag + art[curr][0] <= s) {
            inc = art[curr][1] + getMax(s,n,art,bag+art[curr][0],curr+1)
        }
        let exc = getMax(s, n, art, bag, curr + 1);
        return Math.max(inc, exc);
    }
    console.log(getMax(s,n,art,0,0))
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`1
4 5
1 8
2 4
3 0
2 5
2 3`);
  
  
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