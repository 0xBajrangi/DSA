
function runProgram(input) {
  //format the input and call the function to execute
  let [test, ...int] = input.trim().split("\n");
  test = +test;
  let line = -1;
  while (test--) {
    let [n, k, x] = int[++line].trim().split(" ").map(Number);
    let arr = int[++line].trim().split(" ").map(Number);
    findCount(n, k, x, arr)
  }
}
function findCount(n, k, x, arr) {
  let count = 0;
  let start = 0;
  let end = 0;
  while (end < n) {
    if (arr[end] > k) {
      end++;
      start = end;
    }
    else if (end - start + 1 < x && arr[end] <= k) {
      end++;
    } else if (end - start + 1 == x && arr[end] <= k) {
      count++;
      end++;
      start++;
    } else if (end - start + 1 == x && arr[end] > k) {
      end++;
      start=end
    }
  }
  console.log(count)
}



if (process.env.USERNAME === "Acer") {

  runProgram(`1
5 3 2
1 3 2 5 1`);


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