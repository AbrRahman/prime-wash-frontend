import { motion } from "framer-motion";
import ReviewCart from "../../reviews/ReviewCart";
import { Link } from "react-router-dom";
import ReviewsForm from "./ReviewsForm";
const HomeReviewsAndRatings = () => {
  return (
    <>
      <section className="bg-brand-primary">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          {/* section heading */}
          <motion.h1
            className=" text-sky-50 text-2xl md:text-3xl lg:text-4xl text-center font-bold "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Customer Reviews & Ratings
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 lg:mt-12">
            <div>
              <motion.div
                className="grid grid-clos-1 gap-3"
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
              >
                <ReviewCart />
                <ReviewCart />
              </motion.div>
              <motion.div
                className="flex justify-center mt-8 lg:mt-12"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/reviews`}
                  className="text-sky-50 bg-cyan-600 px-4 py-2 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide"
                >
                  See All Reviews
                </Link>
              </motion.div>
            </div>
            <div>
              <ReviewsForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeReviewsAndRatings;
