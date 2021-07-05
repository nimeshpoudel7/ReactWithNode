const express =require('express');
const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy
const GithubStrategy=require('passport-github2').Strategy;
const keys=require('./config/keys');
// requries for the import
const app=express();
// app listen incomimg request
// passport.use(new GoogleStrategy({
//     clientID:keys.googleClientID,
//     clientSecret:keys.googleClientID,
//     callbackURL:'/auth/google/callback'

// },accessToken=>{
// console.log(accessToken);
// })
// );

passport.use(
  new GithubStrategy(
    {
      clientID: keys.githubClientID,
      clientSecret: keys.githubClientSecret,
      callbackURL: '/auth/github/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('profile:', profile);
    }
  )
)
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('profile:', profile);
    }
  )
)
app.get('/auth/google', passport.authenticate('google',{
    scope:['profile','email']
})
);
app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/google/callback',passport.authenticate('google'))
app.get('/auth/github/callback',passport.authenticate('github'))
const PORT = process.env.PORT || 5000;
app.listen(PORT);