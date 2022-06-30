
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let n = +int[++line].trim();
        let strs = [];
        for (let i = 0; i < n; i++){
            strs.push(int[++line].trim());
        }
        allAnagramsGroup(n, strs);
    }
  
}
function allAnagramsGroup(n, str) {
  let obj = {};
  for (let i = 0; i < n; i++) {
    let temp = {};
    for (let j = 0; j < str[i].length; j++) {
      if (temp[str[i][j]] === undefined) temp[str[i][j]] = 1
      else temp[str[i][j]]++
    }
    let code = [];
    for (let key in temp) {
      code.push(key+temp[key]);
    }
    code = code.sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0)).join("");
    if (obj[code] === undefined) obj[code] = [str[i]];
    else obj[code].push(str[i])
  }
  for (let key in obj) {
    console.log(obj[key].length)
    for (let i = 0; i < obj[key].length; i++){
      console.log(obj[key][i])
    }
  }
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`2
6
eat
tea
tan
ate
nat
bat
3
abc
abc
def`);
  
  
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