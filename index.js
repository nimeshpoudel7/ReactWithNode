const express =require('express');
// requries for the import
const app=express();
// app listen incomimg request

app.get('/', (req,res)=>{
  res.send({there:'bye'})
} )
const PORT = process.env.PORT || 5000;
app.listen(PORT);