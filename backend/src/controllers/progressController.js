import userProgress from "../models/userProgressModel.js";

export const markLessonComplete = async (req, res) => {
  try {
    const { courseId, lessonId } = req.body;
    const userId = req.user._id;

    let progress = await userProgress.findOne({
      user: userId,
      course: courseId,
    });

    if (!progress) {
      progress = await userProgress.create({
        user: userId,
        course: courseId,
        completedLessons: [],
      });
    }

    if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId);
      await progress.save();
    }

    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCourseProgress = async (req,res) => {
  try {
    const userId = req.user._id;
    const progressList = await userProgress
      .find({ user: userId })
      .populate("course")
      .populate("completedLessons");
      res.json(progressList)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
