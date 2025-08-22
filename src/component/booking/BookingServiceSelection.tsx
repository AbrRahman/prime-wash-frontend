import { SiTicktick } from "react-icons/si";

const BookingServiceSelection = () => {
  return (
    <>
      <div>
        <h3 className="py-3 text-xl text-sky-50 font-semibold">
          Select a service
        </h3>

        <div className="grid gap-1 mb-3 grid-cols-3 sm:grid-cols-4">
          <div className="bg-brand-secondary rounded-lg shadow p-3 text-sky-50 cursor-pointer border border-cyan-600 hover:bg-cyan-600 transition duration-300 select-none">
            <h1 className="text-sm font-semibold mb-1">Basic wash</h1>
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <SiTicktick className="text-sm text-cyan-500 " />
                <p className="text-sky-50 text-sm">30 min</p>
              </div>
              <div className="flex items-center gap-3">
                <SiTicktick className="text-sm text-cyan-500" />
                <p className="text-sky-50 text-sm">৳ 2000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingServiceSelection;
