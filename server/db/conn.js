const mongoose = require("mongoose");

const DB = '(I removed my credentials here)';

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("database connected")).catch((error)=> console.log("error",error))