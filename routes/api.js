
const express= require('express');
const api=express.Router();

// get request for a list of ninjas
api.get('/ninjas', (req, res)=>{
    res.send({type: 'GET'});
  });
   

  //post request to add a ninja
api.post('/ninjas', (req, res)=>{
    console.log(JSON.parse(req.body));
    res.send({type: 'POST'});
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