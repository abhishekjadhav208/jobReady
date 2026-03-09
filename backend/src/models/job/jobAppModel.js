import mongoose from "mongoose"

const jobAppSchema=new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job",
    },

    Status:{
        type:String,
        default:"full-time"
    }
},{timestamps:true});

const JobApp=mongoose.model("JobApp",jobAppSchema);
export default JobApp;
