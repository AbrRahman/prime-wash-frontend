import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import { useGetAllBookingQuery } from "../../../redux/features/booking/bookingApi";
import convertToTwelveHourFormat from "../../../utils/convertToTwelveHourFormat";
import type { TBookingData } from "../../../types/booking.type";
import DeleteBookingModal from "../../../component/admin/bookingManagemnet/BookingManagement";

const BookingManagement = () => {
  const [isDeleteBookingModalOpen, setIsDeleteBookingModalOpen] =
    useState(false);
  const [deleteBookingId, setDeleteBookingId] = useState("");

  // get all Booking data
  const { data: bookingData } = useGetAllBookingQuery(undefined);

  return (
    <>
      <div>
        <div className="mb-3">
          <h1 className="text-sky-50 text-xl md:text-2xl lg:text-3xl text-center font-semibold">
            Booking Management
          </h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-sky-50">
                <th>Customer Name</th>
                <th>Customer Email</th>
                <th>Customer Phone</th>
                <th>Customer Address</th>
                <th>Car Name</th>
                <th>Car Brand</th>
                <th>Service Name</th>
                <th>Booking Date</th>
                <th>Booking Time</th>
                <th>Payment Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookingData?.map((bookingItem: TBookingData) => (
                <tr key={bookingItem?._id} className="text-slate-300">
                  <td>{bookingItem?.customer?.name}</td>
                  <td>{bookingItem?.customer?.email}</td>
                  <td>
                    {bookingItem?.customer?.phone
                      ? bookingItem?.customer?.phone
                      : "Empty"}
                  </td>
                  <td>
                    {bookingItem?.customer?.address
                      ? bookingItem?.customer?.address
                      : "Empty"}
                  </td>
                  <td>{bookingItem?.vehicleType}</td>
                  <td>{bookingItem?.vehicleModel}</td>
                  <td>{bookingItem?.service?.name}</td>
                  <td>{bookingItem?.slot?.date}</td>
                  <td className="whitespace-nowrap">
                    {" "}
                    {bookingItem?.slot?.startTime &&
                      bookingItem?.slot?.endTime &&
                      convertToTwelveHourFormat(
                        bookingItem?.slot?.startTime,
                        bookingItem?.slot?.endTime
                      )}
                  </td>
                  <td>{bookingItem?.paymentStatus}</td>
                  <td>
                    <div className="flex gap-5">
                      <button
                        onClick={() => {
                          setIsDeleteBookingModalOpen(true);
                          setDeleteBookingId(bookingItem?._id);
                        }}
                        className="cursor-pointer text-red-500 hover:text-red-600 transition duration-300"
                      >
                        <FaTrash className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* booking delete modal */}
        {isDeleteBookingModalOpen && deleteBookingId && (
          <DeleteBookingModal
            isDeleteBookingModalOpen={isDeleteBookingModalOpen}
            closeIsDeleteBookingModal={() => setIsDeleteBookingModalOpen(false)}
            id={deleteBookingId}
          />
        )}
      </div>
    </>
  );
};

export default BookingManagement;
