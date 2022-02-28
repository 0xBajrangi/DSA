function NumberOfWays(n) {
    // base case for

    if (n === 0) return 1;
    if (n < 0) return 0;

    return NumberOfWays(n - 1) + NumberOfWays(n - 2) + NumberOfWays(n - 3);



}

function runProgram(input) {
    //format the input and call the function to execute
    let n = Number(input);

    let ans = NumberOfWays(n);
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