function diffOfK(arr, n, k) {
    let i = 0;
    let j = 0;
    while (j<n && i<n) {
        // console.log(arr[i], arr[j]);
        if (arr[j] - arr[i] == k && j!=i) {
            console.log("Yes");
            return
        } else if (arr[j] - arr[i] > k) {
            i++;
        } else {
            j++
        }
    }
    console.log("No");
}
function runProgram(input) {
    //format the input and call the function to execute

    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let [n, k] = int[++line].trim().split(" ").map(Number);
        let arr = int[++line].trim().split(" ").map(Number);
        diffOfK(arr, n, k);

    }


}
if (process.env.USERNAME === "Acer") {

    runProgram(`1
6 0
-8 -7 5 6 6 9`);


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