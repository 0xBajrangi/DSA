
function runProgram(input) {
     //format the input and call the function to execute
    let [j, jim, p, pam] = input.split("\n");
    j = +j;
    p = +p;
    jim = jim.split(" ").map(Number);
    pam = pam.split(" ").map(Number);

    let obj_jim = {};
    for (let i = 0; i < jim.length; i++) {
        if (obj_jim[jim[i]] == undefined) obj_jim[jim[i]] = 1;
    }
    jim = Object.keys(obj_jim).join("");
    let obj_pam = {};
    for (let i = 0; i < pam.length; i++) {
        if (obj_pam[pam[i]] == undefined) obj_pam[pam[i]] = 1;
    }
    pam = Object.keys(obj_pam).join("");
    if (jim == pam) console.log("Yes");
    else console.log("No");
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`6
1 2 2 3 4 5
6
1 2 3 4 5 5`);
  
  
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