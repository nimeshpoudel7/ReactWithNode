const mongoose = require('mongoose');
// const Schema= mongoose.Schema;
// upper value is same as below
const {Schema}=mongoose;

//to create userSchemna
const userSchema=new Schema({
    googleId:String,
    name:String
}) 

mongoose.model('users',userSchema)
