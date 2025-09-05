import { useGetMyAllBookingQuery } from "../../redux/features/booking/bookingApi";
import type { TBookingData } from "../../types/booking.type";
import convertToTwelveHourFormat from "../../utils/convertToTwelveHourFormat";
const MyBookings = () => {
  const { data: myBookingData } = useGetMyAllBookingQuery(undefined);

  return (
    <div>
      <div className="border-b-2 border-dashed pb-6 border-b-brand-primary ">
        <h1 className="text-xl font-semibold text-sky-50">My Bookings</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-sky-50">
              <th>Service Image</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Duration</th>
              <th>Service Charge</th>
              <th>Car Name</th>
              <th>Car Brand</th>
              <th>Payment Status</th>
              <th>Booking Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myBookingData?.map((bookingItem: TBookingData) => (
              <tr key={bookingItem?._id} className="text-slate-300">
                <td>
                  <img
                    src={bookingItem?.service?.image}
                    alt="service image"
                    className="w-20"
                  />
                </td>
                <td>{bookingItem?.service?.name}</td>
                <td className="whitespace-nowrap">{bookingItem?.slot?.date}</td>
                <td className="whitespace-nowrap">
                  {" "}
                  {bookingItem?.slot?.startTime &&
                    bookingItem?.slot?.endTime &&
                    convertToTwelveHourFormat(
                      bookingItem?.slot?.startTime,
                      bookingItem?.slot?.endTime
                    )}
                </td>
                <td>{bookingItem?.service?.price}</td>
                <td>{bookingItem?.vehicleType}</td>
                <td>{bookingItem?.vehicleBrand}</td>
                <td>{bookingItem?.paymentStatus}</td>
                <td>Booked</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
