/*
🟢 TASK 1: Basic Express Server (Revision)

Create file: server.js

🟢 TASK 2: Create Your First REAL API

👉 Create this API:

GET /health

🟢 TASK 3: POST API with Body

👉 Create API:

POST /login

Body:

{
  "username": "admin",
  "password": "1234"
}

*/

const express = require('express');
const bodyParser=require('body-parser');

const port=3000;
const app=express();

app.use(bodyParser.json());

app.get('/health',(req,res)=>{
    res.status(200).json({
  "status": "OK",
  "uptime": "server is healthy"
});
});

app.post('/login',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    if(username==="admin" && password==="1234" ){
        res.status(200).json({
            msg: "Login successful"
        });
    }else{
        res.status(401).json({
            msg: "Invalid credentials"
        });
    }
});

app.listen(port,()=>{
    console.log("backend is working");
})
