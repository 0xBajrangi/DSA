let matrix = new Array(10).fill().map(()=>Array(10).fill(0));

let followTheKnight = (i, j, steps) => {
  
    if (i < 0 || i > 9 || j <0 || j > 9) {
        return;
    }
    if (steps === 0) {
        if ((i >= 0 && i <= 9) && (j >= 0 && j <= 9)) {
           
            matrix[i][j] = 1;
            
        } 
        return

    }
    followTheKnight(i - 2, j + 1, steps - 1)
    followTheKnight(i - 2, j - 1, steps - 1)
    followTheKnight(i - 1, j + 2, steps - 1)
    followTheKnight(i + 1, j + 2, steps - 1)
    followTheKnight(i + 2, j - 1, steps - 1)
    followTheKnight(i + 2, j + 1, steps - 1)
    followTheKnight(i - 1, j - 2, steps - 1)
    followTheKnight(i + 1, j - 2, steps - 1)









}
function runProgram(input) {
    //format the input and call the function to 
    let [i, j, steps] = input.trim().split(" ").map(Number);
    followTheKnight(i-1, j-1, steps)
    let ans = 0;
    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            if (matrix[i][j] === 1) ans += 1;
        }
    }

    console.log(ans)



}
if (process.env.USERNAME === "Acer") {

    runProgram(`3 3 1`);


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