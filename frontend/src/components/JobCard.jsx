import React from "react";
import { IoBag } from "react-icons/io5";
import { Link } from "react-router-dom";

const JobCard = ({ id, jobName, companyName, location, jobType,jobImg, salary }) => {

  const words = jobName?.split(" ");

  return (
    <div className="border border-gray-200 p-4 md:p-5 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 bg-white">

      {/* Top Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

        <div className="flex items-center gap-3">

          <img
            src={jobImg}
            alt="company"
            className="h-12 w-12 md:h-14 md:w-14 rounded-xl object-cover"
          />

          <span className="text-lg md:text-xl font-bold leading-tight">

            {words?.[0]} {words?.[1]}
            <br />
            {words?.slice(2).join(" ")}

          </span>

        </div>

        <Link to={`/jobs/${id}`}>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-sm md:text-base">

            Apply Now

          </button>

        </Link>

      </div>

      {/* Location */}
      <p className="text-gray-600 font-medium mt-3">
        {location}
      </p>

      <hr className="border-gray-300 my-3" />

      {/* Bottom Info */}
      <div className="flex flex-wrap gap-4 text-sm md:text-base justify-between">

        <p className="flex items-center gap-1">
          <IoBag size={14} />
          Full-Time
        </p>

        <p>{companyName}</p>

        <p>{jobType}</p>

        <p className="font-semibold text-blue-600">
          ₹{salary} / month
        </p>

      </div>

    </div>
  );
};

export default JobCard;