/*
🟢 Q5. Capitalize First Letter

👉 Ek function banao capitalize(str)

Kaam:

String ka first letter capital karo

📌 Example:

capitalize("javascript") // "Javascript"
*/

function capitalize(str){

    let str1=str[0].toUpperCase();
    
    for(let i=1;i<str.length;i++){
        str1=str1+str[i];
    }
    return str1;
}
const ans=capitalize("abhishek");
console.log(ans);