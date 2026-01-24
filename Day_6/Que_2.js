/*
🟡 TASK 2: Query API

👉 Create API:

GET /filter?category=mobile&price=10000


Response:

{
  "category": "mobile",
  "price": "10000"
}
*/

const express = require('express');
const port =3001;
const app=express();

app.get('/filter',(req,res)=>{
   const category=req.query.category;
   const price=req.query.price;
   res.status(200).json({
    category: category,
    price: price
   });
});

app.listen((port),()=>{
    console.log("backend is working")
})