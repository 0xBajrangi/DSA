var maximalRectangle = function (arr) {
    let hist = new Array(arr[0].length).fill(0);
    let max = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[0].length; j++){
            if (arr[i][j] ==0) {
                hist[j] = 0;
            } else {
               
                hist[j] += Number(arr[i][j]);
            }
        }
    
        let right = nsr(hist);
        let left = nsl(hist);
        max = Math.max(max, max_area(hist, right, left));
    

    }
    console.log(max)

};

function max_area(hist, right, left) {
    
    let max = 0;
    for (let i = 0; i < hist.length; i++){
        max = Math.max(max,hist[i]*(right[i]-left[i]-1));
    }
    return max

}

function nsl(arr) {

    let stack = [];
    let index = [];
    let ans = [];


    for (let i = 0; i < arr.length; i++) {
        if (stack.length === 0) {
            ans.push(-1);
        } else if (stack[stack.length - 1] < arr[i]) {
            ans.push(index[index.length - 1]);
        } else {

            while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
                stack.pop();
                index.pop();
            }
            if (stack.length === 0) {
                ans.push(-1);
            } else {
                ans.push(index[index.length - 1]);
            }
        }
        stack.push(arr[i])
        index.push(i);
    }
    return ans;

}
function nsr(arr) {

    let stack = [];
    let index = [];
    let ans = [];


    for (let i = arr.length - 1; i >= 0; i--) {
        if (stack.length === 0) {
            ans.push(arr.length);
        } else if (stack[stack.length - 1] < arr[i]) {
            ans.push(index[index.length - 1]);
        } else {

            while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
                stack.pop();
                index.pop();
            }
            if (stack.length === 0) {
                ans.push(arr.length);
            } else {
                ans.push(index[index.length - 1]);
            }
        }
        stack.push(arr[i])
        index.push(i);
    }
    return ans.reverse();

}


maximalRectangle(
    [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
    ]
)