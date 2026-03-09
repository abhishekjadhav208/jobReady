import { Link } from "react-router-dom";
const PracticeCard = ({ id, title, photo }) => {
  return (
    <div className=" bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between hover:scale-105">
      
      <div className="flex items-start gap-4 p-4">
        <img
          src={photo}
          alt={title}
          className="h-16 w-16 object-contain rounded-md bg-black p-2"
        />
        <div className="flex flex-col font-bold text-xl ">
             <h1 className="">{title}</h1>
        </div>
       
      </div>

      <div className="px-4 pb-4 text-gray-700">
        <p>80%</p>
        <p className="font-bold">Highest Score: 9/10</p>
        <Link to='/practiceQuestion'>
 <button className="w-full mt-2 px-3 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-800 transition">
          Start Practicing
        </button>
        </Link>
       
      </div>

    </div>
  );
};

export default PracticeCard;