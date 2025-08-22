import { Link } from "react-router-dom";
import notFoundImage from "../../assets/images/NotFound.png";
const NotFound = () => {
  return (
    <div className=" bg-[#002051] flex items-center justify-center h-screen relative">
      <div>
        <img src={notFoundImage} className="w-full" alt="Not found image" />
      </div>
      <div className=" absolute bottom-1/4 sm:bottom-2/12">
        <Link
          to={`/`}
          className="text-sky-50 bg-cyan-600 px-4 py-2 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
