const mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = async () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongoDB Success");
    })
};

module.exports=connectToMongo;
