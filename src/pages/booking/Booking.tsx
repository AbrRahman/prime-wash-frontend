import BookingForm from "../../component/booking/BookingForm";
import CalendarAndSlot from "../../component/calendarAndSlot/CalendarAndSlot";

const Booking = () => {
  return (
    <>
      <div className="bg-brand-primary">
        <div className="container mx-auto px-4 pt-6 pb-12 lg:pt-10 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div>
              <CalendarAndSlot />
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
