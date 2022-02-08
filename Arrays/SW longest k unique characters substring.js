function longestKSubstr(s, k) {
    //code here

    let obj = {};
    let ans = -Infinity;
    let i = 0, j = 0;
    
    while (j < s.length) {
       
        if (obj[s[j]] === undefined) {
            obj[s[j]] = 1;

        } else {
            obj[s[j]]++;
        }

        if(Object.keys(obj).length < k){
            j++
        } else if (Object.keys(obj).length === k) {
            ans = Math.max(ans, j - i + 1);
            j++;
        } else if (Object.keys(obj).length > k) {
            while (Object.keys(obj).length > k) {
        
                if (obj[s[i]] > 1) {
                    obj[s[i]]--;
                    i++;
                } else if (obj[s[i]] === 1) {
                    delete obj[s[i]]
                    i++;
                    
                }
            }
            j++;
        }

    }
return ans;



}

console.log(longestKSubstr("aabacbebebe", 3))