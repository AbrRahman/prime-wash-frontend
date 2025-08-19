import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const ReviewsForm = () => {
  const user = false;
  return (
    <>
      <motion.div
        className="bg-brand-secondary py-6 px-4 lg:px-6 lg:py-7 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="relative">
          {!user && (
            <div className="bg-white/1 backdrop-blur-sm absolute inset-0 z-10 rounded-lg flex justify-center items-center">
              <Link
                to="/login"
                className="text-sky-50 bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide select-none"
              >
                Login
              </Link>
            </div>
          )}
          <div className="py-6 px-4 lg:px-6 lg:py-7 ">
            <form action="" className="space-y-4 lg:space-y-6">
              {/* rating star */}
              <div>
                <div className="rating rating-lg rating-half text-lg">
                  <input
                    type="radio"
                    name="rating-11"
                    className="rating-hidden"
                  />
                  <input
                    type="radio"
                    name="rating-11"
                    className="mask mask-star-2 mask-half-1 bg-cyan-500"
                    aria-label="0.5 star"
                  />
                  <input
                    type="radio"
                    name="rating-11"
                    className="mask mask-star-2 mask-half-2 bg-cyan-500"
                    aria-label="1 star"
                  />
                  <input
                    type="radio"
                    name="rating-11"
                    className="mask mask-star-2 mask-half-1 bg-cyan-500"
                    aria-label="1.5 star"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-11"
                    className="mask mask-star-2 mask-half-2 bg-cyan-500"
                    aria-label="2 star"
                  />
                  <input
                    type="radio"
                    name="rating-11"
                    className="mask mask-star-2 mask-half-1 bg-cyan-500"
                    aria-label="2.5 star"
                  />
                  <input
                    type="radio"
                    name="rating-11"
                    className="mask mask-star-2 mask-half-2 bg-cyan-500"
                    aria-label="3 star"
                  />
                  <input
                    type="radio"
                    name="rating-11"
                    className="mask mask-star-2 mask-half-1 bg-cyan-500"
                    aria-label="3.5 star"
                  />
                  <input
                    type="radio"
                    name="rating-11"
                    className="mask mask-star-2 mask-half-2 bg-cyan-500"
                    aria-label="4 star"
                  />
                  <input
                    type="radio"
                    name="rating-11"
                    className="mask mask-star-2 mask-half-1 bg-cyan-500"
                    aria-label="4.5 star"
                  />
                  <input
                    type="radio"
                    name="rating-11"
                    className="mask mask-star-2 mask-half-2 bg-cyan-500"
                    aria-label="5 star"
                  />
                </div>
                <p className="text-red-500 text-sm ml-1 hidden">filed error </p>
              </div>
              {/* text input */}
              <div>
                <textarea
                  name=""
                  id=""
                  placeholder="Write your feedback..."
                  className="bg-brand-primary w-full border-1 border-cyan-500 rounded-lg h-28 lg:h-32 focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                ></textarea>
                <p className="text-red-500 text-sm ml-1 hidden">filed error </p>
              </div>
              <button className="text-sky-50 bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ReviewsForm;
