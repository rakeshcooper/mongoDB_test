const mongoose = require('mongoose')
const User = require('./user')

// mongoose.connect("mongodb://localhost:27017/cooper")
run()
async function run(){
  mongoose.connect('mongodb+srv://mongo:Coooper%40123@cluster0.qmlhy.mongodb.net/test');
  const user = await User.create({name: "Cooper", age: 10})
  user.name = "cooper naidu"
  await user.save()
  
  // const user = new User({name: "Cooper", age: 10})
  // await user.save()
  console.log(user);
  
}


