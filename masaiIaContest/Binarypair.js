const findPair = (arr, k) => {
    let count = 0;
    let posOne = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            posOne.push(i);
        }
    }
    // console.log(posOne);
    for (let i = 0; i < posOne.length; i++) {
        let flag = false;
        for (let j = posOne[i] - k<0?0:posOne[i]-k; j >= 0 && j < posOne[i]; j++) {
            if (arr[j] == 0) {
                count++;
                arr[j] = -1;
                arr[posOne[i]] = -1;

                flag = true;
                break
            }
        }
        if (!flag) {
            for (let j = posOne[i] + 1; j <= posOne[i] + k; j++) {
                if (arr[j] == 0) {
                    count++;
                    arr[j] = -1;
                    arr[posOne[i]] = -1;

                    break;
                }
            }
        }
        // console.log(arr,posOne[i])
    }
    console.log(count);


}
function runProgram(input) {
    //format the input and call the function to execute
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let arr = int[++line].trim().split("").map(Number);
        let k = Number(int[++line].trim());
        findPair(arr, k)
    }

}
if (process.env.USERNAME === "Acer") {

    runProgram(`2
001101
3
101001
3`);


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