/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {

    let maxR = maxtoRight(height);
    let maxL = maxtoLeft(height)
    let ans = 0;

    for (let i = 0; i < height.length; i++) {
        if (maxR[i] > 0 && maxL[i] > 0) {
            ans += Math.min(maxR[i], maxL[i]) - height[i];
        }
    }
    return (ans)
};

const maxtoRight = (height) => {
    let maxR = [];
    let max = null;
    for (let i = height.length - 1; i >= 0; i--) {
        if (i == height.length - 1) {
            maxR[i] = -1;
            max = height[i]
        } else if (height[i] <= max) {
            maxR[i] = max;
        } else {
            maxR[i] = -1;
            max = height[i];
        }
    }
    return maxR;
}


const maxtoLeft = (height) => {
    let maxR = [];
    let max = null;
    for (let i = 0; i < height.length; i++) {
        if (i == 0) {
            maxR[i] = -1;
            max = height[i]
        } else if (height[i] <= max) {
            maxR[i] = max;
        } else {
            maxR[i] = -1;
            max = height[i];
        }
    }
    return maxR;

}