

const express= require('express');
const api=express.Router();
const Ninja = require('../models/ninja');
const Promise=require('bluebird');
// get request for a list of ninjas
api.get('/ninjas', (req, res)=>{
    // Ninja.find((err,resp)=>{
    //   res.send(resp);
    // });
    // Ninja.geoSearch({type:'coordinates'},{near:[parseFloat(req.query.lng), parseFloat(req.query.lat)]},(err,resp)=>{
    //   if(err){
    //     console.log({"error":err})
    //   }else{
    //     res.send(resp);
    //   }
    // });
    // Ninja.aggregate().near({
    //   near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
    //   maxDistance: 100000,
    //   spherical: true,
    //   distanceField: "dist.calculated"
    //  })﻿ 
    Ninja.geoSearch({type:'point'},{near:[parseFloat(req.query.lng),parseFloat(req.query.lat)],maxDistance:5},(err,resp)=>{
        if(err){
          res.send(err);
        }else{
          res.send(resp);
        }
    });
  });
   

  //post request to add a ninja
api.post('/ninjas', (req, res, next)=>{
    Promise.resolve(Ninja.create(req.body)
                         .then((ninja)=>{
                            res.send(ninja);
                       })).catch(next);
    
  });
  
  // put request to update a ninja
api.put('/ninjas/:id', (req, res, next)=>{
  Ninja.findByIdAndUpdate(req.params.id, req.body, (err,resp)=>{
        if(err){
          res.send({"error":err.message});
        }else{
          Ninja.findById(req.params.id,(err,resp)=>{
            if(err){
              res.send({"error": err.message});
            }else{
              res.send(resp);
            }
          });
          
        }
    });
    
  });
  
  // delete request to delete a ninja
api.delete('/ninjas/:id', (req, res, next)=>{
    Ninja.findByIdAndRemove(req.params.id,(err,resp)=>{
      if(err){
        console.log(err.message);
        res.status(422).send({"error" : err.message});
        return;
      }else{
        res.status(200).send({"success" : "Record: "+req.params.id+" was deleted successfully"});
      }
    })
    
  });
module.exports = api;