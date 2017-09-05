
var express = require('express');
 var router = express.Router();
 var Bodim=require('../models/Bodim');


router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
Bodim.getBodimByDistrict(req.params.id,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else{
  res.json(rows);
  }
  });
 }
 else{
 
Bodim.getAllBodim(function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
 
 });
 }
});


router.post('/',function(req,res,next){
 
Bodim.addBodim(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else{
  res.json(req.body);//or return count for 1 &amp;amp;amp; 0
  }
  });
 });

 
 router.put('/:id',function(req,res,next){
 
Bodim.updateBodim(req.params.id,req.body,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });
 module.exports=router;