// Task1: initiate app and run server at 3000
// app.js

const express = require('express');
const { BlogModel } = require('../../model/blog');
const router=express.Router();


router.post('/create',async(req,res)=>{   
  try
  {
    const data= await BlogModel.create(req.body);
    res.status(200).json({message:"Blog created successfully"});
  }
  catch(err)
  {
    res.status(400).json({message:err.message});
  }
})

router.get('/read',async(req,res)=>{
try
{
  const data=await BlogModel.find()
  res.json(data);
}
catch(err)
{
    res.status(400).json({error:"No blog find"});
}
})



router.put('/update/:id',async(req,res)=>{
    try {
        let id=req.params.id;
    const data= await BlogModel.findOneAndUpdate({"_id":id},req.body)
   res.send(data);
    }
    catch (error)
    {
        res.status(400).json({error:"No blog updated"});
    }

   

})

router.delete('/delete/:id',async(req,res)=>{
    try
    {
        let id=req.params.id;
        
       const data= await BlogModel.findOneAndDelete({"_id":id},req.body);
       res.status(200).json({message:"Blog deleted successfully"});
    }
    catch (error)
    {
        res.status(400).json({error:"No blog deleted"});
    }

       
   
})
module.exports= router;
//Running server at port 8082
