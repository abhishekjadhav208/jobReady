import Module from "../models/course/moduleModel.js"

export const getModules=async(req,res)=>{

    try {
        const courseId=req.params.courseId;
            const modules=await Module.find({courseId});
            res.json(modules);
    } catch(error)
        {
        res.status(500).json({message:error.message});
    }
}