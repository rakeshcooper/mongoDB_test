// // console.log("test");


// const { MongoClient, ServerApiVersion, Logger } = require('mongodb');
// // const uri = "mongodb+srv://mongo:Coooper@123@cluster0.qmlhy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // const uri =  "mongodb://localhost:27017/"
// const uri =  "mongodb+srv://mongo:Coooper%40123@cluster0.qmlhy.mongodb.net/"
// //Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// });

// async function run() {
//   try {
//    // Connect the client to the server	(optional starting in v4.7)
// client.connect( async err => 
//     { 
//         // const collection = client.db('blog')
//         // const pipeline = [
//         //             {
//         //                 '$match': {
//         //                 'runtime': {
//         //                     '$gt': 70
//         //                 }
//         //                 }
//         //             }, {
//         //                 '$sort': {
//         //                 'year': -1
//         //                 }
//         //             }
//         //             ]
//         // const agg = await collection.aggregate(pipeline).toArray()
//         console.log(collection);
                    
//     }
//     );
//     // Send a ping to confirm a successful connection
//     await client.db("blog").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     let data = client.db("blog")
//     console.log( data.collection("posts").find() );
    
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



