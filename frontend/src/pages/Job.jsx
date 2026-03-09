import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import JobCard from "../components/JobCard";
import photo from "../assets/frontend.png.jpeg";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllJob,
  fetchAppliedJobs,
} from "../redux/features/Job/jobSlice";

const Job = () => {
  const dispatch = useDispatch();

  const { jobList = [], isLoading, appliedJobs } = useSelector(
    (state) => state.job
  );

  // 🔹 Ensure array
  const appliedJobsArray = Array.isArray(appliedJobs) ? appliedJobs : [];

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;

  useEffect(() => {
    dispatch(fetchAllJob());
    dispatch(fetchAppliedJobs());
  }, [dispatch]);

  // Pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobList.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobList.length / jobsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      <HeroSection />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[65%_35%] gap-6 p-4 md:p-6">

        {/* LEFT JOB LIST */}
        <div className="space-y-4">

          {isLoading ? (
            <p className="text-center text-gray-500 mt-8">
              Loading jobs...
            </p>
          ) : (
            currentJobs.map((job) => {

              const alreadyApplied = appliedJobsArray.some(
                (app) => app?.job?._id === job._id
              );

              return (
                <JobCard
                  key={job._id}
                  id={job._id}
                  jobName={job.jobName}
                  companyName={job.companyName}
                  location={job.location}
                  jobType={job.jobType}
                  jobImg={job.jobImg}
                  salary={job.salary}
                  applied={alreadyApplied}
                />
              );
            })
          )}

          {/* Pagination */}
          <div className="flex flex-wrap justify-between items-center gap-3 mt-6 bg-white p-4 rounded-xl shadow-md">

            <button
              onClick={handleBack}
              disabled={currentPage === 1}
              className={`flex items-center px-4 py-2 rounded-md font-semibold text-white ${
                currentPage === 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              <MdOutlineArrowBackIos className="mr-1" />
              Back
            </button>

            <span className="font-bold text-gray-700">
              Page {currentPage} / {totalPages || 1}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`flex items-center px-4 py-2 rounded-md font-semibold text-white ${
                currentPage === totalPages
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              Next
              <MdOutlineArrowForwardIos className="ml-1" />
            </button>

          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* Applied Companies */}
          <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">

            <p className="text-xl font-bold mb-3">
              Applied Companies
            </p>

            <hr className="mb-4" />

            {appliedJobsArray.length > 0 ? (

              appliedJobsArray.slice(0, 3).map((app) => (

                <div
                  key={app._id}
                  className="flex items-center gap-3 mb-4"
                >

                  <img
                    src={app?.job?.jobImg}
                    alt="company"
                    className="h-12 w-12 md:h-14 md:w-14 rounded-xl object-cover"
                  />

                  <div>
                    <p className="font-semibold">
                      {app?.job?.companyName}
                    </p>

                    <p className="text-sm text-gray-500">
                      {app?.job?.jobName}
                    </p>
                  </div>

                </div>

              ))

            ) : (
              <p className="text-gray-500 text-sm">
                No applied jobs yet.
              </p>
            )}

            <Link to="/companies" className="flex justify-end mt-3">

              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm">

                View List
                <MdOutlineArrowForwardIos size={14} />

              </button>

            </Link>

          </div>

          {/* Career Resources */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-5">

            <h2 className="text-xl font-bold mb-4">
              Career Resources
            </h2>

            <div className="flex gap-3 items-center mb-4">

              <img
                src={photo}
                alt="career"
                className="h-14 w-14 rounded-xl object-cover"
              />

              <p className="text-gray-500 text-sm">
                Resume tips, interview advice and career guidance
                to boost your job search.
              </p>

            </div>

            <Link to="/career" className="flex justify-end">

              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm">

                Explore
                <MdOutlineArrowForwardIos size={16} />

              </button>

            </Link>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Job;