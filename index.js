const express =require('express');
// requries for the import
const app=express();
// app listen incomimg request
app.get('/', (req,res)=>{
  res.send({hi:'there'})
} )
app.listen(5000);