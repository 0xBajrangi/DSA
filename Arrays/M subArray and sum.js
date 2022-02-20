function subArrayandSub(n, k, arr) {
    let i = 0;
    let j = 0;
    let sum = 0;
    let ans = 0;
    let total = arr.reduce(function (ac, el) {
        return ac + el
    }, 0);
    if (total % k != 0) {
        console.log(1);
        return;
   }
    while (j < n) {
        sum += arr[j];
       

        if (sum % k != 0) {
            ans = Math.max(ans, j - i + 1);
        } else if(sum%k == 0 & i != j ) {
            while (sum % k == 0 & i !=j ) {
                sum = sum - arr[i];
                if (i == j) {
                    i++;
                    j++;
                } else {
                    i++;
                };
            }
            
        }
        j++;

    }
    console.log(ans)
    
    i = 0;
    j = 0;
    sum = 0
    count = 0;
    while (j < n) {
        sum = sum + arr[j];
        if (j - i + 1 < ans) {
            j++;
        } else if (ans === j - i + 1) {
            if (sum % k != 0) {
                count++;
            }
            sum = sum - arr[i];
            i++;
            j++;

        }
    }
    console.log(count)

}
function runProgram(input) {
     //format the input and call the function to execute
    let [nm, arr] = input.trim().split("\n");
    let [n, m] = nm.trim().split(" ").map(Number);
    arr = arr.trim().split(" ").map(Number);
    subArrayandSub(n, m, arr);
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`5 3
3 2 2 2 3`);
  
  
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