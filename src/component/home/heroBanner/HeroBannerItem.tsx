import { Link } from "react-router-dom";
type TBannerItem = {
  title: string;
  description: string;
  image: string;
};
import { motion } from "motion/react";

const HeroBannerItem = ({ bannerItem }: { bannerItem: TBannerItem }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* hero text */}
        <div className=" col-span-7 flex justify-center items-center order-2 lg:order-1 relative">
          <div className="space-y-5 lg:py-24">
            <motion.h1
              className="text-4xl lg:text-5xl tracking-wider leading-14 font-semibold text-sky-50"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {bannerItem?.title}
            </motion.h1>
            <motion.p
              className="text-lg text-slate-400 tracking-wider leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {bannerItem?.description}
            </motion.p>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                to="/booking"
                className="text-sky-50 bg-cyan-600 hover:bg-cyan-500 transition duration-300 rounded-sm px-6 py-3 select-none"
              >
                Booking Now
              </Link>
            </motion.span>
          </div>
          {/* blur color div */}
          <div className="w-2/6 h-60 absolute hidden lg:block  lg:top-[18%] lg:right-[-14%]  bg-[#6B5BF4] blur-2xl opacity-50 rounded-full z-10"></div>
          <div className="w-2/6 h-60 absolute lg:hidden top-[-61%] left-[27%]  bg-[#6B5BF4]  blur-3xl  opacity-50 rounded-full z-10"></div>
        </div>
        {/* hero image */}
        <div className="col-span-5 order-1 lg:order-2">
          <motion.img
            src={bannerItem?.image}
            className="w-full"
            alt="car image"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </>
  );
};

export default HeroBannerItem;
