function runProgram(input) {
    //format the input and call the function to execute
    let [test, ...int] = input.trim().split('\n');
    test = +test;
    let line = -1;
    while(test--){
        let n = +int[++line];
        let edges = +int[++line];
        let graph = [];
        for(let i = 0 ;i<edges;i++){
            graph.push(int[++line].trim().split(" ").map(Number));
        }
        let adjList = {};
        for(let i = 0;i<edges;i++){
            if(adjList[graph[i][0]]==undefined) adjList[graph[i][0]] = [graph[i][1]];
            else adjList[graph[i][0]].push(graph[i][1]);

            if(adjList[graph[i][1]]==undefined) adjList[graph[1][1]] = [graph[i][0]];
            else adjList[graph[i][1]].push(graph[i][0]);
        }
        console.log(adjList);
    }

 }
if (process.env.LOGNAME === "pawanlode") {
 runProgram(`2
4
2
0 1
1 2
3
0`);
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





