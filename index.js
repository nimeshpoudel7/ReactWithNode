
const express =require('express');
const mongoose = require('mongoose');
require('./models/User')
require('./services/Passport');
const keys=require('./config/keys');
const authRoutes=require('./routes/authRoutes')
const cookieSession=require('cookie-session')
const passport=require('passport')
mongoose.connect(keys.mongoURI)
// requries for the import
const app=express();
app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys:[keys.cookieKey]
    })
)
app.use(  passport.initialize())
app.use(passport.session())
authRoutes(app);
//authRoutes(app); can be written as require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT);