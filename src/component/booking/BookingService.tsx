import { SiTicktick } from "react-icons/si";
import serviceImage from "../../assets/images/car-1.png";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";
const BookingService = () => {
  return (
    <>
      <div>
        <div className="bg-brand-secondary p-4 rounded-xl shadow">
          <div className=" grid grid-cols-1 md:grid-cols-12 gap-2">
            <div className=" md:col-span-4">
              <img src={serviceImage} alt="" className="w-full" />
            </div>
            <div className=" space-y-2 md:col-span-8 md:my-auto">
              <h3 className="text-xl font-semibold text-sky-50">Basic wash</h3>
              <p className="text-slate-400 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, facere?
              </p>
              <div className="flex gap-3 items-center">
                <div className="flex items-center gap-3 font-bold">
                  <SiTicktick className="text-base text-cyan-500 " />
                  <p className="text-sky-50">30 min</p>
                </div>
                <div className="flex items-center gap-3 font-bold">
                  <SiTicktick className="text-base text-cyan-500" />
                  <p className="text-sky-50">৳ 2000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex gap-3 items-center mt-5">
          <div className="flex items-center gap-3 font-semibold bg-brand-secondary p-4 rounded-xl shadow">
            <FaCalendarAlt className="text-base text-cyan-500 " />
            <p className="text-sky-50">16 Ot</p>
          </div>
          <div className="flex items-center gap-3 font-semibold bg-brand-secondary p-4 rounded-xl shadow">
            <FaRegClock className="text-base text-cyan-500" />
            <p className="text-sky-50">12:00 am - 01:00 pm</p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default BookingService;
