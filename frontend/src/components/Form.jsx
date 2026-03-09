import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOneJob,
  applyToJob,
  fetchAppliedJobs,
} from "../redux/features/Job/jobSlice";
import { MdOutlineArrowBackIos } from "react-icons/md";

const Form = () => {
  const { jobId } = useParams();
  const dispatch = useDispatch();

  const { current, isLoading, appliedJobs } = useSelector(
    (state) => state.job
  );

  useEffect(() => {
    dispatch(fetchOneJob(jobId));
    dispatch(fetchAppliedJobs());
  }, [dispatch, jobId]);

  // ✅ Ensure appliedJobs is array
  const jobsArray = Array.isArray(appliedJobs) ? appliedJobs : [];

  const alreadyApplied = jobsArray.some(
    (app) => app?.job?._id === jobId
  );

  const handleApply = async () => {
    await dispatch(applyToJob(jobId));
    dispatch(fetchAppliedJobs());
  };

  if (isLoading || !current) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <Link to="/job" className="flex items-center mb-4">
        <MdOutlineArrowBackIos />
        Back to Jobs
      </Link>

      <div className="border-2 border-gray-200 p-6 rounded-xl shadow-md max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-2">{current.jobName}</h1>

        <p className="text-gray-600 mb-1">
          Company: {current.companyName}
        </p>

        <p className="text-gray-600 mb-1">
          Location: {current.location}
        </p>

        <p className="text-gray-600 mb-1">
          Type: {current.jobType}
        </p>

        <p className="text-gray-600 mb-4">
          Salary: {current.salary} ₹ / month
        </p>

        <button
          onClick={handleApply}
          disabled={alreadyApplied}
          className={`w-full py-2 px-4 rounded-md font-bold text-white ${
            alreadyApplied
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {alreadyApplied ? "Already Applied" : "Apply Now"}
        </button>
      </div>
    </div>
  );
};

export default Form;