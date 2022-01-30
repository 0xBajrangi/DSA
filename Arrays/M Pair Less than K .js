function pairLessThanK(n, arr, k) {
    let ans = -1;
    let i = 0;
    let j = n - 1;
    arr = arr.sort((a,b)=>a-b)
    while (i < j) {
        if (arr[i] + arr[j] >= k) {
            j--;
        } else if (arr[i] + arr[j] < k) {
            ans = Math.max(ans, arr[i] + arr[j]);
            i++;
        }
    }
    console.log(ans)
}
function runProgram(input) {
    //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let n = Number(int[++line].trim());
        let arr = int[++line].split(" ").map(Number);
        let k = Number(int[++line].trim());
        pairLessThanK(n, arr, k);
    }



}
if (process.env.USERNAME === "Acer") {

    runProgram(`2
5
1 2 3 4 5
7
3
30 10 20
15`);


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