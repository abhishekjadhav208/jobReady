import React, { useRef } from "react";
import { FaUserCircle, FaCamera } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getlogout, getProfileUpadated } from "../redux/features/Auth/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const fileRef = useRef();

  const { userData } = useSelector((state) => state.auth);

  // If user not logged in
  if (!userData) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
        <a href="/login">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md">
            Login
          </button>
        </a>
      </div>
    );
  }

  // Click image
  const handleImageClick = () => {
    fileRef.current.click();
  };

  // Change image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      dispatch(
        getProfileUpadated({
          profilePic: reader.result,
        })
      );
    };
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4 sm:p-6">

      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-10 w-full max-w-3xl">

        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">

          {/* Profile Image */}
          <div
            className="relative cursor-pointer group"
            onClick={handleImageClick}
          >
            {userData.profilePic ? (
              <img
                src={userData.profilePic}
                alt="profile"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-blue-500"
              />
            ) : (
              <FaUserCircle className="text-blue-500 text-[80px] sm:text-[100px]" />
            )}

            {/* Hover Camera Icon */}
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
              <FaCamera className="text-white text-lg sm:text-xl" />
            </div>
          </div>

          {/* Hidden Input */}
          <input
            type="file"
            hidden
            ref={fileRef}
            onChange={handleImageChange}
          />

          {/* User Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {userData.name}
            </h2>

            <p className="text-gray-500 text-sm sm:text-lg">
              {userData.email}
            </p>

            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Member since {new Date().getFullYear()}
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 sm:my-8" />

        {/* Logout */}
        <div className="mt-6 sm:mt-10 flex justify-center sm:justify-end">

          <button
            onClick={() => dispatch(getlogout())}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow-md w-full sm:w-auto"
          >
            Logout
          </button>

        </div>

      </div>
    </div>
  );
};

export default Profile;