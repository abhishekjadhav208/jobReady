import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProgress } from "../redux/features/Progress/progressSlice";

const Progress = () => {
  const dispatch = useDispatch();
  const { progressList = [], isLoading } = useSelector((state) => state.progress);

  useEffect(() => {
    dispatch(getProgress());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading your progress...</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-600">
        My Learning Progress
      </h1>

      {progressList.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          You haven’t started any courses yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {progressList.map((p) => {
            const course = p.course || {};
            const totalLessons = 15; // Fixed total lessons
            const completed = p.completedLessons ? p.completedLessons.length : 0;
            const percent = Math.round((completed / totalLessons) * 100);

            return (
              <div
                key={course._id || Math.random()}
                className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  {course.courseName || "Unnamed Course"}
                </h2>
                <p className="text-gray-600 mb-4">
                  {completed} / {totalLessons} lessons completed ({percent}%)
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="h-4 bg-blue-500 rounded-full"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>

                {/* Status Badge */}
                <div className="mt-4 flex gap-2">
                  {percent === 100 ? (
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-semibold">
                      Completed
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold">
                      In Progress
                    </span>
                  )}
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">
                    {totalLessons} Lessons
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Progress;