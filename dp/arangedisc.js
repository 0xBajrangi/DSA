
function runProgram(input) {
    //format the input and call the function to execute
    let [test , ...int] = input.trim().split('\n');
    test = +test;
    let line = -1;
    while(test--){
        let n = Number(int[++line].trim());
       let hr = []
        for(let i = 0;i<n;i++){
           hr[i]= int[++line].trim().split(" ").map(Number);
        }

        hr = hr.sort((a,b)=>b[0]-a[0])
        // console.log(hr);
       dp={}
        console.log(maxHeight(hr,0,-1));
       
        function maxHeight(hr,curr,prev){
            if(curr === hr.length) return 0;
            if(dp[[curr,prev]]!=undefined) return dp[[curr,prev]]
            if(prev == -1){
                dp[[curr,prev]] =  Math.max(hr[curr][1]+maxHeight(hr,curr+1,hr[curr]),maxHeight(hr,curr+1,prev));
                return dp[[curr,prev]]
            }
            
            if(hr[curr][0]<prev[0] && hr[curr][1]< prev[1]){
                dp[[curr,prev]] =  Math.max(hr[curr][1]+maxHeight(hr,curr+1,hr[curr]),maxHeight(hr,curr+1,prev));
                return dp[[curr,prev]]
            }
             
            dp[[curr,prev]] =  maxHeight(hr,curr+1,prev);
            return dp[[curr,prev]];

        }
        // console.log(dp);
    }
 }

              

if (process.env.LOGNAME === "pawanlode") {
 runProgram(`2
 3
 4 3
 1 4
 3 2
 5
 5 6
 4 3
 1 2
 7 5
 3 4`);
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





