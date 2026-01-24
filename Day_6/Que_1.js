/*
🟢 TASK 1: Params API

👉 Create API:

GET /product/:id


Response:

{
  "productId": 5
}
*/

const express = require('express');
const port =3000;
const app=express();

app.get('/product/:id',(req,res)=>{
    const userID= req.params.id;
    res.status(200).json({
        productId: userID
    });
});

app.listen((port),()=>{
    console.log("backend is working")
})