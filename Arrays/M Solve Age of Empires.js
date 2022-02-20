
function runProgram(input) {
    //format the input and call the function to execute
    let [n, arr] = input.split("\n");
    n = +n;
    arr = arr.split(" ").map(Number);

    arr = arr.sort((a, b) => a - b);
    let i = 0;
    let ans = 0;
    let j =  1;
    while (j <arr.length) {
        ans+= Math.min(arr[j], arr[i])
        j+=2;
        i+=2;
    }
    console.log(ans)
}
if (process.env.USERNAME === "Acer") {

    runProgram(`2
1 3 1 2`);


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