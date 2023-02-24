const express = require('express');
const Student = require('../models/student');
const router = express.Router();

router.get('/', (req, res) => {
  Student.find((err,Students)=>{
    if(err){
      console.log("error : ",err);
    }else{
      res.json({title:"Students list ",cont:Students})
    }
  })
 
});

 
//find by name
router.get('/find/:Name',(req,res)=>{
    let Name = req.params.Name;

  Student.find({Name: Name},(err,Student)=>{
    if(err) console.log("error : ",err);
    else{        
         
        

      res.json(Student);
    }
  })
})

//save if !exist
router.post('/',(req,res,next)=>{
  new Student({
    Name : req.body.Name,
    Age: req.body.Age,
    Note: req.body.Note,
  }).save(
    (err,newStudent)=>{
      if(err) console.log("error message : "+ err); else{
        console.log(newStudent);
        res.json(" : Student : "+ newStudent.Name+ "  added");
      }
    }
  )
});

router.put('/update/:id',(req,res,next)=>{
  const id = req.params.id;
  Student.findByIdAndUpdate(id,{
    Name : req.body.Name,
    Age: req.body.Age,
    Note: req.body.Note,
  },(err,newStudent)=>{
    if(err)console.log(err);else{
      console.log("Student Updated");
    }
  })

});

router.delete('/delete/:id',(req,res,next)=>{
  const id = req.params.id;
  Student.findByIdAndDelete(id,(err,Student)=>{
    if(err)console.log(err);else{
      res.send(Student);
      console.log("Student deleted");
    }
  })
})



//add +2 to  students age >18  name starts with a  
router.get('/gte/',(req,res)=>{

  Student.find({ "Age" : { $gte: 18 },"Name":{$regex:/^A/}},{$inc:{Note:2} },(err,Student)=>{
    if(err) console.log("error : ",err);
    else{       

      res.json(Student);
    }
  })
})
 

 
 
module.exports = router;
