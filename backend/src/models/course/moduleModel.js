import mongoose from "mongoose"

const moduleSchema=new mongoose.Schema({
moduleName:{
type:String,
required:true
},
order:Number,

courseId:{
type:mongoose.Schema.Types.ObjectId,
ref:"Course"
},

},{timestamps:true})

const Module=mongoose.model("Module",moduleSchema);
export default Module;