function johnNashandSets(n, arr1, m, arr2) {
    let ans = [];
    let i = 0;
    let j = 0;
    arr1 = arr1.sort(function (a, b) { return a - b });
    arr2 = arr2.sort(function (a, b) { return a-b})
    while (i < n && j < m) {
        if (arr1[i] === ans[ans.length - 1]) {
            i++;
            continue;
        } else if (arr2[j] === ans[ans.length - 1]) {
            j++;
            continue;
        }
        if (arr1[i] === arr2[j]) {
            ans.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] > arr2[j]) {
            ans.push(arr2[j]);
            j++;
        } else if (arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            i++;
        }
    }
    while (i < n) {
        if (ans[ans.length - 1] === arr1[i]) {
            i++;
            continue;
        }
        ans.push(arr1[i]);
        i++;
    }
    while (j < m) {
        if (ans[ans.length - 1] === arr2[j]) {
            j++;
            continue;
        }
        ans.push(arr2[j]);
        j++;
    }

    // let ans = {};
    // arr1.forEach((el) => {
    //     if (ans[el] == undefined) {
    //         ans[el] = 1;
    //    }
    // })
    // arr2.forEach((el) => {
    //     if (ans[el] == undefined) ans[el] = 1;
    // })
    // console.log(Object.keys(ans).sort((a,b)=>a-b).join(" "))
    console.log(ans.join( " "))

}
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let n = +int[++line].trim();
        let arr1 = int[++line].split(" ").map(Number);
        let m = +int[++line].trim();
        let arr2 = int[++line].split(" ").map(Number)
        johnNashandSets(n, arr1, m, arr2);
    }
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`1
4
-1 110 1 1
5
1 2 3 4 5`);
  
  
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