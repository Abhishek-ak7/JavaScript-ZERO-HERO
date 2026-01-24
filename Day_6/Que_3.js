/*
🔵 TASK 3: Body API

👉 Create API:

POST /register


Body:

{
  "name": "Abhishek",
  "email": "test@gmail.com"
}


Response:

{
  "message": "User registered",
  "user": {
    "name": "Abhishek",
    "email": "test@gmail.com"
  }
}
*/

const express = require('express');
const port =3002;
const app=express();

app.use(express.json());

app.post('/register',(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;

    res.status(200).json({
          message: "User registered",
  user: {
    name: name,
    email: email
  }
    });
});

app.listen((port),()=>{
    console.log("backend is working")
})