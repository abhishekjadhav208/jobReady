import Course from "../models/course/courseModel.js";


export const getAllCourses = async (req, res) => {
  try {
    const course = await Course.find();
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOneCourses = async (req, res) => {
  try {
    const id = req.params.id;
    const course = await Course.find({id })
    res.json(course);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
};
