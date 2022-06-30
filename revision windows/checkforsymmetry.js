
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let n = +int[++line];
        let arr = [];
        for (let i = 0; i < n; i++){
            arr.push(int[++line].trim().split(""));
        }
        checkSymmetry(n, arr);
    }
  
}
function checkSymmetry(n, arr) {
    let horizontal = checkHori(n, arr);
  let vertical = checkVer(n, arr);
  if (horizontal && vertical){
   console.log("BOTH");
  } else if (!horizontal && !vertical) {
    console.log("NO");
  } else if (horizontal) {
    console.log("HORIZONTAL");

  } else {
    console.log("VERTICAL");
 }
}
function checkVer(n, arr) {
  if (n % 2 == 0) {
    for (let i = 0; i < n; i++) {
      let temp1 = "";
      let temp2 = "";
      for (let j = Math.floor(n / 2) - 1; j >= 0; j--) {
        temp1 += arr[i][j];
      }


      for (let j = Math.floor(n / 2); j < n; j++) {
        temp2 += arr[i][j];
      }
      if (temp1 != temp2) return false;
    }
  } else {
    for (let i = 0; i < n; i++) {
      let temp1 = "";
      let temp2 = "";
      for (let j = Math.floor(n / 2) - 1; j >= 0; j--) {
        temp1 += arr[i][j];
      }


      for (let j = Math.floor(n / 2) + 1; j < n; j++) {
        temp2 += arr[i][j];
      }
      if (temp1 != temp2 && temp1 != "" && temp2 != "") return false;
    }
  }

  return true;
}
function checkHori(n, arr) {
  if (n % 2 == 0) {
    for (let i = 0; i < n; i++){
      let temp1 = "";
      let temp2 = "";
      for (let j = Math.floor(n / 2) - 1; j >= 0; j--){
        temp1 += arr[j][i];
      }


      for (let j = Math.floor(n / 2); j < n; j++) {
        temp2 += arr[j][i];
      }
      if (temp1 != temp2) return false;
    }
  } else {
    for (let i = 0; i < n; i++){
      let temp1 = "";
      let temp2 = "";
      for (let j = Math.floor(n / 2) - 1; j >= 0; j--) {
        temp1 += arr[j][i];
      }


      for (let j = Math.floor(n / 2)+1; j < n; j++) {
        temp2 += arr[j][i];
      }
      if (temp1 != temp2 && temp1!="" && temp2!="") return false;
    }
  }
  
  return true;
   
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`3
4
*.*.
.*.*
*.*.
.*.*
3
.*.
*.*
.*.
3
..*
**.
..*`);
  
  
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