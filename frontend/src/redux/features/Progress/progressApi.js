// redux/features/Progress/progressApi.js
import axios from "axios";

export const completeLessons = async (courseId, lessonId) => {
  const response = await axios.post(
    "http://localhost:5001/api/progress/complete-lesson",
    { courseId, lessonId },
    { withCredentials: true }
  );
  return response.data;
};

export const fetchProgress = async () => {
  const response = await axios.get("http://localhost:5001/api/progress", {
    withCredentials: true,
  });
  return response.data;
};