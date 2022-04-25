function subsetGenerator(n, arr, k, curr, subset, obj) {
    if (Object.keys(obj).length === k) {
        let sum = subset.reduce((ac, el) => ac + el, 0);
        if (sum % 2 == 1) return true;
    }
    for (let i = curr; i < n; i++) {
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]]++;
        }
        subset.push(arr[i]);
        let solution = subsetGenerator(n, arr, k, i + 1, subset, obj);
        if (solution) return solution
        subset.pop();
        if (obj[arr[i]] == 1) {
            delete obj[arr[i]];
        } else {
            obj[arr[i]]--;
            
        
        
        }
    }
}
function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr, k] = input.trim().split("\n");
    n = +n;
    arr = arr.trim().split(" ").map(Number);
    k = +k;

    let solution = subsetGenerator(n, arr, k, 0, [], {});
    if (solution) {
        console.log("True");
    } else {
        console.log("False");

    }
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`4
19 27 26 27
3`);
  
  
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