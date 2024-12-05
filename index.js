const mongoose = require('mongoose')
const User = require('./user')

// mongoose.connect("mongodb://localhost:27017/cooper")
run()
async function run(){
  mongoose.connect('mongodb+srv://mongo:Coooper%40123@cluster0.qmlhy.mongodb.net/test');
  try{
    const user = await User.create({
    name: "Cooper", 
    age: 10,
    hobbies:["Pc gaming","weight lifting"],
    address:{
      street:'chellappa street',
      city: "chennai"
    }
  })
  // user.name = "cooper naidu"
  // await user.save()
  console.log(user);
  }catch(err){
    console.error(err.message);
    
  }
  
  
}


