const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();

//   used to parese req.body in express ->PUT or POST
   // npm install body-parser 
  

const bodyParser = require('body-parser');
//specifically parse JSON data $ add it to the request.body object
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;




app.get('/', function (req, res) {
   res.send("Welcome to my hotel...  ")
});
//POST route to add a person
//  app.post('/Person',async(req,res)=>{
//    try {
//       const data = req.body
//        const newPerson = new Person(data);
//        const response=await newPerson.save();
//        console.log("data saved")
//        res.status(200).json(response)
//    } catch (err) {
//       console.log(err)
//       res.status(500).json({error:"Internal data is not send"})

//    }
// });
// get routes funcation
// app.get('/person',async(req,res)=>{
// try {
//    const data = await Person.find();
//    console.log('data Get')
//    res.status(200).json(data);
// } catch (error) {
//    console.log(error);
//    res.status(500).json({error:"Data is not Found"})
// }
// });
//  const data = req.body  //Asuming the request body contains the person data
//old method 
//{Create a  new person document using the Mongoose model
//  const newPerson = new Person(data);

//save the new person data to the database

//   newPerson.save((error, savedPerson)=>{
//    if(error){
//       console.log("Error saveing person", error)
//       res.status(500).json({error:'Internal server error'
//       })
//    }else{
//       console.log('Data save successfuly')
//       res.status(200).json(savedPerson);}
//   
//   });

// app.get('/person/:workType',async (req, res)=>{
//  try {
//      const workType = req.params.workType; //Extract the work type from the URL parameter
//    if(workType=='chef'||workType=='manager'||workType=='waiter'){
//        const response= await Person.find({work:workType});
//        console.log("response fetched")
//        res.status(200).json(response)
//    }else{
//       res.status(404).json({error:'Invail error workTpye'})

//    }
//  } catch (error) {
//     console.log(error);
//    res.status(500).json({error:"Data is not Found"})
//  }
// })
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);
app.listen(PORT, () => {
   console.log('My new hotles , plz visit here any time ')
});

