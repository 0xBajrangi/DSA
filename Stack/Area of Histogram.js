function getMaxArea(hist, n) {
    let nsl = [];
    let left = [];
    let stack = [];

    for (let i = 0; i < n; i++) {
        if (nsl.length == 0) {
            left.push(-1);
        } else if (nsl[nsl.length - 1][0] < hist[i]) {
            left.push(nsl[nsl.length - 1][1]);
        } else {
            while (nsl.length > 0 && nsl[nsl.length - 1][0] >= hist[i]) {
                nsl.pop();
            }
            if (nsl.length == 0) {
                left.push(-1);
            } else {
                left.push(nsl[nsl.length - 1][1]);
            }
        }
        nsl.push([hist[i], i])
    }
    // console.log(left)
    // nsr
    let nsr = [];
    let right = [];


    for (let i = n - 1; i >= 0; i--) {
        if (nsr.length == 0) {
            right.push(n);
        } else if (nsr[nsr.length - 1][0] < hist[i]) {
            right.push(nsr[nsr.length - 1][1]);
        } else {
            while (nsr.length > 0 && nsr[nsr.length - 1][0] >= hist[i]) {
                nsr.pop();
            }
            if (nsr.length == 0) {
                right.push(n);
            } else {
                right.push(nsr[nsr.length - 1][1]);
            }
        }
        nsr.push([hist[i], i])
    }
    right = right.reverse();
    let max = 0;
    for (let i = 0; i < n; i++){
        let area = hist[i]*(right[i] - left[i] - 1);
        max = Math.max(max, area);

    }
    return max
}

console.log(getMaxArea([6, 2, 5, 4, 5, 1, 6], 7))

/*
Largest Rectangle in Histogram
Hard

8856

133

Add to List

Share
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

 

Example 1:


Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
Example 2:


Input: heights = [2,4]
Output: 4
 

Constraints:

1 <= heights.length <= 105
0 <= heights[i] <= 104
*/ 