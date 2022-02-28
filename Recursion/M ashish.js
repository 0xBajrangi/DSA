
function calculatePrice(price, start, n, combi) {
    
    if (price === 0 && combi.length == n) {
        console.log(combi.join(" "));
        return;
    }
    if (combi.length > n) return;
    if (price < 0) return;
    for (let i = start; i < 10; i++){
        combi.push(i);
        calculatePrice(price - i,i+1, n, combi);
        combi.pop();
    
    }


}
function runProgram(input) {

     //format the input and call the function to execute
    let [price, n] = input.split(" ").map(Number);
 
    calculatePrice(price,1,n ,[]);
   
  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`8 2`);
  
  
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