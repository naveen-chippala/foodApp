const mongoose = require('mongoose');
const mongoURI='mongodb://chippalanaveen2:RC3m1WbjhNMR7D9r@ac-nhg5uzw-shard-00-00.f2medaj.mongodb.net:27017,ac-nhg5uzw-shard-00-01.f2medaj.mongodb.net:27017,ac-nhg5uzw-shard-00-02.f2medaj.mongodb.net:27017/yummymern?ssl=true&replicaSet=atlas-hzcnqt-shard-0&authSource=admin&retryWrites=true&w=majority';
// const mongoDB=async() =>{
//   await  mongoose.connect(mongoURI,{useNewUrlparser: true},(err,result)=>
//     {
//         if(err)console.log("---",err)
//         else{
//         console.log("connected");
//         // const fetched_data=await mongoose.connection.db.collection("fooditems");
//         // fetched_data.find({}).toArray(function(err, data)){
//         //     if(err) console.log(err);
//         //     else console.log(data);
//         // }
//     }
//     });
    
// }
// module.exports=mongoDB;

// const mongoose = require("mongoose");


const mongoDB= async () => {

    console.log("your are here");
  try {
    mongoose.set("strictQuery", false);
    const res = await mongoose.connect(mongoURI);
    console.log(
      "database connected",
      res.connection.host,
      ", db name: ",
      res.connection.name
    );
    const db = res.connection.db;
    const collection = db.collection('fooditems'); // Replace 'fooditems' with your collection name
   
       
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = mongoDB;

