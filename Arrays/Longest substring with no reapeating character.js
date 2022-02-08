/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let obj = {};
    let i = 0;
    let j = 0;
    let ans = 0;

    while (j < s.length) {
        if (obj[s[j]] == undefined) {
            obj[s[j]] = 1;
        } else {
            obj[s[j]]++;
        }
        if (Object.keys(obj).length > j - i + 1) {
            j++
        } else if (Object.keys(obj).length == j - i + 1) {
            ans = Math.max(ans, j - i + 1)
            j++;
        } else {
            while (Object.keys(obj).length < j - i + 1) {

                if (obj[s[i]] == 1) {
                    delete obj[s[i]];
                } else {
                    obj[s[i]]--;
                }
                i++;
            }
            j++
        }

    }
    return ans;

}; 