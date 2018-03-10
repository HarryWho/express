const express= require('express');
const user=express.Router();
const Promise = require('bluebird'); 
const User=require('../models/user');
const bcrypt = require('bcryptjs');
user.get('/', (req,res)=>{
    res.render('signup',{insert:true});
});

user.post('/',(req,res,next)=>{
    // var encryptedPassword='';
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(req.body.password,salt,(err,hash)=>{
            var nUser={
                username: req.body.username,
                email: req.body.email,
                password: hash,
                permission: 1,
                isvalid: false
            };
            console.log(hash);
            Promise.resolve(User.create(nUser)
                        .then((user)=>{
                            res.send(nuser);
                        })).catch(next);
        });
    });
    
    
    
});
module.exports = user;