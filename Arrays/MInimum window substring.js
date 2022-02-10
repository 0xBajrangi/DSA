
var minWindow = function (s, t) {

    let tobj = {};
    let ans = Infinity;
    let index = [];
    for (let i = 0; i < t.length; i++) {
        (tobj[t[i]] == undefined ? tobj[t[i]] = 1 : tobj[t[i]]++)
    }
    let count = Object.keys(tobj).length;
    console.log(tobj, count)

    let i = 0;
    let j = 0;
    while (j < s.length) {
        console.log(i, j)
        if (tobj[s[j]] !== undefined) {
            tobj[s[j]]--;

        }

        if (tobj[s[j]] == 0) {
            count--;
        }
        console.log(count)

        if (count == 0) {
            while (count == 0) {
                if (ans > j - i + 1) {
                    ans = j - i + 1;
                    index = [i, j];
                }
                if (tobj[s[i]] != undefined) {
                    tobj[s[i]]++;
                    if (tobj[s[i]] == 1) count++
                    i++;
                } else {
                    i++;
                }
            }
        }
        j++;
    }
    return s.slice(index[0], index[1] + 1)


};


minWindow("abobecodebanc", "abc")