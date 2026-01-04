/*
🟢 Q4. Find Largest Number

👉 Ek function banao findMax(arr)

Kaam:

Array me sabse bada number return kare

*/
const findMax=(arr)=>{
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]) max=arr[i];
    }
    return max;
}

let arr=[15,92,33,44,56,85];
let ans=findMax(arr);
console.log(ans);
