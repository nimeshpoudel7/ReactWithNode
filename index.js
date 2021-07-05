const express =require('express');
// requries for the import
const app=express();
// app listen incomimg request

app.get('/', (req,res)=>{
  res.send({hey:'bye'})
} )
const PORT = process.env.PORT || 5000;
app.listen(PORT);