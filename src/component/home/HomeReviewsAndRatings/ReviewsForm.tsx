import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppSelector } from "../../../redux/features/hooks";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { reviewValidation } from "../../../schema/reviewValidation";
import { useSubmitReviewMutation } from "../../../redux/features/review/reviewApi";
import { toast } from "sonner";

type TReviewInput = {
  comment: string;
};

const ReviewsForm = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [rating, setRating] = useState(1.5);

  const [submitReview, { isLoading }] = useSubmitReviewMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TReviewInput>({
    resolver: zodResolver(reviewValidation),
  });

  const handelReview: SubmitHandler<TReviewInput> = async (data) => {
    try {
      const result = await submitReview({
        comment: data?.comment,
        rating: rating,
        user: user?._id,
      });
      if (result && result?.data?.success) {
        toast.success("Review submitted successfully!");
        reset();
        setRating(1.5);
      }
    } catch (err) {
      toast.error("Review submitted Failed!");
      console.log(err);
    }
  };

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
            <form
              onSubmit={handleSubmit(handelReview)}
              className="space-y-4 lg:space-y-6"
            >
              {/* rating star */}
              <div>
                <div
                  className="rating rating-lg rating-half text-lg"
                  onChange={(e) =>
                    setRating(Number((e.target as HTMLInputElement).value))
                  }
                >
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
                    value={0.5}
                  />
                  <input
                    type="radio"
                    name="rating-11"
                    className="mask mask-star-2 mask-half-2 bg-cyan-500"
                    aria-label="1 star"
                    value={1}
                  />
                  <input
                    type="radio"
                    name="rating-11"
                    className="mask mask-star-2 mask-half-1 bg-cyan-500"
                    aria-label="1.5 star"
                    value={1.5}
                    defaultChecked={rating == 1.5}
                  />
                  <input
                    type="radio"
                    name="rating-11"
                    className="mask mask-star-2 mask-half-2 bg-cyan-500"
                    aria-label="2 star"
                    value={2}
                  />
                  <input
                    type="radio"
                    name="rating-11"
                    className="mask mask-star-2 mask-half-1 bg-cyan-500"
                    aria-label="2.5 star"
                    value={2.5}
                  />
                  <input
                    type="radio"
                    name="rating-11"
                    className="mask mask-star-2 mask-half-2 bg-cyan-500"
                    aria-label="3 star"
                    value={3}
                  />
                  <input
                    type="radio"
                    name="rating-11"
                    className="mask mask-star-2 mask-half-1 bg-cyan-500"
                    aria-label="3.5 star"
                    value={3.5}
                  />
                  <input
                    type="radio"
                    name="rating-11"
                    className="mask mask-star-2 mask-half-2 bg-cyan-500"
                    aria-label="4 star"
                    value={4}
                  />
                  <input
                    type="radio"
                    name="rating-11"
                    className="mask mask-star-2 mask-half-1 bg-cyan-500"
                    aria-label="4.5 star"
                    value={4.5}
                  />
                  <input
                    type="radio"
                    name="rating-11"
                    className="mask mask-star-2 mask-half-2 bg-cyan-500"
                    aria-label="5 star"
                    value={5}
                  />
                </div>
              </div>
              {/* text input */}
              <div>
                <textarea
                  {...register("comment")}
                  placeholder="Write your feedback..."
                  className="bg-brand-primary w-full border-1 border-cyan-500 rounded-lg h-28 lg:h-32 focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
                ></textarea>
                <p className="text-red-500 text-sm ml-1">
                  {errors?.comment?.message}
                </p>
              </div>
              <button
                type="submit"
                className="text-sky-50 bg-cyan-600 px-4 py-1.5 rounded-md hover:bg-cyan-500 transition-colors duration-300 tracking-wide cursor-pointer"
              >
                {isLoading ? (
                  <span className="loading loading-spinner text-sky-50 loading-sm mx-13"></span>
                ) : (
                  <span> Submit Review</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ReviewsForm;
