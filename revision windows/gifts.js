
function runProgram(input) {
    //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let n = +int[++line].trim()
        let arr = int[++line].trim().split(" ").map(Number);
findlogngest(n,arr)
    }
}
function findlogngest(n,arr) {
    let obj = {}, max = 0, i = 0;
    let j = 0;

    while (j < n) {
        if (obj[arr[j]] == undefined) {
            obj[arr[j]] = 1;
            max = Math.max(max , j-i+1)
            j++;
        } else {
            while (obj[arr[j]] != undefined) {
                delete obj[arr[i]];
                i++;
            }
       }
    }
    console.log(max);
}




if (process.env.USERNAME === "Acer") {

    runProgram(`3
8
1 2 1 3 2 7 4 2
5
1 2 1 3 4
4
1 2 2 1`);


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