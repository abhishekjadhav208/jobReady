import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
const CourseCard = ({ id,title, photo, description }) => {
  const words = title.split(" ");
  return (
    <div className='h-full bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between hover:scale-105'>

      <div className='flex items-start gap-4 p-4'>
        <img
          src={photo}
          alt={title}
          className='w-16 h-16 object-contain rounded-full bg-gray-100 p-2'
        />

        <div className='text-black'>
          <h1 className='text-xl font-semibold'>
            {words[0]} {words[1]} <br />
  {words.slice(2).join(" ")}
          </h1>
          <p className='text-sm text-gray-600'>
            {description}
          </p>
        </div>
      </div>

      <div className='p-4 flex justify-end'>
           <Link to={`/course/${id}`}>
        <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 transition cursor-pointer'>
          Start Learning
          <MdOutlineArrowForwardIos size={14} />
        </button>
        </Link>
      </div>

    </div>
  )
}

export default CourseCard
