
function runProgram(input) {
  //format the input and call the function to execute
  let [q, ...arr] = input.trim().split("\n");
  q = +q;
  let line = -1;
  while (q--) {
    let n = Number(arr[++line]);
    let rating = arr[++line].split(" ").map(Number);
    let forward = new Array(n);
    forward[0] = 1;
    for (let i = 1; i < n; i++) {
      forward[i] = 1;
      if (rating[i] > rating[i - 1]) {
        forward[i] = forward[i - 1] + 1;
      }
    }
    let backward = new Array(n);
    backward[n - 1] = 1;
    for (let i = n - 1; i >= 0; i--) {
      backward[i] = 1;
      if (rating[i] > rating[i + 1]) {
        backward[i] = backward[i + 1] + 1;
      }
    }
    let ans = 0;
    for (let i = 0; i < n; i++){
      ans += Math.max(forward[i], backward[i])
    }
console.log(ans)
  }
  }
  if (process.env.USERNAME === "Acer") {

    runProgram(`2
3 
1 0 2
3
1 2 2`);


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
      process.exit(0);
    });
  }