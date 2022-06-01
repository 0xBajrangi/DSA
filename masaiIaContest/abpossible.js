function abpossible(a, b) {
    
    if (a == b) {
        return true;
    }
    if (a > b) {
        return false;
    }

    return abpossible(a * 2, b) || abpossible(Number(a.toString() + 1), b);

}

function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        
        let [a, b] = int[++line].split(" ").map(Number);
        let arr = abpossible(a, b);
        if (arr) {
    console.log("Possible")
        } else {
            console.log("Not Possible")
}

    }

  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`4
6 242
3 3
6 3
10 30`);
  
  
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