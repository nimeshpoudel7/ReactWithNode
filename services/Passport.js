const GoogleStrategy=require('passport-google-oauth20').Strategy
const GithubStrategy=require('passport-github2').Strategy;
const passport=require('passport');
const mongoose = require('mongoose');
const User =mongoose.model('users')
const Keys=require('../config/keys');
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
      clientID: Keys.githubClientID,
      clientSecret: Keys.githubClientSecret,
      callbackURL: '/auth/github/callback'
    },
    (accessToken, refreshToken, profile, done) => {
     User.findOne({githubId:profile.id}).then(existingUser=>{
        if(existingUser){
          console.log('already user exist',existingUser)
          done(null,existingUser);
        }
        else{
           new User({githubId:profile.id}).save().then(user=>done(null,user))
        }
      })
       console.log('profile:', profile.id);

    }
  )
)
passport.use(
  new GoogleStrategy(
    {
      clientID: Keys.googleClientID,
      clientSecret: Keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy:true
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