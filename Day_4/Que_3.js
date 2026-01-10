/*
🟢 Q3. Palindrome Check (INTERVIEW FAVORITE)

👉 Ek function banao isPalindrome(str)

Kaam:

Agar string palindrome hai → true

Nahi hai → false
*/

function reverseString(str){
const arr=str.split('');
arr.reverse();
const revStr=arr.join('');
return revStr;
}

function isPalindrome(str){
    let revstring=reverseString(str);
    if(revstring==str) return true;
    else return false;
}
 
let str="madam";
const bool=isPalindrome(str);
if(bool) console.log("palindrome");
else console.log("not palindrome");