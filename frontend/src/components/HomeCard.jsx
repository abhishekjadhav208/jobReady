import htmlCode from "../assets/htmlCode.jpg";
import progress from "../assets/progress.jpg";
import job from "../assets/jobHome.jpg";
import { Link } from "react-router-dom";

const HomeCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 place-items-center items-center gap-6 py-4 px-4">

      {/* Course Card */}
      <Link to="/course" className="w-full flex justify-center">
        <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition duration-300 hover:scale-105">
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src={htmlCode}
              alt="HTML"
              className="w-16 h-16 object-contain rounded-full bg-gray-100 p-2"
            />
            <p className="font-bold text-xl text-gray-900 leading-tight">
              <span className="block">Structured</span>
              <span className="block">Courses</span>
            </p>
          </div>

          <p className="text-gray-600 text-center text-sm leading-relaxed">
            <span className="block">Learn Full Stack, Data</span>
            <span className="block">Science & more step-by-step</span>
          </p>

        </div>
      </Link>

      {/* Progress Card */}
      <Link to="/progress" className="w-full flex justify-center">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300 hover:scale-105">
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src={progress}
              alt="Progress"
              className="w-16 h-16 object-contain rounded-full bg-gray-100 p-2"
            />

            <p className="font-bold text-xl text-gray-900 leading-tight">
              <span className="block">Progress</span>
              <span className="block">Tracking</span>
            </p>
          </div>

          <p className="text-center text-sm text-gray-500 leading-relaxed">
            <span className="block">Monitor your learning journey</span>
            <span className="block">and track your growth</span>
          </p>

        </div>
      </Link>

      {/* Job Card */}
      <Link to="/job" className="w-full flex justify-center">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300 hover:scale-105">
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src={job}
              alt="Job"
              className="w-16 h-16 object-contain rounded-full bg-gray-100 p-2"
            />

            <p className="font-bold text-xl text-gray-900 leading-tight">
              <span className="block">Job</span>
              <span className="block">Opportunities</span>
            </p>
          </div>

          <p className="text-center text-sm text-gray-500 leading-relaxed">
            <span className="block">Find and apply for jobs that</span>
            <span className="block">brighten your future</span>
          </p>

        </div>
      </Link>

    </div>
  );
};

export default HomeCard;