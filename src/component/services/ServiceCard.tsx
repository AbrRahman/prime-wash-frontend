import { SiTicktick } from "react-icons/si";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import type { TService } from "../../types/service.type";
import { useAppDispatch } from "../../redux/features/hooks";
import { setServiceId } from "../../redux/features/booking/bookingSlice";
const ServiceCard = ({ service }: { service: TService }) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const handleServiceCardBookingBtn = (id: string) => {
    dispatch(setServiceId(id));
    navigate("/booking?from=card");
  };
  return (
    <>
      <motion.div
        className="card bg-brand-secondary card-sm md:card-md shadow-sm"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8 }}
      >
        <figure>
          <motion.img
            src={service?.image}
            alt="car-image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sky-50">{service?.name}</h2>
          <p className="text-slate-400">{service?.description}</p>
          <div className="flex items-center gap-3 font-bold">
            <SiTicktick className="text-base text-cyan-500 " />
            <p className="text-sky-50">{service?.duration} min</p>
          </div>
          <div className="flex items-center gap-3 font-bold">
            <SiTicktick className="text-base text-cyan-500" />
            <p className="text-sky-50">৳ {service?.price}</p>
          </div>

          <div className="card-actions gap-4">
            <Link
              to={`/services/${service?._id}`}
              className="text-sky-50 bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide"
            >
              Details
            </Link>
            <button
              onClick={() => handleServiceCardBookingBtn(service?._id)}
              className="text-sky-50 bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer"
            >
              Booking Now
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ServiceCard;
