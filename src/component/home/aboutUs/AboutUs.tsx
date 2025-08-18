import { Link } from "react-router-dom";
import aboutUsImage from "../../../assets/images/about-us.png";
import { motion } from "motion/react";
const AboutUs = () => {
  return (
    <>
      <section className=" bg-brand-secondary">
        <div className="container mx-auto px-4 pb-12 lg:py-20">
          <div className="  grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7">
            <div className="lg:col-span-5">
              <motion.img
                src={aboutUsImage}
                alt="About Us"
                className="w-full rounded-sm"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="lg:col-span-7 flex items-center ">
              <div className=" space-y-4">
                <motion.h1
                  className=" text-sky-50 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Who We Are
                </motion.h1>
                <motion.p
                  className="text-slate-300 text-lg leading-relaxed tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  At Prime Wash, we believe every car deserves premium care
                  without the hassle. Our mission is simple: make your car wash
                  experience stress-free, convenient, and affordable.
                </motion.p>
                <motion.p
                  className="text-slate-300 text-lg leading-relaxed tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  With 10 years of expertise, a passionate team, and the latest
                  cleaning technology, we're dedicated to delivering a spotless
                  shine every time. Trust us to keep your vehicle looking fresh,
                  protected, and ready for the road.
                </motion.p>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to="/booking"
                    className="text-sky-50 bg-cyan-600 hover:bg-cyan-500 transition duration-300 rounded-sm px-6 py-2.5 select-none"
                  >
                    Booking Now
                  </Link>
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
