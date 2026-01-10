/*
🟢 Q2. Reverse a String (VERY IMPORTANT)

👉 Ek function banao reverseString(str)

Kaam:

String reverse karo

Reversed string return karo
*/

function reverseString(str){
const arr=str.split('');
arr.reverse();
const revStr=arr.join('');
return revStr;
}

let str = "javascript";
const ans=reverseString(str);
console.log(ans);