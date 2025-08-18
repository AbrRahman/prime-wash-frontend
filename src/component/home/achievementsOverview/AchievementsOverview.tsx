import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

import { useEffect, useRef } from "react";
import { FaBriefcase, FaCar, FaSmile, FaUsers } from "react-icons/fa";

const AchievementsOverview = () => {
  const achievementsItems = [
    {
      id: 1,
      value: 10,
      label: "Years Experience",
      icon: <FaBriefcase />,
      unit: "",
    },
    {
      id: 2,
      value: 1000,
      label: "Of Cars Cleaned",
      icon: <FaCar />,
      unit: "s",
    },
    { id: 3, value: 100, label: "Satisfaction", icon: <FaSmile />, unit: "%" },
    {
      id: 4,
      value: 100,
      label: "Trusted Clients",
      icon: <FaUsers />,
      unit: "s",
    },
  ];

  //   Counter component to animate the numbers
  const Counter = ({ from = 0, to }: { from?: number; to: number }) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.floor(latest));

    useEffect(() => {
      const controls = animate(count, to, { duration: 2, ease: "easeInOut" });
      return controls.stop;
    }, [to, count]);
    return <motion.span>{rounded}</motion.span>;
  };
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-150px" });
  return (
    <>
      <section className="bg-brand-primary pb-12 lg:pb-20">
        <div
          ref={ref}
          className="container px-4 mx-auto bg-brand-secondary rounded-sm py-8 lg:py-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievementsItems.map((item) => {
              return (
                <motion.div
                  key={item?.id}
                  className="flex justify-center items-center gap-3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sky-50 text-4xl lg:text-6xl p-2.5 ">
                    {item?.icon}
                  </span>
                  <div>
                    <h3 className="text-sky-50 text-2xl lg:text-3xl font-bold">
                      {inView ? <Counter to={item?.value} /> : item?.value}
                      {item?.unit}
                    </h3>
                    <p className="text-slate-400">{item?.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AchievementsOverview;
