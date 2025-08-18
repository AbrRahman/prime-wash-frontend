import FeaturedServiceCard from "./FeaturedServiceCard";
import carImag from "../../../assets/images/car-1.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FeaturedServices = () => {
  const serviceData = [
    {
      _id: "srv001",
      name: "Exterior Wash",
      description:
        "Quick exterior cleaning with foam and rinse for a fresh look.",
      price: 500,
      duration: 20,
      image: carImag,
    },
    {
      _id: "srv002",
      name: "Interior Detailing",
      description:
        "Deep cleaning of seats, carpets, and dashboard for a spotless interior.",
      price: 1200,
      duration: 45,
      image: carImag,
    },
    {
      _id: "srv003",
      name: "Full Body Wash",
      description:
        "Complete wash inside and out with premium shampoo and wax finish.",
      price: 1500,
      duration: 60,
      image: carImag,
    },
    {
      _id: "srv004",
      name: "Engine Bay Cleaning",
      description:
        "Safe and effective cleaning of engine bay to improve performance.",
      price: 2000,
      duration: 50,
      image: carImag,
    },
    {
      _id: "srv005",
      name: "Wax & Shine",
      description: "Protective wax coating with polish for long-lasting shine.",
      price: 1000,
      duration: 40,
      image: carImag,
    },
    {
      _id: "srv006",
      name: "Premium Detailing Package",
      description:
        "Complete detailing package including wash, polish, and interior clean.",
      price: 2500,
      duration: 90,
      image: carImag,
    },
  ];
  return (
    <>
      <section className="bg-brand-primary">
        <div className="container px-5 mx-auto py-12 lg:py-20">
          <motion.h1
            className=" text-sky-50 text-2xl md:text-3xl lg:text-4xl text-center font-semibold tracking-wide"
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
            {serviceData.map((service) => (
              <FeaturedServiceCard key={service._id} service={service} />
            ))}
          </motion.div>
          <motion.div
            className="flex justify-center mt-8 lg:mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
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
