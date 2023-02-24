const express = require('express');
const Contact = require('../models/contact');
const router = express.Router();

router.get('/', (req, res) => {
  Contact.find((err,contacts)=>{
    if(err){
      console.log("error : ",err);
    }else{
      res.json({title:"liste des contactes",cont:contacts})
    }
  })
  // res.json({message : 'Hello World!'});
});

router.get('/:id',(req,res)=>{
  Contact.findById(req.params.id,(err,contact)=>{
    if(err) console.log("error : ",err);
    else{
      res.json(contact);
    }
  })
})

router.post('/',(req,res,next)=>{
  new Contact({
    FullName : req.body.FullName,
    Phone: req.body.Phone
  }).save(
    (err,newContact)=>{
      if(err) console.log("error message : "+ err); else{
        console.log(newContact);
        res.json(" : Contact : "+ newContact._id + "  added");
      }
    }
  )
});

router.put('/update/:id',(req,res,next)=>{
  const id = req.params.id;
  Contact.findByIdAndUpdate(id,{
    FullName : req.body.FullName,
    Phone: req.body.Phone
  },(err,newContact)=>{
    if(err)console.log(err);else{
      console.log("Contact Updated");
    }
  })

});

router.delete('/delete/:id',(req,res,next)=>{
  const id = req.params.id;
  Contact.findByIdAndDelete(id,(err,contact)=>{
    if(err)console.log(err);else{
      res.send(contact);
      console.log("Contact deleted");
    }
  })
})

module.exports = router;


// const express = require('express');
// const Contact = require('../models/contact');
// const router = express.Router();
 


// router.post('/',(req,res,next)=>{
//  var contact = new Contact({
//     fullName:req.body.contactName,
//      phone:req.body.contactNumber
//     })
//  contact.save((err, newContact) => {
//     if(err){
//         console.log('there is an error',err);
//     } else {
//         res.json(newContact);
//     }
//  });
// });

// router.get('/',(req,res,next)=>{
//     Contact.find((err,contacts)=>{
//         if(err){
//             console.log('error',err);
//         } else {
//             res.json({title:"listes des contacts",cont: contacts});
//         }
//     })
// });

// router.get('/:id',(req,res)=>{
//     Contact.findById(req.params.id,(err,contact)=>{
//       if(err) console.log("error : ",err);
//       else{
//         res.json(contact);
//       }
//     })
//   })

//   router.put('/update/:id',(req,res,next)=>{
//     const id = req.params.id;
//     Contact.findByIdAndUpdate(id,{
//       FullName : req.body.FullName,
//       Phone: req.body.Phone
//     },(err,newContact)=>{
//       if(err)console.log(err);else{
//         console.log("Contact Updated");
//       }
//     })
  
//   });
  
//   router.delete('/delete/:id',(req,res,next)=>{
//     const id = req.params.id;
//     Contact.findByIdAndDelete(id,(err,contact)=>{
//       if(err)console.log(err);else{
//         res.send(contact);
//         console.log("Contact deleted");
//       }
//     })
//   })



// module.exports = router ;