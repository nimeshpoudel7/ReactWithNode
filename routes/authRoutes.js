const passport=require('passport');
//Google
module.exports=(app)=>{
app.get('/auth/google', passport.authenticate('google',{
    scope:['profile','email']
})
);
app.get('/auth/google/callback',passport.authenticate('google'))

//logout
app.get('/api/logout',(req,res)=>{
    req.logout();
    res.send(req.user);
})
//login apxi
app.get('/api/current_user', (req,res)=>{
    res.send(req.user.id)
})
app.get('/', (req,res)=>{
     res.send('hey')
})

}