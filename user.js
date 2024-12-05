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
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies:[String],
    address: addressSchema
})

module.exports = mongoose.model("user", userSchema)