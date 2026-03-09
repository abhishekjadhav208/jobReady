import mongoose  from "mongoose";


const userProgressSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    },

    completedLessons:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Lesson"
    }]
})

export default mongoose.model("UserProgress",userProgressSchema);