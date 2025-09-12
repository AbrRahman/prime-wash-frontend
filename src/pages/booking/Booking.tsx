import { useSearchParams } from "react-router-dom";
import BookingForm from "../../component/booking/BookingForm";
import BookingService from "../../component/booking/BookingService";
import BookingServiceSelection from "../../component/booking/BookingServiceSelection";
import CalendarAndSlot from "../../component/calendarAndSlot/CalendarAndSlot";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/features/hooks";
import { setActiveMenu } from "../../redux/features/header/headerSlice";

const Booking = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const queryParams = searchParams.get("from");
  // set header active menu
  useEffect(() => {
    dispatch(setActiveMenu("Booking"));
  }, [dispatch]);
  return (
    <>
      <div className="bg-brand-primary">
        <div className="container mx-auto px-4 pt-3 pb-12 lg:pt-6 lg:pb-20">
          <h2 className="text-sky-50 text-center text-2xl  font-semibold mb-8 lg:mb12">
            Booking
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div>
              {queryParams == "service-details" || queryParams == "card" ? (
                <BookingService />
              ) : (
                <BookingServiceSelection />
              )}

              {queryParams != "service-details" && <CalendarAndSlot />}
            </div>
            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
