import ServiceSideBar from "../../component/services/ServiceSideBar";
import ServiceCard from "../../component/services/ServiceCard";
import { useGetAllServiceQuery } from "../../redux/features/service/serviceApi";
import type { TService } from "../../types/service.type";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { useForm, type SubmitHandler } from "react-hook-form";
import { setSearchTerm } from "../../redux/features/service/serviceSlice";
import ServiceCardSkeleton from "../../component/services/ServiceCardSkeleton";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { setActiveMenu } from "../../redux/features/header/headerSlice";
type TSearchInput = {
  search: string;
};

const Services = () => {
  const { searchTerm, duration, maxPrice } = useAppSelector(
    (state) => state?.service
  );
  const dispatch = useAppDispatch();
  // fetch service data using rtk query
  const { data: serviceData, isLoading } = useGetAllServiceQuery([
    { name: "searchTerm", value: searchTerm },
    { name: "duration", value: duration },
    { name: "maxPrice", value: maxPrice },
  ]);

  // handle search
  const { register, handleSubmit } = useForm<TSearchInput>();
  const handleSearch: SubmitHandler<TSearchInput> = (data) => {
    dispatch(setSearchTerm(data?.search));
  };

  // set header active menu
  useEffect(() => {
    dispatch(setActiveMenu("Service"));
  }, [dispatch]);
  return (
    <>
      <div className="bg-brand-primary">
        <div className=" container mx-auto px-4 pb-12 pt-8 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
            {/* site filter option */}
            <div className=" lg:col-span-3">
              <ServiceSideBar />
            </div>
            {/* display service */}
            <div className=" lg:col-span-9">
              {/* search bar */}
              <div className="w-11/12 lg:w-3/5  mb-2.5 mx-auto lg:mx-0">
                {" "}
                <form
                  onSubmit={handleSubmit(handleSearch)}
                  className="flex items-center gap-3"
                >
                  <input
                    type="text"
                    {...register("search")}
                    placeholder="Search..."
                    onChange={(e) =>
                      e.target.value == "" && dispatch(setSearchTerm(""))
                    }
                    className="bg-brand-secondary w-full border-1 border-cyan-500 rounded-lg focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                  ></input>
                  <button
                    type="submit"
                    className="text-sky-50 bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide select-none cursor-pointer"
                  >
                    Search
                  </button>
                </form>
              </div>

              {/* display product */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                animate="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.3 },
                  },
                }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-4"
              >
                {/* show loading skeleton */}

                {isLoading &&
                  [...Array(6).keys()].map((_, idx) => (
                    <ServiceCardSkeleton key={idx} />
                  ))}

                {serviceData?.map((service: TService) => (
                  <ServiceCard key={service?._id} service={service} />
                ))}
              </motion.div>
              {!serviceData?.length && (
                <div className=" flex justify-center item-center py-12 lg:py-20">
                  <h3 className=" text-sky-50 text-xl">
                    Oops! Product not found.
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
