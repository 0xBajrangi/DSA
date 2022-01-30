
function find() {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;

        } else {
            obj[arr[i]]++;
        }
    }
    let max = -Infinity;
    let ans = 0;
    for (let key in obj) {
        if (obj[key] >= ans) {
            if (obj[key] === ans) {
                max = Math.max(max, key);
                ans = obj[key];
            } else {
                max = key;
                ans = obj[key];
            }
        }
    }
}