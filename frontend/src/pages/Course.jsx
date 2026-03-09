import HeroSection from "../components/HeroSection";
import CourseCard from "../components/CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse } from "../redux/features/Course/courseSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Course = () => {
  const dispatch = useDispatch();
   const navigate = useNavigate();
  const { courseList, courseIsLoading } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(fetchCourse());
  }, [dispatch]);

  if (courseIsLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <HeroSection
        title="Structured Courses"
        description="Learn in-demand skills step-by-step with our curated career paths"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
        {courseList.map((course) => (
          <CourseCard
            key={course._id}
            id={course._id}
            title={course.courseName}
            photo={course.courseImg}
            description={course.description}
          />
        ))}
      </div>

      <div className="flex justify-end mt-10 max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Course;