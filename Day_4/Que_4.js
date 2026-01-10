/*
👉 Ek function banao countVowels(str)

Kaam:

String me kitne vowels (a,e,i,o,u) hain — count karo
*/

function countVowels(str){
    let count=0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
   for(let i=0;i<str.length;i++){
            let char=str[i];
           if ((vowels.includes(char))) count++;
   }
 
    return count;

}
let str="abhishek";
console.log(countVowels(str));