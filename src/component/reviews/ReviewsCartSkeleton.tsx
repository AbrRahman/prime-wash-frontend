const ReviewCartSkeleton = () => {
  return (
    <>
      <div className="bg-brand-secondary p-6 rounded-lg shadow-lg space-y-2 animate-pulse">
        {/* star rating */}
        <div className="flex gap-1.5 ">
          {[...Array(5).keys()].map((_, idx) => (
            <div
              key={idx}
              className="w-5 h-5 rounded-full bg-brand-primary"
            ></div>
          ))}
        </div>
        {/* comment */}
        <div className="h-4 w-full bg-brand-primary rounded"></div>
        <div className="flex gap-3 items-center">
          {/* user image */}
          <div className="w-10 h-10 rounded-full bg-brand-primary"></div>
          {/* user name */}
          <div className="h-4 w-24 rounded bg-brand-primary"></div>
        </div>
      </div>
    </>
  );
};

export default ReviewCartSkeleton;
