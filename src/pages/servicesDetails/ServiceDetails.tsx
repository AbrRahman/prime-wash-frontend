import { SiTicktick } from "react-icons/si";
import CalendarAndSlot from "../../component/calendarAndSlot/CalendarAndSlot";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleServiceQuery } from "../../redux/features/service/serviceApi";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { setServiceId } from "../../redux/features/booking/bookingSlice";
import { useState } from "react";
const ServiceDetails = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();
  const { serviceId, slotId, bookingDate } = useAppSelector(
    (state) => state.booking
  );

  // catch service id throw url
  const { id } = useParams();
  const { data: serviceItem } = useGetSingleServiceQuery(id);
  dispatch(setServiceId(serviceItem?._id));

  const navigate = useNavigate();

  // handle Proceed to Pay btn
  const handleProceedToPay = () => {
    if (serviceId && slotId && bookingDate) {
      navigate(`/booking?from=service-details`);
    } else {
      setErrorMessage("Select time and slot");
    }
  };

  return (
    <>
      <div className="bg-brand-primary">
        <div className="container mx-auto px-4 pt-6 pb-12 lg:pt-10 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* service image */}
            <div>
              <img
                className="w-full"
                src={serviceItem?.image}
                alt="car image"
              />
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
                <p className=" text-sm text-red-500 pb-3">{errorMessage}</p>

                <button
                  onClick={handleProceedToPay}
                  className="text-sky-50 bg-cyan-600 px-4 py-2 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer"
                >
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
