// const express = require("express");
const mongoose = require("mongoose");
// const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true
    // useCreateIndex : true,
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})


// app.listen(3000,()=>{
//     console.log("on port 3000!!!")
// })