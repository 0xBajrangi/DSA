
function runProgram(input) {
     //format the input and call the function to execut
    let [test, ...int] = input.trim().split("\n");
    test = +test;
    int = int.map(el => el.split(" ")).map(el => [el[0], Number(el[1])]);
    // sorting alphabetically
     for (let i = 0; i < int.length; i++){
        let max = i;
        for (let j = i; j < int.length; j++){
          if (int[j][0] < int[max][0]) {
                max = j;
            }
        }
        let temp = int[i];
        int[i] = int[max];
        int[max] = temp;
    }
    //  console.log(int)
    // sorting the ranking
    for (let i = 0; i < int.length; i++){
  
        for (let j = 0; j < int.length-1-i; j++){
            if (int[j][1] < int[j+1][1]) {

               let temp = int[j];
              int[j] = int[j + 1];
        int[j+1] = temp;

            }
        }
       
    }
    // console.log(int)

    // printing the rank
    let count = 1;
    for (let i = 0; i < int.length; i++){
        if (i == 0) {
            console.log(count, int[i][0]);
        } else if (int[i][1] == int[i - 1][1]) {
              console.log(count, int[i][0]);
        } else {
            count = i + 1;
            console.log(count,int[i][0]);
        }
    }
    
    
 
  
  }
if (process.env.USERNAME === "Acer") {
  
  runProgram(`9
aa 43
ab 45
ad 43
af 42
gh 42
gk 49
af 89
zz 89
ma 35`);
  
  
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
      process.exit(0) ;
    });
  }