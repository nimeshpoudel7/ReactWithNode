const passport=require('passport');
//Google
module.exports=(app)=>{
app.get('/auth/google', passport.authenticate('google',{
    scope:['profile','email']
})
);
app.get('/auth/google/callback',passport.authenticate('google'))

//gitHub
app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback',passport.authenticate('github'))
}