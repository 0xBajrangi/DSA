// Sort an array using recursion only

let arr = [2, 3, 7, 6, 5, 4, 9];

let sort = function (arr) {
    console.log(arr)
    if (arr.length <1) return;

    let temp = arr[arr.length - 1];
    arr.pop();
    sort(arr);
    insert(arr, temp);
}
function insert(arr, temp) {
    console.log("insert",arr,temp)
    if (arr.length === 0 || arr[arr.length - 1] <= temp) {
        arr.push(temp);
        return;
    }
    let val = arr[arr.length - 1];
    arr.pop();
    insert(arr, temp);
    arr.push(val);
    return
}
sort(arr);
console.log(arr)