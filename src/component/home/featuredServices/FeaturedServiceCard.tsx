type TServiceCardProps = {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  image: string;
};
import { SiTicktick } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const FeaturedServiceCard = ({ service }: { service: TServiceCardProps }) => {
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
            <button className="text-sky-50 bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide">
              Book Now
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FeaturedServiceCard;
