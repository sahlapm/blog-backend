// Task1: initiate app and run server at 3000
// app.js

const express = require('express');
const bcrpt=require('bcrypt')
const jwt=require('jsonwebtoken')
const {LoginModel } = require('../../model/login');
const router=express.Router();


router.post('/create',async(req,res)=>{   
    try
    {
      const data= await LoginModel.create(req.body);
      res.status(200).json({message:"login created successfully"});
    }
    catch(err)
    {
      res.status(400).json({message:err.message});
    }
  })

router.post('/read',async(req,res)=>{
  try {
    const data=await LoginModel.findOne({"username":req.body.username},{"password":req.body})
       
        if(data)
        {
            res.send(true);
        }
        else
        {
            res.send(false);
        }
  
  } catch (error) {
    res.status(400).json({error:"No log find"});
  }
   
})




module.exports= router;
//Running server at port 8082
