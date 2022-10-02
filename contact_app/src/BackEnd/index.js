const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://mohsin:wazirali786@cluster0.ixvqejl.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Running")
}).catch((err)=>{
    console.log("Error",err)
})