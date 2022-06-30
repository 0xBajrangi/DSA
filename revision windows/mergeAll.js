
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split('\n');
    test = +test;
    let line = -1;
    while (test--) {
        let n = +int[++line].trim();
        let arr = [];
        for (let i = 0; i < n; i++){
            
            arr.push(int[++line].trim().split(" ").map(Number));



        }
        merge(n, arr);
    }

 
  
}
function merge(n, arr) {
    arr = arr.sort((a, b) => a[0] - b[0]);
    let merged = [];

    for (let i = 0; i < arr.length; i++){
       
        if (merged.length == 0) {
            merged.push(arr[i]);

        } else {
            let l = merged.length - 1;
            if (merged[l][1] <= arr[i][1]) {
                merged[l][1] = arr[i][1]
            } else if (merged[l][1] == arr[i][0]) {
                
            }
            else if (merged[l][1] >= arr[i][1]) { 

            }
            else {
                merged.push(arr[i])
            }
        }
    }
    console.log(merged.length);
    for (let i = 0; i < merged.length; i++){
        console.log(merged[i].join(" "));
    }
    
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`2
15
1 39475
4 64512
7 73285
11 81110
22 94831
64 97811
71 97838
267 99856
4465 99896
5079 99936
5372 99964
12703 99987
21716 99998
47934 99999
67530 100000
2
2 100
1 101`);
  
  
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