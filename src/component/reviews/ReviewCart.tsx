import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
type TRatingProps = {
  value: number;
  outOf?: number;
};
import userImag from "../../assets/images/member1.png";

const ReviewCart = () => {
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
      <div className="bg-brand-secondary p-6 rounded-lg shadow-lg space-y-2">
        <Rating value={2.5} />
        <p className="text-slate-400 text-lg font-semibold  tracking-wide">
          Good overall wash. Took a bit longer than expected but the results
          were satisfying
        </p>
        <div className="flex gap-3">
          <img
            src={userImag}
            alt="user image"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-sky-50 text-base font-bold mt-1">Sophia M.</h1>
        </div>
      </div>
    </>
  );
};

export default ReviewCart;
