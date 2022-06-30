
function runProgram(input) {
     //format the input and call the function to execute
    let [k, arr, dep] = input.trim().split("\n");
    k = +k;
    arr = arr.trim().split(" ").map(Number);
    dep = dep.trim().split(" ").map(Number);


    console.log(parking(k,arr,dep))
 
  
}
function parking(k, arr, dep) {
    // for (let i = 0; i < arr.length; i++){
    //     let min = i;
    //     for (let j = i; j < arr.length; j++){
    //         if(arr[])
    //     }
    // }
    let queue = [];
    for (let i = 0; i < arr.length; i++){
        
        if (queue.length < 1) {
            queue.push(dep[i]);
        } else {
            flag = true;
            for (let j = 0; j < queue.length; j++){
                if (queue[j] <= arr[i]) {
                    queue[j] = dep[i];
                    flag = false;
                    break;
                }
            }
            if (flag) {
                queue.push(dep[i])
            }
        }
        if (queue.length > k) return "Not Possible"

    }
    return "Possible"


  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`1
1 3 5
2 6 8`);
  
  
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