function uniqueGift(str) {
    let queue = [];
    let ans = [];
    let visited = {};


    for (let i = 0; i < str.length; i++) {

        if (visited[str[i]] == undefined) {
            visited[str[i]] = 1;
            queue.push(str[i]);
        } else {
            visited[str[i]]++;
        }

        if (i == 0) {
            ans.push(queue[0]);
        }
        else if (visited[queue[0]] === 1) {
            ans.push(queue[0]);
        } else {
            while (queue.length != 0) {
                if (visited[queue[0]] > 1) {
                    queue.shift();
                }
                else {
                    break;
                }
            }
            if (queue.length === 0) {
                ans.push("#");
            } else {
                ans.push(queue[0]);
            }
        }



    }

    console.log(ans.join(""));
}
function runProgram(input) {
    //format the input and call the function to execute
    let [test, ...int] = input.split("\n");
    test = +test;
    let line = -1;
    while (test--) {
        let str = int[++line].trim();
        uniqueGift(str);
    }


}
if (process.env.USERNAME === "Acer") {

    runProgram(`2
hhmowrbdjogxpmppsyrz
abcabc`);


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