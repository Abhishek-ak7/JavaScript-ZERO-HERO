/*
🟢 Q5. Count Passed Students

👉 Ek function banao countPassed(students)

Kaam:

Bataye kitne students pass hain (marks >= 60)
*/
const studentList=[
    {
        name:"A",
        marks:70
    },
    {
        name:"B",
        marks:59
    },
    {
        name:"C",
        marks:79
    }
]
let count=0;
for(let i=0;i<studentList.length;i++){
    if(studentList[i].marks>=30) count++;
}
console.log(`Total number of passed student: ${count}`);