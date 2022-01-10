
var rotateString = function(s, goal) {
    s = s.split("");
   

    for (let i = 0; i < s.length; i++){
        let temp = s[s.length - 1];
        for (let j = s.length-1; j >0; j--){
            s[j] = s[j - 1];
        }
        s[0] = temp;
        if (s.join("") === goal) {
            return true;
        }
    }
    return false;

    
    
};


console.log(rotateString("abcde", "abced"));
console.log(rotateString("abcde", "cdeab"));



/* 
Rotate String
Easy

1600

80

Add to List

Share
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false
*/