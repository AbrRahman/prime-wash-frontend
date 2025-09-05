import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";
type TRatingProps = {
  value: number;
  outOf?: number;
};
import type { TReview } from "../../types/review.types";

const ReviewCart = ({ review }: { review: TReview }) => {
  // calculate rating
  console.log(review);
  const Rating = ({ value, outOf = 5 }: TRatingProps) => {
    const star = [];
    for (let i = 1; i <= outOf; i++) {
      if (i <= value) {
        star.push(<FaStar key={i} className="text-yellow-400 text-xl" />);
      } else if (i === Math.ceil(value) && !Number.isInteger(value)) {
        star.push(
          <FaStarHalfAlt key={i} className="text-yellow-400 text-xl" />
        );
      } else {
        star.push(<FaRegStar key={i} className="text-yellow-400 text-xl" />);
      }
    }
    return <div className="flex space-x-1">{star}</div>;
  };

  return (
    <>
      <motion.div
        className="bg-brand-secondary p-6 rounded-lg shadow-lg space-y-2"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8 }}
      >
        <Rating value={Number(review?.rating)} />
        <p className="text-slate-400 text-lg font-semibold  tracking-wide">
          {review?.comment}
        </p>
        <div className="flex gap-3">
          <img
            src={review?.user?.image}
            referrerPolicy="no-referrer"
            alt="user image"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-sky-50 text-base font-bold mt-1">
            {review?.user?.name}
          </h1>
        </div>
      </motion.div>
    </>
  );
};

export default ReviewCart;
