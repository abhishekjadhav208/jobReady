import Lesson from '../models/course/lessonModel.js'

export const getLessons=async (req,res)=>{
    try {
        const moduleId=req.params.moduleId;
        const lessons= await Lesson.find({moduleId});
        res.json(lessons);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}