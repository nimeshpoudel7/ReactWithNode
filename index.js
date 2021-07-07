const express =require('express');
const mongoose = require('mongoose');
require('./services/passport');
require('./models/User')
const keys=require('./config/keys');
const authRoutes=require('./routes/authRoutes')
mongoose.connect(keys.mongoURI)
// requries for the import
const app=express();
authRoutes(app);
//authRoutes(app); can be written as require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT);