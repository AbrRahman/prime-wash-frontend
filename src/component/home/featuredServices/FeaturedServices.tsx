import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceCard from "../../services/ServiceCard";
import { useGetAllServiceQuery } from "../../../redux/features/service/serviceApi";
import type { TService } from "../../../types/service.type";
import ServiceCardSkeleton from "../../services/ServiceCardSkeleton";

const FeaturedServices = () => {
  // fetch service data using rtk query
  const { data: serviceData, isLoading } = useGetAllServiceQuery(undefined);

  return (
    <>
      <section className="bg-brand-primary">
        <div className="container px-5 mx-auto py-12 lg:py-20">
          <motion.h1
            className=" text-sky-50 text-2xl md:text-3xl lg:text-4xl text-center font-bold"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Popular Car Wash Services
          </motion.h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
            className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8 lg:mt-12"
          >
            {/* show loading skeleton */}
            {isLoading &&
              [...Array(6).keys()].map((_, idx) => (
                <ServiceCardSkeleton key={idx} />
              ))}
            {/* show loading date */}
            {(serviceData?.length > 6
              ? serviceData.slice(0, 6)
              : serviceData
            )?.map((service: TService) => (
              <ServiceCard key={service?._id} service={service} />
            ))}
          </motion.div>
          <motion.div
            className="flex justify-center mt-8 lg:mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate="visible"
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              to={`/services`}
              className="text-sky-50 bg-cyan-600 px-4 py-2 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide"
            >
              See All Services
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FeaturedServices;
