/*
✍️ PRACTICE SET – DAY 2
🟢 Q1. Function + Condition

👉 Ek function banao checkNumber(num)

Kaam:

Agar number positive → "Positive"

Agar negative → "Negative"

Agar 0 → "Zero"

📌 Example:

checkNumber(5)   // Positive
checkNumber(-2)  // Negative
checkNumber(0)   // Zero

*/

//solution:
const checkNumber =(num)=>{
    if(num>0) return "Positive";
    else if(num<0) return "Negative";
    else return "Zero";
}

let num=56;
let ans= checkNumber(num)
console.log(ans);