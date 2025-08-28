import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CalenderAndSlot.css";
import {
  setBookingDate,
  setSlotId,
} from "../../redux/features/booking/bookingSlice";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { useGetAllSlotQuery } from "../../redux/features/booking/bookingApi";
import type { TSlot } from "../../types/slot.type";
import convertToTwelveHourFormat from "../../utils/convertToTwelveHourFormat";

const CalendarAndSlot = () => {
  const dispatch = useAppDispatch();
  const { serviceId, bookingDate, slotId } = useAppSelector(
    (state) => state?.booking
  );
  // const slot = { startTime: "12:00", endTime: "13:00", isBooked: true };
  const { data: slotData } = useGetAllSlotQuery([
    { name: "serviceId", value: serviceId },
    { name: "date", value: bookingDate },
  ]);
  console.log(slotData);
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
        <div className="mx-auto sm:mx-0 sm:col-span-5">
          <DatePicker
            selected={new Date()}
            inline
            minDate={new Date()}
            onChange={(date) =>
              dispatch(setBookingDate(date?.toISOString().slice(0, 10)))
            }
          />
        </div>
        <div className=" sm:col-span-7">
          <h3 className="text-lg font-semibold text-sky-50 sm:text-center">
            Available Slot
          </h3>
          <div className="flex gap-2 flex-wrap mt-2.5">
            {(serviceId ? slotData : slotData?.slice(0, 8))?.map(
              (slot: TSlot) => (
                <button
                  key={slot?._id}
                  disabled={slot?.isBooked == "booked"}
                  onClick={() => dispatch(setSlotId(slot?._id))}
                  className={`bg-brand-secondary ${
                    slotId == slot?._id ? "bg-cyan-600 " : ""
                  }    ${
                    slot?.isBooked === "booked"
                      ? "text-slate-400 disabled:cursor-not-allowed"
                      : "cursor-pointer hover:bg-cyan-600"
                  } text-sm p-2  text-slate-50 rounded-lg border-1 border-cyan-600 transition duration-300 select-none`}
                >
                  {convertToTwelveHourFormat(slot?.startTime, slot?.endTime)}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarAndSlot;
