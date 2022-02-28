function fibonacci(n) {
    // base case for
    
    if (n == 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n-1) + fibonacci(n-2)

   

}

function runProgram(input) {
    //format the input and call the function to execute
    let n = Number(input);

    let ans = fibonacci(n);
    console.log(ans)



}
if (process.env.USERNAME === "Acer") {

    runProgram(`4`);


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
        process.exit(0);
    });
}