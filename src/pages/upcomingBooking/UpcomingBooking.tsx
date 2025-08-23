import { SiTicktick } from "react-icons/si";
import ServiceImage from "../../assets/images/car-1.png";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";
const UpcomingBooking = () => {
  return (
    <>
      <div>
        <div className="border-b-2 border-dashed pb-6 border-b-brand-primary ">
          <h1 className="text-xl font-semibold text-sky-50">
            Upcoming Booking
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3">
          <div className=" lg:flex lg:gap-2 bg-brand-primary rounded-lg shadow">
            <div className="w-4/5 lg:w-1/4 mx-auto lg:mx-0">
              <img src={ServiceImage} alt="" className=" w-full" />
            </div>
            <div className="p-4">
              <h1 className="text-sky-50 text-xl font-semibold ">Basic Wash</h1>
              <div className="gap-3 mt-3 font-semibold">
                <p className="text-sky-50 text-lg">1d 12h 6m</p>
              </div>
              <div className="mt-3">
                <div className="flex items-center gap-3 ">
                  <FaCalendarAlt className="text-sm text-cyan-500 " />
                  <p className="text-sky-50">16 Ot</p>
                </div>
                <div className="flex items-center gap-3 ">
                  <FaRegClock className="text-sm text-cyan-500" />
                  <p className="text-sky-50">12:00 am - 01:00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingBooking;
