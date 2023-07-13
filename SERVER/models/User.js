const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fisrtName: {
        type:String,
        required: true,
        trim: true,
    },
    lastName: {
        type:String,
        required: true,
        trim: true,
    },
    email:{
        type:String,
        required: true,
        trim: true,
    },
    password: {
        type:String,
        required: true,
    },
    accountType: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Profile",
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
    },
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Courses",
        }
    ],
    image:{
        type: String,
        required:true,
    },
    courseprogress:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Courseprogress",
        }
    ],
});

module.exports= mongoose.model("User",userSchema);