const express = require('express');
const router=express.Router();
const { RequirementModel } = require('../model/requirements');
const bodyparser=require('body-parser');
router.use(bodyparser.json());

router.use(bodyparser.urlencoded({extented:true}));
const multer = require('multer');
const path = require('path');
router.use(express.static('public'));

let storage=multer.diskStorage({
  destination:(req,file,callback) =>{
    callback(null,path.join(__dirname,'../public/RequirementFile'),function(error,success){

      if(error){console.log(error)} else{console.log("success")}
    });
},
filename:(req,file,callback)=>{
  const name=Date.now()+'-'+file.originalname
  callback(null,name,function (error,success){
    if(error){console.log(error)} else{console.log("success")}
  });
}}
);
const upload= multer({storage:storage})

router.post('/create',upload.single('file'),async (req,res)=>{   
  try
  {

    let data = new RequirementModel({ 
        name:req.body.name,
        area:req.body.area,
        institution:req.body.institution,  
        category:req.body.category,
        hours:req.body.hours,
        file:req.file.filename
      }
    )
    
    const postData= await data.save();
    res.status(200).send({success:true,msg:'postData',data:postData})
    /*const data=  RequirementModel.create(req.body);
    res.status(200).json({message:"Requirement created successfully"});*/
  }
  catch(err)
  {
    
    res.status(400).send({success:false,msg:err.message})
  }
})

router.get('/read',async(req,res)=>{
  try
  {
    const data=await RequirementModel.find()
    res.send(data);
   
  }
  catch(err)
  {
      res.status(400).json({error:"No requirement find"});
  }
  })
  router.get('/readone/:id',async(req,res)=>{
    try
    {
        let id=req.params.id;
        const data =await RequirementModel.findOne({"_id": id});
       res.send(data);
  
    }
    catch(err)
    {
        res.status(400).json({error:"No requirement find"});
    }
    })

    router.put('/update/:id',upload.single('file'),async(req,res)=>{
      try {
        let id=req.params.id;
        let data = new RequirementModel({ 
          name:req.body.name,
          area:req.body.area,
          institution:req.body.institution,  
          category:req.body.category,
          hours:req.body.hours,
          file:req.file.filename
        }
      )
      
      const postData= await RequirementModel.findOneAndUpdate({"_id": id},data);
      res.send(postData)
    }
    catch (error)
    {
      res.status(400).send({success:false,msg:err.message})
    }
       
    })
module.exports= router;