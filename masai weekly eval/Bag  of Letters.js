
function runProgram(input) {
     //format the input and call the function to execute
    let [n, alice, j, adam] = input.split("\n");
    n = +n;
    j = +j;
    let obj_alice = {}
    for (let i = 0; i < alice.length; i++) {
        if (obj_alice[alice[i]] == undefined) obj_alice[alice[i]] = 1;
        else obj_alice[alice[i]]++;
    }
    let obj_adam = {}
    for (let i = 0; i < adam.length; i++) {
        if (obj_adam[adam[i]] == undefined) obj_adam[adam[i]] = 1;
        else obj_adam[adam[i]]++;
    }
  
    for (let key in obj_adam) {
        if (obj_alice[key] == undefined) {
            console.log("No");
            return;
         }
    }
    console.log("Yes")

  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`5
aabbc
4
abcd`);
  
  
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