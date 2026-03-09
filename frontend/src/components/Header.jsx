import { FaBriefcase, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
const Header = () => {
  const dispatch=useDispatch();
  const {userData}=useSelector((state)=>state.auth);
  const profileImg=userData?.profilePic;
  return (
    <div className="flex justify-between h-12 ">
      <Link to="/">
      <div className="flex items-center justify-center gap-2 p-2">
        <FaBriefcase className="text-[#1D56B3] hover:text-blue-600 text-2xl md:text-3xl" />
        <p className="font-bold text-[15px] text-[#B4CEF1] md:text-2xl text-center hover:text-blue-600 cursor-pointer">Job-Ready</p>
      </div>
      </Link>
      

      <div className="flex gap-10 pr-2 justify-center items-center">
        <Link to="/course">
         <p className="hidden sm:block text-gray-500 hover:text-blue-600  border-b-2 border-transparent  cursor-pointer " >
          Courses
        </p>
        </Link>

        <Link to="/progress">
         <p className="hidden sm:block text-gray-500 hover:text-blue-600  border-b-2 border-transparent  cursor-pointer " >
          Progress
        </p>
        </Link>
       
       

       <Link to="/job">
        <p className="hidden sm:block text-gray-500 hover:text-blue-600  border-b-2 border-transparent  cursor-pointer ">Jobs</p>
       </Link>
      {
        profileImg ?
        <Link to='/profile'>
                  <img src={profileImg} alt="..." className="w-8 h-8 rounded-full object-cover border border-gray-300"/>
       </Link>
        :
          <Link to='/profile'>
                  <FaUserCircle size={30} className="text-blue-500" />
       </Link>

      }
       
      </div>
    </div>
  );
};

export default Header;
