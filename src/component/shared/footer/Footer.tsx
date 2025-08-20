import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  const socials = [
    { icon: <FaFacebookF />, url: "https://facebook.com/primewash" },
    { icon: <FaTwitter />, url: "https://twitter.com/primewash" },
    { icon: <FaInstagram />, url: "https://instagram.com/primewash" },
    {
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com/company/primewash",
    },
  ];
  return (
    <>
      <section className="bg-brand-secondary">
        <div className="container mx-auto px-4 pt-12 lg:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className=" col-span-6 lg:px-6">
              <motion.h1
                className=" text-sky-50 text-2xl md:text-3xl lg:text-4xl  font-bold "
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                Let's talk
              </motion.h1>
              <motion.p
                className="text-slate-300 text-lg mt-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                Fill out the form for any questions. We will get back to you as
                soon as possible.
              </motion.p>
              <div className="mt-5 space-y-4">
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {" "}
                  <FiPhone className="text-cyan-500 font-bold text-2xl lg:3xl mt-1" />
                  <div>
                    <h1 className="text-xl lg:text-2xl text-sky-50 font-semibold">
                      Give us a call
                    </h1>
                    <p className="text-slate-300 text-lg mt-.5">
                      +88 013 555 66x6
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {" "}
                  <FiMail className="text-cyan-500 font-bold text-2xl lg:3xl mt-1" />
                  <div>
                    <h1 className="text-xl lg:text-2xl text-sky-50 font-semibold">
                      Email us
                    </h1>
                    <p className="text-slate-300 text-lg mt-.5">
                      primewash@gmail.com
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {" "}
                  <FiMapPin className="text-cyan-500 font-bold text-2xl lg:3xl mt-1" />
                  <div>
                    <h1 className="text-xl lg:text-2xl text-sky-50 font-semibold">
                      Visit us
                    </h1>
                    <p className="text-slate-300 text-lg mt-.5">
                      Mirpur-10, Dhaka
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="flex gap-4">
                    {socials?.map((social, index) => (
                      <Link
                        key={index}
                        to={social?.url}
                        className="text-3xl  text-cyan-500 hover:text-cyan-600 transition duration-300"
                      >
                        {social?.icon}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
            <div className=" col-span-6">
              <motion.div
                className="bg-brand-primary py-6 px-4 lg:px-6 lg:py-7 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="py-6 px-4 lg:px-6 lg:py-7 ">
                  <form action="" className="space-y-4 lg:space-y-6">
                    {/* text input */}
                    <div className="space-y-4">
                      <div>
                        <input
                          name=""
                          type="text"
                          placeholder="Name"
                          className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                        ></input>
                        <p className="text-red-500 text-sm ml-1 hidden">
                          filed error{" "}
                        </p>
                      </div>
                      <div>
                        <input
                          name=""
                          type="email"
                          placeholder="Email"
                          className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                        ></input>
                        <p className="text-red-500 text-sm ml-1 hidden">
                          filed error{" "}
                        </p>
                      </div>
                      <div>
                        <textarea
                          name=""
                          id=""
                          placeholder="Message..."
                          className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg h-28 lg:h-32 focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                        ></textarea>
                        <p className="text-red-500 text-sm ml-1 hidden">
                          filed error{" "}
                        </p>
                      </div>
                    </div>
                    <button className="text-sky-50 bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer">
                      Submit
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="pt-8 lg:pt-12">
            <hr className="text-slate-500" />
            <motion.h4
              className="text-slate-300 text-sm text-center py-4 lg:py-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {" "}
              © {new Date().getFullYear()} PrimeWash. All rights reserved by Ab
              Rahman
            </motion.h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
