function runProgram(input) {

  var input = input.trim().split("\n");
  var length = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  console.log(arr,length)
  checkData(length, arr);
}
function checkData(length, arr) {

  var index = [];
  for (var i = 0; i < length; i++) {
    index[i] = i;
  }
  //console.log(index);
  console.log(arr,index)
  var value = [];
  for (var i = 0; i < length; i++) {
    for (var j = i + 1; j < length; j++) {
      var temp;
      var temp1;
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        temp1 = index[i];
        index[i] = index[j];
        index[j] = temp1;

      }
    }
    

  }
  console.log(arr,index);
}




if (process.env.USERNAME === "Acer") {
  
  runProgram(`5
  2 2 5 2 1`);
  
  
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