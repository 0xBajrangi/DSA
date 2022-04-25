
function runProgram(input) {
    //format the input and call the function to execute
    let [n, room, stud] = input.trim().split("\n");
    n = +n;
    room = room.split(" ").map(Number).sort((a, b) => a - b);
    stud = stud.split(" ").map(Number).sort((a, b) => a - b);

    let max_time = -Infinity;
    for (let i = 0; i < n; i++){
        let time = Math.abs(Math.abs(room[i]) - Math.abs(stud[i]));
        max_time = Math.max(max_time, time);
    }

console.log(max_time)

}
if (process.env.USERNAME === "Acer") {

    runProgram(`3
4 -4 2
4 0 5`);


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