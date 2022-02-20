
function runProgram(input) {
     //format the input and call the function to execute
    
    let [n, arr] = input.trim().split("\n");
    n = +n;
    arr = arr.split(" ").map(Number);

    index = [];
    for (let i = 0; i < arr.length; i++) {
        index.push(i);
    };

    for (let i = 0; i < n; i++){
        let min = i;
        for (let j = 0; j < n-i-1; j++){
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                temp = index[j];
                index[j] = index[j+1];
                index[j+1] = temp;
            }
        }
       

    }
    console.log(index.join(' '));

    
    
    
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`5
4 2 2 4 4`);
  
  
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