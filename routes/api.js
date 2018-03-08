
const express= require('express');
const api=express.Router();
const Ninja = require('../models/ninja');
// get request for a list of ninjas
api.get('/ninjas', (req, res)=>{
    res.send({type: 'GET'});
  });
   

  //post request to add a ninja
api.post('/ninjas', (req, res)=>{
    Ninja.create(req.body).then((ninja)=>{
        res.send(ninja);
    });
    
  });
  
  // put request to update a ninja
api.put('/ninjas/:id', (req, res)=>{
    res.send({type: 'PUT'});
  });
  
  // delete request to delete a ninja
api.delete('/ninjas/:id', (req, res)=>{
    res.send({id: req.id});
  });
module.exports = api;