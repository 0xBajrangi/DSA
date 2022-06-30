
function runProgram(input) {
     //format the input and call the function to execute
    let [test, ...int] = input.trim().split('\n');
    test = +test;
    let line = -1;
    while (test--) {
        
        let [n, m] = int[++line].trim().split(" ").map(Number);

        let arr = int[++line].trim().split(" ").map(Number);
        
        let day = int[++line].trim().split(" ").map(Number);
        
        if (possible(n, m, arr, day)) {
           console.log('HAPPY');

        } else {
            console.log('ANGRY');
       }


    }
 
  
}
function possible(n, m, arr, day) {
    for (let i = 0; i < day.length; i++){
        let noodle = day[i];
        let eat = false;
        for (let j = 0; j < n; j++){
            if (arr[j] === noodle) {
                arr[j] = '.';
                eat = true;
                break;
            }
        }
        if (!eat) return false;
    }
    return true;
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`2
3 2
1 1 3
3 1
1 1
10
1`);
  
  
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