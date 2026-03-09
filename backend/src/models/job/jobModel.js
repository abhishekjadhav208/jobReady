import mongoose from "mongoose"

const jobSchema=new mongoose.Schema({
    jobName:{
        type:String,
        required:true
    },

    location:{
        type:String,
        required:true
    },

    companyName:{
        type:String,
        required:true
    },

    jobType:{
        type:String,
        enum:["Full-Time", "Part-Time", "Work-From-Home","Internship"],
    },

    salary:{
        type:Number,
    }



},{timestamps:true});

const Job=mongoose.model("Job",jobSchema);
export default Job;
