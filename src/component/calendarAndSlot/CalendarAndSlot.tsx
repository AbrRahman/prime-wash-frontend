import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CalenderAndSlot.css";
const CalendarAndSlot = () => {
  // const slot = { startTime: "12:00", endTime: "13:00", isBooked: true };
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
        <div className="mx-auto sm:mx-0 sm:col-span-5">
          <DatePicker
            selected={new Date()}
            inline
            minDate={new Date()}
            onChange={(date) => console.log(date)}
          />
        </div>
        <div className=" sm:col-span-7">
          <h3 className="text-lg font-semibold text-sky-50 sm:text-center">
            Available Slot
          </h3>
          <div className="flex gap-2 flex-wrap mt-2.5">
            <button className="bg-brand-secondary text-sm p-2  text-slate-50 rounded-lg border-1 border-cyan-600 hover:bg-cyan-600 transition duration-300 cursor-pointer">
              12am - 01pm
            </button>
            <button className="bg-brand-secondary text-sm p-2  text-slate-50 rounded-lg border-1 border-cyan-600 hover:bg-cyan-600 transition duration-300 cursor-pointer">
              12am - 01pm
            </button>
            <button className="bg-brand-secondary text-sm p-2  text-slate-50 rounded-lg border-1 border-cyan-600 hover:bg-cyan-600 transition duration-300 cursor-pointer">
              12am - 01pm
            </button>
            <button className="bg-brand-secondary text-sm p-2  text-slate-50 rounded-lg border-1 border-cyan-600 hover:bg-cyan-600 transition duration-300 cursor-pointer">
              12am - 01pm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarAndSlot;
