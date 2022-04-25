function helper(n, coins, sum) {
    let ans = [];
    function coinSum(n, coins, sum, currcoins,curr) {
        let currSum = currcoins.reduce((ac, el) => ac + el, 0);

        if (currSum <= sum && curr > 0) {
            let include = ans.includes(currSum);
     
            if(!include)
            ans.push(currSum);
        }
        if (currSum > sum) return;
        for (let i = curr; i < n; i++){
            currcoins.push(coins[i]);
            coinSum(n, coins, sum, currcoins, i + 1);
            currcoins.pop();
        }
    }
    coinSum(n, coins, sum, [], 0)
    ans = ans.sort((a, b) => a - b);
    console.log(ans.length);
    console.log(ans.join(" "))
}
function runProgram(input) {
     //format the input and call the function to execute
    let [n, coins] = input.trim().split("\n");
    n = +n;
    coins = coins.split(" ").map(Number);

    let sum = coins.reduce((ac, el) => ac + el, 0);
    helper(n, coins, sum);
 
  
  }
if (process.env.USERNAME === "Acer") {
  
    runProgram(`3
3 5 2 `);
  
  
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