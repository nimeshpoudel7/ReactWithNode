const GoogleStrategy=require('passport-google-oauth20').Strategy
const GithubStrategy=require('passport-github2').Strategy;
const passport=require('passport');
const mongoose = require('mongoose');
const User =mongoose.model('users')
const keys=require('../config/keys');
passport.serializeUser((user,done)=>{
  done(null,user.id)
})
passport.deserializeUser((id,done)=>{
  User.findById(id)
  .then((user)=>done(null,user))
})
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
      User.findOne({googleId:profile.id}).then(existingUser=>{
        if(existingUser){
          console.log('already user exist',existingUser)
          done(null,existingUser);
        }
        else{
           new User({googleId:profile.id}).save().then(user=>done(null,user))
        }
      })
     
    }
  )
)