import React, { useEffect } from "react";
import photo from "../assets/frontend.png.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppliedJobs } from "../redux/features/Job/jobSlice";
import { useNavigate } from "react-router-dom";

const Companies = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, appliedJobs } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(fetchAppliedJobs());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-xl text-gray-600">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-10">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Applied Companies
        </h1>
        <p className="mt-3 text-gray-600 text-sm sm:text-base">
          Explore companies you have applied to.
        </p>
      </div>

      {/* Company Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {Array.isArray(appliedJobs) && appliedJobs.length > 0 ? (

          appliedJobs.map((app) => (
            <div
              key={app._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center"
            >

              <img
                src={app?.job?.jobImg}
                alt="company"
                className="h-20 w-20 mx-auto mb-4 rounded-full object-cover"
              />

              <h2 className="text-xl font-semibold text-gray-800">
                {app?.job?.companyName}
              </h2>

              <p className="text-gray-500 mt-2">
                {app?.job?.jobName}
              </p>

              <p className="text-gray-400 text-sm mt-1">
                {app?.job?.location}
              </p>

            </div>
          ))

        ) : (

          <div className="col-span-full text-center mt-10">

            <p className="text-gray-500 text-lg">
              You haven't applied to any jobs yet 🚀
            </p>

            <button
              onClick={() => navigate("/job")}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
            >
              Browse Jobs
            </button>

          </div>

        )}

      </div>


    </div>
  );
};

export default Companies;