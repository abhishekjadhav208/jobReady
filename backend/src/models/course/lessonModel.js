import mongoose from "mongoose";

const lessonSchema=new mongoose.Schema({
lessonName:{
    type:String,
    required:true,
},

order:Number,

videoUrl:{
    type:String,
    default:""
},

moduleId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Module"
}

},{timestamps:true});


const Lesson=mongoose.model("Lesson",lessonSchema);
export default Lesson;

