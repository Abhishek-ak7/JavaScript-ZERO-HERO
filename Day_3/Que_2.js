/*
🟢 Q2. Double the Numbers (IMPORTANT)

👉 Ek function banao doubleArray(arr)

Kaam:

Array ke har element ko double karo

New array return karo

📌 Example:

doubleArray([1,2,3]) // [2,4,6]
*/

function squareNUM(n){
    return n*n;
}
let arr=[3,4,6,7];
let num=arr.map(squareNUM);
console.log(num);