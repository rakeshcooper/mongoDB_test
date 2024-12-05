const mongoose = require('mongoose')
const User = require('./user')

// mongoose.connect("mongodb://localhost:27017/cooper")
run()
async function run(){
  mongoose.connect('mongodb+srv://mongo:Coooper%40123@cluster0.qmlhy.mongodb.net/test');
  try{
  //   const user = await User.create({
  //   name: "Cooper", 
  //   age: 20,
  //   email:"TEST@test.com",
  //   hobbies:["Pc gaming","weight lifting"],
  //   address:{
  //     street:'chellappa street',
  //     city: "chennai"
  //   }
  // })
  // // user.name = "cooper naidu"
  // // await user.save()
  // console.log(user);
  // const user = await User.findById("6752011c86fceb291ac4b295")
  const user = await User.where("age")
  .equals(26)
  .where("name")
  .equals("Cooper")
  .populate("bestFriend")
  .limit(1)
  // .select("age")
  // user[0].bestFriend = "6752082f11963f5f32122486"
  // await user[0].save()
    console.log(user);
    
  }catch(err){
    console.error(err.message);
    
  }
  
  
}


