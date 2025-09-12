import { SiTicktick } from "react-icons/si";
import { useGetAllServiceQuery } from "../../redux/features/service/serviceApi";
import type { TService } from "../../types/service.type";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { setService, setSlot } from "../../redux/features/booking/bookingSlice";
import BookingServiceSelectionSkeleton from "./BookingServiceSelectionSkeleton";

const BookingServiceSelection = () => {
  const { data: serviceData, isLoading } = useGetAllServiceQuery(undefined);
  const { service } = useAppSelector((state) => state?.booking);
  // set service id global state
  const dispatch = useAppDispatch();
  const handleSetServiceId = (data: TService) => {
    dispatch(setSlot({}));
    dispatch(setService(data));
  };
  return (
    <>
      <div>
        <h3 className="py-3 text-xl text-sky-50 font-semibold">
          Select a service
        </h3>

        <div className="grid gap-1 mb-3 grid-cols-3 sm:grid-cols-4">
          {isLoading &&
            [...Array(6).keys()].map((_, idx) => (
              <BookingServiceSelectionSkeleton key={idx} />
            ))}
          {(serviceData?.length > 9
            ? serviceData?.slice(0, 9)
            : serviceData
          )?.map((item: TService) => (
            <div
              onClick={() => handleSetServiceId(item)}
              key={item?._id}
              className={`bg-brand-secondary rounded-lg shadow p-3 text-sky-50 cursor-pointer border border-cyan-600 hover:bg-cyan-600 ${
                item?._id == service?._id ? "bg-cyan-600" : ""
              } transition duration-300 select-none`}
            >
              <h1 className="text-sm font-semibold mb-1">{item?.name}</h1>
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <SiTicktick className="text-sm text-cyan-500 " />
                  <p className="text-sky-50 text-sm">{item?.duration} min</p>
                </div>
                <div className="flex items-center gap-3">
                  <SiTicktick className="text-sm text-cyan-500" />
                  <p className="text-sky-50 text-sm">৳ {item?.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookingServiceSelection;
