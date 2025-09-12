import { motion } from "framer-motion";
import { useGetAllReviewQuery } from "../../redux/features/review/reviewApi";
import ReviewCart from "../../component/reviews/ReviewCart";
import type { TReview } from "../../types/review.types";
import ReviewCartSkeleton from "../../component/reviews/ReviewsCartSkeleton";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/features/hooks";
import { setActiveMenu } from "../../redux/features/header/headerSlice";

const Review = () => {
  const dispatch=useAppDispatch()
  const { data: reviewData, isLoading } = useGetAllReviewQuery(undefined);
    // set header active menu
    useEffect(() => {
      dispatch(setActiveMenu("Review"));
    }, [dispatch]);
  return (
    <>
      <div className="bg-brand-primary">
        <div className="container mx-auto px-4 py-12 lg:pb-20 lg:pt-12">
          {/* section heading */}
          <motion.h1
            className=" text-sky-50 text-2xl md:text-3xl text-center font-bold "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Reviews
          </motion.h1>

          <div className="mt-8 lg:mt-12">
            <motion.div
              className="grid grid-clos-1 md:grid-cols-2 gap-3"
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
              {/*show review skeleton */}
              {isLoading &&
                [...Array(4).keys()].map((_, idx) => (
                  <ReviewCartSkeleton key={idx} />
                ))}
              {/* display reviews */}
              {reviewData?.map((review: TReview) => (
                <ReviewCart review={review} />
              ))}
            </motion.div>
            <motion.div
              className="flex justify-center mt-8 lg:mt-12"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
