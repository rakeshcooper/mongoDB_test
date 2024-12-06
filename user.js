const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
     street:String,
     city:String
})

const userSchema = new mongoose.Schema({
    name: String,
    age: {
      type: Number,
      min:1,
      max:100,
      validate: {
        validator: v => v % 2 === 0,
        message: props => `${props.value} is not an even number`
      }
    },
    email:{
    type: String,
    minlength:10,
    required:true,
    lowercase: true
    },
    createAt: {
        type: Date,
        immutable:true,
        default:() => new Date(),
    },
    updatedAt: Date,
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user"
    },
    hobbies:[String],
    address: addressSchema
})

userSchema.methods.sayHi = function(){
  console.log(`Hi my name is ${this.name}`)
}

userSchema.statics.findByName = function(name){
  return this.find({name: new RegExp(name,'i')})
}

userSchema.query.byName = function(name){
  return this.where({name: new RegExp(name,'i')})
}

userSchema.virtual("namedEmail").get = function(){
  return `${this.name} <${this.email}>`
}


module.exports = mongoose.model("user", userSchema)