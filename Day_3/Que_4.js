/*
🟢 Q4. Array of Objects (Real-Life)

👉 Ek array banao jisme 3 students ho

Example structure:

[
  { name: "A", marks: 70 },
  { name: "B", marks: 45 },
  { name: "C", marks: 90 }
]

Tasks:

Sirf un students ke name print karo jinke marks >= 60
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
for(let i=0;i<studentList.length;i++){
    if(studentList[i].marks>=60) console.log(studentList[i].name);
}