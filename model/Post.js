const mongoose = require("mongoose");   //18  creating schema using mongoose package
const PostSchema = mongoose.Schema({    //19
    title : {                           //20
      type : String,
      required : true,
    },
    description : {
        type : String,
        required : true,
    },
    date : {
        type : String,
        default : Date.now,
    }
})

module.exports = mongoose.model("Posts",PostSchema)     //21