function johnNashandSets(n, arr1, m, arr2) {
    let i = 0;
    let j = 0;
    let ans = [];
    arr1 = arr1.sort((a, b) => a - b);
    arr2 = arr2.sort((a, b) => a - b);
    while (i < n && j < m) {
        if (arr1[i] < arr2[j]) {
            if (ans[ans.length - 1] !== arr1[i]) {
                ans.push(arr1[i]);
            }
            i++;

        } else if (arr1[i] > arr2[j]) {
            if (ans[ans.length - 1] !== arr2[j]) {
                ans.push(arr2[j]);
            }
            j++;
        } else {
            if (ans[ans.length - 1] !== arr1[i]) {
                
                ans.push(arr1[i]);
            }
            i++;
            j++;
        }
    }
    while (i < n) {
        if (ans[ans.length - 1] !== arr1[i]) {

            ans.push(arr1[i]);
        }
        i++;
    }
    while (j < m) {
        if (ans[ans.length - 1] !== arr2[j]) {
            ans.push(arr2[j]);
        }
        j++;
    }
    console.log(ans.join(" "))
}
function runProgram(input) {
    //format the input and call the function to execute
    let [test, ...arr] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let n = Number(arr[++line].trim());
        let arr1 = arr[++line].split(" ").map(Number);
        let m = Number(arr[++line].trim());
        let arr2 = arr[++line].split(" ").map(Number);
        johnNashandSets(n, arr1, m, arr2);
    }



}
if (process.env.USERNAME === "Acer") {

    runProgram(`1
4
-11 -12 -13 -14
5
-11 -11 3 4 5`);


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