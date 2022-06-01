
function runProgram(input) {
     //format the input and call the function to execute
    let [str1, str2] = input.trim().split("\n");
    let str1sub = [];
    let str2sub = [];
    function generateall(str, curr, sub,subArr) {
        
        if (sub.length > 0) subArr.push(sub.join(""));
        for (let i = curr; i < str.length; i++){
            sub.push(str[i]);
            generateall(str, i + 1, sub, subArr)
            sub.pop();
        }

    }
    generateall(str1, 0, [], str1sub)
    generateall(str2, 0, [], str2sub)
    let maxlength = Number.MIN_VALUE;
    for (let i = 0; i < str1sub.length; i++){
        if (str2sub.includes(str1sub[i])) {
            maxlength = Math.max(maxlength, str1sub[i].length)
            console.log(str1sub[i])
        }
    }
  console.log(maxlength)
}
  
if (process.env.USERNAME === "Acer") {
  
    runProgram(`eziowiomkvrrdzx
orugiebaolddavd`);
  
  
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