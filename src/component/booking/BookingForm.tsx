import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useDeleteUnpaidBookingMutation,
  useGeneratePaymentUrlMutation,
  useSaveBookingInformationMutation,
} from "../../redux/features/booking/bookingApi";
import { useAppSelector } from "../../redux/features/hooks";
import type { TBooking } from "../../types/booking.type";
import convertToTwelveHourFormat from "../../utils/convertToTwelveHourFormat";
import { useNavigate } from "react-router-dom";
import bookingFromValidation from "../../schema/bookingFromValidation";
import { useState } from "react";
import { toast } from "sonner";

const BookingForm = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // redux rtk api hook
  const [generatePaymentUrl, { isLoading: paymentLoading }] =
    useGeneratePaymentUrlMutation();
  const [saveBookingInfo, { isLoading: dataSaveLoading, isError }] =
    useSaveBookingInformationMutation();

  const [deleteUnpaidBooking] = useDeleteUnpaidBookingMutation();

  // get redux state data
  const { service, slot, bookingDate } = useAppSelector(
    (state) => state.booking
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TBooking>({
    resolver: zodResolver(bookingFromValidation),
  });
  const user = true;

  // handle submit booking from
  const handleBooking: SubmitHandler<TBooking> = async (bookingInfo) => {
    // check user is login or not
    toast.error("Payment Failed");
    if (!user) {
      navigate("/");
      return;
    }

    // check booking information
    if (!service._id || !slot?._id || !bookingDate) {
      setMessage("Select service, date, and slot");
      return;
    }

    // booking data preparation
    const bookingData = {
      customer: "68add97583f0a5eea00e0bcf",
      service: service?._id,
      slot: slot?._id,
      ...bookingInfo,
    };

    //  save booking info
    const { data: bookingRes } = await saveBookingInfo(bookingData);
    if (isError) {
      toast.error("Payment failed");
      return;
    }

    // get payment url api call
    if (bookingRes?.success) {
      const { data } = await generatePaymentUrl({
        name: "customer",
        email: "test@gmail.com",
        amount: `${service?.price}`,
      });

      const paymentUrl = data?.payment_url as string;

      if (!paymentUrl) {
        toast.success("Payment failed");
        await deleteUnpaidBooking(undefined);
        return;
      }
      window.location.href = paymentUrl;
    }
  };

  // when payment url not get delete unpaid booking

  return (
    <>
      <div className=" pb-6 px-4  lg:pb-7 rounded-sm shadow-sm">
        <div className="py-b px-4 lg:px-6 lg:pb-7 ">
          <form
            onSubmit={handleSubmit(handleBooking)}
            className="space-y-4 lg:space-y-6"
          >
            {/* text input */}
            <div>
              <input
                type="text"
                {...register("vehicleType")}
                placeholder="Enter vehicle type *"
                className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
              ></input>
              <p className="text-red-500 text-sm ml-1 mt-1">
                {errors.vehicleType?.message}
              </p>
            </div>
            <div>
              <input
                {...register("vehicleBrand")}
                placeholder="Enter vehicle brand *"
                className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
              ></input>
              <p className="text-red-500 text-sm ml-1 mt-1">
                {" "}
                {errors.vehicleBrand?.message}{" "}
              </p>
            </div>
            <div>
              <input
                placeholder="Enter vehicle model *"
                {...register("vehicleModel")}
                className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
              ></input>
              <p className="text-red-500 text-sm ml-1 mt-1">
                {" "}
                {errors.vehicleModel?.message}{" "}
              </p>
            </div>
            <div>
              <input
                placeholder="Enter registration plate number *"
                {...register("registrationPlate")}
                className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
              ></input>
              <p className="text-red-500 text-sm ml-1 mt-1">
                {" "}
                {errors.registrationPlate?.message}{" "}
              </p>
            </div>

            {/* non edit able filed */}
            <div>
              <input
                name=""
                id=""
                disabled
                value={service?.name}
                type="text"
                placeholder="Select a service"
                className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
              ></input>
              <p className="text-red-500 text-sm ml-1 hidden">filed error </p>
            </div>
            <div>
              <input
                name=""
                id=""
                disabled
                value={bookingDate}
                type="text"
                placeholder=""
                className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
              ></input>
              <p className="text-red-500 text-sm ml-1 hidden">filed error </p>
            </div>
            <div>
              <input
                disabled
                value={
                  slot?.startTime &&
                  slot?.endTime &&
                  convertToTwelveHourFormat(slot?.startTime, slot?.endTime)
                }
                type="text"
                placeholder="Select a time slot"
                className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
              ></input>
              <p className="text-red-500 text-sm ml-1 hidden">filed error </p>
            </div>

            <div>
              <p className=" text-sm text-red-500 pb-3">{message}</p>
              <button
                disabled={paymentLoading && dataSaveLoading}
                className="text-sky-50 bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer"
              >
                {(paymentLoading || dataSaveLoading) && (
                  <span className="loading loading-spinner text-sky-50 loading-sm mx-12"></span>
                )}
                {!paymentLoading && !dataSaveLoading && (
                  <span>
                    {" "}
                    {service?.price}
                    {service?.price && "৳"} Pay Now
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
