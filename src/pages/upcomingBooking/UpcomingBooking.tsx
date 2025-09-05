import { FaCalendarAlt, FaRegClock } from "react-icons/fa";
import { useGetMyUpcomingBookingQuery } from "../../redux/features/booking/bookingApi";
import type { TBookingData } from "../../types/booking.type";
import convertToTwelveHourFormat from "../../utils/convertToTwelveHourFormat";
import DateCountdown from "./DateCountdown ";
const UpcomingBooking = () => {
  const { data: upcomingBookingData } = useGetMyUpcomingBookingQuery(undefined);

  const formatBookingDataAndTime = (date: string, startTime: string) => {
    const [hour, minute] = startTime.split(":").map(Number);
    const bookingTime = new Date(date);
    bookingTime.setHours(hour, minute, 0, 0);
    return bookingTime;
  };
  return (
    <>
      <div>
        <div className="border-b-2 border-dashed pb-6 border-b-brand-primary ">
          <h1 className="text-xl font-semibold text-sky-50">
            Upcoming Booking
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3">
          {upcomingBookingData?.map((upcomingBookingItem: TBookingData) => (
            <div
              key={upcomingBookingData?._id}
              className=" lg:flex lg:gap-2 bg-brand-primary rounded-lg shadow"
            >
              <div className="w-4/5 lg:w-1/4 mx-auto lg:mx-0">
                <img
                  src={upcomingBookingItem?.service?.image}
                  alt="service image"
                  className=" w-full"
                />
              </div>
              <div className="p-4">
                <h1 className="text-sky-50 text-xl font-semibold ">
                  {upcomingBookingItem?.service?.name}
                </h1>
                <div className="gap-3 mt-3 font-semibold">
                  <p className="text-sky-50 text-lg">
                    <DateCountdown
                      date={
                        upcomingBookingItem?.slot?.date &&
                        upcomingBookingItem?.slot?.startTime
                          ? formatBookingDataAndTime(
                              upcomingBookingItem?.slot?.date as string,
                              upcomingBookingItem?.slot?.startTime
                            )
                          : undefined
                      }
                    />
                  </p>
                </div>
                <div className="mt-3">
                  <div className="flex items-center gap-3 ">
                    <FaCalendarAlt className="text-sm text-cyan-500 " />
                    <p className="text-sky-50">
                      {new Date(
                        upcomingBookingItem?.slot?.date as string
                      ).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                      })}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 ">
                    <FaRegClock className="text-sm text-cyan-500" />
                    <p className="text-sky-50">
                      {" "}
                      {upcomingBookingItem?.slot?.startTime &&
                        upcomingBookingItem?.slot?.endTime &&
                        convertToTwelveHourFormat(
                          upcomingBookingItem?.slot?.startTime,
                          upcomingBookingItem?.slot?.endTime
                        )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UpcomingBooking;
