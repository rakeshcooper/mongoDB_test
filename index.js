const mongoose = require('mongoose')

// mongoose.connect("mongodb://localhost:27017/cooper")

async function run(){
      try {
      await mongoose.connect('mongodb+srv://mongo:Coooper%40123@cluster0.qmlhy.mongodb.net/blog');
    } catch (error) {
      console.log(error);
    }

}

run()
