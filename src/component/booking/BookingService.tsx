import { SiTicktick } from "react-icons/si";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../redux/features/hooks";

import convertToTwelveHourFormat from "../../utils/convertToTwelveHourFormat";
const BookingService = () => {
  const {
    service: serviceData,
    bookingDate,
    slot: slotData,
  } = useAppSelector((state) => state.booking);

  const [searchParams] = useSearchParams();
  const queryParams = searchParams.get("from");

  const bookingDay = new Date(bookingDate).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
  });

  return (
    <>
      <div>
        <div className="bg-brand-secondary p-4 rounded-xl shadow">
          <div className=" grid grid-cols-1 md:grid-cols-12 gap-2">
            <div className=" md:col-span-4">
              <img src={serviceData?.image} alt="" className="w-full" />
            </div>
            <div className=" space-y-2 md:col-span-8 md:my-auto">
              <h3 className="text-xl font-semibold text-sky-50">
                {serviceData?.name}
              </h3>
              <p className="text-slate-400 text-sm">
                {serviceData?.description}
              </p>
              <div className="flex gap-3 items-center">
                <div className="flex items-center gap-3 font-bold">
                  <SiTicktick className="text-base text-cyan-500 " />
                  <p className="text-sky-50">{serviceData?.duration} min</p>
                </div>
                <div className="flex items-center gap-3 font-bold">
                  <SiTicktick className="text-base text-cyan-500" />
                  <p className="text-sky-50">৳ {serviceData?.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {queryParams == "service-details" && (
          <div className="flex gap-3 items-center mt-5">
            <div className="flex items-center gap-3 font-semibold bg-brand-secondary p-4 rounded-xl shadow">
              <FaCalendarAlt className="text-base text-cyan-500 " />
              <p className="text-sky-50">{bookingDay}</p>
            </div>
            <div className="flex items-center gap-3 font-semibold bg-brand-secondary p-4 rounded-xl shadow">
              <FaRegClock className="text-base text-cyan-500" />
              <p className="text-sky-50">
                {slotData?.startTime &&
                  slotData?.endTime &&
                  convertToTwelveHourFormat(
                    slotData?.startTime,
                    slotData?.endTime
                  )}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BookingService;
