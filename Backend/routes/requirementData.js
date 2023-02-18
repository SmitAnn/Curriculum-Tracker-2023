const express = require('express');
const router=express.Router();
const  RequirementModel  = require('../model/requirements');
const bodyparser=require('body-parser');
router.use(bodyparser.json());

router.use(bodyparser.urlencoded({extented:true}));
const multer = require('multer');
const path = require('path');
const { stringify } = require('querystring');
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
        file: req.body.file==''?'': req.file.filename,
        isClosed:req.body.isClosed
      }
    )
    const postData= await data.save();
    res.status(200).send({success:true,msg:'postData',data:postData})
  }
  catch(err)
  {
    res.status(400).send({success:false,msg:err.message})
  }
})

router.get('/read',async(req,res)=>{
  try
  {
    const data=await RequirementModel.find();
    res.send(data);   
  }
  catch(err)
  {
      res.status(400).json({error:"No requirement find"+err.message});
  }
  })
  router.get('/readone/:id',async(req,res)=>{
    try
    {
        let id=req.params.id;
        const data =await RequirementModel.findOne({"_id": id});
       res.json(data);  
    }
    catch(err)
    {
        res.status(400).json({error:"No requirement find"});
    }
    })
    
    router.get('/download/:file',async(req,res)=>
    {
      try
      {
        let file=req.params.file;
        res.download("../backend/public/RequirementFile/"+file);
      
      }
      catch(err)
    {
        res.status(400).json({error:"Download Failed"});
    }
    })

    router.put('/updateStatus',async(req,res)=>{
      try {     
      
        let data = new RequirementModel({ 
          _id:req.body._id,
          isClosed:req.body.isClosed
        }
      )
      let id=req.body._id; 
     const postData= await RequirementModel.findByIdAndUpdate({"_id": id},data);    
     res.status(200).send({success:true,msg:'postData',data:postData})
     console.log(req.body.isClosed);
    }
    catch (error)
    {
      res.status(400).send({success:false,msg:error.message})
      console.log(error.message);
    }       
    })

    router.put('/update',upload.single('file'),async(req,res)=>{
      try {     
      
        let data = new RequirementModel({ 
          _id:req.body.id,
          name:req.body.name,
          area:req.body.area,
          institution:req.body.institution,  
          category:req.body.category,
          hours:req.body.hours,
         // file: typeof(req.file.filename)==="undefined"?'': req.file.filename  
         file: req.body.file==''?'': (typeof(req.file)==="undefined"?req.body.file:req.file.filename)  ,
         isClosed:req.body.isClosed
        }
      )
      let id=req.body.id; 
     const postData= await RequirementModel.updateOne({"_id": id},data);    
     res.status(200).send({success:true,msg:'postData',data:postData})
    }
    catch (error)
    {
      res.status(400).send({success:false,msg:error.message})
      console.log(error.message);
    }       
    })

    router.delete('/delete/:id',async(req,res)=>{           
      try
      {
         let id=req.params.id;
         const data= await RequirementModel.findOneAndDelete({"_id":id});
         res.json({"status":"success"})
      }
      catch (error)
      {
          res.status(400).json({error:"No requirement deleted"});
          console.log(error);
      }
  })

  router.get('/getnew',async(req,res)=>{
    try
    {
     
        const data=await RequirementModel.find({ "isClosed":false});
      res.send(data);   
    }
    catch(err)
    {
        res.status(400).json({error:"No requirement find"+ err.message});
    }
    })
    router.put('/update',upload.single('file'),async(req,res)=>{
      try {
        // console.log("athira")
        let data = new CurriculumModel({ 
          _id: req.body.id,
          comments:req.body.comments,
          file:req.file.filename,
          // file: req.body.file==''?'': (typeof(req.file)==="undefined"?req.body.file:req.file.filename)  ,
          isApproved: req.body.isApproved
          // isApproved:true
        }
      )  
      
      let id = req.body.id;
      const postData= await CurriculumModel.updateOne({"_id": id},data);
  
      res.status(200).send({success:true,msg:'postData',data:postData})
      // res.send(postData)
    }
    catch (error)
    {
      res.status(400).send({success:false,msg:error.message})
      console.log(error.message);
    }
       
    })
module.exports= router;