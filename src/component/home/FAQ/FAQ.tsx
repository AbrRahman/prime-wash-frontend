import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
const FAQ = () => {
  const [showFaq, setShowFaq] = useState(0);

  const toggleFaq = (index: number) => {
    setShowFaq(showFaq === index ? 0 : index);
  };

  const faqData = [
    {
      question: "How long does a car wash take?",
      answer:
        "Most washes are done in 30-45 minutes, depending on your service.",
    },
    {
      question: "Do I need to book in advance?",
      answer:
        "We recommend booking in advance to ensure your preferred time slot, but walk-ins are also welcome when available.",
    },
    {
      question: "Are your cleaning products safe?",
      answer:
        "Yes! At Prime Wash, we use eco-friendly and vehicle-safe cleaning products to protect your car and the environment.",
    },

    {
      question: "Do you offer mobile car wash?",
      answer:
        "Yes, Prime Wash provides mobile car wash services. We come to your location for maximum convenience.",
    },
    {
      question: "What forms of payment do you accept?",
      answer:
        "We accept cash, credit/debit cards, and digital wallets for quick and easy payments.",
    },
  ];

  return (
    <>
      <section className="bg-brand-primary">
        <div className="container mx-auto px-4 pb-12 lg:pb-20">
          {/* section heading */}
          <motion.h1
            className=" text-sky-50 text-2xl md:text-3xl lg:text-4xl text-center font-bold "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions (FAQ)
          </motion.h1>

          <div className="mt-8 lg:mt-12">
            <motion.div
              className="grid grid-cols-1 gap-2"
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
              {faqData.map((faq, index) => (
                <motion.div
                  className="bg-brand-secondary rounded-lg shadow-sm p-6"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <div
                    className="flex justify-between md:items-center cursor-pointer select-none"
                    onClick={() => toggleFaq(index + 1)}
                  >
                    <div className="flex md:items-center gap-4">
                      <h2 className="text-cyan-500  text-xl md:text-2xl lg:text-3xl font-bold">
                        0{index + 1}
                      </h2>
                      <h2 className="text-sky-50 text-xl md:text-2xl lg:text-3xl font-semibold">
                        {faq.question}
                      </h2>
                    </div>
                    <motion.div
                      className="transition-transform duration-300"
                      key={showFaq === index + 1 ? "minus" : "plus"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {showFaq === index + 1 ? (
                        <FiMinus className="text-cyan-500 text-xl lg:text-3xl font-bold" />
                      ) : (
                        <FiPlus className="text-cyan-500 text-xl lg:text-3xl font-bold" />
                      )}
                    </motion.div>
                  </div>
                  {/* answer text */}
                  <AnimatePresence initial={false}>
                    {showFaq === index + 1 && (
                      <motion.div
                        className="lg:ml-12 overflow-hidden "
                        key={index + 1}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="text-slate-400 text-lg mt-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
