function findFamousSum(n) {
    if (n < 10) return n;

    let newSum = 0;
    while (n > 0) {
        let reminder = n % 10;
        newSum += reminder;
        n = Math.floor(n / 10);
        
    }
    return findFamousSum(newSum);
}

function runProgram(input) {
     //format the input and call the function to execute
    let [n, k] = input.split(" ");
    console.log(n,k)
   
    let newSum = 0;
    while (n > 0) {
        let reminder = n % 10;
        newSum += reminder;
        n = Math.floor(n / 10);

    }

     console.log(newSum*k);
    let ans = findFamousSum(newSum*k);
    console.log(ans)
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`3546630947312051453014172159647935984478824945973141333062252613718025688716704470547449723886626736 100000`);
  
  
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