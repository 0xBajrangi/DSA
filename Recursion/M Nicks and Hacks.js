function findHacks(n, curr) {
    if (curr === n) return true;
    if (curr > n) return false;
    return findHacks(n, curr * 10) || findHacks(n, curr * 20)
}
function runProgram(input) {
    //format the input and call the function to execute
    var [test, ...input] = input.trim().split('\n');
    test = +test;
    let line = -1;

    while (test--) {

        let n = Number(input[++line].trim());
        let ans = findHacks(n, 1);
        console.log(ans ? "Yes" : "No");
    }



}
if (process.env.USERNAME === "Acer") {

    runProgram(`5
1
2
10
25
200`);


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