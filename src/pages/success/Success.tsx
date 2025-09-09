import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";

const Success = () => {
  return (
    <>
      <div className="bg-brand-primary h-screen flex justify-center items-center">
        <div className="bg-brand-secondary rounded-lg shadow-lg p-12 mx-4">
          <div className="mb-8 lg:12">
            <AiFillCheckCircle className="text-green-500 size-20 mx-auto mb-4" />

            <h1 className="text-sky-50 text-xl md:text-2xl lg:text-3xl font-semibold text-center">
              Payment Successful
            </h1>
          </div>
          <div className="flex flex-col items-center sm:flex-row gap-5">
            <Link
              to="/"
              className="text-sky-50 bg-cyan-600 px-6 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer select-none"
            >
              Go to Home
            </Link>
            <Link
              to="/dashboard/upcoming-booking"
              className="text-sky-50 bg-cyan-600 px-6 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer select-none"
            >
              See my Booking
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
