
function sortOdd(n, i,arr) {
    // console.log(n, i, arr)


    while (arr[i] % 2 == 1  && i<n) {
        let min = i;
        let j = i;
        while (arr[j] % 2 == 1 && j<n) {
            if (arr[j] <= arr[min]) {
                min = j;
            }
            j++;
        }
        // console.log(min,i)
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp
        i++;
    }
    // console.log(n, i, arr)

    return arr;
}
function sortEven(n, i, arr) {
// console.log(n,i,arr)
  
    while (arr[i] % 2 == 0) {
        let min = i;
        let j = i;
        while (arr[j] % 2 == 0) {
            if (arr[j] < arr[min]) {
                min = j
            }
            j++;
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp
        i++;
    }
    // console.log(n, i, arr)

    return arr;
}
function runProgram(input) {
     //format the input and call the function to execute
    let [n, arr] = input.split('\n');
    n = +n;
    arr = arr.split(" ").map(Number);
    let i = 0;
    let j = 0;
    while (j < n) {
        if (arr[j] % 2 == 1) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            i++;
        }
        j++;
    }
  
    
    arr = sortOdd(n, 0, arr);
     arr = sortEven(n,i,arr);
    console.log(arr.join(" "))
    
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`5
2 5 1 4 2`);
  
  
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