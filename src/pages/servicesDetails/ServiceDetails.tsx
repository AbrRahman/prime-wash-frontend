import { SiTicktick } from "react-icons/si";
import carImage from "../../assets/images/car-1.png";
import CalendarAndSlot from "../../component/calendarAndSlot/CalendarAndSlot";
import { Link } from "react-router-dom";
const ServiceDetails = () => {
  const serviceItem = {
    name: "Exterior Wash",
    description:
      "Quick exterior cleaning with foam and rinse for a fresh look.",
    price: 500,
    duration: 20,
  };
  return (
    <>
      <div className="bg-brand-primary">
        <div className="container mx-auto px-4 pt-6 pb-12 lg:pt-10 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* service image */}
            <div>
              <img className="w-full" src={carImage} alt="" />
            </div>

            {/* details information */}
            <div>
              <div className=" space-y-4">
                <h2 className=" text-sky-50 text-2xl md:text-3xl font-bold">
                  {serviceItem?.name}
                </h2>
                <p className="text-slate-400 text-lg lg:text-xl  tracking-wide leading-normal">
                  {serviceItem?.description}
                </p>
                <div className=" space-y-3">
                  <div className="flex items-center gap-3 font-bold">
                    <SiTicktick className="text-base text-cyan-500 " />
                    <p className="text-sky-50">{serviceItem?.duration} min</p>
                  </div>
                  <div className="flex items-center gap-3 font-bold">
                    <SiTicktick className="text-base text-cyan-500" />
                    <p className="text-sky-50">৳ {serviceItem?.price}</p>
                  </div>
                </div>
              </div>
              <div>
                <CalendarAndSlot />
              </div>
              <div className="mt-3.5 lg:mt-5">
                <Link
                  to={`/booking`}
                  className="text-sky-50 bg-cyan-600 px-4 py-2 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide"
                >
                  Booking
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
