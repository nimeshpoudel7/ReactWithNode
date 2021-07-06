const express =require('express');
const mongoose = require('mongoose');
require('./services/passport');
const keys=require('./config/keys');
//const authRoutes=
mongoose.connect(keys.mongoURI)
// requries for the import
const app=express();
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);