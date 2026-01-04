/**
 🟢 Q3. Sum of Array (IMPORTANT)

👉 Ek function banao sumArray(arr)

Kaam:

Array ke sab numbers ka sum nikale

Sum return kare

📌 Example:

sumArray([1,2,3,4]) // 10
 */

//solution:


function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
    sum+=arr[i];
    }
    return sum;
}


let arr=[1,2,3,4,5,6];

let ans=sumArray(arr);
console.log(ans);